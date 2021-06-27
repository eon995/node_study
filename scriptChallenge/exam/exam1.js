

const path = require('path');
const process = require('process');
const fs = require('fs');



fs.readdir('./photo', function (err, filelist) {
    for (i = 0; i < filelist.length; i++) {
        let file = filelist[i];
        let fileName = path.basename(file);
        divFile(fileName);
        // divFile(file);

    }

    if (err) {
        console.error('error contact');
    }
})

function checkFolder(file) {
    if (file.indexOf('video') > 0) {
        count += 1;
    }
}

function createFolder() {

    fs.mkdir('video') //
        .catch(console.error);

    fs.mkdir('captured') //
        .catch(console.error);

    fs.mkdir('duplicated') //
        .catch(console.error);

}

function divFile(file) {
    if (file.indexOf('.mp4') > 0 || file.indexOf('.mov') > 0) {
        fs.rename(`./photo/${file}`, `./video/${file}`, (error) => { console.log(error); });
    } else if (file.indexOf('.jpg') > 0 || file.indexOf('.png') > 0) {
        fs.rename(`./photo/${file}`, `./captured/${file}`, (error) => { console.log(error); });
    } else if (file.indexOf('IMG_E') > 0 || file.indexOf('.aae') > 0) {
        fs.rename(`./photo/${file}`, `./duplicated/${file}`, (error) => { console.log(error); });
    }
}



