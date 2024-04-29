import { NewsArray } from "./NewsandBlogArray"

const NewsandBlog = ()=> {
    return (
        <section className="news bg-[#E8F6FF] pt-[100px] ">
            <div className="flex justify-center items-center">
                <h2>News and Blog</h2>
            </div>
             <div className="news2 flex flex-row gap-[20px] justify-center relative mb-[100px]">
        {NewsArray.map((item, i) => (
          <div key={i} className="news3 w-[380px] h-[514.06px] bg-[white] rounded-xl mt-[50px]">
           
            <img className="w-[376px] rounded-lg mt-[0.1rem] h-[263.36px] mx-auto flex" src={item.imgsrc} />
            {/* <div>{item.Icon}</div> */}

            <span className="text-[#54595F] font-semibold text-[20.8px] flex ml-[1.5rem] pt-7"> {item.head}</span>
         
            <p className="news4 text-base ml-[24.52px] font-normal text-[#54595F] mt-[14.9px] "> {item.text}</p>
            
          </div>
        ))}
      </div>
        </section>
    )
}
export default NewsandBlog