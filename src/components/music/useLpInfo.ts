import VisionLp from "../../assets/images/lp/png/vision_of_life.png"
import AlligatorLp from "../../assets/images/lp/png/sweet_alligator.png"
import DisappearLp from "../../assets/images/lp/png/disappear.png"
import ReturnLp from "../../assets/images/lp/png/return_to_the_sun.png"
import LuckySoulLp from "../../assets/images/lp/png/lucky_soul.png"
import StjarnogaLp from "../../assets/images/lp/png/stjarnoga.png"
import GirlLp from "../../assets/images/lp/png/Girl.png"
import WeLingerOnLp from "../../assets/images/lp/png/we_linger_on.png"
import IThinkIllGoMadLp from "../../assets/images/lp/png/I_think_Ill_go_mad.png"
import { SheSaidHeLookedSweet } from "./lyrics/VisionOfLife"
import { VisionOfLifeLyrics } from "./lyrics/VisionOfLife"
import { IThinkIllGoMadLyrics, WeLingerOnLyrics } from "./lyrics/Singles"

export type Track = {
  title: string;
  duration: string;
  spotifyUrl: string;
  lyrics?: string;
  author?: string;
};

export type Lp = {
  slug: string;
  src: string;
  name: string;
  date: { day: number; month: string };
  year: number;
  alt: string;
  release_type: string;
  tracks: Track[];
};



const LpInfo: Lp[] = [
  { 
    slug: "I-think-I'll-go-mad", 
    src: IThinkIllGoMadLp, 
    name: "I Think I'll Go Mad", 
    date: { day: 23, month: "feb" },
    year: 2026, 
    alt: "I Think i'll Go Mad",
    release_type: "single",
    tracks: [
      { title: "I Think I'll Go Mad", duration: "03:05", lyrics: IThinkIllGoMadLyrics, spotifyUrl:"https://open.spotify.com/track/0DNdGzUfWpSDoMw5RFV8nf?si=74bfbe1c30ab48fd" },
    ],
  },
      { 
    slug: "we-linger-on", 
    src: WeLingerOnLp, 
    name: "We Linger On", 
    date: { day: 11, month: "feb" },
    year: 2026, 
    alt: "We Linger On",
    release_type: "single",
    tracks: [
      { title: "We Linger On", duration: "03:43", lyrics: WeLingerOnLyrics, spotifyUrl:"https://open.spotify.com/track/1oCNNaxxYalZkEIZfYLZ1C?si=f5d0d564eea24a5d" },
    ],
  },
    { 
    slug: "girl", 
    src: GirlLp, 
    name: "Girl", 
    date: { day: 22, month: "jan" },
    year: 2026, 
    alt: "Girl",
    release_type: "single",
    tracks: [
      { title: "Girl", duration: "01:50", spotifyUrl:"https://open.spotify.com/track/1nmSFmUUy0qfRsXwObBaJG?si=1739b6c1abe94f4b" },
    ],
  },
  { 
    slug: "stjarnoga", 
    src: StjarnogaLp, 
    name: "Stjärnöga", 
    date: { day: 23, month: "dec" },
    year: 2025, 
    alt: "Stjärnöga",
    release_type: "single",
    tracks: [
      { title: "Stjärnöga", duration: "3:20", spotifyUrl:"https://open.spotify.com/track/3iaN9qbGOVGxo5y1LFD0lq?si=ce30163f83ff4d5d" },
    ],
  },

  { 
    slug: "vision-of-life", 
    src: VisionLp, 
    name: "Vision of Life", 
    date: { day: 12, month: "sep" },
    year: 2025, 
    alt: "Vision of Life",
    release_type: "ep",
    tracks: [
      { title: "Vision of Life", duration: "3:46", spotifyUrl: "https://open.spotify.com/track/0GsGdnpvJJtZgPrSe5tNlZ?si=2c979029817f43eb", lyrics: VisionOfLifeLyrics, author: "Carina Lakosil, 9 april 1999" },
      { title: "Angelwings", duration: "2:12", spotifyUrl: "https://open.spotify.com/track/7iG8mTFH9yK5sDWlRwtl8X?si=7c3fb15fcea84426", author:"Carina Lakosil 4 juli 1993" },
      { title: "She Said He Looked Sweet", duration: "3:15", lyrics: SheSaidHeLookedSweet, spotifyUrl: "https://open.spotify.com/track/0iocGtgSIFUkbKVQBZfI0d?si=59f49a83f00c4543", author: "Carina Lakosil, 9 april 1999" },
      { title: "Tears of a Wizard", duration: "3:27", spotifyUrl: "https://open.spotify.com/track/15Loda7Nsj5HId1e6xWfZt?si=dfbbe9dbbb144c76", author: "Carina Lakosil, 9 april 1999" },
      { title: "Niagara Falls", duration: "3:20", spotifyUrl: "https://open.spotify.com/track/2rKdwPl9WhHeYKNIsXHers?si=3b5b376b62ad49be", author: "Carina Lakosil, 16 feb 1995" },
    ],
  },
  { 
    slug: "sweet-alligator", 
    src: AlligatorLp, 
    name: "Sweet Alligator", 
    date: { day: 15, month: "nov" },
    year: 2023, 
    alt: "Sweet Alligator",
    release_type: "single",
    tracks: [
      { title: "Sweet Alligator", duration: "3:12", spotifyUrl: "https://open.spotify.com/track/7EdTuK94PZzy240uOB1fVg?si=90a1c0f2c2724698"  },
      { title: "You Won't Walk Alone", duration: "2:45", spotifyUrl: "https://open.spotify.com/track/4To4EcAOtKFVTHSu2hwCy2?si=2fd46c6aef9a479f"  },
      { title: "Am I sick?", duration: "2:50", spotifyUrl: "https://open.spotify.com/track/6Eei5gtPD08HwgxHtaYQJv?si=d81931132ba64c88"  }
    ],
  },
  { 
    slug: "disappear", 
    src: DisappearLp, 
    name: "Disappear", 
    alt: "Disappear",
    release_type: "single",
    date: { day: 15, month: "jun" },
    year: 2022, 
    tracks: [
      { title: "Disappear", duration: "4:24", spotifyUrl: "https://open.spotify.com/track/0QOV3ozrXMk7ZtPqRxfuxM?si=9d1ea7040bf74ecc"  }
    ],

  },
  { 
    slug: "return-to-the-sun", 
    src: ReturnLp, 
    name: "Return to the sun", 
    date: { day: 9, month: "oct" },
    year: 2019, 
    alt: "Return to the Sun",
    release_type: "single",
    tracks: [
      { title: "Return to the Sun", duration: "3:15", spotifyUrl: "https://open.spotify.com/track/3AavflZ49iMovQIO2cOQP9?si=c7c389a7d28b4f9c"  },
      { title: "Little Polly", duration: "2:25", spotifyUrl: "https://open.spotify.com/track/73Pi7ZiNRxaXUUZV9YMDLh?si=949bc6c304b24d8a"  },
      { title: "The World Around", duration: "3:06", spotifyUrl: "https://open.spotify.com/track/765WPQignKdCLUQoWgeqeY?si=107c847276de41e0"  },
      { title: "Castle of Tears", duration: "3:06", spotifyUrl: "https://open.spotify.com/track/63aD3A7ybgKOzzhrdk4ZXl?si=935da11fc9e34c52"  },
      { title: "Moving out", duration: "1:08", spotifyUrl: "https://open.spotify.com/track/2Mg94RVR8HdHE44y6CdO7k?si=fd9ab9f7cfd04d73"  }
    ],

  },
  { 
    slug: "lucky-soul", 
    src: LuckySoulLp, 
    name: "Lucky Soul",
    date: { day: 8, month: "apr" },
    year: 2019, 
    alt: "Lucky Soul",
    release_type: "album",
    tracks: [
      { title: "Lucky Soul", duration: "2:35", spotifyUrl: "https://open.spotify.com/track/6X6Z3FebwwEDtFUjLxoWVo?si=894a6953a9354f58"  },
      { title: "Since the Day I came Back", duration: "2:37", spotifyUrl: "https://open.spotify.com/track/4SlzPeoG9nVHUlytUnvfGd?si=f7d745b3c009470a"  },
      { title: "Jade", duration: "4:29", spotifyUrl: "https://open.spotify.com/track/0TIDYbP82cSSJmuGzPPN4d?si=593eba27eb174a38"  },
      { title: "Crown of Sun", duration: "2:30", spotifyUrl: "https://open.spotify.com/track/2d1WRo0uNvg2uLJMl0jLCY?si=58cebfbb4ef44fb1"  },
      { title: "Lilla tjej", duration: "3:46", spotifyUrl: "https://open.spotify.com/track/3OvKUikQ9hbrKtm4HKJh9h?si=578aceeacb594e73"  },
      { title: "Albin", duration: "3:27", spotifyUrl: "https://open.spotify.com/track/35cAWpubfcxDrrRPhz3qAv?si=f32f2c9230cf4934"  },
      { title: "Hösten är här", duration: "3:28", spotifyUrl: "https://open.spotify.com/track/4Gv0q5LLLznmzi6yLrtfcp?si=14fec8e474224d37" }
    ]
  },


];

export const useLpInfo = () => LpInfo;