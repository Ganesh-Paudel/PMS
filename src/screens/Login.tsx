import React, {useState} from 'react'
import { Eye, EyeOff } from 'lucide-react';

export default function Login(){
	const [showPassword, setShowPassword] = useState(false);

	return(
        <div className="flex items-center justify-center min-h-screen">
              <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">PMS Login</h1>
                
                <form className="space-y-4">
                  {/* Username Field */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                  </div>

                  {/* Login Button */}
                  <button className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Login
                  </button>
                </form>

                {/* Create Account Option */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <button className="font-semibold text-blue-600 hover:underline">
                      Create New Account
                    </button>
                  </p>
                </div>
              </div>
            </div>
	)
}
