import fs from "fs";
import csv from "fast-csv";
import path from "path";
import Promise from "bluebird";
import _ from "lodash";

let pathString = "./input";

var getInsertTitle = (columnArray, tableName) => {
  let processedColumn =  _.map(columnArray, (val) => { return "`"+ val +"`"});
  let sql = "INSERT INTO " + tableName + "(" + processedColumn.join(",") + ") VALUES"
  return sql;
}

module.exports = {
  generate: (params) => {
    let {
      columnArray,
      csvHeader,
      inputFileName,
      tableName,
      outputFileName
    } = params

    let sql = "";

    return new Promise((resolve, reject) => {

      let insertContentArray = [];
      let stream = fs.createReadStream(path.resolve(pathString, inputFileName));

      let csvStream = csv().on("data", (source) => {
        let result = params.initRowData(csvHeader, source);

        // You can put some transform logical in here
        // ...
        // ...


        // 處理值轉成文字字串
        let values = _.map(columnArray, (column) => {
          let val = result[column];
          if (!val) return "''";
          return "'" + val + "'";
        });

        insertContentArray.push("(" + values.join(",") + ")");

      }).on("end", () => {
        sql = getInsertTitle(columnArray, tableName) + insertContentArray.join(",") + ";";

        let dataBuffer = new Buffer(sql);
        let filePath = "./output/sql_" + outputFileName +"_" + Date.now() + ".sql"
        fs.writeFile(filePath, dataBuffer, (err) => {
          return resolve(filePath);
        });

      });

      stream.pipe(csvStream);
    });
  }
};
