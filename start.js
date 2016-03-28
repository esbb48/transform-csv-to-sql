require("babel-core/register");
const transformLib = require("./lib/index");

var startId = 0;

var params = {
  columnArray: [
    // Insert SQL Column
  ],
  csvHeader: {
    // Column Defined
  },
  inputFileName: "xxx.csv",
  tableName: "``", // "`table`" or "`database`.`table`
  outputFileName: "xxx",
  initRowData: (csvHeader, data) => {
    startId += 1
    return {
      id: startId
    }
  }
}

transformLib.generate(params)
.then((result) => {
  console.error("# Success:", result)
}).error((error) => {
  console.error("# Error:", error)
});
