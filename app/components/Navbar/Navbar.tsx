import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/list">
        Services
      </Link>
      <Link href="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
