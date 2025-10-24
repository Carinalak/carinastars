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
    year: 2025, 
    tracks: ["Vision of Life", "Angelwings", "She Said He Looked Sweet", "Tears of a Wizard", "Niagara Falls"],
    alt: "Vision of Life"
  },
  { 
    slug: "sweet-alligator", 
    src: AlligatorLp, 
    name: "Sweet Alligator", 
    year: 2023, 
    tracks: ["Sweet Alligator", "You Wont't Walk Alone", "Am I sick?"],
    alt: "Sweet Alligator"
  },
  { 
    slug: "disappear", 
    src: DisappearLp, 
    name: "Disappear", 
    year: 2022, 
    tracks: ["Disappear"],
    alt: "Disappear"
  },
  { 
    slug: "return-to-the-sun", 
    src: ReturnLp, 
    name: "Return to the sun", 
    year: 2019, 
    tracks: ["Return to the Sun", "Little Polly", "The World Around", "Castle of Tears", "Moving out"],
    alt: "Return to the Sun"
  },
  { 
    slug: "lucky-soul", 
    src: LuckySoulLp, 
    name: "Lucky Soul", 
    year: 2019, 
    tracks: ["Lucky Soul", "Since the Day I came Back", "Jade", "Crown of Sun", "Lilla tjej", "Albin", "Hösten är här"],
    alt: "Lucky Soul"
  },


];

export const useLpInfo = () => LpInfo;