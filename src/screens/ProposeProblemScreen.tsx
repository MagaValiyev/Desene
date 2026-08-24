import {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import PhoneStatusBar from '../components/PhoneStatusBar';
import {
  mergePanel,
  mergeSuggestions,
  proposeDraft,
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

function ProposeProblemScreen() {
  const [area, setArea] = useState(proposeDraft.selectedArea);
  const [merged, setMerged] = useState(
    () => new Set(mergeSuggestions.filter(s => s.selected).map(s => s.id)),
  );

  const toggleMerge = (id: string) => {
    setMerged(current => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backGlyph}>←</Text>
        </View>
        <Text style={styles.headerTitle}>{proposeDraft.title}</Text>
        <Text style={styles.stepLabel}>{proposeDraft.stepLabel}</Text>
      </View>

      <View style={styles.stepper}>
        {Array.from({length: proposeDraft.steps}).map((_, index) => (
          <View
            key={index}
            style={[
              styles.stepSegment,
              index < proposeDraft.currentStep && styles.stepSegmentDone,
            ]}
          />
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.draftCard}>
          <Text style={styles.fieldLabel}>{proposeDraft.headingLabel}</Text>
          <Text style={styles.draftTitle}>
            {proposeDraft.heading}
            <Text style={styles.caret}>|</Text>
          </Text>

          <View style={styles.divider} />

          <Text style={styles.fieldLabel}>{proposeDraft.whyLabel}</Text>
          <Text style={styles.draftBody}>{proposeDraft.why}</Text>

          <View style={styles.draftFooter}>
            <View style={styles.attachments}>
              {proposeDraft.attachments.map(glyph => (
                <View key={glyph} style={styles.attachment}>
                  <Text style={styles.attachmentGlyph}>{glyph}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.counter}>{proposeDraft.counter}</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>{proposeDraft.areaLabel}</Text>
        <View style={styles.areas}>
          {proposeDraft.areas.map(option => {
            const selected = option === area;
            return (
              <Pressable
                key={option}
                accessibilityRole="button"
                accessibilityState={{selected}}
                onPress={() => setArea(option)}
                style={[styles.area, selected && styles.areaSelected]}>
                <Text
                  style={[
                    styles.areaLabel,
                    selected && styles.areaLabelSelected,
                  ]}>
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.mergeCard}>
          <View style={styles.mergeHead}>
            <View style={styles.aiChip}>
              <Text style={styles.aiChipLabel}>AI</Text>
            </View>
            <Text style={styles.mergeTitle}>{mergePanel.title}</Text>
          </View>
          <Text style={styles.mergeBody}>{mergePanel.body}</Text>

          <View style={styles.mergeList}>
            {mergeSuggestions.map(suggestion => {
              const selected = merged.has(suggestion.id);
              return (
                <Pressable
                  key={suggestion.id}
                  accessibilityRole="checkbox"
                  accessibilityState={{checked: selected}}
                  onPress={() => toggleMerge(suggestion.id)}
                  style={styles.mergeRow}>
                  <View
                    style={[
                      styles.mergeAvatar,
                      {backgroundColor: suggestion.tint},
                    ]}
                  />
                  <View style={styles.mergeCopy}>
                    <Text style={styles.mergeRowTitle}>
                      {suggestion.title}
                    </Text>
                    <Text style={styles.mergeRowMeta}>
                      {suggestion.supportLabel}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.checkbox,
                      selected ? styles.checkboxOn : styles.checkboxOff,
                    ]}>
                    {selected && <Text style={styles.checkboxGlyph}>✓</Text>}
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable accessibilityRole="button" style={styles.draftCta}>
          <Text style={styles.draftCtaLabel}>{proposeDraft.draftCta}</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={styles.primaryCta}>
          <Text style={styles.primaryCtaLabel}>{proposeDraft.primaryCta}</Text>
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
    gap: 14,
    paddingHorizontal: spacing.screenX,
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
    fontSize: 17,
    fontWeight: weight.black,
    letterSpacing: -0.4,
  },
  stepLabel: {
    color: inkAlpha.faint,
    fontSize: 11,
    fontWeight: weight.medium,
    marginLeft: 'auto',
  },
  stepper: {
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: spacing.screenX,
    paddingTop: 18,
  },
  stepSegment: {
    backgroundColor: colors.stepTrack,
    borderRadius: 2,
    flex: 1,
    height: 4,
  },
  stepSegmentDone: {
    backgroundColor: colors.ink,
  },

  content: {
    paddingBottom: 130,
    paddingHorizontal: spacing.screenX,
    paddingTop: 22,
  },
  draftCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: 20,
  },
  fieldLabel: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },
  draftTitle: {
    color: colors.ink,
    fontSize: 16.5,
    fontWeight: weight.bold,
    letterSpacing: -0.3,
    lineHeight: 23,
    marginTop: 10,
  },
  caret: {
    color: colors.magenta,
  },
  divider: {
    backgroundColor: colors.track,
    height: 1,
    marginVertical: 16,
  },
  draftBody: {
    color: inkAlpha.strong,
    fontSize: 13,
    fontWeight: weight.regular,
    lineHeight: 20,
    marginTop: 10,
  },
  draftFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  attachments: {
    flexDirection: 'row',
    gap: 8,
  },
  attachment: {
    alignItems: 'center',
    backgroundColor: colors.page,
    borderRadius: 12,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  attachmentGlyph: {
    color: inkAlpha.soft,
    fontSize: 14,
  },
  counter: {
    color: inkAlpha.ghost,
    fontSize: 10.5,
    fontWeight: weight.medium,
  },

  sectionLabel: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
    marginTop: 14,
  },
  areas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  area: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  areaSelected: {
    backgroundColor: colors.ink,
  },
  areaLabel: {
    color: inkAlpha.strong,
    fontSize: 11.5,
    fontWeight: weight.medium,
  },
  areaLabelSelected: {
    color: onDark.primary,
  },

  mergeCard: {
    backgroundColor: colors.purpleSurface,
    borderRadius: radius.xl,
    marginTop: 20,
    padding: 18,
  },
  mergeHead: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  aiChip: {
    alignItems: 'center',
    backgroundColor: colors.purpleText,
    borderRadius: 6,
    height: 20,
    justifyContent: 'center',
    width: 20,
  },
  aiChipLabel: {
    color: onDark.primary,
    fontSize: 10,
    fontWeight: weight.black,
  },
  mergeTitle: {
    color: colors.aiInk,
    fontSize: 11.5,
    fontWeight: weight.bold,
  },
  mergeBody: {
    color: colors.aiBody,
    fontSize: 11.5,
    fontWeight: weight.regular,
    lineHeight: 17.5,
    marginTop: 10,
  },
  mergeList: {
    gap: 8,
    marginTop: 12,
  },
  mergeRow: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.sm,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 13,
    paddingVertical: 12,
  },
  mergeAvatar: {
    borderRadius: 13,
    height: 26,
    width: 26,
  },
  mergeCopy: {
    flex: 1,
  },
  mergeRowTitle: {
    color: colors.ink,
    fontSize: 11.5,
    fontWeight: weight.medium,
    lineHeight: 15,
  },
  mergeRowMeta: {
    color: inkAlpha.faint,
    fontSize: 9.5,
    fontWeight: weight.medium,
    marginTop: 3,
  },
  checkbox: {
    alignItems: 'center',
    borderRadius: 7,
    height: 22,
    justifyContent: 'center',
    width: 22,
  },
  checkboxOn: {
    backgroundColor: colors.purpleText,
  },
  checkboxOff: {
    borderColor: 'rgba(22,21,15,.15)',
    borderWidth: 1.6,
  },
  checkboxGlyph: {
    color: onDark.primary,
    fontSize: 11,
  },

  footer: {
    backgroundColor: colors.page,
    bottom: 0,
    flexDirection: 'row',
    gap: 10,
    left: 0,
    paddingBottom: 28,
    paddingHorizontal: spacing.screenX,
    paddingTop: 26,
    position: 'absolute',
    right: 0,
  },
  draftCta: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  draftCtaLabel: {
    color: inkAlpha.soft,
    fontSize: 11,
    fontWeight: weight.medium,
  },
  primaryCta: {
    alignItems: 'center',
    backgroundColor: colors.ink,
    borderRadius: 28,
    flex: 1,
    height: 56,
    justifyContent: 'center',
  },
  primaryCtaLabel: {
    color: onDark.primary,
    fontSize: 14.5,
    fontWeight: weight.bold,
  },
});

export default ProposeProblemScreen;
