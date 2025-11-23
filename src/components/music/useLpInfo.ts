import VisionLp from "../../assets/images/lp/png/vision_of_life.png"
import AlligatorLp from "../../assets/images/lp/png/sweet_alligator.png"
import DisappearLp from "../../assets/images/lp/png/disappear.png"
import ReturnLp from "../../assets/images/lp/png/return_to_the_sun.png"
import LuckySoulLp from "../../assets/images/lp/png/lucky_soul.png"
//import StjarnogaLp from "../../assets/images/lp/png/stjarnoga.png"
import { SheSaidHeLookedSweet } from "./lyrics/VisionOfLife"


const LpInfo = [
  /*
  { 
    slug: "stjarnoga", 
    src: StjarnogaLp, 
    name: "Stjärnöga", 
    date: { day: 23, month: "dec" },
    year: 2025, 
    alt: "Stjärnöga",
    release_type: "Single",
    tracks: [
      { title: "Stjärnöga", duration: "3:20" }
    ],
  },*/
  { 
    slug: "vision-of-life", 
    src: VisionLp, 
    name: "Vision of Life", 
    date: { day: 12, month: "sep" },
    year: 2025, 
    alt: "Vision of Life",
    release_type: "EP",
    tracks: [
      { title: "Vision of Life", duration: "3:46" },
      { title: "Angelwings", duration: "2:12" },
      { title: "She Said He Looked Sweet", duration: "3:15", lyrics: SheSaidHeLookedSweet },
      { title: "Tears of a Wizard", duration: "3:27" },
      { title: "Niagara Falls", duration: "3:20" },
    ],
  },
  { 
    slug: "sweet-alligator", 
    src: AlligatorLp, 
    name: "Sweet Alligator", 
    date: { day: 15, month: "nov" },
    year: 2023, 
    alt: "Sweet Alligator",
    release_type: "Single",
    tracks: [
      { title: "Sweet Alligator", duration: "3:12" },
      { title: "You Won't Walk Alone", duration: "2:45" },
      { title: "Am I sick?", duration: "2:50" }
    ],
  },
  { 
    slug: "disappear", 
    src: DisappearLp, 
    name: "Disappear", 
    alt: "Disappear",
    release_type: "Single",
    date: { day: 15, month: "jun" },
    year: 2022, 
    tracks: [
      { title: "Disappear", duration: "4:24" }
    ],

  },
  { 
    slug: "return-to-the-sun", 
    src: ReturnLp, 
    name: "Return to the sun", 
    date: { day: 9, month: "oct" },
    year: 2019, 
    alt: "Return to the Sun",
    release_type: "Single",
    tracks: [
      { title: "Return to the Sun", duration: "3:15" },
      { title: "Little Polly", duration: "2:25" },
      { title: "The World Around", duration: "3:06" },
      { title: "Castle of Tears", duration: "3:06" },
      { title: "Moving out", duration: "1:08" }
    ],

  },
  { 
    slug: "lucky-soul", 
    src: LuckySoulLp, 
    name: "Lucky Soul",
    date: { day: 8, month: "apr" },
    year: 2019, 
    alt: "Lucky Soul",
    release_type: "Album",
    tracks: [
      { title: "Lucky Soul", duration: "2:35" },
      { title: "Since the Day I came Back", duration: "2:37" },
      { title: "Jade", duration: "4:29" },
      { title: "Crown of Sun", duration: "2:30" },
      { title: "Lilla tjej", duration: "3:46" },
      { title: "Albin", duration: "3:27" },
      { title: "Hösten är här", duration: "3:28" }
    ],

  },


];

export const useLpInfo = () => LpInfo;