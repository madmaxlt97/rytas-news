export type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: "Naujienos" | "Gandai" | "Rungtynės" | "Komanda" | "Analizė";
  description: string;
  date: string;
  substackUrl?: string;
  featured: boolean;
};
