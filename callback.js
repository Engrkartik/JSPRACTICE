function newreg(callback) {
    setTimeout(()=> {
     console.log('register end');
       callback();
    },2000)
}
function email(callback){
  setTimeout(()=> {
    console.log('email ends');
    callback();
  },1000)
}
function login(callback){
  setTimeout(()=> {
  console.log('login end');
  callback();
  },1000)
}

newreg(()=> {
  email();
  login();
});
