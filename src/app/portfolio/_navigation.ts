import { Icons } from "@/components/common/Icons/Icons";

const baseUrl = "/portfolio";

export type urlType = { name: string; href: string; url?: string; icon: any };

const urls: urlType[] = [
  { name: "About", href: "/", icon: Icons.home },
  { name: "Work", href: "/work", icon: Icons.mic },
  { name: "Contact", href: "/contact", icon: Icons.link },
];

export default urls.map(
  (url): urlType => ({
    ...url,
    url: (url.href = baseUrl + url.href),
  })
);
