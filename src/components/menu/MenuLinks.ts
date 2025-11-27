type SubLinks = {
  path: string;
  label: string;
  target?: string;
};

type MenuLinks = {
  path: string;
  label: string;
  target?: string;
  subLinks?: SubLinks[];
};

export const MenuLinks = [
  { path: "/", labelKey: "menu.news" },
  { 
    path: "/music",
    labelKey: "menu.music",
    target: "_blank?",
    subLinks: [
    { path: "/testingtesting", label: "TestingTesting", target: "top" },
    ],
  },
  { path: "/videos", 
    labelKey: "menu.videos"},
    
  { path: "/contact", 
    labelKey: "menu.contact"},
];
