export const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

export interface PricingTier {
  name: string;
  id: string;
  price: Record<string, number | string>;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  popular?: boolean;
}

export const TIERS: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: {
      monthly: "Free",
      monthlyID: "NA",
      yearly: "Free",
      yearlyID: "NA",
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
    id: "pro_01k26wtb9v2d0gszsn2nx5hxyd",
    name: "Pro",
    price: {
      monthly: 12,
      monthlyID: "PRO MONThly ID",
      yearly: 120,
      yearlyID: "PRO Yearly ID",
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
    id: "ultra",
    name: "Ultra",
    price: {
      monthly: 25,
      monthlyID: "ultra month",
      yearly: 250,
      yearlyID: "ultra yearly",
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
    id: "unlimited",
    name: "Unlimited",
    price: {
      monthly: 60,
      monthlyID: "unlimited month",
      yearly: 600,
      yearlyID: "unlimited year",
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
