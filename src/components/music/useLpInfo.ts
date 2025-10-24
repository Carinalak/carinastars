import VisionLp from "../../assets/images/lp/Vision_of_life.png"
import AlligatorLp from "../../assets/images/lp/alligator.jpg"
import DisappearLp from "../../assets/images/lp/Disappear.jpg"
import ReturnLp from "../../assets/images/lp/carinastars.jpg"
import LuckySoulLp from "../../assets/images/lp/LP-Carina1.jpg"


const LpInfo = [


  { 
    slug: "vision-of-life", 
    src: VisionLp, 
    name: "Vision of Life", 
    date: "12 september",
    year: 2025, 
    alt: "Vision of Life",
    tracks: [
      { title: "Vision of Life", duration: "3:46" },
      { title: "Angelwings", duration: "2:12" },
      { title: "She Said He Looked Sweet", duration: "3:15" },
      { title: "Tears of a Wizard", duration: "3:27" },
      { title: "Niagara Falls", duration: "3:20" },
    ],
  },
  { 
    slug: "sweet-alligator", 
    src: AlligatorLp, 
    name: "Sweet Alligator", 
    date: "15 november",
    year: 2023, 
    alt: "Sweet Alligator",
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
    date: "15 juni",
    year: 2022, 
    tracks: [
      { title: "Disappear", duration: "4:24" }
    ],

  },
  { 
    slug: "return-to-the-sun", 
    src: ReturnLp, 
    name: "Return to the sun", 
    date: "9 oktober",
    year: 2019, 
    alt: "Return to the Sun",
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
    date: "8 april", 
    year: 2019, 
    alt: "Lucky Soul",
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