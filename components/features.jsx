export default function Features() {
  return (
    <div>
      <section className="flex flex-col space-y-4 m-6">
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
