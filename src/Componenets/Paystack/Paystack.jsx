import React, { useContext, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { UserContext } from '../context/Userprovider';
import { UserProvider } from '../context/Userprovider';
import './paystack.css';
import { useLocation } from 'react-router-dom';

const Paystack = () => {
  const {authUser, booking} = useContext(UserContext)
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const refrr = query.get('bookingId')
  console.log({refrr});
  const publicKey = "pk_test_55a4d99e2813179d94dab988becd18f7d62c39e3";
  const amount = booking.total_price * 100;
  const [email, setEmail] = useState(authUser.email);
  const [name, setName] = useState(authUser.name);
  const [phone, setPhone] = useState(booking.phone);

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    reference:refrr,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay',
    onSuccess: ({ reference }) => {
      resetForm();
      //api for verify payment
    },
  };

  return (
    <div className="App">
      <div className="container">
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
            <label className='text-start'>Name</label>
              <input
                type="text"
                id="name"
                value={authUser.full_name}
                onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"

              />
            </div>
            <div className="checkout-field">
              <label className='text-start'>Email</label>
              <input
                type="text"
                id="email"
                value={authUser.email}
                onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"

              />
            </div>
            <div className="checkout-field">
              <label className='text-start'>Phone number</label>
              <input
                type="text"
                id="phone"
                value={booking.phone}
                onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"

              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paystack;