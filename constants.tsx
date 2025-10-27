import React from 'react';

// Service Icons
export const ServiceIcon: React.FC<{name: string}> = ({ name }) => {
    switch (name) {
        case 'smm': return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
        case 'targeting': return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
        case 'visual': return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>;
        case 'strategy': return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
        case 'analytics': return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>;
        case 'consulting': return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
        case 'cases': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><path d="M12 11l-2 2 2 2"></path><path d="M16 11l2 2-2 2"></path></svg>;
        // Icons for Work Process
        case 'clipboard': return <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>;
        case 'pen-tool': return <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;
        case 'send': return <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
        case 'trending-up': return <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
        default: return null;
    }
};


// Services Data
export const SERVICES = [
    { icon: 'smm', title: 'SMM-продвижение', description: 'Полное ведение ваших социальных сетей для роста аудитории и вовлеченности.' },
    { icon: 'targeting', title: 'Таргетированная реклама', description: 'Точно настроенные рекламные кампании в Instagram и Facebook для привлечения идеальных клиентов.' },
    { icon: 'visual', title: 'Создание визуала', description: 'Профессиональные фото, видео и графический дизайн, чтобы ваш бренд выделялся.' },
    { icon: 'strategy', title: 'Контент-стратегия', description: 'Разработка контент-плана на основе данных, который соответствует вашим бизнес-целям.' },
    { icon: 'analytics', title: 'Аналитика и отчетность', description: 'Глубокий анализ и регулярные отчеты для отслеживания эффективности и ROI.' },
    { icon: 'consulting', title: 'Консультации', description: 'Экспертные советы и индивидуальные стратегические сессии для вашей команды.' },
];

// Work Process Data
export const WORK_PROCESS_STEPS = [
    { icon: 'clipboard', title: 'Анализ и Стратегия', description: 'Глубоко погружаемся в ваш бизнес, анализируем конкурентов и целевую аудиторию, чтобы разработать выигрышную SMM-стратегию.' },
    { icon: 'pen-tool', title: 'Создание Контента', description: 'Наша креативная команда создает цепляющий визуал и продающие тексты, которые отражают уникальность вашего бренда.' },
    { icon: 'send', title: 'Запуск и Продвижение', description: 'Публикуем контент и запускаем таргетированную рекламу, чтобы привлечь внимание именно вашей целевой аудитории.' },
    { icon: 'trending-up', title: 'Оптимизация и Рост', description: 'Постоянно анализируем результаты, оптимизируем кампании и предоставляем подробные отчеты, обеспечивая стабильный рост.' },
];


// Pricing Data
export const PRICING_PLANS = [
    {
        name: 'Старт',
        emoji: '🚀',
        price: {
            monthly: '49,000',
            quarterly: null,
        },
        isPopular: false,
        features: [
            'Экспресс-аудит и оформление профиля',
            'Контент-план на месяц (15 тем)',
            '10 готовых постов (дизайн + тексты)',
            'Настройка 1 рекламной кампании',
            '10 000 ₸ на рекламу включено',
            'Развёрнутый отчёт по итогам месяца',
        ],
    },
    {
        name: 'Про',
        emoji: '💎',
        price: {
            monthly: '99,000',
            quarterly: '84,150', // 15% discount
        },
        isPopular: true,
        features: [
            'Глубокая аналитика и маркетинговая стратегия',
            '15 продающих постов и 5 вирусных Reels',
            'Ежедневные Stories (30+ в месяц)',
            'Мощная таргетированная реклама',
            'Полный комьюнити-менеджмент',
            'Еженедельная отчётность и аналитика',
        ],
    },
    {
        name: 'Премиум',
        emoji: '🔥',
        price: {
            monthly: '199,000',
            quarterly: '169,150', // 15% discount
        },
        isPopular: false,
        features: [
            'Всё из пакета "Профи" +',
            'Разработка бренда с нуля (лого, фирменный стиль)',
            '20 экспертных постов и 10 проф. Reels',
            'Реклама в Instagram + Facebook + TikTok',
            'Построение автоматизированной воронки продаж',
            'VIP-сопровождение и поддержка 24/7',
        ],
    },
];

// Testimonials Data
export const TESTIMONIALS = [
    {
        quote: "Vensity Media полностью преобразили наше присутствие в Instagram. Заявки пошли уже со второй недели! Профессионалы своего дела.",
        name: "Айжан Султанова",
        title: "Основатель, 'Bloom Cosmetics'",
        avatar: "AS",
    },
    {
        quote: "Результаты превзошли все ожидания. Охваты выросли в 3 раза за месяц, а продажи увеличились на 40%. Особенно впечатлил креативный подход к Reels.",
        name: "Тимур Ибраев",
        title: "Владелец, кофейня 'Urban Coffee'",
        avatar: "ТИ",
    },
    {
        quote: "Лучшее SMM-агентство, с которым мы работали. Глубокая аналитика, четкая стратегия и потрясающий визуал. Рекомендую всем, кто хочет реальных результатов.",
        name: "Елена Ким",
        title: "Маркетолог, 'FitClub Almaty'",
        avatar: "ЕК",
    },
     {
        quote: "Благодаря Vensity, мой личный бренд вышел на новый уровень. Постоянный поток клиентов на консультации и sold-out на мой онлайн-курс. Спасибо!",
        name: "Данияр Аскаров",
        title: "Бизнес-тренер",
        avatar: "ДА",
    }
];


// FAQ Data
export const FAQ_DATA = [
    {
        question: 'Бюджет на рекламу входит в стоимость?',
        answer: 'В пакете "Старт" — да, 10 000 ₸ уже включено в стоимость для быстрого старта. В пакетах "Про" и "Премиум" рекламный бюджет оплачивается отдельно, что позволяет нам гибко масштабировать кампании под ваши цели.',
    },
    {
        question: 'Какой минимальный бюджет на рекламу нужен?',
        answer: 'Мы рекомендуем начинать с бюджета от 30 000 ₸ в месяц. Эта сумма позволяет провести качественное тестирование гипотез, определить наиболее эффективные аудитории и получить первые видимые результаты.',
    },
    {
        question: 'Когда будут первые результаты?',
        answer: 'Благодаря точной настройке рекламы, первые заявки и обращения вы можете получить уже в течение 1-2 недель. Для достижения стабильного потока клиентов и устойчивого роста мы рекомендуем работать системно в течение 1-2 месяцев.',
    },
    {
        question: 'Можно ли отказаться после первого месяца?',
        answer: 'Да, мы работаем без долгосрочных договоров и ценим ваше доверие. Вы можете оценить нашу работу по итогам первого месяца. Однако для достижения максимального эффекта и закрепления результатов мы рекомендуем сотрудничество от 3 месяцев.',
    },
    {
        question: 'Что если мне не понравится?',
        answer: 'Мы уверены в качестве нашей работы. Если по итогам первого месяца вы не увидите результатов, соответствующих нашим прогнозам и поставленным целям, мы готовы вернуть 50% от стоимости наших услуг. Ваше удовлетворение — наш главный приоритет.',
    },
    {
        question: 'Работаете ли вы с другими городами?',
        answer: 'Абсолютно. Мы являемся цифровым агентством и успешно работаем с клиентами по всему Казахстану и странам СНГ в удаленном формате. География для нас не имеет значения, важны только ваши цели.',
    },
]

// Contact Icons
export const ContactIcon: React.FC<{name: string}> = ({ name }) => {
     switch (name) {
        case 'mail': return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
        case 'phone': return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
        case 'map': return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
        default: return null;
    }
};

// Social Icons
export const SocialIcon: React.FC<{name: string}> = ({ name }) => {
    switch (name) {
        case 'instagram': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
        case 'telegram': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22 11 13 2 9 22 2z"></path></svg>;
        case 'whatsapp': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
        default: return null;
    }
};