import Link from "next/link";
import _navigation from "./_navigation";
import FixedFooter from "@/components/animation/fixedFooter";

export default function Layout(props: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <>
      <div className=" w-screen h-[90vh]">{props.header}</div>
      <MainNavigation />
      <div className=" w-screen min-h-max">{props.children}</div>
      <MainFooter />
    </>
  );
}

export function MainFooter() {
  return (
    <FixedFooter height="50vh">
      <div className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
          <p className="font-bold">로고 50*50</p>
          <p>Copyright SE0 © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>sns 아이콘 24*24</a>
            <a>sns 아이콘 24*24</a>
            <a>sns 아이콘 24*24</a>
          </div>
        </nav>
      </div>
    </FixedFooter>
  );
}

export function MainNavigation() {
  return (
    <nav className=" w-screen h-[10vh] bg-black text-white">
      <ul className=" w-full h-full flex flex-row justify-stretch items-stretch flex-nowrap">
        {_navigation.map((nav, idx) => (
          <li key={nav.name} className=" text-7xl w-full text-center">
            <Link href={nav.url}>
              {nav.name}
              <nav.icon className=" w-10 h-10 inline-block" />
            </Link>
          </li>
        ))}
        <li>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
        </li>
      </ul>
    </nav>
  );
}
