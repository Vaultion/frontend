'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Vault", href: "/vault" },
  { name: "Allocation", href: "/allocation" },
  { name: "Doc", href: "/doc" },
];

const vaults = [
  {
    asset: "CORP",
    icon: "/corp-icon.svg",
    tvl: "$7,137.24",
    apy: "204.56%",
    strategy: "CORP vault compounds yield from staking CORP to maximize returns.",
  },
  {
    asset: "USDT",
    icon: "/usdt-icon.svg",
    tvl: "$39,755.46",
    apy: "36.72%",
    strategy: "USDT vault leverages stablecoin farming strategies for steady APY.",
  },
  {
    asset: "USDC",
    icon: "/usdc-icon.svg",
    tvl: "$28,749.19",
    apy: "50.78%",
    strategy: "USDC vault uses optimized protocols to earn high stable returns.",
  },
];

export default function VaultPage() {
  const pathname = usePathname();
  const [openVault, setOpenVault] = useState<string | null>(null);
  const [activeTransaction, setActiveTransaction] = useState<string | null>(null);
  const [transactionTab, setTransactionTab] = useState<"Deposit" | "Withdraw">("Deposit");

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .fade-in-up {
        animation: fadeInUp 0.4s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white min-h-screen flex flex-col">
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
                  className={`font-bold transition-transform duration-300 hover:text-[#f59e0b] hover:drop-shadow-[0_0_4px_#f59e0b] hover:scale-105 ${isActive ? "text-[#f59e0b] drop-shadow-[0_0_4px_#f59e0b]" : "text-gray-300"}`}
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
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-20 w-full">
        <h1 className="text-3xl font-extrabold mb-2 text-[#f59e0b] drop-shadow-[0_0_6px_#f59e0b] tracking-wide">
          Vaultion Vaults
        </h1>
        <p className="text-gray-400 mb-8">
          Stake in vaults, harvest CORP & Points and hit the ground running
        </p>

        <div
          className="overflow-x-auto rounded-2xl border border-[#2a2a30] shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          style={{ background: "linear-gradient(135deg, #1c1c22, #111114)" }}
        >
          <table className="min-w-full">
            <thead>
              <tr className="text-left border-b border-[#333]">
                <th className="p-5 text-gray-400 font-semibold">Assets</th>
                <th className="p-5 text-gray-400 font-semibold">TVL</th>
                <th className="p-5 text-gray-400 font-semibold">APY</th>
                <th className="p-5 text-gray-400 font-semibold">Earned</th>
                <th className="p-5 text-gray-400 font-semibold">Deposited</th>
                <th className="p-5 text-gray-400 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {vaults.map((vault) => {
                const isOpen = openVault === vault.asset;
                return (
                  <React.Fragment key={vault.asset}>
                    <tr className="border-b border-[#2c2c34] hover:bg-[#222229] transition-colors duration-300">
                      <td className="p-5 flex items-center gap-3">
                        <div className="h-6 w-6 bg-gray-600 rounded-full" />
                        <span className="text-white">{vault.asset}</span>
                      </td>
                      <td className="p-5 text-gray-300">{vault.tvl}</td>
                      <td className="p-5 text-[#f59e0b] font-bold">{vault.apy}</td>
                      <td className="p-5 text-gray-300">$0</td>
                      <td className="p-5 text-gray-300">$0</td>
                      <td className="p-5">
                        <div className="flex gap-3">
                          <button
                            onClick={() =>
                              setOpenVault(openVault === vault.asset ? null : vault.asset)
                            }
                            className={`px-5 py-2 rounded-md font-semibold transition duration-300 ${
                              isOpen
                                ? "bg-[#f59e0b] text-black shadow-md shadow-[#f59e0b]/40"
                                : "bg-[#1f1f26] text-white hover:bg-[#f59e0b] hover:text-black"
                            }`}
                          >
                            More
                          </button>
                          <button
                            onClick={() => {
                              setOpenVault(null);
                              setActiveTransaction(vault.asset);
                              setTransactionTab("Deposit");
                            }}
                            className="px-5 py-2 rounded-md font-semibold transition duration-300 bg-[#1f1f26] text-white hover:bg-[#d97706] hover:text-black hover:shadow-lg"
                          >
                            Start Transaction
                          </button>
                        </div>
                      </td>
                    </tr>
                    {isOpen && (
                      <tr className="fade-in-up">
                        <td colSpan={7} className="bg-[#111114] border-b border-[#2a2a2a] px-6 py-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1c1c22] p-4 rounded-lg shadow-inner border border-[#2c2c34]">
                              <div className="text-sm text-gray-400 mb-2">Performance</div>
                              <div className="h-40 flex items-center justify-center text-gray-500">
                                📊 Chart Coming Soon
                              </div>
                            </div>
                            <div className="bg-[#1c1c22] p-4 rounded-lg shadow-inner border border-[#2c2c34]">
                              <div className="text-sm text-gray-400 mb-2">Strategy</div>
                              <p className="text-gray-300 leading-relaxed">
                                {vault.strategy}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal */}
      {activeTransaction && (
  <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-[#1c1c22] rounded-xl border border-[#333] shadow-xl w-full max-w-md p-6 relative">
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        onClick={() => setActiveTransaction(null)}
      >
        ×
      </button>
      {/* Tabs */}
      <div className="flex mb-4 border-b border-[#333]">
        {["Deposit", "Withdraw"].map((tab) => (
          <button
            key={tab}
            onClick={() => setTransactionTab(tab as "Deposit" | "Withdraw")}
            className={`flex-1 py-2 font-semibold ${
              transactionTab === tab
                ? "text-[#f59e0b] border-b-2 border-[#f59e0b]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Form */}
            <div className="space-y-4">
        <div className="flex items-center gap-3 bg-[#222] rounded-lg px-4 py-3">
          <div className="h-6 w-6 bg-gray-500 rounded-full" />
          <span className="text-white font-bold">{activeTransaction}</span>
        </div>
        <div className="bg-[#222] rounded-lg px-4 py-3 flex items-center justify-between">
          <input
            type="number"
            placeholder="0.0"
            className="bg-transparent outline-none text-2xl font-semibold w-full"
          />
          <button className="text-sm text-[#f59e0b] font-bold">MAX</button>
        </div>
        <button className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold py-3 rounded-lg transition duration-300">
          {transactionTab}
        </button>
        <div className="text-right text-sm text-gray-400">
          Available Balance: 0
        </div>
      </div>
    </div>
  </div>
)}
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
                <img src={platform.src} alt={platform.name} width={20} height={20} />
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
