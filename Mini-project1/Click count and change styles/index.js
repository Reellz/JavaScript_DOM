let textArea = document.querySelector("#textarea")
let textButton = document.querySelector("#add-text")
let textBox = document.querySelector("#text-box")
let colors = document.querySelector("#colors")
let fontSize = document.querySelector("#font-size")
let fontFamily = document.querySelector("#font-family")

let count = 0;

function handleClick() {
    // Increment click count and update button text
    count++;
    textButton.innerText = `Clicked ${count} times`;

    // Get input text
    let textValue = textArea.value.trim();
    if (textValue === "") return;

    // Create new paragraph element
    let textItem = document.createElement('p');
    textItem.innerText = textValue;

    // Apply styles from dropdowns
    applyStyles(textItem);

    // Add to the textBox
    textBox.appendChild(textItem);

    // Clear the textarea
    textArea.value = "";
}

function applyStyles(textItem){
    if (colors.value) {
        textItem.style.color = colors.value;
    }
    if (fontSize.value) {
        textItem.style.fontSize = fontSize.value;
    }
    if (fontFamily.value) {
        textItem.style.fontFamily = fontFamily.value;
    }
}

// Attach the unified handler to the button
textButton.addEventListener('click', handleClick);
