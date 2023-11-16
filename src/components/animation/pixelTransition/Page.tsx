"use client";

import styles from "./style.module.scss";

import { useState } from "react";

import Header from "./Header";
import PixelBackground from "./PixelBackground";

export default function PixelHome() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <div className={styles.main}>
      <Header menuIsActive={menuIsActive} />
      <PixelBackground menuIsActive={menuIsActive} />
    </div>
  );
}
