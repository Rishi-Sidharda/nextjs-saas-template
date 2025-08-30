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

  async function actionButton(planTitle: any, billingCycle: any) {
    if (!user) {
      router.push("/login");
      return;
    }

    if (billingCycle == "yearly") {
      if (planTitle == "Starter") {
        alert("Starter Yearly");
      } else if (planTitle == "Pro") {
        alert("Pro Yearly");
      } else if (planTitle == "Ultra") {
        alert("Ultra Yearly");
      }
    } else if (billingCycle == "monthly") {
      if (planTitle == "Starter") {
        alert("Starter Monthly");
      } else if (planTitle == "Pro") {
        alert("Pro Monthly");
      } else if (planTitle == "Ultra") {
        alert("Ultra Monthly");
      }
    }
  }

  return (
    <div className="bg-white">
      <PricingTableOne
        plans={plans}
        className="w-full max-w-4xl mx-auto"
        title={`We offer ${plans.length} plans`}
        description="Choose the plan that's right for you"
        onPlanSelect={(planTitle, billingCycle) =>
          actionButton(planTitle, billingCycle)
        }
        size="medium" // small, medium, large
        theme="classic" // minimal or clas
        // sic
      />
    </div>
  );
}
