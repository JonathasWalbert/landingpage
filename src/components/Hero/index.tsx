import jonathasPhoto from "./assets/jonathas.png"
//import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";

export default function Hero(){
  return(
    <section id="home" className="p-6 pt-20 max-w-7xl mx-auto shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.3)]">
      <div className="md:flex">
      <div className="flex items-center justify-center">
        <div>
        <h1 className="font-bold flex md:block justify-center items-center text-white text-lg md:text-3xl lg:text-4xl my-3">Desenvolvedor Web | Mobile</h1>
            <p className="text-white/70 text-center md:text-left text-sm md:text-lg text-wrap">Olá! Sou um desenvolvedor front-end especializado em React JS e aplicações mobile. Tenho paixão por transformar ideias em interfaces intuitivas, rápidas e responsivas. Com foco na experiência do usuário e código limpo, entrego soluções digitais modernas que funcionam em todos os dispositivos.

            Atualmente, estou focado em criar aplicações que realmente resolvem problemas — seja para startups, negócios locais ou projetos pessoais. </p>
        </div>
       
      </div>


      <div className="flex justify-center items-center">
        <img 
        className="w-3xs md:w-auto min-w-80"
        src={jonathasPhoto} 
        alt="Imagem Jonathas" 
        />
      </div>
      </div>


    </section>
  )
}

/*




      <div className="text-white/70 text-sm md:text-lg text-wrap mt-12">
        <p>🔹 Desenvolvimento Web com React JS. Criação de sites e aplicações web responsivas, otimizadas para performance e escalabilidade.</p>

<p>🔹 Aplicações Mobile  
Apps modernos para Android e iOS com foco em usabilidade e design intuitivo.</p>

<p>🔹 Interfaces Personalizadas  
Componentes e layouts desenvolvidos sob medida, com foco em acessibilidade e experiência do usuário.</p>

<p>🔹 Integrações com APIs e Back-end  
Conexões seguras com bancos de dados, serviços externos e APIs REST.</p>

<p>🔹 Otimização de Performance e SEO  
Melhorias técnicas para sites mais rápidos, eficientes e bem posicionados no Google.</p>
      </div>
*/