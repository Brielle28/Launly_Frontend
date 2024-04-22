import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Simple validation function
  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required.";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid.";
    tempErrors.password = formData.password.length > 5 ? "" : "Password must be at least 6 characters long.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle valid form submission
      console.log(formData);
      alert('Registration successful!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Illustration and Info Container */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-teal-600 px-12 text-white">
          <div className="w-full">
              <img src="/logo2-1.png" alt="Laundry Service" className="mb-8 max-w-xs "/>
          </div>
          <h1 className="text-2xl font-bold mb-3 text-center cursor-default" style={{fontSize : "5rem"}}>Manage your Laundry Anywhere</h1>
          <p className="text-md mb-2 italic cursor-default">Schedule, track, and manage your laundry from anywhere!</p>
        {/* Additional content or testimonials can be added here */}
      </div>

      {/* Form Container */}
      <div className="w-1/2 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">Create an account</h2>
          </div>
          {/* ... (the rest of your form fields go here) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200
                          ${errors.fullName ? "border-red-500" : ""}`}
            />
            <p className="text-red-500 text-xs italic">{errors.fullName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200
                          ${errors.email ? "border-red-500" : ""}`}
            />
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200
                          ${errors.password ? "border-red-500" : ""}`}
            />
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                        text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-orange-500"
            >
              Create an Account
            </button>
          </div>
            <div className="text-center">
                <p className="text-sm">
                    Already have an account? <a href="/login" className="text-teal-600 hover:text-teal-700 font-medium">Log
                    In</a>
                </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

