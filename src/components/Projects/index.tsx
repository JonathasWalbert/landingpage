import { projects } from '../../Data/projects.ts';
import { FaHtml5, FaCss3Alt, FaJs, FaReact,  } from "react-icons/fa";
import { LuMonitorSmartphone } from "react-icons/lu";

export default function Projects (){
  return(
    <section id='projects' className="p-6 mt-8">
   
      <div className=" text-white flex flex-col justify-center items-center mb-20">
          <h2 className="font-semibold text-2xl md:text-3xl m-2">Hard Skills</h2>

          <div className='flex gap-5 mt-8'>
            <div className="hover:text-orange-400 text-center flex flex-col items-center">
                <FaHtml5 className='w-8 h-8 md:w-16 md:h-16'/>
                <p className='text-sm md:text-base'>HTML 5</p>
              </div>

            <div className="hover:text-blue-400 text-center flex flex-col items-center">
              <FaCss3Alt className='w-8 h-8 md:w-16 md:h-16' />
              <p className='text-sm md:text-base'>CSS</p>
            </div>

            <div className="hover:text-yellow-300 text-center flex flex-col items-center">
              <FaJs className='w-8 h-8 md:w-16 md:h-16' />
              <p className='text-sm md:text-base'>JavaScript</p>
            </div>

            <div className="hover:text-cyan-400 text-center flex flex-col items-center">
              <FaReact className='w-8 h-8 md:w-16 md:h-16'  />
              <p className='text-sm md:text-base'>ReactJS</p>
            </div>


            <div className="hover:text-cyan-400 text-center flex flex-col items-center">
              <LuMonitorSmartphone className='w-8 h-8 md:w-16 md:h-16' />
              <p className='text-sm md:text-base'>React Native</p>
            </div>


          </div>
       
        </div>

    <h2 className="text-2xl md:text-3xl xl:text-4xl my-3 text-white text-center font-semibold mb-4">
        Projetos
    </h2>

    <ul className="grid gap-4 md:grid-cols-2 text-gray-400 max-w-7xl mx-auto">
      {projects.map((project, i) => (
        <div key={i} className="border p-4 rounded shadow text-center ">
          <h3 className="text-xl font-bold mb-2 text-white"><strong>{project.title}</strong></h3>
          <p>{project.description}</p>
          <a href={project.link} target='_blank' className="text-white/80 font-bold hover:text-emerald-500 cursor-pointer">Ver Projeto</a>
        </div>

       
      ))}
    </ul>
  </section>
  )
}
  

