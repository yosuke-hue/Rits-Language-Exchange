import { PrismaClient } from "@prisma/client/extension";
import BBSCardlist from "./components/BBSCardlist";
import prisma from "@/lib/prismaClient";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store", 
  });

  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
  
}


export default async function Home() {
  const bbsAllData = await getBBSAllData();
  return (
    <main>
      <BBSCardlist bbsAllData={bbsAllData}/>
    </main>
  );
}
