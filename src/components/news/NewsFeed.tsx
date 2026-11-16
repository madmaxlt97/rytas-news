"use client";

import { useState } from "react";
import type { News } from "@/types/news";
import NewsGrid from "../home/NewsGrid";

type NewsFeedProps = {
  news: News[];
};

export default function NewsFeed({ news }: NewsFeedProps) {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleNews = news.slice(0, visibleCount);

  return (
    <>
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
    </>
  );
}
