import {StyleSheet, Text} from 'react-native';
import {eyebrowSpacing, radius, weight} from '../constants/theme';

type Props = {
  label: string;
  color: string;
  background: string;
  spaced?: boolean;
  size?: 'sm' | 'md';
};

function Badge({label, color, background, spaced, size = 'md'}: Props) {
  return (
    <Text
      style={[
        styles.badge,
        size === 'sm' ? styles.sm : styles.md,
        {backgroundColor: background, color},
        spaced && {letterSpacing: eyebrowSpacing / 2},
      ]}>
      {label}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    fontWeight: weight.bold,
    overflow: 'hidden',
  },
  sm: {
    borderRadius: 9,
    fontSize: 8.5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  md: {
    borderRadius: radius.sm,
    fontSize: 9.5,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
});

export default Badge;
