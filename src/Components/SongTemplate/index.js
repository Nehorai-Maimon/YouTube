import { useContext } from "react"
import { searchContext } from "../../App"
import "./songTemplate.css"

export default function SongTemplate({ song, tuggle }) {
    const { setVideoUrl} = useContext(searchContext)

    let numOfViews;

    function beutyRender(viewsD) {
        numOfViews = viewsD?.toString()
        switch (numOfViews?.length) {
            case (1 <= 3):
                numOfViews = numOfViews + " views"
                break
            case (4):
                let better = numOfViews.slice(0, 1) + "K views"
                numOfViews = better
                break
            case (5):
                let better2 = numOfViews.slice(0, 2) + "K views"
                numOfViews = better2
                break
            case (6):
                let better3 = numOfViews.slice(0, 3) + "K views"
                numOfViews = better3
                break
            case (7):
                let better4 = numOfViews.slice(0, 1) + "." + numOfViews.slice(1, 2) + "M views"
                numOfViews = better4
                break
            case (8):
                let better5 = numOfViews.slice(0, 2) + "M views"
                numOfViews = better5
                break
            case (9):
                let better6 = numOfViews.slice(0, 3) + "M views"
                numOfViews = better6
                break
            case (10):
                let better7 = numOfViews.slice(0, 1) + "B views"
                numOfViews = better7
                break
            case (11):
                let better8 = numOfViews.slice(0, 2) + "B views"
                numOfViews = better8
                break
            case (12):
                let better9 = numOfViews.slice(0, 2) + "B views"
                numOfViews = better9
                break
        }
    }
    beutyRender(song.views)

    return <div>
        <div className="song" onClick={() => { tuggle(); setVideoUrl(song.url) }}>
            <div className="melel">
                <div className="titleSong">{song.title}</div>
                <div className="subTitle">
                    <span>{song.uploadedAt} </span> <span>{numOfViews}</span>
                </div>
                <div className="ic-CN-container">
                    <div id="CNName" className="subTitle" >{song.channel.name}</div>
                    <div><img id="iconC" src={song.channel.icon}/></div>
                </div>
            </div>
            <div className="pic">
                <img className="image" src={song.thumbnail.url} alt="photo" />
            </div>
        </div>

    </div>
}