const jsonFile = require("./JSON.js");

const findPeopleInCityandSortByAge = (inputCity) => {
    const data = jsonFile.JsonFile();
    const result = data
        .filter(p => p.address.city === inputCity)
        .sort((a,b) => b.Age -  a.Age);
    console.log(result);
}

const findMostPopulatedCity = () => {
    const data = jsonFile.JsonFile();
    return data.reduce((acc, curr) => {
        if (curr.Children?.length > 0) {
            acc[curr.address.city] = acc[curr.address.city] ? acc[curr.address.city] + (1 + curr.Children.length) : (1 + curr.Children.length)
        }
        else {
            acc[curr.address.city] = acc[curr.address.city] ? acc[curr.address.city] + 1 : 1
        }
        return acc;
    }, {})
}
console.log(findMostPopulatedCity());