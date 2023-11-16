function init(){	

   function myEventFunction(){
    alert('Ariana Jones: This is a test');
  }
  
  var d4 = document.getElementById('div4');
  d4.addEventListener('click', myEventFunction);
  d4.addEventListener('click', function(){
    console.log('I was Clicked!');
    d4.innerHTML = '<strong>Goodbye</strong>';
  });
}
window.addEventListener('load', init);
