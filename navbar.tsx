"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utilities/cn";

const navItemStyle = (isActive: Boolean) =>
  `inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-slate-400" : ""
  }`;

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Test", path: "/gay-detector" },
    { name: "Starwars", path: "/starwars" },
  ];

  return (
    <nav className="overflow-hidden">
      <ul
        className={cn(
          "group flex flex-1 list-none items-center justify-center space-x-1",
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            //   className="block p-4 text-center text-white transition-colors hover:bg-slate-400 hover:text-black"
            className="block text-white"
          >
            <li
              className={`${navItemStyle(pathname === item.path)} transition-colors duration-700 hover:bg-gray-500 hover:text-black focus:outline-none`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
