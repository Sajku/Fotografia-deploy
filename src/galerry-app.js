const prevBtn = document.querySelector("#formLinkLeft");
const nextBtn = document.querySelector("#formLinkRight");
const allDescriptions = document.querySelectorAll(".description");
const mainImg = document.querySelector("#photo");

prevBtn.addEventListener("click", function() {
    var temp = document.getElementById("photo").src;
    var result = temp.split("/")[5].split(".")[0];
    changeImg(Number(result) - Number(1));
});

nextBtn.addEventListener("click", function() {
    var temp = document.getElementById("photo").src;
    var result = temp.split("/")[5].split(".")[0];
    changeImg(Number(result) + Number(1));
});

function changeImg(x) {

    if (x <= 0) {
        x = 54;
    } else if (x >= 55) {
        x = 1;
    }
    mainImg.src = "./photos/" + x + ".jpg";
    allDescriptions.forEach(function(e) {
        e.classList.remove("visible");
    });
    document.getElementById(x).classList.add("visible");
}
