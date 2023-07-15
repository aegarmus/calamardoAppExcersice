import { CarouselCalamardo } from "../../components/carousel/CarouselCalamardo"
import { Header } from "../../components/Header/Header"


import './homePage.css'

export const HomePage = () => {
    return (
        <>
            <Header />
         
            <div className="carrusel">

                <CarouselCalamardo />
            </div>
            <h1>Soy la Home Page</h1>
        </>
    )
  
}