import {ScrollView, StyleSheet, Text, View} from 'react-native';

import PhoneStatusBar from '../components/PhoneStatusBar';
import ProgressRing from '../components/ProgressRing';
import {journeyStages, journeyThreshold} from '../constants/missionData';
import {
  colors,
  eyebrowSpacing,
  inkAlpha,
  onDark,
  radius,
  weight,
} from '../constants/theme';
import type {JourneyStage} from '../types/mission';

const RAIL_FILL = 0.44;

const AVATAR_COLORS = [
  colors.pinkSurface,
  colors.blueSurface,
  colors.greenSurface,
];

function StageNode({stage}: {stage: JourneyStage}) {
  if (stage.state === 'current') {
    return (
      <View style={styles.nodeHalo}>
        <View style={[styles.node, styles.nodeCurrent]}>
          <Text style={styles.nodeLabelOnDark}>{stage.index}</Text>
        </View>
      </View>
    );
  }

  if (stage.state === 'done') {
    return (
      <View style={[styles.node, styles.nodeDone, styles.nodeAbsolute]}>
        <Text style={styles.nodeLabelOnDark}>✓</Text>
      </View>
    );
  }

  return (
    <View style={[styles.node, styles.nodeUpcoming, styles.nodeAbsolute]}>
      <Text style={styles.nodeLabelUpcoming}>{stage.index}</Text>
    </View>
  );
}

function ThresholdStageCard() {
  return (
    <View style={styles.thresholdCard}>
      <View style={styles.thresholdHead}>
        <Text style={styles.thresholdTitle}>{journeyThreshold.label}</Text>
        <Text style={styles.thresholdState}>{journeyThreshold.stateLabel}</Text>
      </View>

      <View style={styles.thresholdBody}>
        <ProgressRing
          percent={journeyThreshold.percent}
          size={66}
          thickness={7}
          color={colors.magenta}
          trackColor={onDark.track}
          centerColor={colors.ink}>
          <Text style={styles.ringLabel}>%{journeyThreshold.percent}</Text>
        </ProgressRing>

        <View style={styles.thresholdCopy}>
          <Text style={styles.thresholdCount}>
            {journeyThreshold.countLabel}
          </Text>
          <Text style={styles.thresholdNote}>{journeyThreshold.note}</Text>
        </View>
      </View>

      <View style={styles.thresholdCta}>
        <Text style={styles.thresholdCtaGlyph}>▲</Text>
        <Text style={styles.thresholdCtaLabel}>{journeyThreshold.ctaLabel}</Text>
      </View>
    </View>
  );
}

function MissionJourneyScreen() {
  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backGlyph}>←</Text>
        </View>
        <Text style={styles.headerTitle}>Problemin yolculuğu</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.timeline}>
          <View style={styles.rail}>
            <View style={styles.railFill}>
              <View style={styles.railFillInk} />
              <View style={styles.railFillMagenta} />
            </View>
            <View style={styles.railRest} />
          </View>

          {journeyStages.map((stage, index) => (
            <View
              key={stage.id}
              style={[
                styles.stage,
                index < journeyStages.length - 1 && styles.stageSpacing,
              ]}>
              <StageNode stage={stage} />

              {stage.state === 'current' ? (
                <ThresholdStageCard />
              ) : (
                <View
                  style={[
                    styles.stageCard,
                    stage.state === 'upcoming' && styles.stageCardUpcoming,
                  ]}>
                  <Text style={styles.stageTitle}>{stage.title}</Text>
                  {stage.description && (
                    <Text style={styles.stageDescription}>
                      {stage.description}
                    </Text>
                  )}

                  {stage.footnote && (
                    <View style={styles.footnoteRow}>
                      {AVATAR_COLORS.map((color, avatarIndex) => (
                        <View
                          key={color}
                          style={[
                            styles.avatar,
                            {backgroundColor: color},
                            avatarIndex > 0 && styles.avatarOverlap,
                          ]}
                        />
                      ))}
                      <Text style={styles.footnote}>{stage.footnote}</Text>
                    </View>
                  )}

                  {stage.tags && (
                    <View style={styles.tagRow}>
                      {stage.tags.map(tag => (
                        <Text key={tag} style={styles.tag}>
                          {tag}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.page,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  backButton: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 19,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  backGlyph: {
    color: colors.ink,
    fontSize: 15,
  },
  headerTitle: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: weight.black,
    letterSpacing: -0.3,
  },

  scrollContent: {
    paddingBottom: 32,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  timeline: {
    paddingLeft: 36,
    position: 'relative',
  },
  rail: {
    backgroundColor: colors.border,
    borderRadius: 2,
    bottom: 14,
    left: 13,
    position: 'absolute',
    top: 14,
    width: 3,
  },
  railFill: {
    flex: RAIL_FILL,
  },
  railFillInk: {
    backgroundColor: colors.ink,
    flex: 1,
  },
  railFillMagenta: {
    backgroundColor: colors.magenta,
    flex: 1,
  },
  railRest: {
    flex: 1 - RAIL_FILL,
  },

  stage: {
    position: 'relative',
  },
  stageSpacing: {
    marginBottom: 12,
  },
  node: {
    alignItems: 'center',
    borderRadius: 15,
    height: 29,
    justifyContent: 'center',
    width: 29,
  },
  nodeAbsolute: {
    left: -36,
    position: 'absolute',
    top: 16,
  },
  nodeHalo: {
    alignItems: 'center',
    backgroundColor: 'rgba(224,25,142,.15)',
    borderRadius: 20,
    height: 39,
    justifyContent: 'center',
    left: -41,
    position: 'absolute',
    top: 11,
    width: 39,
  },
  nodeDone: {
    backgroundColor: colors.ink,
  },
  nodeCurrent: {
    backgroundColor: colors.magenta,
  },
  nodeUpcoming: {
    backgroundColor: colors.page,
    borderColor: colors.borderStrong,
    borderWidth: 2,
  },
  nodeLabelOnDark: {
    color: onDark.primary,
    fontSize: 10.5,
    fontWeight: weight.black,
  },
  nodeLabelUpcoming: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.black,
  },

  stageCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: 16,
  },
  stageCardUpcoming: {
    opacity: 0.72,
  },
  stageTitle: {
    color: colors.ink,
    fontSize: 11,
    fontWeight: weight.bold,
  },
  stageDescription: {
    color: inkAlpha.soft,
    fontSize: 11,
    fontWeight: weight.regular,
    lineHeight: 16.5,
    marginTop: 7,
  },
  footnoteRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 11,
  },
  avatar: {
    borderColor: colors.card,
    borderRadius: 11,
    borderWidth: 2,
    height: 22,
    width: 22,
  },
  avatarOverlap: {
    marginLeft: -8,
  },
  footnote: {
    color: inkAlpha.muted,
    fontSize: 10,
    fontWeight: weight.medium,
    marginLeft: 5,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 11,
  },
  tag: {
    backgroundColor: colors.page,
    borderRadius: radius.chip,
    color: inkAlpha.soft,
    fontSize: 9,
    fontWeight: weight.bold,
    overflow: 'hidden',
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  thresholdCard: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    padding: 18,
  },
  thresholdHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thresholdTitle: {
    color: onDark.primary,
    fontSize: 11,
    fontWeight: weight.bold,
  },
  thresholdState: {
    color: colors.magentaSoft,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing * 0.8,
  },
  thresholdBody: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginTop: 14,
  },
  ringLabel: {
    color: onDark.primary,
    fontSize: 14,
    fontWeight: weight.black,
  },
  thresholdCopy: {
    flex: 1,
  },
  thresholdCount: {
    color: onDark.primary,
    fontSize: 15,
    fontWeight: weight.black,
  },
  thresholdNote: {
    color: onDark.soft,
    fontSize: 10.5,
    fontWeight: weight.regular,
    lineHeight: 15,
    marginTop: 5,
  },
  thresholdCta: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 23,
    flexDirection: 'row',
    gap: 8,
    height: 46,
    justifyContent: 'center',
    marginTop: 14,
  },
  thresholdCtaGlyph: {
    color: colors.ink,
    fontSize: 14,
  },
  thresholdCtaLabel: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: weight.bold,
  },
});

export default MissionJourneyScreen;
