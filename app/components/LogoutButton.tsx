"use client";

import next from "next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();

  const logout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });
    const data = await res.json();
    toast.success(data.message);
    router.replace("/login");
  };

  return (
    <button onClick={logout} className="text-lg">
      Logout
    </button>
  );
};

export default LogoutButton;
