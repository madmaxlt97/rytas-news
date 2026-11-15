import { news } from "@/data/news";
import findLatest from "@/lib/news";
import FeaturedNews from "@/components/home/FeaturedNews";
import NewsGrid from "@/components/home/NewsGrid";

export default function Home() {
  //const availableNews = news[]

  const resultFeatured = news.find((item) => item.featured) ?? findLatest(news);

  const newsResult = news
    .filter((item) => item.id !== resultFeatured?.id)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <div>
        {resultFeatured ? (
          <FeaturedNews news={resultFeatured} />
        ) : (
          <p>No any news posted yet. But stay tuned!</p>
        )}
      </div>
      <div>
        <NewsGrid news={newsResult} />
      </div>
    </>
  );
}
