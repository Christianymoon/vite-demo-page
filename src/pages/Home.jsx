import instagram from '../assets/instagram_white.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import logo from '../assets/logo.png';





export function Home() {
    return (

        <div className="home FirstFont bg-gray-800 text-white flex flex-col justify-center items-center h-screen">
            <div className="hero text-center flex flex-col jusify-center items-center p-20">
                <img src={logo} alt="Logo" className="rounded-full w-1/2 md:w-1/16 h-auto" />
                <h1 className="text-3xl pb-15"></h1>
                <h2 className="text-2xl letter-spacing">IMPRENTA Y DISEÑO GRAFICO</h2>
                <p className="text-xl pt-10">Diseño de todo tipo de productos impresos y digitales.
                Cotiza ahora</p>
                <strong className='text-xl pt-4'>sin costo ni cargo adicional</strong>
                <p className='text-xl pt-4'>Consulta nuestros servicios y precios a continuación.</p>
                <div className="pt-10">
                    <button 
                        onClick={() => window.location.href = '/services'} 
                        className="mainbutton bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Servicios
                    </button>
                </div>
            </div>
            <div className="social-media flex flex-row">
                <div className="social-icon hover">
                    <a href="https://www.instagram.com/christianymoon" target="blank">
                        <img src={instagram} alt="Instagram" className="w-10 h-10 m-2" />
                    </a>
                </div>
                <div className="social-icon hover">
                    <a href="https://github.com/christianymoon" target="blank">
                        <img src={github} alt="Github" className="w-10 h-10 m-2" />
                    </a>
                </div>
                <div className="social-icon hover">
                    <a href="https://www.linkedin.com/in/christianymoon/" target="blank">
                        <img src={linkedin} alt="Linkedin" className="w-10 h-10 m-2" />
                    </a>
                </div>
            </div>
        </div>

    )
}