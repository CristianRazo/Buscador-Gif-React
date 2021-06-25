import "./gif.css";

export default function GifDetails({id,title,image,source}) {
    return <div className="gif" key={id}>
    <h4>{id}</h4>
    <h4>{title}</h4>
    <img src={image} alt={`gifs de ${title}`} />
    <h5>{source}</h5>
  </div>
}
