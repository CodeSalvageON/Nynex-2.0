function waitForElement(id, callback){
  let pops = setInterval(function () {
    if( document.getElementById(id)) {
      clearInterval(pops);
      callback();
    }
  }, 100);
}