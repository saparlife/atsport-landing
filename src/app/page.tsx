"use client";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  Trophy,
  Phone,
  Star,
  Truck,
  ShoppingBag,
  Users,
  Home as HomeIcon,
  Clock,
  Smartphone,
  ChevronDown,
  Heart,
  Search,
  Filter,
  Globe,
  Award,
  Camera
} from "lucide-react";

// Horse Head Logo SVG
const HorseLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 8V6c-1.5 0-3 .5-4 1.5l-1 1-1-1C13 6.5 11.5 6 10 6v2c1 0 2 .3 2.8.8l1.2 1L13 11c-1-.5-2-.8-3-.9V8H8v2.1c-1.5.2-3 .8-4 1.9l-2 2v5l2-1v4h4v-4l2 1c2 0 4-1 5-3l1-2 2 1c1-1 2-3 2-5zm-8 7c-.5 0-1-.2-1.5-.5L9 13l2-1 2 1-1 1.5c0 .3-.5.5-1 .5z"/>
  </svg>
);

// Translations
const translations = {
  kk: {
    nav: {
      features: "Мүмкіндіктер",
      services: "Қызметтер",
      download: "Жүктеу",
      contact: "Байланыс"
    },
    hero: {
      badge: "Қазақстандағы #1 Көкпар қосымшасы",
      title1: "Көкпар әлеміне",
      title2: "қош келдіңіз!",
      description: "AtSport - көкпар іс-шараларын табыңыз, жылқы сатыңыз және сатып алыңыз, коневозка, атбегі және басқа қызметтерді оңай пайдаланыңыз.",
      downloadOn: "Жүктеу",
      users: "Пайдаланушылар",
      events: "Іс-шаралар",
      rating: "Рейтинг",
      learnMore: "Толығырақ"
    },
    features: {
      badge: "Негізгі мүмкіндіктер",
      title: "Бір қосымшада барлығы",
      description: "AtSport көкпар әлемімен байланыстырады. Іс-шаралар, жылқы сатылымы, қызметтер және тағы басқа мүмкіндіктер.",
      items: [
        { title: "Көкпар іс-шаралары", description: "Қала, күн, жүлде қоры, ұйымдастырушының байланыс деректері. Видео шақырту жүктеу мүмкіндігі." },
        { title: "Жылқы сату", description: "Фото, видео, бойы, жасы, бағасы, қала. Толық ақпаратпен жылқыларды қарау және сату." },
        { title: "Той басшы", description: "Көкпар жүргізетін тамада. Бағасы, бос күндері, фото және видеолары." },
        { title: "Коневозка", description: "Ат тасымалын іздеу, өз ұсынысын қою, қалаға байланысты баға ұсыну." },
        { title: "Атбегі", description: "Әр қаланың ат бағатын адамдары, рейтингі мен бағасы. Өзін тіркеу мүмкіндігі." },
        { title: "Ат мінгізу", description: "Белгілі сағатта өз бағасын ұсынып, ат мінгізіп беретін адамдар." },
        { title: "Ат әбзелдері", description: "Ат абзелдерін сататын дүкендер тізімі. Заттардың фотосын жүктеу мүмкіндігі." },
        { title: "Көкпаршы палуандар", description: "Көкпарға аты жоқ палуандар үшін ат ұсыныстары. Ат иелері өз аттарын ұсына алады." },
        { title: "Денниктер", description: "Қорасы бар адамдар өз ұсынысын беріп, қорасын жалға беру мүмкіндігі." }
      ]
    },
    functionality: {
      badge: "Қосымша функционал",
      title: "Ыңғайлы және қарапайым",
      description: "AtSport қосымшасы сізге көкпар әлемін зерттеуді жеңілдетеді. Барлық қажетті функциялар бір жерде.",
      items: [
        { title: "Телефон арқылы авторизация", description: "Жылдам және қауіпсіз кіру" },
        { title: "Лента + фильтрлер", description: "Қала, категория бойынша іздеу" },
        { title: "Пайдаланушы профилі", description: "Өз хабарламаларын басқару" },
        { title: "Таңдаулылар", description: "Ұнаған хабарламаларды сақтау" }
      ],
      phone1: { title: "Көкпар іс-шаралары", subtitle: "Таңдаңыз және қатысыңыз", event: "Алматы көкпары", date: "15 желтоқсан", prize: "Жүлде: ₸1,500,000", more: "Толығырақ →" },
      phone2: { title: "Жылқы сату", horse1: { name: "Ақбоз", age: "5 жас", price: "₸2,500,000" }, horse2: { name: "Торы ат", age: "4 жас", price: "₸1,800,000" } }
    },
    download: {
      badge: "iOS & Android",
      title: "Қазір жүктеңіз!",
      description: "AtSport қосымшасын жүктеп, көкпар әлеміне қосылыңыз. Іс-шаралар, жылқылар, қызметтер - барлығы бір жерде.",
      free: "Тегін жүктеу. Қазақстан бойынша қолжетімді."
    },
    testimonials: {
      title: "Пайдаланушылар пікірлері",
      subtitle: "Мыңдаған адамдар AtSport қосымшасын пайдаланады",
      items: [
        { name: "Ержан Қ.", location: "Алматы", text: "Көкпар іс-шараларын табу өте оңай болды. Енді барлық ақпарат бір жерде!" },
        { name: "Болат М.", location: "Астана", text: "Жылқымды сатуға орналастырдым, бірнеше күнде сатып алушы тапты. Керемет қосымша!" },
        { name: "Айдос С.", location: "Шымкент", text: "Коневозка қызметін іздеп жүргенмін, осы қосымша арқылы тез таптым." }
      ]
    },
    footer: {
      description: "Қазақстанның бірінші көкпар қосымшасы. Көкпар іс-шаралары, жылқы сатылымы, қызметтер және тағы басқалары.",
      links: "Сілтемелер",
      privacy: "Құпиялылық саясаты",
      contactTitle: "Байланыс",
      rights: "© 2024 AtSport. Барлық құқықтар қорғалған."
    },
    app: {
      hello: "Сәлем!",
      search: "Іздеу...",
      kokpar: "Көкпар",
      horses: "Жылқылар",
      transport: "Коневозка",
      trainer: "Атбегі",
      eventsCount: "12 іс-шара",
      adsCount: "48 хабарлама",
      servicesCount: "15 қызмет",
      specialistsCount: "8 маман"
    }
  },
  ru: {
    nav: {
      features: "Возможности",
      services: "Услуги",
      download: "Скачать",
      contact: "Контакты"
    },
    hero: {
      badge: "#1 Кокпар приложение в Казахстане",
      title1: "Добро пожаловать",
      title2: "в мир кокпара!",
      description: "AtSport - находите мероприятия кокпара, продавайте и покупайте лошадей, легко пользуйтесь услугами коневозки, атбеги и другими.",
      downloadOn: "Скачать",
      users: "Пользователи",
      events: "Мероприятия",
      rating: "Рейтинг",
      learnMore: "Подробнее"
    },
    features: {
      badge: "Основные возможности",
      title: "Всё в одном приложении",
      description: "AtSport связывает вас с миром кокпара. Мероприятия, продажа лошадей, услуги и многое другое.",
      items: [
        { title: "Мероприятия кокпара", description: "Город, дата, призовой фонд, контакты организатора. Возможность загрузки видео-приглашения." },
        { title: "Продажа лошадей", description: "Фото, видео, рост, возраст, цена, город. Просмотр и продажа лошадей с полной информацией." },
        { title: "Той басшы", description: "Ведущий кокпара. Цена, свободные дни, фото и видео." },
        { title: "Коневозка", description: "Поиск перевозки лошадей, размещение своего предложения, цена в зависимости от города." },
        { title: "Атбеги", description: "Тренеры лошадей каждого города, их рейтинг и цены. Возможность регистрации." },
        { title: "Прокат лошадей", description: "Люди, предлагающие прокат лошадей в определённое время по своей цене." },
        { title: "Снаряжение", description: "Список магазинов конного снаряжения. Возможность загрузки фото товаров." },
        { title: "Кокпаршы палуаны", description: "Предложения лошадей для палуанов без своего коня. Владельцы могут предлагать своих лошадей." },
        { title: "Денники", description: "Владельцы конюшен могут размещать предложения по аренде." }
      ]
    },
    functionality: {
      badge: "Дополнительный функционал",
      title: "Удобно и просто",
      description: "Приложение AtSport облегчает изучение мира кокпара. Все необходимые функции в одном месте.",
      items: [
        { title: "Авторизация по телефону", description: "Быстрый и безопасный вход" },
        { title: "Лента + фильтры", description: "Поиск по городу и категории" },
        { title: "Профиль пользователя", description: "Управление своими объявлениями" },
        { title: "Избранное", description: "Сохранение понравившихся объявлений" }
      ],
      phone1: { title: "Мероприятия кокпара", subtitle: "Выбирайте и участвуйте", event: "Кокпар в Алматы", date: "15 декабря", prize: "Приз: ₸1,500,000", more: "Подробнее →" },
      phone2: { title: "Продажа лошадей", horse1: { name: "Акбоз", age: "5 лет", price: "₸2,500,000" }, horse2: { name: "Гнедой", age: "4 года", price: "₸1,800,000" } }
    },
    download: {
      badge: "iOS & Android",
      title: "Скачайте сейчас!",
      description: "Скачайте приложение AtSport и присоединяйтесь к миру кокпара. Мероприятия, лошади, услуги - всё в одном месте.",
      free: "Бесплатно. Доступно по всему Казахстану."
    },
    testimonials: {
      title: "Отзывы пользователей",
      subtitle: "Тысячи людей используют приложение AtSport",
      items: [
        { name: "Ержан К.", location: "Алматы", text: "Находить мероприятия кокпара стало очень легко. Теперь вся информация в одном месте!" },
        { name: "Болат М.", location: "Астана", text: "Разместил свою лошадь на продажу, через несколько дней нашёл покупателя. Отличное приложение!" },
        { name: "Айдос С.", location: "Шымкент", text: "Искал услугу коневозки, через это приложение быстро нашёл." }
      ]
    },
    footer: {
      description: "Первое кокпар-приложение Казахстана. Мероприятия кокпара, продажа лошадей, услуги и многое другое.",
      links: "Ссылки",
      privacy: "Политика конфиденциальности",
      contactTitle: "Контакты",
      rights: "© 2024 AtSport. Все права защищены."
    },
    app: {
      hello: "Привет!",
      search: "Поиск...",
      kokpar: "Кокпар",
      horses: "Лошади",
      transport: "Коневозка",
      trainer: "Атбеги",
      eventsCount: "12 событий",
      adsCount: "48 объявлений",
      servicesCount: "15 услуг",
      specialistsCount: "8 специалистов"
    }
  }
};

type Lang = 'kk' | 'ru';

export default function Home() {
  const [lang, setLang] = useState<Lang>('kk');
  const t = translations[lang];

  const featureIcons = [Trophy, Camera, Users, Truck, Star, Clock, ShoppingBag, Award, HomeIcon];
  const featureColors = ['primary', 'accent', 'purple', 'blue', 'green', 'orange', 'pink', 'indigo', 'teal'];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <HorseLogo className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AtSport</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">{t.nav.features}</a>
              <a href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">{t.nav.services}</a>
              <a href="#download" className="text-gray-600 hover:text-primary-600 transition-colors">{t.nav.download}</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">{t.nav.contact}</a>
            </div>
            <div className="flex items-center space-x-3">
              {/* Language Switcher */}
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setLang('kk')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    lang === 'kk' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  ҚАЗ
                </button>
                <button
                  onClick={() => setLang('ru')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    lang === 'ru' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  РУС
                </button>
              </div>
              <a
                href="#download"
                className="bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                {t.nav.download}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute top-60 -left-40 w-80 h-80 bg-accent-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t.hero.title1}
                <span className="text-gradient block">{t.hero.title2}</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                {t.hero.description}
              </p>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-gray-900 text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all hover:scale-105 shadow-xl"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">{t.hero.downloadOn}</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-gray-900 text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all hover:scale-105 shadow-xl"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.28l14.5 8.5c.55.32.89.89.89 1.52 0 .63-.34 1.2-.89 1.52l-14.5 8.5c-.25.18-.55.28-.86.28-.83 0-1.5-.67-1.5-1.5zm2-14.94v13.88l11.86-6.94L5 5.56z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">{t.hero.downloadOn}</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start space-x-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-500">{t.hero.users}</div>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">{t.hero.events}</div>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Star className="w-4 h-4 text-accent-500 fill-accent-500 mr-1" />
                    {t.hero.rating}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Phone mockup */}
            <div className="relative flex justify-center lg:justify-end animate-float">
              <div className="relative">
                {/* Phone frame */}
                <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10" />
                  <div className="w-full h-full bg-gradient-to-b from-primary-500 to-primary-700 rounded-[2.5rem] overflow-hidden">
                    {/* App screen content */}
                    <div className="p-6 pt-12">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-white/70 text-sm">{t.app.hello}</div>
                          <div className="text-white font-bold text-xl">AtSport</div>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Search bar */}
                      <div className="bg-white/20 rounded-2xl p-3 flex items-center space-x-3 mb-6">
                        <Search className="w-5 h-5 text-white/70" />
                        <span className="text-white/70">{t.app.search}</span>
                      </div>

                      {/* Categories */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-2xl p-4">
                          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                            <Trophy className="w-5 h-5 text-primary-600" />
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{t.app.kokpar}</div>
                          <div className="text-xs text-gray-500">{t.app.eventsCount}</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4">
                          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center mb-3">
                            <Camera className="w-5 h-5 text-accent-600" />
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{t.app.horses}</div>
                          <div className="text-xs text-gray-500">{t.app.adsCount}</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                            <Truck className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{t.app.transport}</div>
                          <div className="text-xs text-gray-500">{t.app.servicesCount}</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                            <Star className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{t.app.trainer}</div>
                          <div className="text-xs text-gray-500">{t.app.specialistsCount}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -left-20 top-32 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{lang === 'kk' ? 'Алматы' : 'Алматы'}</div>
                      <div className="text-xs text-gray-500">{lang === 'kk' ? '5 көкпар' : '5 кокпаров'}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-16 bottom-40 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">₸2,000,000</div>
                      <div className="text-xs text-gray-500">{lang === 'kk' ? 'Жүлде қоры' : 'Призовой фонд'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-12">
            <a href="#features" className="flex flex-col items-center text-gray-400 hover:text-primary-600 transition-colors">
              <span className="text-sm mb-2">{t.hero.learnMore}</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Smartphone className="w-4 h-4" />
              <span>{t.features.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.features.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.features.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => {
              const Icon = featureIcons[index];
              const color = featureColors[index];
              return (
                <div
                  key={index}
                  className="group bg-gray-50 hover:bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-100"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    color === 'primary' ? 'bg-primary-100 text-primary-600' :
                    color === 'accent' ? 'bg-accent-100 text-accent-600' :
                    color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    color === 'green' ? 'bg-green-100 text-green-600' :
                    color === 'orange' ? 'bg-orange-100 text-orange-600' :
                    color === 'pink' ? 'bg-pink-100 text-pink-600' :
                    color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                    'bg-teal-100 text-teal-600'
                  } group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Functionality Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Filter className="w-4 h-4" />
                <span>{t.functionality.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t.functionality.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.functionality.description}
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, ...t.functionality.items[0] },
                  { icon: Search, ...t.functionality.items[1] },
                  { icon: Users, ...t.functionality.items[2] },
                  { icon: Heart, ...t.functionality.items[3] }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main phone */}
                <div className="relative w-64 h-[520px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl z-10">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
                    <div className="bg-primary-600 p-6 pt-10">
                      <div className="text-white text-lg font-bold mb-1">{t.functionality.phone1.title}</div>
                      <div className="text-white/70 text-sm">{t.functionality.phone1.subtitle}</div>
                    </div>
                    <div className="p-4 space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                              <Trophy className="w-5 h-5 text-primary-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{t.functionality.phone1.event}</div>
                              <div className="text-xs text-gray-500">{t.functionality.phone1.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">{t.functionality.phone1.prize}</span>
                            <span className="text-primary-600 font-medium">{t.functionality.phone1.more}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second phone (offset) - FIXED */}
                <div className="absolute -right-12 top-20 w-56 h-[440px] bg-gray-900 rounded-[2rem] p-2 shadow-2xl rotate-6">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-10" />
                  <div className="w-full h-full bg-white rounded-[1.7rem] overflow-hidden">
                    <div className="bg-accent-500 p-5 pt-8">
                      <div className="text-white text-base font-bold">{t.functionality.phone2.title}</div>
                      <div className="text-white/70 text-xs mt-1">{lang === 'kk' ? '48 хабарлама' : '48 объявлений'}</div>
                    </div>
                    <div className="p-3 space-y-2">
                      {/* Horse card 1 */}
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="w-full h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg mb-2 flex items-center justify-center">
                          <Camera className="w-6 h-6 text-amber-600" />
                        </div>
                        <div className="font-semibold text-xs text-gray-900">{t.functionality.phone2.horse1.name}</div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">{t.functionality.phone2.horse1.age}</span>
                          <span className="text-xs font-semibold text-primary-600">{t.functionality.phone2.horse1.price}</span>
                        </div>
                      </div>
                      {/* Horse card 2 */}
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="w-full h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-2 flex items-center justify-center">
                          <Camera className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="font-semibold text-xs text-gray-900">{t.functionality.phone2.horse2.name}</div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">{t.functionality.phone2.horse2.age}</span>
                          <span className="text-xs font-semibold text-primary-600">{t.functionality.phone2.horse2.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Download Section */}
      <section id="download" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4" />
                <span>{t.download.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t.download.title}
              </h2>

              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                {t.download.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">{t.hero.downloadOn}</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.28l14.5 8.5c.55.32.89.89.89 1.52 0 .63-.34 1.2-.89 1.52l-14.5 8.5c-.25.18-.55.28-.86.28-.83 0-1.5-.67-1.5-1.5zm2-14.94v13.88l11.86-6.94L5 5.56z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">{t.hero.downloadOn}</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              <p className="text-white/60 text-sm mt-8">
                {t.download.free}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo & description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                  <HorseLogo className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold">AtSport</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">{t.footer.links}</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t.nav.features}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.nav.services}</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">{t.nav.download}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.privacy}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-6">{t.footer.contactTitle}</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+7 (777) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{lang === 'kk' ? 'Қазақстан, Алматы' : 'Казахстан, Алматы'}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t.footer.rights}
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              Made with ❤️ in Kazakhstan
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
