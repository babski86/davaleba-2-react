import Link from "next/link";
import styles from "./navbar.module.css";
const itemsForNavbar = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Contact", href: "/contact" },
  { id: 4, name: "cart", href: "/cart" },
];
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      {itemsForNavbar.map((item) => (
        <nav key={item.id} className={styles.navbar}>
          <Link href={item.href} className={styles.navbarLink}>
            {item.name}
          </Link>
        </nav>
      ))}
    </div>
  );
};

export default Navbar;
