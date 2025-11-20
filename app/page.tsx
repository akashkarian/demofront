"use client";

import { useAuth } from "@/contexts/auth-context";
import Sidebar from "@/components/sidebar";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="flex h-full">
      <Sidebar user={user} />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1600px] mx-auto p-8">
          {/* Dashboard content will go here */}
        </div>
      </div>
    </div>
  );
}
