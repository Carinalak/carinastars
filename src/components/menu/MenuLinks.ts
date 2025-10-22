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
  { path: "/", 
    label: "News" 
  },
  { 
    path: "/music",
    label: "Music",
    target: "_blank?",
    subLinks: [
    { path: "/testingtesting", label: "TestingTesting", target: "top" },
    ],
  },

  { path: "/contact", 
    label: "Contact" },
];
