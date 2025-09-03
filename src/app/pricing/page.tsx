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

  async function actionButton(planTitle: string, billingCycle: string) {
    if (!user) {
      router.push("/login");
      return;
    }

    let productId: string = "";
    const firebaseUserId = user?.uid

    if (planTitle == "Starter") {
      if (billingCycle == "monthly") {
        productId = ""; // Starter Monthly Plan ID
      } else if (billingCycle == "yearly") {
        productId = ""; // Starter Monthly Plan ID
      }
    } else if (planTitle == "Pro") {
      if (billingCycle == "monthly") {
        productId = "pdt_4rfLKf9G2xYhvvWH2bRPr"; // Starter Monthly Plan ID
      } else if (billingCycle == "yearly") {
        productId = "pdt_QNk75gweEsCco7vKDR3Xz"; // Starter Monthly Plan ID
      }
    } else if (planTitle == "Ultra") {
      if (billingCycle == "monthly") {
        productId = "pdt_QngqSeYMe0BaG7eBC02TQ"; // Starter Monthly Plan ID
      } else if (billingCycle == "yearly") {
        productId = "pdt_cNWNQJDmTFbKxobsGxI5a"; // Starter Monthly Plan ID
      }
    }

    let productType = "subscription";
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/${productType}?productId=${productId}`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();
    router.push(data.payment_link);
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
