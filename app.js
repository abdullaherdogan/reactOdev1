import { getData } from "./lib/service.js";

getData(1).then(function(result){
    console.log(result)
})