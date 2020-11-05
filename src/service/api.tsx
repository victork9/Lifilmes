import axios from 'axios'

export function dataServiceGet(req) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.themoviedb.org/3/' + req.uri).then((response) => {
            resolve(response.data);
        }).catch((response) => {
            reject(response.data);
        })
    })
}