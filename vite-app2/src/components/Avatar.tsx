import type { JSX } from "react";

import { getImageUrl } from "../utils/image";
import type { Person } from "../types/Person";

interface AvatarProps {
  person: Person;
  size: number;
}

// function Avatar(props: AvatarProps): JSX.Element {
//   let person = props.person;
//   let size = props.size;
// ...

export default function Avatar({
  person,
  size = 100,
}: AvatarProps): JSX.Element {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
