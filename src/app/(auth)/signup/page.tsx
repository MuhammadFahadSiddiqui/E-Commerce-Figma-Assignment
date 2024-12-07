import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc"; // Import the Google icon
import loginImg from "../../../../public/images/login_side_mage.png";

function page() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] mt-12 mb-20 px-6 lg:px-24">
      {/* Login Image */}
      <Image
        className="w-full max-w-md lg:max-w-[650px] mx-auto lg:mx-0"
        src={loginImg}
        alt="login image"
      />

      {/* Form Section (Right Side) */}
      <div className="w-full md:w-1/2 md:px-8 md:mx-6 mt-6 md:mt-20 text-center">
        {/* Heading and Subheading */}
        <h2 className="text-2xl md:text-4xl font-medium text-gray-800 mb-2 text-left ">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-left ">
          Enter your details below
        </p>

        {/* Signup Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full sm:w-[250px] md:w-[400px] p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 text-gray-800"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full sm:w-[250px] md:w-[400px] p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 text-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full sm:w-[250px] md:w-[400px] p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 text-gray-800"
          />
        </form>

        {/* Buttons */}
        <div className="mt-6 flex justify-center">
          <button className="w-full sm:w-[200px] md:w-[400px] h-[60px] md:px-14 py-3 text-white rounded bg-[#DB4444] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
            Create Account
          </button>
        </div>

        {/* Google Signup Button */}
        <div className="mt-4 flex justify-center">
          <button className="w-full sm:w-[250px] md:w-[400px] h-[60px] md:px-14 py-3 text-black rounded bg-white hover:bg-gray-100 flex items-center justify-center gap-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
            <FcGoogle size={20} />
            Sign up with Google
          </button>
        </div>

        <Link href="/login">
          {/* Login Link */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Log in
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default page;
