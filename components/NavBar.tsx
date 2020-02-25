import Link from 'next/link';
import {useRouter} from 'next/router';

const NavBar = () => {
  const currentPath = useRouter().pathname;
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'><a className={currentPath === '/' ? 'active' : ''}>Home</a></Link>
        </li>
        <li>
          <Link href='/about'><a className={currentPath === '/about' ? 'active' : ''}>About</a></Link>
        </li>
        <li>
          <Link href='/portfolio'><a className={currentPath === '/portfolio' ? 'active' : ''}>Portfolio</a></Link>
        </li>
        <li>
          <Link href='/contact'><a className={currentPath === '/contact' ? 'active' : ''}>Contact</a></Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          padding-top: 0.5rem;
          padding-bottom: 4rem;
          text-align: right;
        }
        
        nav a {
          border-bottom: none;
        }
        
        ul {
          padding-right: 2.5rem;
        }
        
        li {
          display: inline-block;
          padding-left: 1rem;
          padding-right: 1rem;
          list-style: none;
          font-size: 1.25rem;
          font-weight: bold;
          text-transform: uppercase;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
