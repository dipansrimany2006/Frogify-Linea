// components/Navbar.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky backdrop-blur-sm top-0 w-full bg-background shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <Link href="/" className="text-2xl font-bold text-foreground">
        Open Tales
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <Link href="/about" className="text-muted-foreground hover:text-foreground">
          About
        </Link>
        <Link href="/blogs" className="text-muted-foreground hover:text-foreground">
          Blog
        </Link>
        <Link href="/contact" className="text-muted-foreground hover:text-foreground">
          Contact
        </Link>
        <div className="flex gap-2">
          <Button variant="outline">LogIn</Button>
          <Button variant="outline">SignUp</Button>
        </div>
        <ModeToggle />
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <div className="mr-3">
          <ModeToggle />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-muted-foreground hover:text-foreground"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="mr-3" variant="outline">
            LogIn
          </Button>
          <Button className="mr-3" variant="outline">
            SignUp
          </Button>
        </div>
      </div>
    )}
  </div>
</nav>
  );
};

export default Navbar;
