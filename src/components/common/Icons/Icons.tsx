import {
  ArrowTopRightOnSquareIcon,
  MicrophoneIcon,
  HomeIcon,
  ArrowUturnLeftIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/solid";

import {
  Bars3Icon,
  Squares2X2Icon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronDoubleUpIcon,
  XMarkIcon,
  XCircleIcon,
  ArrowUpRightIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline";

import LogoIcon from "@/assets/svg/logo.svg";
import GithubIcon from "@/assets/svg/github-mark.svg";

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
  chevronDoubleUp: (props: IconProps) => <ChevronDoubleUpIcon {...props} />,
  email: (props: IconProps) => <AtSymbolIcon {...props} />,
  github: (props: IconProps) => <GithubIcon {...props} />,
  arrowUpRight: (props: IconProps) => <ArrowUpRightIcon {...props} />,
  sharp: (props: IconProps) => <HashtagIcon {...props} />,
};
