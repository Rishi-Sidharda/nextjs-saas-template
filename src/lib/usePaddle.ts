"use client";

import { useEffect, useState } from "react";
import { Paddle, initializePaddle } from "@paddle/paddle-js";

export function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    initializePaddle({
      environment: "sandbox", // change to 'production' in live mode
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
    }).then((p) => setPaddle(p));
  }, []);

  const openCheckout = ({
    priceId,
    successUrl = "http://localhost:3000/dashboard",
  }: {
    priceId: string;
    successUrl?: string;
  }) => {
    if (!paddle) {
      alert("Paddle not initialized yet.");
      return;
    }

    paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        successUrl,
      },
    });
  };

  return { paddle, openCheckout };
}
