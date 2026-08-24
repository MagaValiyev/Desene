import type {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  percent: number;
  size: number;
  thickness: number;
  color: string;
  trackColor: string;
  centerColor: string;
  children?: ReactNode;
};

function ProgressRing({
  percent,
  size,
  thickness,
  color,
  trackColor,
  centerColor,
  children,
}: Props) {
  const progress = Math.max(0, Math.min(100, percent)) / 100;
  const half = size / 2;

  const rightAngle = -180 + Math.min(progress, 0.5) * 360;
  const leftAngle = -180 + Math.max(progress - 0.5, 0) * 360;

  const halfCircle = {height: size, width: half};

  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: trackColor,
          borderRadius: half,
          height: size,
          width: size,
        },
      ]}>
      <View
        style={[styles.window, {left: half, width: half, height: size}]}>
        <View
          style={[
            halfCircle,
            styles.originLeft,
            {
              backgroundColor: color,
              borderBottomRightRadius: half,
              borderTopRightRadius: half,
              transform: [{rotate: `${rightAngle}deg`}],
            },
          ]}
        />
      </View>

      <View
        style={[styles.window, styles.windowLeft, {width: half, height: size}]}>
        <View
          style={[
            halfCircle,
            styles.originRight,
            {
              backgroundColor: color,
              borderBottomLeftRadius: half,
              borderTopLeftRadius: half,
              transform: [{rotate: `${leftAngle}deg`}],
            },
          ]}
        />
      </View>

      <View
        style={[
          styles.center,
          {
            backgroundColor: centerColor,
            borderRadius: half,
            bottom: thickness,
            left: thickness,
            right: thickness,
            top: thickness,
          },
        ]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    position: 'relative',
  },
  window: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
  },
  windowLeft: {
    left: 0,
  },
  originLeft: {
    transformOrigin: 'left center',
  },
  originRight: {
    transformOrigin: 'right center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default ProgressRing;
