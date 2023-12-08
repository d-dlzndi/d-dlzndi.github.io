import { Icons } from "@/components/common/Icons/Icons";

const contactTitle = "CONTACT";
const contactDescription = `늘 열려있는 연락처입니다. \n이메일을 가장 선호합니다.`;
const copyright = `Seo Yun Kim © 2023 - All right reserved`;
// Copyright Seo Yun Kim © 2023 - All right reserved

type urlDataType = {
  title: string;
  text: string;
  url: string;
  icon: any;
  iconType: "fill" | "stroke";
};

const urlData: urlDataType[] = [
  {
    title: "Email",
    text: "sksoyks@naver.com",
    url: "mailto:sksoyks@naver.com",
    icon: Icons.email,
    iconType: "stroke",
  },
  {
    title: "Tel",
    text: "+82 010-2923-8734",
    url: "tel:01029238734",
    icon: Icons.phone,
    iconType: "fill",
  },
  {
    title: "Github",
    text: "github.com/d-dlzndi",
    url: "https://github.com/d-dlzndi/d-dlzndi.github.io",
    icon: Icons.github,
    iconType: "fill",
  },
];

export const Data = {
  title: contactTitle,
  description: contactDescription,
  copyright,
  urls: urlData,
};
