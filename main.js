(function () {
    let likes = 0;
    setInterval(() => {
        const heart = document.querySelector('svg[aria-label="J\'aime"]').parentNode;
        const arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
        if (heart) {
            heart.click()
            likes++;
            console.log(`You've liked ${likes} post(s)`);
        }
        arrow.click();
    }, getRandomArbitrary(5000, 15000)); 

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
})();
