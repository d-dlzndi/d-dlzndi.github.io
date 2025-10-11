import { Icons } from "@/components/common/Icons/Icons";

const date = new Date();
const year = date.getFullYear();

const contactTitle = "CONTACT";
const contactDescription = `늘 열려있는 연락처입니다.`;
const copyright = `KIM Seoyun © ${year} - All right reserved`;
// Copyright KIM Seoyun © 2023 - All right reserved

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
    text: "d.dlzndi@gmail.com",
    url: "mailto:d.dlzndi@gmail.com",
    icon: Icons.email,
    iconType: "stroke",
  },
  {
    title: "Blog",
    text: "d-dl.tistory.com",
    url: "https://d-dl.tistory.com/",
    icon: Icons.blog,
    iconType: "stroke",
  },
  {
    title: "Github",
    text: "github.com/d-dlzndi",
    url: "https://github.com/d-dlzndi",
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
