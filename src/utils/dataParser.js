export const parsePlanetData = data => {
    let planets = data.sort((p1, p2 ) => p1.name.localeCompare(p2.name))
    return planets.map(planet => {
        const { name, diameter, climate, terrain, surface_water, population, url, residents } = planet
        return {
            name: checkForUnknown(name),
            diameter: checkForUnknown(diameter),
            climate: checkForUnknown(climate),
            terrain: checkForUnknown(terrain),
            surface_water: checkForUnknown(surface_water),
            population: checkForUnknown(population),
            url,
            residents
        }
    })
}

export const checkForUnknown = data => {
    if (data === 'unknown' || data === null || data === undefined) {
        return null
    } else {
        return data
    }
}

export const formatNumber = number => {
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : null;
}