import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="Footer-Header" className="bg-[#3A3A3A] pt-[110px] gap-[109.22px]">
      <div className="flex flex-col">
        <div className="mx-auto flex gap-[109.22px] mb-[32.41px]">
          <div>
            <img src="/logo3.png" className="w-[189.14px] h-[71.63px]"></img>

            <p className="text-base font-normal text-white w-[287.67px] mt-[19.04px]">
            Elevate your laundry experience with us. From convenient booking to premium cleaning services, we're your trusted partner for a hassle-free laundry solution.
            </p>
          </div>

          <nav className="flex flex-col text-[white]">
            <th className="capitalize">company</th>
            <tb className="capitalize mt-[23px]">home</tb>
            <tb className="capitalize mt-[23px]">about</tb>
            <tb className="capitalize mt-[23px]">services</tb>
            <tb className="capitalize mt-[23px]">contact</tb>
          </nav>

          <nav className="flex flex-col text-[white]">
            <th className="capitalize flex justify-start">futher links</th>
            <tb className="capitalize mt-[23px]">terms and condition</tb>
            <tb className="capitalize mt-[23px]">news</tb>
            <tb className="capitalize mt-[23px]">recruitment</tb>
          </nav>

          <nav className="text-white">
            <th className="capitalize">get in touch</th>
            <div className="flex mt-[23px] gap-2">
              <img
                src="/locationicon.svg"
                className="w-4 h-4 mt-[0.4rem]"
              ></img>
              <span className=""> Enugu state,Nigeria</span>
            </div>
            <div className="flex mt-[23px] gap-2">
              <img src="/phoneicon.svg" className="w-4 h-4 mt-[0.4rem]" />
              <span>+234-703-7850-420</span>
            </div>
            <div className="flex mt-[23px] gap-2">
              <img src="/mailicon.svg" className="w-4 h-4 mt-[0.4rem]"></img>
              <span>launly@site.com</span>
            </div>
          </nav>
        </div>
        <span className="capitalize flex justify-center items-center text-white font-normal text-base gap-2">copyright <FaRegCopyright className="w-4 h-4" /> 2024 launly | powered by launly</span>
      </div>
    </section>
  );
};
export default Footer;
