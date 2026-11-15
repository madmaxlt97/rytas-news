"use client";
import Container from "@/components/ui/Container";
import { useState } from "react";
import { news } from "@/data/news";
import NewsGrid from "@/components/home/NewsGrid";

export default function NewsPage() {
  const allNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

  const [visibleCount, setVisibleCount] = useState(3);

  const visibleNews = allNews.slice(0, visibleCount);
  return (
    <section id="all-news" className="py-6 sm:py-8 lg:py-10">
      <Container>
        <div className="mb-7 sm:mb-9">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Visos naujienos
          </h1>

          <div className="mt-3 h-1 w-10 rounded-full bg-[#D62835]" />
        </div>

        <NewsGrid news={visibleNews} />
        {visibleCount < news.length && (
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="block mx-auto mt-10 border border-[#D62835] rounded-lg px-7 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#D62835]"
          >
            Daugiau naujienų
          </button>
        )}
      </Container>
    </section>
  );
}
