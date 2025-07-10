import Hero from "@/components/Hero";
import LoginForm from "@/components/loginForm";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen px-4">
      <Hero />
      <LoginForm />
    </main>
  );
}
