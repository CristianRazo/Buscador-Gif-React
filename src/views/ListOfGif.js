import Gif from "../components/Gif";
import "./ListOfGif.css";
import useGif from "../hooks/useGif";

export default function ListOfGif({ params }) {
  const { keyword } = params;
  const gifs = useGif(keyword);
  console.log(gifs);
  
  return (
    <div className="list-gif">
      {gifs.map((result) => (
        <Gif
          key={result.id}
          id={result.id}
          title={result.title}
          image={result.image}
        />
      ))}
    </div>
  );
}
