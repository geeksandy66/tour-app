import { useState } from 'react';
import './App.css';
import Tour from './components/Tour';
import data from './data'

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)
  }

  if(tours.length === 0){
    return(
      <div className='flex justify-center items-center flex-col w-[100vw] h-[100vh] gap-3'>
        <h3 className='text-2xl font-bold'>No Tours Left</h3>
        <button className='border-2 px-3 w-36 py-1.5 rounded-md bg-blue-500 text-white' onClick={()=> setTours(data)}>Refresh</button>
        <p className='text-[#D5CFE1]'>refresh to get back...</p>
      </div>
    )
  }
  
  return (
    <div className="App">
    <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
