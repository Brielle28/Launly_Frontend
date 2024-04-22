const LeftSide = () => {
  return (
    
      <div className="ml-[180px]">
        <img
          src="/11.png"
          className="w-[590px] h-[400.41px] mt-[1rem] relative"
        ></img>

        <img
          src="/pleased-dark-skinned-cheerful-man-with-bristle-wea-2021-08-30-23-42-51-utc1.png"
          className="w-[519.19px] h-[392.63px] absolute -mt-[24.5rem] ml-[5rem]"
        ></img>
      </div>
    
  );
};

const RightSide = () => {
  return (
    <div className="mt-[100px] ">
      <span className="text-[64px] text-white font-extrabold ">
        Join Our Newsletter
      </span>
      <p className="text-base font-normal text-white w-[587.91px] mt-[19.04px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
        faucibus mi, et tempor eros. Donec in quam id lacus dignissim varius eu
        sed ex.
      </p>
      <span className="w-[150.83px] h-[58px] Boxes text-[#FFA33E] flex items-center justify-center font-medium bg-[#fff] rounded-full mt-[35.33px] mb-[76.42px]">Subcribe Now</span>
    </div>
  );
};

const NewsLetter = () => {
  return (
    <div className="bg-[#6BBEC4] flex gap-[90.81px]">
      <LeftSide />
      <RightSide />
    </div>
  );
};
export default NewsLetter;
