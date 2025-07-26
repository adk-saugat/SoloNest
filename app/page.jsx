import Features from "@/components/features";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
      <Features />
    </div>
  );
}
