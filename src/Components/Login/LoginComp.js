import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./loginComp.css"

export default function Login() {
    const [sign, setSign] = useState(false)
    const [data, setData] = useState({})
    const navigate = useNavigate()
    function bbb(e) {
        e.preventDefault()
        if (sign) {
            setData({
                email: e.target[0].value,
                userName: e.target[1].value,
                password: e.target[2].value
            })
            setData(JSON.stringify(data));
            fetch("http://localhost:3000/user/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            })
            .then(response => response.json())
            .then(tok =>console.log(tok))
        } else {
            setData({
                userName: e.target[0].value,
                password: e.target[1].value
            })
            setData(JSON.stringify(data));
            fetch("http://localhost:3000/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            })
            .then(response => response.json())
            .then(tok =>console.log(tok))
        }
    }

    return <div className="login">
        <form className="container-loginComp" onSubmit={(e) => bbb(e)}>
            <h2 className="top">enter to your account:</h2>
            <div className="inputs-con">
                {sign && <div> Email:<br />
                    <input
                        className="input"
                        name="email"
                        type="email"
                        placeholder=" email" /><br />
                </div>}
                User Name:<br />
                <input
                    className="input"
                    name="userName"
                    type="text"
                    placeholder=" user name" /><br />
                Password:<br />
                <input
                    className="input"
                    name="password"
                    type="password"
                    placeholder=" password" /><br />
                <button
                    id="btnSubmitLogin"
                    type="submit">{sign ? "sign in" : "log in"}
                </button>
                <button
                    id="btnSign"
                    type="button"
                    onClick={() => setSign(!sign)}>{sign ? "I have an account" : "I don't have an account"}
                </button>
                <button
                    id="btnSubmitLogin"
                    type="button"
                    onClick={()=> navigate("/entered")}
                    >enter woithout login
                </button>
            </div>
        </form>
    </div>
}