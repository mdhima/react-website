import Music from "../../images/svg-4.svg";
import Games from "../../images/svg.svg";
import Places from "../../images/svg-3.svg";
import Videos from "../../images/svg-2.svg";

export const homeObjOne = {
    id: 'Music',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'MUSIC',
    headline: 'Music for imagination',
    description: 'I like listening to music to explore different aspects of life and to dive into another world. My playlist is made up of artists like Taylor Swift, Selena Gomez, Ed Sheeran and Alec Benjamin. I also enjoy listening to movie score music from movies like Narnia and The Pirates of the Carribean.',
    buttonLabel: 'My Favourite Album',
    imgStart: false,
    img: Music,
    alt: 'Listening to music',
    dark: true,
    primary: true,
    darkText: false,
    pathname: "https://www.youtube.com/watch?v=KsZ6tROaVOQ&list=PLmU8B4gZ41icKdheg4d2KZBgDR1wSWfbH"
}

export const homeObjTwo = {
    id: 'Videos',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Videos',
    headline: 'YouTube for Recreation',
    description: 'I enjoy my leisure time watching videos in 5 categories: Talent Show Competition, Pets, Talks, Animation and Gaming. My favourite content creators have been PopularMMOs, AGT, Tedx Talks, TheOdd1sOut, Jaiden Animations and Domics.',
    buttonLabel: 'My Favourite Video Series',
    imgStart: true,
    img: Videos,
    alt: 'Watching a Video',
    dark: false,
    primary: false,
    darkText: true,
    pathname: "https://www.youtube.com/watch?v=DFIxBlZ-4SA&list=PLbvdbHHnBmw0Hj3s1i1pItPAKbIvq0FMz"
}

export const homeObjThree = {
    id: 'Places',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Places',
    headline: 'Travelling for curiosity',
    description: 'I love to go outside for exercise and I delight exercising by exploring my city. I visit trails and all kinds of parks. My favourite places have been Ontario Place, Don Valley and Rosedale.',
    buttonLabel: 'My Favourite Place',
    imgStart: false,
    img: Places,
    alt: 'A Connected City',
    dark: true,
    primary: true,
    darkText: false,
    pathname: "https://www.youtube.com/watch?v=qaXMC5ROdZI"
}

export const homeObjFour = {
    id: 'Movies',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Movies',
    headline: 'Movies for a New Life',
    description: 'I love playing video games but even more than that I love to watch movies. I love to watch another character\'s life, learn their lessons and escape from my life. I am really fond of the movies from Marvel, Disney, Pixar and Ghibli Studio. ',
    buttonLabel: 'My Favourite Movie',
    imgStart: true,
    img: Games,
    alt: 'Looking at a screen that is alive',
    dark: false,
    primary: false,
    darkText: true,
    pathname: "https://www.youtube.com/watch?v=Or5vIX2UG7k"
}