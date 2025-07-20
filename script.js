// Объект со всеми текстами для разных языков
const translations = {
    ru: {
        pageTitle: "Sound Dreams",
        headerTitle: "Добро пожаловать!",
        headerSubtitle1: "На канал SOUND DREAM – ваш портал к техно музыке.",
        headerSubtitle2: "Music for DJs. Where Rhythms Reside & Grooves Thrive.",
        musicSectionTitle: "Наш Telegram-канал с Музыкой",
        musicSectionText: "Погрузитесь в мир качественного техно на нашем канале!",
        tgChannel1Text: "Telegram-канал (Techno)",
        exchangeSectionTitle: "Файлообменники для Музыки",
        exchangeSectionText: "Здесь вы найдете ссылки на надежные файлообменники, где можно скачать или загрузить треки.",
        fileExchange1Btn: "Файлообменник 1 (например, MediaFire)",
        fileExchange2Btn: "Файлообменник 2 (например, Zippyshare)",
        fileExchange3Btn: "Файлообменник 3 (например, Google Drive)",
        donateSectionTitle: "Поддержать Проект",
        donateSectionText: "Ваша поддержка помогает нам развиваться и делиться лучшей музыкой!",
        patreonBtnText: "Patreon",
        paypalBtnText: "PayPal",
        donateDisclaimerText: "Любая сумма поможет нам развиваться и делиться лучшей музыкой!",
        footerText: "&copy; 2025 Ваш Проект. Все права защищены.",
        // Переводы для секции FAQ
        faqSectionTitle: "Часто задаваемые вопросы",
        faqQ1: "Как я могу скачать музыку с ваших каналов?",
        faqA1: "Музыка доступна для скачивания через наш телеграмм канал по ссылке выше.",
        faqQ2: "Какие жанры музыки вы публикуете?",
        faqA2: "Мы специализируемся на высококачественном техно (Techno).",
        faqQ3: "Можно ли предложить свой трек для публикации?",
        faqA3: "Да, мы всегда открыты для новых талантов! Свяжитесь с нами через раздел 'Контакты', чтобы обсусить возможную публикацию.",
        // НОВЫЕ ПЕРЕВОДЫ FAQ НАЧИНАЮТСЯ ЗДЕСЬ
        faqQ4: "Как часто вы загружаете новую музыку/обновляете канал?",
        faqA4: "Мы следим за новыми новинками и стараемся выкладывать музыку каждый день.",
        faqQ5: "В каком качестве доступны треки?",
        faqA5: "Большинство треков доступны в высоком качестве MP3 (320 kbps), а чаще всего во  FLAC для наилучшего звучания.",
        faqQ8: "Каковы требования к трекам для публикации?",
        faqA8: "Мы принимаем треки в жанрах Techno. Треки должны быть в формате MP3 или FLAC, сведены и отмастерены на профессиональном уровне. Для более подробной информации, свяжитесь с нами через раздел 'Контакты'.",
    
        
         faqQ11: "Куда идут пожертвования?",
        // ИЗМЕНЕНО:
        faqA11: "Все пожертвования идут на развитие проекта: оплату хостинга, улучшение качества и поддержку талантливых артистов.",
        faqQ12: "Как еще я могу поддержать ваш проект?",
        faqA12: "Вы можете поддержать нас, делясь нашим каналом с друзьями, оставляя комментарии и лайки, а также активно слушая и распространяя нашу музыку. Ваша активность – лучшая поддержка!",
        // НОВЫЕ ПЕРЕВОДЫ FAQ ЗАВЕРШАЮТСЯ ЗДЕСЬ
        // Переводы для секции Контакты
        contactSectionTitle: "Свяжитесь с нами",
        contactSectionText: "Будем рады ответить на ваши вопросы и предложения.",
        contactTelegramText: "Наш Telegram",
        contactEmailText: "Напишите нам",
        devTelegramText: "Telegram Разработчика",
        devEmailText: "Почта Разработчика",
    },
    en: {
        pageTitle: "Sound Dreams",
        headerTitle: "Welcome!",
        headerSubtitle1: "To SOUND DREAM – your portal to techno music.",
        headerSubtitle2: "Music for DJs. Where Rhythms Reside & Grooves Thrive.",
        musicSectionTitle: "Our Telegram Channel",
        musicSectionText: "Dive into the world of quality techno on our channel!",
        tgChannel1Text: "Telegram Channel (Techno)",
        exchangeSectionTitle: "Music File Sharing Platforms",
        exchangeSectionText: "Here you'll find links to reliable file sharing platforms to download or upload tracks.",
        fileExchange1Btn: "File Sharing 1 (e.g., MediaFire)",
        fileExchange2Btn: "File Sharing 2 (e.g., Zippyshare)",
        fileExchange3Btn: "File Sharing 3 (e.g., Google Drive)",
        donateSectionTitle: "Support the Project",
        donateSectionText: "Your support helps us grow and share the best music!",
        patreonBtnText: "Patreon",
        paypalBtnText: "PayPal",
        donateDisclaimerText: "Any amount will help us grow and share the best music!",
        footerText: "&copy; 2025 SOUND DREAMS MINI CORPARATION. All rights reserved.",
        // Переводы для секции FAQ
        faqSectionTitle: "Frequently Asked Questions",
        faqQ1: "How can I download music from your channels?",
        faqA1: "Music is available for download via our telegram channel at the link above.",
        faqQ2: "What music genres do you publish?",
        faqA2: "We specialize in high-quality Techno.",
        faqQ3: "Can I submit my track for publication?",
        faqA3: "Yes, we are always open to new talents! Contact us through the 'Contacts' section to discuss possible publication.",
        // НОВЫЕ ПЕРЕВОДЫ FAQ НАЧИНАЮТСЯ ЗДЕСЬ
        faqQ4: "How often do you upload new music/update the channel?",
        faqA4: "We follow new releases and try to upload music every day.",
        faqQ5: "In what quality are the tracks available?",
        faqA5: "Most tracks are available in high-quality MP3 (320 kbps) or FLAC formats for the best sound.",
        faqQ8: "What are the requirements for track submission?",
        faqA8: "We accept tracks in Techno and Deep House genres. Tracks must be in MP3 or FLAC format, mixed and mastered professionally. For more detailed information, please contact us via the 'Contacts' section.",
        
        
        faqQ11: "Where do donations go?",
        // ИЗМЕНЕНО:
        faqA11: "All donations go towards project development: hosting fees, quality improvement, and supporting talented artists.",
        faqQ12: "How else can I support your project?",
        faqA12: "You can support us by sharing our channel with friends, leaving comments and likes, and actively listening to and spreading our music. Your activity is the best support!",
        // НОВЫЕ ПЕРЕВОДЫ FAQ ЗАВЕРШАЮТСЯ ЗДЕСЬ
        // Переводы для секции Контакты
        contactSectionTitle: "Contact Us",
        contactSectionText: "We'd love to hear from you and answer your questions.",
        contactTelegramText: "Our Telegram",
        contactEmailText: "Email Us",
        devTelegramText: "Telegram Developer",
        devEmailText: "Developer Email",
    },
    ua: {
        pageTitle: "Sound Dreams",
        headerTitle: "Ласкаво просимо!",
        headerSubtitle1: "На канал SOUND DREAM – ваш портал до техно музики.",
        headerSubtitle2: "Music for DJs. Where Rhythms Reside & Grooves Thrive.",
        musicSectionTitle: "Наш Telegram-канал з Музикою",
        musicSectionText: "Пориньте у світ якісного техно на нашому каналі!",
        tgChannel1Text: "Telegram-канал (Techno)",
        exchangeSectionTitle: "Файлообмінники для Музики",
        exchangeSectionText: "Тут ви знайдете посилання на надійні файлообмінники, де можна завантажити або вивантажити треки.",
        fileExchange1Btn: "Файлообмінник 1 (наприклад, MediaFire)",
        fileExchange2Btn: "Файлообмінник 2 (наприклад, Zippyshare)",
        fileExchange3Btn: "Файлообмінник 3 (наприклад, Google Drive)",
        donateSectionTitle: "Підтримати Проєкт",
        donateSectionText: "Ваша підтримка допомагає нам розвиватися та ділитися найкращою музикою!",
        patreonBtnText: "Patreon",
        paypalBtnText: "PayPal",
        donateDisclaimerText: "Будь-яка сума допоможе нам розвиватися та ділитися найкращою музикою!",
        footerText: "&copy; 2025 Sound Dreams mini corparation. Всі права захищені.",
        // Переводы для секции FAQ
        faqSectionTitle: "Часті запитання",
        faqQ1: "Як я можу завантажити музику з ваших каналів?",
        faqA1: "Музика доступна для завантаження через наш телеграм канал за посиланням вище.",
        faqQ2: "Які жанри музики ви публікуєте?",
        faqA2: "Ми спеціалізуємося на високоякісному техно (Techno).",
        faqQ3: "Чи можна запропонувати свій трек для публікації?",
        faqA3: "Так, ми завжди відкриті до нових талантів! Зв'яжіться з нами через розділ 'Контакти', щоб обговорити можливу публікацію.",
        // НОВЫЕ ПЕРЕВОДЫ FAQ НАЧИНАЮТСЯ ЗДЕСЬ
        faqQ4: "Як часто ви завантажуєте нову музику/оновлюєте канал?",
        faqA4: "Ми стежимо за новими новинками і намагаємося викладати музику щодня.",
        faqQ5: "В якій якості доступні треки?",
        faqA5: "Більшість треків доступні у високій якості MP3 (320 kbps) та FLAC для найкращого звучання.",
        faqQ8: "Які вимоги до треків для публікації?",
        faqA8: "Ми приймаємо треки в жанрах Techno. Треки повинні бути у форматі MP3 або FLAC, зведені та відмастерені на професійному рівні. Для більш детальної інформації, будь ласка, зв'яжіться з нами через розділ 'Контакти'.",
        
        
        faqQ11: "Куди йдуть пожертви?",
        // ИЗМЕНЕНО:
        faqA11: "Усі пожертви йдуть на розвиток проєкту: оплату хостингу, покращення якості та підтримку талановитих артистів.",
        faqQ12: "Як ще я можу підтримати ваш проєкт?",
        faqA12: "Ви можете підтримати нас, ділячись нашим каналом з друзями, залишаючи коментарі та вподобайки, а також активно слухаючи та поширюючи нашу музику. Ваша активність – найкраща підтримка!",
        // НОВЫЕ ПЕРЕВОДЫ FAQ ЗАВЕРШАЮТСЯ ЗДЕСЬ
        // Переводы для секции Контакты
        contactSectionTitle: "Зв'яжіться з нами",
        contactSectionText: "Будемо раді відповісти на ваші питання та пропозиції.",
        contactTelegramText: "Наш Telegram",
        contactEmailText: "Напишіть нам",
        devTelegramText: "Telegram Розробника",
        devEmailText: "Пошта Розробника",
    }
};

// Функция для установки языка
function setLanguage(lang) {
    const elementsToTranslate = [];
    // Добавляем новые ID для перевода
    const idsToTranslate = [
        "pageTitle", "headerTitle", "headerSubtitle1", "headerSubtitle2",
        "musicSectionTitle", "musicSectionText", "tgChannel1Text",
        "exchangeSectionTitle", "exchangeSectionText", "fileExchange1Btn",
        "fileExchange2Btn", "fileExchange3Btn",
        "donateSectionTitle", "donateSectionText", "patreonBtnText",
        "paypalBtnText", "donateDisclaimerText",
        "faqSectionTitle", "faqQ1", "faqA1", "faqQ2", "faqA2", "faqQ3", "faqA3",
        "faqQ4", "faqA4", "faqQ5", "faqA5",
        "faqQ8", "faqA8", "faqQ9", "faqA9", "faqQ11", "faqA11", // ID FAQQ6/faqA6, FAQQ7/faqA7 УДАЛЕНЫ
        "faqQ12", "faqA12",
        "contactSectionTitle", "contactSectionText", "contactTelegramText",
        "contactEmailText", "devTelegramText", "devEmailText",
        "footerText"
    ];

    idsToTranslate.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            elementsToTranslate.push(element);
        }
    });

    elementsToTranslate.forEach(element => {
        element.classList.add('fade-out');
        element.classList.remove('fade-in');
    });

    setTimeout(() => {
        document.documentElement.lang = lang;

        elementsToTranslate.forEach(element => {
            const key = element.id;
            if (key === "pageTitle") {
                document.title = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

        document.getElementById('langRu').classList.remove('active');
        document.getElementById('langEn').classList.remove('active');
        document.getElementById('langUa').classList.remove('active');

        document.getElementById('lang' + lang.toUpperCase()).classList.add('active');

        localStorage.setItem('preferredLang', lang);

    }, 300);
}

// Получаем элементы кнопок переключения языка
const langRuBtn = document.getElementById('langRu');
const langEnBtn = document.getElementById('langEn');
const langUaBtn = document.getElementById('langUa');

// Добавляем обработчики событий (слушатели кликов) к кнопкам
langRuBtn.addEventListener('click', () => setLanguage('ru'));
langEnBtn.addEventListener('click', () => setLanguage('en'));
langUaBtn.addEventListener('click', () => setLanguage('ua'));

// Логика для кнопки переключения темы
const themeToggleBtn = document.getElementById('themeToggle');

themeToggleBtn.addEventListener('click', () => {
    // Проверяем текущую тему и переключаемся
    if (document.body.classList.contains('light-theme')) {
        // Если сейчас светлая тема, переключаемся на темную
        document.body.classList.remove('light-theme');
        localStorage.setItem('preferredTheme', 'dark-theme'); // Сохраняем темную тему
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Иконка солнца для переключения на светлую
        themeToggleBtn.setAttribute('aria-label', 'Toggle light theme');
    } else {
        // Если сейчас темная тема (или никакая), переключаемся на светлую
        document.body.classList.add('light-theme');
        localStorage.setItem('preferredTheme', 'light-theme'); // Сохраняем светлую тему
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Иконка луны для переключения на темную
        themeToggleBtn.setAttribute('aria-label', 'Toggle dark theme');
    }
});

// Этот блок кода выполняется, когда весь HTML-документ загружен.
document.addEventListener('DOMContentLoaded', () => {
    // Проверка сохраненного языка
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('en');
    }

    // Проверка сохраненной темы
    const savedTheme = localStorage.getItem('preferredTheme');
    // Если сохранена светлая тема, применяем её
    if (savedTheme === 'light-theme') {
        document.body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Иконка луны для переключения на темную
        themeToggleBtn.setAttribute('aria-label', 'Toggle dark theme');
    } else {
        // По умолчанию или если сохранена "dark-theme" (или любая другая, кроме light-theme)
        // убедимся, что light-theme не активна
        document.body.classList.remove('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Иконка солнца для переключения на светлую
        themeToggleBtn.setAttribute('aria-label', 'Toggle light theme');
    }

    // Логика для аккордеона FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // Получаем следующий элемент (ответ)

            question.classList.toggle('active'); // Переключаем класс 'active' для вопроса (для поворота иконки)

            if (answer.classList.contains('open')) {
                // Если ответ открыт, закрываем его
                answer.style.maxHeight = null; // Сброс max-height
                answer.classList.remove('open'); // Удаляем класс 'open'
            } else {
                // Если ответ закрыт, открываем его
                answer.style.maxHeight = answer.scrollHeight + "px"; // Устанавливаем max-height равным фактической высоте контента
                answer.classList.add('open'); // Добавляем класс 'open'
            }
        });
    });
});