const originals = document.querySelector(".original-container")

originals.addEventListener('click', item_copy)

function item_copy(event) {
    if (event.target != originals) {
        console.log(event.target.innerHTML)
    }
}