import { Github, Linkedin, MessageSquare, Twitter, Instagram } from "lucide-react";

export const profile = {
  name: "Ebuka",
  role: "Mobile Software Developer & IT Project Manager",
  tagline: "I Build Scalable, High-Performance Apps with Delightful UX for the next wave of startups 📱🚀",
  about: "Hey! I’m Ebuka 👋🏼. I am a passionate developer and project manager with a focus on creating impactful mobile experiences.",
  logo: "/images/logo.png", 
  avatar: "/images/me.png",
  resumeLink: "https://docs.google.com/document/d/1vw4A9Z4XuSkdyljXVxjCO7Mns7b6VeVUAhLr72VAMkA/edit?usp=sharing",
  blogLink: "https://medium.com/@revelationjay02",
};

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/csonah", icon: Linkedin },
  { name: "TikTok", url: "https://www.tiktok.com/@cs_onah", icon: MessageSquare }, 
  { name: "Instagram", url: "https://www.instagram.com/cs_onah", icon: Instagram },
  { name: "X (Twitter)", url: "https://x.com/cs_onah", icon: Twitter },
  { name: "GitHub", url: "https://github.com/cs-onah/cassava_disease_detection", icon: Github }, 
];

export const skills = {
  core: ["Flutter", "Dart", "Android SDK", "iOS Development", "Javascript"],
  tools: [
    "MacOS", "Git", "GitHub", "Github Actions", "Google Cloud Services",
    "Code Magic CI/CD", "BitBucket Pipelines", "Google Play & AppStore App Versioning",
    "Postman/Swagger", "Jira", "Payment Services Integration"
  ],
  concepts: [
    "Riverpod", "Bloc", "Provider", "GetX", "MobX",
    "TDD", "MVVM", "SOLID", "Clean Architecture"
  ]
};

export interface Project {
  id: string;
  title: string;
  description: string;
  links: { label: string; url: string }[];
  assets: { logo: string; cover: string };
  tags: string[]; 
}

export const projects: Project[] = [
  {
    id: "lingawa",
    title: "Lingawa",
    description: "Learn Yoruba and Igbo with fun, immersive games and lessons for adults and kids (ages 5+). Lingawa makes learning your mother tongue easy, fun, and deeply cultural.",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/lingawa/id6754772758" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.lingawa.mobile" }
    ],
    assets: {
      logo: "/images/lingawa_logo.png",
      cover: "/images/lingawa_image1.png"
    },
    tags: ["Mobile", "Education", "Culture"]
  },
  {
    id: "cary",
    title: "Cary",
    description: "A logistics application that allows users negotiate prices with movers, and track the entire delivery process. Cary currently operates in Cardiff, UK.",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/cary-mobile/id6738658124" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.cary.caryuser&pcampaignid=web_share" }
    ],
    assets: {
      logo: "/images/cary_logo.png",
      cover: "/images/cary_image1.png"
    },
    tags: ["Logistics", "Mobile", "UK"]
  },
  {
    id: "iserv",
    title: "I-Serv",
    description: "A structured marketplace that connects users with verified and trusted local professionals for all your service needs. I-Serv is operational in Lagos, Nigeria.",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/i-serv-mobile/id6714478584" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.iservehbg.iserve_flutter&hl=en" }
    ],
    assets: {
      logo: "/images/iserv_logo.png",
      cover: "/images/iserv_image1.png"
    },
    tags: ["Marketplace", "Services", "Nigeria"]
  },
  {
    id: "evenfare",
    title: "EvenFare",
    description: "Eco-friendly courier service dedicated to reducing carbon footprint while delivering your packages efficiently. EvenFare is set to launch in Lagos, Nigeria.",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.evenfare.even_fare&hl=en" }
    ],
    assets: {
      logo: "/images/evenfare.png", // Note: file was named evenfare.png in list, not evenfare_logo.png
      cover: "/images/evenfare_image1.png"
    },
    tags: ["Logistics", "Eco-friendly"]
  },
  {
    id: "lscan",
    title: "L-Scan",
    description: "Passion project - exploring how to integrate Image Classification AI models into Flutter Apps. This app predicts certain diseases in cassava plant leaves from an input image.",
    links: [
        { label: "GitHub", url: "https://github.com/cs-onah/cassava_disease_detection" }
    ],
    assets: {
      logo: "/images/lscan_logo.png",
      cover: "/images/lscan_image1.png"
    },
    tags: ["AI", "Flutter", "Experimental"]
  },
  {
    id: "tramatch",
    title: "Tramatch",
    description: "A premier traditional marriage matchmaking service catering to individuals seeking a partner based on shared traditional values and faith-based beliefs.",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/tramatch-dating-marriage/id6503286662" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.tramatch.tramatch&hl=en" }
    ],
    assets: {
      logo: "/images/tramatch_logo.png",
      cover: "/images/tramatch_image1.png"
    },
    tags: ["Dating", "Culture"]
  },
  {
    id: "fieldmaxpro",
    title: "FieldMaxPro iOS",
    description: "FieldMaxPro is an enterprise fieldforce management system designed for Sales/Marketing Managers. The app allows managers track activities of their field representatives.",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/fieldmaxpro-retail/id6468567589" }
    ],
    assets: {
      logo: "/images/fieldmax_logo.png",
      cover: "/images/fieldmax_image1.png"
    },
    tags: ["Enterprise", "Management", "iOS"]
  }
];

export const footer = {
  copyright: "Copyright© reserved (Chemical Year). Built with Flutter.", 
  text: "Copyright© reserved 2026. Built with React (Ported from Flutter idea)." 
};
