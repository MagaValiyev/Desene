import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import PhoneStatusBar from '../components/PhoneStatusBar';
import ProgressTrack from '../components/ProgressTrack';
import {onboarding, onboardingBullets} from '../constants/problemData';
import {
  colors,
  eyebrowSpacing,
  inkAlpha,
  onDark,
  radius,
  shadow,
  weight,
} from '../constants/theme';

const AVATAR_COLORS = [colors.magenta, colors.blue, colors.mint];

function OnboardingScreen() {
  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.brandRow}>
          <View style={styles.logo}>
            <View style={styles.logoMagenta} />
            <View style={styles.logoBlue} />
            <View style={styles.logoInk} />
          </View>
          <Text style={styles.brand}>{onboarding.brand}</Text>
        </View>

        <View style={styles.stage}>
          <View style={styles.problemCard}>
            <View style={styles.thumbnail}>
              <Text style={styles.thumbnailLabel}>{'görsel\nyer tutucu'}</Text>
            </View>
            <Text style={styles.problemTitle}>
              {onboarding.problemCard.title}
            </Text>
            <View style={styles.problemProgress}>
              <View style={styles.problemTrack}>
                <ProgressTrack
                  segments={[
                    {
                      share: onboarding.problemCard.progress,
                      color: colors.magenta,
                    },
                  ]}
                  height={6}
                />
              </View>
              <Text style={styles.problemPercent}>
                %{onboarding.problemCard.progress}
              </Text>
            </View>
          </View>

          <View style={styles.missionCard}>
            <Text style={styles.missionEyebrow}>
              {onboarding.missionCard.eyebrow}
            </Text>
            <Text style={styles.missionTitle}>
              {onboarding.missionCard.title}
            </Text>
            <Text style={styles.missionAmount}>
              {onboarding.missionCard.amount}
            </Text>
            <Text style={styles.missionMeta}>
              {onboarding.missionCard.meta}
            </Text>
            <View style={styles.missionAvatars}>
              {AVATAR_COLORS.map((color, index) => (
                <View
                  key={color}
                  style={[
                    styles.missionAvatar,
                    {backgroundColor: color},
                    index > 0 && styles.missionAvatarOverlap,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.headline}>{onboarding.headline}</Text>
        <Text style={styles.body}>{onboarding.body}</Text>

        <View style={styles.bullets}>
          {onboardingBullets.map(bullet => (
            <View key={bullet.id} style={styles.bullet}>
              <View style={[styles.bulletDot, {backgroundColor: bullet.color}]} />
              <Text style={styles.bulletLabel}>{bullet.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable accessibilityRole="button" style={styles.cta}>
          <Text style={styles.ctaLabel}>{onboarding.cta}</Text>
        </Pressable>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.page,
    flex: 1,
  },
  content: {
    paddingBottom: 130,
    paddingHorizontal: 30,
    paddingTop: 46,
  },
  brandRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  logo: {
    height: 34,
    width: 34,
  },
  logoMagenta: {
    backgroundColor: colors.magenta,
    borderRadius: 8,
    height: 15,
    left: 0,
    position: 'absolute',
    top: 9,
    width: 15,
  },
  logoBlue: {
    backgroundColor: colors.blue,
    borderRadius: 6,
    height: 11,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 11,
  },
  logoInk: {
    backgroundColor: colors.ink,
    borderRadius: 5,
    bottom: 0,
    height: 9,
    position: 'absolute',
    right: 3,
    width: 9,
  },
  brand: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: weight.black,
    letterSpacing: -0.4,
  },

  stage: {
    flexDirection: 'row',
    height: 300,
    marginTop: 38,
  },
  problemCard: {
    backgroundColor: colors.card,
    borderRadius: 26,
    height: 238,
    left: 16,
    padding: 18,
    position: 'absolute',
    top: 22,
    transform: [{rotate: '-7deg'}],
    width: 196,
    ...shadow.card,
  },
  thumbnail: {
    alignItems: 'center',
    backgroundColor: colors.pinkSurface,
    borderRadius: 16,
    height: 118,
    justifyContent: 'center',
  },
  thumbnailLabel: {
    color: inkAlpha.ghost,
    fontSize: 10,
    fontWeight: weight.medium,
    lineHeight: 14,
    textAlign: 'center',
  },
  problemTitle: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: weight.bold,
    lineHeight: 17.5,
    marginTop: 14,
  },
  problemProgress: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    marginTop: 10,
  },
  problemTrack: {
    flex: 1,
  },
  problemPercent: {
    color: colors.magenta,
    fontSize: 9,
    fontWeight: weight.bold,
  },

  missionCard: {
    backgroundColor: colors.ink,
    borderRadius: radius.xl,
    height: 206,
    padding: 18,
    position: 'absolute',
    right: 6,
    top: 60,
    transform: [{rotate: '6deg'}],
    width: 172,
    ...shadow.card,
  },
  missionEyebrow: {
    color: colors.mint,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },
  missionTitle: {
    color: onDark.primary,
    fontSize: 14,
    fontWeight: weight.bold,
    lineHeight: 19,
    marginTop: 12,
  },
  missionAmount: {
    color: onDark.primary,
    fontSize: 24,
    fontWeight: weight.black,
    marginTop: 16,
  },
  missionMeta: {
    color: onDark.soft,
    fontSize: 10,
    fontWeight: weight.regular,
    marginTop: 6,
  },
  missionAvatars: {
    flexDirection: 'row',
    marginTop: 18,
  },
  missionAvatar: {
    borderColor: colors.ink,
    borderRadius: 13,
    borderWidth: 2,
    height: 26,
    width: 26,
  },
  missionAvatarOverlap: {
    marginLeft: -8,
  },

  headline: {
    color: colors.ink,
    fontSize: 30,
    fontWeight: weight.black,
    letterSpacing: -0.9,
    lineHeight: 34.5,
    marginTop: 34,
  },
  body: {
    color: inkAlpha.medium,
    fontSize: 14,
    fontWeight: weight.regular,
    lineHeight: 21.5,
    marginTop: 14,
  },
  bullets: {
    gap: 10,
    marginTop: 26,
  },
  bullet: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    flexDirection: 'row',
    gap: 11,
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  bulletDot: {
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  bulletLabel: {
    color: colors.ink,
    fontSize: 12.5,
    fontWeight: weight.medium,
  },

  footer: {
    backgroundColor: colors.page,
    bottom: 0,
    left: 0,
    paddingBottom: 26,
    paddingHorizontal: 26,
    paddingTop: 14,
    position: 'absolute',
    right: 0,
  },
  cta: {
    alignItems: 'center',
    backgroundColor: colors.ink,
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
  },
  ctaLabel: {
    color: onDark.primary,
    fontSize: 14.5,
    fontWeight: weight.bold,
  },
  homeIndicator: {
    alignSelf: 'center',
    backgroundColor: 'rgba(22,21,15,.2)',
    borderRadius: 3,
    height: 5,
    marginTop: 14,
    width: 132,
  },
});

export default OnboardingScreen;
