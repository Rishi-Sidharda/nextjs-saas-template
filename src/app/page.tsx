import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="space-x-10">
          <Button>
            <Link href={"dashboard"}>Dashboard</Link>
          </Button>
          <Button>
            <Link href={"pricing"}>Pricing</Link>
          </Button>
        </div>
        <div className="space-x-10">
          <Button>
            <Link href={"login"}>Sign in</Link>
          </Button>
          <Button>
            <Link href={"signup"}>Sign up</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
