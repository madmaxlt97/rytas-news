import Container from "@/components/ui/Container";
import NewsFeed from "@/components/news/NewsFeed";
import { news } from "@/data/news";

export default function NewsPage() {
  const allNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section id="all-news" className="py-6 sm:py-8 lg:py-10">
      <Container>
        <div className="mb-7 sm:mb-9">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Visos naujienos
          </h1>

          <div className="mt-3 h-1 w-10 rounded-full bg-[#D62835]" />
        </div>

        <NewsFeed news={allNews} />
      </Container>
    </section>
  );
}
