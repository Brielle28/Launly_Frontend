const LeftSide = () => {
  return (
    
      <div className="newsletter4 ml-[50px]">
        <img
          src="/11.png"
          className="newsletter5 w-[590px] h-[400.41px] mt-[1rem] relative"
        ></img>

        <img
          src="/pleased-dark-skinned-cheerful-man-with-bristle-wea-2021-08-30-23-42-51-utc1.png"
          className="newsletter6 w-[519.19px] h-[392.63px] absolute -mt-[24.5rem] ml-[5rem]"
        ></img>
      </div>
    
  );
};

const RightSide = () => {
  return (
    <div id="News-Header" className="mt-[100px]">
      <span className="newsletter1 text-[64px] text-white font-extrabold ">
        Join Our Newsletter
      </span>
      <p className="newsletter2 text-base font-normal text-white w-[587.91px] mt-[19.04px]">
      Want to stay up-to-date with the latest news, 
      promotions, and tips from Launly? Join our newsletter today! Sign up to receive exclusive offers, laundry hacks, and more delivered straight to your inbox. Don't miss out on the opportunity to simplify your laundry routine and save money with Launly.
      </p>
      <span className="newsletter3 w-[150.83px] h-[58px] Boxes text-[#FFA33E] flex items-center justify-center font-medium bg-[#fff] rounded-full mt-[35.33px] mb-[76.42px]">Subcribe Now</span>
    </div>
  );
};

const NewsLetter = () => {
  return (
    <div className="newsletter bg-[#6BBEC4] flex gap-[100.81px]">
      <LeftSide />
      <RightSide />
    </div>
  );
};
export default NewsLetter;
