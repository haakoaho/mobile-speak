import Link from "next/link";
import { useState } from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpand = () => setExpanded(!expanded);
  return (
    <div>
      <button className={styles.menuButton} onClick={handleExpand}>Navigation</button>
      {expanded && (
        <nav className={styles.navbar}>
          <Link href="/">Take Roles</Link>
          <Link href="/user">User Info</Link>
          <Link href="/roleAdmin">Role Admin</Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
