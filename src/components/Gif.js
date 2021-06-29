import "./gif.css";
import { Link } from "wouter";

export default function Gif({ id, title, image }) {
  return (
    <Link to={`/gif/details/${id}`}>
      <div className="gif" key={id}>
        <img loading="lazy" src={image} alt={`gifs de ${title}`} />
      </div>
    </Link>
  );
}
