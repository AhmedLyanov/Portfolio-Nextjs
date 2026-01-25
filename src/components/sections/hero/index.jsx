'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="text-center mb-20">
      <div className="rounded-full mx-auto w-48 h-48 overflow-hidden p-1">
        <div
          className="rounded-full overflow-hidden w-full h-full"
          style={{ backgroundColor: 'var(--secondary)' }}
        >
          <img
            src="https://i.postimg.cc/15x03Tgc/ahmedlyanov.jpg"
            alt="Аватарка"
            className="w-full h-full object-cover"
            priority="true"
          />
        </div>
      </div>
      <h1 className="text-6xl font-bold mb-6 pt-10" style={{ color: 'var(--primary)' }}>
        Привет, я Ахмед
      </h1>
      <p className="text-xl max-w-2xl mx-auto font-light text-[18px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
        Я создаю современные, быстрые и масштабируемые веб-приложения с использованием React, Next.js и современных веб-технологий.
        Работаю с продуманной архитектурой, чистым кодом и вниманием к пользовательскому опыту.

        Имею опыт разработки SPA и SSR-приложений, взаимодействия с API, управления состоянием и оптимизации производительности.
        Ценю читаемость кода, переиспользуемость компонентов и системный подход к разработке.

        Постоянно развиваюсь, слежу за трендами фронтенда и стремлюсь делать не просто «работающие», а качественные и удобные продукты.
      </p>
      <div className="container-buttons w-full flex justify-center gap-4 mt-14">
        <button
          className="rounded-full w-48 p-2.5 font-bold text-center transition duration-300"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            border: '1px solid var(--primary)'
          }}
        >
          Get in Touch
        </button>
        <button
          className="rounded-full w-48 p-2.5 font-bold text-center transition duration-300"
          style={{
            backgroundColor: 'transparent',
            color: 'var(--primary)',
            border: '2px solid var(--primary)'
          }}
        >
          Download CV
        </button>
      </div>
    </section>
  );
}