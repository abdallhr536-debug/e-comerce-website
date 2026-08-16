const scriptURL = "https://script.google.com/macros/s/AKfycbyJX5jf7o_j35OTtIs70aXeQc-D_UK7RgyH7REfL1oJG-b71euRTiWqPDyWyY756WWN4A/exec";

let form = document.getElementById("form_contact");

form.addEventListener("submit" , (e) => {
    e.preventDefault()

    fetch(scriptURL , {
        method: "POST",
        body: new FormData(form),
    })
    .then((response) => {
        setTimeout(() => {
            localStorage.removeItem("cart")
            window.location.reload()
        },3000)
    })
    .catch((error) => console.error("error!" , error.message))
})