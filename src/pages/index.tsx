import { UserSearchForm } from "@/components/UserSearchForm";
import { UserSearchResult } from "@/components/UserSearchResult";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Search top 5 users on Github</title>
      </Head>
      <main
        className={`w-full bg-slate-100 text-slate-900 text-md ${inter.className}`}
      >
        <div className="flex flex-col gap-4 p-4 min-h-screen max-w-md mx-auto bg-white">
          <h2 className="font-bold text-lg">Search top 5 Users on GitHub</h2>
          <UserSearchForm />

          <UserSearchResult />
        </div>
      </main>
    </>
  );
}
