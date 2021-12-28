import axios from 'axios'

export const initialPlanetQuery = async() => {
    try {
        const { data } = await axios.get('https://swapi.dev/api/planets/')
        return data
    } catch (err) {
        return err
    }
}