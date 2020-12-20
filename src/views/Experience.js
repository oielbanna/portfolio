import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import { JOURNEY } from "../constants";
import styled from "styled-components";
import { A } from './components';

const Connection = ({ direction, offset }) => {
    const { scrollY } = useViewportScroll();
    const yRange = useTransform(scrollY, [(window.innerHeight + offset) - 350, (window.innerHeight + offset)], [0.01, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    return (
        <SVG viewBox="0 0 10 10">
            <motion.path
                fill="none"
                strokeWidth="0.1"
                stroke="white"
                d="M 0 1.5 C 4.2 2.6 8.5 5.8 8.9 3.1 C 9.1 1.1 5.1 1.4 6.6 5.6 C 6.8 6.3 7.7 8.1 6 9.9"
                style={{
                    pathLength,
                    scaleX: direction // Reverse direction of line animation
                }}
            />
        </SVG>
    );
}

Connection.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired
};

const SVG = styled.svg({
    // maxWidth: '100%',
    // maxHeight: 300,
    width: 100
})

export default () => {
    return (
        <section style={{ height: '200vh' }} id="experience" className="experience">
            <div style={{ position: 'sticky', top: 50, height: 240 }}>
                <h1 className="section-title">how i got here</h1>
                {JOURNEY.map((journey, idx) => {
                    return (
                        <div style={{ position: 'absolute' }}>
                            <Intro>{journey.category}</Intro>
                            <Title>{journey.title} <A>@{journey.entity}</A></Title>
                            <Subtitle>{journey.dateRange}</Subtitle>
                            <Details>
                                {journey.description.map((item, i) => <li key={i}>{item}</li>)}
                            </Details>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

const Row = styled.div(props => ({
    display: 'flex',
    justifyContent: 'start',
    flexDirection: props.reverse ? 'row-reverse' : 'row',
    maxWidth: '80%',
    background: 'lightgrey'
}))

const Intro = styled.h1`
    font-family: 'Six Caps', sans-serif;
    font-size: clamp(4rem, 6rem, 7rem);
    line-height: clamp(4rem, 6rem, 7rem);
    margin: 0;
`

const Title = styled.h2`
    margin: 10px 0 0 0;
    font-size: 1.2rem;
`

const Subtitle = styled.h3`
    font-size: 0.9rem;
    font-variant: small-caps;
    font-weight: 400;
    letter-spacing: 0.05em;
    margin: 3px 0;
    padding: 0;
    font-family: Roboto;
`

const Details = styled.ul`
    list-style: none;
    margin: 0px;

    li::before {
        content: "\2022";
        color: #c68742;
        font-weight: bold; 
        display: inline-block;
        width: 1em;
        margin-left: -2em; 
    }
`