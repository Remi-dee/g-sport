import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStateContext } from "../lib/context/stateContext";

function Navigation() {
  const router = useRouter();
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  const isProfileActive = currentPath === "/profile";
  const { settings, setSettings } = useStateContext();

  function NavLink({ handleClick, children, isActive }) {
    return (
      <button onClick={handleClick}>
        <span className="text-gray-500 hover:text-gray-300 ">{children}</span>
      </button>
    );
  }

  return (
    <nav className=" bg-gradient-to-r from-gray-500 to-pink-200 p-4 backdrop-blur-md  bg-opacity-100 ">
      <div className=" container mx-auto flex  justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">G-Sport</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* Display for larger screens (computer) */}
          <NavLink
            handleClick={() => setSettings(false)}
            isActive={isProfileActive}
          >
            Profile
          </NavLink>
          <NavLink isActive={router.pathname === "/buddies"}>Buddies</NavLink>
          <NavLink isActive={router.pathname === "/discover"}>Discover</NavLink>
          <NavLink
            handleClick={() => setSettings(true)}
            isActive={router.pathname === "/settings"}
          >
            Settings & Privacy
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
