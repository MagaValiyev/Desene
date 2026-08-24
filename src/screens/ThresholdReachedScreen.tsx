import {Pressable, StyleSheet, Text, View} from 'react-native';

import PhoneStatusBar from '../components/PhoneStatusBar';
import {nextSteps, thresholdReached} from '../constants/missionData';
import {
  colors,
  eyebrowSpacing,
  inkAlpha,
  onDark,
  radius,
  weight,
} from '../constants/theme';

function ThresholdReachedScreen() {
  return (
    <View style={styles.screen}>
      <PhoneStatusBar tone="light" />

      <View style={styles.hero}>
        <View style={styles.ringOuter}>
          <View style={styles.ringMiddle} />
          <View style={styles.ringCore}>
            <Text style={styles.ringPercent}>
              {thresholdReached.percentLabel}
            </Text>
            <Text style={styles.ringLabel}>{thresholdReached.ringLabel}</Text>
          </View>
        </View>

        <Text style={styles.headline}>{thresholdReached.headline}</Text>
        <Text style={styles.body}>{thresholdReached.body}</Text>
      </View>

      <View style={styles.sheet}>
        <View style={styles.sheetCard}>
          <Text style={styles.eyebrow}>SIRADA NE VAR</Text>

          <View style={styles.stepList}>
            {nextSteps.map(step => (
              <View key={step.id} style={styles.stepRow}>
                <View
                  style={[
                    styles.stepBadge,
                    {backgroundColor: step.badgeBackground},
                  ]}>
                  <Text style={[styles.stepBadgeLabel, {color: step.badgeColor}]}>
                    {step.badge}
                  </Text>
                </View>
                <Text style={styles.stepText}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  {' — '}
                  {step.description}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <Pressable accessibilityRole="button" style={styles.primaryCta}>
              <Text style={styles.primaryCtaLabel}>
                {thresholdReached.primaryCta}
              </Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Paylaş"
              style={styles.secondaryCta}>
              <Text style={styles.secondaryCtaGlyph}>⌯</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.magenta,
    flex: 1,
  },
  hero: {
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 52,
  },
  ringOuter: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.16)',
    borderRadius: 75,
    height: 150,
    justifyContent: 'center',
    width: 150,
  },
  ringMiddle: {
    backgroundColor: onDark.hairline,
    borderRadius: 61,
    bottom: 14,
    left: 14,
    position: 'absolute',
    right: 14,
    top: 14,
  },
  ringCore: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 47,
    bottom: 28,
    justifyContent: 'center',
    left: 28,
    position: 'absolute',
    right: 28,
    top: 28,
  },
  ringPercent: {
    color: colors.magenta,
    fontSize: 30,
    fontWeight: weight.black,
  },
  ringLabel: {
    color: colors.magenta,
    fontSize: 8.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
    marginTop: 4,
  },
  headline: {
    color: onDark.primary,
    fontSize: 27,
    fontWeight: weight.black,
    letterSpacing: -0.7,
    lineHeight: 32,
    marginTop: 32,
    textAlign: 'center',
  },
  body: {
    color: onDark.secondary,
    fontSize: 13.5,
    fontWeight: weight.regular,
    lineHeight: 21.5,
    marginTop: 14,
    textAlign: 'center',
  },

  sheet: {
    bottom: 28,
    left: 20,
    position: 'absolute',
    right: 20,
  },
  sheetCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xxl,
    padding: 20,
  },
  eyebrow: {
    color: inkAlpha.faint,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },
  stepList: {
    gap: 12,
    marginTop: 14,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 11,
  },
  stepBadge: {
    alignItems: 'center',
    borderRadius: 8,
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  stepBadgeLabel: {
    fontSize: 9.5,
    fontWeight: weight.black,
  },
  stepText: {
    color: inkAlpha.strong,
    flex: 1,
    fontSize: 11.5,
    fontWeight: weight.regular,
    lineHeight: 17.5,
  },
  stepTitle: {
    color: colors.ink,
    fontWeight: weight.bold,
  },

  actions: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 18,
  },
  primaryCta: {
    alignItems: 'center',
    backgroundColor: colors.ink,
    borderRadius: 26,
    flex: 1,
    height: 52,
    justifyContent: 'center',
  },
  primaryCtaLabel: {
    color: onDark.primary,
    fontSize: 13.5,
    fontWeight: weight.bold,
  },
  secondaryCta: {
    alignItems: 'center',
    backgroundColor: colors.page,
    borderRadius: 26,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  secondaryCtaGlyph: {
    color: inkAlpha.medium,
    fontSize: 15,
  },
});

export default ThresholdReachedScreen;
