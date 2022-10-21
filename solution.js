const jsonFile = require("./JSON.js");

const data = jsonFile.JsonFile();

const findPeopleInCityandSortByAge = (inputCity) => {
    const result = data
        .filter(p => p.address.city === inputCity)
        .sort((a, b) => b.Age - a.Age);
    console.log(result);
}

const findMostPopulatedCity = () => {
    const result = data.reduce((acc, curr) => {
        curr.address.city = curr.address.city.replace('-', '')
            .replace(' ', '')
        if (curr.Children?.length > 0) {
            acc[curr.address.city] = acc[curr.address.city] ? acc[curr.address.city] + (1 + curr.Children.length) : (1 + curr.Children.length)
        } else {
            acc[curr.address.city] = acc[curr.address.city] ? acc[curr.address.city] + 1 : 1
        }
        return acc;
    }, {})
    return Object.entries(result).sort((a, b) => b[1] - a[1])[0][0]
}

const findChildrenInCityAndSortedByAge = (inputcity) => {
    const result = data
        .filter(p => p.address.city === inputcity)
        .map(p => p.Children)
        .flat()
        .map(c => ({
            name: c.Name,
            age: c.Age
        }))
        .sort((a, b) => b.age - a.age);

    console.log(result);
    return result;
}

const findPeopleNameStartWithLAndHasChildern = () => {
    const result = data.filter(p => p['full name'].startsWith("L") && p.Children?.length > 0).map(p => p["full name"]);
    return result;
}
console.log(findPeopleNameStartWithLAndHasChildern());