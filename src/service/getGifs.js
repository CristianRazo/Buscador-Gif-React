export default function getGifs(keyword = "panda") {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Xr8DIsihm4hgX88CIzjiYAMkJxK8wYJS&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const gif = {
          title: image.title,
          id: image.id,
          image: image.images.fixed_width.url,
        };
        return gif;
      });

      return gifs;
    })
    .catch((error) => console.log(error));
}
