import React, { useState } from "react";
import "../css/pagination.css";
import { useSelector } from 'react-redux';
import { arrayCount } from '../action';
export default function Pagination(props) {
  const LIMIT = props.limit;
  let count = 10;

  return (
    <div className="pagination container justify-content-center mt-3"><nav aria-label="Page navigation">
      <div className="container">{props.countPagination + " из " + Math.floor(LIMIT)}</div>
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <span className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>

        {arrayCount(Math.floor(props.countPagination - count / 2), props.countPagination < count ?Math.floor(LIMIT) < count?Math.floor(LIMIT): count: (props.countPagination - 0 + count / 2)).map((x, i) => <li key = {i + "pagination"} className={"page"}><span onClick={(e) => { props.setCountPagination(e.target.innerHTML); }} className={props.countPagination - 1 === i ? "page-link e-aktive" : "page-link no-aktive"}  >{(i + 1)}</span></li>)}
        <li className="page-item">
          <span className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
      </ul>
    </nav></div>
  )
}
