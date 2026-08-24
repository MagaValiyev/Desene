import {useRef, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';

import FeedScreen from '../screens/FeedScreen';
import MissionDetailScreen from '../screens/MissionDetailScreen';
import MissionDiscoverScreen from '../screens/MissionDiscoverScreen';
import MissionJourneyScreen from '../screens/MissionJourneyScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import ProblemDeckScreen from '../screens/ProblemDeckScreen';
import ProblemDetailScreen from '../screens/ProblemDetailScreen';
import ProposeProblemScreen from '../screens/ProposeProblemScreen';
import ThresholdRaceScreen from '../screens/ThresholdRaceScreen';
import ThresholdReachedScreen from '../screens/ThresholdReachedScreen';
import {colors} from '../constants/theme';

type Slide = {
  key: string;
  label: string;
  tone: 'dark' | 'light';
  Screen: () => React.JSX.Element;
};

const SLIDES: Slide[] = [
  {key: 'onboarding', label: '01 Onboarding', tone: 'dark', Screen: OnboardingScreen},
  {key: 'feed', label: '02 Ana akış', tone: 'dark', Screen: FeedScreen},
  {
    key: 'propose',
    label: '03 Problem önerme',
    tone: 'dark',
    Screen: ProposeProblemScreen,
  },
  {
    key: 'problem',
    label: '04 Problem detay',
    tone: 'dark',
    Screen: ProblemDetailScreen,
  },
  {
    key: 'mission',
    label: '05 Etki Misyonu detayı',
    tone: 'dark',
    Screen: MissionDetailScreen,
  },
  {
    key: 'discover',
    label: '06 Misyon keşfet',
    tone: 'dark',
    Screen: MissionDiscoverScreen,
  },
  {
    key: 'race',
    label: 'Varyant B · Eşik yarışı',
    tone: 'light',
    Screen: ThresholdRaceScreen,
  },
  {
    key: 'deck',
    label: 'Varyant C · Kart destesi',
    tone: 'dark',
    Screen: ProblemDeckScreen,
  },
  {
    key: 'journey',
    label: 'Varyant D · Problemin yolculuğu',
    tone: 'dark',
    Screen: MissionJourneyScreen,
  },
  {
    key: 'threshold',
    label: 'Varyant E · Eşik geçildi',
    tone: 'light',
    Screen: ThresholdReachedScreen,
  },
];

// kullanici feedbacki icin
function PresentationDeck() {
  const [size, setSize] = useState({height: 0, width: 0});
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<React.ComponentRef<typeof ScrollView>>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const {height, width} = event.nativeEvent.layout;
    setSize(current =>
      current.height === height && current.width === width
        ? current
        : {height, width},
    );
  };

  const goTo = (slideIndex: number) => {
    scrollRef.current?.scrollTo({x: slideIndex * size.width, animated: true});
    setIndex(slideIndex);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (size.width === 0) {
      return;
    }
    const next = Math.round(event.nativeEvent.contentOffset.x / size.width);
    if (next !== index) {
      setIndex(next);
    }
  };

  const activeTone = SLIDES[index]?.tone ?? 'dark';

  return (
    <View style={styles.root} onLayout={handleLayout}>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}>
        {size.width > 0 &&
          SLIDES.map(({key, label, Screen}) => (
            <View
              key={key}
              accessibilityLabel={label}
              style={{height: size.height, width: size.width}}>
              <Screen />
            </View>
          ))}
      </ScrollView>

      <View style={styles.dots}>
        {SLIDES.map((slide, slideIndex) => (
          <Pressable
            key={slide.key}
            accessibilityRole="button"
            accessibilityLabel={slide.label}
            accessibilityState={{selected: slideIndex === index}}
            hitSlop={{bottom: 14, left: 5, right: 5, top: 14}}
            onPress={() => goTo(slideIndex)}>
            <View
              style={[
                styles.dot,
                activeTone === 'light' ? styles.dotLight : styles.dotDark,
                slideIndex === index && styles.dotActive,
              ]}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.page,
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  dots: {
    alignSelf: 'center',
    bottom: 8,
    flexDirection: 'row',
    gap: 5,
    position: 'absolute',
  },
  dot: {
    borderRadius: 2.5,
    height: 5,
    width: 5,
  },
  dotDark: {
    backgroundColor: 'rgba(22,21,15,.25)',
  },
  dotLight: {
    backgroundColor: 'rgba(255,255,255,.45)',
  },
  dotActive: {
    width: 14,
  },
});

export default PresentationDeck;
