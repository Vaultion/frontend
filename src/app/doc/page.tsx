'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, JSX } from "react"; // Impor JSX untuk tipe konten

// DEFINISI TIPE DATA =======================================================
type DocNavSubItem = {
    name: string;
    id: string;
    icon: string;
    content: JSX.Element;
};

type DocNavItem = {
    name: string;
    id: string;
    icon: string;
    content: JSX.Element;
    items?: DocNavSubItem[];
};


// DATA =======================================================================

const navItems: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Vault", href: "/vault" },
    { name: "Allocation", href: "/allocation" },
    { name: "Doc", href: "/doc" },
];

const docNavItems: DocNavItem[] = [
    {
        name: "Introduction",
        id: "introduction",
        icon: "😀",
        content: (
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>
                    Yield farming has gained traction as an effective way to maximize
                    returns in decentralized finance. Investors are able to earn interest
                    by staking their digital assets in yield aggregators usually with a
                    high-risk and volatile strategy. However, getting the full yields is
                    not easy. A number of users do not have the experience or the time
                    in front of a screen to max out the yield manually. The process
                    becomes more complex when difficulties stand in the way, such as when
                    users are flooded with endless information chanting for higher profits.
                </p>
                <p>
                    Selecting the right yield farming strategy can be really tricky. Users
                    must choose from an overwhelming array of protocols and liquidity
                    pools, each with varying levels of risk and reward. It’s not easy to
                    identify the most profitable and secure opportunities. It’s even more
                    difficult if you are nota a technical expert and do not have a robust
                    understanding of the mechanics of DeFi.
                </p>
                <p>
                    Another issue is to manage yield farming manually. Returns fluctuate
                    frequently across protocols. Many users are frustrated by the
                    time-consuming comparison and moving assets across protocols. Fees
                    occur along with such actions. What’s worse, investors feel anxious
                    because they are driven by the fear that “I might miss out on better
                    yield opportunities by staking in that vault. What if there is a
                    better option? I could have probably got a higher yield if I had done
                    that”. The uneasiness turns into misery when accepting the fact of not getting the optimized yields despite tremendous efforts have
                    been made.
                </p>
            </div>
        ),
        items: [
            {
                name: "Features",
                id: "features",
                icon: "🔥",
                content: <p className="text-gray-300">Ini adalah konten untuk bagian Features. Anda bisa menjelaskan fitur-fitur unggulan dari Vaultion di sini.</p>
            }
        ],
    },
    {
        name: "Strategies",
        id: "strategies",
        icon: "📖",
        content: <p className="text-gray-300">Ini adalah konten utama untuk bagian Strategies. Jelaskan pendekatan strategis yang digunakan oleh Vaultion.</p>,
        items: [
            {
                name: "Lending",
                id: "lending",
                icon: "💰",
                content: <p className="text-gray-300">Konten untuk strategi Lending. Detailkan bagaimana pengguna bisa mendapatkan keuntungan dari lending.</p>
            },
            {
                name: "Liquidity Provision",
                id: "liquidity-provision",
                icon: "💲",
                content: <p className="text-gray-300">Konten untuk strategi Liquidity Provision. Jelaskan mekanisme dan keuntungan menjadi penyedia likuiditas.</p>
            },
            {
                name: "Leverage Farming (TBA)",
                id: "leverage-farming",
                icon: "🐥",
                content: <p className="text-gray-300">Konten untuk strategi Leverage Farming. Bagian ini masih dalam pengembangan (TBA).</p>
            },
        ],
    },
    // ... item lainnya tetap sama
    {
        name: "Ecosystem",
        id: "ecosystem",
        icon: "🌱",
        content: <p className="text-gray-300">Konten untuk Ecosystem. Jelaskan bagaimana Vaultion terintegrasi dengan ekosistem DeFi yang lebih luas.</p>,
    },
    {
        name: "Points System",
        id: "points-system",
        icon: "🌟",
        content: <p className="text-gray-300">Konten untuk Points System. Detailkan bagaimana cara kerja sistem poin dan manfaatnya bagi pengguna.</p>,
    },
    {
        name: "CoreChest",
        id: "corechest",
        icon: "🎁",
        content: <p className="text-gray-300">Konten untuk CoreChest. Jelaskan apa itu CoreChest dan bagaimana pengguna bisa mendapatkannya.</p>,
    },
    {
        name: "Premium Membership (TBA)",
        id: "premium-membership",
        icon: "🐱",
        content: <p className="text-gray-300">Konten untuk Premium Membership. Fitur ini akan segera hadir (TBA).</p>,
    },
    {
        name: "Tokenomics",
        id: "tokenomics",
        icon: "🪙",
        content: <p className="text-gray-300">Konten untuk Tokenomics. Jelaskan tentang token Vaultion, distribusi, dan kegunaannya.</p>,
    },
    {
        name: "Roadmap",
        id: "roadmap",
        icon: "🏗",
        content: <p className="text-gray-300">Konten untuk Roadmap. Tampilkan rencana pengembangan Vaultion untuk masa depan.</p>,
    },
    {
        name: "Fees",
        id: "fees",
        icon: "💲",
        content: <p className="text-gray-300">Konten untuk Fees. Rincikan semua biaya yang terkait dengan penggunaan platform Vaultion.</p>,
    },
    {
        name: "Asset Safety",
        id: "asset-safety",
        icon: "🔒",
        content: <p className="text-gray-300">Konten untuk Asset Safety. Jelaskan langkah-langkah keamanan yang telah diambil untuk melindungi aset pengguna.</p>,
    },
];


// KOMPONEN IKON CHEVRON (SVG) - DIPERBAIKI =============================================
const ChevronIcon = ({ className }: { className: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

// TIPE PROPERTI UNTUK KOMPONEN ====================================================
type SidebarProps = {
    navItems: DocNavItem[];
    onNavItemClick: (item: DocNavItem | DocNavSubItem) => void;
    activeItemId?: string;
};

type MainContentProps = {
    content?: DocNavItem | DocNavSubItem;
};

// KOMPONEN SIDEBAR ============================================================
const Sidebar = ({ navItems, onNavItemClick, activeItemId }: SidebarProps) => {
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({
        introduction: true,
        strategies: true,
    });

    const toggleDropdown = (id: string) => {
        setOpenDropdowns(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <aside className="w-full md:w-64 md:flex-shrink-0 bg-[#1a1a1a] p-4 md:border-r md:border-[#2a2a2a]">
            <nav className="mt-4">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <div
                                onClick={() => {
                                    if (item.items && item.items.length > 0) {
                                        toggleDropdown(item.id);
                                    }
                                    onNavItemClick(item);
                                }}
                                className={`flex w-full items-center justify-between gap-3 py-2 px-3 rounded-lg text-left text-lg font-bold transition duration-200 cursor-pointer hover:bg-[#2a2a2a] ${
                                    activeItemId === item.id ? "text-[#f59e0b]" : "text-gray-300"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                                {item.items && item.items.length > 0 && (
                                <ChevronIcon
                                    className={`transition-transform duration-300 ${
                                        openDropdowns[item.id] ? "rotate-90" : "rotate-0"
                                    }`}
                                />
                                )}
                            </div>
                            {item.items && item.items.length > 0 && openDropdowns[item.id] && (
                                <ul className="mt-2 ml-4 pl-4 border-l border-[#333] space-y-1">
                                    {item.items.map((subItem) => (
                                        <li key={subItem.id}>
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onNavItemClick(subItem);
                                                }}
                                                className={`flex w-full items-center gap-3 py-1 px-2 rounded-md text-sm transition duration-200 cursor-pointer hover:text-white ${
                                                    activeItemId === subItem.id ? "font-bold text-white bg-[#2a2a2a]" : "text-gray-400"
                                                    }`}
                                            >
                                                <span className="text-base">{subItem.icon}</span>
                                                {subItem.name}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};


// KOMPONEN KONTEN UTAMA =======================================================
const MainContent = ({ content }: MainContentProps) => {
    if (!content) {
        return (
            <div className="flex-grow p-8 bg-[#1a1a1a]">
                <p>Pilih item dari menu untuk melihat konten.</p>
            </div>
        );
    }

    return (
        <div className="flex-grow bg-[#1a1a1a] p-8 overflow-y-auto">
            <div className="max-w-4xl w-full mx-auto">
                <div className="flex justify-between items-start mb-8 gap-4">
                    <h1 className="text-4xl font-extrabold text-[#f59e0b]">
                        <span className="mr-3">{content.icon}</span>
                        {content.name}
                    </h1>
                </div>
                {content.content}
            </div>
        </div>
    );
};


// KOMPONEN HALAMAN UTAMA (DocPage) =============================================
export default function DocPage() {
  const [activeContent, setActiveContent] = useState<DocNavItem | DocNavSubItem>(
    docNavItems[0]
  );

  const handleNavItemClick = (item: DocNavItem | DocNavSubItem) => {
    setActiveContent(item);
    window.history.pushState(null, '', `#${item.id}`);
  };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
            <header className="sticky top-0 w-full bg-[#1a1a1a]/80 text-white flex items-center justify-between px-8 py-4 z-20 shadow-lg border-b border-[#2a2a2a] backdrop-blur-sm">
                <div className="flex items-center gap-12">
                    <div className="text-2xl font-extrabold text-[#f59e0b] tracking-widest drop-shadow-[0_0_4px_#f59e0b]">
                        VAULTION
                    </div>
                    <nav className="hidden md:flex items-center gap-12">
                        {navItems.map(({ name, href }) => {
                            const pathname = usePathname();
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

                <div className="hidden md:flex items-center space-x-4">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
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

            <div className="flex flex-col md:flex-row flex-grow">
                <Sidebar
                    navItems={docNavItems}
                    onNavItemClick={handleNavItemClick}
                    activeItemId={activeContent?.id}
                />
                <MainContent content={activeContent} />
            </div>

            <footer className="bg-[#1a1a1a] text-gray-400 p-6 border-t border-[#2a2a2a] w-full mt-auto backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition duration-300">Discord</a>
                        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition duration-300">Facebook</a>
                        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition duration-300">X</a>
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
                    © {new Date().getFullYear()} by Vaultion.
                </p>
            </footer>
        </div>
        );
    }