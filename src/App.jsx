import './App.css'
import Footer from './Componenets/Body/Footer'
import HeroLaundryService from './Componenets/Body/LaundryService'
import Ourservice from './Componenets/Body/Ourservices/Ourservices'
import { GettingTired } from './Componenets/Body/Section3'
import { SolutionsSection } from './Componenets/Body/Section4'
import { NoFadingAway } from './Componenets/Body/Section5'
import Partners from './Componenets/Body/Section6'
import FrequentQuestions from './Componenets/Body/Section7'
import NewsandBlog from './Componenets/Body/Section8'
import NewsLetter from './Componenets/Body/Section9'
import Header from './Componenets/Header/Header'
import RegisterPage from "./Componenets/Register/RegisterPage.jsx";


function App() {

  return (
   <div className='max-w-[1920px] w-full flex flex-col mx-auto justify-center'>

   {/*<Header/>*/}
   {/*<HeroLaundryService/>*/}
   {/*<Ourservice/>*/}
   {/*<GettingTired/>*/}
   {/*<SolutionsSection/>*/}
   {/*<NoFadingAway/>*/}
   {/*<Partners/>*/}
   {/*<FrequentQuestions/>*/}
   {/*<NewsandBlog/>*/}
   {/*<NewsLetter/>*/}
   {/*<Footer/>*/}
    <RegisterPage/>
  

   
   </div>
  )
}

export default App
