"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
var uuid = require('uuid');
var bucketName = 'json' + uuid.v4();
var keyName = 'exceltojson';
function upload() {
    return __awaiter(this, void 0, void 0, function* () {
        var bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' })
            .createBucket({ Bucket: bucketName })
            .promise();
        bucketPromise
            .then(function (data) {
            var objectParams = { Bucket: bucketName, Key: keyName, Body: 'Hello Worlds' };
            var uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
            uploadPromise.then(function (data) {
                console.log('Successfully uploaded data to ' + bucketName + '/' + keyName);
            });
        })
            .catch(function (err) {
            console.error(err, err.stack);
        });
    });
}
exports.upload = upload;
//upload();
/*
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();
bucketPromise.then(
  function(data) {
    var objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });
}).catch(
  function(err) {
    console.error(err, err.stack);
});
*/
//# sourceMappingURL=uploadjson.js.map