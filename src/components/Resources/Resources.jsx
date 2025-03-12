import "./index.css"
import BgImage from "../../assets/image-6.png"
import Image from "../../assets/image-5.svg"
import { Link } from "react-router-dom"

const Resources = () => {
    return (
        <div className="container flex flex-column gap-3 md:flex-row md:justify-content-center">
            <div className="bg-image flex flex-column justify-content-around gap-4 pl-4 py-6 w-full flex-1">
                    <img className="backgroundImage border-round-3xl m-0" src={BgImage} alt="" />
                    <h3 className="z-1 text-0 m-0 relative">Desafios</h3>
                    <p className="z-1 w-10 text-0 opacity-8 relative m-0 md:w-9">Pratique suas habilidades e ganhe confiança nos seus conhecimentos completando os desafios propostos pelos professores!</p>
                    <Link to="desafios" className="link z-1 w-9rem h-3rem font-bold flex align-items-center justify-content-center text-0 hover:text-primary transition-duration-200 border-round-3xl hover:no-underline no-underline relative">Ver desafios</Link>
            </div>

            <div className="bg-image bg-image-2 flex-1 w-full flex align-items-center justify-content-center object-fill border-round-3xl">
                <div className="flex flex-column justify-content-around gap-4 pl-4 py-6">
                    <h3 className="z-1 text-0 m-0">Vagas</h3>
                    <p className="z-1 w-10 text-0 opacity-8 m-0 md:w-7">Todos os dias nosso time procura por oportunidades para você conseguir seu espaço no mercado de trabalho.</p>
                    <Link to="vagas" className="z-1 text-0 bg-black-alpha-90 font-bold hover:bg-white transition-duration-200 hover:text-primary border-round-3xl w-9rem h-3rem flex align-items-center justify-content-center hover:no-underline no-underline" >Acessar</Link>
                </div>
                <img className="h-full absolute right-0 bottom-0" src={Image} alt="" />

            </div>
        </div>
    )
}

export default Resources