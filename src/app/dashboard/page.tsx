"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [plan, setPlan] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
    if (user) {
      getDoc(doc(db, "users", user.uid)).then((docSnap) => {
        if (docSnap.exists()) setPlan(docSnap.data().plan);
      });
    }
  }, [user, loading]);

  const logout = async () => {
    await auth.signOut();
    router.push("/login");
  };

  if (loading || !user) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <p>
        Plan: <strong>{plan}</strong>
      </p>
      <Button
        className="mt-4 bg-gray-800 text-white px-4 py-2"
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
}
