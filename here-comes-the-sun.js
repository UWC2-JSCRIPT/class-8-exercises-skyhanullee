let rgbValue = 0;

const brightenBodyColor = () => {
    rgbValue++;
    if(rgbValue < 255) {
        document.body.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;
        requestAnimationFrame(brightenBodyColor);
    }
};

requestAnimationFrame(brightenBodyColor);