# transform-csv-to-sql

## Note

1. You should prepare a .csv file
2. It's to mysql
3. The first row isn't column defined. It means all rows which should be data.

## Sample Demo

#### 1. Exec cli
```
$ npm install
$ npm run demo
```
#### 2. See the file in `./output/sql_sample_xxxxx.sql`


## Setup

#### 1. Put `.csv` file in input folder
#### 2. Update params

```
{
  columnArray: [] # Insert SQL Column
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

#### 3. Add Some transform Logical in `lib/index.js` (option)

#### 4. Exec cli
```
$ npm install
$ npm start
```

#### 5. You can see the success message in terimal, and it will return output path.
