import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Hero from "../components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";

export default function Home() {
  return (
    <div className="p-5 sm:p-10 md:p-20">
      <Hero />
      <SearchInput />
    </div>
  );
}
