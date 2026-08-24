import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import PhoneStatusBar from '../components/PhoneStatusBar';
import ProgressRing from '../components/ProgressRing';
import {
  problemDetail,
  processSteps,
  watchingInstitutions,
} from '../constants/problemData';
import {
  colors,
  eyebrowSpacing,
  inkAlpha,
  onDark,
  radius,
  spacing,
  weight,
} from '../constants/theme';
import type {ProcessStep} from '../types/problem';

function StepDot({state}: {state: ProcessStep['state']}) {
  if (state === 'done') {
    return <View style={[styles.stepDot, styles.stepDotDone]} />;
  }
  if (state === 'current') {
    return (
      <View style={styles.stepDotHalo}>
        <View style={[styles.stepDot, styles.stepDotCurrent]} />
      </View>
    );
  }
  return <View style={[styles.stepDot, styles.stepDotUpcoming]} />;
}

function ProblemDetailScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <PhoneStatusBar tone="light" />

        <View style={styles.heroBar}>
          <View style={styles.heroButton}>
            <Text style={styles.heroGlyph}>←</Text>
          </View>
          <View style={styles.heroActions}>
            <View style={styles.heroButton}>
              <Text style={styles.heroGlyph}>⌯</Text>
            </View>
            <View style={styles.heroButton}>
              <Text style={styles.heroGlyph}>⋯</Text>
            </View>
          </View>
        </View>

        <View style={styles.heroBody}>
          <Text style={styles.category}>{problemDetail.category}</Text>
          <Text style={styles.heroTitle}>{problemDetail.title}</Text>

          <View style={styles.heroMetrics}>
            <ProgressRing
              percent={problemDetail.percent}
              size={96}
              thickness={9}
              color={colors.magenta}
              trackColor={onDark.track}
              centerColor={colors.ink}>
              <Text style={styles.ringPercent}>%{problemDetail.percent}</Text>
              <Text style={styles.ringLabel}>{problemDetail.ringLabel}</Text>
            </ProgressRing>

            <View style={styles.heroCopy}>
              <Text style={styles.supportCount}>
                {problemDetail.supportLabel}
              </Text>
              <Text style={styles.supportNote}>
                {problemDetail.remainingPrefix}
                <Text style={styles.supportNoteStrong}>
                  {problemDetail.remainingStrong}
                </Text>
                {problemDetail.remainingSuffix}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.eyebrow}>{problemDetail.processLabel}</Text>
          <View style={styles.steps}>
            {processSteps.map((step, index) => (
              <View key={step.id} style={styles.stepRow}>
                <View style={styles.stepRail}>
                  <StepDot state={step.state} />
                  {index < processSteps.length - 1 && (
                    <View
                      style={[
                        styles.stepLine,
                        step.state === 'done' && styles.stepLineDone,
                      ]}
                    />
                  )}
                </View>
                <View style={styles.stepCopy}>
                  <Text
                    style={[
                      styles.stepTitle,
                      step.state === 'upcoming' && styles.stepTitleUpcoming,
                    ]}>
                    {step.title}
                  </Text>
                  {step.meta && (
                    <Text
                      style={[
                        styles.stepMeta,
                        step.state === 'current' && styles.stepMetaCurrent,
                      ]}>
                      {step.meta}
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={styles.eyebrow}>
              {problemDetail.institutionsLabel}
            </Text>
            <Text style={styles.institutionCount}>
              {problemDetail.institutionCount}
            </Text>
          </View>
          <View style={styles.institutions}>
            {watchingInstitutions.map(institution => (
              <View key={institution.id} style={styles.institution}>
                <Text style={styles.institutionName}>{institution.name}</Text>
                <Text style={styles.institutionStatus}>
                  {institution.status}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable accessibilityRole="button" style={styles.primaryCta}>
          <Text style={styles.primaryCtaGlyph}>▲</Text>
          <Text style={styles.primaryCtaLabel}>{problemDetail.primaryCta}</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Takibe al"
          style={styles.likeButton}>
          <Text style={styles.likeGlyph}>♡</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.page,
    flex: 1,
  },

  hero: {
    backgroundColor: colors.ink,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    paddingBottom: 26,
  },
  heroBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.screenX,
    paddingTop: 22,
  },
  heroActions: {
    flexDirection: 'row',
    gap: 8,
  },
  heroButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.12)',
    borderRadius: 19,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  heroGlyph: {
    color: onDark.primary,
    fontSize: 14,
  },
  heroBody: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  category: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(224,25,142,.2)',
    borderRadius: 12,
    color: colors.magentaSoft,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing * 0.85,
    overflow: 'hidden',
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  heroTitle: {
    color: onDark.primary,
    fontSize: 22,
    fontWeight: weight.black,
    letterSpacing: -0.6,
    lineHeight: 28,
    marginTop: 14,
  },
  heroMetrics: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    marginTop: 20,
  },
  ringPercent: {
    color: onDark.primary,
    fontSize: 20,
    fontWeight: weight.black,
  },
  ringLabel: {
    color: 'rgba(255,255,255,.45)',
    fontSize: 8,
    fontWeight: weight.medium,
    letterSpacing: eyebrowSpacing * 0.5,
    marginTop: 3,
  },
  heroCopy: {
    flex: 1,
  },
  supportCount: {
    color: onDark.primary,
    fontSize: 18,
    fontWeight: weight.black,
  },
  supportNote: {
    color: onDark.soft,
    fontSize: 11.5,
    fontWeight: weight.regular,
    lineHeight: 17.5,
    marginTop: 6,
  },
  supportNoteStrong: {
    color: onDark.primary,
    fontWeight: weight.bold,
  },

  content: {
    gap: spacing.gap,
    paddingBottom: 120,
    paddingHorizontal: spacing.screenX,
    paddingTop: 18,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: 18,
  },
  cardHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eyebrow: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },

  steps: {
    marginTop: 14,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 12,
  },
  stepRail: {
    alignItems: 'center',
    width: 22,
  },
  stepDot: {
    borderRadius: 7,
    height: 14,
    width: 14,
  },
  stepDotDone: {
    backgroundColor: colors.ink,
  },
  stepDotHalo: {
    alignItems: 'center',
    backgroundColor: 'rgba(224,25,142,.16)',
    borderRadius: 11,
    height: 22,
    justifyContent: 'center',
    marginVertical: -4,
    width: 22,
  },
  stepDotCurrent: {
    backgroundColor: colors.magenta,
  },
  stepDotUpcoming: {
    borderColor: colors.dotOutline,
    borderWidth: 2,
  },
  stepLine: {
    backgroundColor: colors.border,
    flex: 1,
    width: 2,
  },
  stepLineDone: {
    backgroundColor: colors.ink,
  },
  stepCopy: {
    flex: 1,
    paddingBottom: 16,
  },
  stepTitle: {
    color: colors.ink,
    fontSize: 12.5,
    fontWeight: weight.bold,
  },
  stepTitleUpcoming: {
    color: inkAlpha.ghost,
  },
  stepMeta: {
    color: inkAlpha.muted,
    fontSize: 10.5,
    fontWeight: weight.regular,
    marginTop: 4,
  },
  stepMetaCurrent: {
    color: colors.magenta,
  },

  institutionCount: {
    color: inkAlpha.ghost,
    fontSize: 10.5,
    fontWeight: weight.medium,
  },
  institutions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  institution: {
    backgroundColor: colors.page,
    borderRadius: radius.sm,
    flex: 1,
    padding: 11,
  },
  institutionName: {
    color: colors.ink,
    fontSize: 10,
    fontWeight: weight.bold,
    textAlign: 'center',
  },
  institutionStatus: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.regular,
    marginTop: 2,
    textAlign: 'center',
  },

  footer: {
    backgroundColor: colors.page,
    bottom: 0,
    flexDirection: 'row',
    gap: 10,
    left: 0,
    padding: 22,
    position: 'absolute',
    right: 0,
  },
  primaryCta: {
    alignItems: 'center',
    backgroundColor: colors.ink,
    borderRadius: 28,
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    height: 56,
    justifyContent: 'center',
  },
  primaryCtaGlyph: {
    color: onDark.primary,
    fontSize: 15,
  },
  primaryCtaLabel: {
    color: onDark.primary,
    fontSize: 14.5,
    fontWeight: weight.bold,
  },
  likeButton: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  likeGlyph: {
    color: colors.magenta,
    fontSize: 17,
  },
});

export default ProblemDetailScreen;
