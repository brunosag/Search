// Apply style to main-search when input focused
var mainSearchInput = document.querySelector(".main-search-input");
var mainSearch = document.querySelector(".main-search");
mainSearchInput.addEventListener("focus", () => {
    mainSearch.classList.add("input-focused");
})
mainSearchInput.addEventListener("blur", () => {
    mainSearch.classList.remove("input-focused");
})

// Show/hide clear button according to input
var mainSearchClear = document.querySelector(".main-search-clear");
var imageSearchSparator = document.querySelector(".image-search-separator");
mainSearchInput.addEventListener("input", () => {
    if (mainSearchInput.value) {
        mainSearchClear.style.display = "block";
        imageSearchSparator.style.display = "block";
    }
    else {
        mainSearchClear.style.display = "none";
        imageSearchSparator.style.display = "none";
    }
})

// Clear input when clear button clicked
mainSearchClear.addEventListener("click", () => {
    mainSearchInput.value = "";
    mainSearchClear.style.display = "none";
    imageSearchSparator.style.display = "none";
})