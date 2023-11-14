function init(){
  var button = document.getElementById('entrybutton');

  function showMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Ariana Jones:" + textbox.value);
	console.log('I was clicked')
  }

button.addEventListener('click',showMeText);
}
window.addEventListener('load', init);
