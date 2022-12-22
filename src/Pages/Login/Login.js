import "./login.css"
import LoginComp from "../../Components/Login/LoginComp"
import image1 from "../../Assets/Photos/image1.jpg"
import image2 from "../../Assets/Photos/image2.jpg"
import image3 from "../../Assets/Photos/image3.jpg"
import image4 from "../../Assets/Photos/image4.jpg"
import image5 from "../../Assets/Photos/image5.jpg"
import image6 from "../../Assets/Photos/image6.jpg"
import image7 from "../../Assets/Photos/image7.jpg"
import image8 from "../../Assets/Photos/image8.jpg"
import image9 from "../../Assets/Photos/image9.jpg"
import image10 from "../../Assets/Photos/image10.jpg"
import image11 from "../../Assets/Photos/image11.jpg"
import image12 from "../../Assets/Photos/image12.jpg"
import image13 from "../../Assets/Photos/image13.jpg"
import { useEffect, useState } from "react"

export default function Login() {
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(image1)

    const Photos = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13
    ]
    
    useEffect(() => {
        const interval = setInterval(() => {
            setImage(Photos[index])
            setIndex(index + 1)
            if (index === Photos.length - 1) {
                setIndex(0)
            }
        }, 3000)
        return () => clearInterval(interval)
    }, [index])

    return <>
    <div className="h1con">
    <h1 className="melel">Hello and welcome to our platform.</h1>
    <h1 className="melel">Listen to the music that you like and get good time!</h1>
    </div>
    <LoginComp/>
    <img src={image} alt="" id="image" />
    </>
}