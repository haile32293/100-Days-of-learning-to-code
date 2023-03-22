const myimage  = document.querySelector('img');


myimage.onclick = ()=>{
    const mysrc = myimage.getAttribute('src');

    if (mysrc === "images/fire-fox.jpg"){
        myimage.setAttribute('src', 'images/fire-fox1.jpg');
    } else{
        myimage.setAttribute('src', "images/fire-fox.jpg")
    }
}