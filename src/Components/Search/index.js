import { useContext, useEffect, useState } from "react"
import { searchContext } from "../../App"
import "./search.css"
import { BiSearchAlt2 } from 'react-icons/bi';


export default function Search() {
    const { setInput } = useContext(searchContext)
    const [search, setSearch] = useState()

    function test(e) {
        if (e.key === 'Enter') {
            setInput(search)
        }
    }

    return <div className="search">
        { }
        <input
            id="inputSearch"
            type="search"
            placeholder="search somthing"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => test(e)}>
        </input>
        <div className="btnSearch">
            <div id="searchIcon" onClick={() => setInput(search)}><BiSearchAlt2 /></div>
        </div>
    </div>
}
