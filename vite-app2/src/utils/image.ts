import type { Person } from "../types/Person";

const baseUrl = "https://i.imgur.com/";

export function getImageUrl(person: Person): string {
  return baseUrl + person.imageId + person.imageSize + ".jpg";
}
