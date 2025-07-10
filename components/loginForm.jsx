import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  return (
    <>
      <form
        action=""
        className="w-[50%] flex flex-col items-center space-y-6 justify-center text-main"
      >
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <span className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input type="email" id="email" placeholder="m@example.com" />
        </span>
        <span className="flex flex-col">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input type="password" id="password" />
          <p className="text-right text-sm">Forgot Password?</p>
        </span>
        <span className="flex flex-col items-center space-y-1">
          <button className="bg-main font-medium text-white duration-100 hover:bg-second">
            Login
          </button>
          <p className="text-md">
            Don't have an account? <span className="font-medium">Register</span>
          </p>
          <span>or</span>
          <button className="border flex justify-center gap-2 items-center hover:border-second hover:text-second">
            <FcGoogle />
            Continue with Google
          </button>
        </span>
      </form>
    </>
  );
}
