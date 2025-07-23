import { FcGoogle } from "react-icons/fc";

export default function () {
  return (
    <div className="space-y-6 flex flex-col">
      <nav>
        <h1 className="font-semibold text-3xl">SoloNest</h1>
      </nav>
      <header className="bg-darkgray rounded-xl text-white p-6 py-20 flex flex-col items-center space-y-6">
        <p className="flex flex-col items-center space-y-2">
          <span className="text-5xl font-semibold">
            🏡 Live Simply, Live Smart
          </span>
          <span className="text-xl">
            Manage your meals, expenses, and tasks easily.
          </span>
        </p>
        <button className="border py-2 px-5 rounded-xl flex items-center gap-2 cursor-pointer duration-100 hover:bg-white hover:text-darkgray hover:shadow-xl">
          <FcGoogle size={20} />
          <span className="text-lg">Sign in with Google</span>
        </button>
      </header>
      <section className="flex flex-col space-y-4">
        <p className="text-3xl font-semibold">Features Preview</p>
        <ul className="text-xl grid grid-cols-2 gap-4">
          <li className="basis-[50%] bg-lightgray shadow-2xs p-8 rounded-xl">
            ✅ Plan meals with your ingredients
          </li>
          <li className="basis-[50%] bg-lightgray shadow-2xs p-8 rounded-xl">
            ✅ Track your weekly spending{" "}
          </li>
          <li className="basis-[50%] bg-lightgray shadow-2xs p-8 rounded-xl">
            ✅ Stay on top of your tasks{" "}
          </li>
          <li className="basis-[50%] bg-lightgray shadow-2xs p-8 rounded-xl">
            ✅ Light social sharing with locals
          </li>
        </ul>
      </section>
    </div>
  );
}
