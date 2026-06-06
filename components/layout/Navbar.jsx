"use client";
import { NAV_LINKS } from "../../lib/constants.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AlignRight, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    setActiveHash(window.location.hash);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between text-light-blue transition-colors duration-300 ${
        scrolled ? "bg-deep-navy shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <Image
          src="/images/new-logo.png"
          alt="Artic Travel Logo"
          width={40}
          height={40}
          className="inline-block rounded-xl mr-1"
        />
        <h2 className="text-xl text-white font-semibold">
          <Link href="/">Artic Travel</Link>
        </h2>
      </div>

      <div className="hidden md:flex md:space-x-8">
        {NAV_LINKS.map((link) => {
          const isContact = link.href.includes("#");

          const isActive = isContact
            ? pathname === "/" && activeHash === "#contact"
            : pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => isContact && setActiveHash("#contact")}
              className={`hover:text-accent-blue transition-colors relative ${
                isActive ? "text-accent-blue font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none flex items-center justify-center"
        >
          {isOpen ? (
            <X className="w-7 h-7" strokeWidth={2} />
          ) : (
            <AlignRight className="w-7 h-7" strokeWidth={2} />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-deep-navy text-light-blue flex flex-col items-center pt-24 space-y-8 md:hidden transition-transform duration-300 ease-in-out -z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {NAV_LINKS.map((link) => {
          const isContact = link.href.includes("#");

          const isActive = isContact
            ? pathname === "/" && activeHash === "#contact"
            : pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xl hover:text-accent-blue transition-colors relative ${
                isActive ? "text-accent-blue font-semibold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                if (isContact) {
                  setActiveHash("#contact");
                }
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
