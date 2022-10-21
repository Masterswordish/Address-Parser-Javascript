const jsonFile = require("./JSON.js");

const findPeopleInCityandSortByAge = (inputCity) => {
    const data = jsonFile.JsonFile();
    const result = data
        .filter(p => p.address.city === inputCity)
        .sort((a,b) => b.Age -  a.Age);
    console.log(result);
}

const findMostPopulatedCity = (inputCity) => {
    const data = jsonFile.JsonFile();
    const result = data
        .reduce()
}


findPeopleInCityandSortByAge('Amsterdam');
