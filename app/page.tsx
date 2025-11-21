"use client";

import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Search as SearchIcon, Calendar, Users, LogOut, ArrowUp, Plus, Mic } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Daily Reports", href: "/daily-reports", icon: Calendar },
    { name: "Team", href: "/team", icon: Users },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <div className="flex h-screen bg-white" style={{ margin: 0, padding: 0, border: 'none' }}>
      {/* Light grey bubble nav bar - completely isolated */}
      <div className="p-6" style={{ border: 'none' }}>
        <div className="w-64 rounded-3xl flex flex-col relative" style={{ backgroundColor: '#E3E4EA', border: 'none', boxShadow: 'none', height: 'calc(100vh - 48px)' }}>
          <div className="p-6 flex-1 flex flex-col">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/">
              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <img src="/highforce-logo-cropped.png" alt="HighForce" className="h-16 w-auto" style={{ objectFit: 'contain', objectPosition: 'left center' }} />
              </div>
            </Link>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            {pathname === "/search" && (
              <div className="absolute top-1/2 -translate-y-1/2 w-1 rounded-r-full z-10" style={{ left: '-20px', height: '34px', backgroundColor: '#2c8492' }} />
            )}
            <button
              onClick={() => router.push("/search")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal ${
                pathname === "/search"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-700 hover:bg-white/50"
              }`}
            >
              <SearchIcon className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <div className="relative mb-3">
                    {isActive && (
                      <div className="absolute top-1/2 -translate-y-1/2 w-1 rounded-r-full z-10" style={{ left: '-20px', height: '34px', backgroundColor: '#2c8492' }} />
                    )}
                    <button
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal ${
                        isActive
                          ? "bg-white text-gray-800 shadow-sm"
                          : "text-gray-700 hover:bg-white/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </button>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="mt-auto">
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-700 text-xs font-medium">
                  {user?.email?.[0]?.toUpperCase() || "U"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-light truncate text-gray-800">
                  {user?.user_metadata?.name || user?.email?.split("@")[0] || "User"}
                </p>
                <p className="text-xs text-gray-600 font-light">Admin</p>
              </div>
            </div>

            <button
              onClick={() => signOut()}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white/50 rounded-xl text-sm font-normal"
            >
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Main content area with search bar at bottom */}
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1"></div>

        {/* Search Bar at Bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center px-8">
          <div className="w-full max-w-3xl">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <div className="relative bg-white/95 backdrop-blur-xl rounded-full border border-gray-300" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div className="flex items-center gap-3 pl-4 pr-6 py-3">
                    <button
                      type="button"
                      className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-200"
                    >
                      <Plus className="h-6 w-6 text-gray-600" style={{ strokeWidth: 1.7 }} />
                    </button>
                    <textarea
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = Math.min(target.scrollHeight, 400) + 'px';
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSearchSubmit(e);
                        }
                      }}
                      placeholder="Ask me anything..."
                      className="flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-400 text-sm resize-none max-h-[400px] overflow-y-auto"
                      rows={1}
                      style={{ height: '20px', lineHeight: '20px' }}
                    />
                    <button
                      type="button"
                      className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-200"
                    >
                      <Mic className="h-5 w-5 text-gray-600" />
                    </button>
                    <button
                      type="submit"
                      disabled={!searchInput.trim()}
                      className="w-10 h-10 flex-shrink-0 rounded-full text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                      style={{ backgroundColor: '#2c8492' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#258290'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2c8492'}
                    >
                      <ArrowUp className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
