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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

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
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
        scrolled || isOpen
          ? "bg-deep-navy shadow-md text-white"
          : "bg-transparent text-light-blue"
      }`}
    >
      <div className="flex items-center relative z-50">
        <Image
          src="/images/new-logo.png"
          alt="Artic Travel Logo"
          width={40}
          height={40}
          className="inline-block rounded-xl mr-1"
        />
        <h2 className="text-xl text-white font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Artic Travel
          </Link>
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
              className={`hover:text-accent-blue transition-colors text-medium relative ${
                isActive ? "text-accent-blue text-medium font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="md:hidden relative z-[999]">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 focus:outline-none flex items-center justify-center rounded-lg cursor-pointer touch-manipulation"
        >
          {isOpen ? (
            <X className="w-7 h-7 pointer-events-none" strokeWidth={2.5} />
          ) : (
            <AlignRight
              className="w-7 h-7 pointer-events-none"
              strokeWidth={2.5}
            />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-deep-navy text-light-blue flex flex-col items-center pt-24 space-y-8 md:hidden transition-transform duration-300 ease-in-out z-40 ${
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
