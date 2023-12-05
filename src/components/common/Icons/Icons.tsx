import {
  ArrowTopRightOnSquareIcon,
  MicrophoneIcon,
  HomeIcon,
  ArrowUturnLeftIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

import {
  Bars3Icon,
  Squares2X2Icon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronDoubleUpIcon,
  ChevronDoubleRightIcon,
  XMarkIcon,
  XCircleIcon,
  ArrowUpRightIcon,
  HashtagIcon,
  ArrowsRightLeftIcon,
  ArrowsUpDownIcon,
  CursorArrowRippleIcon,
  PhoneIcon,
  AtSymbolIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

import LogoIcon from "@/assets/svg/logo.svg";
import GithubIcon from "@/assets/svg/github.svg";
import MayaIcon from "@/assets/svg/maya.svg";
import AsepriteIcon from "@/assets/svg/aseprite.svg";
import UnityIcon from "@/assets/svg/unity.svg";
import UnrealIcon from "@/assets/svg/unrealengine.svg";
import PhotoshopIcon from "@/assets/svg/adobephotoshop.svg";
import IllustratorIcon from "@/assets/svg/adobeillustrator.svg";
import AfterEffectIcon from "@/assets/svg/adobeaftereffects.svg";
import PremiereIcon from "@/assets/svg/adobepremierepro.svg";
import CsharpIcon from "@/assets/svg/csharp.svg";
import JavascriptIcon from "@/assets/svg/javascript.svg";
import NextJsIcon from "@/assets/svg/nextdotjs.svg";

export type HeroIcon = React.ForwardRefExoticComponent<IconProps>;

export type IconProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
  title?: string;
  titleId?: string;
} & React.RefAttributes<SVGSVGElement>;

export const Icons = {
  logo: (props: IconProps) => <LogoIcon {...props} />,
  x: (props: IconProps) => <XMarkIcon {...props} />,
  xCircle: (props: IconProps) => <XCircleIcon {...props} />,
  link: (props: IconProps) => <ArrowTopRightOnSquareIcon {...props} />,
  mic: (props: IconProps) => <MicrophoneIcon {...props} />,
  home: (props: IconProps) => <HomeIcon {...props} />,
  uturnLeft: (props: IconProps) => <ArrowUturnLeftIcon {...props} />,
  list: (props: IconProps) => <Bars3Icon {...props} />,
  gallery: (props: IconProps) => <Squares2X2Icon {...props} />,
  arrowRight: (props: IconProps) => <ArrowRightIcon {...props} />,
  arrowLeft: (props: IconProps) => <ArrowLeftIcon {...props} />,
  arrowUp: (props: IconProps) => <ArrowUpIcon {...props} />,
  arrowDown: (props: IconProps) => <ArrowDownIcon {...props} />,
  chevronDoubleUp: (props: IconProps) => <ChevronDoubleUpIcon {...props} />,
  chevronDoubleRight: (props: IconProps) => (
    <ChevronDoubleRightIcon {...props} stroke={undefined} />
  ),
  email: (props: IconProps) => <AtSymbolIcon {...props} />,
  github: (props: IconProps) => <GithubIcon {...props} />,
  arrowUpRight: (props: IconProps) => <ArrowUpRightIcon {...props} />,
  sharp: (props: IconProps) => <HashtagIcon {...props} />,
  tag: (props: IconProps) => <TagIcon {...props} fill={undefined} />,
  arrowsSwap: (props: IconProps) => <ArrowsRightLeftIcon {...props} />,
  arrowsSort: (props: IconProps) => <ArrowsUpDownIcon {...props} />,
  cursorRipple: (props: IconProps) => <CursorArrowRippleIcon {...props} />,
  phone: (props: IconProps) => <PhoneIcon {...props} />,
};

export const BrandIcons = {
  Maya: (props: IconProps) => (
    <MayaIcon
      {...props}
      viewBox="0 0 233.55 247.89"
      preserveAspectRatio="none"
    />
  ),
  Aseprite: (props: IconProps) => <AsepriteIcon {...props} />,
  Unity: (props: IconProps) => <UnityIcon {...props} />,
  Unreal: (props: IconProps) => <UnrealIcon {...props} />,
  Photoshop: (props: IconProps) => <PhotoshopIcon {...props} />,
  Illustrator: (props: IconProps) => <IllustratorIcon {...props} />,
  AfterEffect: (props: IconProps) => <AfterEffectIcon {...props} />,
  Premiere: (props: IconProps) => <PremiereIcon {...props} />,
  Csharp: (props: IconProps) => <CsharpIcon {...props} />,
  JavaScript: (props: IconProps) => <JavascriptIcon {...props} />,
  NextJsIcon: (props: IconProps) => <NextJsIcon {...props} />,
};
