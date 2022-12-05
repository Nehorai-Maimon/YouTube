import ReactPlayer from "react-player"
import "./popup.css"

export default function Popup(props) {
    return  <div className="popup">
            <ReactPlayer url={props.content} onEnded={true} playing={true} controls={true} height={202} width={360} />
        </div>
   
}