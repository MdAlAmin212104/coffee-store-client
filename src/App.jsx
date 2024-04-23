
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Components/Coffee'

function App() {
  const coffees = useLoaderData()

  return (
    <>
      <h1 className='text-5xl font-bold'>Hot Coffee and its description {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map((coffee => <Coffee key={coffee._id} coffee={coffee} />))
        }
      </div>
      
    </>
  )
}

export default App
