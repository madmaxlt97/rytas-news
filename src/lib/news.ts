import type { News } from "@/types/news";

export default function findLatest(items: News[]): News | undefined {
  let newest = items[0];

  if (items.length === 0) {
    return undefined;
  } else {
    for (let i = 1; i < items.length; i++) {
      if (items[i].date > newest.date) {
        newest = items[i];
      }
    }
    return newest;
  }
}
