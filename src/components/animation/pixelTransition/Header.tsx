import styles from "./style.module.scss";

export default function MenuButton({
  menuIsActive,
  className,
}: {
  menuIsActive: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${styles.burger} ${
        menuIsActive ? styles.burgerActive : ""
      } ${className}`}
    ></div>
  );
}
