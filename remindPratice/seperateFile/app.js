const fs = require('fs');
const path = require('path');
const baseDir = '/Users/fjr02/Desktop/playground';

fs.readdir('/Users/fjr02/Desktop/playground', function (err, fileList) {

    for (var i = 0; i < fileList.length; i++) {
        let extname = path.extname(fileList[i]);
        let name = fileList[i];
        if (extname == '.url') {
            fs.rename(baseDir + path.sep + name, baseDir + path.sep + '/game/' + name, (err) => {
                console.log(err);
            })
        } else {

        }


    }

});
