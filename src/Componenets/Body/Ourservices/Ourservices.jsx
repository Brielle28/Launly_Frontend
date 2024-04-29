import { ServicesArray } from "./ServicesArray";
import "../Ourservices/Ourservice.css"
const Ourservice = () => {
  return (
    <section id="Service-Header">
      <div>
        <h3 className="capitalize flex m-auto justify-center item-center mt-[100px] mb-[40px]">
          our services
        </h3>
      </div>

      <div className="service flex flex-row gap-[20px] justify-center">
        {ServicesArray.map((item, i) => (
          <div
            key={i}
            className="mumu bg-[#E8F6FF] w-[285px] h-[367.23px] rounded-xl mb-[100px]"
          >
            <div className="flex justify-center w-[105.34px] h-[105.34px] rounded-full Boxes bg-white mt-[30px] mx-[89.83px]">
              <img
                className="w-14 h-14 flex items-center justify-center mt-[30px] rounded-tl-[120px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px]"
                src={item.imgsrc}
              />
            </div>
            <span className="text-[#54595F] font-semibold text-2xl flex items-center justify-center pt-7 pb-7 fontnunito">
              {" "}
              {item.header}
            </span>
            <p className="text-base w-[236.34px] text-center ml-[24.52px] font-normal text-[#54595F] flex items-center justify-center ">
              {" "}
              {item.text}
            </p>
            {/* <p><Link>{item.linkText}</Link></p> */}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Ourservice;
