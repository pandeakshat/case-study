"use client";

import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export function FloatingIslandNavbar({ bgColor = "rgba(0, 0, 0, 0.3)" }) {
  return (
    <nav
      style={{ backgroundColor: bgColor }}
      className="sticky top-4 z-50 backdrop-blur-md rounded-md mx-auto max-w-4xl w-[80%] px-6 py-3"
    >
      <div className="flex justify-between">
        <div className="text-2xl font-bold">Case-Study Design</div>
        <NavigationMenu>
          <NavigationMenuItem className="list-none">
            <NavigationMenuLink
              href="/"
              className="!no-underline before:hidden focus:before:hidden"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
            <NavigationMenuLink
              href="/collection"
              className="relative !no-underline before:hidden focus:before:hidden"
            >
              Collection
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="list-none">
            <NavigationMenuLink
              href="/about"
              className="relative !no-underline before:hidden focus:before:hidden"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenu>
      </div>
    </nav>
  );
}