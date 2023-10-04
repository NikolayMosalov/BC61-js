const BASE_URL = 'https://jsonplaceholder.typicode.com';
const END_POINT = '/users';

function getUser() {
    return fetch(`${BASE_URL}${END_POINT}`).then(res => {
        if(!res.ok ) {
            throw new Error(res.status)
        }
        return res.json()
    } )
}



getUser().then(console.log).catch((err) => {
    console.log(err);
})