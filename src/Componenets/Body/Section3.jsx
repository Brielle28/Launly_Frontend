import Button from "../Buttons";

const LeftSide = () => {
  return (
    <div className=" bg-[#F4F9FC]">
      <div className="relative">
        <img
          src="/5-1024x519.png"
          className=" w-[710px] h-[367.94px] ml-[10px]"
        ></img>
      </div>
      <div className="absolute -mt-[23rem] ml-[14.5rem]">
        <img
          src="/negative-emotions-and-house-chores-concept-astoni-2022-02-04-02-41-07-utc2.png"
          className="w-[400px] h-[480.25px]"
        ></img>
      </div>
    </div>
  );
};

const RightSide = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h3 className="capitalize w-[450.51px] font-bold mt-[100px] ">
          getting tired with your laundry?
        </h3>
        <span className="w-[584px] font-normal text-[17.6px] text-[#54595F] mt-[19.03px]">
        Say goodbye to laundry stress and reclaim your weekends with Launly. Our convenient web app allows you to schedule your laundry service with just a few clicks
        </span>
        

        <Button className="mt-[35.33px] mb-[103.88px]">Call us Now</Button>
      </div>
    </div>
  );
};

export const GettingTired = () => {
  return (
    <>
      <div className="flex bg-[#F4F9FC]">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
};
