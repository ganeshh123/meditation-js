$("#musicvolume").slider({
    min: 0,
    max: 100,
    value: 0.1,
      range: "min",
    slide: function(event, ui) {
      setVolume(ui.value / 100);
    }
  });
  
  
  function setVolume(myVolume) {
      console.log('Setting')
  var myMedia = document.getElementById('music');
  myMedia.volume = myVolume;
  }


  setVolume(0.0)