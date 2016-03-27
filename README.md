# transform-csv-to-sql
Only Base Layout

# Note

1. You should prepare a .csv file
2. It's to mysql
3. the first row isn't column defined. It means all rows which should be data.

# Setup

1. put `.csv` file in input folder
2. update params

```
{
  columnArray: [] # SQL Column Order
  csvHeader: {} # Column Defined
  inputFileName: "xxx.csv"
  tableName: "`table`" or "`database`.`table`"
  outputFileName: "xxx"
  initRowData: function() {
    return {
    }
  }
}
```

3. (option) add Some transform Logical in start.js

4. exec cli
```
$ npm install
$ npm start
```

5. You can see the success message in terimal, and it will return output path.


5. find result in output folo

$ npm start
```