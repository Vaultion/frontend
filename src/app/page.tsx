"use client";

import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from "next/image";

const features = [
  {
    title: "Transparency",
    content:
      "Unlike some of its counterparts, as a quality yield aggregator, Corepound stands out with greater transparency. Our frontend is seamlessly synchronized with on-chain data, keeping users informed at all times. Rewards such as points, their calculation rules are made explicit. All performance fees are included in the APY with no hidden catch.",
    side: "left",
  },
  {
    title: "Sustainability",
    content:
      "Corepound incorporates a unique burning mechanism known as CoreChest, combined with a dynamic point system. This creates a constant deflationary effect on circulation, preserving long-term value for users and the overall ecosystem.",
    side: "right",
  },
  {
    title: "Easy Allocation",
    content:
      "Corepound simplifies the process of allocating your assets across various vaults. With an intuitive interface and smart contract integrations, users can easily deposit, withdraw, or rebalance their positions without complex steps or technical barriers.",
    side: "left",
  },
];

const Home = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Vault", href: "/vault" },
    { name: "Allocation", href: "/allocation" },
    { name: "Doc", href: "/doc" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-gray-200 font-sans">
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

      {/* Main */}
      <main className="flex-grow pt-32 px-4 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#f59e0b] drop-shadow-[0_0_2px_#f59e0b]">
            Welcome to VAULTION
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            A secure and stylish decentralized vault for the future.
          </p>
        </div>

        {/* Step Carousel */}
        <div className="w-full max-w-3xl px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            className="rounded-xl bg-[#1a1a1a] shadow-lg border border-[#2a2a2a]"
          >
            {["Connect your wallet securely via the Connect Wallet button.",
              "Navigate to the Vault tab to create or manage your storage.",
              "Use Point system to track your vault interactions.",
              "View and share your documents from the Doc section.",
            ].map((desc, i) => (
              <SwiperSlide key={i}>
                <div className="p-8 text-center">
                  <h2 className="text-3xl font-bold text-[#f59e0b] mb-4">
                    Step {i + 1}
                  </h2>
                  <p className="text-gray-300 text-lg">{desc}</p>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="p-8 text-center flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-[#f59e0b] mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Start securing your assets with Vaultion today.
                </p>
                <a
                  href="/vault"
                  className="inline-block px-6 py-3 rounded-full bg-[#f59e0b] text-[#1a1a1a] font-bold hover:bg-[#e69c07] transition duration-300"
                >
                  Get Started
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>

      {/* Vaultion Features */}
      <section className="w-full max-w-6xl mx-auto mt-20 flex flex-col gap-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-orange-400 drop-shadow-lg">
            Vaultion Features
          </h2>
        </div>

        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className={`
              flex flex-col md:flex-row ${item.side === 'right' ? 'md:flex-row-reverse' : ''}
              items-center md:justify-between gap-8 md:gap-12
              bg-[#1a1a1a] shadow-xl rounded-3xl border border-orange-500/30 backdrop-blur
              py-16 md:px-20 px-6
            `}
          >
            <div className="md:w-1/2">
              <h3 className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-4 drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.content}
              </p>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </motion.div>
        ))}
      </section>

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
};

export default Home;
