import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    <HeroP>
                        This is my React Website. Hit on the button to view my other projects.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to={{pathname: 'https://github.com/mdhima'}} target="_blank" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                            My Github {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
