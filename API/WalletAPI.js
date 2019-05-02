const URL = "http://192.168.43.17:8000/";

export function getTowns(){
    const url = URL+"towns";
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("Une erreur est survenue lors de la collecte " +error))

}

export function getStoresOfTown(town){
    const url = URL+"towns/"+town+"/merchantpoints";
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("Une erreur est survenue lors de la collecte " +error))
}