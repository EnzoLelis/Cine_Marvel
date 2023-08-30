import Title from '@/components/Title'
import Image from 'next/image'
import Title from './componentes/title'
import CardFilme from '@/components/CardFilme'

export default function Home() {
  const filmes = [ 
  {titulo: "Megatubarão 2",
  nota: 6.2,
  poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg"
},
{titulo: "Barbie",
nota: 7.5,
poster:"https://www.themoviedb.org/t/p/w94_and_h141_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"

}


  ]
  const megatubarao ={
    titulo: "Megatubarão 2",
    nota: 6.2,
    poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg"
  }
  const barbie = {
    titulo: "Barbie",
    nota: 7.5,
    poster:"https://www.themoviedb.org/t/p/w94_and_h141_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
  }
  return (
    <>
    <nav className="flex p-4 bg-slate-900">

      <ul className="Flex gap-20">
        <li>
          <a href = "#">
      <h1>Cine Marvel</h1>

          </a>
        </li>
        <li>
          <a href = "#">
            filmes
          </a>
        </li>
      </ul>
    </nav>

    <Title>em alta</Title> 

    <section classname="flex flex-wrap">
      {filmes.map(filme => <CardFilme filme={filme} /> )}

    </section>
    

    <Title>lançamentos</Title>
    <Title>favoritos</Title>
    

     </>
  )
  }
    
    

