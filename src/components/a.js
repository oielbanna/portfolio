import React from "react"; 

export default (props) => {

    var enter = (e) => {
        document.getElementsByClassName("follow")[0].classList.add("follow__active");
    }

    var leave = (e) => {
        document.getElementsByClassName("follow")[0].classList.remove("follow__active");
    }
    return <a {...props} onMouseEnter={enter} onMouseLeave={leave}>{props.children}</a>
}