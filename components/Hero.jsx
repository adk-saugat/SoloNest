export default function Hero() {
  return (
    <header className="flex flex-col space-y-10 bg-main p-6 rounded-xl">
      <h1 className="text-3xl font-semibold text-white">SoloNest</h1>
      <div className="bg-main px-6 py-16 rounded-xl text-gray-100 flex flex-col space-y-12">
        <span className="flex flex-col space-y-3">
          <h1 className="text-7xl font-medium">Welcome to SoloNest!</h1>
          <p>Plan better. Spend smarter. Live lighter.</p>
        </span>
        <ul className="text-xl flex flex-col space-y-2">
          <li>✅ Weekly meal planning made simple</li>
          <li>✅ Track expenses effortlessly </li>
          <li>✅ Reflect and recharge with self-care journaling</li>
        </ul>
        <p className=" text-main flex justify-end">
          <span className="bg-white px-5 py-2 font-semibold rounded-xl">
            Get Started &rarr;
          </span>
        </p>
      </div>
    </header>
  );
}
