import {useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import Badge from '../components/Badge';
import BottomTabBar from '../components/BottomTabBar';
import PhoneStatusBar from '../components/PhoneStatusBar';
import ProgressTrack from '../components/ProgressTrack';
import {
  discoverFilters,
  discoverMissions,
  thresholdCandidate,
} from '../constants/missionData';
import {
  colors,
  eyebrowSpacing,
  inkAlpha,
  onDark,
  radius,
  spacing,
  weight,
} from '../constants/theme';
import type {DiscoverMission} from '../types/mission';

type Filter = (typeof discoverFilters)[number];

const TONE_BY_FILTER: Record<Filter, DiscoverMission['badgeTone'] | null> = {
  Toplumsal: 'approved',
  Ticari: 'commercial',
  Yakında: null,
};

function MissionCard({mission}: {mission: DiscoverMission}) {
  const approved = mission.badgeTone === 'approved';

  return (
    <View style={styles.card}>
      <View
        style={[styles.thumbnail, {backgroundColor: mission.thumbnailColor}]}>
        <Text style={styles.thumbnailLabel}>{'görsel\nyer tutucu'}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardHead}>
          <Badge
            label={mission.badge}
            size="sm"
            color={approved ? colors.green : colors.sandText}
            background={approved ? colors.greenSurface : colors.sandSurface}
          />
          <Text style={styles.cardCategory}>{mission.category}</Text>
        </View>
        <Text style={styles.cardTitle}>{mission.title}</Text>
        <View style={styles.cardTrack}>
          <ProgressTrack
            segments={[
              {share: mission.progress, color: mission.progressColor},
            ]}
          />
        </View>
        {(mission.amountLabel || mission.creatorsLabel) && (
          <View style={styles.cardFooter}>
            <Text style={styles.cardAmount}>{mission.amountLabel}</Text>
            <Text style={styles.cardCreators}>{mission.creatorsLabel}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

/** 06 · Misyon keşfet — onaylı misyonlar ve eşiğe en yakın problem. */
function MissionDiscoverScreen() {
  const [filter, setFilter] = useState<Filter>('Toplumsal');

  const visibleMissions = useMemo(() => {
    const tone = TONE_BY_FILTER[filter];
    return tone ? discoverMissions.filter(m => m.badgeTone === tone) : [];
  }, [filter]);

  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <View style={styles.head}>
        <Text style={styles.title}>Misyonları keşfet</Text>

        <View style={styles.search}>
          <Text style={styles.searchGlyph}>⌕</Text>
          <Text style={styles.searchPlaceholder}>
            Konu, kurum veya alan ara…
          </Text>
        </View>

        <View style={styles.segmented}>
          {discoverFilters.map(option => {
            const selected = option === filter;
            return (
              <Pressable
                key={option}
                accessibilityRole="tab"
                accessibilityState={{selected}}
                onPress={() => setFilter(option)}
                style={[styles.segment, selected && styles.segmentSelected]}>
                <Text
                  style={[
                    styles.segmentLabel,
                    selected && styles.segmentLabelSelected,
                  ]}>
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}>
        {visibleMissions.slice(0, 2).map(mission => (
          <MissionCard key={mission.id} mission={mission} />
        ))}

        <View style={styles.spotlight}>
          <View style={styles.spotlightHead}>
            <Text style={styles.spotlightEyebrow}>EŞİĞE EN YAKIN PROBLEM</Text>
            <Text style={styles.spotlightPercent}>
              %{thresholdCandidate.progress}
            </Text>
          </View>
          <Text style={styles.spotlightTitle}>{thresholdCandidate.title}</Text>
          <View style={styles.spotlightTrack}>
            <ProgressTrack
              segments={[
                {share: thresholdCandidate.progress, color: colors.magenta},
              ]}
              trackColor={onDark.track}
            />
          </View>
          <Pressable accessibilityRole="button" style={styles.spotlightCta}>
            <Text style={styles.spotlightCtaLabel}>
              {thresholdCandidate.ctaLabel}
            </Text>
          </Pressable>
        </View>

        {visibleMissions.slice(2).map(mission => (
          <MissionCard key={mission.id} mission={mission} />
        ))}

        {visibleMissions.length === 0 && (
          <Text style={styles.emptyState}>
            Bu sekmede henüz açılmış misyon yok — eşiği geçen problemler burada
            listelenecek.
          </Text>
        )}
      </ScrollView>

      <BottomTabBar active="search" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.page,
    flex: 1,
  },
  head: {
    paddingHorizontal: spacing.screenX,
    paddingTop: 24,
  },
  title: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: weight.black,
    letterSpacing: -0.6,
  },
  search: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 23,
    flexDirection: 'row',
    gap: 10,
    height: 46,
    marginTop: 14,
    paddingHorizontal: 16,
  },
  searchGlyph: {
    color: inkAlpha.ghost,
    fontSize: 14,
  },
  searchPlaceholder: {
    color: inkAlpha.ghost,
    fontSize: 12.5,
    fontWeight: weight.regular,
  },
  segmented: {
    backgroundColor: colors.border,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 6,
    marginTop: 14,
    padding: 4,
  },
  segment: {
    alignItems: 'center',
    borderRadius: 17,
    flex: 1,
    height: 34,
    justifyContent: 'center',
  },
  segmentSelected: {
    backgroundColor: colors.ink,
  },
  segmentLabel: {
    color: inkAlpha.soft,
    fontSize: 11.5,
    fontWeight: weight.medium,
  },
  segmentLabelSelected: {
    color: onDark.primary,
    fontWeight: weight.bold,
  },

  list: {
    gap: 11,
    paddingBottom: 140,
    paddingHorizontal: spacing.screenX,
    paddingTop: 16,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    flexDirection: 'row',
    gap: 14,
    padding: 16,
  },
  thumbnail: {
    alignItems: 'center',
    borderRadius: radius.md,
    height: 88,
    justifyContent: 'center',
    width: 74,
  },
  thumbnailLabel: {
    color: inkAlpha.ghost,
    fontSize: 9,
    fontWeight: weight.medium,
    lineHeight: 12,
    textAlign: 'center',
  },
  cardBody: {
    flex: 1,
  },
  cardHead: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  cardCategory: {
    color: inkAlpha.faint,
    fontSize: 9.5,
    fontWeight: weight.medium,
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 13.5,
    fontWeight: weight.bold,
    lineHeight: 18,
    marginTop: 8,
  },
  cardTrack: {
    marginTop: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  cardAmount: {
    color: colors.ink,
    fontSize: 10,
    fontWeight: weight.black,
  },
  cardCreators: {
    color: inkAlpha.muted,
    fontSize: 10,
    fontWeight: weight.medium,
  },

  spotlight: {
    backgroundColor: colors.ink,
    borderRadius: radius.xl,
    padding: 18,
  },
  spotlightHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spotlightEyebrow: {
    color: onDark.soft,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },
  spotlightPercent: {
    color: colors.magenta,
    fontSize: 10,
    fontWeight: weight.black,
  },
  spotlightTitle: {
    color: onDark.primary,
    fontSize: 14.5,
    fontWeight: weight.bold,
    lineHeight: 19,
    marginTop: 10,
  },
  spotlightTrack: {
    marginTop: 12,
  },
  spotlightCta: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginTop: 12,
  },
  spotlightCtaLabel: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: weight.bold,
  },
  emptyState: {
    color: inkAlpha.muted,
    fontSize: 11.5,
    fontWeight: weight.regular,
    lineHeight: 18,
    paddingHorizontal: 4,
    paddingTop: 4,
  },

});

export default MissionDiscoverScreen;
