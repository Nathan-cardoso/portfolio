import logoEplayoffs from '../../assets/images/projects/logoEplayoffs.png';
import logoDelciasDeDindim from '../../assets/images/projects/logoDeliciasDeDindim.png';
import logoAnaliseDeDados from '../../assets/images/projects/logoAnaliseDados.png';


function Cards() {
    return (
        <div className='max-w-[1200px] justify-center mx-auto'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 ">
                <div className="bg-[#1a1a1a] rounded-2xl p-5 shadow-2xl shadow-red-800/50">
                    <img src={logoEplayoffs} alt="Logo Eplayoffs" className="rounded-lg mb-4" />
                    <h3 className="text-xl font-bold text-red-500">Eplayoffs</h3>
                    <p className="text-md text-gray-300">Um sistema de gerenciamento de campeonatos de e-sports, desenvolvido com Django Rest Framework e React.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-2xl p-5 shadow-2xl shadow-red-800/50">
                    <img src={logoDelciasDeDindim} alt="Logo Delícias de Dindim" className="rounded-lg mb-4" />
                    <h3 className="text-xl font-bold text-red-500">Delícias de Dindim</h3>
                    <p className="text-md text-gray-300">Um sistema de gerenciamento de pedidos para uma sorveteria, desenvolvido com Django Rest Framework e React.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-2xl p-5 shadow-2xl shadow-red-800/50">
                    <img src={logoAnaliseDeDados} alt="Logo Análise de Dados" className="rounded-lg mb-4" />
                    <h3 className="text-xl font-bold text-red-500">Análise de Dados</h3>
                    <p className="text-md text-gray-300">Um projeto de análise de dados utilizando Python e Pandas, com visualizações em Matplotlib e Seaborn.</p>
                </div>

            </div>
        </div>
    )
}

export default Cards;