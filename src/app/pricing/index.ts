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
    id: "free",
    name: "Free",
    monthlyID: "NA",
    yearlyID: "NA",
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
    id: "pro_01k26wtb9v2d0gszsn2nx5hxyd",
    name: "Pro",
    monthlyID: "pri_01k26wv5pasere9xfamzwap1r8",
    price: {
      monthly: 12,
      yearly: 120,
    },
    yearlyID: "pri_01k276j857kp145kq47beybf64",
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
    monthlyID: "pri_01k2a53bkaryz39vm410fw1pfj",
    price: {
      monthly: 25,
      yearly: 250,
    },
    yearlyID: "pri_01k2a5412w1ccxqqk8b1tbta60",
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
    monthlyID: "pri_01k2a55ec2bpd1yzrpbbsyx72j",
    price: {
      monthly: 60,
      yearly: 600,
    },
    yearlyID: "pri_01k2a55spb0xrc7hxw3fq3w9p4",
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
