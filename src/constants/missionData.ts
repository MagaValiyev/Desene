
import {colors} from './theme';
import type {
  DiscoverMission,
  JourneyStage,
  Mission,
  NextStep,
  ThresholdCandidate,
} from '../types/mission';

export const featuredMission: Mission = {
  id: 'm-0142',
  code: 'M-0142',
  kind: 'toplumsal',
  title: 'Yaşlılar için dijital dolandırıcılık farkındalığı',
  expertApproved: true,
  raisedLabel: '₺342.000',
  goalLabel: "₺480.000 hedefin %71'i",
  progress: 71,
  daysLeftLabel: '9 gün',
  funding: [
    {label: 'Banka', share: 46, color: colors.blue},
    {label: 'STK + Kamu', share: 19, color: colors.mint},
    {label: 'Mikro katkı', share: 6, color: colors.magenta},
  ],
  stats: [
    {value: '24', label: 'üretici\nkatıldı'},
    {value: '1,2M', label: 'erişim\nbugüne dek'},
    {value: '4,6', label: 'fayda\npuanı /5'},
  ],
  tasks: [
    {
      id: 'video',
      title: 'Kısa video anlatım',
      meta: '12 üretici · 8 tamamlandı',
      budgetLabel: '₺180B',
      icon: '▶',
      iconBackground: colors.pinkSurface,
    },
    {
      id: 'gorsel',
      title: 'Yaşlılara uygun görsel rehber',
      meta: '7 üretici · 3 tamamlandı',
      budgetLabel: '₺120B',
      icon: '◫',
      iconBackground: colors.blueSurface,
    },
    {
      id: 'saha',
      title: 'Saha etkinliği & ölçüm',
      meta: '5 üretici · başladı',
      budgetLabel: '₺60B',
      icon: '◉',
      iconBackground: colors.greenSurface,
    },
  ],
  contributionOptions: ['₺20', '₺50', '₺100', 'Diğer'],
  defaultContribution: '₺50',
};

export const discoverFilters = ['Toplumsal', 'Ticari', 'Yakında'] as const;

export const discoverMissions: DiscoverMission[] = [
  {
    id: 'd-1',
    badge: '✓ ONAYLI',
    badgeTone: 'approved',
    category: 'Dijital güvenlik',
    title: 'Yaşlılar için dolandırıcılık farkındalığı',
    progress: 71,
    progressColor: colors.blue,
    amountLabel: '₺342B / 480B',
    creatorsLabel: '24 üretici',
    thumbnailColor: colors.pinkSurface,
  },
  {
    id: 'd-2',
    badge: '✓ ONAYLI',
    badgeTone: 'approved',
    category: 'Afet bilinci',
    title: 'Kırsalda afet çantası ve tahliye bilinci',
    progress: 54,
    progressColor: colors.blue,
    amountLabel: '₺162B / 300B',
    creatorsLabel: '11 üretici',
    thumbnailColor: colors.blueSurface,
  },
  {
    id: 'd-3',
    badge: 'TİCARİ',
    badgeTone: 'commercial',
    category: 'Uygulama kullanımı',
    title: 'Yerel üretici pazarı uygulaması tanıtımı',
    progress: 88,
    progressColor: colors.ink,
    thumbnailColor: colors.sandSurface,
  },
];

export const thresholdCandidate: ThresholdCandidate = {
  title: 'Engelli erişimi olmayan toplu taşıma durakları',
  progress: 94,
  ctaLabel: 'Destekle, eşiği geçsin',
};

export const journeyStages: JourneyStage[] = [
  {
    id: 'community',
    index: 1,
    state: 'done',
    title: 'Topluluk gündeme getirdi',
    description:
      '2 benzer öneri birleştirildi, topluluğun oyuna tek başlıkla sunuldu.',
    footnote: '12 Nis · 2 öneri',
  },
  {
    id: 'threshold',
    index: 2,
    state: 'current',
    title: 'Etkileşim eşiği',
  },
  {
    id: 'expert',
    index: 3,
    state: 'upcoming',
    title: 'Uzman doğrulaması',
    description:
      'Problemi kapsam, kanıt ve etik kriterleri açısından değerlendirir. Yapay zekâ ön filtresi riskli başvuruları işaretler, kararı insan verir.',
  },
  {
    id: 'mission',
    index: 4,
    state: 'upcoming',
    title: 'Etki Misyonu açılır',
    description:
      'Kurumlar fon sağlar, içerik üreticileri göreve katılır, sonuç erişim ve etki göstergeleriyle raporlanır.',
    tags: ['FON', 'İÇERİK', 'ÖLÇÜM'],
  },
];

export const journeyThreshold = {
  label: 'Etkileşim eşiği',
  stateLabel: 'ŞU AN BURADA',
  percent: 72,
  countLabel: '8.640 / 12.000',
  note: 'Senin desteğin sıralamayı 1 basamak yukarı taşır.',
  ctaLabel: 'Destekle',
};

export const thresholdReached = {
  percentLabel: '%100',
  ringLabel: 'EŞİK',
  headline: 'Eşik geçildi.\nProblem doğrulanmaya gidiyor.',
  body: '12.000 kişi "yaşlılar dijital dolandırıcılığa karşı korunmasız" dedi. Sen 8.641. destektin.',
  primaryCta: 'Takibe al',
};

export const nextSteps: NextStep[] = [
  {
    id: 'review',
    badge: '48s',
    badgeColor: colors.purpleText,
    badgeBackground: colors.purpleSurface,
    title: 'Ekip değerlendirmesi',
    description: '48 saat içinde sonuçlanır, sonucu bildirimle görürsün.',
  },
  {
    id: 'mission',
    badge: '✓',
    badgeColor: colors.green,
    badgeBackground: colors.greenSurface,
    title: 'Doğrulanırsa Etki Misyonu',
    description: 'kurumlar fon sağlar, üreticiler içerik üretir.',
  },
  {
    id: 'micro',
    badge: '₺',
    badgeColor: colors.sandText,
    badgeBackground: colors.sandSurface,
    title: 'Şimdiden mikro katkı',
    description: 'fon havuzu açıldığında ilk sen desteklersin.',
  },
];
