import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (

      <main className=" relative flex min-h-screen bg-[#edf4ff] justify-center items-center  p-24">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#0744d3] mb-4">
            Meme Search
          </h2>
          <Search />
        </div>
        <div className="absolute end-6 bottom-4">@Memes</div>
      </main>
  );
}
