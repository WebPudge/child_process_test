var cp = require('child_process');

cp.spawn('node', ['worker.js']);
cp.exec('node worker.js',function(err,stdout,stderr){
});
cp.execFile('./worker.js',function(err,stdout,stderr){
  console.log(err)
});
cp.fork('./worker.js');