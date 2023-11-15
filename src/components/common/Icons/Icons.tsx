import {
  ArrowTopRightOnSquareIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";

export type HeroIcon = React.ForwardRefExoticComponent<IconProps>;

export type IconProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
  title?: string;
  titleId?: string;
} & React.RefAttributes<SVGSVGElement>;

export const Icons = {
  link: (props: IconProps) => <ArrowTopRightOnSquareIcon {...props} />,
  mic: (props: IconProps) => <MicrophoneIcon {...props} />,
};
