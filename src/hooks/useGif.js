import { useState, useEffect } from "react";
import getGifs from "../service/getGifs";

export default function useGif(keyword) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(keyword)
      .then((gifs) => {
        setGifs(gifs);
      })
      .catch((error) => console.log(error));
  }, [keyword]);
  return gifs;
}
