import React, { useEffect, useState } from "react";
import { get } from "../action";
export default function Menu(props) {
    const [menu, setMenu] = useState([{}]);

    useEffect(() => {
        get(setMenu,"menu.php");
    }, [])

    return (
        <div>
            {menu.map((m, i) => <div key = {m.names + i}>{m.names}</div>)}
        </div>)
}