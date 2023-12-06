import SvgT_Thank from "@/assets/svg/index/t_thank.svg";
import SvgT_Design from "@/assets/svg/index/t_design.svg";
import SvgT_Animation from "@/assets/svg/index/t_animation.svg";
import SvgT_Programming from "@/assets/svg/index/t_programming.svg";
import SvgT_About from "@/assets/svg/index/t_aboutMe.svg";
import { workSectionCategoryType } from "./WorksSection";
import { CATEGORY_ALL } from "../../workList/CategoryList";
import _navigation, { getNavigationData } from "@/app/portfolio/_navigation";

type sectionDataType = {
  title: string;
  description: string;
  titleSvg: any;
  category: workSectionCategoryType[];
  [key: string]: any;
};

const AboutData = {
  title: "About Me",
  titleSvg: SvgT_About,
  mainImg: "/img/index/profile.jpg",
  profile: {
    name: "김서윤",
    eng_name: "Seo Yun Kim",
    list: ["2001. 01. 29.", "+82 010-2923-8734", "sksoyks@naver.com"],
  },
  keywords: ["도전적인", "끈질긴", "호기심이 많은", "경청하는", "늘 상상하는"],
  abilityText: `저의 좌우명은 <code class="w-auto inline-block font-bold rounded-md bg-secondary italic text-secondary-content px-2">0보다 0.1이 낫다</code> 입니다.<br /><br />비록 당장의 결과물에선 눈에 띄지 않더라도, 늘 더 나은 방안이 있을지 고민합니다. 할 수 없는 일로써 미리 선 그어두는 것을 지양하고, 할 수 있는 일의 경계를 넓히기를 즐깁니다.`,
  abilityData: [
    {
      sub: "3D + 2D",
      title: "Animation",
      categories: ["Animation"],
      style: "bg-secondary text-secondary-content",
    },
    {
      sub: "WEB + GAME",
      title: "Programming",
      categories: ["Programming"],
      style: "bg-base-300 text-secondary-content",
    },
    {
      sub: "2D + 3D",
      title: "Design",
      categories: ["Graphic-Design", "Digital-Sculpting"],
      style: "bg-neutral text-neutral-content",
    },
  ],
  skills: [
    {
      name: "Maya",
      progress: 80,
    },
    {
      name: "Unreal Engine",
      progress: 50,
    },
    { name: "ZBrush", progress: 70 },
    { name: "Substance Painter", progress: 50 },
    { name: "After Effect", progress: 70 },
    { name: "Premiere", progress: 80 },
    { name: "Illustrator", progress: 70 },
    { name: "Photoshop", progress: 65 },
    { name: "Aseprite", progress: 70 },
    { name: "JavaScript", progress: 80 },
    { name: "TypeScript", progress: 40 },
    { name: "C#", progress: 60 },
    { name: "Python", progress: 50 },
  ],
  educationData: [
    { name: "화정고등학교 졸업", year: "2019.02." },
    { name: "강원대학교 영상디자인전공 졸업", year: "2024.02." },
  ],
  experienceData: [
    {
      title: "스마일게이트 온라인 게임잼 Episode.01 최우수상 수상",
      desc: `2020.07.24.`,
    },
    {
      title: "게임제작 경진대회 GIGDC2021 대학부 금상 수상",
      desc: `2021.04.01.`,
    },
    {
      title: "세이브더칠드런 아동학대 예방 영상물 공모전 참가",
      desc: `2022.10.31.`,
    },
    {
      title: "강원대학교 도서관 브이로그 공모전 참가",
      desc: `2022.11.15.`,
    },
    {
      title: "한국콘텐츠진흥원 2023 대한민국 게임잼 대상 수상",
      desc: `2023.08.11.`,
    },
  ],
};

const AnimationData: sectionDataType = {
  title: `Animation`,
  description: `저는 움직이지 않는 것에 생명력을 불어넣는 작업을 좋아합니다. 3D 애니메이션, 2D 애니메이션, 모션 그래픽 분야를 시도해보며, 그 과정에서 영상 편집과 연출 기술을 쌓아왔습니다. 이를 토대로 더 풍부한 역동성을 재현해보고 싶습니다.`,
  titleSvg: SvgT_Animation,
  category: ["Animation"],
  firstPost: "철로 이루어진 꽃",
};

const ProgrammingData: sectionDataType = {
  title: `Programming`,
  description: `처음 코딩을 시작했던 계기는 단순히 개인 블로그의 오류를 해결하기 위해서였습니다. 하지만 이제는 하면 즐겁기 때문에 코딩을 합니다. 여러 가지 분야에 도전하고 있지만, 그중 제일 자신 있는 건 프론트엔드와 게임 개발입니다.`,
  titleSvg: SvgT_Programming,
  category: ["Programming"],
};

const DesignData: sectionDataType = {
  title: `Design`,
  description: `대학에선 2차원, 3차원을 넘나들며 다양한 디자인 작업을 접해봤습니다. 2D에선 타이포그라피와 인포 그래픽, 3D에선 공간 디자인과 캐릭터 스컬핑이 주된 관심사였습니다. 관객과 사용자로 하여금 어떻게 보여질 수 있을지 늘 고민합니다.`,
  titleSvg: SvgT_Design,
  category: ["Digital-Sculpting", "Graphic-Design"],
};

const ThankData: sectionDataType = {
  title: `Thank you for reading!`,
  description: `긴 글 읽어 주셔서 감사합니다! \n저와 함께 일하고 싶으시다면 연락주세요. 이 홈페이지에서 더 많은 제 작업물을 열람하실 수도 있습니다.`,
  titleSvg: SvgT_Thank,
  category: [
    {
      name: "CONTACT",
      href: getNavigationData("Contact").url,
      more: "SEND",
    },
    { name: "WORKS", category: CATEGORY_ALL, more: "ALL" },
  ],
};

export { AboutData, AnimationData, ProgrammingData, DesignData, ThankData };
