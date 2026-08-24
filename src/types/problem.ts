
export type OnboardingBullet = {
  id: string;
  color: string;
  label: string;
};

export type FeedFilter = string;

export type BarometerStat = {
  value: string;
  label: string;
};

export type FeedPost = {
  id: string;
  author: {name: string; initials: string; tint: string; ink: string};
  meta: string;
  title: string;
  body: string;
  progress: number;
  supportLabel: string;
  supportersLabel: string;
};

export type FeedMissionPost = {
  id: string;
  badge: string;
  title: string;
  progress: number;
  amountLabel: string;
};

export type MergeSuggestion = {
  id: string;
  title: string;
  supportLabel: string;
  tint: string;
  selected: boolean;
};

export type ProcessStepState = 'done' | 'current' | 'upcoming';

export type ProcessStep = {
  id: string;
  title: string;
  meta?: string;
  state: ProcessStepState;
};

export type WatchingInstitution = {
  id: string;
  name: string;
  status: string;
};

export type RaceItem = {
  id: string;
  rank: string;
  title: string;
  progress: number;
  leading: boolean;
  meta: string;
  trend?: string;
  trendColor?: string;
};
