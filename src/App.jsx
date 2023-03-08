import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Listing from './components/Listing'
import data from './data'

export default function App() {

  const newData = data.map((post) => {
    return ( <Listing 
              key={post.id}
              {...post}
            />
    )
  })

  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <section>
        {newData}
      </section>
    </div>
  )
}

