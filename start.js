require("babel-core/register");
const transformLib = require("./lib/index");

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
  "outputFileName": "sample"
}

transformLib.generate(params)
.then(function(result){
  console.error("# Success:", result)
}).error(function(error){
  console.error("# Error:", error)
});
