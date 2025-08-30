"use client";

import { useState } from "react";
import { plans } from "./plans-config";
import { PricingTableTwo } from "@/components/billingsdk/pricing-table-two";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import router from "next/router";

export default function Pricing() {
  const [user, loading] = useAuthState(auth);

  function actionButton(planId: any, billingCycle: any) {
    if (user) {
      alert(planId);
      alert(billingCycle);
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="bg-white">
      <PricingTableTwo
        plans={plans}
        className="w-full max-w-4xl mx-auto"
        title={`We offer ${plans.length} plans`}
        description="Choose the plan that's right for you"
        onPlanSelect={(planId, billingCycle) =>
          actionButton(planId, billingCycle)
        }
        size="small" // small, medium, large
        theme="classic" // minimal or clas
        // sic
      />
    </div>
  );
}
