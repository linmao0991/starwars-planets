import { useEffect, useState } from 'react';
import { initialPlanetQuery } from './utils/queryHelper'
import { parsePlanetData } from './utils/dataParser';
import PlanetTable from './components/PlanetTable';
import ErrorCard from './components/ErrorCard';
import { Spinner } from "react-bootstrap";
import './App.css';

const App = () => {
    const [planets, setPlanets] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const queryPlanets = async() => {
        setLoading(true)
        const { results, isAxiosError, message } = await initialPlanetQuery()
        if (results) {
            setPlanets(parsePlanetData(results))
            setLoading(false)
        }
        if (isAxiosError) {
            setError(message)
            setLoading(false)
        }
    }

    const conditionalRendering = () => {
        if (loading) {
            return (
                <div style={{ flex: 1, alignContent: 'center' }}>
                    <Spinner
                        animation={'border'}
                        variant={'warning'}
                    />
                </div>
            )
        }
        if (error) {
            return <ErrorCard message={error}/>
        }
        if (planets.length > 0) {
            return <PlanetTable planets={planets} />
        } else {
            return <ErrorCard message={'No planets to display'} />
        }
    }

    useEffect(() => {
        if (!planets) {
            queryPlanets()
        }
    }, [planets])

  return (
    <div className="App">
      <header className="App-header">
           The Nav Computer
      </header>
        {conditionalRendering()}
    </div>
  );
}

export default App;
