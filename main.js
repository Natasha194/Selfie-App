var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function speak() {

    var synth = window.speechSynthesis;
    var speak_data = "Taking your selfie in 5 seconds";
    console.log("Speech - " + speak_data);
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        snapshot();
        save()        ;
    }, 5000);


}




function start() {
    document.getElementById("textbox").value = "";
    recognition.start();
}
recognition.onresult = function(event) {
     console.log(event);
     var content = event.results[0][0].transcript;
     console.log(content);
     document.getElementById("textbox").innerHTML=content;


     if (content == "take my selfie") {

        console.log("//taking selfie");
        speak();

     }
     
     
}

Webcam.set({
    width: 329,
    height: 240,
    image_format: 'png',
    png_quality: 100
});

var camera = document.getElementById("camera");




function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+ data_uri +'">';
    });
}

function save() {

var link = document.getElementById("link");
var image = document.getElementById("selfie_img").src;
link.href = image;


}

