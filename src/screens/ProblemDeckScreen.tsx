import {Pressable, StyleSheet, Text, View} from 'react-native';

import PhoneStatusBar from '../components/PhoneStatusBar';
import ProgressTrack from '../components/ProgressTrack';
import {deck} from '../constants/problemData';
import {
  colors,
  eyebrowSpacing,
  inkAlpha,
  onDark,
  shadow,
  weight,
} from '../constants/theme';

function ProblemDeckScreen() {
  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.meta}>{deck.meta}</Text>
        </View>
        <View style={styles.avatar} />
      </View>

      <View style={styles.stepper}>
        {Array.from({length: deck.total}).map((_, index) => {
          const seen = index < deck.current - 1;
          const active = index === deck.current - 1;
          return (
            <View
              key={index}
              style={[
                styles.step,
                seen && styles.stepSeen,
                active && styles.stepActive,
              ]}
            />
          );
        })}
      </View>

      <View style={styles.stage}>
        <View style={styles.cardBack} />
        <View style={styles.cardMiddle} />

        <View style={styles.card}>
          <View style={styles.thumbnail}>
            <Text style={styles.thumbnailLabel}>görsel yer tutucu</Text>
          </View>

          <View style={styles.cardMetaRow}>
            <Text style={styles.category}>{deck.category}</Text>
            <Text style={styles.author}>{deck.author}</Text>
          </View>

          <Text style={styles.headline}>{deck.headline}</Text>
          <Text style={styles.body}>{deck.body}</Text>

          <View style={styles.remainingBox}>
            <View style={styles.remainingHead}>
              <Text style={styles.remainingLabel}>{deck.remainingLabel}</Text>
              <Text style={styles.remainingValue}>{deck.remainingValue}</Text>
            </View>
            <View style={styles.remainingTrack}>
              <ProgressTrack
                segments={[{share: deck.progress, color: colors.magenta}]}
                height={8}
                trackColor={colors.border}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Geç"
          style={styles.circleButton}>
          <Text style={styles.skipGlyph}>✕</Text>
        </Pressable>

        <Pressable accessibilityRole="button" style={styles.primaryCta}>
          <Text style={styles.primaryCtaGlyph}>▲</Text>
          <Text style={styles.primaryCtaLabel}>{deck.primaryCta}</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Mikro katkı"
          style={styles.circleButton}>
          <Text style={styles.fundGlyph}>₺</Text>
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
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: weight.black,
    letterSpacing: -0.5,
  },
  meta: {
    color: inkAlpha.muted,
    fontSize: 11.5,
    fontWeight: weight.regular,
    marginTop: 6,
  },
  avatar: {
    backgroundColor: colors.avatar,
    borderRadius: 19,
    height: 38,
    width: 38,
  },

  stepper: {
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 24,
    paddingTop: 14,
  },
  step: {
    backgroundColor: colors.stepTrack,
    borderRadius: 2,
    flex: 1,
    height: 4,
  },
  stepSeen: {
    backgroundColor: colors.ink,
  },
  stepActive: {
    backgroundColor: colors.magenta,
  },

  stage: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 22,
  },
  cardBack: {
    backgroundColor: colors.deckBack,
    borderRadius: 30,
    bottom: 10,
    left: 14,
    position: 'absolute',
    right: 14,
    top: 16,
    transform: [{rotate: '2.5deg'}],
  },
  cardMiddle: {
    backgroundColor: colors.deckMiddle,
    borderRadius: 30,
    bottom: 18,
    left: 7,
    position: 'absolute',
    right: 7,
    top: 8,
    transform: [{rotate: '-1.5deg'}],
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 30,
    bottom: 26,
    left: 0,
    padding: 20,
    position: 'absolute',
    right: 0,
    top: 0,
    ...shadow.card,
  },
  thumbnail: {
    alignItems: 'center',
    backgroundColor: colors.pinkSurface,
    borderRadius: 22,
    height: 160,
    justifyContent: 'center',
  },
  thumbnailLabel: {
    color: inkAlpha.ghost,
    fontSize: 10,
    fontWeight: weight.medium,
  },
  cardMetaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  category: {
    backgroundColor: colors.page,
    borderRadius: 11,
    color: inkAlpha.medium,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing * 0.5,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  author: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.medium,
  },
  headline: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: weight.black,
    letterSpacing: -0.4,
    lineHeight: 24.5,
    marginTop: 12,
  },
  body: {
    color: inkAlpha.medium,
    fontSize: 12.5,
    fontWeight: weight.regular,
    lineHeight: 19.5,
    marginTop: 10,
  },
  remainingBox: {
    backgroundColor: colors.page,
    borderRadius: 18,
    marginTop: 'auto',
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  remainingHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remainingLabel: {
    color: inkAlpha.soft,
    fontSize: 10.5,
    fontWeight: weight.medium,
  },
  remainingValue: {
    color: colors.ink,
    fontSize: 10.5,
    fontWeight: weight.black,
  },
  remainingTrack: {
    marginTop: 9,
  },

  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 34,
    paddingHorizontal: 24,
  },
  circleButton: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 29,
    height: 58,
    justifyContent: 'center',
    width: 58,
    ...shadow.card,
  },
  skipGlyph: {
    color: inkAlpha.ghost,
    fontSize: 18,
  },
  fundGlyph: {
    color: colors.magenta,
    fontSize: 17,
  },
  primaryCta: {
    alignItems: 'center',
    backgroundColor: colors.ink,
    borderRadius: 29,
    flex: 1,
    flexDirection: 'row',
    gap: 9,
    height: 58,
    justifyContent: 'center',
  },
  primaryCtaGlyph: {
    color: onDark.primary,
    fontSize: 16,
  },
  primaryCtaLabel: {
    color: onDark.primary,
    fontSize: 14.5,
    fontWeight: weight.bold,
  },
});

export default ProblemDeckScreen;
