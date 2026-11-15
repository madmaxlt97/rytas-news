"use client";
import { scrollToSection } from "@/utils/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="flex flex-col gap-6 px-4 py-2 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <button
            onClick={() => scrollToSection("featured-news")}
            className="text-lg font-semibold tracking-tight cursor-pointer hover:text-red-600 transition-colors"
          >
            RYTAS NEWS
          </button>
          <p className="mt-2 text-sm text-gray-500">© 2026 Rytas News</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="https://www.facebook.com/profile.php?id=61577685452363"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/rytas.news/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://x.com/RytasNews"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
