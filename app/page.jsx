import LoginForm from "@/components/loginForm";

export default function Home() {
  return (
    <main className="flex">
      <header className="w-[50%] flex flex-col space-y-10 justify-center bg-main p-6">
        <h1 className="text-3xl font-semibold text-white underline underline-offset-8">
          SoloNest
        </h1>
        <div className="bg-main px-10 py-16 rounded-xl text-gray-100 flex flex-col space-y-12">
          <span className="flex flex-col space-y-3">
            <h1 className="text-7xl font-medium">Welcome to SoloNest!</h1>
            <p className="text-lg">Plan better. Spend smarter. Live lighter.</p>
          </span>
          <ul className="text-xl flex flex-col space-y-2">
            <li>✅ Weekly meal planning made simple</li>
            <li>✅ Track expenses effortlessly </li>
            <li>✅ Reflect and recharge with self-care journaling</li>
          </ul>
          <p className=" text-main flex justify-end">
            <span className="bg-white px-5 text-lg py-2 font-semibold rounded-xl">
              Get Started &rarr;
            </span>
          </p>
        </div>
      </header>
      <LoginForm />
    </main>
  );
}
