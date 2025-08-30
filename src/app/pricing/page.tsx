"use client";

import { useState } from "react";
import { plans } from "./plans-config";
import { PricingTableTwo } from "@/components/billingsdk/pricing-table-two";

export default function Pricing() {
  const [isAnnually, setIsAnnually] = useState(false);

  return (
    <div className="bg-white">
      <PricingTableTwo
        plans={plans}
        className="w-full max-w-4xl mx-auto"
        title={`We offer ${plans.length} plans`}
        description="Choose the plan that's right for you"
        onPlanSelect={(planId, billingCycle) => alert(billingCycle)}
        size="small" // small, medium, large
        theme="classic" // minimal or clas
        // sic
      />
    </div>
  );
}
