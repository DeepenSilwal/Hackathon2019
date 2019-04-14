"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse = require('csv-parse');
const fse = require("fs-extra");
const csv = require('csvtojson');
const input = '#welcome\n"1","2","3","4"\n"a","b","c","d"';
let results = [];
fse
    .createReadStream('./testdata/csv/testA.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    //console.log(results)
    let x = [];
    for (let result of results) {
        x.push(JSON.parse(result.toString()));
    }
    console.log(JSON.stringify(x));
});
fse.readFile('./testdata/csv/testA.csv').then(result => {
    console.log(result.toString());
    parse(result.toString(), {}, { comment: '#' }, function (err, output) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(JSON.stringify(output));
        }
    });
});
//# sourceMappingURL=parse-csv.js.map