const originals = document.querySelector(".original-container")
const cloneRecipient = document.querySelector(".copy-container")

originals.addEventListener('click', itemCopy)

function itemCopy(event) {
    if (event.target != originals) {
        const to_clone = event.target.closest("div")
        const clone = to_clone.cloneNode(true)
        cloneRecipient.append(clone)
    }
}