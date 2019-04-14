const parse = require('csv-parse')
import * as fse from 'fs-extra'
const csv = require('csvtojson')

const input = '#welcome\n"1","2","3","4"\n"a","b","c","d"'

let results: any = []
fse
  .createReadStream('./testdata/csv/testA.csv')
  .pipe(csv())
  .on('data', (data: any) => results.push(data))
  .on('end', () => {
    //console.log(results)
    let x = []
    for (let result of results) {
      x.push(JSON.parse(result.toString()))
    }
    console.log(JSON.stringify(x))
  })

fse.readFile('./testdata/csv/testA.csv').then(result => {
  console.log(result.toString())
  parse(result.toString(), {}, { comment: '#' }, function(err: any, output: any) {
    if (err) {
      console.log(err)
    } else {
      console.log(JSON.stringify(output))
    }
  })
})
