import React, { useLayoutEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import { JOURNEY } from "../constants";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';
import { A } from './components';

const Experience = () => {
    const rotator = useRef(null);
    const { scrollY } = useViewportScroll();
    const rotationRange = useTransform(scrollY, [window.innerHeight, window.innerHeight * 1.1, window.innerHeight * 1.3, window.innerHeight * 1.4], [90, 0, 0, -90]);
    const rotate = useSpring(rotationRange, { stiffness: 400, damping: 90 });

    useLayoutEffect(() => {
        if (rotator.current && scrollY.get() > window.innerHeight * 1.5) {
            // reset animation if we load already past it
            rotator.current.style.transform = "rotate(-90deg)";
        }
    }, [scrollY])
    return (
        <section style={{ height: '180vh', paddingTop: 'unset' }} id="experience" className="experience">
            <Sticky style={{ height: '70vh' }}>
                <h1 className="section-title">&#47;&#47; how i got here</h1>
                <JourneyContainer
                    ref={rotator}
                    style={{ rotate }}
                >
                    <Education tabIndex="0">
                        <Intro>{JOURNEY[0].category}</Intro>
                        <Title style={{ margin: "0 5px" }}><span style={{padding: "2px 3px"}} className="colored-bg">{JOURNEY[0].title}</span> <A>@{JOURNEY[0].entity}</A></Title>
                        <Subtitle>{JOURNEY[0].dateRange}</Subtitle>
                        <Details>
                            {JOURNEY[0].description.map((item, i) => <li key={i} style={{ marginLeft: 5 }} className="details-item">{item}</li>)}
                        </Details>
                    </Education>
                    <Internships tabIndex="0">
                        <Intro>{JOURNEY[1].category}</Intro>
                        <Title style={{ margin: "5px 0"}}><span style={{padding: "2px 3px"}} className="colored-bg">{JOURNEY[1].title}</span> <A>@{JOURNEY[1].entity}</A></Title>
                        <Subtitle>{JOURNEY[1].dateRange}</Subtitle>
                        <Details>
                            {JOURNEY[1].description.map((item, i) => <li key={i} style={{ marginBottom: 5 }} className="details-item">{item}</li>)}
                        </Details>
                    </Internships>
                    <Work tabIndex="0">
                        <Intro>{JOURNEY[2].category}</Intro>
                        <Title style={{ margin: "0 5px" }}><span style={{padding: "2px 3px"}} className="colored-bg">{JOURNEY[2].title}</span> <A>@{JOURNEY[2].entity}</A></Title>
                        <Subtitle>{JOURNEY[2].dateRange}</Subtitle>
                        <Details>
                            {JOURNEY[2].description.map((item, i) => <li key={i} style={{ marginLeft: 5 }} className="details-item">{item}</li>)}
                        </Details>
                    </Work>
                </JourneyContainer>
            </Sticky>
        </section>
    )
}

export default Experience; 

const Education = styled.div`
    position: absolute;
    text-orientation: sideways-right;
    writing-mode: vertical-rl;
    left: 50%;
    

    ${breakpoint('desktop')`
        max-height: 365px;  
        top: -64%;
        transform: translate(-50%, 0%) scale(-1);

    `}

    ${breakpoint('mobile')`
        max-height: 75vw;
        top: -85%;
        transform: translate(-50%, 50%) scale(-1);
    `}
`

const Internships = styled.div`
    position: absolute;
    top: 50%;

    ${breakpoint('desktop')`
        max-width: 450px;  
        right: -80%;
        transform: translate(0%, -50%);
    `}

    ${breakpoint('mobile')`
        max-width: 75vw;
        right: -84%;
        transform: translate(-50%, -50%);
    `}
`
const Work = styled.div`
    position: absolute;
    text-orientation: sideways-right;
    writing-mode: vertical-rl;
    left: 50%;

    ${breakpoint('desktop')`
        max-height: 450px; 
        bottom: -80%;
        transform: translate(-50%, 0%);
    `}

    ${breakpoint('mobile')`
        max-height: 70vw;
        bottom: -54%;
        transform: translate(-50%, 0%);
    `}
`

const Sticky = styled.div`
    position: sticky; 
    top: 50px;
`

const JourneyContainer = styled(motion.div)`
    border: 2px var(--bg-secondary-color) solid;
    position: absolute;
    border-radius: 50%;
    width: 70vh;
    height: 70vh;
    transform-origin: 50% 50%;
    top: 50px;
    right: 90%;
`

const Intro = styled.h1`
    font-family: 'Six Caps', sans-serif;
    font-size: clamp(4rem, 6rem, 7rem);
    line-height: clamp(4rem, 6rem, 7rem);
    margin: 0;
    color: var(--accent-light-color);
    opacity: 0.8;
`

const Title = styled.h2`
    font-size: 1.2rem;
    line-height: 2.1rem;
    margin: 0;
    color: var(--text-secondary-color);

    .colored-bg {
        background: var(--accent-dark-color);
        color: var(--bg-secondary-color);
    }
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
    padding-inline-start: 30px;
    
    .details-item {
        &::marker {
            color: #c68742;
        }
    }
`