import HeroImg from "../../assets/img/Hero.png";

function Hero() {
    return ( 
        <>
            <div className="w-full">
                <img src={HeroImg} className="w-full h-auto" alt="Descripción de la imagen" />
            </div>
        </>
     );
}

export default Hero;