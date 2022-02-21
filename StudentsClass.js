const httpServer = require("http").Server;
const fs = require("fs");

const util = require("util");
const readFilePromise = util.promisify(fs.readFile);

class Students extends httpServer {
  constructor() {
    super();
    this.listen(9090);
    this.on("request", this.getJsonInfo);
  }
  getJsonInfo = (req, res) => {
    readFilePromise("./txtsFiffle/studentsJson.json")
      .then((data) => res.end(data))
      .catch((err) => res.end(`This is error : !!${err} `));
  };
}

module.exports = new Students();
// res.end(data.toString())
