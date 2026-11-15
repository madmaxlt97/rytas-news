import Container from "@/components/ui/Container";
import { news } from "@/data/news";
import findLatest from "@/lib/news";
import FeaturedNews from "@/components/home/FeaturedNews";
import NewsGrid from "@/components/home/NewsGrid";

export default function Home() {
  const resultFeatured = news.find((item) => item.featured) ?? findLatest(news);

  const newsResult = news
    .filter((item) => item.id !== resultFeatured?.id)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <div>
        {resultFeatured ? (
          <FeaturedNews news={resultFeatured} />
        ) : (
          <p>No any news posted yet. But stay tuned!</p>
        )}
      </div>
      <section id="latest-news" className="py-6 sm:py-8 lg:py-10">
        <Container>
          <div>
            <div className="mb-7 flex items-center justify-between sm:mb-9">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Paskutinės naujienos
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#D62835]" />
            </div>
            <NewsGrid news={newsResult} />
          </div>
        </Container>
      </section>
    </>
  );
}
