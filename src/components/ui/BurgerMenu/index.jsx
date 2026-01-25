'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex flex-col gap-1.5"
        aria-label="Open menu"
      >
        <span className="w-6 h-0.5 bg-[var(--primary)]" />
        <span className="w-6 h-0.5 bg-[var(--primary)]" />
        <span className="w-6 h-0.5 bg-[var(--primary)]" />
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999]"
            onClick={() => setOpen(false)}
          >
            <nav
              className="absolute right-0 top-0 w-64 rounded-2xl bg- p-6 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setOpen(false)}>Experience</Link>
              <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            </nav>
          </div>,
          document.body
        )
      }
    </>
  );
}
