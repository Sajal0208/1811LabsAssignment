import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { ToolsSection } from "@/components/ToolSection";
import { Footer } from "@/components/Footer";
import { redirect, useRouter } from "next/navigation";
import { MainBody } from "@/components/Mainbody";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-x-20 mt-4 items-center">
      <Header user={user} />
      <div className="flex flex-col items-center gap-y-16 mb-10">
        <MainBody />
        <ToolsSection />
        <Footer />
      </div>
    </div>
  );
}

