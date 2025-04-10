const mainImageContainer = document.createElement('div')
mainImageContainer.id = 'mainImageContainer'
document.body.append(mainImageContainer)

const mainImage = document.createElement('img')
mainImage.id = 'mainImage'
mainImage.src = ''
mainImageContainer.appendChild(mainImage)



const image1 = document.createElement('img')
image1.setAttribute('src', 'img/zebre.jpg')
document.body.append(image1)

const image2 = document.createElement('img')
image2.setAttribute('src', 'img/riziere.jpg')
document.body.append(image2)

const image3 = document.createElement('img')
image3.setAttribute('src', 'img/ane.jpg')
document.body.append(image3)

const image4 = document.createElement('img')
image4.setAttribute('src', 'img/montagne.jpg')
document.body.append(image4)


image1.addEventListener('click', function() {
    mainImage.src = 'img/zebre.jpg';
});

image2.addEventListener('click', function() {
    mainImage.src = 'img/riziere.jpg';
});

image3.addEventListener('click', function() {
    mainImage.src = 'img/ane.jpg';
});

image4.addEventListener('click', function() {
    mainImage.src = 'img/montagne.jpg';
});