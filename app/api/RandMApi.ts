import Axios from "axios";

Axios.defaults.baseURL = "https://rickandmortyapi.com/api/"


//Getting data from different characters
export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    // origin: object;
    // location: object;

}

export type AllCharacters = {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results: [{
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        image: string;
        origin : {
            name: string;
            url: string;
        };
        location: {
            name: string;
            url: string;
        };
        episode: []
      }
    ]     
}
// 126 total
//Getting data from different locations

export type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    // residents: [] viser hvilke karakterer som sist ble sett på denne lokasjonen
}

// 51 total
//Getting data from different episodes

export type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    // characters: [] viser hvilke karakterer som var med i episoden

}

const getCharacter = async (characterId: number | string)  => {
    try {
        const response = await Axios.get<Character>(`character/${characterId}`)
        return response.data;
    } catch (error) {
        throw "FEIL VED HENTING AV KARAKTER: " + error
    }
}
// Henter ut alle
const getAllCharacters = async (page: number) => {
    try {
        const response = await Axios.get<AllCharacters>(`character/?page=${page}`)
        return response.data
    } catch (error) {
        throw "FEIL VED HENTING AV KARAKTER: " + error
    }
}

const getCharacterSearch = async (name: string) => {
    try {
        const response = await Axios.get<AllCharacters>(`character/?name=${name}`)
        return response.data
    } catch (error) {
        throw "FEIL VED HENTING AV KARAKTER: " + error
    }
    
}

const getLocaiton = async (locationId: number) => {
    try {
        const response = await Axios.get<Location>(`location/${locationId}`)
        return response.data
    } catch (error) {
        throw "FEIL VED HENTING AV KARAKTER: " + error
    }
}
const getEpisode = async (episodeId: number) => {
    try {
        const response = await Axios.get<Episode>(`episode/${episodeId}`)
        return response.data
    } catch (error) {
        throw "FEIL VED HENTING AV KARAKTER: " + error
    }
}

export default {
    getCharacter,
    getLocaiton,
    getEpisode,
    getAllCharacters,
    getCharacterSearch
}