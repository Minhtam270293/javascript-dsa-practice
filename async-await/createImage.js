
const imgContainer = document.querySelector('.image-gallery')
const EUGMP = "./Imgs/img-1.jpg";
const PICS = "./Imgs/img-2.jpg";
const WHO = "./Imgs/img-3.jpg";
const GMPArr = [EUGMP,PICS,WHO];

function delay(sec) {
    return new Promise(function(resolve) {
        setTimeout(resolve, sec*1000);
    })
};

function createImg(imgPath) {
    return new Promise(function(resolve, reject){
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load',function(){
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error',function () {
            reject(new Error('Fail to load image'))
        });
    })
};

async function loadNPause() {
    try {
    let currentImg = await createImg(EUGMP);
    await delay(2);
    currentImg.style.display = 'none';
    currentImg = await createImg(WHO);
    await delay(2);
    currentImg.style.display = 'none';}
    catch(err) {
        console.error(`{err.message} ***`)
    }
};

async function loadAll(imgArr) {
    try {
        const imgs = await Promise.all(imgArr.map(path => createImg(path)));
        console.log(imgs);
        
    } catch(err) {
        console.error(err.message);
    }
};

loadAll(GMPArr);