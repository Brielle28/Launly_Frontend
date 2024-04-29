import "../Body/Body.css"
const LeftSide = () => {
  return (
    <section>
      <div className="fading1 flex flex-col">
        <h2 className=" fading1text w-[574px] mt-[100px] text-[50px]">
          no fading,only cleaning
        </h2>
        <span className="fading1text2 w-[574px] flex mt-[19.02px] justify-center items-center">
          Your clothes are an investment, and we understand the importance of
          keeping them looking their best. That's why Launly uses only the
          gentlest cleaning methods and the highest quality detergents to ensure
          that your garments stay fadingclean and vibrant wash after wash.
        </span>
      </div>
    </section>
  );
};

const RightSide = () => {
  return (
    <section className="mt-[60px]">
      <div className="fading2 flex gap-[30px]">
        <div>
          <div className="w-[272.5px] h-[223.2px] bg-[#E8F6FF] Boxes relative mt-[6rem] rounded-2xl">
            <span className="font-bold text-[20.8px] text-[#54595F] flex justify-center items-center pt-[3.5rem]">
              Premium Perfume
            </span>
            <p className="w-[210.91px] font-medium text-base text-[#54595F] mt-[19.49px] flex justify-center text-center mx-auto text-[10px]">
              Elevate your senses with our exquisite collection of premium
              perfumes. Crafted with the finest ingredients 
            </p>
          </div>

          <div className="w-[89px] h-[89px] rounded-full Boxes2 bg-white absolute -mt-[16.5rem] ml-[5.5rem]">
            <img
              className="w-10 h-10 mt-[24px] ml-[28px]"
              src="/7-rose_512.png"
            ></img>
          </div>
        </div>

        <div className="fadingg">
          <div className="w-[272.5px] h-[223.2px] bg-[#E8F6FF] Boxes relative mt-[6rem] rounded-2xl">
            <span className="font-bold text-[20.8px] text-[#54595F] flex justify-center items-center pt-[3.5rem]">
              Trusted Detergent
            </span>
            <p className="w-[210.91px] font-medium text-base text-[#54595F] mt-[19.49px] flex justify-center text-center mx-auto text-[10px]">
              Experience the power of our trusted detergent: tough on stains,
              gentle on fabrics. Perfectly clean clothes, every time.
            </p>
          </div>

          <div className="w-[89px] h-[89px] rounded-full Boxes2 bg-white absolute -mt-[16.5rem] ml-[5.5rem]">
            <img
              className="w-10 h-10 mt-[24px] ml-[28px]"
              src="/25-washing-powder_512.png"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};



export const NoFadingAway = () => {
  return (
    <div className="fading mx-auto justify-center gap-[50px] mb-[100px]">
      <div className="fading flex gap-[50px]">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};
