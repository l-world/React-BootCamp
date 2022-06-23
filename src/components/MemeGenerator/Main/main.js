import React from "react";
import "./main.css";

export default function Main() {

    const [meme, setMeme] = React.useState({
        topText: "Awesome Work",
        buttomText: "Good Luck!",
        randomImage: "https://i.imgflip.com/4xgqu.jpg"
    });

    const [allMeme,setAllMemes] = React.useState([]);

    React.useEffect(() => {
        console.log('effect ran')
        // fetch("https://api.imgflip.com/get_memes")
        //     .then( res => res.json())
        //     .then( data => setAllMemes(data.data.memes))
        async function getMemeData(){
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes)
        }
        getMemeData();
    },[])

    function getRandomImgUrl() {
        const randomNumber = Math.floor(Math.random() * allMeme.length);
        const url = allMeme[randomNumber].url;
        setMeme((preMeme) => ({
            ...preMeme,
            randomImage: url,
        }));
    }

    function handleChange(e) {
        const {name,value} = e.target;
        setMeme( prevMeme => {
            return {
                ...prevMeme,
                [name]:value
            }
        } )

    }

    return (
        <main className="main">
            <div className="form">
                <input
                    type="text"
                    value={meme.topText}
                    name="topText"
                    className="form--input"
                    placeholder="Top text"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={meme.buttomText}
                    name="buttomText"
                    className="form--input"
                    placeholder="Buttom text"
                    onChange={handleChange}
                />
                <button className="form--btn" onClick={getRandomImgUrl}>
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="main--img">
                <img src={meme.randomImage} alt="meme-imgs" />
                <h1 className="top text">{meme.topText}</h1>
                <h1 className="bottom text">{meme.buttomText}</h1>
            </div>
        </main>
    );
}
