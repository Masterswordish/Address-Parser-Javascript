const jsonFile = require("./JSON.js");

const findPeopleInCity = (inputCity) => {
    const data = jsonFile.JsonFile();
    const result = data
        .filter(p => p.address.city === inputCity)
        .sort((a,b) =>);
    console.log(result);
}

findPeopleInCity('Amsterdam');
