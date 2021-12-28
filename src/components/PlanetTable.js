import { Table, Card } from 'react-bootstrap';
import { formatNumber } from '../utils/dataParser';

const PlanetTable = ({ planets }) => {
    const calcSurfaceWater = (surface_water, diameter) => {
        let radius = parseInt(diameter) / 2
        let surfaceWater = parseInt(surface_water)
        if (!isNaN(radius) && !isNaN(surfaceWater) ) {
            if (surfaceWater === 0) {
                return "0"
            }
            return Math.round(4 * 3.14 * Math.pow(radius, 2) * (surfaceWater/100))
        } else {
            return '?'
        }
    }
    return(
        <Card style={{ width: '75%'}}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Climate</td>
                        <td>Population</td>
                        <td>Terrains</td>
                        <td>Water Surface Area</td>
                    </tr>
                    </thead>
                    <tbody>
                        {planets.map(planet => {
                            const { name, population, climate, terrain, diameter, surface_water, url } = planet
                            return (
                                <tr key={url}>
                                    <td>{name ? <a href={url}>{name}</a> : '?'}</td>
                                    <td>{formatNumber(climate) || '?'}</td>
                                    <td>{formatNumber(population) || '?'}</td>
                                    <td>{formatNumber(terrain) || '?'}</td>
                                    <td>{(surface_water) ? formatNumber(calcSurfaceWater(surface_water, diameter)) : '?' }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
        </Card>
    )
}

export default PlanetTable