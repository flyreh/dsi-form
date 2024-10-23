import { FaReact, FaGithub } from 'react-icons/fa';
import { SiVercel, SiNetlify, SiRender, SiSupabase, SiVite } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";

const BottomInfo = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between text-white p-6 bg-gray-800 rounded-lg space-y-6 md:space-y-0">

            <div className="w-auto mr-10 ">
                <h2 className="text-xl font-bold mb-4">Información de la Página</h2>
                <h3>Hecho con :</h3>

                <p className="flex items-center mb-3 mt-3">
                    <FaReact className="mr-2 text-blue-500" />React +<SiVite className="mr-2 text-violet-500" />Vite
                </p>
                <p className="flex items-center mb-3">
                    <RiTailwindCssFill className="mr-2 text-blue-500" /> Tailwind
                </p>

                <h3>Alojada en :</h3>

                <p className="flex items-center mb-3 mt-3">
                    <SiVercel className="mr-2 text-white" />Vercel
                </p>
            </div>


            <div className="hidden md:block border-l-2 border-white h-auto mx-4"></div>


            <div className="w-auto">
                <h2 className="text-xl font-bold mb-4">Links a Servicios Web Gratuitos</h2>
                <ul className="space-y-4">
                    <li className="flex items-start space-x-4">
                        <SiVercel className="text-white text-2xl" />
                        <div>
                            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                                Vercel
                            </a>
                            <p className="text-sm text-gray-400">Plataforma para desplegar aplicaciones web con soporte para frontend y backend.</p>
                        </div>
                    </li>
                    <li className="flex items-start space-x-4">
                        <SiRender className="text-yellow-500 text-2xl" />
                        <div>
                            <a href="https://render.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                                Render
                            </a>
                            <p className="text-sm text-gray-400">Servicio de alojamiento para aplicaciones web y bases de datos.</p>
                        </div>
                    </li>
                    <li className="flex items-start space-x-4">
                        <SiSupabase className="text-blue-500 text-2xl" />
                        <div>
                            <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                                Supabase
                            </a>
                            <p className="text-sm text-gray-400">Plataforma de base de datos en tiempo real basada en PostgreSQL.</p>
                        </div>
                    </li>
                    <li className="flex items-start space-x-4">
                        <FaGithub className="text-black text-2xl" />
                        <div>
                            <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                                GitHub Pages
                            </a>
                            <p className="text-sm text-gray-400">Servicio gratuito de alojamiento de sitios web estáticos directamente desde un repositorio de GitHub.</p>
                        </div>
                    </li>
                    <li className="flex items-start space-x-4">
                        <SiNetlify className="text-green-500 text-2xl" />
                        <div>
                            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                                Netlify
                            </a>
                            <p className="text-sm text-gray-400">Plataforma para desplegar aplicaciones web con integración continua y entrega continua (CI/CD).</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BottomInfo;