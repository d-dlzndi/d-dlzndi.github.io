import FixedFooter from "@/components/animation/fixedFooter";
import { Icons } from "@/components/common/Icons/Icons";

export function MainFooter() {
  const h = "30vh";
  return (
    <FixedFooter height={h}>
      <div
        style={{ height: h }}
        className={`footer footer-center p-10 bg-primary text-primary-content min-h-fit min-w-fit`}
      >
        <FooterContents />
      </div>
    </FixedFooter>
  );
}

export function FooterContents() {
  type contactType = {
    href: string;
    tooltip: string;
    icon: any;
  };
  const contacts: contactType[] = [
    {
      href: "mailto:sksoyks@naver.com",
      tooltip: "Email",
      icon: Icons.email,
    },
    {
      href: "https://github.com/d-dlzndi",
      tooltip: "Github",
      icon: Icons.github,
    },
  ];
  return (
    <>
      <aside>
        <p className="font-bold fill-none stroke-base-100">
          <Icons.logo width={50} height={50} />
        </p>
        <p>Copyright D-DL © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {contacts.map((icon, idx) => (
            <a
              key={icon.tooltip}
              href={icon.href}
              target="_blank"
              className="tooltip"
              data-tip={icon.tooltip}
            >
              <icon.icon className={"fill-base-100"} width={24} height={24} />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
