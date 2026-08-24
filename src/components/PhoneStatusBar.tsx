import {StyleSheet, Text, View} from 'react-native';
import {colors, weight} from '../constants/theme';

type Props = {
  tone?: 'dark' | 'light';
  time?: string;
};

const BAR_HEIGHTS = [5, 8, 11, 13];

function PhoneStatusBar({tone = 'dark', time = '9:41'}: Props) {
  const tint = tone === 'dark' ? colors.ink : '#FFFFFF';

  return (
    <View style={styles.container}>
      <Text style={[styles.time, {color: tint}]}>{time}</Text>
      <View
        style={[
          styles.notch,
          tone === 'dark' ? styles.notchDark : styles.notchLight,
        ]}
      />
      <View style={styles.indicators}>
        <View style={styles.signal}>
          {BAR_HEIGHTS.map(height => (
            <View
              key={height}
              style={[styles.signalBar, {height, backgroundColor: tint}]}
            />
          ))}
        </View>
        <View style={[styles.battery, {borderColor: tint}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingTop: 16,
  },
  time: {
    fontSize: 13,
    fontWeight: weight.bold,
  },
  notch: {
    borderRadius: 15,
    height: 26,
    width: 84,
  },
  notchDark: {
    backgroundColor: colors.ink,
  },
  notchLight: {
    backgroundColor: 'rgba(0,0,0,.35)',
  },
  indicators: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 5,
  },
  signal: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 2,
  },
  signalBar: {
    borderRadius: 1,
    width: 3,
  },
  battery: {
    borderRadius: 2,
    borderWidth: 1.6,
    height: 11,
    width: 15,
  },
});

export default PhoneStatusBar;
