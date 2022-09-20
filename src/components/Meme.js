import { useState, useEffect } from "react";


function Meme() {

    // save the array of urls in state
    let [imageArray, setImageArray] = useState([])

    // get a new meme image and save the object in state
    let [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg"
    });

    // API call to get the images: make only once
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setImageArray(data.data.memes))
    }, [])


    // listener for button click
    function getMemeImage() {
        setMeme(oldMeme => ({
            ...oldMeme,
            url: imageArray[Math.floor(Math.random() * imageArray.length)].url
        }))
    }
    // listener for text change
    function formChange(event) {
        const { name, value } = event.target
        setMeme(oldMeme => ({
            ...oldMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form-row">
                <input
                    type="text"
                    placeholder="top text"
                    name="topText"
                    value={meme.topText}
                    onChange={formChange}
                >
                </input>
                <input
                    type="text"
                    placeholder="bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={formChange}
                >
                </input>
            </div>
            <button id="submit" onClick={getMemeImage}>Get a new meme image</button>

            <div className="meme">
                <img src={meme.url} alt="meme"></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}


export default Meme;