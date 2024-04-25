import { createContext, useState } from "react";
import { MenItems} from "../../utils/MenItems";
import {OthersItems} from "../../utils/OthersItems"
import {WomenItems} from "../../utils/WomenItems"


export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [authUser,setAuthUser] = useState({})
  
  const [isloading, setIsloading] = useState(null)

  const [formFields, setFormFields] = useState({
    HomeAddress: '',
    PhoneNumber: '',
    date:'',
    time: ''

  })

  const updateFormData = (event) => {
    setFormFields({
    ...formFields,
      [event.target.name]: event.target.value
    })
  }

  const [menItems, setMenItems] = useState([]);
  const calculateMenTotalPrice = () => {
    const totalPrice = menItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return `₦${totalPrice.toFixed(2)}`;
  };

  

  const [womenItems, setWomenItems] = useState([]);
  const calculateWomenTotalPrice = () => {
    const totalPrice = womenItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return `₦${totalPrice.toFixed(2)}`;
  };

 

  const [otherItems, setOtherItems] = useState([]);

  const calculateOtherTotalPrice = () => {
    const totalPrice = otherItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return `₦${totalPrice.toFixed(2)}`;
  };

  const TotalPrice = () => {
    const menPrice = parseFloat(calculateMenTotalPrice().replace('₦', ''));
    const womenPrice = parseFloat(calculateWomenTotalPrice().replace('₦', ''));
    const otherPrice = parseFloat(calculateOtherTotalPrice().replace('₦', ''));
    
    const totalPrice = menPrice + womenPrice + otherPrice;
    
    return `${totalPrice.toFixed(2)}`;
};


  const value = {
    menItems, 
    setMenItems,
    womenItems, 
    setWomenItems,
    otherItems, 
    setOtherItems,
    calculateMenTotalPrice,
    calculateWomenTotalPrice,
    calculateOtherTotalPrice,
    formFields,
    setFormFields,
    updateFormData,
    TotalPrice,
    isloading,
    setIsloading,
    authUser,
    setAuthUser
  };

  return (
    <UserContext.Provider
    value={value}
    >
    {children}
    </UserContext.Provider>
  );
};