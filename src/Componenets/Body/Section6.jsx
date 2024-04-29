import { PartnersArray } from "./PartnersArray"

const Partners = () => {
    return (
        <section>
             <div className="partners flex flex-row gap-[20px] justify-center bg-[#E8F6FF] relative mb-[100px] mt-0">
        {PartnersArray.map((item, i) => (
          <div key={i} className="partner1 bg-[#fff] w-[300px] h-[380.23px] rounded-xl mb-[100px] Boxes mt-[100px]">
           
            <img className="w-[120px] h-[120px] flex items-center justify-center mt-[30px] rounded-full ml-[78px]" src={item.imgsrc} />
          
            <span className="text-[#54595F] font-semibold text-[20.8px] flex items-center justify-center pt-7"> {item.name}</span>
            <span className="text-[#6BBEC4] text-[14.4px] font-bold capitalize flex items-center justify-center">{item.role}</span>
            <p className="text-base w-[300px] text-center px-[20px] text-[12px] font-normal text-[#54595F] flex items-center justify-center "> {item.text}</p>
          </div>
        ))}
      </div>
        </section>
    )
}
export default Partners