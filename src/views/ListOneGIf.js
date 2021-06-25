import { useState, useEffect } from "react";
import getGif from "../service/getGif";
import GifDetails from "../components/GifDetails";


export default function ListOneGif({ params }) {
  const [gif, setGIf] = useState([]);
  
  const { id } = params;
  
  useEffect(() => {
    getGif(id)
      .then((gif) => setGIf(gif))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(gif);

  return <GifDetails id={gif.id} title={gif.title} image={gif.image} source={gif.source}/>;
}
