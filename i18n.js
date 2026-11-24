// Curated Arabic copy. Official project, company, technology and course names stay unchanged.
(() => {
const translations = {
  "Home": "الرئيسية",
  "Projects": "المشروعات",
  "Integrations": "التكاملات",
  "Skills": "المهارات",
  "Experience": "الخبرة",
  "About": "عني",
  "Contact": "تواصل معي",
  "Visit GitHub": "زيارة GitHub",
  "Dark": "داكن",
  "Hello, I'm": "مرحبًا، أنا",
  "AI ENGINEER": "مهندس ذكاء اصطناعي",
  "| MOBILE APPLICATIONS TEAM LEAD": "| قائد فريق تطبيقات الموبايل",
  "Software Engineer · Android & FinTech": "مهندس برمجيات · Android والتقنيات المالية",
  "Senior Software Engineer Team Lead at": "مهندس برمجيات أول وقائد فريق في",
  "Riyadh, Saudi Arabia →": "الرياض، السعودية ←",
  "I turn complex payment and business workflows into mobile experiences people can rely on. With 9+ years in mobile engineering, I build Android and POS applications, integrate payment devices and SDKs, and lead teams from architecture to delivery. Today, I bring that experience to Nami’s payment products while exploring AI-assisted software engineering.": "أحوّل إجراءات الدفع والأعمال المعقدة إلى تجارب موبايل يمكن الاعتماد عليها. بخبرة تتجاوز 9 سنوات في هندسة تطبيقات الموبايل، أطور تطبيقات Android ونقاط البيع، وأربط أجهزة الدفع وحزم SDK، وأقود الفرق من تصميم المعمارية حتى التسليم. أوظف هذه الخبرة اليوم في منتجات الدفع لدى Nami، مع تطوير استخدامي للذكاء الاصطناعي في هندسة البرمجيات.",
  "FinTech & POS": "التقنيات المالية ونقاط البيع",
  "SDK Integration": "تكامل SDK",
  "Team Leadership": "قيادة الفرق",
  "View My Projects": "استعرض مشروعاتي",
  "Contact Me": "تواصل معي",
  "Years Experience": "سنوات من الخبرة",
  "Team Members Led": "أعضاء فريق قدته",
  "Have an idea?": "عندك فكرة؟",
  "Let’s build it together.": "لنبنِها معًا.",
  "Projects & Integrations": "المشروعات والتكاملات",
  "Selected Projects & Integrations": "نماذج من مشروعاتي وتكاملاتي",
  "All Projects": "كل المشروعات",
  "FinTech & Payments": "التقنيات المالية والمدفوعات",
  "Native Android": "تطوير Android الأصلي",
  "Development and enhancement of MADA POS applications across payment-device vendors, including partner integration, reliability, SDK customization, integrity checks, and payment transaction workflows.": "تطوير وتحسين تطبيقات MADA POS على أجهزة دفع من مورّدين مختلفين، بما يشمل تكامل الشركاء، والاعتمادية، وتخصيص SDK، وفحوص سلامة التطبيق، وإجراءات معاملات الدفع.",
  "Technology & capabilities": "التقنيات والإمكانات",
  "View Details": "عرض التفاصيل",
  "Cross-platform Mobile": "تطبيقات موبايل متعددة المنصات",
  "A Flutter merchant application with API integration, maps, notifications, and mobile authentication.": "تطبيق للتجار باستخدام Flutter، يدعم ربط APIs والخرائط والإشعارات والتحقق من هوية المستخدم على الموبايل.",
  "A native Android support application covering merchant onboarding, support tickets, and field-service workflows.": "تطبيق Android للدعم يشمل تسجيل التجار وتذاكر الدعم وإجراءات الخدمة الميدانية.",
  "Android POS and merchant workflows covering merchant onboarding, activity logging, support tickets, device integrations, and application reliability.": "تطبيقات Android لنقاط البيع وإجراءات التجار، تشمل تسجيل التجار وسجل النشاط وتذاكر الدعم وربط الأجهزة وتحسين اعتمادية التطبيق.",
  "Contributed to Automated Fuel Dispenser integrations and partner-company payment integrations as part of the Nami POS engineering work.": "ساهمت في تكامل أنظمة موزعات الوقود الآلية AFD وربط خدمات الدفع لدى الشركات الشريكة ضمن عملي في فريق هندسة نقاط البيع لدى Nami.",
  "Payment Integration": "تكامل المدفوعات",
  "Payment Integrations": "تكاملات المدفوعات",
  "Led end-to-end POS development across Morfine, dspread, and Android devices; maintained SDKs, supported integrations, and contributed to certification and payment-processing initiatives.": "قدت تطوير تطبيقات نقاط البيع عبر أجهزة Morfine وdspread وAndroid؛ وتوليت صيانة SDK ودعم التكاملات والمساهمة في إجراءات الاعتماد ومعالجة المدفوعات.",
  "POS Devices": "أجهزة نقاط البيع",
  "Payment Processing": "معالجة المدفوعات",
  "Developed an Android HR application to track teacher attendance and departure, using MVVM, Hilt, Room, Retrofit, Kotlin coroutines, XML, and Data Binding.": "طورت تطبيق Android للموارد البشرية لمتابعة حضور المعلمين وانصرافهم باستخدام MVVM وHilt وRoom وRetrofit وKotlin coroutines وXML وData Binding.",
  "HR & Operations": "الموارد البشرية والعمليات",
  "Developed workflow automation features using MVVM and collaborated with backend and product teams on integrations.": "طورت ميزات لأتمتة إجراءات العمل باستخدام MVVM، وتعاونت مع فرق المنتج والخدمات الخلفية لتنفيذ التكاملات.",
  "Workflow Automation": "أتمتة إجراءات العمل",
  "Contributed to a campus guidance application using ArcGIS and GPS for location-based navigation.": "ساهمت في تطبيق للإرشاد داخل الحرم الجامعي باستخدام ArcGIS وGPS للملاحة المعتمدة على الموقع.",
  "Maps & Navigation": "الخرائط والملاحة",
  "An education application supporting remote Quran teaching, memorization curricula, and learning-circle management.": "تطبيق تعليمي يدعم تعليم القرآن عن بُعد، ومناهج الحفظ، وإدارة حلقات التعلم.",
  "Education": "التعليم",
  "Remote Learning": "التعلم عن بُعد",
  "A customer-service application for Osul Al Motamayez, supporting design, building, and technical-support services.": "تطبيق لخدمة عملاء Osul Al Motamayez، يدعم خدمات التصميم والبناء والدعم الفني.",
  "Customer Services": "خدمة العملاء",
  "An employee application supporting business operations and technical-service workflows at Osul.": "تطبيق للموظفين يدعم عمليات الأعمال وإجراءات الخدمات الفنية لدى Osul.",
  "Business Workflows": "إجراءات الأعمال",
  "Business Operations": "عمليات الأعمال",
  "Supplier application for receiving and confirming customer orders, coordinating delivery dates, and managing delivery-date changes with customer approval.": "تطبيق للمورّدين لاستقبال طلبات العملاء وتأكيدها وتنسيق مواعيد التسليم وإدارة تغييرها بموافقة العميل.",
  "Order Management": "إدارة الطلبات",
  "Delivery": "التوصيل",
  "Commerce & Delivery": "التجارة والتوصيل",
  "An Android application for customer ordering and delivery workflows.": "تطبيق Android لطلبات العملاء وإجراءات التوصيل.",
  "Commerce": "التجارة",
  "A management system supporting day-to-day operations for restaurants, cafés, and hotels.": "نظام إدارة يدعم العمليات اليومية للمطاعم والمقاهي والفنادق.",
  "Restaurants": "المطاعم",
  "Operations": "العمليات",
  "Hospitality": "الضيافة",
  "A mobile platform connecting job seekers with job providers, supporting people looking for a new or additional job.": "منصة موبايل تربط الباحثين عن عمل بأصحاب الوظائف، وتساعد من يبحث عن وظيفة جديدة أو إضافية.",
  "Recruitment": "التوظيف",
  "An employee application for Al Khalil Technical Support Services, built with native Android technologies.": "تطبيق لموظفي خدمات الدعم الفني لدى Al Khalil، مبني بتقنيات Android الأصلية.",
  "Business Tools": "أدوات الأعمال",
  "The Al Khalil client application for technical support services and customer workflows.": "تطبيق عملاء Al Khalil لخدمات الدعم الفني وإجراءات خدمة العملاء.",
  "A news application that brings multiple international sources into one place.": "تطبيق أخبار يجمع عدة مصادر دولية في مكان واحد.",
  "News Aggregation": "تجميع الأخبار",
  "News": "الأخبار",
  "Scans 1D and 2D barcodes for price comparisons and actions such as opening URLs and saving contacts.": "يمسح الباركود أحادي وثنائي الأبعاد لمقارنة الأسعار وتنفيذ إجراءات مثل فتح الروابط وحفظ جهات الاتصال.",
  "Barcode Scanning": "مسح الباركود",
  "20 projects and integrations across payments, merchant operations, business tools, education, and commerce.": "20 مشروعًا وتكاملًا في المدفوعات وعمليات التجار وأدوات الأعمال والتعليم والتجارة.",
  "Browse all 20 projects": "استعرض المشروعات الـ20",
  "SDK & Device Integrations": "تكاملات SDK والأجهزة",
  "Where Apps Meet Real-World Devices": "حين تتصل التطبيقات بالأجهزة والخدمات",
  "I connect Android applications with vendor SDKs, POS devices, and partner services to support practical payment and business workflows.": "أربط تطبيقات Android بحزم SDK الخاصة بالمورّدين وأجهزة نقاط البيع وخدمات الشركاء، لدعم إجراءات الدفع والأعمال.",
  "A conceptual view of the integration work. The implementation depends on the SDK, device vendor, and project requirements.": "تصور مبسّط لعملية التكامل. يختلف التنفيذ حسب SDK ومورّد الجهاز ومتطلبات المشروع.",
  "Vendor SDK Integration": "تكامل SDK المورّدين",
  "Customize and maintain SDK integrations, adapt application workflows, and support client and partner integrations.": "أخصص تكاملات SDK وأصونها، وأكيّف إجراءات التطبيق، وأدعم الربط مع العملاء والشركاء.",
  "Vendor SDKs": "حزم SDK للمورّدين",
  "SDK Customization": "تخصيص SDK",
  "02 / DEVICES": "02 / الأجهزة",
  "POS & Payment Devices": "أجهزة نقاط البيع والدفع",
  "Develop and enhance POS applications across device vendors, including Morfine and dspread in the SanadPay work.": "أطور تطبيقات نقاط البيع وأحسنها على أجهزة من مورّدين مختلفين، منها Morfine وdspread ضمن العمل على SanadPay.",
  "03 / SERVICES": "03 / الخدمات",
  "Connected Workflows": "إجراءات عمل مترابطة",
  "Integrate partner services and application APIs, and contribute to AFD integrations, reliability improvements, and operational workflows.": "أربط خدمات الشركاء وواجهات APIs، وأساهم في تكاملات AFD وتحسين الاعتمادية وإجراءات التشغيل.",
  "AFD Integrations": "تكاملات AFD",
  "Applied in my work": "أمثلة من عملي",
  "Explore MADA POS, NamiPay, SanadPay and AFD projects →": "استعرض مشروعات MADA POS وNamiPay وSanadPay وAFD ←",
  "Key Skills": "المهارات الأساسية",
  "What I Build. How I Deliver.": "ما أبنيه، وكيف أنجزه",
  "From the Android screen to the payment terminal: the engineering skills behind my work.": "من واجهة Android إلى جهاز الدفع: المهارات الهندسية وراء عملي.",
  "Android Engineering": "هندسة Android",
  "Reliable apps, from UI to device integration.": "تطبيقات موثوقة، من الواجهة إلى ربط الأجهزة.",
  "I build native Android experiences and connect applications to device capabilities and platform services.": "أبني تجارب Android أصلية وأربط التطبيقات بإمكانات الأجهزة وخدمات النظام.",
  "In practice: NamiPay, Support App and JobPlus →": "في مشروعات: NamiPay وSupport App وJobPlus ←",
  "FinTech & POS Payments": "التقنيات المالية ومدفوعات نقاط البيع",
  "Making complex payment workflows work together.": "ربط إجراءات الدفع المعقدة لتعمل معًا.",
  "I develop POS application workflows, customize SDK integrations, and work with payment-device vendors and partner systems.": "أطور إجراءات تطبيقات نقاط البيع وأخصص تكاملات SDK، وأتعاون مع مورّدي أجهزة الدفع وأنظمة الشركاء.",
  "In practice: MADA POS, SanadPay and AFD integrations →": "في مشروعات: MADA POS وSanadPay وتكاملات AFD ←",
  "Software Architecture": "معمارية البرمجيات",
  "A codebase the team can confidently evolve.": "كود يستطيع الفريق تطويره بثقة.",
  "I structure applications around clear responsibilities, maintainable features, and dependable API and data layers.": "أنظم التطبيقات بمسؤوليات واضحة وميزات قابلة للصيانة وطبقات موثوقة للبيانات وواجهات APIs.",
  "In practice: Android and merchant-facing business applications →": "تطبيق عملي: تطبيقات Android وحلول التجار ←",
  "Quality & Performance": "الجودة والأداء",
  "Confidence in each release.": "ثقة أكبر في كل إصدار.",
  "I use testing, debugging, code reviews, and performance improvements to support reliable application delivery.": "أستخدم الاختبارات وتصحيح الأخطاء ومراجعة الكود وتحسين الأداء لدعم إصدارات تطبيقات موثوقة.",
  "In practice: Production mobile apps and POS workflows →": "تطبيق عملي: تطبيقات الموبايل وإجراءات نقاط البيع ←",
  "Technical Leadership": "القيادة التقنية",
  "Helping people deliver better software together.": "أساعد الفريق على تقديم برمجيات أفضل معًا.",
  "I guide technical decisions, mentor engineers, and align implementation with product and business needs.": "أوجه القرارات التقنية وأدرب المهندسين وأربط التنفيذ باحتياجات المنتج والأعمال.",
  "Team Mentoring · Code Reviews · Agile Delivery": "توجيه الفريق · مراجعة الكود · التسليم بأسلوب Agile",
  "In practice: Led a 10-person technical team →": "تطبيق عملي: قيادة فريق تقني من 10 أفراد ←",
  "Cross-Platform & Business Apps": "تطبيقات الأعمال متعددة المنصات",
  "Practical tools for everyday operations.": "أدوات عملية للتشغيل اليومي.",
  "I build connected mobile tools for merchant operations, support teams, and business workflows.": "أبني أدوات موبايل مترابطة لعمليات التجار وفرق الدعم وإجراءات الأعمال.",
  "In practice: Merchant App and operational applications →": "في مشروعات: Merchant App وتطبيقات التشغيل ←",
  "Technologies I work with": "التقنيات التي أستخدمها",
  "Currently Exploring": "أطور خبرتي حاليًا في",
  "AI in Software Engineering": "الذكاء الاصطناعي في هندسة البرمجيات",
  "I’m exploring how AI-assisted development, automated testing, and technical documentation can improve engineering workflows. This is an area of ongoing learning alongside my established mobile and payments experience.": "أستكشف كيف يساعد الذكاء الاصطناعي في التطوير وأتمتة الاختبارات والتوثيق التقني لتحسين العمل الهندسي. وهو مجال تعلم مستمر بجانب خبرتي الأساسية في الموبايل والمدفوعات.",
  "AI-Assisted Development": "التطوير بمساعدة الذكاء الاصطناعي",
  "Automated Testing": "أتمتة الاختبارات",
  "Technical Documentation": "التوثيق التقني",
  "Intelligent Mobile Features": "ميزات موبايل ذكية",
  "Professional Experience": "الخبرة المهنية",
  "Work Experience": "خبراتي العملية",
  "Riyadh, Saudi Arabia · On-site": "الرياض، السعودية · من مقر العمل",
  "Senior Software Engineer Team Lead": "مهندس برمجيات أول وقائد فريق",
  "Lead MADA POS and NamiPay Android development using modular architecture.": "أقود تطوير MADA POS وNamiPay على Android باستخدام معمارية مقسّمة إلى وحدات.",
  "Show Details": "عرض التفاصيل",
  "Saudi Arabia · On-site": "السعودية · من مقر العمل",
  "POS Android Software Engineer": "مهندس برمجيات Android لنقاط البيع",
  "Developed NamiPay features for merchant onboarding, activity logging, and support tickets.": "طورت ميزات NamiPay لتسجيل التجار وتسجيل النشاط وتذاكر الدعم.",
  "Developed modular MADA POS applications and delivered fixes across device vendors.": "طورت تطبيقات MADA POS بمعمارية الوحدات ونفذت تحسينات على أجهزة مورّدين مختلفين.",
  "Android Software Engineer": "مهندس برمجيات Android",
  "Developed JobPlus features connecting job seekers and employers.": "طورت ميزات JobPlus للربط بين الباحثين عن عمل وأصحاب العمل.",
  "Saudi Arabia": "السعودية",
  "Android Developer": "مطور Android",
  "Contributed to Android architecture using MVI, Hilt, and Room.": "ساهمت في معمارية Android باستخدام MVI وHilt وRoom.",
  "Saudi Arabia · Remote · Part-time": "السعودية · عن بُعد · دوام جزئي",
  "Developed an Android HR application for teacher attendance and departure tracking.": "طورت تطبيق موارد بشرية على Android لمتابعة حضور المعلمين وانصرافهم.",
  "Saudi Arabia · Remote": "السعودية · عن بُعد",
  "Android SWE Team Lead": "قائد فريق هندسة Android",
  "Developed Android applications for client requirements and controlled rollouts using feature flags.": "طورت تطبيقات Android وفق متطلبات العملاء وأدرت إتاحة الميزات تدريجيًا باستخدام Feature Flags.",
  "Saudi Arabia · Part-time": "السعودية · دوام جزئي",
  "Software Engineer · Android": "مهندس برمجيات · Android",
  "Refactored mobile code for maintainability and added tests.": "أعدت هيكلة كود الموبايل لتسهيل صيانته وأضفت اختبارات.",
  "Cairo, Egypt": "القاهرة، مصر",
  "Led and mentored the Android team and introduced Agile engineering processes.": "قدت فريق Android ووجهته، وأدخلت ممارسات هندسية بأسلوب Agile.",
  "Riyadh, Saudi Arabia": "الرياض، السعودية",
  "Senior Android Engineer": "مهندس Android أول",
  "Developed Android features and collaborated on server-side functionality.": "طورت ميزات Android وتعاونت في تطوير الخدمات الخلفية.",
  "Developed Tsaheel workflow automation using MVVM.": "طورت أتمتة إجراءات العمل في Tsaheel باستخدام MVVM.",
  "Built and optimized application architecture with Java, MVVM, Rx, and FCM.": "بنيت معمارية التطبيق وحسنتها باستخدام Java وMVVM وRx وFCM.",
  "Egypt · Part-time": "مصر · دوام جزئي",
  "Participated in hiring, technical design, technology selection, and architecture sessions.": "شاركت في التوظيف والتصميم التقني واختيار التقنيات وجلسات المعمارية.",
  "Professional Profile": "الملف المهني",
  "Related work experience on LinkedIn →": "الخبرة المرتبطة بالمشروع على LinkedIn ←",
  "Complete partner integrations and contribute to Automated Fuel Dispenser (AFD) integrations.": "تنفيذ تكاملات الشركاء والمساهمة في تكامل موزعات الوقود الآلية AFD.",
  "Implement application integrity checks; deliver merchant onboarding, activity logging, and support ticket workflows.": "تنفيذ فحوص سلامة التطبيق وتطوير تسجيل التجار وسجل النشاط وتذاكر الدعم.",
  "Improve performance and reliability across POS vendors; customize SDKs and support client integrations.": "تحسين الأداء والاعتمادية عبر مورّدي نقاط البيع وتخصيص SDK ودعم تكاملات العملاء.",
  "Enhanced MADA POS applications across multiple vendors and contributed to AFD integrations.": "تحسين تطبيقات MADA POS لدى عدة مورّدين والمساهمة في تكاملات AFD.",
  "Implemented integrity checks and contributed to iOS security protections.": "تنفيذ فحوص سلامة التطبيق والمساهمة في إجراءات حماية iOS.",
  "Integrated Firebase Analytics, Crashlytics, and Retrofit; customized SDKs for client POS integrations.": "ربط Firebase Analytics وCrashlytics وRetrofit وتخصيص SDK لتكاملات نقاط البيع لدى العملاء.",
  "Developed and maintained SDKs and supported customer device integrations.": "تطوير SDK وصيانتها ودعم ربط أجهزة العملاء.",
  "Coordinated POS development, certification initiatives, and payment processing.": "تنسيق تطوير نقاط البيع وإجراءات الاعتماد ومعالجة المدفوعات.",
  "Led SanadPay development across Morfine, dspread, and Android devices; reviewed code and mentored engineers.": "قيادة تطوير SanadPay على أجهزة Morfine وdspread وAndroid ومراجعة الكود وتوجيه المهندسين.",
  "Designed testing and deployment strategies using Kotlin, MVVM, Jetpack, coroutines, and REST APIs.": "تصميم استراتيجيات الاختبار والنشر باستخدام Kotlin وMVVM وJetpack وcoroutines وREST APIs.",
  "Used JUnit, Mockito, and Firebase Crashlytics to improve application reliability.": "استخدام JUnit وMockito وFirebase Crashlytics لتحسين اعتمادية التطبيق.",
  "Improved reliability through unit testing and performance optimization.": "تحسين الاعتمادية باختبارات الوحدات وتحسين الأداء.",
  "Built features with MVVM, Hilt, Room, Retrofit, and Kotlin coroutines.": "بناء الميزات باستخدام MVVM وHilt وRoom وRetrofit وKotlin coroutines.",
  "Implemented XML interfaces, Data Binding, and build variants; used tests and Crashlytics.": "تنفيذ واجهات XML وData Binding وBuild Variants واستخدام الاختبارات وCrashlytics.",
  "Implemented tamper detection, secure installation, cryptography, and encrypted storage with SafetyNet, DexGuard, and ThreatCast.": "تنفيذ كشف التلاعب والتثبيت الآمن والتشفير والتخزين المشفر باستخدام SafetyNet وDexGuard وThreatCast.",
  "Contributed to technical vision and long-term Android strategy.": "المساهمة في الرؤية التقنية والاستراتيجية طويلة المدى لتطوير Android.",
  "Used Kotlin, Jetpack, Hilt, JUnit, Mockito, Espresso, Bitrise, Retrofit, Firebase, and Datadog.": "استخدام Kotlin وJetpack وHilt وJUnit وMockito وEspresso وBitrise وRetrofit وFirebase وDatadog.",
  "Worked with cross-functional teams on new product features.": "العمل مع فرق متعددة التخصصات على ميزات جديدة للمنتج.",
  "Designed application testing and deployment strategies and provided technical business support.": "تصميم استراتيجيات اختبار التطبيقات ونشرها وتقديم الدعم التقني للأعمال.",
  "Translated business requirements into technical tasks and coordinated with external teams and project managers.": "تحويل متطلبات الأعمال إلى مهام تقنية والتنسيق مع الفرق الخارجية ومديري المشروعات.",
  "Participated in hiring, technical design, technology selection, and architecture decisions.": "المشاركة في التوظيف والتصميم التقني واختيار التقنيات وقرارات المعمارية.",
  "Refactored applications using MVVM, MVI, Clean Architecture, and testable code.": "إعادة هيكلة التطبيقات باستخدام MVVM وMVI وClean Architecture وكود قابل للاختبار.",
  "Worked across the lifecycle from concept to deployment.": "العمل على دورة التطوير من الفكرة حتى النشر.",
  "Maintained libraries and frameworks; optimized memory, speed, performance, and stability.": "صيانة المكتبات وأطر العمل وتحسين الذاكرة والسرعة والأداء والاستقرار.",
  "Contributed to the KAAU campus navigation application using ArcGIS and GPS.": "المساهمة في تطبيق ملاحة الحرم الجامعي KAAU باستخدام ArcGIS وGPS.",
  "Collaborated with backend and product teams on feature integration.": "التعاون مع فرق الخدمات الخلفية والمنتج لتنفيذ تكامل الميزات.",
  "Improved user satisfaction by 40% through UX improvements, as reported on LinkedIn.": "تحسين رضا المستخدمين بنسبة 40% من خلال تحسين تجربة الاستخدام، وفق الملف المهني على LinkedIn.",
  "Implemented unit tests, debugging, and performance optimization.": "تنفيذ اختبارات الوحدات وتصحيح الأخطاء وتحسين الأداء.",
  "Translated business requirements into technical solutions.": "تحويل متطلبات الأعمال إلى حلول تقنية.",
  "Refactored applications using MVVM, Clean Architecture, and testable code.": "إعادة هيكلة التطبيقات باستخدام MVVM وClean Architecture وكود قابل للاختبار.",
  "Cross-platform merchant application using Flutter and BLoC state management.": "تطبيق تجار متعدد المنصات باستخدام Flutter وإدارة الحالة عبر BLoC.",
  "API integration using Dio, with Firebase services for notifications and analytics.": "ربط APIs باستخدام Dio، وخدمات Firebase للإشعارات والتحليلات.",
  "Mobile capabilities include maps, device authentication, and document handling.": "تشمل إمكانات الموبايل الخرائط والتحقق من الهوية والتعامل مع المستندات.",
  "Native Android interfaces built with Kotlin and Jetpack Compose.": "واجهات Android أصلية مبنية باستخدام Kotlin وJetpack Compose.",
  "Hilt dependency injection and Retrofit-based API integration.": "حقن الاعتماديات باستخدام Hilt وربط APIs عبر Retrofit.",
  "Workflows cover merchant onboarding, support tickets, and document capture.": "تشمل الإجراءات تسجيل التجار وتذاكر الدعم والتقاط المستندات.",
  "About Ahmed": "عن أحمد",
  "I’m Ahmed Omar, an AI Engineer, Software Engineer, and Mobile Applications Team Lead based in Riyadh, Saudi Arabia. With 9+ years in mobile engineering, I specialize in Android engineering, FinTech, POS payment solutions, and SDK integration.": "أنا أحمد عمر، مهندس ذكاء اصطناعي ومهندس برمجيات وقائد فريق تطبيقات الموبايل، مقيم في الرياض بالسعودية. بخبرة تتجاوز 9 سنوات في هندسة الموبايل، أتخصص في Android والتقنيات المالية وحلول دفع نقاط البيع وتكامل SDK.",
  "At Nami, I work on NamiPay, MADA POS applications, merchant onboarding, payment device integrations, application integrity, and support workflows. My engineering approach combines Agile delivery, maintainable architecture, testing, and mentoring.": "أعمل في Nami على NamiPay وتطبيقات MADA POS وتسجيل التجار وربط أجهزة الدفع وسلامة التطبيق وإجراءات الدعم. أجمع في عملي بين التسليم بأسلوب Agile والمعمارية القابلة للصيانة والاختبارات وتوجيه الفريق.",
  "My career highlights include leading a 10-person technical team, a 20% increase in team productivity, and a 30% improvement in system performance.": "من أبرز إنجازاتي المهنية قيادة فريق تقني من 10 أفراد وزيادة إنتاجية الفريق بنسبة 20% وتحسين أداء النظام بنسبة 30%.",
  "I’m exploring AI-assisted development, automated testing, technical documentation, and intelligent mobile features to improve engineering productivity and business experiences.": "أطور استخدامي للذكاء الاصطناعي في التطوير وأتمتة الاختبارات والتوثيق التقني وميزات الموبايل الذكية لتحسين إنتاجية الهندسة وتجارب الأعمال.",
  "Background & Expertise": "الخلفية والتخصص",
  "More About Me": "تعرف عليّ أكثر",
  "View LinkedIn →": "الملف على LinkedIn ←",
  "All Skills": "كل المهارات",
  "Certifications": "الشهادات",
  "Courses": "الدورات",
  "Community": "المجتمع",
  "Team productivity increase · career highlight": "زيادة إنتاجية الفريق · إنجاز مهني",
  "System performance improvement · career highlight": "تحسين أداء النظام · إنجاز مهني",
  "Java Application and Mobile Application · Computer Science": "تطبيقات Java والموبايل · علوم الحاسب",
  "Training in Java, Android, web development, software engineering, data structures, UX/UI, Agile, and communication.": "تدريب في Java وAndroid وتطوير الويب وهندسة البرمجيات وهياكل البيانات وتجربة المستخدم وAgile ومهارات التواصل.",
  "B.Sc. in Management Information Systems (MIS) · 2014–2017": "بكالوريوس نظم معلومات إدارية (MIS) · 2014–2017",
  "Graduation project: Scancode (A+), focused on barcode scanning and retail use cases.": "مشروع التخرج: Scancode بتقدير A+، لمسح الباركود واستخداماته في قطاع التجزئة.",
  "Languages": "اللغات",
  "Arabic": "العربية",
  "Native or bilingual proficiency": "اللغة الأم أو إتقان بمستوى اللغة الأم",
  "English": "الإنجليزية",
  "Full professional proficiency": "إجادة مهنية كاملة",
  "Deutsch": "الألمانية",
  "Limited working proficiency": "إجادة محدودة للعمل",
  "Full Skills Directory · 99 skills": "دليل المهارات الكامل · 99 مهارة",
  "Skills listed on my LinkedIn profile, including engineering, payments, delivery, and leadership.": "المهارات الواردة في ملفي على LinkedIn، وتشمل الهندسة والمدفوعات والتسليم والقيادة.",
  "View skills on LinkedIn →": "استعرض المهارات على LinkedIn ←",
  "Services": "الخدمات",
  "Custom Software Development": "تطوير برمجيات مخصصة",
  "Career Development Coaching": "التوجيه للتطور المهني",
  "Interview Preparation": "التحضير للمقابلات",
  "Leadership Development": "تطوير مهارات القيادة",
  "Resume Review": "مراجعة السيرة الذاتية",
  "Resume Writing": "كتابة السيرة الذاتية",
  "Team Building": "بناء الفرق",
  "Certifications & Professional Learning": "الشهادات والتعلم المهني",
  "Sep 2024 · Profile lists expiration Sep 2024": "سبتمبر 2024 · تاريخ الانتهاء المسجل في الملف: سبتمبر 2024",
  "Jul 2024 · Profile lists expiration Sep 2024": "يوليو 2024 · تاريخ الانتهاء المسجل في الملف: سبتمبر 2024",
  "Nov 2023 · Expires Nov 2033": "نوفمبر 2023 · تنتهي في نوفمبر 2033",
  "Oct 2019 · Duplicate entries consolidated": "أكتوبر 2019 · دُمجت السجلات المكررة",
  "View all certification records on LinkedIn →": "استعرض كل الشهادات على LinkedIn ←",
  "View complete course history →": "استعرض سجل الدورات كاملًا ←",
  "Volunteering": "التطوع",
  "Instructor · Feb – Apr 2016": "مدرب · فبراير – أبريل 2016",
  "Education · ICDL course instruction": "التعليم · تدريس دورة ICDL",
  "Event Organization Specialist · Jul 2016 – Present": "تنظيم الفعاليات · يوليو 2016 – حتى الآن",
  "Education and Android developer community events": "فعاليات تعليمية ومجتمعية لمطوري Android",
  "Public Relations Event Specialist · Jun 2019 – Present": "العلاقات العامة للفعاليات · يونيو 2019 – حتى الآن",
  "Developer events covering Flutter, Android, machine learning, and cloud computing.": "فعاليات للمطورين حول Flutter وAndroid وتعلم الآلة والحوسبة السحابية.",
  "Organizations": "العضويات",
  "Android Developer · Oct 2016": "مطور Android · أكتوبر 2016",
  "Organization Android Developer · Mar – Jul 2016": "تنظيم مجتمع مطوري Android · مارس – يوليو 2016",
  "Publications & Open Source": "المقالات والمصادر المفتوحة",
  "Smartphone development articles · Apr 27, 2017": "مقالات عن تطوير الهواتف الذكية · 27 أبريل 2017",
  "Open-source contributions · Jan 1, 2016": "مساهمات في المصادر المفتوحة · 1 يناير 2016",
  "Read on Medium →": "اقرأ على Medium ←",
  "Honors & Awards": "التكريم والجوائز",
  "Programming competition recognition": "تكريم في مسابقة برمجة",
  "Jul 2017 · Advanced Academy": "يوليو 2017 · Advanced Academy",
  "Second place in a collegiate programming contest among more than 40 teams.": "المركز الثاني في مسابقة برمجة جامعية بمشاركة أكثر من 40 فريقًا.",
  "Graduation project: Scancode, focused on barcode scanning and retail use cases.": "مشروع التخرج: Scancode، لمسح الباركود واستخداماته في قطاع التجزئة.",
  "Let's Connect": "لنتواصل",
  "Get In Touch": "تواصل معي",
  "Based in Riyadh, Saudi Arabia. Connect with me about Android engineering, FinTech, POS payments, and technical leadership.": "مقيم في الرياض، السعودية. يسعدني التواصل بشأن هندسة Android والتقنيات المالية ومدفوعات نقاط البيع والقيادة التقنية.",
  "Email": "البريد الإلكتروني",
  "© 2026 Ahmed Omar. All rights reserved.": "© 2026 Ahmed Omar. جميع الحقوق محفوظة.",
  "Light": "فاتح",
  "Return to project carousel": "العودة للعرض المتحرك",
  "Close details": "إغلاق التفاصيل",
  "Toggle navigation menu": "فتح أو إغلاق القائمة",
  "Switch to light mode": "التبديل للوضع الفاتح",
  "Switch to dark mode": "التبديل للوضع الداكن",
  "Previous projects": "المشروعات السابقة",
  "Next projects": "المشروعات التالية",
  "Previous technologies": "التقنيات السابقة",
  "Next technologies": "التقنيات التالية",
  "Previous experience": "الخبرات السابقة",
  "Next experience": "الخبرات التالية",
  "Main": "القائمة الرئيسية",
  "Filter projects by platform": "تصفية المشروعات حسب المنصة",
  "Professional background sections": "أقسام الخلفية المهنية",
  "Engineering outcomes": "الإنجازات الهندسية",
  "Jul 2026 – Present": "يوليو 2026 – حتى الآن",
  "Mar 2025 – Jun 2026": "مارس 2025 – يونيو 2026",
  "Nov 2024 – Mar 2025": "نوفمبر 2024 – مارس 2025",
  "Jul 2023 – Sep 2024": "يوليو 2023 – سبتمبر 2024",
  "Oct 2023 – Mar 2024": "أكتوبر 2023 – مارس 2024",
  "May 2023 – Oct 2023": "مايو 2023 – أكتوبر 2023",
  "Jun 2022 – Nov 2023": "يونيو 2022 – نوفمبر 2023",
  "Mar 2022 – Sep 2022": "مارس 2022 – سبتمبر 2022",
  "Jan 2021 – Jun 2022": "يناير 2021 – يونيو 2022",
  "Apr 2020 – Mar 2022": "أبريل 2020 – مارس 2022",
  "Jan 2021 – Sep 2021": "يناير 2021 – سبتمبر 2021",
  "Feb 2018 – Dec 2020": "فبراير 2018 – ديسمبر 2020",
  "Jan 2019 – Oct 2020": "يناير 2019 – أكتوبر 2020",
  "Nami · Sanad Pay · FinTech & Payments": "Nami · Sanad Pay · التقنيات المالية والمدفوعات",
  "Nami · FinTech & Payments": "Nami · التقنيات المالية والمدفوعات",
  "Nami · Payment Integrations": "Nami · تكاملات المدفوعات",
  "Sanad Pay · FinTech & Payments": "Sanad Pay · التقنيات المالية والمدفوعات",
  "Wothoq Technologies · HR & Operations": "Wothoq Technologies · الموارد البشرية والعمليات",
  "QTech · Workflow Automation": "QTech · أتمتة إجراءات العمل",
  "QTech · Maps & Navigation": "QTech · الخرائط والملاحة",
  "EXAS 2030 · Education": "EXAS 2030 · التعليم",
  "EXAS 2030 · Customer Services": "EXAS 2030 · خدمة العملاء",
  "EXAS 2030 · Business Operations": "EXAS 2030 · عمليات الأعمال",
  "Uram IT-EG · Commerce & Delivery": "Uram IT-EG · التجارة والتوصيل",
  "Uram IT-EG · Hospitality": "Uram IT-EG · الضيافة",
  "JobPlus | جوب بلس · Jul 2023 – Present": "JobPlus | جوب بلس · يوليو 2023 – حتى الآن",
  "Uram IT-EG · Sep 2020 – Present": "Uram IT-EG · سبتمبر 2020 – حتى الآن",
  "Freelancer.com · Jan 2019 – Mar 2019": "Freelancer.com · يناير 2019 – مارس 2019",
  "Senior Software Engineer Team Lead · Jul 2026 – Present · Riyadh, Saudi Arabia · On-site": "مهندس برمجيات أول وقائد فريق · يوليو 2026 – حتى الآن · الرياض، السعودية · On-site",
  "POS Android Software Engineer · Mar 2025 – Jun 2026 · Saudi Arabia · On-site": "مهندس برمجيات Android لنقاط البيع · مارس 2025 – يونيو 2026 · السعودية · On-site",
  "POS Android Software Engineer · Nov 2024 – Mar 2025 · Saudi Arabia · On-site": "مهندس برمجيات Android لنقاط البيع · نوفمبر 2024 – مارس 2025 · السعودية · On-site",
  "Android Software Engineer · Jul 2023 – Sep 2024 · Saudi Arabia · On-site": "مهندس برمجيات Android · يوليو 2023 – سبتمبر 2024 · السعودية · On-site",
  "Android Developer · Oct 2023 – Mar 2024 · Saudi Arabia": "مطور Android · أكتوبر 2023 – مارس 2024 · السعودية",
  "Android Software Engineer · May 2023 – Oct 2023 · Saudi Arabia · Remote · Part-time": "مهندس برمجيات Android · مايو 2023 – أكتوبر 2023 · السعودية · Remote · Part-time",
  "Android SWE Team Lead · Jun 2022 – Nov 2023 · Saudi Arabia · Remote": "قائد فريق هندسة Android · يونيو 2022 – نوفمبر 2023 · السعودية · Remote",
  "Software Engineer · Android · Mar 2022 – Sep 2022 · Saudi Arabia · Part-time": "Software Engineer · Android · مارس 2022 – سبتمبر 2022 · السعودية · Part-time",
  "Android SWE Team Lead · Jan 2021 – Jun 2022 · Cairo, Egypt": "قائد فريق هندسة Android · يناير 2021 – يونيو 2022 · القاهرة، مصر",
  "Senior Android Engineer · Apr 2020 – Mar 2022 · Riyadh, Saudi Arabia": "مهندس Android أول · أبريل 2020 – مارس 2022 · الرياض، السعودية",
  "Android Developer · Jan 2021 – Sep 2021": "مطور Android · يناير 2021 – سبتمبر 2021",
  "Android Developer · Feb 2018 – Dec 2020": "مطور Android · فبراير 2018 – ديسمبر 2020",
  "Senior Android Engineer · Jan 2019 – Oct 2020 · Egypt · Part-time": "مهندس Android أول · يناير 2019 – أكتوبر 2020 · Egypt · Part-time",
  "Mar 2019 – Sep 2019": "مارس 2019 – سبتمبر 2019",
  "Jul 2024": "يوليو 2024",
  "Jun 2020": "يونيو 2020",
  "Aug 2019": "أغسطس 2019",
  "Aug 2016": "أغسطس 2016",
  "Aug 2017": "أغسطس 2017",
  "Mar 2016": "مارس 2016",
  "Jan 2019": "يناير 2019",
  "Apr 2017 – Present": "أبريل 2017 – حتى الآن"
};
const reverse = new Map(Object.entries(translations).map(([en, ar]) => [ar, en]));
const originals = new WeakMap();
const attributeOriginals = new WeakMap();
const button = document.getElementById('language-toggle');
let language = 'en';
let translating = false;
const months = {Jan:'يناير',Feb:'فبراير',Mar:'مارس',Apr:'أبريل',May:'مايو',Jun:'يونيو',Jul:'يوليو',Aug:'أغسطس',Sep:'سبتمبر',Oct:'أكتوبر',Nov:'نوفمبر',Dec:'ديسمبر'};
function arabicCopy(text) {
 if (translations[text]) return translations[text];
 if (/^\d+ \/ \d+$/.test(text)) return text;
 if (/^(View details for|Show details for) /.test(text)) return 'عرض تفاصيل ' + text.replace(/^(View details for|Show details for) /,'');
 if (/^(Project|Experience|Technologies page) \d+ of \d+$/.test(text)) return text.replace(/^Project/,'المشروع').replace(/^Experience/,'الخبرة').replace(/^Technologies page/,'صفحة التقنيات').replace(' of ',' من ');
 // Translate dates and role metadata without changing official names.
 if (text.includes(' · ')) return text.split(' · ').map(part => translations[part] || dateCopy(part)).join(' · ');
 return dateCopy(text);
}
function dateCopy(text) {
 if (!/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}/.test(text)) return text;
 return text.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g,m => months[m]).replace(/\bPresent\b/g,'حتى الآن');
}
function render(root = document.body) {
 if (translating) return;
 translating = true;
 const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
 const nodes = [];
 while(walker.nextNode()) nodes.push(walker.currentNode);
 for (const node of nodes) {
  if (!node.parentElement || node.parentElement.closest('script,style,#language-toggle,svg')) continue;
  const current = node.nodeValue;
  const trimmed = current.trim();
  if (!trimmed) continue;
  let original = originals.get(node);
  // Dynamic controls replace their text, so retain the new source copy too.
  if (!original || (current !== original && current !== original.replace(original.trim(), arabicCopy(original.trim())))) {
   original = reverse.has(trimmed) ? current.replace(trimmed, reverse.get(trimmed)) : current;
   originals.set(node,original);
  }
  const next = language === 'ar' ? original.replace(original.trim(),arabicCopy(original.trim())) : original;
  if (current !== next) node.nodeValue = next;
 }
 for (const el of root.querySelectorAll('[aria-label],[title],[data-title]')) {
  if(el.id==='language-toggle') continue;
  let saved = attributeOriginals.get(el);
  if(!saved) { saved={}; attributeOriginals.set(el,saved); }
  for (const attr of ['aria-label','title','data-title']) {
   if(!el.hasAttribute(attr)) continue;
   const current=el.getAttribute(attr);
   if(!saved[attr] || (current!==saved[attr] && current!==arabicCopy(saved[attr]))) saved[attr]=reverse.get(current)||current;
   const next=language==='ar'?arabicCopy(saved[attr]):saved[attr];
   if(next!==current) el.setAttribute(attr,next);
  }
 }
 const diagram=document.querySelector('.sdk-diagram img');
 if(diagram){
  const current=diagram.getAttribute('src');
  const next=language==='ar'?current.replace(/sdk-integrations(?:-ar)?\.svg/,'sdk-integrations-ar.svg'):current.replace('sdk-integrations-ar.svg','sdk-integrations.svg');
  if(current!==next) diagram.setAttribute('src',next);
 }
 translating=false;
}
function applyLanguage(next, persist=false) {
 language=next==='ar'?'ar':'en';
 document.documentElement.lang=language;
 document.documentElement.dir=language==='ar'?'rtl':'ltr';
 button.textContent=language==='ar'?'English':'عربي';
 button.lang=language==='ar'?'en':'ar';
 button.setAttribute('aria-label',language==='ar'?'Switch to English':'التبديل إلى العربية');
 button.setAttribute('aria-pressed',String(language==='ar'));
 render();
 if(persist) try{localStorage.setItem('portfolio-language',language)}catch{}
 // Keep carousel math left-to-right while each card follows the chosen language.
 window.dispatchEvent(new Event('resize'));
}
let saved='en';try{saved=localStorage.getItem('portfolio-language')||'en'}catch{}
applyLanguage(saved);
button.addEventListener('click',()=>applyLanguage(language==='ar'?'en':'ar',true));
let scheduled=false;
new MutationObserver(()=>{
 if(scheduled)return;
 scheduled=true;
 queueMicrotask(()=>{scheduled=false;render()});
}).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','data-title']});
})();
