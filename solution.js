const jsonFile = require("./JSON.js");

const findPeopleInCity = (city) => {
    const data = jsonFile.JsonFile()
    console.log(data[0].address.city);
}


