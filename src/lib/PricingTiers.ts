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
    id: process.env.NEXT_PUBLIC_PADDLE_FREE_ID!,
    name: "Free",
    monthlyID: process.env.NEXT_PUBLIC_PADDLE_FREE_MONTHLY_ID!,
    yearlyID: process.env.NEXT_PUBLIC_PADDLE_FREE_YEARLY_ID!,
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
    id: process.env.NEXT_PUBLIC_PADDLE_PRO_ID!,
    name: "Pro",
    monthlyID: process.env.NEXT_PUBLIC_PADDLE_PRO_MONTHLY_ID!,
    yearlyID: process.env.NEXT_PUBLIC_PADDLE_PRO_YEARLY_ID!,
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
    id: process.env.NEXT_PUBLIC_PADDLE_ULTRA_ID!,
    name: "Ultra",
    monthlyID: process.env.NEXT_PUBLIC_PADDLE_ULTRA_MONTHLY_ID!,
    yearlyID: process.env.NEXT_PUBLIC_PADDLE_ULTRA_YEARLY_ID!,
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
    id: process.env.NEXT_PUBLIC_PADDLE_UNLIMITED_ID!,
    name: "Unlimited",
    monthlyID: process.env.NEXT_PUBLIC_PADDLE_UNLIMITED_MONTHLY_ID!,
    yearlyID: process.env.NEXT_PUBLIC_PADDLE_UNLIMITED_YEARLY_ID!,
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
