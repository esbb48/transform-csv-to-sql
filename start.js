require("babel-core/register");
const transformLib = require("./lib/index");

var startId = 0;

var params = {
  "columnArray": [
    "id",
    "userName",
    "gender"
  ],
  "csvHeader": {
    "name": 0,
    "gender": 1
  },
  "inputFileName": "sample.csv",
  "tableName": "`User`",
  "outputFileName": "sample",
  initRowData: function (csvHeader, data) {
    startId += 1
    return {
      id: startId,
      userName: data[csvHeader.name],
      gender: data[csvHeader.gender]
    }
  }
}

transformLib.generate(params)
.then(function (result) {
  console.error("# Success:", result)
}).error(function (error) {
  console.error("# Error:", error)
});
