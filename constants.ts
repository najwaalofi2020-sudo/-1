import { IdentityIcon, RightsIcon, DutiesIcon, EducationIcon, DigitalIcon, SocietyIcon, VisionIcon, LandmarkIcon, QuizIcon, HistoryIcon, NationalFigureIcon } from './components/Icons';

export const THEMES = [
  { 
    id: 'identity',
    title: 'الهوية الوطنية والانتماء والولاء للقائد',
    icon: IdentityIcon 
  },
  { 
    id: 'rights',
    title: 'حقوق الطالب (مدنية، اجتماعية، رقمية)',
    icon: RightsIcon
  },
  { 
    id: 'duties',
    title: 'واجبات الطالبات في المدرسة والمنزل والمجتمع',
    icon: DutiesIcon
  },
  { 
    id: 'education',
    title: 'ربط التعليم بقيم المواطنة',
    icon: EducationIcon
  },
  { 
    id: 'digital',
    title: 'المواطنة الرقمية',
    icon: DigitalIcon
  },
  { 
    id: 'society',
    title: 'قيم المجتمع العماني',
    icon: SocietyIcon
  },
  { 
    id: 'vision',
    title: 'عمان ورؤية 2040',
    icon: VisionIcon
  },
];

export const ACTIVITIES = [
    {
        id: 'landmarks',
        title: 'معالم عمانية خالدة',
        icon: LandmarkIcon,
        description: 'اكتشفي أبرز المعالم التاريخية والحضارية في سلطنة عمان.'
    },
    {
        id: 'families',
        title: 'الأسر الحاكمة في عمان',
        icon: HistoryIcon,
        description: 'تعرفي على تاريخ الأسر الحاكمة وإنجازاتهم الخالدة.'
    },
    {
        id: 'national-figures',
        title: 'شخصيات عمانية خلدها التاريخ',
        icon: NationalFigureIcon,
        description: 'تعرفي على سير وإسهامات أبرز الشخصيات في تاريخ عمان.'
    },
    {
        id: 'quiz',
        title: 'اختبر معلوماتك',
        icon: QuizIcon,
        description: 'شاركي في اختبار تفاعلي حول المبادرة وحقوقك وواجباتك.'
    }
];

export const LANDMARKS = [
    {
        id: 'mosque',
        name: 'جامع السلطان قابوس الأكبر',
        description: 'تحفة معمارية إسلامية حديثة، ويعد من أبرز المعالم في مسقط. يتميز بقبته الضخمة وثرياته الرائعة وسجادته العجمية التي تعد ثاني أكبر سجادة في العالم.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Sultan_Qaboos_Grand_Mosque_in_Muscat%2C_Oman_-_20130312.jpg'
    },
    {
        id: 'nizwa',
        name: 'قلعة نزوى',
        description: 'من أقدم وأضخم القلاع في سلطنة عمان، وتشتهر بشكلها الدائري الكبير. كانت حصناً منيعاً ومركزاً للعلم والحكم، وتروي تاريخاً عريقاً عن الدفاع والمنعة.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Nizwa_Fort_View.jpg'
    },
    {
        id: 'muttrah',
        name: 'سوق مطرح',
        description: 'أحد أقدم الأسواق في العالم العربي، وهو лабиринт من الأزقة الضيقة المليئة بروائح البخور واللبان والعطور. يعرض السوق مجموعة واسعة من المنتجات التقليدية.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Mutrah_Souq%2C_Muscat%2C_Oman.jpg'
    },
    {
        id: 'jabal',
        name: 'الجبل الأخضر',
        description: 'جزء من سلسلة جبال الحجر، ويشتهر بمناخه المعتدل صيفاً والبارد شتاءً. يعد وجهة سياحية فريدة بفضل مدرجاته الزراعية الخضراء التي تزرع فيها الفواكه والورود.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Jebel_Akhdar%2C_Oman.jpg'
    }
];

export const RULING_FAMILIES = [
    {
        id: 'yaruba',
        name: 'دولة اليعاربة',
        period: '(1624 - 1744)',
        description: 'أسسها الإمام ناصر بن مرشد اليعربي، وتعتبر فترة حكمهم العصر الذهبي الثاني في تاريخ عمان. تميزت هذه الفترة بتوحيد البلاد وطرد البرتغاليين وبناء أسطول بحري قوي.',
        achievements: [
            'توحيد البلاد تحت راية واحدة بعد فترة من الانقسامات.',
            'طرد القوات البرتغالية من مسقط وسواحل عمان بشكل نهائي.',
            'بناء أسطول بحري قوي سيطر على أجزاء واسعة من المحيط الهندي.',
            'تشييد قلاع وحصون منيعة مثل قلعة نزوى وحصن جبرين.'
        ],
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Jabrin_Castle_2018_03.jpg'
    },
    {
        id: 'busaid',
        name: 'الدولة البوسعيدية',
        period: '(1744 - الآن)',
        description: 'أسسها الإمام أحمد بن سعيد البوسعيدي، وهي السلالة الحاكمة الحالية في سلطنة عمان. شهدت عمان في عهدهم توسعاً تجارياً كبيراً، وفي العصر الحديث، قاد السلطان قابوس بن سعيد -طيب الله ثراه- نهضة شاملة، يكمل مسيرتها اليوم جلالة السلطان هيثم بن طارق المعظم.',
        achievements: [
            'تأسيس إمبراطورية تجارية واسعة امتد نفوذها إلى شرق أفريقيا.',
            'تحقيق نهضة حديثة شاملة في التعليم والصحة والبنية التحتية منذ عام 1970.',
            'ترسيخ سياسة خارجية متوازنة قائمة على السلام والصداقة مع دول العالم.',
            'إطلاق "رؤية عمان 2040" لتحقيق التنمية المستدامة والتنويع الاقتصادي.'
        ],
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Flag-map_of_the_Omani_Empire.png'
    }
];

export const NATIONAL_FIGURES = [
    {
        id: 'haitham',
        name: 'جلالة السلطان هيثم بن طارق المعظم',
        title: 'حفظه الله ورعاه',
        description: 'سلطان عُمان وقائد مسيرتها المتجددة. تولى مقاليد الحكم في يناير 2020، ليكمل مسيرة النهضة المباركة. يقود البلاد بحكمة ورؤية ثاقبة لتحقيق "رؤية عمان 2040"، التي تركز على التنويع الاقتصادي وتنمية القدرات الوطنية.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Haitham_bin_Tariq_Al_Said_2023.jpg'
    },
    {
        id: 'qaboos',
        name: 'السلطان قابوس بن سعيد',
        title: 'طيّب الله ثراه',
        description: 'باني نهضة عمان الحديثة. تولى الحكم عام 1970، وبدأ مسيرة تحديث شاملة في كل المجالات كالتعليم والصحة والبنية التحتية. عُرف بحكمته وسياسته الخارجية المتوازنة التي جعلت من عمان صوتًا للسلام في المنطقة والعالم.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Qaboos_bin_Said_al_Said.jpg/800px-Qaboos_bin_Said_al_Said.jpg'
    },
    {
        id: 'ahmed_bin_said',
        name: 'الإمام أحمد بن سعيد البوسعيدي',
        title: 'مؤسس الدولة البوسعيدية',
        description: 'مؤسس الدولة البوسعيدية عام 1744. كان قائدًا شجاعًا وحاكمًا حكيمًا نجح في توحيد البلاد وطرد الغزاة، وأعاد لعمان استقرارها وقوتها. يعتبره العمانيون رمزًا للوحدة الوطنية والشجاعة.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Al_Hazm_Fort_exterior.jpg'
    },
    {
        id: 'said_bin_sultan',
        name: 'السيد سعيد بن سلطان',
        title: 'حاكم الإمبراطورية العمانية',
        description: 'حكم خلال "العصر الذهبي" للإمبراطورية العمانية في القرن التاسع عشر. كان بحارًا ماهرًا وتاجرًا ذكيًا، ووسع نفوذ عمان التجاري ليصل إلى شرق أفريقيا، وجعل من زنجبار عاصمة ثانية لإمبراطوريته.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Said_bin_Sultan.jpg'
    },
    {
        id: 'al_farahidi',
        name: 'الخليل بن أحمد الفراهيدي',
        title: 'عالم لغوي وأديب',
        description: 'أحد أعظم علماء اللغة العربية والأدب عبر التاريخ، وهو من أصول عمانية. هو واضع علم العروض (موسيقى الشعر العربي) ومؤلف أول معجم للغة العربية "كتاب العين". يمثل إسهامات عمان الحضارية والفكرية العظيمة.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kitab_al-%27Ayn.jpg/800px-Kitab_al-%27Ayn.jpg'
    }
];


export const QUIZ_QUESTIONS = [
    {
        question: 'ما هي رؤية مبادرة "قيم وولاء"؟',
        options: [
          'تنظيم رحلات مدرسية',
          'بناء جيل واعٍ بهويته الوطنية',
          'تعليم البرمجة للطالبات',
          'الفوز بالمسابقات الرياضية'
        ],
        answer: 'بناء جيل واعٍ بهويته الوطنية'
    },
    {
        question: 'أي من التالي يعد من واجبات الطالبة في المجتمع؟',
        options: [
          'اللعب طوال اليوم',
          'احترام القوانين والحفاظ على الممتلكات العامة',
          'إهمال الواجبات المدرسية',
          'التحدث بصوت عالٍ في الأماكن العامة'
        ],
        answer: 'احترام القوانين والحفاظ على الممتلكات العامة'
    },
    {
        question: 'تهدف "رؤية عمان 2040" إلى...',
        options: [
          'التركيز على الماضي فقط',
          'تحقيق التنمية المستدامة والتنويع الاقتصادي',
          'تقليل عدد المدارس',
          'منع استخدام التكنولوجيا'
        ],
        answer: 'تحقيق التنمية المستدامة والتنويع الاقتصادي'
    },
    {
        question: 'من هو باني نهضة عمان الحديثة؟',
        options: [
          'الإمام أحمد بن سعيد',
          'الخليل بن أحمد الفراهيدي',
          'السلطان قابوس بن سعيد -طيّب الله ثراه-',
          'السيد سعيد بن سلطان'
        ],
        answer: 'السلطان قابوس بن سعيد -طيّب الله ثراه-'
    },
    {
        question: 'ماذا يعني "المواطنة الرقمية"؟',
        options: [
          'امتلاك هاتف ذكي',
          'اللعب على الإنترنت فقط',
          'استخدام التكنولوجيا بمسؤولية واحترام وأمان',
          'نشر الشائعات عبر وسائل التواصل الاجتماعي'
        ],
        answer: 'استخدام التكنولوجيا بمسؤولية واحترام وأمان'
    }
];