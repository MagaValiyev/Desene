
import {colors, inkAlpha} from './theme';
import type {
  BarometerStat,
  FeedMissionPost,
  FeedPost,
  MergeSuggestion,
  OnboardingBullet,
  ProcessStep,
  RaceItem,
  WatchingInstitution,
} from '../types/problem';

export const onboarding = {
  brand: 'Desene',
  headline: 'Önemsediğin problem\ngörünür hâle gelsin',
  body: 'Toplumsal ve ticari problemleri gündeme getir, destek ver, uzman onayından geçen konular finanse edilsin.',
  cta: 'Başlayalım',
  /** Öne çıkan iki kart: bir problem, bir açılmış misyon. */
  problemCard: {
    title: 'Yaşlılar dijital dolandırıcılığa karşı korunmasız',
    progress: 72,
  },
  missionCard: {
    eyebrow: 'ETKİ MİSYONU',
    title: 'Dijital Güvenlik Okuryazarlığı',
    amount: '₺480.000',
    meta: 'fon havuzu · 3 kurum',
  },
};

export const onboardingBullets: OnboardingBullet[] = [
  {id: 'propose', color: colors.magenta, label: 'Problemi öner, topluluk desteklesin'},
  {id: 'expert', color: colors.blue, label: 'Eşiği geçen konular uzmana gider'},
  {id: 'impact', color: colors.mint, label: 'Etkiyi rakamlarla takip et'},
];

export const feedFilters = ['Tümü', 'Toplumsal', 'Ticari', 'Yakınımda'];

export const feedGreeting = {name: 'Merhaba Elif', title: 'Gündem'};

export const barometer = {
  eyebrow: 'ETKİ BAROMETRESİ · BU HAFTA',
  delta: '+%18',
  /** Haftalık sütunlar; 4. ve 6. gün vurgulu. */
  bars: [40, 62, 48, 88, 70, 100, 56],
  highlights: {3: colors.magenta, 5: colors.blue} as Record<number, string>,
};

export const barometerStats: BarometerStat[] = [
  {value: '1.284', label: 'yeni öneri'},
  {value: '37', label: 'eşiği geçti'},
  {value: '12', label: 'misyon açıldı'},
];

export const feedPosts: FeedPost[] = [
  {
    id: 'p-1',
    author: {
      name: 'Merve Kaya',
      initials: 'MK',
      tint: colors.blueSurface,
      ink: colors.blueDeep,
    },
    meta: '2 saat önce · Finans okuryazarlığı',
    title:
      'Yaşlılar dijital dolandırıcılık yöntemleri hakkında yeterince bilgilendirilmiyor',
    body: 'Ailemde üç kişi son altı ayda sahte SMS bağlantısıyla hedef alındı. Bu konuda anlaşılır içerik neredeyse yok.',
    progress: 72,
    supportLabel: '8.640 / 12.000',
    supportersLabel: '8,6B',
  },
];

export const feedMissionPost: FeedMissionPost = {
  id: 'p-2',
  badge: 'UZMAN ONAYLI · MİSYON AÇIK',
  title: 'Afet çantası bilinci kırsalda çok düşük',
  progress: 54,
  amountLabel: '₺162B / 300B',
};

export const proposeDraft = {
  title: 'Problem öner',
  stepLabel: 'Adım 1/3',
  steps: 3,
  currentStep: 1,
  headingLabel: 'PROBLEM BAŞLIĞI',
  heading:
    'Yaşlılar dijital dolandırıcılık yöntemleri hakkında yeterince bilgilendirilmiyor',
  whyLabel: 'NEDEN ÖNEMLİ',
  why: 'Ailemde üç kişi son altı ayda sahte SMS bağlantısıyla hedef alındı. Anlaşılır, kısa ve yaşlılara uygun anlatımlı içerik yok.',
  counter: '214 / 600',
  attachments: ['▣', '⌖', '🔗'],
  areaLabel: 'ALAN SEÇ',
  areas: [
    'Dijital güvenlik',
    'Finans okuryazarlığı',
    'Sağlık',
    'Afet bilinci',
    'Erişilebilirlik',
    'Çevre',
  ],
  selectedArea: 'Dijital güvenlik',
  draftCta: 'Taslak',
  primaryCta: 'Devam et',
};

export const mergePanel = {
  title: '2 benzer öneri bulundu',
  body: 'Birleştirirsen önerin eşiğe daha hızlı ulaşır ve topluluğun oyuna tek başlıkla sunulur.',
};

export const mergeSuggestions: MergeSuggestion[] = [
  {
    id: 'sms',
    title: 'Sahte SMS bağlantıları yaşlıları hedefliyor',
    supportLabel: '4.120 destek',
    tint: colors.blueSurface,
    selected: true,
  },
  {
    id: 'bank',
    title: 'Bankalarda yaşlılara özel uyarı eksik',
    supportLabel: '1.860 destek',
    tint: colors.pinkSurface,
    selected: false,
  },
];

export const problemDetail = {
  category: 'DİJİTAL GÜVENLİK',
  title:
    'Yaşlılar dijital dolandırıcılık yöntemleri hakkında yeterince bilgilendirilmiyor',
  percent: 72,
  ringLabel: 'EŞİK',
  supportLabel: '8.640 destek',
  remainingPrefix: 'Uzman değerlendirmesine ',
  remainingStrong: '3.360 destek',
  remainingSuffix: ' kaldı. Bu hızda 4 gün içinde eşiği geçer.',
  processLabel: 'SÜREÇ',
  institutionsLabel: 'İLGİLENEN KURUMLAR',
  institutionCount: '4',
  primaryCta: 'Destekle',
};

export const processSteps: ProcessStep[] = [
  {
    id: 'proposed',
    title: 'Topluluk önerdi',
    meta: '2 öneri birleştirildi · 12 Nis',
    state: 'done',
  },
  {
    id: 'collecting',
    title: 'Etkileşim topluyor',
    meta: 'şu an burada',
    state: 'current',
  },
  {id: 'review', title: 'Ekip doğrulaması', state: 'upcoming'},
  {id: 'mission', title: 'Etki Misyonu açılır', state: 'upcoming'},
];

export const watchingInstitutions: WatchingInstitution[] = [
  {id: 'bank', name: 'Banka', status: 'izliyor'},
  {id: 'ngo', name: 'STK', status: 'izliyor'},
  {id: 'public', name: 'Kamu', status: 'izliyor'},
];

export const race = {
  eyebrow: 'Bu hafta eşiğe koşanlar',
  title: 'Eşik Yarışı',
  body: 'Sıralama destek hızına göre. Eşiği geçen problem uzman değerlendirmesine gider.',
  clearedEyebrow: 'EŞİĞİ GEÇTİ · UZMANDA',
  clearedCount: '3 problem',
  clearedTitles:
    'Kırsalda afet çantası bilinci · Okul kantinlerinde beslenme · Kadın girişimcilerde finansmana erişim',
  clearedFootnote: 'Doğrulanınca Etki Misyonu açılır →',
};

export const raceItems: RaceItem[] = [
  {
    id: 'r-1',
    rank: '01',
    title: 'Engelli erişimi olmayan toplu taşıma durakları',
    progress: 94,
    leading: true,
    meta: '11.280 destek · 720 kaldı',
    trend: '↑ hızlanıyor',
    trendColor: colors.green,
  },
  {
    id: 'r-2',
    rank: '02',
    title: 'Yaşlılar dijital dolandırıcılığa karşı bilgilendirilmiyor',
    progress: 72,
    leading: false,
    meta: '8.640 destek · 4 gün',
    trend: '2 öneri birleşti',
    trendColor: inkAlpha.ghost,
  },
  {
    id: 'r-3',
    rank: '03',
    title: 'Genç çalışanlarda finansal borç okuryazarlığı düşük',
    progress: 58,
    leading: false,
    meta: '6.960 destek · 3 kurum izliyor',
  },
];

export const deck = {
  title: 'Günün 8 problemi',
  meta: '3. / 8 · destek ver ya da geç',
  total: 8,
  current: 3,
  category: 'DİJİTAL GÜVENLİK',
  author: 'Merve K. önerdi',
  headline:
    'Yaşlılar dijital dolandırıcılık yöntemleri hakkında yeterince bilgilendirilmiyor',
  body: 'Ailemde üç kişi son altı ayda sahte SMS bağlantısıyla hedef alındı. Anlaşılır içerik neredeyse yok.',
  remainingLabel: 'Eşiğe kalan',
  remainingValue: '3.360 destek',
  progress: 72,
  primaryCta: 'Destekle',
};
