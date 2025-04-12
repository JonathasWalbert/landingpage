

export default function Header(){
  function handleClick(section : string){
    const element = document.getElementById(section)

    if(element){
      element.scrollIntoView({behavior: "smooth"})
    }
  }

  return(
    <header className="bg-blueBri text-gray-400 p-6 text-sm md:text-lg fixed z-50 w-full">
      <ul className="flex gap-4 justify-center list-none">
        <li className="hover:scale-125 hover:text-white hover:animate-pulse-hover cursor-pointer" onClick={() => handleClick('home')}>Inicio</li>
        <li className="hover:scale-125 hover:text-white hover:animate-pulse-hover cursor-pointer" onClick={() => handleClick('projects')}>Projetos</li>
        <li className="hover:scale-125 hover:text-white hover:animate-pulse-hover cursor-pointer" onClick={() => handleClick('aboutme')}>Sobre mim</li>
        <li className="hover:scale-125 hover:text-white hover:animate-pulse-hover cursor-pointer" onClick={() => handleClick('contacts')}>Contatos</li>
      </ul>
    </header>
  )
}
