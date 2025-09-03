import { dodopayments } from "../../../../lib/dodopayments";
import { NextResponse } from "next/server";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    if (typeof productId !== "string" || productId.trim() === "") {
      return NextResponse.json(
        { error: "Missing or invalid productId query parameter" },
        { status: 400 }
      );
    }

    const response = await dodopayments.subscriptions.create({
      product_id: productId,
      quantity: 1,
      payment_link: true,
      return_url: process.env.NEXT_PUBLIC_BASE_URL,
      customer: {
        email: "firebase@gmail.com", // empty so user is prompted to fill
        name: "firebase@gmail.com",
      },
      billing: {
        city: "",
        country: "US",
        state: "",
        street: "",
        zipcode: "",
      },
      metadata: {
        firebaseUserId: "firebase User Id",
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create subscription" },
      { status: 500 }
    );
  }
}
