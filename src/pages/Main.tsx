import { useEffect } from "react";
import Card from "../components/Card";
import "aos/dist/aos.css";
import * as AOS from "aos";

export default function Main() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 30,
            disable: false,
            once: true
        });
    }, []);

    return (
        <main className="bg-[#121212] text-white/85 h-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-26 md:pt-32 pb-16">
                    <div className="text-center">
                        <h1 className="font-montserrat text-5xl md:text-6xl font-extrabold mb-4" data-aos="zoom-y-out">
                            A segurança que o seu servidor <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">precisa</span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-gray-400 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                                Gerencie seu servidor com facilidade usando o <span className="font-semibold text-gray-300">MemberGuard</span>, um bot poderoso para verificação e backup.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transform transition-transform duration-500 hover:rotate-6" data-aos="fade-up" data-aos-delay="300">
                                Saiba Mais
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center pt-8 pb-8" data-aos="fade-up">
                    <span className="text-3xl font-extrabold tracking-tighter font-montserrat">Por que escolher o MemberGuard?</span>
                </div>

                <Card {...{
                    category: "Velocidade",
                    title: "Backups Instantâneos",
                    values: [
                        "Restaure tudo em segundos",
                        "Automatize backups com facilidade",
                        "Salve seus membros, cargos e canais em um clique"
                    ]
                }} />

                <Card {...{
                    category: "Segurança",
                    title: "Seguro & Confiável",
                    values: [
                        "Bloqueie VPNs e Proxies com facilidade",
                        "Sistema de verificação para prevenção de ataques",
                        "Garantia de 99.99% de Uptime com Suporte 24/7"
                    ]
                }} />

                <div className="flex flex-col items-center pt-8 pb-12" data-aos="fade-up" data-aos-anchor="anchor-element">
                    <span className="text-3xl font-extrabold tracking-tighter font-montserrat">Nosso compromisso</span>
                    <span className="max-w-screen-sm text-center text-gray-500 mt-2 mb-4">Estamos sempre ouvindo feedbacks para melhorar sua experiência. Junte-se a nós e faça parte dessa jornada.</span>
                    <div className="flex flex-row items-center gap-4">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="h-12 w-12" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                        </svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-grey-300 h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="h-16 w-16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                        </svg>
                    </div>
                </div>

                <footer className="text-gray-300 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="md:col-span-1">
                                <h2 className="text-3xl font-semibold">MemberGuard</h2>
                                <p className="mt-4 max-w-lg text-gray-300">
                                    MemberGuard é um serviço de recuperação para guildas do Discord, garantindo proteção e restauração completa.
                                </p>
                            </div>
                            <div className="md:col-span-1 flex justify-center md:justify-end">
                                <ul className="flex space-x-4">
                                    <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Sobre</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Produtos</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contato</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-[#212121] mt-8 pt-4 text-sm text-gray-400">
                            <p>&copy; 2024 MemberGuard. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </footer>

            </div>
        </main>
    );
}
