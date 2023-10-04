import { useState } from "react";
import { data } from "./data";

export default function Random() {
  const [counter, setCounter] = useState(0);
  const [showHide, setShowHide] = useState(false);

  const displayed = {
    name: data[counter].name,
    artist: data[counter].artist,
    description: data[counter].description,
    url: data[counter].url,
    alt: data[counter].alt,
  };

  const hasNext = counter < data.length - 1;

  function nextSculpture() {
    if (hasNext) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      setCounter(0);
    }
  }

  function showHideDetails() {
    setShowHide(!showHide);
  }

  return (
    <div>
      <span>({counter + 1}of 12)</span>
      <h2>{displayed.name}</h2>
      <div>
        <h2>{displayed.artist}</h2>
        {showHide ? <p>{displayed.description}</p> : ""}
        <button onClick={showHideDetails}>
          {showHide ? "Hide" : "Show"} details
        </button>
      </div>
      <img src={displayed.url} alt={displayed.alt}></img>
      <div>
        <button onClick={nextSculpture}>Next</button>
      </div>
    </div>
  );
}
