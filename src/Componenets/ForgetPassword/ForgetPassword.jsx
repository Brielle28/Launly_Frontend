import React, {useState} from 'react'

const ForgetPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
      });

    return (
        <div className="flex min-h-screen bg-blue-50">
          {/* Illustration and Info Container */}
          <div className="w-1/2 flex flex-col justify-center items-center bg-teal-600 px-12 text-white">
            <div className="w-full">
              <img
                src="/logo2-1.png"
                alt="Laundry Service"
                className="mb-8 max-w-xs "
              />
            </div>
            <h1
              className="text-2xl font-bold mb-3 text-center cursor-default"
              style={{ fontSize: "5rem" }}
            >
              Manage your Laundry Anywhere
            </h1>
            <p className="text-md mb-2 italic cursor-default">
              Schedule, track, and manage your laundry from anywhere!
            </p>
            {/* Additional content or testimonials can be added here */}
          </div>
          {/* Form Container */}
          <div className="w-1/2 flex items-center justify-center ">
            <form className="max-w-md mt-5 w-full space-y-[10px] p-10 bg-white rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-700">
                  Forget Password ?
                </h2>
              </div>
              {/* ... (the rest of your form fields go here) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                 Enter your email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
                  style={{
                    borderRadius: "10px",
                    border: 0,
                    outline: 0,
                    background: "rgba(0,128,128,0.15)",
                  }}
                />
              </div>
             
              {/* create account button */}
              <div className="mt-8">
                <button
                  // type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                            text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2
                            focus:ring-offset-2 focus:ring-orange-500"
                >
                  Create an Account 
                </button>
              </div>{" "}
              
            </form>
          </div>
        </div>
      );
}

export default ForgetPassword
