import FixedFooter from "@/components/animation/fixedFooter";
import { Icons } from "@/components/common/Icons/Icons";
import Link from "next/link";
import { Data as contactData } from "../contact/ContactDatas";
import FramerMagnetic from "@/components/animation/Magnetic";

export function MainFooter() {
  const h = "30vh";
  return (
    <FixedFooter height={h}>
      <div
        style={{ height: h }}
        className={`footer footer-center p-10 bg-primary text-base-100 min-h-fit min-w-fit`}
      >
        <FooterContents />
      </div>
    </FixedFooter>
  );
}

export function FooterContents() {
  return (
    <>
      <aside>
        <div className="">
          <FramerMagnetic max={10} className="">
            <a
              href="/portfolio"
              className="fill-secondary group inline-block origin-center transition-all"
            >
              <Icons.logo width={50} height={50} />
            </a>
          </FramerMagnetic>
        </div>
        <p className="font-bold uppercase">{contactData.copyright}</p>
      </aside>
      <nav className="grid grid-flow-col gap-4 relative">
        {contactData.urls.map((url, idx) => (
          <FramerMagnetic key={url.title} max={5} className="">
            <a
              href={url.url}
              target="_blank"
              className="tooltip p-2 block"
              data-tip={url.title}
            >
              <url.icon
                className={
                  url.iconType == "fill"
                    ? "fill-base-100"
                    : "fill-none stroke-base-100"
                }
                width={24}
                height={24}
              />
            </a>
          </FramerMagnetic>
        ))}
      </nav>
    </>
  );
}
