import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="space-y-6 flex flex-col">
      <nav>
        <h1 className="font-semibold text-3xl">SoloNest</h1>
      </nav>
      <Hero />
      <Features />
    </div>
  );
}
