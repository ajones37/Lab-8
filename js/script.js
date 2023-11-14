function init(){
    function myEventFunction(){
	  alert('Ariana Jones:');
    }
 
    var d1 =document.getElementById('entrybutton');
	
    d1.getElementById('click', function){
		console.log('I was clicked');
		
   });



}
window.addEventListener('load', init);
