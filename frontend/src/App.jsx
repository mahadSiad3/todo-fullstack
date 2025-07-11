import { useEffect } from 'react'
import './App.css'

function App() {
  
  useEffect(()=>{
    async function getData() {
     try {
      
  const response= await fetch('http://localhost:3000/')
      const data = await response.json()
      console.log(data)
     } catch (error) {
      console.log(error)
     }
    }
  },[])

   
    

  return (
    <>
      hello (from frontend)
    </>
  )
}

export default App
