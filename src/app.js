const cloneRecipient = document.querySelector(".copy-container")
const clearButton = document.querySelector(".copies button")
const originals = document.querySelector(".original-container")

clearButton.addEventListener('click', removeAllNode)
originals.addEventListener('click', itemCopy)


function itemCopy(event) {
    if (event.target != originals) {
        const to_clone = event.target.closest("div")
        const clone = to_clone.cloneNode(true)
        cloneRecipient.append(clone)
    }
}


function removeAllNode() {
    while (cloneRecipient.firstChild) {
        cloneRecipient.removeChild(cloneRecipient.firstChild)
    }
}