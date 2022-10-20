var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var image_id="selfie1";

function start() {
    document.getElementById("textbox").innerHTMl = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content=="take my selfies") {
        console.log("Taking Selfies");
        speak();
    }
    
}


function speak() {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout( function () {
        image_id="selfie1";
        take_snapshot();
        speak_data = "taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
        save();
    },5000);
    setTimeout( function () {
        image_id="selfie2";
        take_snapshot();
        speak_data = "taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
        save();
    },10000);
    setTimeout( function () {
        image_id="selfie3";
        take_snapshot();
        speak_data = "taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
        save();
    },15000);
}

var camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});

function take_snapshot() {
console.log(image_id);
    Webcam.snap(function (data_uri) {
        if (image_id=="selfie1") {
            document.getElementById("result1").innerHTML='<img id="selfie_image1" src="'+data_uri+'">';

        }
        if (image_id=="selfie2") {
            document.getElementById("result2").innerHTML='<img id="selfie_image2" src="'+data_uri+'">';

        }
        if (image_id=="selfie3") {
            document.getElementById("result3").innerHTML='<img id="selfie_image3" src="'+data_uri+'">';

        }

    });
}

function save() {
    var link = document.getElementById("link");
    image = document.getElementById("selfie_image");
    link.href = image;
    link.click();
}



