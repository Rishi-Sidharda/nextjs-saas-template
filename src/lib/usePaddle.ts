"use client";

import { useEffect, useState } from "react";
import { Paddle, initializePaddle } from "@paddle/paddle-js";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";

export function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle>();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    initializePaddle({
      environment: "sandbox", // change to 'production' in live mode
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
    }).then((p) => setPaddle(p));
  }, []);

  const openCheckout = ({
    priceId,
    successUrl = "",
    plan,
  }: {
    priceId: string;
    successUrl?: string;
    plan: string;
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
      customData: { firebaseUserId: user?.uid, plan: plan },
    });
  };

  return { paddle, openCheckout };
}
