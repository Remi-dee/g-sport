// components/Navigation.js
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            Logo
          </Link>
        </div>
        <div className="flex space-x-4">
          <NavLink href="/profile">Profile</NavLink>
          <NavLink href="/buddies">Buddies</NavLink>
          <NavLink href="/discover">Discover</NavLink>
          <NavLink href="/settings">Settings</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <span className="text-white hover:text-gray-300">{children}</span>
  </Link>
);

export default Navigation;
