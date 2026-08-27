export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  volume: string;
  family: string;
  notes: string[];
  notesDetailed: {
    head: string;
    heart: string;
    base: string;
  };
  sizes: {
    volume: string;
    price: number;
  }[];
  image?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "originelle",
    name: "خلاصة ليتوال أوريجينيل | L'Étoile Originelle",
    tagline: "زيت عطري فرنسي زهري خشبي مركز وخام للعلامات الراقية",
    price: 185,
    volume: "100 مل عينة / لتر جملة",
    family: "زهري خشبي مركز (Floral Woody)",
    notes: ["مطلق ياسمين غراس", "راتنج العنبر الدافئ", "صندل كاليدونيا الجديدة"],
    notesDetailed: {
      head: "برغموت إيطالي، أوراق البنفسج الندية",
      heart: "مطلق ياسمين غراس الفرنسي، مستخلص الورد الجوري",
      base: "بلورات العنبر الذهبي، المسك الأبيض، كريمة خشب الصندل"
    },
    sizes: [
      { volume: "عينة 100 مل", price: 120 },
      { volume: "عبوة 500 مل", price: 450 },
      { volume: "عبوة ألومنيوم 1 لتر", price: 820 }
    ],
    description: "زيت عطري خام فائق النقاوة والتركيز (Extrait de Parfum +30%). مطور للمصانع والبراندات الفاخرة الباحثة عن بصمة عطرية زهرية خشبية فريدة وثبات طويل المدى. يتوافق تماماً مع قواريرنا الزجاجية الكريستالية ومضخات الكبس المعيارية 15 مم.",
    image: "/images/perfumes/perfume_originelle.png"
  },
  {
    id: "bois",
    name: "مزيج بوا دو نوي الأساسي | Bois de Nuit",
    tagline: "مركب عطري جلدي خشبي غامض وفخم",
    price: 195,
    volume: "100 مل عينة / لتر جملة",
    family: "جلدي خشبي مركز (Woody Leather)",
    notes: ["أكورد الجلد التوسكاني", "خشب الأرز الفيرجيني", "نجيل الهند الهايتي"],
    notesDetailed: {
      head: "زيت حب الهال، الفلفل الأسود المدخن",
      heart: "أكورد الجلد التوسكاني الفاخر، خشب الأرز من فيرجينيا",
      base: "نجيل الهند الهايتي، خشب العنبر، لحاء الباتشولي"
    },
    sizes: [
      { volume: "عينة 100 مل", price: 130 },
      { volume: "عبوة 500 مل", price: 480 },
      { volume: "عبوة ألومنيوم 1 لتر", price: 860 }
    ],
    description: "مركب زيت عطري خام طاغي من الجلود الفاخرة وخشب الأرز مصمم لخطوط العطور النيش الرجالية واليونيسكس. ثبات فائق واستقرار استثنائي في التركيب ومثالي للتخفيف الكحولي حتى 25% EDP / Extrait.",
    image: "/images/perfumes/perfume_bois_de_nuit.png"
  },
  {
    id: "or-rose",
    name: "مركب أور روز الزهري | Or Rose Floral",
    tagline: "زيت عطري مركز من الورد الذهبي وجذور السوسن",
    price: 190,
    volume: "100 مل عينة / لتر جملة",
    family: "زهري شرقي مركز (Floral Oriental)",
    notes: ["مطلق الورد الدمشقي", "جذور السوسن الفلورنسي", "فانيلا مدغشقر"],
    notesDetailed: {
      head: "المندرين الصقلي، بشر الفلفل الوردي",
      heart: "مطلق الورد الدمشقي، سوسن فلورنسا، مستخلص الفاوانيا",
      base: "قرون فانيلا مدغشقر، الباتشولي الأبيض، حبوب التونكا"
    },
    sizes: [
      { volume: "عينة 100 مل", price: 125 },
      { volume: "عبوة 500 مل", price: 460 },
      { volume: "عبوة ألومنيوم 1 لتر", price: 840 }
    ],
    description: "مزيج عطري مشرق ورومانسي فائق التركيز. بتلات الورد الدمشقي المنتقاة بعناية ممزوجة بجذور السوسن الثمينة. تم تطويره لخطوط العطور الفاخرة الباحثة عن فوحان زهري راقي يدوم طويلاً.",
    image: "/images/perfumes/perfume_or_rose.png"
  },
  {
    id: "fleur-secrete",
    name: "خلاصة فلور سيكريت الحمضية | Fleur Secrète",
    tagline: "زيت عطري أثيري من البرغموت الإيطالي وزهر البرتقال النيرولي",
    price: 180,
    volume: "100 مل عينة / لتر جملة",
    family: "حمضي منعش مركز (Citrus Fresh)",
    notes: ["برغموت كالابريا", "زهر البرتقال (نيرولي)", "المسك الأبيض الشمسي"],
    notesDetailed: {
      head: "برغموت كالابريا، بشر الليمون، زيت النيرولي",
      heart: "مطلق زهر البرتقال، الشاي الأخضر المنعش",
      base: "بلورات المسك الأبيض، أكورد الأخشاب الشمسية، طحلب السنديان الناعم"
    },
    sizes: [
      { volume: "عينة 100 مل", price: 115 },
      { volume: "عبوة 500 مل", price: 430 },
      { volume: "عبوة ألومنيوم 1 لتر", price: 790 }
    ],
    description: "مركز عطري حمضي زهري منعش وفوار. نسبة عالية من زيت البرغموت المعصور على البارد مع نوتات النيرولي الفواحة. مثالي لمجموعات العطور الصيفية والربيعية ومعطرات الجسم الفاخرة.",
    image: "/images/perfumes/perfume_fleur_secrete.png"
  },
  {
    id: "originelle-intense",
    name: "ليتوال أوريجينيل إكستري بيور | L'Étoile Originelle Extrait",
    tagline: "مطلق زيت عطري نقي فائق التركيز بنسبة 35%",
    price: 215,
    volume: "100 مل عينة / لتر جملة",
    family: "زهري خشبي إكستري (Floral Woody Extrait)",
    notes: ["مطلق الياسمين المزدوج", "العنبر المدخن", "كريمة خشب الصندل"],
    notesDetailed: {
      head: "مستخلص البرغموت النقي، زيت الفلفل الوردي",
      heart: "مطلق ياسمين غراس المزدوج، الورد الملكي",
      base: "بلورات العنبر المدخن، كريمة الصندل، مستخلص الفانيلا الخام"
    },
    sizes: [
      { volume: "عينة 100 مل", price: 145 },
      { volume: "عبوة 500 مل", price: 520 },
      { volume: "عبوة ألومنيوم 1 لتر", price: 940 }
    ],
    description: "أعلى تركيز من الزيوت العطرية الخام في تشكيلتنا. مركب بمستخلص مضاعف من ياسمين غراس وبلورات العنبر المدخن. مخصص لإنتاج عطور Extrait de Parfum فائقة الفخامة مع زجاجات وأغطية الزاماك الثقيلة.",
    image: "/images/perfumes/perfume_originelle_intense.png"
  }
];
