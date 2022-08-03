let toggle = document.getElementById("toggle");
let body = document.getElementById("body")
let topBg = document.getElementById("top-bg")
let card = document.querySelectorAll(".card")
let userName = document.querySelectorAll(".username")
let social = document.querySelector(".social")
let socialFollowers = document.querySelectorAll(".social-followers")
let overview = document.querySelector(".overview")
let overviewCard = document.querySelectorAll(".overview-card")
let overviewCardTitle = document.querySelectorAll(".overview-card-title")
let overviewReactions = document.querySelectorAll(".overview-reactions")

const toggler = () => {
    // alert("I waas clicked")
    

    topBg.style.backgroundColor = "hsl(232, 19%, 15%)"
    body.style.backgroundColor = "hsl(230, 17%, 14%)"
    card[0].style.backgroundColor = "hsl(228, 28%, 20%)"
    card[1].style.backgroundColor = "hsl(228, 28%, 20%)"
    card[2].style.backgroundColor = "hsl(228, 28%, 20%)"
    card[3].style.backgroundColor = "hsl(228, 28%, 20%)"
    overviewCard[0].style.backgroundColor = "hsl(228, 28%, 20%)"
    overviewCard[1].style.backgroundColor = "hsl(228, 28%, 20%)"
    overviewCard[2].style.backgroundColor = "hsl(228, 28%, 20%)"
    overviewCard[3].style.backgroundColor = "hsl(228, 28%, 20%)"
    overviewCard[4].style.backgroundColor = "hsl(228, 28%, 20%)"
    overviewCard[5].style.backgroundColor = "hsl(228, 28%, 20%)"
    overviewCard[6].style.backgroundColor = "hsl(228, 28%, 20%)"
    overviewCard[7].style.backgroundColor = "hsl(228, 28%, 20%)"

    userName[0].style.color = "hsl(228, 34%, 66%)"
    userName[1].style.color = "hsl(228, 34%, 66%)"
    userName[2].style.color = "hsl(228, 34%, 66%)"
    userName[3].style.color = "hsl(228, 34%, 66%)"


    social.style.color = "hsl(0, 0%, 100%)"
    
    socialFollowers[0].style.color = "hsl(0, 0%, 100%)"
    socialFollowers[1].style.color = "hsl(0, 0%, 100%)"
    socialFollowers[2].style.color = "hsl(0, 0%, 100%)"
    socialFollowers[3].style.color = "hsl(0, 0%, 100%)"

    overview.style.color = "hsl(0, 0%, 100%)"

    overviewCardTitle[0].style.color = "hsl(228, 34%, 66%)"
    overviewCardTitle[1].style.color = "hsl(228, 34%, 66%)"
    overviewCardTitle[2].style.color = "hsl(228, 34%, 66%)"
    overviewCardTitle[3].style.color = "hsl(228, 34%, 66%)"
    overviewCardTitle[4].style.color = "hsl(228, 34%, 66%)"
    overviewCardTitle[5].style.color = "hsl(228, 34%, 66%)"
    overviewCardTitle[6].style.color = "hsl(228, 34%, 66%)"
    overviewCardTitle[7].style.color = "hsl(228, 34%, 66%)"

    overviewReactions[0].style.color = "hsl(0, 0%, 100%)"
    overviewReactions[1].style.color = "hsl(0, 0%, 100%)"
    overviewReactions[2].style.color = "hsl(0, 0%, 100%)"
    overviewReactions[3].style.color = "hsl(0, 0%, 100%)"
    overviewReactions[4].style.color = "hsl(0, 0%, 100%)"
    overviewReactions[5].style.color = "hsl(0, 0%, 100%)"
    overviewReactions[6].style.color = "hsl(0, 0%, 100%)"
    overviewReactions[7].style.color = "hsl(0, 0%, 100%)"



    
}

// toggler()

// const cardLoop = () => {
//     for (card of cards) {

//     }
// }