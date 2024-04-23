
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Components/Coffee'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className='text-5xl font-bold'>Hot Coffee and its description {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map((coffee => <Coffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />))
        }
      </div>
      
    </>
  )
}

export default App
