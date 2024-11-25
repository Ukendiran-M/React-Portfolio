import React, {useState, useEffect} from 'react'
import Home from './components/Home'
import DotLoader from './components/DotLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period, e.g., fetching data
    setTimeout(() => setIsLoading(false), 3000); // 3 seconds
  }, []);
  return (
    <div>
      {isLoading ? <DotLoader /> : <Home/> }
    </div>
  )
}

export default App