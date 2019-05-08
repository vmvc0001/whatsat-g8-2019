    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    document.addEventListener("deviceready",onDeviceReady,false);

    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    function handleFotos() {
      document.getElementById('terminal').style.visibility='hidden';
      //document.getElementById('fotos').style.visibility='visible';
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    function onPhotoDataSuccess(imageData) {
		var data_uri= "data:image/jpeg;base64," + imageData;
		envia(data_uri,"image");
    //document.getElementById('fotos').style.visibility='hidden';
    document.getElementById('terminal').style.visibility='visible';
    }

    function onFail(message) {
      alert('Failed because: ' + message);
    //  document.getElementById('fotos').style.visibility='hidden';
      document.getElementById('terminal').style.visibility='visible';
    }
