import {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import BottomTabBar from '../components/BottomTabBar';
import PhoneStatusBar from '../components/PhoneStatusBar';
import ProgressTrack from '../components/ProgressTrack';
import {
  barometer,
  barometerStats,
  feedFilters,
  feedGreeting,
  feedMissionPost,
  feedPosts,
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

const REACTION_TINTS = [
  colors.pinkSurface,
  colors.blueSurface,
  colors.greenSurface,
];

function FeedScreen() {
  const [filter, setFilter] = useState(feedFilters[0]);

  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{feedGreeting.name}</Text>
          <Text style={styles.title}>{feedGreeting.title}</Text>
        </View>
        <View style={styles.headerActions}>
          <View style={styles.iconButton}>
            <Text style={styles.iconGlyph}>⌕</Text>
          </View>
          <View style={styles.avatarButton}>
            <Text style={styles.avatarLabel}>EA</Text>
          </View>
        </View>
      </View>

      <View style={styles.filters}>
        {feedFilters.map(option => {
          const selected = option === filter;
          return (
            <Pressable
              key={option}
              accessibilityRole="tab"
              accessibilityState={{selected}}
              onPress={() => setFilter(option)}
              style={[styles.filter, selected && styles.filterSelected]}>
              <Text
                style={[
                  styles.filterLabel,
                  selected && styles.filterLabelSelected,
                ]}>
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.barometer}>
          <View style={styles.barometerHead}>
            <Text style={styles.barometerEyebrow}>{barometer.eyebrow}</Text>
            <Text style={styles.barometerDelta}>{barometer.delta}</Text>
          </View>

          <View style={styles.barometerStats}>
            {barometerStats.map(stat => (
              <View key={stat.label}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.chart}>
            {barometer.bars.map((value, index) => (
              <View
                key={`${value}-${index}`}
                style={[
                  styles.chartBar,
                  {
                    backgroundColor:
                      barometer.highlights[index] ?? onDark.hairline,
                    height: `${value}%`,
                  },
                ]}
              />
            ))}
          </View>
        </View>

        {feedPosts.map(post => (
          <View key={post.id} style={styles.card}>
            <View style={styles.postHead}>
              <View
                style={[
                  styles.postAvatar,
                  {backgroundColor: post.author.tint},
                ]}>
                <Text style={[styles.postInitials, {color: post.author.ink}]}>
                  {post.author.initials}
                </Text>
              </View>
              <View style={styles.postAuthor}>
                <Text style={styles.postName}>{post.author.name}</Text>
                <Text style={styles.postMeta}>{post.meta}</Text>
              </View>
              <Text style={styles.postMore}>⋯</Text>
            </View>

            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postBody}>{post.body}</Text>

            <View style={styles.thresholdBox}>
              <View style={styles.thresholdHead}>
                <Text style={styles.thresholdLabel}>
                  Uzman değerlendirmesi eşiği
                </Text>
                <Text style={styles.thresholdValue}>{post.supportLabel}</Text>
              </View>
              <View style={styles.thresholdTrack}>
                <ProgressTrack
                  segments={[{share: post.progress, color: colors.magenta}]}
                  height={8}
                  trackColor={colors.border}
                />
              </View>
            </View>

            <View style={styles.postActions}>
              <Pressable accessibilityRole="button" style={styles.supportCta}>
                <Text style={styles.supportGlyph}>▲</Text>
                <Text style={styles.supportLabel}>Destekle</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Paylaş"
                style={styles.shareButton}>
                <Text style={styles.shareGlyph}>⌯</Text>
              </Pressable>
              <View style={styles.reactions}>
                {REACTION_TINTS.map((tint, index) => (
                  <View
                    key={tint}
                    style={[
                      styles.reaction,
                      {backgroundColor: tint},
                      index > 0 && styles.reactionOverlap,
                    ]}
                  />
                ))}
                <Text style={styles.reactionCount}>
                  {post.supportersLabel}
                </Text>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.card}>
          <Text style={styles.missionBadge}>{feedMissionPost.badge}</Text>
          <Text style={styles.postTitle}>{feedMissionPost.title}</Text>
          <View style={styles.missionProgress}>
            <View style={styles.missionTrack}>
              <ProgressTrack
                segments={[
                  {share: feedMissionPost.progress, color: colors.blue},
                ]}
                height={8}
              />
            </View>
            <Text style={styles.missionAmount}>
              {feedMissionPost.amountLabel}
            </Text>
          </View>
        </View>
      </ScrollView>

      <BottomTabBar active="home" />
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
    paddingBottom: 14,
    paddingHorizontal: spacing.screenX,
    paddingTop: 24,
  },
  greeting: {
    color: inkAlpha.muted,
    fontSize: 11.5,
    fontWeight: weight.regular,
  },
  title: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: weight.black,
    letterSpacing: -0.6,
    marginTop: 5,
  },
  headerActions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 19,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  iconGlyph: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: weight.bold,
  },
  avatarButton: {
    alignItems: 'center',
    backgroundColor: colors.avatar,
    borderRadius: 19,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  avatarLabel: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: weight.bold,
  },

  filters: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: spacing.screenX,
  },
  filter: {
    backgroundColor: colors.card,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  filterSelected: {
    backgroundColor: colors.ink,
  },
  filterLabel: {
    color: inkAlpha.strong,
    fontSize: 11.5,
    fontWeight: weight.medium,
  },
  filterLabelSelected: {
    color: onDark.primary,
  },

  content: {
    gap: spacing.gap,
    paddingBottom: 140,
    paddingHorizontal: spacing.screenX,
    paddingTop: 16,
  },

  barometer: {
    backgroundColor: colors.ink,
    borderRadius: radius.xl,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  barometerHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barometerEyebrow: {
    color: onDark.soft,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing,
  },
  barometerDelta: {
    color: colors.mint,
    fontSize: 10,
    fontWeight: weight.medium,
  },
  barometerStats: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 22,
    marginTop: 14,
  },
  statValue: {
    color: onDark.primary,
    fontSize: 26,
    fontWeight: weight.black,
  },
  statLabel: {
    color: onDark.soft,
    fontSize: 10,
    fontWeight: weight.regular,
    marginTop: 4,
  },
  chart: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 3,
    height: 34,
    marginTop: 16,
  },
  chartBar: {
    borderRadius: 2,
    flex: 1,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: 18,
  },
  postHead: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 9,
  },
  postAvatar: {
    alignItems: 'center',
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  postInitials: {
    fontSize: 11,
    fontWeight: weight.bold,
  },
  postAuthor: {
    flex: 1,
  },
  postName: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: weight.bold,
  },
  postMeta: {
    color: inkAlpha.faint,
    fontSize: 10,
    fontWeight: weight.regular,
    marginTop: 3,
  },
  postMore: {
    color: inkAlpha.ghost,
    fontSize: 14,
  },
  postTitle: {
    color: colors.ink,
    fontSize: 15.5,
    fontWeight: weight.bold,
    letterSpacing: -0.3,
    lineHeight: 21,
    marginTop: 13,
  },
  postBody: {
    color: inkAlpha.medium,
    fontSize: 12.5,
    fontWeight: weight.regular,
    lineHeight: 19,
    marginTop: 8,
  },

  thresholdBox: {
    backgroundColor: colors.page,
    borderRadius: 16,
    marginTop: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  thresholdHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thresholdLabel: {
    color: inkAlpha.soft,
    fontSize: 10.5,
    fontWeight: weight.medium,
  },
  thresholdValue: {
    color: colors.magenta,
    fontSize: 10.5,
    fontWeight: weight.black,
  },
  thresholdTrack: {
    marginTop: 9,
  },

  postActions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  supportCta: {
    alignItems: 'center',
    backgroundColor: colors.ink,
    borderRadius: 21,
    flex: 1,
    flexDirection: 'row',
    gap: 7,
    height: 42,
    justifyContent: 'center',
  },
  supportGlyph: {
    color: onDark.primary,
    fontSize: 14,
  },
  supportLabel: {
    color: onDark.primary,
    fontSize: 12.5,
    fontWeight: weight.bold,
  },
  shareButton: {
    alignItems: 'center',
    backgroundColor: colors.page,
    borderRadius: 21,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  shareGlyph: {
    color: inkAlpha.medium,
    fontSize: 13,
  },
  reactions: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  reaction: {
    borderColor: colors.card,
    borderRadius: 12,
    borderWidth: 2,
    height: 24,
    width: 24,
  },
  reactionOverlap: {
    marginLeft: -8,
  },
  reactionCount: {
    color: inkAlpha.muted,
    fontSize: 10.5,
    fontWeight: weight.medium,
    marginLeft: 6,
  },

  missionBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.greenSurface,
    borderRadius: 12,
    color: colors.green,
    fontSize: 9.5,
    fontWeight: weight.bold,
    letterSpacing: eyebrowSpacing * 0.7,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  missionProgress: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginTop: 13,
  },
  missionTrack: {
    flex: 1,
  },
  missionAmount: {
    color: colors.ink,
    fontSize: 11,
    fontWeight: weight.black,
  },
});

export default FeedScreen;
