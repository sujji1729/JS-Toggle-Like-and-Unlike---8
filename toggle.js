
let puppyImage = document.getElementById("puppyImage");
let likeIcon = document.getElementById("likeIcon");
let likeButton = document.getElementById("likeButton");

let like = true;

function button() {

    if (like === true) {

        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIcon.style.color = "#0967d2";
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "#ffffff";

        like = false;

    }

    else {

        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIcon.style.color = "#cbd2d9";
        likeButton.style.backgroundColor = "#cbd2d9";
        likeButton.style.color = "#9aa5b1";

        like = true;

    }

   
}