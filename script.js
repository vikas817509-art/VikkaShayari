function copyShayari(button) {
    let text = button.parentElement.querySelector(".shayari").innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("✅ Shayari Copied!");
        })
        .catch(() => {
            alert("❌ Copy Failed");
        });
}

function shareShayari(button) {
    let text = button.parentElement.querySelector(".shayari").innerText;

    if (navigator.share) {
        navigator.share({
            title: "Vikka Shayari",
            text: text
        });
    } else {
        let url = "https://wa.me/?text=" + encodeURIComponent(text);
        window.open(url, "_blank");
    }
}

function darkMode() {
    document.body.classList.toggle("dark");
}

function toggleFavorite() {
    let btn = document.getElementById("favBtn");

    if (btn.innerHTML === "🤍 Favorite") {
        btn.innerHTML = "❤️ Favorited";
    } else {
        btn.innerHTML = "🤍 Favorite";
    }
}

function searchShayari() {
    let input = document.getElementById("search").value.toLowerCase();
    let shayaris = document.querySelectorAll(".shayari-box");

    shayaris.forEach(function(box) {
        let text = box.innerText.toLowerCase();

        if (text.includes(input)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}