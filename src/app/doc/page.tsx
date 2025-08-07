'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Vault", href: "/vault" },
  { name: "Point", href: "/point" },
  { name: "Doc", href: "/doc" },
];

export default function PoointPage() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#1a1a1a] bg-opacity-90 text-white flex items-center justify-between px-8 py-4 z-10 shadow-lg border-b border-[#2a2a2a] backdrop-blur-sm">
        <div className="flex items-center gap-20">
          <div className="text-2xl font-extrabold text-[#f59e0b] tracking-widest drop-shadow-[0_0_4px_#f59e0b]">
            VAULTION
          </div>

          <nav className="flex items-center gap-12">
            {navItems.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  className={`font-bold transition-transform duration-300 hover:text-[#f59e0b] hover:drop-shadow-[0_0_4px_#f59e0b] hover:scale-105 ${
                    isActive
                      ? "text-[#f59e0b] drop-shadow-[0_0_4px_#f59e0b]"
                      : "text-gray-300"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-x-4">
          <a
            href="https://app-v4.glyph.exchange/swap"
            className="font-bold px-4 py-2 rounded-full bg-[#222] hover:bg-[#f59e0b] text-[#f59e0b] hover:text-white shadow-inner transition duration-300"
          >
            Swap on Glyph
          </a>
          <button
            id="connect-wallet"
            className="font-bold px-4 py-2 rounded-full bg-[#222] hover:bg-[#f59e0b] text-[#f59e0b] hover:text-white shadow-inner transition duration-300"
          >
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-28 px-8">
        <h1 className="text-4xl font-bold text-[#f59e0b] mb-4">Vault Page</h1>
        <p className="text-gray-300">This is the vault page content area.</p>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 p-6 border-t border-[#2a2a2a] w-full mt-auto backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {[
              { name: "Discord", src: "/icon/discord.png", link: "#" },
              { name: "Facebook", src: "/icon/facebook.png", link: "#" },
              { name: "X", src: "/icon/x.png", link: "#" },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                className="flex items-center gap-2 hover:opacity-80 transition duration-300"
              >
                <img
                  src={platform.src}
                  alt={platform.name}
                  width={20}
                  height={20}
                  className="filter-none"
                />
                <span>{platform.name}</span>
              </a>
            ))}
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#f59e0b] transition duration-300">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#f59e0b] transition duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500">
          © 2025 by TrackPlate. Powered and secured by Wikx
        </p>
      </footer>
    </div>
  );
}
