const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular")
const colorsArray = ["red", "orange", "yellow", "green", "blue"]

console.log(starsEl);

updateRating(0);

function updateRating(index) {
    starsEl.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`
        emojiEl.style.color = colorsArray[index]
        // emojiEl.style.backgroundColor="white"
    })
}

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        console.log("clicked", index + 1);
        updateRating(index);
    });
});


