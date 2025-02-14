 

  function palCheck(){
const text = document.getElementById('text-input').value;
    if(!text){
      alert("Please input a value");
    }
    const result = document.getElementById('result');
    const textA = text.toLowerCase().split("").filter((c) => !c.match(/[\(\)\\.\s_,-]/gi));
    console.log(textA);
    for (let i = 0; i < textA.length; i++){
      if(textA[i] !== textA[textA.length - 1 - i]){
        console.log(textA[i]);
        result.innerText = `${text} is not a palindrome`;
        return;
      }
    }
    result.innerText = `${text} is a palindrome`;
  }





 
