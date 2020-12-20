import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import { JOURNEY } from "../constants";
import styled from "styled-components";
import { A } from './components';

const Connection = ({ direction }) => {
    const { scrollY } = useViewportScroll();
    const yRange = useTransform(scrollY, [window.innerHeight - 150, window.innerHeight + 100], [0.01, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    return (
        <svg viewBox="0 0 10 10">
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
        </svg>
    );
}

Connection.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired
};

export default () => {
    return (
        <section id="experience" className="experience">
            <h1 className="section-title">how i got here</h1>
            <div>
                {JOURNEY.map((journey, idx) => {
                    return (
                        <Row>
                            {idx % 2 !== 0 && <Connection direction={-1} />}
                            <div>
                                <Intro>{journey.category}</Intro>
                                <Title>{journey.title} <A>@{journey.entity}</A></Title>
                                <Subtitle>{journey.dateRange}</Subtitle>
                                <Details>
                                    {journey.description.map((item) => <li>{item}</li>)}
                                </Details>
                            </div>
                            {idx % 2 === 0 && <Connection direction={1} />}
                        </Row>
                    )
                })}
            </div>
        </section>
    )
}

const Row = styled.div({
    display: 'flex',
    flexDirection: 'row'
});

const Intro = styled.h1({
    fontFamily: "'Six Caps', sans-serif"
})

const Title = styled.h2({

})

const Subtitle = styled.h3({

})

const Details = styled.ul({

})