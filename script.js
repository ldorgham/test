const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const visitForm = document.querySelector(".visit-form");
const formNote = document.querySelector(".form-note");
const languageButtons = document.querySelectorAll(".language-button");
const revealCards = document.querySelectorAll(".reveal-card");

const translations = {
  en: {},
  ar: {
    navPrayer: "الصلاة",
    navNews: "الأخبار الطيبة",
    navSports: "الرياضة",
    navIntro: "التعارف",
    navVisit: "زيارة",
    heroEyebrow: "إيمان وصداقة وأسرة وخدمة",
    heroTitle: "مسجد ومركز نور الفجر المجتمعي",
    heroCopy:
      "مركز إسلامي مرحب للصلاة اليومية، والتعلم، وبرامج الشباب، والرياضة، وفرح المجتمع، وطرق حلال للتعارف بين العائلات بكرامة.",
    translateLabel: "ترجمة",
    heroPrayer: "أوقات الصلاة",
    heroGoodNews: "أخبار اليوم الطيبة",
    prayerEyebrow: "الصلاة والعبادة",
    prayerTitle: "بيت هادئ للصلاة والتأمل والانتماء.",
    prayerCopy:
      "انضموا إلينا للصلوات الخمس، والجمعة، وبرامج رمضان، وإفطارات العائلة، ووقت هادئ في المسجد. نرحب بالضيوف الجدد بلطف واحترام.",
    newsEyebrow: "أخبار المسلمين المحلية الطيبة",
    newsTitle: "قصص مشرقة صغيرة من مجتمعنا كل يوم.",
    newsCopy: "نشرة مفرحة تحتفي بالرحمة والكرم والإنجاز واللطف اليومي.",
    newsLeadTitle: "طلاب مدرسة نهاية الأسبوع يجمعون 600 وجبة للجيران.",
    newsLeadCopy:
      "قامت العائلات بتجهيز وجبات بعد حلقة القرآن وتسليمها لشركاء الملاجئ المحلية قبل العصر.",
    sportsEyebrow: "الأنشطة الرياضية",
    sportsTitle: "نتحرك معا، ونتنافس بلطف، ونبني الأخوة والأخوات.",
    sportsCopy:
      "تستضيف الصالة والملاعب أنشطة للمبتدئين، ودوريات تنافسية، وبطولات عائلية، وبرامج عافية في بيئة محتشمة ومحترمة.",
    marriageEyebrow: "التعارف للزواج",
    marriageTitle: "تعارف بنية صادقة ووضوح ودعم مجتمعي.",
    marriageCopy:
      "يستضيف مركز نور الفجر لقاءات محترمة للمسلمين والمسلمات غير المتزوجين الباحثين عن الزواج. يركز البرنامج على النية الحلال، وحسن الخلق، والخصوصية، ومشاركة الأسرة عند الرغبة.",
    registerInterest: "سجل الاهتمام",
    seeFormat: "شاهد الطريقة",
    formatTitle: "كيف تعمل الأمسيات",
    formatCopy:
      "تتوفر أماكن جلوس منفصلة، وآداب واضحة، ومساحة اجتماعية بإشراف حتى يشعر المشاركون بالراحة.",
    visitEyebrow: "زيارة أو انضمام",
    visitTitle: "تعال للصلاة. وابق للمجتمع.",
    visitCopy:
      "220 شارع كريسنت. الدخول من أبواب الساحة. المضيفون متاحون قبل الجمعة ومدرسة نهاية الأسبوع والبرامج المسائية.",
    formName: "الاسم",
    formInterest: "أنا مهتم بـ",
    formMessage: "رسالة",
    formButton: "إرسال الرسالة",
  },
  ur: {
    navPrayer: "نماز",
    navNews: "اچھی خبریں",
    navSports: "کھیل",
    navIntro: "تعارف",
    navVisit: "تشریف لائیں",
    heroEyebrow: "ایمان، دوستی، خاندان، اور خدمت",
    heroTitle: "نور الفجر کمیونٹی مسجد اور ایکٹیویٹی سینٹر",
    heroCopy:
      "روزانہ نماز، تعلیم، نوجوانوں کے پروگرام، کھیل، کمیونٹی کی خوشیاں، اور خاندانوں کے لیے باوقار حلال تعارف کا خوش آمدیدی اسلامی مرکز۔",
    translateLabel: "ترجمہ",
    heroPrayer: "نماز کے اوقات",
    heroGoodNews: "آج کی اچھی خبر",
    prayerEyebrow: "نماز اور عبادت",
    prayerTitle: "نماز، غور و فکر، اور اپنائیت کا پرسکون گھر۔",
    prayerCopy:
      "پانچ وقت کی نماز، جمعہ، رمضان پروگرام، فیملی افطار، اور مسجد میں سکون کے وقت کے لیے ہمارے ساتھ شامل ہوں۔ نئے مہمانوں کا گرمجوشی سے استقبال کیا جاتا ہے۔",
    newsEyebrow: "مقامی مسلم اچھی خبریں",
    newsTitle: "ہماری کمیونٹی کی روزانہ چھوٹی روشن کہانیاں۔",
    newsCopy: "رحمت، سخاوت، کامیابی، اور روزمرہ نیکی کو منانے والی خوشگوار خبرنامہ۔",
    newsLeadTitle: "ویک اینڈ اسکول کے طلبہ نے پڑوسیوں کے لیے 600 کھانے جمع کیے۔",
    newsLeadCopy:
      "خاندانوں نے قرآن کلاس کے بعد کھانے کے پیکٹ تیار کیے اور عصر سے پہلے مقامی شیلٹر پارٹنرز تک پہنچائے۔",
    sportsEyebrow: "کھیلوں کی سرگرمیاں",
    sportsTitle: "ساتھ چلیں، اچھے اخلاق سے مقابلہ کریں، بھائی چارہ اور بہن چارہ بنائیں۔",
    sportsCopy:
      "ہمارا جم اور میدان نئے آنے والوں کے لیے کھیل، لیگ، فیملی ٹورنامنٹ، اور باحیا ماحول میں فلاحی پروگرام پیش کرتے ہیں۔",
    marriageEyebrow: "شادی کے لیے تعارف",
    marriageTitle: "اخلاص، وضاحت، اور کمیونٹی سپورٹ کے ساتھ ملاقات۔",
    marriageCopy:
      "نور الفجر غیر شادی شدہ مسلمان مردوں اور خواتین کے لیے باعزت اجتماعات منعقد کرتا ہے جو شادی کے خواہشمند ہیں۔ پروگرام حلال نیت، اچھے اخلاق، رازداری، اور خاندان کی شمولیت کو اہمیت دیتا ہے۔",
    registerInterest: "دلچسپی درج کریں",
    seeFormat: "طریقہ دیکھیں",
    formatTitle: "یہ نشستیں کیسے ہوتی ہیں",
    formatCopy:
      "علیحدہ بیٹھنے، واضح آداب، اور نگرانی والی سماجی جگہ دستیاب ہے تاکہ شرکا اطمینان سے گفتگو کر سکیں۔",
    visitEyebrow: "تشریف لائیں یا شامل ہوں",
    visitTitle: "نماز کے لیے آئیں۔ کمیونٹی کے لیے ٹھہریں۔",
    visitCopy:
      "220 کریسنٹ ایونیو۔ صحن کے دروازوں سے داخل ہوں۔ جمعہ، ویک اینڈ اسکول، اور شام کے پروگراموں سے پہلے مہمان میزبان موجود ہوتے ہیں۔",
    formName: "نام",
    formInterest: "مجھے دلچسپی ہے",
    formMessage: "پیغام",
    formButton: "پیغام بھیجیں",
  },
  es: {
    navPrayer: "Oración",
    navNews: "Buenas noticias",
    navSports: "Deportes",
    navIntro: "Presentaciones",
    navVisit: "Visitar",
    heroEyebrow: "Fe, amistad, familia y servicio",
    heroTitle: "Mezquita y Centro Comunitario Nuralfajr",
    heroCopy:
      "Un centro islámico acogedor para la oración diaria, el aprendizaje, programas juveniles, deportes, alegría comunitaria y caminos halal para que las familias se conozcan con dignidad.",
    translateLabel: "Traducir",
    heroPrayer: "Horarios de oración",
    heroGoodNews: "Buenas noticias de hoy",
    prayerEyebrow: "Oración y adoración",
    prayerTitle: "Una casa tranquila para salah, reflexión y pertenencia.",
    prayerCopy:
      "Acompáñenos en las cinco oraciones diarias, Jumu’ah, programas de Ramadán, iftars familiares y momentos de calma en la mezquita.",
    newsEyebrow: "Buenas noticias musulmanas locales",
    newsTitle: "Pequeñas historias luminosas de nuestra comunidad, todos los días.",
    newsCopy: "Un boletín positivo que celebra misericordia, generosidad, logros y bondad diaria.",
    newsLeadTitle: "Estudiantes de fin de semana reúnen 600 comidas para vecinos.",
    newsLeadCopy:
      "Las familias prepararon kits de comida después de la clase de Qur’an y los entregaron a refugios locales antes de Asr.",
    sportsEyebrow: "Actividades deportivas",
    sportsTitle: "Moverse juntos. Competir con bondad. Construir hermandad.",
    sportsCopy:
      "Nuestro gimnasio y campos ofrecen recreación para principiantes, ligas competitivas, torneos familiares y bienestar en ambientes modestos y respetuosos.",
    marriageEyebrow: "Presentaciones para matrimonio",
    marriageTitle: "Conocerse con sinceridad, claridad y apoyo comunitario.",
    marriageCopy:
      "Nuralfajr organiza reuniones respetuosas para hombres y mujeres musulmanes solteros que buscan matrimonio. El programa centra la intención halal, los buenos modales, la privacidad y la participación familiar cuando se desea.",
    registerInterest: "Registrar interés",
    seeFormat: "Ver formato",
    formatTitle: "Cómo funcionan las noches",
    formatCopy:
      "Hay asientos separados, etiqueta clara y espacio social acompañado para que los participantes se sientan cómodos.",
    visitEyebrow: "Visitar o unirse",
    visitTitle: "Venga por salah. Quédese por la comunidad.",
    visitCopy:
      "220 Crescent Avenue. Entre por las puertas del patio. Hay anfitriones disponibles antes de Jumu’ah, la escuela de fin de semana y los programas de la tarde.",
    formName: "Nombre",
    formInterest: "Me interesa",
    formMessage: "Mensaje",
    formButton: "Enviar mensaje",
  },
};

document.querySelectorAll("[data-i18n]").forEach((element) => {
  element.dataset.defaultText = element.textContent.trim();
});

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

visitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent =
    document.documentElement.lang === "es"
      ? "Gracias. Un coordinador de Nuralfajr se pondría en contacto pronto."
      : document.documentElement.lang === "ar"
        ? "شكرا لكم. سيتواصل معكم منسق من مركز نور الفجر قريبا."
        : document.documentElement.lang === "ur"
          ? "شکریہ۔ نور الفجر کمیونٹی کا کوآرڈینیٹر جلد رابطہ کرے گا۔"
          : "Thank you. A Nuralfajr Community coordinator would follow up soon.";
  visitForm.reset();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;

    languageButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" || lang === "ur" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = translations[lang][key] || element.dataset.defaultText;
    });
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealCards.forEach((card) => revealObserver.observe(card));
