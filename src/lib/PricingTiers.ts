import {
  FreeID,
  FreeMonthlyID,
  FreeYearlyID,
  ProID,
  ProMonthlyID,
  ProYearlyID,
  UltraID,
  UltraMonthlyID,
  UltraYearlyID,
  UnlimitedID,
  UnlimitedMonthlyID,
  UnlimitedYearlyID,
} from "./config";

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

export interface PricingTier {
  name: string;
  id: string;
  price: Record<string, number | string>;
  description: string;
  features: string[];
  cta: string;
  monthlyID: string;
  yearlyID: string;
  highlighted?: boolean;
  popular?: boolean;
}

export const TIERS: PricingTier[] = [
  {
    id: FreeID,
    name: "Free",
    monthlyID: FreeMonthlyID,
    yearlyID: FreeYearlyID,
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "For your hobby projects",
    features: [
      "Free email alerts",
      "3-minute checks",
      "Automatic data enrichment",
      "10 monitors",
      "Up to 3 seats",
    ],
    cta: "Get started",
  },
  {
    id: ProID,
    name: "Pro",
    monthlyID: ProMonthlyID,
    yearlyID: ProYearlyID,
    price: {
      monthly: 12,
      yearly: 120,
    },
    description: "Great for small businesses",
    features: [
      "Unlimited phone calls",
      "30 second checks",
      "Single-user account",
      "20 monitors",
      "Up to 6 seats",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    id: UltraID,
    name: "Ultra",
    monthlyID: UltraMonthlyID,
    yearlyID: UltraYearlyID,
    price: {
      monthly: 25,
      yearly: 250,
    },
    description: "Great for large businesses",
    features: [
      "Unlimited phone calls",
      "15 second checks",
      "Single-user account",
      "50 monitors",
      "Up to 10 seats",
    ],
    cta: "Get started",
  },
  {
    id: UnlimitedID,
    name: "Unlimited",
    monthlyID: UnlimitedMonthlyID,
    yearlyID: UnlimitedYearlyID,
    price: {
      monthly: 60,
      yearly: 600,
    },
    description: "For multiple teams",
    features: [
      "Everything in Organizations",
      "Up to 5 team members",
      "100 monitors",
      "15 status pages",
      "200+ integrations",
    ],
    cta: "Get started",
    highlighted: true,
  },
];
