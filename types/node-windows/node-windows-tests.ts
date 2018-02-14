import * as path from 'path';

import * as wincmd from 'node-windows';
import { Service, EventLogger } from 'node-windows';

var __dirname = './';

//--- example/install.js ---

// Create a new service object
var svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: path.join('C:\path\to', 'helloworld.js'),
  env:{
    name: "NODE_ENV",
    value: "production"
  }
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log(svc.name+' started!\nVisit http://127.0.0.1:3000 to see it in action.');
});

// Install the script as a service.
svc.install();


//--- example/uninstall.js ---


// Create a new service object
var svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: path.join('C:\path\to', 'helloworld.js'),
  env:{
    name: "NODE_ENV",
    value: "production"
  }
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log(svc.name + ' started!\nVisit http://127.0.0.1:3000 to see it in action.');
});

// Install the script as a service.
svc.install();

// ---

// Create a new service object
var svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: 'C:\\path\\to\\helloworld.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();

// ---

var svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: 'C:\\path\\to\\helloworld.js',
  env: {
    name: "HOME",
    value: process.env["USERPROFILE"] // service is now able to access the user who created its' home directory
  }
});

// ---

var svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: 'C:\\path\\to\\helloworld.js',
  env: [{
    name: "HOME",
    value: process.env["USERPROFILE"] // service is now able to access the user who created its' home directory
  },
  {
    name: "TEMP",
    value: path.join(process.env["USERPROFILE"],"/temp") // use a temp directory in user's home directory
  }]
});

// ---

// Create a new service object
var svc = new Service({
  name:'Hello World',
  script: path.join(__dirname,'helloworld.js')
});

svc.user.domain = 'mydomain.local';
svc.user.account = 'username';
svc.user.password = 'password';

// ---

// Create a new service object
var svc = new Service({
  name:'Hello World',
  script: path.join(__dirname,'helloworld.js')
});

svc.sudo.password = 'password';

// ---

// Create a new service object
var svc = new Service({
  name:'Hello World',
  script: path.join(__dirname,'helloworld.js')
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();

// ---

var svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: 'C:\\path\\to\\helloworld.js',
  wait: 2,
  grow: .5
});

// ---

var log = new EventLogger({
  source: 'My Event Log',
  eventLog: 'SYSTEM'
});

log.info('Basic information.');
log.warn('Watch out!');
log.error('Something went wrong.');
log.auditSuccess('AUser Login Success');
log.auditFailure('AUser Login Failure');

log.info('Something different happened!', 1002, function(){
  console.log('Something different happened!');
});

// ---

wincmd.isAdminUser(function(isAdmin){
  if (isAdmin) {
    console.log('The user has administrative privileges.');
  } else {
    console.log('NOT AN ADMIN');
  }
});

// ---

wincmd.list(function(svc){
  console.log(svc);
},true);

// ---

wincmd.kill(12345,function(){
  console.log('Process Killed');
});