import { Icons } from "@/components/common/Icons/Icons";

const baseUrl = "/portfolio";

type NameType = "About" | "Work" | "Contact";
export type urlType = { name: NameType; href: string; url: string; icon: any };

const urls: urlType[] = [
  { name: "About", href: "", icon: Icons.home, url: "" },
  { name: "Work", href: "/work", icon: Icons.mic, url: "" },
  { name: "Contact", href: "/contact", icon: Icons.link, url: "" },
];

const data = urls.map(
  (url): urlType => ({
    ...url,
    url: (url.href = baseUrl + url.href),
  })
);

export function getNavigationData(name: NameType) {
  return data.find((n) => n.name == name) || data[0];
}

export default data;
