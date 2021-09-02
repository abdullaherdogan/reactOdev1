import axios from "axios"
async function getData(userId){
    const user = await axios("https://jsonplaceholder.typicode.com/users/"+userId)
    return user
}
export {getData}