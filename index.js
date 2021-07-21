

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

const Discord = require("discord.js"); 
const myid = ['476394243632398356']; //هنا بتحط الايدى بتاعك بتاع الديسكورد
const prefix = ['1']; 
const cmd = require("node-cmd") 
const client = new Discord.Client(); 
const client2 = new Discord.Client(); 
const client3 = new Discord.Client(); 
const client4 = new Discord.Client(); 
const client5 = new Discord.Client(); 
const client6 = new Discord.Client(); 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
client.login("NzMwNDAzMzAxMTcwMDg1ODk5.YPiLTw.3QQhUQnuN4JCiTQarOST-PoWugU");
client2.login(""); 
client3.login(""); 
client4.login(""); 
client5.login(""); 
client6.login(""); 

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('message', message => {
  if (message.content === prefix+'d1') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c1'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p1') {
message.channel.send('#profile')
  }
  if(message.content ===  prefix+'u1'){
message.channel.send("©angryblack YT")
  }    
  if(message.content === prefix+'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s1')) {
    var text = message.content.split(' ').slice(1).join(' '); 
     message.channel.send(text);
  }
}); 
 
client2.on('message', message => {
  if (message.content === prefix+'d2') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c2'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p2') {
message.channel.send('#profile')
  }
   if(message.content === prefix+'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s2')) {
    var text = message.content.split(' ').slice(1).join(' '); 
     message.channel.send(text);
  }
}); 
 
client3.on('message', message => {
  if (message.content === prefix+'d3') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c3'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p3') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s3')) {
    //copyright © Angry Black 2020.//❦Angry Black❦
    var text = message.content.split(' ').slice(1).join(' '); 
     message.channel.send(text);
  }
}); 
 
client4.on('message', message => {
  if (message.content === prefix+'d4') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c4'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p4') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s4')) {
    var text = message.content.split(' ').slice(1).join(' '); 
     message.channel.send(text);
  }
}); 
 
client5.on('message', message => {
  if (message.content === prefix+'d5') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c5'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p5') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s5')) {
    var text = message.content.split(' ').slice(1).join(' '); 
     message.channel.send(text);
  }
}); 

client6.on('message', message => {
  if (message.content === prefix+'d6') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c6'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p6') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s6')) {
    var text = message.content.split(' ').slice(1).join(' '); 
     message.channel.send(text);
  }
}); 


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
}); 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client2.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
}); 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client3.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
}); 
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 
client4.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
}); 
 
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 
client5.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
});
 
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 
client6.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`) 
          .then(m => {
            count++;
          })
          
        }
      }
}); 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client2.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client3.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client4.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client5.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client6.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on("ready", () => {
  console.log('Bot created by ©Angry Black')
})

client.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped") 
  }
}) 

client2.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped") 
  }
}) 

client3.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped") 
  }
}) 

client4.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped") 
  }
}) 

client5.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped") 
  }
}) 

client6.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped") 
  }
}) 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ") 
    }
}); 

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ") 
    }
}); 

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ") 
    }
}); 

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ") 
    }
}); 

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ") 
    }
}); 

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ") 
    }
}); 

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬