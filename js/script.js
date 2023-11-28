function init(){	


  function showMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Ariana Jones:" + textbox.value);


  
}
window.addEventListener('load', init);
