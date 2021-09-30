function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let likes = 0;
setInterval(() => {
    const heart = document.querySelector('svg[aria-label="J’aime"]').parentNode;
    const arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
    if (heart) {
        heart.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`);
    }
    sleep(getRandomArbitrary(1500, 4000));
    arrow.click();
}, 7439); 
