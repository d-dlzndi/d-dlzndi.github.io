import ContactPage from "./ContactPage";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CONTACT",
};

export default function about(params: any) {
  return <ContactPage {...params} />;
}
