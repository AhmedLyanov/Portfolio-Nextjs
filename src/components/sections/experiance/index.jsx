'use client';

import { experiance } from "@/constants/experiance";
import { useTheme } from '@/contexts/ThemeContext';

export default function Experiance() {
  const { theme } = useTheme();

  return (
    <section className="experiance-work-section px-50 grid justify-center mb-24">
      <span
        className="experiance-work--title uppercase font-bold text-4xl mb-14 text-center"

      >
        experience
      </span>
      <div className="experiance-work--container grid gap-12">
        {experiance.map((work, index) => (
          <div
            key={index}
            className="experiance-work--item p-6 rounded-lg "
            style={{ backgroundColor: 'var(--card)' }}
          >
            <div className="experiance-work--company flex justify-between ">
              <div className="flex flex-col gap-2.5 md:flex-row md:items-center">
                <div className="experiance-work--company--image w-[34px] h-[32px] rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" src={work.logo} alt="Company" />
                </div>
                <div
                  className="experiance-work--company--title text-[21.74px] font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  {work.title}
                </div>
              </div>
              <div className="experiance-work--company--date">
                <span
                  className="text-[14.49px]"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {work.time}
                </span>
              </div>
            </div>
            <div
              className="experiance-work--description text-[14.49px] font-poppins mt-6"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {work.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
