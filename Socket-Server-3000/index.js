var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    if(msg == 'pumpON'){
      console.log('Pump Sequence Activated');
      pumpON();
    }
    if(msg == 'pumpOFF'){
      console.log('Pump Sequence Activated');
      pumpOFF();
    }
    if(msg == 'pumpSEQ'){
      console.log('Pump Sequence Activated');
      pumpSEQ();
    }
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

function pumpON() {
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn('python',["./pumpON.py"]);
}
function pumpOFF() {
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn('python',["./pumpOFF.py"]);
}
function pumpSEQ() {
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn('python',["./pumpSEQ.py"]);
}