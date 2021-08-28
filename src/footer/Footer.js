import React from "react";
import "../css/footer.css";
export default function Footer(props) {

    function dates() {
        let d = new Date();
        return  d.getFullYear();
    }

    return (
        <div className = "footer mt-3"><div className = "date"> Copyright © sandani PRIM  2020 - {dates()} Все права защищены.</div></div>
    )
}
