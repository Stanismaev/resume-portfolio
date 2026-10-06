/**
 * Kast Solutions — Internationalization (i18n) System
 * Supports: Ukrainian (uk) & English (en) with localStorage persistence
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'kast_site_lang';
  const DEFAULT_LANG = 'uk';

  const TRANSLATIONS = {
    uk: {
      // Header & Navigation
      'nav.services': 'Послуги',
      'nav.about': 'Про компанію',
      'nav.about_us': 'Про нас',
      'nav.certificates': 'Сертифікати',
      'nav.careers': 'Вакансії',
      'nav.team': 'Команда',
      'nav.contacts': 'Контакти',
      'nav.cta': 'Отримати консультацію',
      'header.burger_aria': 'Відкрити меню',

      // Footer
      'footer.brand_desc': 'Міжнародний консалтинг у сфері кібербезпеки, штучного інтелекту та високонавантаженої хмарної архітектури.',
      'footer.col_solutions': 'Напрями послуг',
      'footer.sol_software': 'Розробка ПЗ',
      'footer.sol_cyber': 'Аудит кібербезпеки',
      'footer.sol_ai': 'Штучний інтелект & LLM',
      'footer.sol_cloud': 'Хмарний DevOps & K8s',
      'footer.col_company': 'Компанія',
      'footer.comp_about': 'Про нас',
      'footer.comp_team': 'Команда лідерів',
      'footer.comp_certs': 'Сертифікати ISO',
      'footer.comp_careers': 'Кар\'єра та вакансії',
      'footer.col_contacts': 'Контакти',
      'footer.contact_office_label': 'Офіс:',
      'footer.contact_office_val': 'м. Київ, вул. Ділова, 5, БЦ «Horizon»',
      'footer.contact_email_label': 'Email:',
      'footer.contact_phone_label': 'Телефон:',
      'footer.copy': '© 2026 Kast Solutions. Всі права захищені.',
      'footer.privacy': 'Політика конфіденційності',
      'footer.terms': 'Умови надання послуг',
      'footer.compliance': 'ISO 27001 Compliance',

      // Callback Modal
      'modal.close_aria': 'Закрити модальне вікно',
      'modal.title': 'Замовити консультацію',
      'modal.subtitle': 'Заповніть форму, і наш провідний IT-архітектор зв\'яжеться з вами протягом 15 хвилин.',
      'modal.name_label': 'Ваше ім’я',
      'modal.name_placeholder': 'Олександр',
      'modal.phone_label': 'Номер телефону',
      'modal.phone_placeholder': '+38 (0XX) XXX-XX-XX',
      'modal.consent': 'Я даю згоду на обробку моїх персональних даних відповідно до політики конфіденційності.',
      'modal.submit_btn': 'Залишити заявку',
      'modal.submit_loading': 'Відправка...',
      'modal.success_msg': 'Дякуємо! Ваша заявка успішно прийнята (демонстраційний режим Kast Solutions).',
      'modal.error_name': 'Введіть коректне ім’я',
      'modal.error_phone': 'Введіть повний номер телефону',
      'modal.error_consent': 'Необхідно надати згоду на обробку персональних даних',

      // Page: index.html
      'index.meta_title': 'Kast Solutions — ІТ-консалтинг, Кібербезпека та AI-рішення',
      'index.meta_desc': 'Kast Solutions — провідний технологічний партнер у сфері корпоративної розробки ПЗ, аудиту кібербезпеки, штучного інтелекту та хмарних DevOps рішень.',
      'index.hero_badge': 'Технологічні інновації для бізнесу',
      'index.hero_title': 'Створюємо цифрову стійкість та масштабованість',
      'index.hero_subtitle': 'Комплексний IT-консалтинг, інтеграція штучного інтелекту, захист критичної інфраструктури та хмарна оптимізація під ключ.',
      'index.s1_tag': 'Enterprise Dev',
      'index.s1_title': 'Розробка та інтеграція ПЗ',
      'index.s1_desc': 'Проєктування високонавантажених мікросервісних ядер, безпечних API та B2B систем для великого бізнесу.',
      'index.s1_btn': 'Дізнатися більше',
      'index.s2_tag': 'Zero-Trust & SOC',
      'index.s2_title': 'Аудит кібербезпеки',
      'index.s2_desc': 'Пентестинг, сертифікація за ISO 27001, розслідування інцидентів та моніторинг безпеки 24/7.',
      'index.s2_btn': 'Дізнатися більше',
      'index.s3_tag': 'AI & Machine Learning',
      'index.s3_title': 'Впровадження ШІ та LLM',
      'index.s3_desc': 'Розробка приватних LLM-асистентів, RAG-систем та інтелектуальна автоматизація рутинних операцій.',
      'index.s3_btn': 'Дізнатися більше',
      'index.s4_tag': 'Cloud & Kubernetes',
      'index.s4_title': 'Хмарний DevOps & IaC',
      'index.s4_desc': 'Міграція в AWS та Azure, налаштування CI/CD, контейнеризація та FinOps оптимізація витрат.',
      'index.s4_btn': 'Дізнатися більше',
      'index.s5_tag': 'Leadership',
      'index.s5_title': 'Експертна команда',
      'index.s5_desc': 'Сертифіковані IT-архітектори, дослідники штучного інтелекту та лідери індустрії з досвідом 10+ років.',
      'index.s5_btn': 'Познайомитися',
      'index.s6_tag': 'Certifications',
      'index.s6_title': 'Сертифікати та альянси',
      'index.s6_desc': 'Офіційні партнерства з хмарними провайдерами Tier-1, сертифікати ISO 27001 та членство в AI Alliance.',
      'index.s6_btn': 'Сертифікати',
      'index.stats_title': 'Визнана технологічна експертиза',
      'index.stat1_desc': 'Успішно реалізованих Enterprise-проєктів',
      'index.stat2_desc': 'SLA безперебійної роботи розгорнутих систем',
      'index.stat3_desc': 'Досвіду цифрової трансформації бізнесу',
      'index.ach1_badge': 'Визнання індустрії',
      'index.ach1_title': '№1 у рейтингу AI-інтеграторів',
      'index.ach1_desc': 'Лідер впровадження Enterprise LLM, корпоративних нейромережевих агентів та безпечних RAG-інфраструктур у B2B секторі.',
      'index.ach2_badge': 'Безпека & Комплаєнс',
      'index.ach2_title': 'ISO/IEC 27001 & 9001',
      'index.ach2_desc': 'Міжнародна сертифікація систем управління інформаційною безпекою, захисту даних клієнтів та високих стандартів якості.',
      'index.ach3_badge': 'Хмарне партнерство',
      'index.ach3_title': 'Tier-1 Cloud Partner',
      'index.ach3_desc': 'Офіційний сертифікований статус партнера AWS Advanced Tier та Microsoft Azure Gold Platform з підтримкою 24/7 SLA.',

      // Page: about.html
      'about.meta_title': 'Про компанію — Kast Solutions',
      'about.meta_desc': 'Дізнайтеся більше про Kast Solutions: місія, принципи роботи, історія розвитку, технологічні стандарти кібербезпеки та впровадження штучного інтелекту.',
      'about.banner_badge': 'About Us',
      'about.banner_title': 'Про компанію Kast Solutions',
      'about.banner_subtitle': 'Ми створюємо технологічні екосистеми майбутнього, поєднуючи передові досягнення штучного інтелекту з безкомпромісним захистом кіберпростору.',
      'about.who_badge': 'Хто ми',
      'about.who_title': 'Інноваційний технологічний партнер для сучасного бізнесу',
      'about.who_p1': '<strong>Kast Solutions</strong> — це прогресивна консалтингова та інженерна компанія, яка спеціалізується на розробці корпоративного програмного забезпечення, аудиті кібербезпеки критичної інфраструктури та впровадженні систем штучного інтелекту.',
      'about.who_p2': 'Заснована командою провідних IT-архітекторів, компанія пройшла шлях від спеціалізованого бюро розробки до повномасштабного технологічного інтегратора з клієнтами в Європі, Північній Америці та Україні.',
      'about.mission_title': 'Наша місія та філософія',
      'about.mission_p': 'Ми віримо, що в епоху стрімкого розвитку технологій успіх компаній визначається двома ключовими факторами: <strong>швидкістю впровадження інновацій</strong> та <strong>надійністю захисту цифрових активів</strong>. Наша місія — озброїти бізнес інструментами, які дозволяють рости швидше за конкурентів без ризику втрати даних чи зупинки процесів.',
      'about.principles_title': 'Ключові принципи нашої роботи',
      'about.pr1': '<strong>Zero-Trust Security за замовчуванням:</strong> Кожна лінія коду, кожен мікросервіс і кожна база даних проєктуються з урахуванням найвищих вимог захисту.',
      'about.pr2': '<strong>Data-Driven & AI-Centric підхід:</strong> Ми використовуємо великі мовні моделі (LLM) та алгоритми машинного навчання для автоматизації рутини та виявлення прихованих закономірностей у даних.',
      'about.pr3': '<strong>Хмарна відмовостійкість (Cloud Resiliency):</strong> Архітектури на базі Kubernetes та сервісів AWS/Azure гарантують безперебійну роботу з показником доступності 99.99%.',
      'about.pr4': '<strong>Прозорість та гнучкість (Agile Engineering):</strong> Замовник має прямий доступ до команди розробки, метрик продуктивності та проміжних результатів на кожному спринті.',
      'about.stack_title': 'Технологічний стек та компетенції',
      'about.stack_intro': 'Наші інженери володіють глибокою експертизою в найсучаснішому стеку технологій:',
      'about.st1': '<strong>Backend & High-Load:</strong> Go (Golang), Node.js / TypeScript, Python (FastAPI, PyTorch), Java / Spring Boot, PostgreSQL, Redis, Apache Kafka.',
      'about.st2': '<strong>AI & Data Science:</strong> LangChain, LlamaIndex, OpenAI / Claude APIs, приватні локальні моделі (Llama 3, Mistral), Vector Databases (Qdrant, Pinecone).',
      'about.st3': '<strong>DevOps & Cloud:</strong> Docker, Kubernetes, Terraform, AWS (ECS, EKS, Lambda), Microsoft Azure, CI/CD автоматизація.',
      'about.st4': '<strong>Кібербезпека:</strong> Burp Suite Pro, Metasploit, Wireshark, SIEM платформи (Wazuh, Splunk), SonarQube (SAST/DAST).',
      'about.disclosure_title': 'Розкриття офіційної інформації про діяльність',
      'about.disclosure_body': '<strong>Повне найменування:</strong> Товариство з обмеженою відповідальністю «Каст Солюшнс» (Kast Solutions LLC)<br><strong>Юридична адреса:</strong> 03150, Україна, м. Київ, вул. Ділова, буд. 5, офіс 402<br><strong>Сертифікація:</strong> ISO/IEC 27001:2022 (Інформаційна безпека), ISO 9001:2015 (Якість процесів розробки)<br><strong>Політика підвищення кваліфікації:</strong> Усі інженери та архітектори компанії проходять обов\'язкову щорічну сертифікацію у провідних світових провайдерів (AWS Certified, CKA, CISSP) в обсязі не менше 80 годин на рік.',

      // Page: services.html
      'services.meta_title': 'Послуги — Kast Solutions',
      'services.meta_desc': 'Повний спектр технологічних послуг Kast Solutions: корпоративна розробка ПЗ, аудит кібербезпеки, впровадження штучного інтелекту, хмарна архітектура та DevOps.',
      'services.banner_badge': 'Expertise & Solutions',
      'services.banner_title': 'Послуги та технологічні рішення',
      'services.banner_subtitle': 'Трансформуємо складні бізнес-виклики у надійні, масштабовані та захищені цифрові продукти корпоративного рівня.',
      'services.intro_badge': 'Індивідуальний підхід',
      'services.intro_title': 'Комплексна цифрова трансформація вашого бізнесу',
      'services.intro_desc': 'Ми не просто пишемо код — ми проєктуємо архітектуру стійкості, впроваджуємо стандарти Zero-Trust і створюємо інтелектуальні системи, що підвищують операційну ефективність компанії.',
      'services.intro_btn': 'Обговорити проєкт',
      'services.p1_num': '01',
      'services.p1_title': 'Розробка та інтеграція корпоративного ПЗ',
      'services.p1_desc': 'Створення відмовостійких рішень для бізнесу: від проєктування мікросервісних ядер до глибокої інтеграції з ERP, CRM і фінансовими шлюзами.',
      'services.p1_f1': 'Мікросервісна архітектура (Go, Node.js, Java, .NET)',
      'services.p1_f2': 'Проєктування високонавантажених API та Event-Driven систем',
      'services.p1_f3': 'Модернізація застарілих легасі-систем без зупинки бізнесу',
      'services.p1_f4': 'Корпоративні портали та B2B платформи високої складності',
      'services.p2_num': '02',
      'services.p2_title': 'Аудит кібербезпеки та захист інфраструктури',
      'services.p2_desc': 'Комплексна оцінка вразливостей, розгортання архітектури нульової довіри (Zero-Trust) та цілодобовий моніторинг інцидентів кібербезпеки.',
      'services.p2_f1': 'Тестування на проникнення (Penetration Testing) за стандартами OWASP',
      'services.p2_f2': 'Аудит відповідності стандартам ISO 27001, SOC 2 та GDPR',
      'services.p2_f3': 'Впровадження систем безпеки SIEM / EDR / XDR',
      'services.p2_f4': 'Захист від DDoS-атак та безпека хмарних середовищ',
      'services.p3_num': '03',
      'services.p3_title': 'Впровадження ШІ та автоматизація бізнес-процесів',
      'services.p3_desc': 'Створення прикладних AI-рішень: локальні LLM-моделі, RAG-бази знань для компаній та автоматизація рутинних аналітичних операцій.',
      'services.p3_f1': 'Розробка корпоративних AI-асистентів на базі приватних LLM',
      'services.p3_f2': 'Предиктивна аналітика та прогнозування показників бізнесу',
      'services.p3_f3': 'Інтелектуальне розпізнавання та обробка документів (OCR / NLP)',
      'services.p3_f4': 'RPA-автоматизація повторюваних процесів',
      'services.p4_num': '04',
      'services.p4_title': 'Хмарні обчислення та DevOps інфраструктура',
      'services.p4_desc': 'Безшовна міграція у хмару, налаштування безперервної інтеграції (CI/CD), контейнеризація Kubernetes та оптимізація хмарних витрат (FinOps).',
      'services.p4_f1': 'Міграція та побудова гібридних середовищ у AWS, Azure, GCP',
      'services.p4_f2': 'Автоматизація CI/CD пайплайнів (GitLab CI, GitHub Actions)',
      'services.p4_f3': 'Оркестрація контейнерів Kubernetes / Docker / Terraform (IaC)',
      'services.p4_f4': 'Аудит та оптимізація хмарних рахунків (FinOps аудит)',
      'services.proc_badge': 'Методологія Kast',
      'services.proc_title': 'Як ми будуємо надійні рішення',
      'services.proc_subtitle': 'Прозорий інженерний процес від першого аудиту до безперервного супроводу в продакшені.',
      'services.step1_badge': 'Етап 01',
      'services.step1_title': 'Технічний аудит',
      'services.step1_desc': 'Аналізуємо поточну архітектуру, виявляємо вузькі місця, ризики безпеки та формуємо цільове ТЗ.',
      'services.step2_badge': 'Етап 02',
      'services.step2_title': 'Архітектурне проєктування',
      'services.step2_desc': 'Розробляємо детальні схеми даних, протоколи взаємодії, моделі безпеки та план масштабування.',
      'services.step3_badge': 'Етап 03',
      'services.step3_title': 'Розробка та тестування',
      'services.step3_desc': 'Ітеративна реалізація функціоналу (Scrum), автоматизоване тестування та перевірка кібербезпеки.',
      'services.step4_badge': 'Етап 04',
      'services.step4_title': 'Реліз і SLA підтримка',
      'services.step4_desc': 'Розгортання у хмарі, моніторинг продуктивності 24/7 та постійне архітектурне вдосконалення.',
      'services.cta_badge': 'Готові до старту?',
      'services.cta_title': 'Отримайте попередню архітектурну оцінку проєкту',
      'services.cta_desc': 'Наші провідні технічні фахівці проаналізують вашу задачу та запропонують оптимальний технологічний стек і план реалізації.',
      'services.cta_btn': 'Замовити безкоштовний аудит',
      'services.modal_title': 'Замовити консультацію',
      'services.modal_subtitle': 'Залиште контакти, і провідний архітектор Kast Solutions зв\'яжеться з вами для уточнення деталей.',
      'services.modal_success': 'Дякуємо за запит! Ми зв\'яжемося з вами найближчим часом.',

      // Page: team.html
      'team.meta_title': 'Команда експертів — Kast Solutions',
      'team.meta_desc': 'Познайомтеся з керівництвом та провідними архітекторами компанії Kast Solutions. Експерти у сфері штучного інтелекту, кібербезпеки та хмарних технологій.',
      'team.banner_badge': 'Leadership & Vision',
      'team.banner_title': 'Команда та лідери інновацій',
      'team.banner_subtitle': 'Провідні фахівці з міжнародною експертизою, які стоять за впровадженням високонадійних технологічних рішень для наших партнерів.',
      'team.m1_name': 'Олександр Коваленко',
      'team.m1_pos': 'Генеральний директор & Керуючий партнер (CEO)',
      'team.m1_p1': '15+ років досвіду управління масштабними цифровими трансформаціями та IT-екосистемами',
      'team.m1_p2': 'Сертифікований Enterprise Architect (TOGAF 9.2)',
      'team.m1_p3': 'Керівник впровадження високореверсивних B2B платформ у міжнародному фінтеху',
      'team.m1_p4': 'Спікер європейських самітів з технологічного консалтингу',
      'team.m2_name': 'Олена Мельник',
      'team.m2_pos': 'Операційний директор & Партнер з розвитку (COO)',
      'team.m2_p1': 'Експерт зі стратегічного бізнес-аналізу та масштабування технологічних команд',
      'team.m2_p2': 'Магістр міжнародного бізнес-адміністрування (MBA)',
      'team.m2_p3': 'Член правління асоціації інноваційного технологічного бізнесу',
      'team.m2_p4': 'Куратор сертифікації процесів компанії за стандартами ISO 9001 та ISO 27001',
      'team.m3_name': 'Максим Шевченко',
      'team.m3_pos': 'Технічний директор & Керівник напрямку AI (CTO)',
      'team.m3_p1': 'PhD у галузі штучного інтелекту та розподілених обчислювальних систем',
      'team.m3_p2': 'Архітектор корпоративних LLM-моделей та RAG-інфраструктур для Enterprise',
      'team.m3_p3': 'AWS Certified Solutions Architect Professional & Kubernetes CKA',
      'team.m3_p4': '12+ років практичного досвіду в High-Load архітектурах та DevSecOps',
      'team.m4_name': 'Вікторія Бондаренко',
      'team.m4_pos': 'Директор з кібербезпеки & Захисту даних (CISO)',
      'team.m4_p1': 'Сертифікований фахівець CISSP, Certified Ethical Hacker (CEH) та CISM',
      'team.m4_p2': '10+ років практичного аудиту критичної інфраструктури та тестування на проникнення',
      'team.m4_p3': 'Керівник команди Incident Response та проєктування архітектур Zero-Trust',
      'team.m4_p4': 'Провідний аудитор з міжнародної відповідності GDPR та NIST Cybersecurity Framework',

      // Page: licenses.html
      'licenses.meta_title': 'Сертифікати та партнерства — Kast Solutions',
      'licenses.meta_desc': 'Офіційні ліцензії, міжнародні сертифікати ISO 27001, ISO 9001, хмарні партнерства та членство в AI Alliance компанії Kast Solutions.',
      'licenses.banner_badge': 'Standards & Compliance',
      'licenses.banner_title': 'Сертифікати та партнерства',
      'licenses.banner_subtitle': 'Підтверджена відповідність міжнародним стандартам інформаційної безпеки, якості розробки та офіційні статуси вендорських партнерств.',
      'licenses.intro_badge': 'Офіційне визнання',
      'licenses.intro_title': 'Міжнародні акредитації Kast Solutions',
      'licenses.intro_desc': 'Усі наші інженерні процеси, протоколи безпеки та методи управління даними щорічно проходять незалежний аудит і відповідають суворим вимогам світових регуляторів.',
      'licenses.lic1_desc': 'Сертифікат ISO/IEC 27001:2022 (Системи управління інформаційною безпекою)',
      'licenses.lic2_desc': 'Статус офіційного партнера Tier-1 Cloud Certified (AWS & Microsoft Azure Solutions)',
      'licenses.lic3_desc': 'Сертифікат якості розробки програмного забезпечення ISO 9001:2015',
      'licenses.lic4_desc': 'Свідоцтво члена глобального альянсу безпечного та етичного штучного інтелекту (AI Alliance)',

      // Page: contacts.html
      'contacts.meta_title': 'Контакти та Вакансії — Kast Solutions',
      'contacts.meta_desc': 'Контактна інформація компанії Kast Solutions у Києві. Актуальні IT вакансії: AI інженери, архітектори кібербезпеки, DevOps та Full-Stack розробники.',
      'contacts.banner_badge': 'Get In Touch',
      'contacts.banner_title': 'Контакти та кар\'єра',
      'contacts.banner_subtitle': 'Завжди відкриті до нових технологічних партнерств та талановитих фахівців, які прагнуть змінювати цифрову індустрію.',
      'contacts.card1_title': 'Головний офіс',
      'contacts.card1_desc': '03150, Україна, м. Київ, вул. Ділова, буд. 5, Бізнес-центр «Horizon», 4 поверх',
      'contacts.card2_title': 'Електронна пошта',
      'contacts.card2_inquiries': 'Загальні питання:',
      'contacts.card2_hr': 'Кар\'єра & HR:',
      'contacts.card3_title': 'Прямий зв\'язок',
      'contacts.card3_tg': 'Telegram підтримка:',
      'contacts.card3_hours': 'Графік:',
      'contacts.card3_sched_val': 'Пн-Пт 09:00 - 18:00 (GMT+2)',
      'contacts.car_badge': 'Кар\'єрні можливості',
      'contacts.car_title_prefix': 'Приєднуйтесь до команди ',
      'contacts.car_desc': 'Ми шукаємо сильних інженерів та дослідників для створення рішень у сфері Enterprise AI, хмарних екосистем та кібербезпеки.',
      'contacts.car_count': '4 відкриті позиції',

      // Vacancy 1
      'contacts.vac1_kicker': 'Штучний інтелект',
      'contacts.vac1_loc': 'Київ / Remote',
      'contacts.vac1_title': 'Senior AI / ML Engineer (LLM & RAG Systems)',
      'contacts.vac_comp_label': 'Зарплата:',
      'contacts.vac_resp_label': 'Обов’язки:',
      'contacts.vac1_r1': 'Розробка та оптимізація корпоративних RAG-систем на базі локальних та хмарних LLM;',
      'contacts.vac1_r2': 'Інтеграція векторних баз даних (Qdrant, Milvus, Pinecone) та налаштування пайплайнів обробки даних;',
      'contacts.vac1_r3': 'Створення мультиагентних систем для автоматизації складних бізнес-процесів;',
      'contacts.vac1_r4': 'Тюнінг та квантування відкритих моделей (Llama 3, Mistral) під специфічні доменні задачі.',
      'contacts.vac1_req': '<strong>Вимоги:</strong> 4+ роки досвіду з Python, PyTorch, LangChain/LlamaIndex, глибоке розуміння сучасних трансформерних архітектур.',
      'contacts.vac_apply_btn': 'Відгукнутися на вакансію',
      'contacts.vac_tg_btn': 'Написати в Telegram',

      // Vacancy 2
      'contacts.vac2_kicker': 'Кібербезпека',
      'contacts.vac2_loc': 'Київ / Гібрид',
      'contacts.vac2_title': 'Lead Cybersecurity Architect / Pentester',
      'contacts.vac2_r1': 'Проведення комплексних аудитів безпеки (Network, Web, Cloud) та тестування на проникнення;',
      'contacts.vac2_r2': 'Проєктування та контроль впровадження архітектур Zero-Trust для корпоративних клієнтів;',
      'contacts.vac2_r3': 'Аудит відповідності стандартам ISO 27001, SOC 2, GDPR;',
      'contacts.vac2_r4': 'Керівництво процесом Incident Response та аналіз векторів загроз.',
      'contacts.vac2_req': '<strong>Вимоги:</strong> Сертифікати OSCP / CEH / CISSP, 5+ років практичного досвіду в offensive/defensive безпеці.',

      // Vacancy 3
      'contacts.vac3_kicker': 'Хмарна інфраструктура',
      'contacts.vac3_loc': 'Remote',
      'contacts.vac3_title': 'Senior DevOps & Cloud Infrastructure Engineer (AWS & K8s)',
      'contacts.vac3_r1': 'Побудова та супровід продакшен-кластерів Kubernetes у середовищах AWS та Azure;',
      'contacts.vac3_r2': 'Автоматизація інфраструктури за принципом Infrastructure as Code (Terraform, Terragrunt);',
      'contacts.vac3_r3': 'Побудова безпечних CI/CD конвеєрів з інтеграцією SAST/DAST перевірок;',
      'contacts.vac3_r4': 'Моніторинг та алертинг (Prometheus, Grafana, OpenTelemetry).',
      'contacts.vac3_req': '<strong>Вимоги:</strong> Досвід від 4 років, сертифікація CKA / AWS Solutions Architect буде перевагою.',

      // Vacancy 4
      'contacts.vac4_kicker': 'Розробка ПЗ',
      'contacts.vac4_loc': 'Київ / Remote',
      'contacts.vac4_title': 'Senior Full-Stack Developer (Go / Node.js & React)',
      'contacts.vac4_r1': 'Проєктування та розробка мікросервісів для корпоративних B2B платформ;',
      'contacts.vac4_r2': 'Створення швидких, адаптивних та доступних інтерфейсів на React / Next.js / TypeScript;',
      'contacts.vac4_r3': 'Оптимізація роботи реляційних та NoSQL баз даних під високі навантаження;',
      'contacts.vac4_r4': 'Участь у code review та архітектурних мітингах команди.',
      'contacts.vac4_req': '<strong>Вимоги:</strong> 4+ роки досвіду, впевнене володіння Go або Node.js, глибоке розуміння протоколів REST, gRPC, WebSocket.',

      // Vacancy Application Dialog
      'app_dialog.close_aria': 'Закрити',
      'app_dialog.eyebrow': 'Кар\'єра в Kast Solutions',
      'app_dialog.title': 'Відгук на вакансію',
      'app_dialog.desc': 'Заповніть форму, і наш рекрутер зв\'яжеться з вами для проведення технічного інтерв\'ю.',
      'app_dialog.vacancy_label': 'Позиція',
      'app_dialog.vacancy_placeholder': 'Оберіть вакансію…',
      'app_dialog.name_label': 'Ваше ім’я',
      'app_dialog.name_placeholder': 'Олександр',
      'app_dialog.phone_label': 'Номер телефону',
      'app_dialog.phone_placeholder': '+38 (0XX) XXX-XX-XX',
      'app_dialog.telegram_label': 'Telegram',
      'app_dialog.telegram_opt': '(нікнейм)',
      'app_dialog.telegram_placeholder': '@username',
      'app_dialog.resume_label': 'Посилання на резюме / LinkedIn',
      'app_dialog.resume_placeholder': 'https://...',
      'app_dialog.consent': 'Я даю згоду на обробку моїх персональних даних для участі у відборі на посаду.',
      'app_dialog.submit_label': 'Надіслати відгук',
      'app_dialog.submitting_label': 'Надсилаємо відгук…',
      'app_dialog.success_eyebrow': 'Відгук надіслано',
      'app_dialog.success_title': 'Дякуємо за інтерес до Kast Solutions!',
      'app_dialog.success_desc_prefix': 'Вашу заявку на позицію ',
      'app_dialog.success_desc_suffix': ' успішно прийнято. Наша HR-команда зв\'яжеться з вами протягом 2 робочих днів.',
      'app_dialog.success_close_btn': 'Зрозуміло',

      // Vacancy Validation Errors
      'vac_val.name_err': 'Вкажіть ваше ім\'я',
      'vac_val.phone_err': 'Введіть повний номер телефону',
      'vac_val.consent_err': 'Потрібно дати згоду на обробку даних',
      'vac_val.vacancy_err': 'Оберіть вакансію зі списку'
    },

    en: {
      // Header & Navigation
      'nav.services': 'Services',
      'nav.about': 'About Us',
      'nav.about_us': 'About Us',
      'nav.certificates': 'Certificates',
      'nav.careers': 'Careers',
      'nav.team': 'Team',
      'nav.contacts': 'Contacts',
      'nav.cta': 'Get Consultation',
      'header.burger_aria': 'Open menu',

      // Footer
      'footer.brand_desc': 'International technology consulting in cybersecurity, artificial intelligence, and high-load cloud architecture.',
      'footer.col_solutions': 'Solutions',
      'footer.sol_software': 'Software Engineering',
      'footer.sol_cyber': 'Cybersecurity Audit',
      'footer.sol_ai': 'Artificial Intelligence & LLM',
      'footer.sol_cloud': 'Cloud DevOps & K8s',
      'footer.col_company': 'Company',
      'footer.comp_about': 'About Us',
      'footer.comp_team': 'Leadership Team',
      'footer.comp_certs': 'ISO Certificates',
      'footer.comp_careers': 'Careers & Openings',
      'footer.col_contacts': 'Contacts',
      'footer.contact_office_label': 'Office:',
      'footer.contact_office_val': 'Kyiv, 5 Dilova St, "Horizon" Business Center',
      'footer.contact_email_label': 'Email:',
      'footer.contact_phone_label': 'Phone:',
      'footer.copy': '© 2026 Kast Solutions. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.compliance': 'ISO 27001 Compliance',

      // Callback Modal
      'modal.close_aria': 'Close modal window',
      'modal.title': 'Request a Consultation',
      'modal.subtitle': 'Fill out the form and our lead IT architect will get back to you within 15 minutes.',
      'modal.name_label': 'Your Name',
      'modal.name_placeholder': 'Alexander',
      'modal.phone_label': 'Phone Number',
      'modal.phone_placeholder': '+38 (0XX) XXX-XX-XX',
      'modal.consent': 'I consent to the processing of my personal data in accordance with the privacy policy.',
      'modal.submit_btn': 'Submit Request',
      'modal.submit_loading': 'Submitting...',
      'modal.success_msg': 'Thank you! Your request has been successfully submitted (Kast Solutions demo mode).',
      'modal.error_name': 'Please enter a valid name',
      'modal.error_phone': 'Please enter a full phone number',
      'modal.error_consent': 'Consent to personal data processing is required',

      // Page: index.html
      'index.meta_title': 'Kast Solutions — IT Consulting, Cybersecurity & AI Solutions',
      'index.meta_desc': 'Kast Solutions — leading technology partner in enterprise software engineering, cybersecurity audits, artificial intelligence, and cloud DevOps.',
      'index.hero_badge': 'Tech Innovations for Business',
      'index.hero_title': 'Building Digital Resilience & Scalability',
      'index.hero_subtitle': 'End-to-end IT consulting, AI integration, critical infrastructure defense, and turnkey cloud optimization.',
      'index.s1_tag': 'Enterprise Dev',
      'index.s1_title': 'Software Engineering & Integration',
      'index.s1_desc': 'Architecting high-throughput microservice cores, secure APIs, and resilient B2B enterprise systems.',
      'index.s1_btn': 'Learn More',
      'index.s2_tag': 'Zero-Trust & SOC',
      'index.s2_title': 'Cybersecurity Audit',
      'index.s2_desc': 'Penetration testing, ISO 27001 compliance, forensic incident response, and 24/7 security monitoring.',
      'index.s2_btn': 'Learn More',
      'index.s3_tag': 'AI & Machine Learning',
      'index.s3_title': 'AI & LLM Integration',
      'index.s3_desc': 'Developing private LLM assistants, RAG knowledge bases, and intelligent workflow automation.',
      'index.s3_btn': 'Learn More',
      'index.s4_tag': 'Cloud & Kubernetes',
      'index.s4_title': 'Cloud DevOps & IaC',
      'index.s4_desc': 'AWS and Azure migrations, automated CI/CD pipelines, container orchestration, and FinOps cost optimization.',
      'index.s4_btn': 'Learn More',
      'index.s5_tag': 'Leadership',
      'index.s5_title': 'Expert Leadership Team',
      'index.s5_desc': 'Certified enterprise architects, AI researchers, and industry visionaries with 10+ years of domain expertise.',
      'index.s5_btn': 'Meet the Team',
      'index.s6_tag': 'Certifications',
      'index.s6_title': 'Certificates & Alliances',
      'index.s6_desc': 'Official Tier-1 cloud vendor partnerships, ISO 27001 compliance, and global AI Alliance membership.',
      'index.s6_btn': 'View Certificates',
      'index.stats_title': 'Recognized Technological Expertise',
      'index.stat1_desc': 'Successfully delivered Enterprise projects',
      'index.stat2_desc': 'SLA uptime across deployed production systems',
      'index.stat3_desc': 'Years of enterprise digital transformation experience',
      'index.ach1_badge': 'Industry Recognition',
      'index.ach1_title': '#1 Ranked AI Integrator',
      'index.ach1_desc': 'Leading provider of enterprise LLMs, neural agent networks, and secure RAG knowledge infrastructures in B2B.',
      'index.ach2_badge': 'Security & Compliance',
      'index.ach2_title': 'ISO/IEC 27001 & 9001',
      'index.ach2_desc': 'International certification of information security management, customer data privacy, and engineering quality.',
      'index.ach3_badge': 'Cloud Partnership',
      'index.ach3_title': 'Tier-1 Cloud Partner',
      'index.ach3_desc': 'Official AWS Advanced Tier and Microsoft Azure Gold Platform certified partner with 24/7 SLA backing.',

      // Page: about.html
      'about.meta_title': 'About Company — Kast Solutions',
      'about.meta_desc': 'Learn more about Kast Solutions: mission, core principles, engineering heritage, cybersecurity standards, and artificial intelligence.',
      'about.banner_badge': 'About Us',
      'about.banner_title': 'About Kast Solutions',
      'about.banner_subtitle': 'We engineer future-proof digital ecosystems, pairing advanced AI innovations with uncompromising cyberspace protection.',
      'about.who_badge': 'Who We Are',
      'about.who_title': 'Innovative Technology Partner for Modern Business',
      'about.who_p1': '<strong>Kast Solutions</strong> is a progressive technology consulting and engineering firm specializing in enterprise software development, critical infrastructure cybersecurity audits, and artificial intelligence integration.',
      'about.who_p2': 'Founded by a team of premier IT architects, the company has evolved from a boutique development bureau into a full-scale technological integrator serving enterprise clients across Europe, North America, and Ukraine.',
      'about.mission_title': 'Our Mission & Philosophy',
      'about.mission_p': 'We believe that in an era of rapid technological acceleration, business success is governed by two key factors: <strong>speed of innovation adoption</strong> and <strong>reliability of digital asset protection</strong>. Our mission is to empower enterprises with tools that enable rapid growth without data compromise or downtime.',
      'about.principles_title': 'Core Principles of Our Work',
      'about.pr1': '<strong>Zero-Trust Security by Default:</strong> Every line of code, microservice, and database is architected adhering to the highest defense standards.',
      'about.pr2': '<strong>Data-Driven & AI-Centric Approach:</strong> We leverage large language models (LLMs) and machine learning algorithms to automate routines and extract high-value insights from data.',
      'about.pr3': '<strong>Cloud Resiliency:</strong> Kubernetes-based architectures across AWS/Azure guarantee zero downtime with a 99.99% availability SLA.',
      'about.pr4': '<strong>Agile Engineering & Transparency:</strong> Clients enjoy direct access to engineering teams, performance metrics, and sprint deliverables.',
      'about.stack_title': 'Technology Stack & Core Competencies',
      'about.stack_intro': 'Our engineers possess profound expertise across the modern enterprise technology landscape:',
      'about.st1': '<strong>Backend & High-Load:</strong> Go (Golang), Node.js / TypeScript, Python (FastAPI, PyTorch), Java / Spring Boot, PostgreSQL, Redis, Apache Kafka.',
      'about.st2': '<strong>AI & Data Science:</strong> LangChain, LlamaIndex, OpenAI / Claude APIs, private local models (Llama 3, Mistral), Vector Databases (Qdrant, Pinecone).',
      'about.st3': '<strong>DevOps & Cloud:</strong> Docker, Kubernetes, Terraform, AWS (ECS, EKS, Lambda), Microsoft Azure, CI/CD automation.',
      'about.st4': '<strong>Cybersecurity:</strong> Burp Suite Pro, Metasploit, Wireshark, SIEM platforms (Wazuh, Splunk), SonarQube (SAST/DAST).',
      'about.disclosure_title': 'Official Corporate Disclosure',
      'about.disclosure_body': '<strong>Full Legal Entity Name:</strong> Kast Solutions LLC<br><strong>Registered Address:</strong> 03150, Ukraine, Kyiv, 5 Dilova St, Suite 402<br><strong>Certification:</strong> ISO/IEC 27001:2022 (Information Security), ISO 9001:2015 (Quality Management)<br><strong>Professional Development Policy:</strong> All company engineers and architects undergo mandatory annual certifications with world-leading providers (AWS Certified, CKA, CISSP) totaling at least 80 training hours per year.',

      // Page: services.html
      'services.meta_title': 'Services — Kast Solutions',
      'services.meta_desc': 'Full spectrum of technological services from Kast Solutions: enterprise software development, cybersecurity audit, AI integration, cloud architecture, and DevOps.',
      'services.banner_badge': 'Expertise & Solutions',
      'services.banner_title': 'Services & Technological Solutions',
      'services.banner_subtitle': 'Transforming complex business challenges into reliable, scalable, and secure enterprise-grade digital products.',
      'services.intro_badge': 'Tailored Approach',
      'services.intro_title': 'Comprehensive Digital Transformation for Your Enterprise',
      'services.intro_desc': 'We do not just write code — we engineer resilient architectures, implement Zero-Trust frameworks, and create intelligent systems that elevate operational efficiency.',
      'services.intro_btn': 'Discuss Your Project',
      'services.p1_num': '01',
      'services.p1_title': 'Enterprise Software Development & Integration',
      'services.p1_desc': 'Building fault-tolerant enterprise systems: from microservice core design to deep ERP, CRM, and payment gateway integrations.',
      'services.p1_f1': 'Microservice architecture (Go, Node.js, Java, .NET)',
      'services.p1_f2': 'High-load API design and Event-Driven architecture',
      'services.p1_f3': 'Zero-downtime legacy system modernization',
      'services.p1_f4': 'Complex enterprise portals and B2B platforms',
      'services.p2_num': '02',
      'services.p2_title': 'Cybersecurity Audit & Infrastructure Defense',
      'services.p2_desc': 'Comprehensive vulnerability assessments, Zero-Trust architectural deployment, and 24/7 security incident monitoring.',
      'services.p2_f1': 'OWASP-compliant penetration testing (Network, Web, API)',
      'services.p2_f2': 'ISO 27001, SOC 2, and GDPR compliance auditing',
      'services.p2_f3': 'Deployment of SIEM / EDR / XDR security stacks',
      'services.p2_f4': 'DDoS protection and cloud environment hardening',
      'services.p3_num': '03',
      'services.p3_title': 'AI Integration & Business Process Automation',
      'services.p3_desc': 'Building applied AI solutions: private LLMs, enterprise RAG knowledge bases, and automation of routine analytical workflows.',
      'services.p3_f1': 'Private LLM-based enterprise AI assistant development',
      'services.p3_f2': 'Predictive analytics and business metric forecasting',
      'services.p3_f3': 'Intelligent document processing and OCR / NLP pipelines',
      'services.p3_f4': 'RPA automation for high-volume repetitive tasks',
      'services.p4_num': '04',
      'services.p4_title': 'Cloud Computing & DevOps Infrastructure',
      'services.p4_desc': 'Seamless cloud migration, CI/CD pipeline automation, Kubernetes container orchestration, and FinOps cost optimization.',
      'services.p4_f1': 'Cloud migration & hybrid architectures in AWS, Azure, GCP',
      'services.p4_f2': 'CI/CD pipeline automation (GitLab CI, GitHub Actions)',
      'services.p4_f3': 'Kubernetes orchestration, Docker, and Terraform (IaC)',
      'services.p4_f4': 'Cloud cost audit and FinOps optimization',
      'services.proc_badge': 'Kast Methodology',
      'services.proc_title': 'How We Build Resilient Solutions',
      'services.proc_subtitle': 'A transparent engineering lifecycle from initial audit to continuous production support.',
      'services.step1_badge': 'Stage 01',
      'services.step1_title': 'Technical Audit',
      'services.step1_desc': 'We analyze current architecture, identify bottlenecks and security risks, and formalize project specifications.',
      'services.step2_badge': 'Stage 02',
      'services.step2_title': 'Architectural Design',
      'services.step2_desc': 'We create detailed data schemas, interaction protocols, security models, and scaling roadmaps.',
      'services.step3_badge': 'Stage 03',
      'services.step3_title': 'Engineering & QA',
      'services.step3_desc': 'Iterative Scrum delivery, automated testing, and comprehensive cybersecurity validation.',
      'services.step4_badge': 'Stage 04',
      'services.step4_title': 'Release & SLA Support',
      'services.step4_desc': 'Cloud deployment, 24/7 telemetry monitoring, and continuous architectural refinement.',
      'services.cta_badge': 'Ready to Start?',
      'services.cta_title': 'Get an Architectural Project Assessment',
      'services.cta_desc': 'Our lead architects will evaluate your challenge and recommend the optimal technology stack and delivery roadmap.',
      'services.cta_btn': 'Request Free Audit',
      'services.modal_title': 'Request a Consultation',
      'services.modal_subtitle': 'Leave your contact info, and a lead Kast Solutions architect will reach out to discuss details.',
      'services.modal_success': 'Thank you for your request! We will contact you shortly.',

      // Page: team.html
      'team.meta_title': 'Expert Team — Kast Solutions',
      'team.meta_desc': 'Meet the leadership and premier architects behind Kast Solutions. Experts in artificial intelligence, cybersecurity, and cloud technologies.',
      'team.banner_badge': 'Leadership & Vision',
      'team.banner_title': 'Leadership & Engineering Experts',
      'team.banner_subtitle': 'Distinguished leaders with global expertise delivering high-reliability technology solutions for our enterprise partners.',
      'team.m1_name': 'Oleksandr Kovalenko',
      'team.m1_pos': 'Chief Executive Officer & Managing Partner (CEO)',
      'team.m1_p1': '15+ years managing large-scale digital transformations and enterprise IT ecosystems',
      'team.m1_p2': 'Certified Enterprise Architect (TOGAF 9.2)',
      'team.m1_p3': 'Led deployment of high-throughput B2B platforms in international fintech',
      'team.m1_p4': 'Keynote speaker at European technology consulting summits',
      'team.m2_name': 'Olena Melnyk',
      'team.m2_pos': 'Chief Operating Officer & Growth Partner (COO)',
      'team.m2_p1': 'Expert in strategic business analysis and scaling high-performance engineering teams',
      'team.m2_p2': 'Master of Business Administration (MBA)',
      'team.m2_p3': 'Board member of the Innovative Technology Business Association',
      'team.m2_p4': 'Supervised company process certifications for ISO 9001 and ISO 27001',
      'team.m3_name': 'Maksym Shevchenko',
      'team.m3_pos': 'Chief Technology Officer & Head of AI (CTO)',
      'team.m3_p1': 'PhD in Artificial Intelligence and Distributed Computing Systems',
      'team.m3_p2': 'Architect of enterprise-grade LLM models and RAG knowledge infrastructures',
      'team.m3_p3': 'AWS Certified Solutions Architect Professional & Kubernetes CKA',
      'team.m3_p4': '12+ years of hands-on expertise in high-load architectures and DevSecOps',
      'team.m4_name': 'Viktoriia Bondarenko',
      'team.m4_pos': 'Chief Information Security Officer (CISO)',
      'team.m4_p1': 'Certified Information Systems Security Professional (CISSP), CEH & CISM',
      'team.m4_p2': '10+ years conducting critical infrastructure audits and penetration testing',
      'team.m4_p3': 'Incident Response team lead and Zero-Trust architecture designer',
      'team.m4_p4': 'Lead auditor for GDPR and NIST Cybersecurity Framework international compliance',

      // Page: licenses.html
      'licenses.meta_title': 'Certificates & Partnerships — Kast Solutions',
      'licenses.meta_desc': 'Official licenses, international ISO 27001 and ISO 9001 certifications, cloud partnerships, and AI Alliance membership of Kast Solutions.',
      'licenses.banner_badge': 'Standards & Compliance',
      'licenses.banner_title': 'Certificates & Partnerships',
      'licenses.banner_subtitle': 'Verified adherence to international information security standards, software quality, and official tier-1 vendor partnerships.',
      'licenses.intro_badge': 'Official Recognition',
      'licenses.intro_title': 'International Accreditations of Kast Solutions',
      'licenses.intro_desc': 'All our engineering workflows, security protocols, and data management procedures undergo annual independent audits meeting strict global regulatory criteria.',
      'licenses.lic1_desc': 'ISO/IEC 27001:2022 Certification (Information Security Management Systems)',
      'licenses.lic2_desc': 'Official Tier-1 Cloud Certified Partner Status (AWS & Microsoft Azure Solutions)',
      'licenses.lic3_desc': 'ISO 9001:2015 Software Engineering Quality Certification',
      'licenses.lic4_desc': 'Membership Certificate in the Global Safe & Ethical AI Alliance',

      // Page: contacts.html
      'contacts.meta_title': 'Contacts & Careers — Kast Solutions',
      'contacts.meta_desc': 'Contact details for Kast Solutions in Kyiv. Active IT career opportunities: AI Engineers, Cybersecurity Architects, DevOps, and Full-Stack Developers.',
      'contacts.banner_badge': 'Get In Touch',
      'contacts.banner_title': 'Contacts & Careers',
      'contacts.banner_subtitle': 'Always open to new technological partnerships and talented professionals aiming to transform the digital industry.',
      'contacts.card1_title': 'Headquarters',
      'contacts.card1_desc': '03150, Ukraine, Kyiv, 5 Dilova St, "Horizon" Business Center, 4th Floor',
      'contacts.card2_title': 'Email Addresses',
      'contacts.card2_inquiries': 'General Inquiries:',
      'contacts.card2_hr': 'Careers & HR:',
      'contacts.card3_title': 'Direct Channels',
      'contacts.card3_tg': 'Telegram Support:',
      'contacts.card3_hours': 'Hours:',
      'contacts.card3_sched_val': 'Mon-Fri 09:00 - 18:00 (GMT+2)',
      'contacts.car_badge': 'Career Opportunities',
      'contacts.car_title_prefix': 'Join the Team at ',
      'contacts.car_desc': 'We are looking for passionate engineers and researchers to craft enterprise AI, cloud ecosystems, and cybersecurity solutions.',
      'contacts.car_count': '4 Open Positions',

      // Vacancy 1
      'contacts.vac1_kicker': 'Artificial Intelligence',
      'contacts.vac1_loc': 'Kyiv / Remote',
      'contacts.vac1_title': 'Senior AI / ML Engineer (LLM & RAG Systems)',
      'contacts.vac_comp_label': 'Salary:',
      'contacts.vac_resp_label': 'Responsibilities:',
      'contacts.vac1_r1': 'Engineering and tuning enterprise RAG systems leveraging on-premise and cloud LLMs;',
      'contacts.vac1_r2': 'Integrating vector databases (Qdrant, Milvus, Pinecone) and data processing pipelines;',
      'contacts.vac1_r3': 'Architecting multi-agent systems to automate complex corporate workflows;',
      'contacts.vac1_r4': 'Fine-tuning and quantizing open-source models (Llama 3, Mistral) for domain-specific tasks.',
      'contacts.vac1_req': '<strong>Requirements:</strong> 4+ years experience with Python, PyTorch, LangChain/LlamaIndex, deep understanding of transformer architectures.',
      'contacts.vac_apply_btn': 'Apply for Position',
      'contacts.vac_tg_btn': 'Message on Telegram',

      // Vacancy 2
      'contacts.vac2_kicker': 'Cybersecurity',
      'contacts.vac2_loc': 'Kyiv / Hybrid',
      'contacts.vac2_title': 'Lead Cybersecurity Architect / Pentester',
      'contacts.vac2_r1': 'Conducting complex security audits (Network, Web, Cloud) and penetration tests;',
      'contacts.vac2_r2': 'Architecting and supervising Zero-Trust implementations for enterprise clients;',
      'contacts.vac2_r3': 'Auditing compliance against ISO 27001, SOC 2, and GDPR frameworks;',
      'contacts.vac2_r4': 'Leading incident response protocols and analyzing threat vectors.',
      'contacts.vac2_req': '<strong>Requirements:</strong> OSCP / CEH / CISSP certifications, 5+ years hands-on offensive/defensive security experience.',

      // Vacancy 3
      'contacts.vac3_kicker': 'Cloud Infrastructure',
      'contacts.vac3_loc': 'Remote',
      'contacts.vac3_title': 'Senior DevOps & Cloud Infrastructure Engineer (AWS & K8s)',
      'contacts.vac3_r1': 'Building and maintaining production Kubernetes clusters in AWS and Azure environments;',
      'contacts.vac3_r2': 'Infrastructure automation via Infrastructure as Code (Terraform, Terragrunt);',
      'contacts.vac3_r3': 'Constructing secure CI/CD pipelines integrating SAST/DAST automated security scans;',
      'contacts.vac3_r4': 'Telemetry monitoring and alerting (Prometheus, Grafana, OpenTelemetry).',
      'contacts.vac3_req': '<strong>Requirements:</strong> 4+ years experience, CKA / AWS Solutions Architect certification is a strong plus.',

      // Vacancy 4
      'contacts.vac4_kicker': 'Software Development',
      'contacts.vac4_loc': 'Kyiv / Remote',
      'contacts.vac4_title': 'Senior Full-Stack Developer (Go / Node.js & React)',
      'contacts.vac4_r1': 'Designing and developing microservices for enterprise B2B platforms;',
      'contacts.vac4_r2': 'Building responsive, accessible, and fast web interfaces with React / Next.js / TypeScript;',
      'contacts.vac4_r3': 'Optimizing relational and NoSQL databases for high concurrency;',
      'contacts.vac4_r4': 'Participating in peer code reviews and architectural discussions.',
      'contacts.vac4_req': '<strong>Requirements:</strong> 4+ years experience, proficiency in Go or Node.js, solid grasp of REST, gRPC, WebSocket protocols.',

      // Vacancy Application Dialog
      'app_dialog.close_aria': 'Close',
      'app_dialog.eyebrow': 'Careers at Kast Solutions',
      'app_dialog.title': 'Apply for Position',
      'app_dialog.desc': 'Complete the form and our recruiter will contact you for a technical interview.',
      'app_dialog.vacancy_label': 'Position',
      'app_dialog.vacancy_placeholder': 'Select a position…',
      'app_dialog.name_label': 'Your Name',
      'app_dialog.name_placeholder': 'Alexander',
      'app_dialog.phone_label': 'Phone Number',
      'app_dialog.phone_placeholder': '+38 (0XX) XXX-XX-XX',
      'app_dialog.telegram_label': 'Telegram',
      'app_dialog.telegram_opt': '(handle)',
      'app_dialog.telegram_placeholder': '@username',
      'app_dialog.resume_label': 'Resume / LinkedIn Link',
      'app_dialog.resume_placeholder': 'https://...',
      'app_dialog.consent': 'I consent to the processing of my personal data for candidate evaluation.',
      'app_dialog.submit_label': 'Submit Application',
      'app_dialog.submitting_label': 'Submitting…',
      'app_dialog.success_eyebrow': 'Application Submitted',
      'app_dialog.success_title': 'Thank you for your interest in Kast Solutions!',
      'app_dialog.success_desc_prefix': 'Your application for position ',
      'app_dialog.success_desc_suffix': ' has been successfully received. Our HR team will reach out within 2 business days.',
      'app_dialog.success_close_btn': 'Got It',

      // Vacancy Validation Errors
      'vac_val.name_err': 'Please enter your name',
      'vac_val.phone_err': 'Please enter full phone number',
      'vac_val.consent_err': 'Consent to data processing is required',
      'vac_val.vacancy_err': 'Please select a position from the list'
    }
  };

  let currentLang = DEFAULT_LANG;

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'uk' || saved === 'en')) {
        return saved;
      }
    } catch (e) {
      console.warn('localStorage access failed:', e);
    }
    return DEFAULT_LANG;
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('localStorage save failed:', e);
    }
  }

  function translate(key, fallback = '') {
    const langDict = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
    if (langDict && key in langDict) {
      return langDict[key];
    }
    const fallbackDict = TRANSLATIONS[DEFAULT_LANG];
    if (fallbackDict && key in fallbackDict) {
      return fallbackDict[key];
    }
    return fallback || key;
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;

    // 1. Text & HTML content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = translate(key);
      if (val) {
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // 2. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = translate(key);
      if (val) el.placeholder = val;
    });

    // 3. Aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const val = translate(key);
      if (val) el.setAttribute('aria-label', val);
    });

    // 4. Titles
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const val = translate(key);
      if (val) el.title = val;
    });

    // 5. Update active classes on language switcher buttons
    // 5. Update dropdown state & labels
    const flagContainers = document.querySelectorAll('#current-lang-flag, .current-lang-flag');
    flagContainers.forEach((el) => {
      el.innerHTML = FLAGS[currentLang] || FLAGS.uk;
    });

    const labelContainers = document.querySelectorAll('#current-lang-label, .current-lang-label');
    labelContainers.forEach((el) => {
      el.textContent = LABELS[currentLang] || LABELS.uk;
    });

    document.querySelectorAll('.lang-dropdown__item').forEach((item) => {
      const itemLang = item.getAttribute('data-lang');
      if (itemLang === currentLang) {
        item.classList.add('active');
        item.setAttribute('aria-selected', 'true');
      } else {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      }
    });

    // 6. Update document title & meta tags if defined on the page
    const pageMetaTitleKey = document.querySelector('meta[name="meta-title-key"]');
    if (pageMetaTitleKey) {
      const key = pageMetaTitleKey.getAttribute('content');
      const val = translate(key);
      if (val) document.title = val;
    }

    const pageMetaDescKey = document.querySelector('meta[name="meta-desc-key"]');
    const metaDescEl = document.querySelector('meta[name="description"]');
    if (pageMetaDescKey && metaDescEl) {
      const key = pageMetaDescKey.getAttribute('content');
      const val = translate(key);
      if (val) metaDescEl.setAttribute('content', val);
    }

    // 7. Dispatch custom event for modules like vacancies.js / main.js
    window.dispatchEvent(
      new CustomEvent('languageChanged', {
        detail: { lang: currentLang }
      })
    );

    // 8. Reveal content by removing anti-FOUC pending state
    document.documentElement.classList.remove('lang-en-pending', 'i18n-pending');
  }

  const FLAGS = {
    uk: '<svg class="flag-icon" viewBox="0 0 640 480" width="18" height="13.5" aria-hidden="true"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#0057b7" d="M0 0h640v240H0z"/><path fill="#ffd700" d="M0 240h640v240H0z"/></g></svg>',
    en: '<svg class="flag-icon" viewBox="0 0 640 480" width="18" height="13.5" aria-hidden="true"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 240l240 178v62h-80L320 301 81 480H0v-60l239-180L0 64V0h75z"/><path fill="#C8102E" d="m424 288 216 162v30h-40L384 300l40-12zm-208 0-40 12L0 426v-30l176-132 40 24zM640 0v16L464 148l-40-24L600 0h40zM0 0h40L216 132l-40 24L0 34V0z"/><path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/><path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/></svg>'
  };

  const LABELS = {
    uk: 'UA',
    en: 'EN'
  };

  function setLanguage(lang) {
    if (lang !== 'uk' && lang !== 'en') return;
    currentLang = lang;
    saveLanguage(lang);
    applyTranslations();
  }

  function initDropdown() {
    document.addEventListener('click', (e) => {
      // 1. Toggle button click
      const toggle = e.target.closest('.lang-dropdown__toggle');
      if (toggle) {
        e.preventDefault();
        e.stopPropagation();
        const dropdown = toggle.closest('.lang-dropdown');
        if (dropdown) {
          const isOpen = dropdown.classList.contains('open');
          // Close any other open dropdowns
          document.querySelectorAll('.lang-dropdown.open').forEach(d => {
            if (d !== dropdown) {
              d.classList.remove('open');
              const t = d.querySelector('.lang-dropdown__toggle');
              if (t) t.setAttribute('aria-expanded', 'false');
            }
          });
          dropdown.classList.toggle('open', !isOpen);
          toggle.setAttribute('aria-expanded', String(!isOpen));
        }
        return;
      }

      // 2. Item select click
      const item = e.target.closest('.lang-dropdown__item');
      if (item) {
        e.preventDefault();
        e.stopPropagation();
        const targetLang = item.getAttribute('data-lang');
        if (targetLang) {
          setLanguage(targetLang);
        }
        const dropdown = item.closest('.lang-dropdown');
        if (dropdown) {
          dropdown.classList.remove('open');
          const t = dropdown.querySelector('.lang-dropdown__toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
        return;
      }

      // 3. Click outside -> close open dropdowns
      if (!e.target.closest('.lang-dropdown')) {
        document.querySelectorAll('.lang-dropdown.open').forEach(d => {
          d.classList.remove('open');
          const t = d.querySelector('.lang-dropdown__toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.lang-dropdown.open').forEach(d => {
          d.classList.remove('open');
          const t = d.querySelector('.lang-dropdown__toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  // Public API
  window.i18n = {
    setLanguage: setLanguage,
    getLanguage: function () {
      return currentLang;
    },
    t: translate,
    init: function () {
      currentLang = getSavedLanguage();
      applyTranslations();
    }
  };

  // Immediate synchronous execution for already-parsed DOM elements (prevents FOUC)
  currentLang = getSavedLanguage();
  applyTranslations();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initDropdown();
      applyTranslations();
    });
  } else {
    initDropdown();
    applyTranslations();
  }
})();

