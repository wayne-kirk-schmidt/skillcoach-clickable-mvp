import {useState} from "react";
import signInImg from './signin.png'

const SignInSignUp = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 flex min-h-screen items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
                {/* Left Side - Illustration */}
                <div className="hidden md:block w-1/2 relative">
                    <img
                        src={signInImg}
                        alt="Sign In"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                {/* Right Side - Sign In/Sign Up Form */}
                <div className="w-full md:w-1/2 p-8">
                    {/* Tabs for Sign In / Sign Up */}
                    <div className="flex justify-between mb-6">
                        <button
                            className={`text-lg font-semibold ${isSignIn ? 'border-b-2 border-[#68DAE4]' : ''}`}
                            onClick={() => setIsSignIn(true)}
                        >
                            Sign In
                        </button>
                        <button
                            className={`text-lg font-semibold ${!isSignIn ? 'border-b-2 border-[#68DAE4]' : ''}`}
                            onClick={() => setIsSignIn(false)}
                        >
                            Sign Up
                        </button>
                    </div>

                    {isSignIn ? (
                        /* Sign In Form */
                        <>
                            <div
                                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg w-full mb-4 flex items-center justify-center">
                                Continue with either the below
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"/>
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"/>
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"/>
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"/>
                                    </svg>
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 23 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 11H0V0H11V11Z" fill="#F25022"/>
                                        <path d="M23 11H12V0H23V11Z" fill="#7FBA00"/>
                                        <path d="M11 23H0V12H11V23Z" fill="#00A4EF"/>
                                        <path d="M23 23H12V12H23V23Z" fill="#FFB900"/>
                                    </svg>
                                    Microsoft
                                </button>
                            </div>

                            <div className="flex items-center justify-center my-4">
                                <span className="border-b w-1/4"></span>
                                <span className="text-gray-500 mx-2">or</span>
                                <span className="border-b w-1/4"></span>
                            </div>

                            <input
                                type="email"
                                placeholder="Email address"
                                className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                            />

                            <button className="bg-[#68DAE4] text-white py-2 px-4 rounded-lg w-full font-bold" >
                                Sign In
                            </button>

                            <div className="text-center mt-4">
                                <span className="text-gray-500">Don't have an account?</span>
                                <button
                                    className="text-blue-500 ml-2"
                                    onClick={() => setIsSignIn(false)}
                                >
                                    Sign up
                                </button>
                            </div>
                        </>
                    ) : (
                        /* Sign Up Form */
                        <>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                            />
                            <select
                                className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                                defaultValue=""
                            >
                                <option value="" disabled>Country</option>
                                <option value="us">United States</option>
                                <option value="ca">Japan</option>
                                <option value="uk">Singapore</option>
                                <option value="au">Australia</option>
                                {/* Add more countries as needed */}
                            </select>

                            <button className="bg-[#68DAE4] text-white py-2 px-4 rounded-lg w-full font-bold">
                                Sign Up
                            </button>

                            <div className="text-center mt-4">
                                <span className="text-gray-500">Already have an account?</span>
                                <button
                                    className="text-blue-500 ml-2"
                                    onClick={() => setIsSignIn(true)}
                                >
                                    Sign in
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignInSignUp;