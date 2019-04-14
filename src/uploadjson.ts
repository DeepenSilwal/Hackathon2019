import AWS = require('aws-sdk')
var uuid = require('uuid')

var bucketName = 'json' + uuid.v4()
var keyName = 'exceltojson'

export async function upload() {
  var bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' })
    .createBucket({ Bucket: bucketName })
    .promise()
  bucketPromise
    .then(function(data) {
      var objectParams = { Bucket: bucketName, Key: keyName, Body: 'Hello Worlds' }
      var uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise()
      uploadPromise.then(function(data) {
        console.log('Successfully uploaded data to ' + bucketName + '/' + keyName)
      })
    })
    .catch(function(err) {
      console.error(err, err.stack)
    })
}
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
