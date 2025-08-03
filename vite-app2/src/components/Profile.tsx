import Avatar from "./Avatar";
import type { Person } from "../types/Person";

type ProfileProps = {
  person: Person;
  size: number;
};

export default function Profile(props: ProfileProps) {
  return (
    <div className="card">
      <Avatar {...props}></Avatar>
    </div>
  );
}
