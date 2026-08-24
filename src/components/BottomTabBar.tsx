import {StyleSheet, Text, View} from 'react-native';
import {colors, inkAlpha, onDark, shadow, weight} from '../constants/theme';

type Props = {
  active: 'home' | 'search';
  composeTone?: 'ink' | 'magenta';
  onDarkBackground?: boolean;
};

function BottomTabBar({
  active,
  composeTone = 'ink',
  onDarkBackground = false,
}: Props) {
  return (
    <View style={[styles.bar, onDarkBackground && styles.barOnDark]}>
      <Text style={active === 'home' ? styles.glyphActive : styles.glyphMuted}>
        ⌂
      </Text>
      <Text style={active === 'search' ? styles.glyphActive : styles.glyphMuted}>
        ⌕
      </Text>

      <View
        style={[
          styles.compose,
          composeTone === 'magenta' && styles.composeMagenta,
        ]}>
        <Text style={styles.composeGlyph}>＋</Text>
        <Text style={styles.composeLabel}>Öneri</Text>
      </View>

      <Text style={styles.glyphMuted}>◎</Text>
      <View style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 31,
    bottom: 30,
    flexDirection: 'row',
    height: 62,
    justifyContent: 'space-between',
    left: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    right: 20,
    ...shadow.bar,
  },
  barOnDark: {
    shadowColor: '#000000',
    shadowOpacity: 0.3,
  },
  glyphActive: {
    color: colors.ink,
    fontSize: 18,
  },
  glyphMuted: {
    color: inkAlpha.ghost,
    fontSize: 18,
  },
  compose: {
    alignItems: 'center',
    backgroundColor: colors.ink,
    borderRadius: 22,
    flexDirection: 'row',
    gap: 7,
    height: 44,
    paddingHorizontal: 18,
  },
  composeMagenta: {
    backgroundColor: colors.magenta,
  },
  composeGlyph: {
    color: onDark.primary,
    fontSize: 15,
  },
  composeLabel: {
    color: onDark.primary,
    fontSize: 12.5,
    fontWeight: weight.bold,
  },
  avatar: {
    backgroundColor: colors.avatar,
    borderRadius: 14,
    height: 28,
    width: 28,
  },
});

export default BottomTabBar;
