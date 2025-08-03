export default function Avatar() {
  const avatar: string = "https://i.imgur.com/7vQD0fPs.jpg";
  const description: string = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}
