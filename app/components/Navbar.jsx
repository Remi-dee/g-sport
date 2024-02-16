"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Navigation() {
  const router = useRouter();

  const isProfileActive = router.pathname === "/profile";

  function NavLink({ href, children, isActive }) {
    return (
      <Link href={href}>
        <span
          className={`text-white hover:text-gray-300 ${
            isActive ? "font-bold" : ""
          }`}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            Logo
          </Link>
        </div>
        <div className="flex space-x-4">
          <NavLink href="/profile" isActive={isProfileActive}>
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
