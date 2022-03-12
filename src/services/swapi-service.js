export default class SwapiService {
  _baseURL = "https://swapi.dev/api/";
  _baseImageUrl = 'https://starwars-visualguide.com/assets/img'

  getResources = async (url) => {
    const response = await fetch(`${this._baseURL}${url}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  };

  getAllPeople = async () => {
    const response = await this.getResources(`people/`);
    return response.results.map((person) => this._transformPerson(person));
  };

  getPerson = async (id) => {
    const person = await this.getResources(`people/${id}`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const response = await this.getResources(`planets/`);
    return response.results.map((planet) => this._transformPlanet(planet));
  };

  getPlanet = async (id) => {
    const planet = await this.getResources(`planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const response = await this.getResources(`starships/`);
    return response.results.map((starship) =>
      this._transformStarship(starship)
    );
  };

  getStarship = async (id) => {
    const starship = await this.getResources(`starships/${id}`);
    return this._transformStarship(starship);
  };

  getPersonImageUrl = (id)=>{
    return `${this._baseImageUrl}/characters/${id}.jpg`
  }

  getPlanetImageUrl = (id)=>{
    return `${this._baseImageUrl}/planets/${id}.jpg`

  }

  getStarshipImageUrl = (id)=>{
    return `${this._baseImageUrl}/starships/${id}.jpg`

  }

  _transformPlanet = ({ name, population, rotation_period, diameter, url }) => {
    return {
      id: this._extraxtID(url),
      name,
      population,
      rotationPeriod: rotation_period,
      diameter,
    };
  };

  _transformPerson = ({ name, gender, mass, skin_color, url }) => {
    return {
      id: this._extraxtID(url),
      name,
      gender,
      mass,
      skin: skin_color,
    };
  };

  _transformStarship = ({ name, passengers, crew, length, url }) => {
    return {
      id: this._extraxtID(url),
      name,
      passengers,
      crew,
      length,
    };
  };

  _extraxtID = (url) => {
    return url.match(/\/(\d+)\/$/)[1];
  };
}
