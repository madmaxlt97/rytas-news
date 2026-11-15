import Container from "../ui/Container";
import type { News } from "@/types/news";
import NewsCard from "./NewsCard";

type NewsGridProps = {
  news: News[];
};
export default function NewsGrid({ news }: NewsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
}
