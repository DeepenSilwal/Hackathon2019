import * as fse from 'fs-extra'

const xlsx = require('xlsx')
export async function parseexcel(item: Buffer) {
  var stream = xlsx.stream.to_json(item, { raw: true })
  return new Promise(function(resolve, reject) {
    if (stream != null) {
      resolve(stream)
    } else {
      reject(Error('It broke'))
    }
  })
}

/*
'use strict'
const excelToJson = require('convert-excel-to-json')

export async function parseexcel(item: Buffer) {
  var stream = xlsx.stream.to_json(item, {raw:true});



  return new Promise(function(resolve, reject) {
    try {
      const output = excelToJson({
        sourceFile: 
      })
      console.log(output)
     // resolve(output)
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
\




*/
