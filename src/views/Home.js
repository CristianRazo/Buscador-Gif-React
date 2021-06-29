import { useState } from "react";
import { useLocation } from "wouter";
import "./home.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/gif/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="form-search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Search gif here.."
        ></input>
        <button type="Submit">Buscar</button>
      </form>
    </div>
  );
}
