import {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import Badge from '../components/Badge';
import PhoneStatusBar from '../components/PhoneStatusBar';
import ProgressTrack from '../components/ProgressTrack';
import {featuredMission} from '../constants/missionData';
import {
  colors,
  eyebrowSpacing,
  inkAlpha,
  onDark,
  radius,
  shadow,
  spacing,
  weight,
} from '../constants/theme';

function MissionDetailScreen() {
  const mission = featuredMission;
  const [amount, setAmount] = useState(mission.defaultContribution);

  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backGlyph}>←</Text>
        </View>
        <Text style={styles.headerTitle}>Etki Misyonu</Text>
        {mission.expertApproved && (
          <View style={styles.headerBadge}>
            <Badge
              label="✓ UZMAN ONAYLI"
              color={colors.green}
              background={colors.greenSurface}
              spaced
            />
          </View>
        )}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroEyebrow}>
            {mission.kind === 'toplumsal' ? 'TOPLUMSAL' : 'TİCARİ'} MİSYON ·{' '}
            {mission.code}
          </Text>
          <Text style={styles.heroTitle}>{mission.title}</Text>

          <View style={styles.heroFigures}>
            <View>
              <Text style={styles.heroAmount}>{mission.raisedLabel}</Text>
              <Text style={styles.heroCaption}>{mission.goalLabel}</Text>
            </View>
            <View style={styles.heroDeadline}>
              <Text style={styles.heroDays}>{mission.daysLeftLabel}</Text>
              <Text style={styles.heroCaption}>kaldı</Text>
            </View>
          </View>

          <View style={styles.heroTrack}>
            <ProgressTrack
              segments={mission.funding.map(slice => ({
                share: slice.share,
                color: slice.color,
              }))}
              height={10}
              trackColor={onDark.track}
            />
          </View>

          <View style={styles.legend}>
            {mission.funding.map(slice => (
              <View key={slice.label} style={styles.legendItem}>
                <View
                  style={[styles.legendDot, {backgroundColor: slice.color}]}
                />
                <Text style={styles.legendLabel}>{slice.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.statRow}>
          {mission.stats.map(stat => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.tasksCard}>
          <Text style={styles.eyebrow}>GÖREV KIRILIMI</Text>
          <View style={styles.taskList}>
            {mission.tasks.map(task => (
              <View key={task.id} style={styles.taskRow}>
                <View
                  style={[
                    styles.taskIcon,
                    {backgroundColor: task.iconBackground},
                  ]}>
                  <Text style={styles.taskGlyph}>{task.icon}</Text>
                </View>
                <View style={styles.taskCopy}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  <Text style={styles.taskMeta}>{task.meta}</Text>
                </View>
                <Text style={styles.taskBudget}>{task.budgetLabel}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.contributionCard}>
          <View style={styles.contributionHead}>
            <Text style={styles.contributionTitle}>Mikro katkı yap</Text>
            <Text style={styles.contributionNote}>yatırım değildir</Text>
          </View>

          <View style={styles.amountRow}>
            {mission.contributionOptions.map(option => {
              const selected = option === amount;
              return (
                <Pressable
                  key={option}
                  accessibilityRole="button"
                  accessibilityState={{selected}}
                  onPress={() => setAmount(option)}
                  style={[styles.amountChip, selected && styles.amountSelected]}>
                  <Text
                    style={[
                      styles.amountLabel,
                      selected && styles.amountLabelSelected,
                    ]}>
                    {option}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Pressable accessibilityRole="button" style={styles.primaryCta}>
            <Text style={styles.primaryCtaLabel}>Fon havuzuna katkı ver</Text>
          </Pressable>
        </View>
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
    paddingTop: 22,
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
    fontSize: 15,
    fontWeight: weight.black,
  },
  headerBadge: {
    marginLeft: 'auto',
  },

  scrollContent: {
    paddingBottom: 250,
    paddingHorizontal: spacing.screenX,
    paddingTop: 18,
  },

  hero: {
    backgroundColor: colors.ink,
    borderRadius: radius.xxl,
    padding: 22,
  },
  heroEyebrow: {
    color: colors.mint,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },
  heroTitle: {
    color: onDark.primary,
    fontSize: 21,
    fontWeight: weight.black,
    letterSpacing: -0.5,
    lineHeight: 26,
    marginTop: 12,
  },
  heroFigures: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  heroAmount: {
    color: onDark.primary,
    fontSize: 30,
    fontWeight: weight.black,
  },
  heroDeadline: {
    alignItems: 'flex-end',
  },
  heroDays: {
    color: onDark.primary,
    fontSize: 15,
    fontWeight: weight.black,
  },
  heroCaption: {
    color: onDark.soft,
    fontSize: 10.5,
    fontWeight: weight.regular,
    marginTop: 5,
  },
  heroTrack: {
    marginTop: 14,
  },
  legend: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 12,
  },
  legendItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  legendDot: {
    borderRadius: 2,
    height: 7,
    width: 7,
  },
  legendLabel: {
    color: onDark.muted,
    fontSize: 9.5,
    fontWeight: weight.medium,
  },

  statRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: spacing.gap,
  },
  statCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    flex: 1,
    padding: 15,
  },
  statValue: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: weight.black,
  },
  statLabel: {
    color: inkAlpha.muted,
    fontSize: 10,
    fontWeight: weight.regular,
    lineHeight: 13,
    marginTop: 5,
  },

  tasksCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    marginTop: spacing.gap,
    padding: 18,
  },
  eyebrow: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },
  taskList: {
    gap: 11,
    marginTop: 13,
  },
  taskRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 11,
  },
  taskIcon: {
    alignItems: 'center',
    borderRadius: 11,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  taskGlyph: {
    color: colors.ink,
    fontSize: 13,
  },
  taskCopy: {
    flex: 1,
  },
  taskTitle: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: weight.bold,
  },
  taskMeta: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.regular,
    marginTop: 4,
  },
  taskBudget: {
    color: colors.ink,
    fontSize: 11,
    fontWeight: weight.black,
  },

  footer: {
    backgroundColor: colors.page,
    bottom: 0,
    left: 0,
    paddingBottom: 24,
    paddingHorizontal: spacing.screenX,
    paddingTop: 20,
    position: 'absolute',
    right: 0,
  },
  contributionCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: 16,
    ...shadow.card,
  },
  contributionHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contributionTitle: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: weight.bold,
  },
  contributionNote: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.regular,
  },
  amountRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  amountChip: {
    alignItems: 'center',
    backgroundColor: colors.page,
    borderRadius: radius.sm,
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  amountSelected: {
    backgroundColor: colors.ink,
  },
  amountLabel: {
    color: inkAlpha.strong,
    fontSize: 12.5,
    fontWeight: weight.bold,
  },
  amountLabelSelected: {
    color: onDark.primary,
  },
  primaryCta: {
    alignItems: 'center',
    backgroundColor: colors.magenta,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    marginTop: 12,
  },
  primaryCtaLabel: {
    color: onDark.primary,
    fontSize: 14,
    fontWeight: weight.bold,
  },
});

export default MissionDetailScreen;
