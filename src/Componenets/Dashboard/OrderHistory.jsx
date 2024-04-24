import React from 'react'

const OrderHistory = () => {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                 Home Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
             <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
            </tbody>
          </table>
    </>
  )
}

export default OrderHistory
