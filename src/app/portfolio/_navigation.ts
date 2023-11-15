import { Icons } from "@/components/common/Icons/Icons";

const baseUrl = "/portfolio";

const urls = [
  { name: "About", href: "/", icon: Icons.mic },
  { name: "Work", href: "/work", icon: Icons.mic },
  { name: "Contact", href: "/contact", icon: Icons.link },
];

export default urls.map((url) => ({
  ...url,
  url: (url.href = baseUrl + url.href),
}));
