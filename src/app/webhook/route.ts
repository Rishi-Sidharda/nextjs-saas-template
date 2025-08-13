import { Environment, EventName, Paddle } from "@paddle/paddle-node-sdk";
import { NextResponse } from "next/server";

const paddle = new Paddle(process.env.PADDLE_WEBHOOK_SECRET!, {
  environment: Environment.sandbox,
});

export async function POST(req: Request) {
  const signature = (req.headers.get("paddle-signature") as string) || "";

  const rawRequestBody = (await req.text()) || "";

  const secretKey = process.env.PADDLE_WEBHOOK_SECRET || "";

  try {
    if (signature && rawRequestBody) {
      // The `unmarshal` function will validate the integrity of the webhook and return parsed data
      const eventData = await paddle.webhooks.unmarshal(
        rawRequestBody,
        secretKey,
        signature
      );

      //TODO: do Data base operations
      //database operations
      switch (eventData.eventType) {
        case EventName.ProductUpdated:
          console.log(`Product ${eventData.data.id} was updated`);
          break;
        case EventName.SubscriptionUpdated:
          console.log(`Subscription ${eventData.data.id} was updated`);
          break;
        default:
          console.log(eventData.eventType);
      }
    } else {
      console.log("Signature missing in header");
    }
  } catch (e) {
    // Handle signature mismatch or other runtime errors
    console.log(e);
  }
  NextResponse.json({ ok: true });
}
