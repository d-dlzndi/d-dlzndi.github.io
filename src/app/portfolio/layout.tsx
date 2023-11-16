import Link from "next/link";
import _navigation from "./_navigation";
import SlideTransition from "@/components/animation/slideTransition";
import { MainFooter } from "./MainFooter";
import MainHeaderBtn from "./MainHeaderBtn";

export default function Layout(props: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <>
      <div className=" w-screen flex flex-wrap flex-col justify-center items-center">
        <div className="w-full min-h-screen max-w-screen-2xl">
          {props.children}
        </div>
        <MainFooter />
      </div>
      <MainHeaderBtn />
    </>
  );
}

/*
      <div className=" w-screen h-[90vh]">{props.header}</div>
      <MainNavigation />

      
*/

export function MainNavigation() {
  return (
    <nav className=" w-screen h-[10vh] bg-black text-white">
      <ul className=" w-full h-full flex flex-row justify-stretch items-stretch flex-nowrap">
        {_navigation.map((nav, idx) => (
          <li key={nav.name} className=" text-7xl w-full text-center">
            <Link href={nav.url || "/"}>
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
