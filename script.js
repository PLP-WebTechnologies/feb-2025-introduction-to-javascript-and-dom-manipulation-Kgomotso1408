document.addEventListener("DOMContentLoaded", () => {
    const changeTextButton = document.getElementById("changeText");
    const addElementButton = document.getElementById("addElement");
    const removeElementButton = document.getElementById("removeElement");
    const dynamicText = document.getElementById("dynamicText");
    const container = document.getElementById("container");

    changeTextButton.addEventListener("click", () => {
        dynamicText.textContent = "Text has been changed!";
        dynamicText.style.color = "blue";
        dynamicText.style.fontWeight = "bold";
    });

    addElementButton.addEventListener("click", () => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a new paragraph added dynamically.";
        container.appendChild(newParagraph);
    });

    removeElementButton.addEventListener("click", () => {
        if (container.lastElementChild.tagName === "P") {
            container.removeChild(container.lastElementChild);
        }
    });
});