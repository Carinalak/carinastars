import VisionLp from "../../assets/images/lp/png/vision_of_life.png"
import AlligatorLp from "../../assets/images/lp/png/sweet_alligator.png"
import DisappearLp from "../../assets/images/lp/png/disappear.png"
import ReturnLp from "../../assets/images/lp/png/return_to_the_sun.png"
import LuckySoulLp from "../../assets/images/lp/png/lucky_soul.png"
import StjarnogaLp from "../../assets/images/lp/png/stjarnoga.png"
import GirlLp from "../../assets/images/lp/png/Girl.png"
import WeLingerOnLp from "../../assets/images/lp/png/we_linger_on.png"
import IThinkIllGoMadLp from "../../assets/images/lp/png/I_think_Ill_go_mad.png"
import LollipopTeensLp from "../../assets/images/lp/png/lollipop_teens.png"
import StandingAllAloneLp from "../../assets/images/lp/png/Standing_All_Alone.png"
import { AngelwingsLyrics, NiagaraFallsLyrics, SheSaidHeLookedSweetLyrics, TearsOfAWizardLyrics } from "./lyrics/VisionOfLife"
import { VisionOfLifeLyrics } from "./lyrics/VisionOfLife"
import { GirlLyrics, IThinkIllGoMadLyrics, LollipopTeensLyrics, StjarnogaLyrics, WeLingerOnLyrics } from "./lyrics/Singles"
import { AmISickLyrics, GoingHomeLyrics, ImChangingLyrics, StandingAllAloneLyrics, SweetAlligatorLyrics, WalkTheStreetsLyrics, YouWontWalkAloneLyrics } from "./lyrics/LpLyrics"

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
  year: number;
  releaseDate: string;
  alt: string;
  release_type: string;
  spotifyAlbumUrl?: string;
  lyrics?: string;
  tracks: Track[];
};



const LpInfo: Lp[] = [
    { 
    slug: "Standing-All-Alone", 
    src: StandingAllAloneLp, 
    name: "Standing All Alone", 
    year: 2026, 
    releaseDate: "2026-05-29",
    alt: "Standing All Alone",
    release_type: "lp",
    spotifyAlbumUrl:"https://open.spotify.com/album/7idoGVxUrt3XuaYmwX2baT?si=Aiv841NhQ5OOp4teCkVFSQ",
    lyrics: StandingAllAloneLyrics,
        tracks: [
      { title: "Standing All Alone", duration: "02:59", lyrics: StandingAllAloneLyrics, spotifyUrl:"https://open.spotify.com/track/7Msxp2bFeNoohN0TsI8vuM?si=cd8e2c96bf2a424a", author: "Carina Lakosil, 1988"},
      { title: "Going Home", duration: "03:01", lyrics: GoingHomeLyrics, spotifyUrl: "https://open.spotify.com/track/792WTGG8fSS1YN9hIXZPVc?si=fba0f250cb9f4066", author: "Carina Lakosil, 20 jan 1995"},
      { title: "Am I sick?", duration: "2:50", lyrics: AmISickLyrics, spotifyUrl: "https://open.spotify.com/track/6HPuvKVJYp3IaMmYNrVpxC?si=c183e19c19cf4071"  },
      { title: "You Won't Walk Alone", duration: "2:45", lyrics: YouWontWalkAloneLyrics, spotifyUrl: "https://open.spotify.com/track/3BmyfbKRJieIVDgb4KwhOy?si=482aa4bfbc714958", author: "Carina Lakosil, 1997 & 2020"  },
      { title: "Walk the Streets", duration: "02:45", lyrics: WalkTheStreetsLyrics, spotifyUrl: "https://open.spotify.com/track/30QPfQZtnLWGzR6P5TPMzN?si=2db509d373f842fd", author: "Carina Lakosil, 1 maj 1994" },
      { title: "Sweet Alligator", duration: "3:12", lyrics: SweetAlligatorLyrics, spotifyUrl: "https://open.spotify.com/track/5FJFY31A9XA9G9hSjCZyPP?si=9603a77de5ea4131", author: "Carina Lakosil, 30 april 1993"  },
      { title: "I'm Changing", duration: "02:41", lyrics: ImChangingLyrics, spotifyUrl: "https://open.spotify.com/track/6vV6jY7DUmPAMW8I3IB0An?si=2a6c9ae2d5414cf0", author: "Carina Lakosil, 1 juni 1994" },
      { title: "Lollipop Teens", duration: "02:54", lyrics: LollipopTeensLyrics, spotifyUrl:"https://open.spotify.com/track/19p7fTClkQg2YKYDdcPRMc?si=0fa7b24a80fb44d3" },
      { title: "We Linger On", duration: "03:43", lyrics: WeLingerOnLyrics, spotifyUrl:"https://open.spotify.com/track/3H29AIdPggBmdBtBTtscdc?si=8310f689b71d46f0" },
      { title: "I Think I'll Go Mad", duration: "03:05", lyrics: IThinkIllGoMadLyrics, spotifyUrl:"https://open.spotify.com/track/4rIXRd0k1JqZTctCOh0cps?si=3f1e477950c54d65" },        
    ],
  },
  { 
    slug: "Lollipop-Teens", 
    src: LollipopTeensLp, 
    name: "Lollipop Teens", 
    year: 2026, 
    releaseDate: "2026-03-18",
    alt: "Lollipop Teens",
    release_type: "single",
    tracks: [
      { title: "Lollipop Teens", duration: "02:54", lyrics: LollipopTeensLyrics, spotifyUrl:"https://open.spotify.com/track/2pHzO41o1dpiqxgvwcJnaf?si=74e2e5afb67549ac" },
    ],
  },
  { 
    slug: "I-think-I'll-go-mad", 
    src: IThinkIllGoMadLp, 
    name: "I Think I'll Go Mad", 
    year: 2026, 
    releaseDate: "2026-02-23",
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
    year: 2026, 
    releaseDate: "2026-02-11",
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
    year: 2026, 
    releaseDate: "2026-01-22",
    alt: "Girl",
    release_type: "single",
    tracks: [
      { title: "Girl", duration: "01:50", lyrics: GirlLyrics, spotifyUrl:"https://open.spotify.com/track/1nmSFmUUy0qfRsXwObBaJG?si=1739b6c1abe94f4b" },
    ],
  },
  { 
    slug: "stjarnoga", 
    src: StjarnogaLp, 
    name: "Stjärnöga", 
    year: 2025, 
    releaseDate: "2025-12-23",
    alt: "Stjärnöga",
    release_type: "single",
    tracks: [
      { title: "Stjärnöga", duration: "3:20",  lyrics: StjarnogaLyrics, spotifyUrl:"https://open.spotify.com/track/3iaN9qbGOVGxo5y1LFD0lq?si=ce30163f83ff4d5d" },
    ],
  },

  { 
    slug: "vision-of-life", 
    src: VisionLp, 
    name: "Vision of Life", 
    year: 2025, 
    releaseDate: "2025-09-12",
    alt: "Vision of Life",
    release_type: "ep",
    tracks: [
      { title: "Vision of Life", duration: "3:46", spotifyUrl: "https://open.spotify.com/track/0GsGdnpvJJtZgPrSe5tNlZ?si=2c979029817f43eb", lyrics: VisionOfLifeLyrics, author: "Carina Lakosil" },
      { title: "Angelwings", duration: "2:12", lyrics: AngelwingsLyrics, spotifyUrl: "https://open.spotify.com/track/7iG8mTFH9yK5sDWlRwtl8X?si=7c3fb15fcea84426", author:"Carina Lakosil 4 juli 1993" },
      { title: "She Said He Looked Sweet", duration: "3:15", lyrics: SheSaidHeLookedSweetLyrics, spotifyUrl: "https://open.spotify.com/track/0iocGtgSIFUkbKVQBZfI0d?si=59f49a83f00c4543", author: "Carina Lakosil, 2 juni 1992" },
      { title: "Tears of a Wizard", duration: "3:27",lyrics: TearsOfAWizardLyrics, spotifyUrl: "https://open.spotify.com/track/15Loda7Nsj5HId1e6xWfZt?si=dfbbe9dbbb144c76", author: "Carina Lakosil" },
      { title: "Niagara Falls", duration: "3:20", lyrics: NiagaraFallsLyrics, spotifyUrl: "https://open.spotify.com/track/2rKdwPl9WhHeYKNIsXHers?si=3b5b376b62ad49be", author: "Carina Lakosil, 16 feb 1995" },
    ],
  },
  { 
    slug: "sweet-alligator", 
    src: AlligatorLp, 
    name: "Sweet Alligator", 
    year: 2023, 
    releaseDate: "2023-11-15",
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
    year: 2022, 
    releaseDate: "2022-06-15",
    tracks: [
      { title: "Disappear", duration: "4:24", spotifyUrl: "https://open.spotify.com/track/0QOV3ozrXMk7ZtPqRxfuxM?si=9d1ea7040bf74ecc"  }
    ],

  },
  { 
    slug: "return-to-the-sun", 
    src: ReturnLp, 
    name: "Return to the sun", 
    year: 2019, 
    releaseDate: "2019-10-09",
    alt: "Return to the Sun",
    release_type: "lp",
    tracks: [
      { title: "Return to the Sun", duration: "3:15", spotifyUrl: "https://open.spotify.com/track/3AavflZ49iMovQIO2cOQP9?si=c7c389a7d28b4f9c",  author: "Carina Lakosil"  },
      { title: "Little Polly", duration: "2:25", spotifyUrl: "https://open.spotify.com/track/73Pi7ZiNRxaXUUZV9YMDLh?si=949bc6c304b24d8a",  author: "Carina Lakosil"  },
      { title: "The World Around", duration: "3:06", spotifyUrl: "https://open.spotify.com/track/765WPQignKdCLUQoWgeqeY?si=107c847276de41e0",  author: "Carina Lakosil"  },
      { title: "Castle of Tears", duration: "3:06", spotifyUrl: "https://open.spotify.com/track/63aD3A7ybgKOzzhrdk4ZXl?si=935da11fc9e34c52",  author: "Carina Lakosil"  },
      { title: "Moving out", duration: "1:08", spotifyUrl: "https://open.spotify.com/track/2Mg94RVR8HdHE44y6CdO7k?si=fd9ab9f7cfd04d73",  author: "Carina Lakosil"  }
    ],

  },
  { 
    slug: "lucky-soul", 
    src: LuckySoulLp, 
    name: "Lucky Soul",
    year: 2019, 
    releaseDate: "2019-04-08",
    alt: "Lucky Soul",
    release_type: "lp",
    tracks: [
      { title: "Lucky Soul", duration: "2:35", spotifyUrl: "https://open.spotify.com/track/6X6Z3FebwwEDtFUjLxoWVo?si=894a6953a9354f58", author: "Carina Lakosil, 9 april 1999"  },
      { title: "Since the Day I came Back", duration: "2:37", spotifyUrl: "https://open.spotify.com/track/4SlzPeoG9nVHUlytUnvfGd?si=f7d745b3c009470a", author: "Carina Lakosil, 18 december 1993"  },
      { title: "Jade", duration: "4:29", spotifyUrl: "https://open.spotify.com/track/0TIDYbP82cSSJmuGzPPN4d?si=593eba27eb174a38", author: "Carina Lakosil, 13 aug 1993"    },
      { title: "Crown of Sun", duration: "2:30", spotifyUrl: "https://open.spotify.com/track/2d1WRo0uNvg2uLJMl0jLCY?si=58cebfbb4ef44fb1", author: "Carina Lakosil, våren 1992"  },
      { title: "Lilla tjej", duration: "3:46", spotifyUrl: "https://open.spotify.com/track/3OvKUikQ9hbrKtm4HKJh9h?si=578aceeacb594e73", author: "Carina Lakosil, 12 april & 28 maj 2012"    },
      { title: "Albin", duration: "3:27", spotifyUrl: "https://open.spotify.com/track/35cAWpubfcxDrrRPhz3qAv?si=f32f2c9230cf4934", author: "Carina Lakosil, sep 2013 & maj 2017"   },
      { title: "Hösten är här", duration: "3:28", spotifyUrl: "https://open.spotify.com/track/4Gv0q5LLLznmzi6yLrtfcp?si=14fec8e474224d37", author: "Carina Lakosil, Tuva och Albin Sundgren, Maja Thurfjell, 6 oktober 2013"  }
    ]
  },


];

export const useLpInfo = () => LpInfo;