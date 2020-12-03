import React from "react";
import { motion } from 'framer-motion';

export default (props) => {

    var enter = function () {
        document.getElementsByClassName("follow")[0].classList.add("follow__active");
    }

    var leave = (e) => {
        document.getElementsByClassName("follow")[0].classList.remove("follow__active");
    }
    return <motion.a {...props} onMouseEnter={enter} onMouseLeave={leave}>{props.children}</motion.a>
}