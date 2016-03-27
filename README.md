# transform-csv-to-sql

## Note

1. You should prepare a .csv file
2. It's to mysql
3. The first row isn't column defined. It means all rows which should be data.

## Setup

#### 1. Put `.csv` file in input folder
#### 2. Update params

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

#### 3. (option) Add Some transform Logical in start.js

#### 4. Exec cli
```
$ npm install
$ npm start
```

#### 5. You can see the success message in terimal, and it will return output path.
