import React from "react";
import { motion } from 'framer-motion';

const component = (props, ref) => {

    var enter = function () {
        document.getElementsByClassName("follow")[0].classList.add("follow__active");
    }

    var leave = (e) => {
        document.getElementsByClassName("follow")[0].classList.remove("follow__active");
    }
    return <motion.a ref={ref} {...props} onMouseEnter={enter} onMouseLeave={leave}>{props.children}</motion.a>
}

export default React.forwardRef(component);
