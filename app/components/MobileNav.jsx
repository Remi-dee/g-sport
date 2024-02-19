import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStateContext } from "../lib/context/stateContext";

function MobileNav() {
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
    <nav className="  ">
      <div className=" flex space-x-4">
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
    </nav>
  );
}

export default MobileNav;
