import Button from "../Buttons";

const HeroLeftSide = () => {
  return (
    <section className="bg-[#F4F9FC]">
      <div className="">
        <div className=" flex flex-col ml-[50px]">
          <img src="/ele2.png " className="h-32 w-32" />
          <div className="w-[27.5rem] h-[16.5rem] mt-[3.75rem]">
            <h1 className="laundry bg-[#F4F9FC] text-[220px] fontninito">
              WE DO LAUNDRY FOR YOU
            </h1>
          </div>
          <p className="mt-[1.206rem] font-normal text-[#54595F] w-[327.89px]">
            Our dedicated team ensures that your clothes are cleaned, folded,
            and delivered with care.
          </p>
          <div className="flex gap-[20px] mt-[35.33px]">
            <Button variant="primary2" size="xxxsmall">
              Get started
            </Button>
            <Button variant="primary" size="xxxsmall">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroRightside = () => {
  return (
    <section className="">
      <div className="">
        <div className="w-[600.5px] h-[620.94px] mt-[180px] relative">
          <img
            src="\vertical-shot-of-glad-smiling-man-gestures-with-he-2022-02-03-11-12-49-utc-copy2.jpg"
            className="rounded-xl"
          ></img>
          <div className="bg-[white] w-[252.95px] h-[70.8px] rounded-full absolute -mt-[26rem] Boxes flex">
            <div className="bg-[#F4C653] w-[60px] h-[60px] rounded-full flex justify-center items-center mt-[0.3rem] ml-[12px]">
              <img src="/busicon.svg" className="w-10 h-10"></img>
            </div>
            <div>
              <span className="w-[131.55px] ml-[1.5rem] mt-[0.5rem] font-bold text-[#54595F] fontnunito">
                Delivery
              </span>
              <p className="w-[134.25px] ml-[1.5rem] mt-[0.1rem] font-normal text-base text-[#54595F] text-[15px]">
                Right to You
              </p>
            </div>
          </div>

          <div className="bg-[white] w-[252.95px] h-[70.8px] rounded-full absolute -mt-[19rem] ml-[6rem] Boxes flex">
            <div className="bg-[#F4C653] w-[60px] h-[60px] rounded-full flex justify-center items-center mt-[0.3rem] ml-[12px]">
              <img src="/timeicon.svg" className="w-10 h-10"></img>
            </div>
            <div>
              <span className="w-[131.55px] ml-[1.5rem] mt-[0.5rem] font-bold text-[#54595F] fontnunito">
                Open 24 Hours
              </span>
              <p className="w-[134.25px] ml-[1.5rem] mt-[0.1rem] font-normal text-base text-[#54595F] text-[15px]">
                Always Available
              </p>
            </div>
          </div>

          <div className="bg-[white] w-[252.95px] h-[70.8px] rounded-full absolute -mt-[13rem] Boxes flex">
            <div className="bg-[#F4C653] w-[60px] h-[60px] rounded-full flex justify-center items-center mt-[0.3rem] ml-[12px]">
              <img src="/shieldicon.svg" className="w-10 h-10"></img>
            </div>
            <div>
              <span className="w-[131.55px] ml-[rem] mt-[0.5rem] font-bold text-[#54595F] fontnunito">
                Safety Guaranteed
              </span>
              <p className="w-[134.25px] ml-[1.5rem] mt-[0.1rem] text-[15px] font-normal text-base text-[#54595F]">
                Your Peace of Mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroLaundryService = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-[#F4F9FC] max-w-[1920px] w-full flex flex-row gap-[150px] px-[500px] items-center justify-center">
        <HeroLeftSide />
        <HeroRightside />
      </div>
    </div>
  );
};

export default HeroLaundryService;
