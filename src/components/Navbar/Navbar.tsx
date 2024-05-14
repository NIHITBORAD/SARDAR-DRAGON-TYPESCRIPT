import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarFavorite from "./NavbarFavorite/NavbarFavorite";
import NavbarBag from "./NavbarBag/NavbarBag";
import { SignInButton,  SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
 
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
      
        <div className={styles.logo}>
          <Link to="/">
            <h1>fruits.</h1>
          </Link>
        </div>
        <NavbarLinks />
      </div>
      <div className={styles.navbarRight}>
        <NavbarSearch />
        <div className={styles.rightIcons}>
          <NavbarFavorite />
          <NavbarBag />
        </div>
        <SignedIn>
            <div className="flex h-fit items-center">
               
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <h3 className=" cursor-pointer p-4 font-normal text-base " style={{cursor:"pointer"}}>
                Login
              </h3>
            </SignInButton>
          </SignedOut>
        
      </div>
    </nav>
  );
};

export default Navbar;
