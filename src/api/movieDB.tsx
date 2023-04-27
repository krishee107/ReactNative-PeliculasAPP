import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "94376f04c6d275c4241ffcb07d651fc4",
        language: "es-ES"
    }
});

export default movieDB;
