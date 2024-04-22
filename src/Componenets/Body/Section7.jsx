const LeftSide = () => {
  return (
    <section>
      <div className="">
        <h3 className="capitalize w-[600px] text-[64px] font-extrabold">
          frequently asked questions
        </h3>
        <select className="LongButtons text-[#fff] text-base mt-[80px] border-0">
          <option className="flex text-center text-[17.6px]">How to Change my Photo from Admin Dashboard?</option>
        </select>
        <select className="LongButtons text-[#fff] text-base mt-[40px] border-0">
          <option className="flex text-center text-[17.6px]">How to Change my Password easily?</option>
        </select>
        <select className="LongButtons text-[#fff] text-base mt-[40px] border-0">
          <option className="flex text-center text-[17.6px]">How to Change my Subscription Plan using PayPal</option>
        </select>
      </div>
    </section>
  );
};

const Rightside = () => {
  return (
    

        
        <div className="">
            
          <img src="/10.png" className="w-[720px] relative"></img>
          <img
            src="/housework-concept-puzzled-householder-raises-fore-2022-02-05-01-55-14-utc-1.png"
            className="w-[510px] h-[607.56px] absolute -mt-[38rem] ml-[6rem]"
          ></img>
        </div>
        
   
  )
};

const FrequentQuestions = () => {
  return (
    <div className="bg-[#fff] flex mx-auto">
      <LeftSide />
      <Rightside />
    </div>
  );
};
export default FrequentQuestions;
