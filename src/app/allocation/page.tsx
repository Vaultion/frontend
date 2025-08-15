'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Vault", href: "/vault" },
  { name: "Allocation", href: "/allocation" },
  { name: "Doc", href: "/doc" },
];

export default function AllocationPage() {
  const pathname = usePathname();
  const [sendToAnother, setSendToAnother] = useState(false);

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
<main className="flex-grow flex items-center justify-center px-4 pt-36 pb-10">
  <div className="w-full max-w-lg space-y-4">
    {/* Judul dan Deskripsi DI LUAR border dan padding */}
    <div>
      <h1 className="text-3xl font-bold text-[#f59e0b]">Bridge</h1>
      <p className="text-gray-400 text-sm">
        Send LBTC across blockchain networks, based on the bridging security standards of Vaultion.
      </p>
    </div>

    {/* Card utama */}
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-md p-6 md:p-8 space-y-6">
      {/* FROM - TO */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-4">
          <label className="block text-sm text-gray-400 mb-2">From</label>
          <select className="w-full bg-white text-black border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f59e0b]">
            <option value="usdt">USDT</option>
            <option value="usdc">USDC</option>
          </select>
        </div>
        <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-4">
          <label className="block text-sm text-gray-400 mb-2">To</label>
          <select className="w-full bg-white text-black border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f59e0b]">
            <option value="usdt">USDT</option>
            <option value="usdc">USDC</option> {/* Opsi tambahan */}
          </select>
        </div>
      </div>

      {/* AMOUNT */}
      <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-4">
        <label className="block text-sm text-gray-400 mb-2">Amount</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="0"
            className="flex-grow bg-transparent border border-gray-600 text-white p-2 rounded-md"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Balance: 0 LBTC</p>
      </div>

      {/* TOGGLE SEND TO OTHER ADDRESS */}
      <div className="flex items-center justify-between bg-[#111] border border-[#2a2a2a] rounded-lg p-4">
        <span className="text-gray-300 font-medium text-sm">Send to another address</span>
        <button
          onClick={() => setSendToAnother(!sendToAnother)}
          className={`w-12 h-6 rounded-full transition duration-300 ${
            sendToAnother ? 'bg-[#f59e0b]' : 'bg-gray-700'
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
              sendToAnother ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* INFO BOX */}
      <div className="text-sm text-gray-400 bg-[#111] border border-[#2a2a2a] p-4 rounded-lg flex gap-2 items-start">
        <span className="text-[#f59e0b] text-lg"></span>
        <p>
          All staking activities are fully transparent and traceable between BTC &amp; LBTC — Full details available in{' '}
          <a href="#" className="underline hover:text-[#f59e0b]">our docs</a>.
        </p>
      </div>

      {/* CONTINUE BUTTON */}
      <button className="w-full py-3 bg-[#f59e0b] text-black font-bold rounded-full hover:brightness-110 transition">
        Continue
      </button>
    </div>
  </div>
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