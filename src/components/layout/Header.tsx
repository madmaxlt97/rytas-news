"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const closeMenu = () => setIsMenuOpen(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-black/5 backdrop-blur-md">
      <div className="flex items-center justify-between py-2 px-4">
        <Link
          href={`/`}
          className="text-xl font-bold tracking-tight text-white"
        >
          Rytas<span className="text-red-600">.News</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href={`/naujienos`}>Naujienos</Link>
          <p>Komanda</p>
          <a
            href="https://rytasnews.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Substack
          </a>
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center divide-y divide-red-600/40">
            <Link
              href={`/naujienos`}
              onClick={closeMenu}
              className="w-full py-4 text-center hover:text-red-500 transition-colors"
            >
              Naujienos
            </Link>
            <Link
              href={`/komanda`}
              onClick={closeMenu}
              className="w-full py-4 text-center hover:text-red-500 transition-colors"
            >
              Komanda
            </Link>
            <a
              href="https://rytasnews.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full py-4 text-center hover:text-red-500 transition-colors"
            >
              Substack
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
