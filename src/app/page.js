import Title from '@/components/Title'
import Image from 'next/image'
import Title from './componentes/title'

export default function Home() {
  return (
    <>
    <nav className="flex p-4 bg-slate-900">

      <ul className="Flex gap-20">
        <li>
          <a href = "#">
<<<<<<< HEAD
      <h1>Cine Marvel</h1>
=======
      <h1>Fiap App</h1>
>>>>>>> 8491a812a83296748a2a7e00e639c9d291e67300

          </a>
        </li>
        <li>
          <a href = "#">
<<<<<<< HEAD
            filmes
=======
            Jogos
>>>>>>> 8491a812a83296748a2a7e00e639c9d291e67300
          </a>
        </li>
      </ul>
    </nav>

<<<<<<< HEAD
    <Title>em alta</Title> 

    <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
      <img className="rounded" src="https://place-hold.it/150x220/666" alt="" />
      <span className="font-bold text-center line-clamp-1"></span>titulo do filme do card
      <div>
        <span>6.0</span>
      </div>
      <a href="#" className= "bg-pink-600 py-2  w-full rounded text-center">
        detalhes 
        </a>
    </div>
        
    <Title>lançamentos</Title>
    <Title>favoritos</Title>
    

     </>
  )
  }
    
    

=======
    <Title> em alta</Title> 

     <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
        <img className="rounded"src="https://place-hold.it/150x220/666" alt="" />
        <span className="font-bold text-center line-clamp-1">Clash of Clans</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">detalhes</a>
     </div>  
    <Title> lançamento</Title>   
  

    </>
  )
}
>>>>>>> 8491a812a83296748a2a7e00e639c9d291e67300
