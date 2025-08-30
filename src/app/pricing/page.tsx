"use client";

import { useState } from "react";
import { plans } from "./plans-config";
import { PricingTableOne } from "@/components/billingsdk/pricing-table-one";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  async function actionButton(planId: any, billingCycle: any) {
    if (!user) {
      router.push("/login");
      return;
    }
  }

  return (
    <div className="bg-white">
      <PricingTableOne
        plans={plans}
        className="w-full max-w-4xl mx-auto"
        title={`We offer ${plans.length} plans`}
        description="Choose the plan that's right for you"
        onPlanSelect={(planId, billingCycle) => alert(billingCycle)}
        size="medium" // small, medium, large
        theme="classic" // minimal or clas
        // sic
      />
    </div>
  );
}
