import Link from "next/link";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <div>
          <Link href="/">Home</Link>
        </div>

        <div>
          <Link href="/about">About</Link>
        </div>

        <div>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <Link href="/feedback">Feedback</Link>
        </div>

        <div>
          <Link href="/country">Country</Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
