export default function getGif(id = "EatwJZRUIv41G") {
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=Xr8DIsihm4hgX88CIzjiYAMkJxK8wYJS`;
    return fetch(url,{method: "GET"})
            .then(res => res.json())
            .then(response => {
                
                const {data} = response;
                
                const gif = {
                    title: data.title,
                    image: data.images.original.url,
                    id: data.id,
                    source: data.source,
                }
                console.log(gif);
                return gif;
            })
            .catch(error => console.log(error)); 
}

