import React from "react";
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import { JOURNEY } from "../constants";
import styled from "styled-components";
import { A } from './components';

// const Connection = ({ direction, offset }) => {
//     const { scrollY } = useViewportScroll();
//     const yRange = useTransform(scrollY, [(window.innerHeight + offset) - 350, (window.innerHeight + offset)], [0.01, 1]);
//     const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

//     return (
//         <SVG viewBox="0 0 10 10">
//             <motion.path
//                 fill="none"
//                 strokeWidth="0.1"
//                 stroke="white"
//                 d="M 0 1.5 C 4.2 2.6 8.5 5.8 8.9 3.1 C 9.1 1.1 5.1 1.4 6.6 5.6 C 6.8 6.3 7.7 8.1 6 9.9"
//                 style={{
//                     pathLength,
//                     scaleX: direction // Reverse direction of line animation
//                 }}
//             />
//         </SVG>
//     );
// }

// Connection.propTypes = {
//     direction: PropTypes.oneOf([1, -1]).isRequired
// };

// const SVG = styled.svg({
//     // maxWidth: '100%',
//     // maxHeight: 300,
//     width: 100
// })

export default () => {
    const { scrollY } = useViewportScroll();
    const rotationRange = useTransform(scrollY, [window.innerHeight, (window.innerHeight * 1.5)], [90, -90]);
    const rotate = useSpring(rotationRange, { stiffness: 400, damping: 90 });

    return (
        <section style={{ height: '180vh'}} id="experience" className="experience">
            <Sticky style={{ height: '70vh' }}>
                <h1 className="section-title">how i got here</h1>
                <JourneyContainer
                    style={{ rotate }}
                >
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '-95%',
                        transform: 'translate(-50%, 50%) scale(-1)',
                        textOrientation: 'sideways-right',
                        writingMode: 'vertical-rl',

                    }}>
                        <Intro>{JOURNEY[0].category}</Intro>
                        <Title style={{ marginRight: 10}}>{JOURNEY[0].title} <A>@{JOURNEY[0].entity}</A></Title>
                        <Subtitle>{JOURNEY[0].dateRange}</Subtitle>
                        <Details>
                            {JOURNEY[0].description.map((item, i) => <li key={i}>{item}</li>)}
                        </Details>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        right: '-90%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <Intro>{JOURNEY[1].category}</Intro>
                        <Title>{JOURNEY[1].title} <A>@{JOURNEY[1].entity}</A></Title>
                        <Subtitle>{JOURNEY[1].dateRange}</Subtitle>
                        <Details>
                            {JOURNEY[1].description.map((item, i) => <li key={i}>{item}</li>)}
                        </Details>
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-110%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        transformOrigin: 'top left',
                        textOrientation: 'sideways-right',
                        writingMode: 'vertical-rl',
                    }}>
                        <Intro>{JOURNEY[2].category}</Intro>
                        <Title>{JOURNEY[2].title} <A>@{JOURNEY[2].entity}</A></Title>
                        <Subtitle>{JOURNEY[2].dateRange}</Subtitle>
                        <Details>
                            {JOURNEY[2].description.map((item, i) => <li key={i}>{item}</li>)}
                        </Details>
                    </div>
                </JourneyContainer>
            </Sticky>
        </section >
    )
}

const Sticky = styled.div`
    position: sticky; 
    top: 50px;
`

const JourneyContainer = styled(motion.div)`
    border: 1px rgba(198,135,66, 0.5) solid;
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
`

const Title = styled.h2`
    font-size: 1.2rem;
    margin: 0;
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