import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { Icon: FaXTwitter, href: "https://twitter.com" },
    { Icon: FaFacebook, href: "https://facebook.com" },
    { Icon: FaInstagram, href: "https://instagram.com" },
    { Icon: FaTiktok, href: "https://tiktok.com" },
  ];

  return (
    <div className="bg-deep-navy text-white px-6 py-10 text-center">
      {/* Logo & Brand */}
      <div className="text-2xl font-bold pb-8 flex items-center justify-center">
        <Image
          src="/images/new-logo.png"
          alt="Artic Travel Logo"
          width={40}
          height={40}
          className="inline-block mr-3"
        />
        <h2>Artic Travel</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-5xl mx-auto">
        <div>
          <h2 className="md:text-lg text-base font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/regions"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Regions
              </Link>
            </li>
            <li>
              <Link
                href="/lodging"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Lodging
              </Link>
            </li>
            <li>
              <Link
                href="/resorts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Resorts
              </Link>
            </li>
            <li>
              <Link
                href="/passes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Passes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="md:text-lg text-base font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Travel Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Press & Media
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="md:text-lg text-base font-semibold mb-4">Policies</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="md:text-lg text-base font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/help"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-accent-blue transition-colors text-sm"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:hidden pt-4">
          <ul className="flex space-x-6 justify-center">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors"
                >
                  <social.Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10  gap-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        <p className="text-sm text-gray-300 text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Artic, Inc., an Artic Group company.
          All rights reserved. Artic and the Artic Logo are trademarks or
          registered trademarks of Artic, Inc.
        </p>

        <ul className="hidden md:flex space-x-6">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-blue transition-colors"
              >
                <social.Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
