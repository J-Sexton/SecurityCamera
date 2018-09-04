const camera = require('pi-camera');
const myCamera = new camera({
    mode: 'video',
    output: `${__dirname}/video.h264`,
    width : 960,
    height: 540,
    timeout: 5000,
    preview: true,
});

module.exports= {
    record : function(){
        myCamera.record()
            .then((result) => {
                console.log('captured video');
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
