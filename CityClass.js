const httpServer = require("http").Server;
const fs = require("fs");
const util = require("util");

const readAsync = util.promisify(fs.readFile);

class CityClass extends httpServer {
  constructor() {
    super();
    this.listen(8080), this.on("request" , this.GetCityInfo);
  }
  GetCityInfo = (request, respond) => {
    readAsync("./txtsFile/CityInfo.txt")
      .then((result) => {
        respond.end(result.toString());
      })
      .catch((err) => respond.end(`Error! ${err}`));
  };
}

module.exports = new CityClass();
