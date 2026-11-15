import Container from "../ui/Container";
import type { News } from "@/types/news";
import NewsCard from "./NewsCard";

type NewsGridProps = {
  news: News[];
};
export default function NewsGrid({ news }: NewsGridProps) {
  return (
    <section id="latest-news" className="py-6 sm:py-8 lg:py-10">
      <Container>
        <div className="mb-7 flex items-center justify-between sm:mb-9">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Paskutinės naujienos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
