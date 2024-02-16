import Link from "next/link";
import { useRouter } from "next/navigation";

function Navigation() {
  const router = useRouter();
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  const isProfileActive = currentPath === "/profile";

  function NavLink({ href, children, isActive }) {
    console.log(isProfileActive);
    return (
      <Link href={href}>
        <span
          className={` hover:text-gray-300 ${
            isActive ? "font-normal text-white " : "text-gray-500"
          }`}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <nav className=" bg-gradient-to-r from-gray-500 to-pink-200 p-4 backdrop-blur-md  bg-opacity-100 ">
      <div className=" container mx-auto flex  justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">G-Sport</Link>
        </div>
        <div className="flex space-x-4">
          {/* Display for larger screens (computer) */}
          <NavLink href="/profile" isActive={isProfileActive}>
            Profile
          </NavLink>
          <NavLink href="/buddies" isActive={router.pathname === "/buddies"}>
            Buddies
          </NavLink>
          <NavLink href="/discover" isActive={router.pathname === "/discover"}>
            Discover
          </NavLink>
          <NavLink href="/settings" isActive={router.pathname === "/settings"}>
            Settings & Privacy
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
