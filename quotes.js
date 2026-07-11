const quotes = [
  {
    id: 1,
    quote: "어제와 똑같은 삶을 살면서 다른 미래를 기대하는 것은 정신병 초기증세다.",
    author: "알베르트 아인슈타인",
    quoteEn: "Insanity is doing the same thing over and over again and expecting different results.",
    authorEn: "Albert Einstein",
    category: "wisdom"
  },
  {
    id: 2,
    quote: "삶이 있는 한 희망은 있다.",
    author: "마르쿠스 툴리우스 키케로",
    quoteEn: "While there is life, there is hope.",
    authorEn: "Marcus Tullius Cicero",
    category: "life"
  },
  {
    id: 3,
    quote: "가장 위대한 영광은 한 번도 넘어지지 않는 것이 아니라 넘어질 때마다 다시 일어서는 것이다.",
    author: "넬슨 만델라",
    quoteEn: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    authorEn: "Nelson Mandela",
    category: "courage"
  },
  {
    id: 4,
    quote: "피할 수 없으면 즐겨라.",
    author: "로버트 엘리어트",
    quoteEn: "If you can't avoid it, enjoy it.",
    authorEn: "Robert Eliot",
    category: "life"
  },
  {
    id: 5,
    quote: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 중요한 것은 계속 나아가는 용기다.",
    author: "윈스턴 처칠",
    quoteEn: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    authorEn: "Winston Churchill",
    category: "success"
  },
  {
    id: 6,
    quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 믿는 대로 될 것이다.",
    author: "헨리 포드",
    quoteEn: "Whether you think you can or think you can't, you're right.",
    authorEn: "Henry Ford",
    category: "mindset"
  },
  {
    id: 7,
    quote: "행복은 이미 만들어져 있는 것이 아니다. 그것은 당신의 행동으로부터 나온다.",
    author: "달라이 라마",
    quoteEn: "Happiness is not something ready made. It comes from your own actions.",
    authorEn: "Dalai Lama",
    category: "life"
  },
  {
    id: 8,
    quote: "바람이 불지 않을 때 바람개비를 돌리는 방법은 앞으로 달려나가는 것이다.",
    author: "데일 카네기",
    quoteEn: "If you want to gather honey, don't kick over the beehive.",
    authorEn: "Dale Carnegie",
    category: "courage"
  },
  {
    id: 9,
    quote: "우리가 할 수 있는 가장 아름다운 경험은 신비로움이다. 그것은 진정한 예술과 과학의 근원이다.",
    author: "알베르트 아인슈타인",
    quoteEn: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
    authorEn: "Albert Einstein",
    category: "wisdom"
  },
  {
    id: 10,
    quote: "미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것이다.",
    author: "피터 드러커",
    quoteEn: "The best way to predict the future is to create it.",
    authorEn: "Peter Drucker",
    category: "success"
  },
  {
    id: 11,
    quote: "끝까지 해보기 전에는 늘 불가능해 보인다.",
    author: "넬슨 만델라",
    quoteEn: "It always seems impossible until it's done.",
    authorEn: "Nelson Mandela",
    category: "courage"
  },
  {
    id: 12,
    quote: "우리의 유일한 한계는 내일에 대한 우리의 의심일 것이다.",
    author: "프랭클린 D. 루스벨트",
    quoteEn: "The only limit to our realization of tomorrow will be our doubts of today.",
    authorEn: "Franklin D. Roosevelt",
    category: "mindset"
  },
  {
    id: 13,
    quote: "자신을 믿어라. 자신의 능력을 신뢰하라. 자신의 힘에 대한 합리적인 자신감 없이는 성공하거나 행복할 수 없다.",
    author: "노먼 빈센트 필",
    quoteEn: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    authorEn: "Norman Vincent Peale",
    category: "mindset"
  },
  {
    id: 14,
    quote: "인생은 우리가 다른 계획을 세우느라 바쁠 때 일어나는 일이다.",
    author: "존 레논",
    quoteEn: "Life is what happens when you're busy making other plans.",
    authorEn: "John Lennon",
    category: "life"
  },
  {
    id: 15,
    quote: "단지 바라보기만 해서는 바다를 건널 수 없다.",
    author: "랍비 드라네스",
    quoteEn: "You can't cross the sea merely by standing and staring at the water.",
    authorEn: "Rabindranath Tagore",
    category: "courage"
  },
  {
    id: 16,
    quote: "시작하는 방법은 말하는 것을 멈추고 행동하기 시작하는 것이다.",
    author: "월트 디즈니",
    quoteEn: "The way to get started is to quit talking and begin doing.",
    authorEn: "Walt Disney",
    category: "success"
  },
  {
    id: 17,
    quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 계속 전진하라.",
    author: "데일 카네기",
    quoteEn: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    authorEn: "Dale Carnegie",
    category: "success"
  },
  {
    id: 18,
    quote: "사랑하는 사람의 잘못은 모래에 기록하고, 그의 고마움은 대리석에 기록하라.",
    author: "벤자민 프랭클린",
    quoteEn: "Write injuries in dust, benefits in marble.",
    authorEn: "Benjamin Franklin",
    category: "life"
  },
  {
    id: 19,
    quote: "지혜로운 사람은 당장 행동하고, 어리석은 사람은 차일피일 미룬다.",
    author: "윌리엄 셰익스피어",
    quoteEn: "Wisely and slow; they stumble that run fast.",
    authorEn: "William Shakespeare",
    category: "wisdom"
  },
  {
    id: 20,
    quote: "행동은 모든 성공의 기초가 되는 열쇠이다.",
    author: "파블로 피카소",
    quoteEn: "Action is the foundational key to all success.",
    authorEn: "Pablo Picasso",
    category: "success"
  },
  {
    id: 21,
    quote: "인생에서 가장 큰 모험은 자신이 꿈꾸는 삶을 사는 것이다.",
    author: "오프라 윈프리",
    quoteEn: "The biggest adventure you can take is to live the life of your dreams.",
    authorEn: "Oprah Winfrey",
    category: "life"
  },
  {
    id: 22,
    quote: "상상력은 지식보다 중요하다. 지식은 한계가 있지만 상상력은 온 세상을 둘러싼다.",
    author: "알베르트 아인슈타인",
    quoteEn: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    authorEn: "Albert Einstein",
    category: "wisdom"
  },
  {
    id: 23,
    quote: "우리가 두려워해야 할 유일한 것은 두려움 그 자체이다.",
    author: "프랭클린 D. 루스벨트",
    quoteEn: "The only thing we have to fear is fear itself.",
    authorEn: "Franklin D. Roosevelt",
    category: "courage"
  },
  {
    id: 24,
    quote: "어둠을 탓하기보다 한 자루의 촛불을 켜는 것이 낫다.",
    author: "공자",
    quoteEn: "It is better to light one small candle than to curse the darkness.",
    authorEn: "Confucius",
    category: "wisdom"
  },
  {
    id: 25,
    quote: "자신을 이기는 자가 가장 강한 자다.",
    author: "노자",
    quoteEn: "He who controls others may be powerful, but he who has mastered himself is mightier still.",
    authorEn: "Lao Tzu",
    category: "mindset"
  },
  {
    id: 26,
    quote: "실패를 해보지 않은 사람은 한 번도 새로운 일을 시도해 보지 않은 사람이다.",
    author: "알베르트 아인슈타인",
    quoteEn: "Anyone who has never made a mistake has never tried anything new.",
    authorEn: "Albert Einstein",
    category: "wisdom"
  },
  {
    id: 27,
    quote: "인생은 10%의 자신에게 일어나는 일과 90%의 그것에 반응하는 방식으로 구성된다.",
    author: "찰스 스윈돌",
    quoteEn: "Life is 10% what happens to you and 90% how you react to it.",
    authorEn: "Charles R. Swindoll",
    category: "life"
  },
  {
    id: 28,
    quote: "모든 꽃이 첫 번째 봄에 피는 것은 아니다. 각각의 꽃은 제철이 있다.",
    author: "켄지 마이애미",
    quoteEn: "Not all flowers bloom in the first spring. Each flower has its own season.",
    authorEn: "Unknown",
    category: "life"
  },
  {
    id: 29,
    quote: "위대한 일을 성취하기 위해선 행동해야 할 뿐만 아니라 꿈꿔야 하며, 계획할 뿐만 아니라 믿어야 한다.",
    author: "아나톨 프랑스",
    quoteEn: "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
    authorEn: "Anatole France",
    category: "success"
  },
  {
    id: 30,
    quote: "사랑은 자신 이외의 다른 사람을 위해 살고 싶게 만든다.",
    author: "빅토르 위고",
    quoteEn: "The supreme happiness of life is the conviction that we are loved.",
    authorEn: "Victor Hugo",
    category: "life"
  },
  {
    id: 31,
    quote: "기회는 올바른 준비를 갖춘 자를 편애한다.",
    author: "루이 파스퇴르",
    quoteEn: "Chance favors the prepared mind.",
    authorEn: "Louis Pasteur",
    category: "wisdom"
  },
  {
    id: 32,
    quote: "하루하루를 당신 인생의 마지막 날처럼 살라. 언젠가는 그날이 올 것이다.",
    author: "스티브 잡스",
    quoteEn: "If you live each day as if it was your last, someday you'll most certainly be right.",
    authorEn: "Steve Jobs",
    category: "life"
  },
  {
    id: 33,
    quote: "네가 세상을 바꾸고 싶다면, 네 방부터 정리해라.",
    author: "윌리엄 H. 맥레이븐",
    quoteEn: "If you want to change the world, start by making your bed.",
    authorEn: "William H. McRaven",
    category: "mindset"
  },
  {
    id: 34,
    quote: "어제의 나보다 오늘의 내가 더 나아지는 것에만 집중하라.",
    author: "마이클 조던",
    quoteEn: "Concentrate on getting better every day, compare yourself only to who you were yesterday.",
    authorEn: "Michael Jordan",
    category: "mindset"
  },
  {
    id: 35,
    quote: "세상에서 가장 강한 자는 다른 사람들의 도움 없이 스스로 홀로 설 수 있는 자다.",
    author: "헨리크 입센",
    quoteEn: "The strongest man in the world is he who stands most alone.",
    authorEn: "Henrik Ibsen",
    category: "courage"
  },
  {
    id: 36,
    quote: "너의 등불이 꺼졌을 때, 내 방의 불을 켜는 것은 의미가 없다.",
    author: "칼릴 지브란",
    quoteEn: "It is not the light of your lamp that I need, but the warmth of your hearth.",
    authorEn: "Kahlil Gibran",
    category: "life"
  },
  {
    id: 37,
    quote: "성공을 갈망하는 자는 먼저 스스로가 성공한 사람처럼 행동해야 한다.",
    author: "윌리엄 제임스",
    quoteEn: "Act as if what you do makes a difference. It does.",
    authorEn: "William James",
    category: "success"
  },
  {
    id: 40,
    quote: "가장 아름다운 것은 눈에 보이지 않으며 오직 마음으로만 느낄 수 있다.",
    author: "헬렌 켈러",
    quoteEn: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    authorEn: "Helen Keller",
    category: "life"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = quotes;
}
