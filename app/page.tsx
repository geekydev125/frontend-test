import Image from "next/image";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/layout/header";
import Activities from "@/components/activities";
import { ToastContainer } from "react-toastify";
import Badges from "@/components/badges";
import CommunityBadges from "@/components/communityBadges";

export default function Home() {
  return (
    <Theme>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        autoClose={2000}
      />
      <main className="bg-[#080A0B] min-h-[100vh]">
        <Header />
        <Activities />
        <Badges />
        <CommunityBadges />
      </main>
    </Theme>
  );
}
