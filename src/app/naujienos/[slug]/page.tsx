import Image from "next/image";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { news } from "@/data/news";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  const newsTopic = news.find((item) => item.slug === slug);
  if (!newsTopic) {
    notFound();
  }

  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <Container>
        <article className="mx-auto w-full max-w-5xl">
          <div className="mx-auto w-full max-w-4xl p-4 sm:p-5">
            <Link
              href="/naujienos"
              className="group inline-flex items-center gap-2 text-base font-semibold text-[#D62835] transition-colors hover:text-[#E54853] py-2"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Grįžti į visas naujienas
            </Link>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
              <span className="rounded-md bg-[#D62835] px-2.5 py-1 text-white">
                {newsTopic.category}
              </span>

              <span className="text-zinc-500">{newsTopic.date}</span>
            </div>

            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl py-6">
              {newsTopic.title}
            </h1>

            <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl">
              <Image
                src={newsTopic.image}
                alt={newsTopic.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
              {newsTopic.description}
            </p>

            {newsTopic.substackUrl && (
              <a
                href={newsTopic.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 text-base font-semibold text-[#D62835] transition-colors hover:text-[#E54853]"
              >
                Skaityti daugiau
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </article>
      </Container>
    </section>
  );
}
