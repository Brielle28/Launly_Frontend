// import RegisterPage from "../Componenets/Register/RegisterPage.jsx";
import Header from "../Componenets/Header/Header.jsx";
import HeroLaundryService from "../Componenets/Body/LaundryService.jsx";
import Ourservice from "../Componenets/Body/Ourservices/Ourservices.jsx";
import {GettingTired} from "../Componenets/Body/Section3.jsx";
import {SolutionsSection} from "../Componenets/Body/Section4.jsx";
import {NoFadingAway} from "../Componenets/Body/Section5.jsx";
import Partners from "../Componenets/Body/Section6.jsx";
import FrequentQuestions from "../Componenets/Body/Section7.jsx";
import NewsandBlog from "../Componenets/Body/Section8.jsx";
import NewsLetter from "../Componenets/Body/Section9.jsx";
import Footer from "../Componenets/Body/Footer.jsx";

export default function Home() {
   return (<div className='max-w-[1920px] w-full flex flex-col mx-auto justify-center'>
   <Header/>
   <HeroLaundryService/>
   <Ourservice/>
   <GettingTired/>
   <SolutionsSection/>
   <NoFadingAway/>
   <Partners/>
   <FrequentQuestions/>
   <NewsandBlog/>
   <NewsLetter/>
   <Footer/>
   </div>
  )
}
