let rgbValue = 255;

let dimBodyColor = setInterval( () => {
        if(rgbValue > 0) {
            
            document.body.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;
            rgbValue--;
        }
        else {
            clearInterval(dimBodyColor);
        }
    }, 500
);