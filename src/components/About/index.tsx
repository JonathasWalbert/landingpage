import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import curriculo from "./assets/JonathasWalbert-curriculo .pdf";
import WalbertImage from "./assets/walbert.png"


export default function About() {
 return (
   <section id="aboutme" className="text-white p-6 max-w-3xl mx-auto">
    <div className="border rounded p-3">
      <h1 className="text-center text-2xl">Sobre mim</h1>

      <div className="flex flex-col items-center my-4">
        <img
          className="w-64 md:w-2xs"
          src={WalbertImage}
          alt="Imagem Jonathas"
        />
      </div>
      
      
        <div className="text-gray-400 m-4 text-sm md:text-base md:text-center">
          <p><strong className="text-base md:text-lg">Nome: </strong> Jonathas Walbert Lacerda da R. de Souza</p>
          <p><strong className="text-base md:text-lg">Graduacao: </strong>Engenheiro da computação - Completo </p>
          <p><strong className="text-base md:text-lg">Tecnologo: </strong>Análise e desenvolvimento de software - Cursando</p>
          <p><strong className="text-base md:text-lg">Pós graducao: </strong>Desenvolvimento Mobile - Completo</p>
          <p><strong className="text-base md:text-lg">Pós graducao: </strong>Engenharia de software para dispositivos moveis - Incompleto</p>
          <p><strong className="text-base md:text-lg">Pós graducao: </strong>Estrutura e gestao de redes - Incompleto</p>
        </div>

      <a
      href={curriculo}
      target="_blank"
      className="flex justify-center items-center font-bold hover:text-gray-600 hover:scale-110 cursor-pointer mt-2"
      >Curriculo Completo<HiOutlineDocumentDownload size={30}/></a>

        <div className="flex gap-2 justify-center m-8">
          <a
          href="https://www.instagram.com/j0nathas__/"
          target="_blank"
          className="hover:scale-125 hover:animate-pulse-hover cursor-pointer"
          >
            <FaInstagram size={35} />
          </a>

          <a
          href="https://www.linkedin.com/in/jonathaswalbert/"
          target="_blank"
          className="hover:scale-125 hover:animate-pulse-hover cursor-pointer"
          >
            <FaLinkedin size={35} />
          </a>
        
        <a
        className="hover:scale-125 hover:animate-pulse-hover cursor-pointer" 
        href="https://wa.me/5596984051486?text=Olá!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
        target="_blank"
        >
        <FaWhatsapp size={35}  />
        </a>
        
        <a
        href="https://github.com/JonathasWalbert"
        target="_blank"
        className="hover:scale-125 hover:animate-pulse-hover cursor-pointer">
        <FaGithub size={35}  />
        </a>
        
      </div>
    </div>
    
    
   </section>
 );
}