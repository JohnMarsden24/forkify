import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query
    }

    async getResults(query) {
        const url = 'https://forkify-api.herokuapp.com/api/search';
        try {
            const response = await axios(`${url}?q=${this.query}`);
            this.results = response.data.recipes 
        } catch(error) {
            alert(error);
        }
    };
}