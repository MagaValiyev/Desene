
export type MissionKind = 'toplumsal' | 'ticari';

export type FundingSlice = {
  label: string;
  share: number;
  color: string;
};

export type MissionTask = {
  id: string;
  title: string;
  meta: string;
  budgetLabel: string;
  icon: string;
  iconBackground: string;
};

export type MissionStat = {
  value: string;
  label: string;
};

export type Mission = {
  id: string;
  code: string;
  kind: MissionKind;
  title: string;
  expertApproved: boolean;
  raisedLabel: string;
  goalLabel: string;
  progress: number;
  daysLeftLabel: string;
  funding: FundingSlice[];
  stats: MissionStat[];
  tasks: MissionTask[];
  contributionOptions: string[];
  defaultContribution: string;
};

export type DiscoverMission = {
  id: string;
  badge: string;
  badgeTone: 'approved' | 'commercial';
  category: string;
  title: string;
  progress: number;
  progressColor: string;
  amountLabel?: string;
  creatorsLabel?: string;
  thumbnailColor: string;
};

export type ThresholdCandidate = {
  title: string;
  progress: number;
  ctaLabel: string;
};

export type JourneyStageState = 'done' | 'current' | 'upcoming';

export type JourneyStage = {
  id: string;
  index: number;
  state: JourneyStageState;
  title: string;
  description?: string;
  tags?: string[];
  /** 12 Nis · 2 öneri */
  footnote?: string;
};

export type NextStep = {
  id: string;
  badge: string;
  badgeColor: string;
  badgeBackground: string;
  title: string;
  description: string;
};
