"use client";

import { AdminPosView } from "@/components/admin/AdminPosView";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-pearl-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <AdminPosView />
      </div>
    </main>
  );
}
