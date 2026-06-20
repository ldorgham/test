const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const visitForm = document.querySelector(".visit-form");
const formNote = document.querySelector(".form-note");
const languageButtons = document.querySelectorAll(".language-button");
const revealCards = document.querySelectorAll(".reveal-card");

const common = {
  es: {
    brandSubtitle: "Mezquita y Centro de Actividades",
    translateLabel: "Traducir",
    navPrayer: "Oración",
    navNews: "Buenas noticias",
    navSports: "Deportes",
    navIntro: "Presentaciones",
    navVisit: "Visitar",
    backIntro: "Volver a presentaciones",
    heroEyebrow: "Fe, amistad, familia y servicio",
    heroTitle: "Mezquita y Centro Comunitario Nuralfajr",
    heroCopy:
      "Un centro islámico acogedor para la oración diaria, el aprendizaje, programas juveniles, deportes, alegría comunitaria y caminos halal para que las familias se conozcan con dignidad.",
    heroPrayer: "Horarios de oración",
    heroGoodNews: "Buenas noticias de hoy",
    todayAt: "Hoy en Nuralfajr",
    quickQuran: "Círculo de Qur’an",
    quickQuranSub: "Noches entre semana después de Maghrib",
    quickSports: "Ligas de hermanos y hermanas",
    quickSportsSub: "Baloncesto, fútbol, voleibol",
    quickMarriage: "Presentaciones halal",
    quickMarriageSub: "Noches guiadas para conocerse",
    prayerEyebrow: "Oración y adoración",
    prayerTitle: "Una casa tranquila para salah, reflexión y pertenencia.",
    prayerCopy:
      "Acompáñenos en las cinco oraciones diarias, Jumu’ah, programas de Ramadán, iftars familiares y momentos de calma en la mezquita.",
    friday: "Viernes",
    jummahTitle: "Oraciones de Jumu’ah",
    jummahCopy: "Primera jutbah a las 12:45 PM. Segunda jutbah a la 1:45 PM con asientos adicionales.",
    everyDay: "Todos los días",
    openPrayerTitle: "Sala de oración abierta",
    openPrayerCopy: "Espacios limpios y accesibles, áreas de wudu, sala familiar y anfitriones.",
    learningEyebrow: "Aprendizaje",
    learningTitle: "Clases que fortalecen corazones y hogares.",
    learningCopy:
      "Tajweed, seerah, árabe básico, halaqah juvenil, apoyo para conversos, noches de crianza y talleres prácticos sobre dinero, matrimonio, bienestar y servicio.",
    newsEyebrow: "Buenas noticias musulmanas locales",
    newsTitle: "Pequeñas historias luminosas de nuestra comunidad, todos los días.",
    newsCopy: "Un boletín positivo que celebra misericordia, generosidad, logros y bondad diaria.",
    today: "Hoy",
    newsLeadTitle: "Estudiantes de fin de semana reúnen 600 comidas para vecinos.",
    newsLeadCopy:
      "Las familias prepararon kits de comida después de la clase de Qur’an y los entregaron a refugios locales antes de Asr.",
    communityWin: "Logro comunitario",
    news2Title: "Amina recibe un premio juvenil de voluntariado.",
    news2Copy: "Su círculo de tutoría ayudó a 18 estudiantes a ganar confianza en matemáticas.",
    mercyMoment: "Momento de misericordia",
    news3Title: "Hermanos reparan el porche de una persona mayor antes de la lluvia.",
    news3Copy: "Un equipo de sábado terminó compartiendo té, duas y nuevas amistades.",
    familyJoy: "Alegría familiar",
    news4Title: "El desayuno de nuevos padres da la bienvenida a siete bebés.",
    news4Copy: "Abuelos, tías y tíos llenaron el salón con consejos y risas.",
    sportsEyebrow: "Actividades deportivas",
    sportsTitle: "Moverse juntos. Competir con bondad. Construir hermandad.",
    sportsCopy:
      "Nuestro gimnasio y campos ofrecen recreación para principiantes, ligas competitivas, torneos familiares y bienestar en ambientes modestos y respetuosos.",
    monThu: "Lun. y jue.",
    sport1Title: "Baloncesto para hermanos",
    sport1Copy: "Juego abierto, noches de liga y sesiones de habilidades para mayores de 16 años.",
    tuesday: "Martes",
    sport2Title: "Voleibol para hermanas",
    sport2Copy: "Gimnasio privado, equipos rotativos, entrenamiento y té social después.",
    saturday: "Sábado",
    sport3Title: "Fútbol juvenil",
    sport3Copy: "Grupos U10, U13 y adolescentes enfocados en trabajo en equipo, adab y condición física.",
    sunday: "Domingo",
    sport4Title: "Caminata familiar de bienestar",
    sport4Copy: "Una ruta apta para cochecitos por el parque seguida de batidos en el centro.",
    marriageEyebrow: "Presentaciones para matrimonio",
    marriageTitle: "Conocerse con sinceridad, claridad y apoyo comunitario.",
    marriageCopy:
      "Nuralfajr organiza reuniones respetuosas para hombres y mujeres musulmanes solteros que buscan matrimonio. El programa centra la intención halal, los buenos modales, la privacidad y la participación familiar cuando se desea.",
    registerInterest: "Registrar interés",
    seeFormat: "Ver formato",
    formatTitle: "Cómo funcionan las noches",
    step1: "Paso 1",
    step2: "Paso 2",
    step3: "Paso 3",
    step4: "Paso 4",
    cardWelcomeTitle: "Bienvenida breve del imam y anfitriones comunitarios.",
    cardIceTitle: "Dinámicas en grupos pequeños sobre valores, familia, fe y planes futuros.",
    cardFamilyTitle: "Tiempo opcional en mesa familiar para padres o tutores.",
    cardFollowTitle: "Solicitudes privadas de seguimiento manejadas por coordinadores confiables.",
    comfortEtiquette: "Comodidad y etiqueta",
    cardEtiquetteTitle:
      "Hay asientos separados, etiqueta clara y espacio social acompañado para que los participantes se sientan cómodos.",
    viewExpect: "Ver qué esperar",
    viewRoom: "Ver la sala",
    formatCopy:
      "Hay asientos separados, etiqueta clara y espacio social acompañado para que los participantes se sientan cómodos.",
    service: "Servicio",
    program1Title: "Zakat y despensa de alimentos",
    program1Copy: "Apoyo confidencial, distribución de alimentos, oportunidades laborales y ayuda de emergencia.",
    youth: "Juventud",
    program2Title: "Luces del viernes por la noche",
    program2Copy: "Pizza, halaqah, juegos, mentoría y tiempo de gimnasio después de Isha.",
    families: "Familias",
    program3Title: "Cena comunitaria mensual",
    program3Copy: "Mesas compartidas, bienvenida a nuevos miembros, manualidades infantiles y proyectos locales.",
    visitEyebrow: "Visitar o unirse",
    visitTitle: "Venga por salah. Quédese por la comunidad.",
    visitCopy:
      "220 Crescent Avenue. Entre por las puertas del patio. Hay anfitriones disponibles antes de Jumu’ah, la escuela de fin de semana y los programas de la tarde.",
    formName: "Nombre",
    formNamePlaceholder: "Su nombre",
    formInterest: "Me interesa",
    formMessage: "Mensaje",
    formMessagePlaceholder: "¿Cómo podemos ayudar?",
    interestPrayer: "Oración y visita a la mezquita",
    interestNews: "Enviar buenas noticias",
    interestSports: "Actividades deportivas",
    interestMarriage: "Presentaciones para matrimonio",
    interestClasses: "Clases y programas juveniles",
    formButton: "Enviar mensaje",
    footerCopy: "Oración, aprendizaje, bienestar, servicio y vida familiar bajo un mismo techo acogedor.",
    detailWhat: "Qué esperar",
    helpful: "Nota útil",
    returnFormat: "Volver al formato completo",
    detailWelcomeEyebrow: "Paso 1",
    detailWelcomeTitle: "Bienvenida del imam y anfitriones",
    detailWelcomeCopy: "La noche comienza con claridad, adab y una explicación tranquila del propósito del encuentro.",
    welcomeP:
      "Los participantes son recibidos por el imam y anfitriones capacitados. La apertura establece el tono: intención sincera, conversación respetuosa, privacidad y sin presión.",
    welcomeLi1: "Un recordatorio breve sobre intención halal y buenos modales.",
    welcomeLi2: "Una explicación del formato de la noche y la distribución de la sala.",
    welcomeLi3: "Guía clara sobre presentaciones, límites y solicitudes de seguimiento.",
    welcomeNote: "Llegue unos minutos antes para que los anfitriones puedan recibirle y responder preguntas privadas.",
    detailIceEyebrow: "Paso 2",
    detailIceTitle: "Dinámicas guiadas en grupos pequeños",
    detailIceCopy:
      "Las preguntas ayudan a hablar de valores, familia, fe y planes futuros sin conversaciones incómodas.",
    iceP:
      "Los anfitriones guían a grupos pequeños con preguntas cuidadosas. No es una cita rápida; es una primera impresión respetuosa basada en carácter y claridad.",
    iceLi1: "Preguntas sobre deen, comunicación, familia, trabajo y vida comunitaria.",
    iceLi2: "Rondas cortas y estructuradas para que todos puedan hablar.",
    iceLi3: "Anfitriones cercanos para mantener un ambiente cómodo y digno.",
    iceNote: "Piense en dos o tres valores que quisiera que un futuro cónyuge entendiera de usted.",
    detailFamilyEyebrow: "Paso 3",
    detailFamilyTitle: "Tiempo opcional en mesa familiar",
    detailFamilyCopy:
      "Padres y tutores pueden conocer a los anfitriones, hacer preguntas y entender el proceso sin quitar voz al participante.",
    familyP:
      "La participación familiar es bienvenida cuando se desea. Una mesa separada permite que padres o tutores aprendan la estructura y compartan contexto útil.",
    familyLi1: "Los anfitriones explican privacidad, etiqueta y próximos pasos.",
    familyLi2: "Las familias pueden hacer preguntas prácticas sobre el proceso.",
    familyLi3: "Los participantes deciden cuánta participación familiar desean.",
    familyNote: "Esta parte es opcional. Algunas personas vienen solas y otras con apoyo familiar.",
    detailFollowEyebrow: "Paso 4",
    detailFollowTitle: "Solicitudes privadas de seguimiento",
    detailFollowCopy:
      "Coordinadores confiables manejan los próximos pasos con discreción para evitar presión o exposición.",
    followP:
      "Después del evento, los participantes pueden solicitar una conversación de seguimiento. Los coordinadores protegen la privacidad y avanzan solo cuando ambas personas están cómodas.",
    followLi1: "No hay emparejamientos ni anuncios públicos.",
    followLi2: "El interés mutuo se maneja en privado por coordinadores capacitados.",
    followLi3: "Los próximos pasos pueden incluir una conversación acompañada o presentación familiar.",
    followNote: "Usted puede decir no, esperar, hacer preguntas o pedir un proceso más lento.",
    detailEtiquetteEyebrow: "Comodidad y etiqueta",
    detailEtiquetteTitle: "Espacio claro, cómodo y acompañado",
    detailEtiquetteCopy:
      "La sala está organizada para que los participantes conversen con sinceridad, seguridad, respeto y sin presión.",
    etiquetteP:
      "El ambiente está estructurado con intención. Asientos separados, anfitriones visibles y etiqueta clara ayudan a todos a saber qué esperar.",
    etiquetteLi1: "Hay asientos separados y áreas sociales abiertas.",
    etiquetteLi2: "Anfitriones y acompañantes permanecen visibles y accesibles.",
    etiquetteLi3: "Las expectativas de conversación se explican claramente.",
    etiquetteNote: "El propósito es comodidad, no vigilancia. La estructura protege la dignidad.",
  },
  ar: {
    brandSubtitle: "مسجد ومركز أنشطة",
    translateLabel: "ترجمة",
    navPrayer: "الصلاة",
    navNews: "الأخبار الطيبة",
    navSports: "الرياضة",
    navIntro: "التعارف",
    navVisit: "زيارة",
    backIntro: "العودة إلى التعارف",
    heroEyebrow: "إيمان وصداقة وأسرة وخدمة",
    heroTitle: "مسجد ومركز نور الفجر المجتمعي",
    heroCopy: "مركز إسلامي مرحب للصلاة اليومية والتعلم وبرامج الشباب والرياضة وفرح المجتمع وطرق حلال للتعارف بكرامة.",
    heroPrayer: "أوقات الصلاة",
    heroGoodNews: "أخبار اليوم الطيبة",
    todayAt: "اليوم في نور الفجر",
    quickQuran: "حلقة القرآن",
    quickQuranSub: "ليالي الأسبوع بعد المغرب",
    quickSports: "دوريات الإخوة والأخوات",
    quickSportsSub: "كرة السلة، كرة القدم، الكرة الطائرة",
    quickMarriage: "تعارف حلال",
    quickMarriageSub: "أمسيات تعارف موجهة",
    prayerEyebrow: "الصلاة والعبادة",
    prayerTitle: "بيت هادئ للصلاة والتأمل والانتماء.",
    prayerCopy: "انضموا إلينا للصلوات الخمس والجمعة وبرامج رمضان وإفطارات العائلة ووقت هادئ في المسجد.",
    friday: "الجمعة",
    jummahTitle: "صلاة الجمعة",
    jummahCopy: "الخطبة الأولى 12:45 ظهرا. الخطبة الثانية 1:45 ظهرا مع مقاعد إضافية.",
    everyDay: "كل يوم",
    openPrayerTitle: "مصلى مفتوح",
    openPrayerCopy: "أماكن صلاة نظيفة وميسرة، مناطق وضوء، غرفة عائلية، ومضيفون.",
    learningEyebrow: "التعلم",
    learningTitle: "دروس تقوي القلوب والبيوت.",
    learningCopy: "تجويد، سيرة، أساسيات العربية، حلقات الشباب، دعم المهتدين، أمسيات التربية، وورش عملية.",
    newsEyebrow: "أخبار المسلمين المحلية الطيبة",
    newsTitle: "قصص مشرقة من مجتمعنا كل يوم.",
    newsCopy: "نشرة مفرحة تحتفي بالرحمة والكرم والإنجاز واللطف اليومي.",
    today: "اليوم",
    newsLeadTitle: "طلاب مدرسة نهاية الأسبوع يجمعون 600 وجبة للجيران.",
    newsLeadCopy: "جهزت العائلات وجبات بعد حلقة القرآن وسلمتها لشركاء محليين قبل العصر.",
    communityWin: "إنجاز مجتمعي",
    news2Title: "أمينة تحصل على جائزة تطوع شبابية.",
    news2Copy: "ساعدت حلقة التعليم الخاصة بها 18 طالبا على الثقة في الرياضيات.",
    mercyMoment: "لحظة رحمة",
    news3Title: "إخوة يصلحون شرفة مسن قبل المطر.",
    news3Copy: "تحول عمل السبت إلى شاي ودعاء وصداقات جديدة.",
    familyJoy: "فرح عائلي",
    news4Title: "فطور الآباء الجدد يرحب بسبعة أطفال.",
    news4Copy: "امتلأت القاعة بالنصائح والضحك من الأجداد والعمات والأعمام.",
    sportsEyebrow: "الأنشطة الرياضية",
    sportsTitle: "نتحرك معا، ونتنافس بلطف، ونبني الأخوة.",
    sportsCopy: "تستضيف الصالة والملاعب أنشطة للمبتدئين ودوريات وبطولات عائلية في بيئة محتشمة.",
    monThu: "الإثنين والخميس",
    sport1Title: "كرة السلة للإخوة",
    sport1Copy: "لعب مفتوح ودوريات وتدريبات مهارية لعمر 16 فما فوق.",
    tuesday: "الثلاثاء",
    sport2Title: "الكرة الطائرة للأخوات",
    sport2Copy: "وقت خاص في الصالة، فرق متناوبة، تدريب، وشاي اجتماعي.",
    saturday: "السبت",
    sport3Title: "كرة قدم الشباب",
    sport3Copy: "مجموعات للأطفال والمراهقين تركز على الفريق والأدب واللياقة.",
    sunday: "الأحد",
    sport4Title: "مشية العافية العائلية",
    sport4Copy: "مسار مناسب للعائلات في الحديقة ثم مشروبات في المركز.",
    marriageEyebrow: "التعارف للزواج",
    marriageTitle: "تعارف بنية صادقة ووضوح ودعم مجتمعي.",
    marriageCopy: "يستضيف نور الفجر لقاءات محترمة للمسلمين والمسلمات الباحثين عن الزواج مع نية حلال وخصوصية ومشاركة الأسرة عند الرغبة.",
    registerInterest: "سجل الاهتمام",
    seeFormat: "شاهد الطريقة",
    formatTitle: "كيف تعمل الأمسيات",
    step1: "الخطوة 1",
    step2: "الخطوة 2",
    step3: "الخطوة 3",
    step4: "الخطوة 4",
    cardWelcomeTitle: "ترحيب قصير من الإمام والمضيفين.",
    cardIceTitle: "حوارات صغيرة حول القيم والأسرة والإيمان والخطط المستقبلية.",
    cardFamilyTitle: "وقت اختياري لطاولة الأسرة للوالدين أو الأوصياء.",
    cardFollowTitle: "طلبات متابعة خاصة يتولاها منسقون موثوقون.",
    comfortEtiquette: "الراحة والآداب",
    cardEtiquetteTitle: "تتوفر مقاعد منفصلة وآداب واضحة ومساحة اجتماعية بإشراف حتى يشعر المشاركون بالراحة.",
    viewExpect: "شاهد ما تتوقعه",
    viewRoom: "شاهد ترتيب القاعة",
    formatCopy: "تتوفر مقاعد منفصلة وآداب واضحة ومساحة اجتماعية بإشراف حتى يشعر المشاركون بالراحة.",
    service: "الخدمة",
    program1Title: "الزكاة وبنك الطعام",
    program1Copy: "دعم سري، توزيع طعام، فرص عمل، ومساعدة طارئة.",
    youth: "الشباب",
    program2Title: "ليالي الجمعة",
    program2Copy: "طعام، حلقة، ألعاب، إرشاد، ووقت رياضي بعد العشاء.",
    families: "العائلات",
    program3Title: "عشاء المجتمع الشهري",
    program3Copy: "طعام مشترك، ترحيب بالأعضاء الجدد، أنشطة للأطفال، وتحديثات محلية.",
    visitEyebrow: "زيارة أو انضمام",
    visitTitle: "تعال للصلاة. وابق للمجتمع.",
    visitCopy: "220 شارع كريسنت. الدخول من أبواب الساحة. المضيفون متاحون قبل الجمعة والبرامج.",
    formName: "الاسم",
    formNamePlaceholder: "اسمك",
    formInterest: "أنا مهتم بـ",
    formMessage: "رسالة",
    formMessagePlaceholder: "كيف يمكننا المساعدة؟",
    interestPrayer: "الصلاة وزيارة المسجد",
    interestNews: "إرسال خبر طيب",
    interestSports: "الأنشطة الرياضية",
    interestMarriage: "التعارف للزواج",
    interestClasses: "الدروس وبرامج الشباب",
    formButton: "إرسال الرسالة",
    footerCopy: "صلاة وتعلم وعافية وخدمة وحياة عائلية تحت سقف مرحب.",
    detailWhat: "ماذا تتوقع",
    helpful: "ملاحظة مفيدة",
    returnFormat: "العودة إلى الطريقة الكاملة",
    detailWelcomeEyebrow: "الخطوة 1",
    detailWelcomeTitle: "ترحيب الإمام والمضيفين",
    detailWelcomeCopy: "تبدأ الأمسية بوضوح وأدب وشرح هادئ لهدف اللقاء.",
    welcomeP: "يرحب الإمام والمضيفون بالمشاركين ويحددون النية الصادقة والخصوصية وعدم الضغط.",
    welcomeLi1: "تذكير قصير بالنية الحلال وحسن الخلق.",
    welcomeLi2: "شرح تنسيق الأمسية وترتيب القاعة.",
    welcomeLi3: "إرشاد واضح للتعارف والحدود والمتابعة.",
    welcomeNote: "احضر مبكرا قليلا ليستقبلك المضيفون ويجيبوا عن الأسئلة.",
    detailIceEyebrow: "الخطوة 2",
    detailIceTitle: "حوارات صغيرة موجهة",
    detailIceCopy: "أسئلة تساعد على الحديث عن القيم والأسرة والإيمان والخطط دون ارتباك.",
    iceP: "يقود المضيفون مجموعات صغيرة بأسئلة مدروسة. الهدف انطباع محترم قائم على الخلق والوضوح.",
    iceLi1: "أسئلة عن الدين والتواصل والأسرة والعمل والحياة المجتمعية.",
    iceLi2: "جولات قصيرة ومنظمة حتى يتحدث الجميع.",
    iceLi3: "مضيفون قريبون للحفاظ على الراحة والوقار.",
    iceNote: "فكر في قيمتين أو ثلاث تريد أن يفهمها شريك المستقبل.",
    detailFamilyEyebrow: "الخطوة 3",
    detailFamilyTitle: "وقت اختياري لطاولة الأسرة",
    detailFamilyCopy: "يمكن للوالدين أو الأوصياء لقاء المضيفين وفهم العملية دون إلغاء صوت المشارك.",
    familyP: "مشاركة الأسرة مرحب بها عند الرغبة. توفر الطاولة مساحة للأسئلة والسياق المفيد.",
    familyLi1: "يشرح المضيفون الخصوصية والآداب والخطوات القادمة.",
    familyLi2: "يمكن للعائلات طرح أسئلة عملية.",
    familyLi3: "يقرر المشاركون مقدار مشاركة الأسرة المناسب.",
    familyNote: "هذا الجزء اختياري. الحضور وحدك أو مع الأسرة كلاهما محترم.",
    detailFollowEyebrow: "الخطوة 4",
    detailFollowTitle: "طلبات متابعة خاصة",
    detailFollowCopy: "يتولى منسقون موثوقون الخطوات التالية بسرية حتى لا يشعر أحد بالضغط.",
    followP: "بعد الحدث يمكن طلب متابعة. يحمي المنسقون الخصوصية ولا يتقدمون إلا براحة الطرفين.",
    followLi1: "لا توجد مطابقات أو إعلانات عامة.",
    followLi2: "يعالج الاهتمام المتبادل بشكل خاص.",
    followLi3: "قد تشمل الخطوات حديثا بإشراف أو تعارفا عائليا.",
    followNote: "يمكنك الرفض أو الانتظار أو طلب خطوات أبطأ.",
    detailEtiquetteEyebrow: "الراحة والآداب",
    detailEtiquetteTitle: "مساحة واضحة ومريحة وبإشراف",
    detailEtiquetteCopy: "ترتب القاعة ليشارك الناس بصدق وأمان واحترام دون ضغط.",
    etiquetteP: "البيئة منظمة بقصد. المقاعد المنفصلة والمضيفون المرئيون والآداب الواضحة تساعد الجميع.",
    etiquetteLi1: "تتوفر مقاعد منفصلة ومساحات اجتماعية مفتوحة.",
    etiquetteLi2: "يبقى المضيفون والمرافقون ظاهرين وقريبين.",
    etiquetteLi3: "تشرح توقعات الحديث بوضوح.",
    etiquetteNote: "الهدف الراحة لا المراقبة. التنظيم يحفظ الكرامة.",
  },
  ur: {
    brandSubtitle: "مسجد اور ایکٹیویٹی سینٹر",
    translateLabel: "ترجمہ",
    navPrayer: "نماز",
    navNews: "اچھی خبریں",
    navSports: "کھیل",
    navIntro: "تعارف",
    navVisit: "تشریف لائیں",
    backIntro: "تعارف پر واپس",
    heroEyebrow: "ایمان، دوستی، خاندان، اور خدمت",
    heroTitle: "نور الفجر کمیونٹی مسجد اور ایکٹیویٹی سینٹر",
    heroCopy: "روزانہ نماز، تعلیم، نوجوانوں کے پروگرام، کھیل، کمیونٹی کی خوشیاں، اور باوقار حلال تعارف کا مرکز۔",
    heroPrayer: "نماز کے اوقات",
    heroGoodNews: "آج کی اچھی خبر",
    todayAt: "آج نور الفجر میں",
    quickQuran: "قرآن حلقہ",
    quickQuranSub: "ہفتہ کی راتیں مغرب کے بعد",
    quickSports: "بھائیوں اور بہنوں کی لیگز",
    quickSportsSub: "باسکٹ بال، ساکر، والی بال",
    quickMarriage: "حلال تعارف",
    quickMarriageSub: "رہنمائی کے ساتھ ملاقات کی شامیں",
    prayerEyebrow: "نماز اور عبادت",
    prayerTitle: "نماز، غور و فکر، اور اپنائیت کا پرسکون گھر۔",
    prayerCopy: "پانچ وقت کی نماز، جمعہ، رمضان پروگرام، فیملی افطار، اور مسجد میں سکون کے لیے شامل ہوں۔",
    friday: "جمعہ",
    jummahTitle: "جمعہ کی نماز",
    jummahCopy: "پہلا خطبہ 12:45 PM۔ دوسرا خطبہ 1:45 PM، اضافی نشستوں کے ساتھ۔",
    everyDay: "ہر روز",
    openPrayerTitle: "کھلا نماز ہال",
    openPrayerCopy: "صاف اور آسان نماز کی جگہیں، وضو ایریا، فیملی روم، اور میزبان۔",
    learningEyebrow: "تعلیم",
    learningTitle: "دلوں اور گھروں کو مضبوط کرنے والی کلاسیں۔",
    learningCopy: "تجوید، سیرت، عربی basics، نوجوان حلقہ، نئے مسلمانوں کی مدد، والدین کی نشستیں، اور عملی ورکشاپس۔",
    newsEyebrow: "مقامی مسلم اچھی خبریں",
    newsTitle: "ہماری کمیونٹی کی روزانہ روشن کہانیاں۔",
    newsCopy: "رحمت، سخاوت، کامیابی، اور روزمرہ نیکی کو منانے والا خبرنامہ۔",
    today: "آج",
    newsLeadTitle: "ویک اینڈ اسکول کے طلبہ نے پڑوسیوں کے لیے 600 کھانے جمع کیے۔",
    newsLeadCopy: "خاندانوں نے قرآن کلاس کے بعد کھانے کے پیکٹ تیار کیے اور عصر سے پہلے پہنچائے۔",
    communityWin: "کمیونٹی کامیابی",
    news2Title: "آمنہ کو نوجوان رضاکار ایوارڈ ملا۔",
    news2Copy: "اس کے tutoring حلقے نے 18 طلبہ کی ریاضی میں اعتماد بڑھایا۔",
    mercyMoment: "رحمت کا لمحہ",
    news3Title: "بھائیوں نے بارش سے پہلے ایک بزرگ کا porch ٹھیک کیا۔",
    news3Copy: "ہفتہ کی خدمت چائے، دعاؤں، اور نئی دوستیوں میں بدل گئی۔",
    familyJoy: "خاندانی خوشی",
    news4Title: "نئے والدین کا ناشتہ سات بچوں کو خوش آمدید کہتا ہے۔",
    news4Copy: "دادا دادی، خالہ، چچا مشوروں اور ہنسی کے ساتھ جمع ہوئے۔",
    sportsEyebrow: "کھیلوں کی سرگرمیاں",
    sportsTitle: "ساتھ چلیں، اچھے اخلاق سے مقابلہ کریں، بھائی چارہ بنائیں۔",
    sportsCopy: "ہمارا جم اور میدان beginners، leagues، family tournaments، اور باحیا wellness پروگرام پیش کرتے ہیں۔",
    monThu: "پیر اور جمعرات",
    sport1Title: "بھائیوں کا باسکٹ بال",
    sport1Copy: "اوپن کھیل، لیگ نائٹس، اور 16 سال سے اوپر skill sessions۔",
    tuesday: "منگل",
    sport2Title: "بہنوں کا والی بال",
    sport2Copy: "private gym time، rotating teams، coaching، اور بعد میں چائے۔",
    saturday: "ہفتہ",
    sport3Title: "نوجوانوں کا ساکر",
    sport3Copy: "U10، U13، اور teen groups teamwork، adab، اور fitness پر focused۔",
    sunday: "اتوار",
    sport4Title: "فیملی wellness walk",
    sport4Copy: "پارک میں family-friendly walk، پھر center میں smoothies۔",
    marriageEyebrow: "شادی کے لیے تعارف",
    marriageTitle: "اخلاص، وضاحت، اور کمیونٹی سپورٹ کے ساتھ ملاقات۔",
    marriageCopy: "نور الفجر شادی کے خواہشمند غیر شادی شدہ مسلمان مردوں اور خواتین کے لیے باعزت اجتماعات منعقد کرتا ہے۔",
    registerInterest: "دلچسپی درج کریں",
    seeFormat: "طریقہ دیکھیں",
    formatTitle: "یہ نشستیں کیسے ہوتی ہیں",
    step1: "مرحلہ 1",
    step2: "مرحلہ 2",
    step3: "مرحلہ 3",
    step4: "مرحلہ 4",
    cardWelcomeTitle: "امام اور کمیونٹی میزبانوں کی مختصر خوش آمدید۔",
    cardIceTitle: "اقدار، خاندان، ایمان، اور مستقبل پر small-group گفتگو۔",
    cardFamilyTitle: "والدین یا guardians کے لیے optional family table time۔",
    cardFollowTitle: "trusted coordinators کے ذریعے private follow-up requests۔",
    comfortEtiquette: "آرام اور آداب",
    cardEtiquetteTitle: "علیحدہ نشستیں، واضح آداب، اور chaperoned social space دستیاب ہے تاکہ شرکا آرام سے گفتگو کریں۔",
    viewExpect: "کیا توقع رکھیں",
    viewRoom: "کمرے کا setup دیکھیں",
    formatCopy: "علیحدہ نشستیں، واضح آداب، اور نگرانی والی جگہ دستیاب ہے تاکہ شرکا اطمینان سے گفتگو کریں۔",
    service: "خدمت",
    program1Title: "زکات اور فوڈ پینٹری",
    program1Copy: "خفیہ مدد، grocery distribution، job leads، اور emergency assistance۔",
    youth: "نوجوان",
    program2Title: "Friday Night Lights",
    program2Copy: "Pizza، halaqah، games، mentoring، اور Isha کے بعد gym time۔",
    families: "خاندان",
    program3Title: "ماہانہ کمیونٹی dinner",
    program3Copy: "Potluck tables، نئے members welcome، بچوں کی crafts، اور local updates۔",
    visitEyebrow: "تشریف لائیں یا شامل ہوں",
    visitTitle: "نماز کے لیے آئیں۔ کمیونٹی کے لیے ٹھہریں۔",
    visitCopy: "220 کریسنٹ ایونیو۔ courtyard doors سے داخل ہوں۔ hosts جمعہ اور programs سے پہلے موجود ہوتے ہیں۔",
    formName: "نام",
    formNamePlaceholder: "آپ کا نام",
    formInterest: "مجھے دلچسپی ہے",
    formMessage: "پیغام",
    formMessagePlaceholder: "ہم کیسے مدد کر سکتے ہیں؟",
    interestPrayer: "نماز اور مسجد visit",
    interestNews: "اچھی خبر submit کریں",
    interestSports: "کھیلوں کی سرگرمیاں",
    interestMarriage: "شادی کے تعارف",
    interestClasses: "کلاسیں اور نوجوان programs",
    formButton: "پیغام بھیجیں",
    footerCopy: "نماز، تعلیم، wellness، خدمت، اور family life ایک welcoming roof کے نیچے۔",
    detailWhat: "کیا توقع رکھیں",
    helpful: "مددگار نوٹ",
    returnFormat: "مکمل format پر واپس",
    detailWelcomeEyebrow: "مرحلہ 1",
    detailWelcomeTitle: "امام اور میزبانوں کی خوش آمدید",
    detailWelcomeCopy: "شام وضاحت، adab، اور gathering کے مقصد کی پرسکون وضاحت سے شروع ہوتی ہے۔",
    welcomeP: "شرکا کا استقبال امام اور trained hosts کرتے ہیں۔ آغاز sincere intention، احترام، privacy، اور no pressure کا tone set کرتا ہے۔",
    welcomeLi1: "حلال نیت اور اچھے اخلاق کی مختصر یاد دہانی۔",
    welcomeLi2: "شام کے format اور room layout کی وضاحت۔",
    welcomeLi3: "تعارف، boundaries، اور follow-up requests پر واضح guidance۔",
    welcomeNote: "چند منٹ پہلے آئیں تاکہ hosts آپ کا استقبال کر سکیں۔",
    detailIceEyebrow: "مرحلہ 2",
    detailIceTitle: "Guided small-group icebreakers",
    detailIceCopy: "Prompts values، family، faith، اور future plans پر آسان گفتگو میں مدد کرتے ہیں۔",
    iceP: "Hosts thoughtful prompts کے ساتھ small groups guide کرتے ہیں۔ مقصد speed dating نہیں بلکہ character اور clarity پر respectful first impression ہے۔",
    iceLi1: "Deen، communication، family hopes، work، اور community life پر prompts۔",
    iceLi2: "مختصر structured rounds تاکہ سب کو بات کا موقع ملے۔",
    iceLi3: "Hosts nearby رہتے ہیں تاکہ tone comfortable اور dignified رہے۔",
    iceNote: "دو یا تین sincere values سوچیں جو future spouse کو سمجھنی چاہئیں۔",
    detailFamilyEyebrow: "مرحلہ 3",
    detailFamilyTitle: "Optional family table time",
    detailFamilyCopy: "Parents اور guardians hosts سے مل سکتے ہیں، questions پوچھ سکتے ہیں، اور process سمجھ سکتے ہیں۔",
    familyP: "Family involvement desired ہو تو welcome ہے۔ separate table questions اور helpful context کے لیے space دیتی ہے۔",
    familyLi1: "Hosts privacy، etiquette، اور follow-up steps explain کرتے ہیں۔",
    familyLi2: "Families process کے practical questions پوچھ سکتی ہیں۔",
    familyLi3: "Participants decide کرتے ہیں کہ family involvement کتنی مناسب ہے۔",
    familyNote: "یہ optional ہے۔ اکیلے آنا یا family support کے ساتھ آنا دونوں respectful ہیں۔",
    detailFollowEyebrow: "مرحلہ 4",
    detailFollowTitle: "Private follow-up requests",
    detailFollowCopy: "Trusted coordinators next steps discreetly handle کرتے ہیں تاکہ pressure نہ ہو۔",
    followP: "Event کے بعد participants follow-up conversation request کر سکتے ہیں۔ coordinators privacy protect کرتے ہیں۔",
    followLi1: "No public matching یا announcements۔",
    followLi2: "Mutual interest privately handled ہوتا ہے۔",
    followLi3: "Next steps میں chaperoned conversation یا family-aware introduction شامل ہو سکتا ہے۔",
    followNote: "آپ no کہہ سکتے ہیں، wait کر سکتے ہیں، questions پوچھ سکتے ہیں، یا slow process request کر سکتے ہیں۔",
    detailEtiquetteEyebrow: "آرام اور آداب",
    detailEtiquetteTitle: "واضح، آرام دہ، chaperoned space",
    detailEtiquetteCopy: "Room اس طرح arranged ہے کہ participants sincere، safe، respectful، اور unpressured engage کریں۔",
    etiquetteP: "Environment intentionally structured ہے۔ separate seating، visible hosts، اور clear etiquette سب کی مدد کرتے ہیں۔",
    etiquetteLi1: "Separate seating اور open social areas دستیاب ہیں۔",
    etiquetteLi2: "Hosts اور chaperones visible اور approachable رہتے ہیں۔",
    etiquetteLi3: "Conversation expectations clearly explain کی جاتی ہیں۔",
    etiquetteNote: "مقصد comfort ہے، surveillance نہیں۔ structure dignity کو protect کرتا ہے۔",
  },
};

const translations = { en: {}, ...common };

document.querySelectorAll("[data-i18n]").forEach((element) => {
  element.dataset.defaultText = element.textContent.trim();
});

document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
  element.dataset.defaultPlaceholder = element.getAttribute("placeholder") || "";
});

function setLanguage(lang) {
  const nextLang = translations[lang] ? lang : "en";

  document.documentElement.lang = nextLang;
  document.documentElement.dir = nextLang === "ar" || nextLang === "ur" ? "rtl" : "ltr";

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === nextLang);
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[nextLang][key] || element.dataset.defaultText;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.setAttribute(
      "placeholder",
      translations[nextLang][key] || element.dataset.defaultPlaceholder
    );
  });

  localStorage.setItem("nuralfajr-lang", nextLang);
}

function updateHeader() {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
}

if (navToggle && nav) {
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
}

if (visitForm && formNote) {
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
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
setLanguage(localStorage.getItem("nuralfajr-lang") || "en");

if ("IntersectionObserver" in window) {
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
} else {
  revealCards.forEach((card) => card.classList.add("is-visible"));
}
