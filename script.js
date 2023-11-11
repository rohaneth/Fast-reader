function boldFirstLetter() {
    var inputText = document.getElementById('inputText').value;
    var outputText =  document.getElementById('outputText');
    let selectedColor = document.getElementById('colorPicker').value;
    if(selectedColor == null){
        selectedColor = "black";
    }
    
    let words = inputText.split(' ');
    
    let boldedText = words.map((word)=>{
        if(word.length>0){
            return '<span style="color: ' + selectedColor + '; font-weight: bold;">' + word.charAt(0) + '</span>'   + word.slice(1);
        }else{
            return ' ';
        }
    }).join(' ');
    outputText.innerHTML = boldedText;
    

}

function larger(){
    outputText.style.fontSize = "larger";
}
function smaller(){
    outputText.style.fontSize = "smaller";
}

//  // Split the input text into words
//  var words = inputText.split(' ');

//  // Bold the first letter of each word
//  var boldedText = words.map(function(word) {
//      if (word.length > 0) {
//          return '<strong>' + word.charAt(0) + '</strong>' + word.slice(1);
//      } else {
//          return '';
//      }
//  }).join(' ');

//  // Display the result
//  outputText.innerHTML = boldedText;