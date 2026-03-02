'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: 'var(--card)',
        color: 'var(--foreground)',
        borderTop: `1px solid var(--border)`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-2">
            <span
              className="font-bold text-xl md:text-2xl lg:text-[23.53px] block mb-4"
              style={{ color: 'var(--primary)' }}
            >
              Contact
            </span>
            <p
              className="text-sm md:text-base max-w-2xl"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Seasoned Full Stack Software Engineer with over 3 years of hands-on
              experience in designing and implementing robust, scalable, and
              innovative web solutions. Adept at leveraging a comprehensive skill
              set encompassing front-end and back-end technologies
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Get in touch</h3>
            
            <div className="flex gap-3 items-center mb-4">
              <img src="/Email.svg" alt="Email icon" className="w-5 h-5" />
              <span
                className="text-sm md:text-base"
                style={{ color: 'var(--muted-foreground)' }}
              >
                amoshal1997@gmail.com
              </span>
            </div>

            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <img src="/x.svg" alt="X" className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <img src="/youtube.svg" alt="YouTube" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 text-center border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}