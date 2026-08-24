import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import BottomTabBar from '../components/BottomTabBar';
import PhoneStatusBar from '../components/PhoneStatusBar';
import ProgressTrack from '../components/ProgressTrack';
import {race, raceItems} from '../constants/problemData';
import {
  colors,
  eyebrowSpacing,
  inkAlpha,
  onDark,
  radius,
  weight,
} from '../constants/theme';

function ThresholdRaceScreen() {
  return (
    <View style={styles.screen}>
      <PhoneStatusBar tone="light" />

      <View style={styles.head}>
        <Text style={styles.eyebrow}>{race.eyebrow}</Text>
        <Text style={styles.title}>{race.title}</Text>
        <Text style={styles.body}>{race.body}</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}>
        {raceItems.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={[styles.rank, item.leading && styles.rankLeading]}>
              {item.rank}
            </Text>

            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>

              <View style={styles.progressRow}>
                <View style={styles.progressTrack}>
                  <ProgressTrack
                    segments={[
                      {
                        share: item.progress,
                        color: item.leading ? colors.magenta : colors.ink,
                      },
                    ]}
                    height={9}
                  />
                </View>
                <Text style={styles.percent}>%{item.progress}</Text>
              </View>

              <View style={styles.metaRow}>
                <Text style={styles.meta}>{item.meta}</Text>
                {item.trend && (
                  <Text style={[styles.trend, {color: item.trendColor}]}>
                    {item.trend}
                  </Text>
                )}
              </View>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Destekle"
              style={[
                styles.supportButton,
                item.leading && styles.supportButtonLeading,
              ]}>
              <Text
                style={[
                  styles.supportGlyph,
                  item.leading && styles.supportGlyphLeading,
                ]}>
                ▲
              </Text>
            </Pressable>
          </View>
        ))}

        <View style={styles.clearedCard}>
          <View style={styles.clearedHead}>
            <Text style={styles.clearedEyebrow}>{race.clearedEyebrow}</Text>
            <Text style={styles.clearedCount}>{race.clearedCount}</Text>
          </View>
          <Text style={styles.clearedTitles}>{race.clearedTitles}</Text>
          <Text style={styles.clearedFootnote}>{race.clearedFootnote}</Text>
        </View>
      </ScrollView>

      <BottomTabBar active="home" composeTone="magenta" onDarkBackground />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.ink,
    flex: 1,
  },
  head: {
    paddingHorizontal: 24,
    paddingTop: 26,
  },
  eyebrow: {
    color: 'rgba(255,255,255,.45)',
    fontSize: 11.5,
    fontWeight: weight.regular,
  },
  title: {
    color: onDark.primary,
    fontSize: 26,
    fontWeight: weight.black,
    letterSpacing: -0.8,
    marginTop: 7,
  },
  body: {
    color: onDark.soft,
    fontSize: 12,
    fontWeight: weight.regular,
    lineHeight: 18,
    marginTop: 10,
  },

  list: {
    gap: 9,
    paddingBottom: 130,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    flexDirection: 'row',
    gap: 13,
    paddingHorizontal: 17,
    paddingVertical: 16,
  },
  rank: {
    color: colors.ink,
    fontSize: 26,
    fontWeight: weight.black,
    width: 30,
  },
  rankLeading: {
    color: colors.magenta,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 13.5,
    fontWeight: weight.bold,
    lineHeight: 18,
  },
  progressRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 9,
    marginTop: 10,
  },
  progressTrack: {
    flex: 1,
  },
  percent: {
    color: colors.ink,
    fontSize: 11,
    fontWeight: weight.black,
  },
  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  meta: {
    color: inkAlpha.muted,
    fontSize: 10,
    fontWeight: weight.medium,
  },
  trend: {
    fontSize: 10,
    fontWeight: weight.bold,
  },
  supportButton: {
    alignItems: 'center',
    backgroundColor: colors.page,
    borderRadius: 16,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  supportButtonLeading: {
    backgroundColor: colors.ink,
  },
  supportGlyph: {
    color: colors.ink,
    fontSize: 15,
  },
  supportGlyphLeading: {
    color: onDark.primary,
  },

  clearedCard: {
    backgroundColor: 'rgba(255,255,255,.08)',
    borderColor: 'rgba(255,255,255,.14)',
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingHorizontal: 17,
    paddingVertical: 16,
  },
  clearedHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearedEyebrow: {
    color: colors.mint,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },
  clearedCount: {
    color: onDark.soft,
    fontSize: 10,
    fontWeight: weight.medium,
  },
  clearedTitles: {
    color: onDark.primary,
    fontSize: 13.5,
    fontWeight: weight.bold,
    lineHeight: 18,
    marginTop: 11,
  },
  clearedFootnote: {
    color: 'rgba(255,255,255,.45)',
    fontSize: 10.5,
    fontWeight: weight.medium,
    marginTop: 12,
  },
});

export default ThresholdRaceScreen;
