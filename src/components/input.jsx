/* eslint-disable no-unused-vars */
//import memesData from "../memeData";
import React from "react";

export default function Takeinput() {
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  function addImage() {
    const randomNumber = Math.trunc(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));

    //console.log(generateUrl);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeText) => {
      return {
        ...prevMemeText,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="input-container">
        <div className="input-boxes">
          <input
            type="text"
            className="upper--text"
            onChange={handleChange}
            placeholder="Add Text"
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            className="lower--text"
            onChange={handleChange}
            placeholder="Add Text"
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button className="generate--meme" onClick={addImage}>
          Generate a new meme image
        </button>
        <div className="img--class">
          <img className="meme--img" src={meme.randomImg} />
          <h2 className="meme--topText top">{meme.topText}</h2>
          <h2 className="meme--bottomText bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
}
/*
  

      const ThingsArray = ["thing 1", "thing 2"];

  const mapThings = ThingsArray.map(function (thing) {
    return <p key={thing}> {thing}</p>;


    /*
  
  }
  });

  
  function addItem() {
    const newThingsArray = `Things ${ThingsArray.length + 1}`;
    ThingsArray.push(newThingsArray);
    console.log(ThingsArray);
  }
      */
