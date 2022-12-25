import { useContext, useEffect, useState } from "react"
import { searchContext } from "../../App"
import Popup from "../Popup"
import SongTemplate from "../SongTemplate"
import "./results.css"


export default function Results() {
    const { input, videoUrl } = useContext(searchContext)
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    function tuggle() {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
                'X-RapidAPI-Key': 'e3ac5866b0msh2e100b947fe0dcdp190da0jsn0c520883eb43'
            }
        };

        fetch('https://simple-youtube-search.p.rapidapi.com/search?query=' + input + '&safesearch=false', options)
            .then(response => response.json())
            .then(response => {
                setData(response.results);
                console.log(response.results)
            })
            .catch(err => console.error(err));
    }, [input])


    return <div className="resContainer">
        <div>{data.map(song => <SongTemplate key={song.id} tuggle={tuggle} song={song} />)}</div>
        {isOpen && <Popup content={videoUrl} handleClose={tuggle} />}
    </div>
}
