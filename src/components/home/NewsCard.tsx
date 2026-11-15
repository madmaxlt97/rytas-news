import Image from "next/image";
import type { News } from "@/types/news";

type NewsCardProps = {
  item: News;
};

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#1C1C1F] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/20">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          quality={75}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
          <span className="rounded-md bg-[#D62835] px-2.5 py-1 text-white">
            {item.category}
          </span>

          <span className="text-zinc-500">{item.date}</span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#E54853]">
          {item.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {item.description}
        </p>

        {item.substackUrl && (
          <a
            href={item.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#D62835] transition-colors hover:text-[#E54853]"
          >
            Skaityti daugiau
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}
