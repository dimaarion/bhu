import React, { useState } from "react";
import "../css/pagination.css";
import {useSelector } from 'react-redux';
import {arrayCount, replaceClass} from '../action';
export default function Pagination(props) {
    const LIMIT = useSelector((store) => store.getLimit);
    const[active, setActive] = useState("no-aktive");
  
    return (
        <div className = "pagination container justify-content-center mt-3"><nav aria-label="Page navigation">
  { props.countPagination + "/" + active}
  <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <span className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </span>
              </li>
            
            {arrayCount(LIMIT).map((x,i)=><li className={props.countPagination - 1 === i?"page e-aktive":"page no-aktive"}><span onClick = {(e)=>{props.setCountPagination(e.target.innerHTML);}}  className="page-link" >{(i + 1)}</span></li>)}
            <li className="page-item">
              <span className="page-link"  aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
          </ul>
        </nav></div>
    )
}
