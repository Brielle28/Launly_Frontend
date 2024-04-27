import axios from "axios";
import { useEffect, useState } from "react";
import { FaMinus, FaNairaSign, FaPlus } from "react-icons/fa6";
import { API_URI } from "../Api/Api";

const WomenWear = ({ onOptionsSelected, type, clothes }) => {
  const [womenItems, setWomenItems] = useState([]);

  const [selectedItem, setSelectedItem] = useState(
    clothes.reduce((acc, cc) => {
      return { ...acc, [cc.id]: cc };
    }, {})
  );

  useEffect(() => {
    if (womenItems[0]?.category == type) return;
    axios
      .get(`${API_URI}/cloth/cloth?category=${type}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setWomenItems(response.data);
        console.log({ womenItems });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleQuantityChange = (
    { id, image, quantity, ...item },
    increment
  ) => {
    const newQuantity = increment + (selectedItem?.[id]?.quantity ?? 0);
    const updatedData = {
      ...selectedItem,
      [id]: {
        ...item,
        quantity:newQuantity<0?0:newQuantity ,
      },
    };
    console.log({ updatedData });
    setSelectedItem(updatedData);
    for (const [key, value] of Object.entries(updatedData)) {
      console.log(`Key: ${key}, Value: ${value}`);
      onOptionsSelected({ ...value, id: key });
    }
  };

  return (
    <>
      <div className="flex flex-wrap px-10 w-[100%] items-center justify-evenly gap-y-8 rounded-xl mt-10">
        {womenItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-center"
          >
            <div className="flex flex-row items-center justify-center gap-x-8 px-5 rounded-xl shadow-md">
              <div className="flex flex-row items-center gap-3 p-1">
                <div
                  className="w-24 h-24 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="flex flex-col gap-1 items-start justify-start">
                  <h2 style={{ fontSize: "15px" }}>{item.name}</h2>
                  <div className="flex items-center justify-center">
                    <FaNairaSign className="flex-shrink-0 w-2 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <p className="text-gray-500 text-[10px]">{item.price}</p>
                    <p className="text-gray-500 text-[10px]">/Item</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span
                  className="btn rounded-full border-2 border-[#3272A4]"
                  onClick={() => handleQuantityChange(item, -1)}
                >
                  <FaMinus className="h-3 w-3" />
                </span>
                <p className="text-[20px]">
                  {" "}
                  {selectedItem?.[item?.id]?.quantity ?? 0}{" "}
                </p>
                <span
                  className="btn rounded-full border-2 border-[#3272A4]"
                  onClick={() => handleQuantityChange(item, 1)}
                >
                  <FaPlus className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WomenWear;
