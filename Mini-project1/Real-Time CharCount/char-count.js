// Get elements
const textArea = document.querySelector("#textarea");
const count = document.querySelector("#count");
const maxLength = 200;

// listen for input event
textArea.addEventListener('input', function(){
    if (textArea.value.length > maxLength){
        textArea.value = textArea.value.substring(0, maxLength);
    }
    const remaining = maxLength - textArea.value.length;

    // Update the counter
    count.innerText = `${remaining} characters remaining`;
})