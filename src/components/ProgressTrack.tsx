import {StyleSheet, View} from 'react-native';
import {colors} from '../constants/theme';

export type Segment = {
  share: number;
  color: string;
};

type Props = {
  segments: Segment[];
  height?: number;
  trackColor?: string;
};

function ProgressTrack({
  segments,
  height = 7,
  trackColor = colors.track,
}: Props) {
  return (
    <View
      style={[
        styles.track,
        {backgroundColor: trackColor, borderRadius: height / 2, height},
      ]}>
      {segments.map((segment, index) => (
        <View
          key={`${segment.color}-${index}`}
          style={[
            styles.segment,
            {
              backgroundColor: segment.color,
              width: `${Math.max(0, Math.min(100, segment.share))}%`,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  segment: {
    height: '100%',
  },
  track: {
    flexDirection: 'row',
    overflow: 'hidden',
    width: '100%',
  },
});

export default ProgressTrack;
