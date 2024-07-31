import Link from "next/link";
import React from "react";

export const Navbar = async () => {
  const navbarData = [
    {
      name: "Breaking Bad Quotes",
      href: "/",
    },
  ];
  return (
    <main className="flex items-center justify-center h-20 bg-amber-300 w-full">
      <div className="flex items-center gap-x-10 text-3xl font-medium">
        {navbarData.map((nav) => (
          <Link key={nav.name} href={nav.href}>
            {nav.name}
          </Link>
        ))}
      </div>
    </main>
  );
};
