import * as fse from 'fs-extra'

'use strict'
const excelToJson = require('convert-excel-to-json')

export async function parseexcel(item: Buffer) {
  return new Promise(function(resolve, reject) {
    try {
      const output = excelToJson({
        sourceFile: './testdata/excel/worldcities.xlsx',
        header: {
          rows: 1
        }
      })
      resolve(output)
    } catch (error) {
      console.error(error)
    }
  })
}

/*
export async function parseexcel(item: Buffer){
    return new Promise((resolve,reject) =>{
        excel().fromString(item.toString()).then((result:any) =>{
            console.log(output);
            resolve(result);
        }).catch((err:any) =>{
            resolve(err);
        })
    })
    
}


'use strict';
const excelToJson = require('convert-excel-to-json');
const output = excelToJson({
    sourceFile: './testdata/excel/worldcities.xlsx',
    header:{
        rows:1
    }
});
console.log(JSON.stringify(output));



*/
