import Image from "next/image";
import type { News } from "@/types/news";
import Container from "../ui/Container";

type FeaturedNewsProps = {
  news: News;
};

export default function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <section id="featured-news" className="py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-7 overflow-hidden rounded-2xl border border-white/10 bg-[#1C1C1F] p-3 sm:p-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-6">
          {/* Image */}
          <div className="group relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src={news.image}
              alt={news.title}
              fill
              priority
              quality={75}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-2 py-3 sm:px-3 lg:px-5 lg:py-8">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
              <span className="rounded-md bg-[#D62835] px-3 py-1.5 text-white">
                {news.category}
              </span>
              <span className="text-zinc-400">{news.date}</span>
            </div>

            <h1 className="mb-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
              {news.title}
            </h1>

            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              {news.description}
            </p>

            {news.substackUrl && (
              <a
                href={news.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-[#D62835] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B8202C]"
              >
                Skaityti daugiau
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
