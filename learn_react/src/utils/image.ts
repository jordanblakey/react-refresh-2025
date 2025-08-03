import type { Person } from "../types/Person";

const baseUrl = "https://i.imgur.com/";

export function getImageUrl(person: Person): string {
  const imageSize = person.imageSize ? person.imageSize : "s";
  return baseUrl + person.imageId + imageSize + ".jpg";
}
