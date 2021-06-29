import Gif from "../components/Gif";
import "./ListOfGif.css";
import useGif from "../hooks/useGif";
import Home from "./Home";

export default function ListOfGif({ params }) {
  const { keyword } = params;
  const gifs = useGif(keyword);
  console.log(gifs);

  return (
    <>
      <Home />
      <div className="masonry">
        {gifs.map((result) => (
          <Gif
            key={result.id}
            id={result.id}
            title={result.title}
            image={result.image}
          />
        ))}
      </div>
    </>
  );
}
