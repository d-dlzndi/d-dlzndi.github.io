export default function HtmlRemover(str?: string | null) {
  if (!str) return "";
  return str.replace(/<[^>]+>/g, "");
}
