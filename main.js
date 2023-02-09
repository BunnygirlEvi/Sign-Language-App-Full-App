Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      '<img id="captured_image" src="' + data_uri + '"/>';
  });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/u8nmnp6bv/model.json",
  modelLoaded
);

function modelLoaded() {
  console.log("Model Loaded!");
}

function check() {
  img = document.getElementById("captured_image");
  classifier.classify(img, gotResult);
}

function speak() {
  const synth = window.speechSynthesis;
  const fieldName = "label";
  // prediction.label label = 'label' prediction[label] prediction['label']
  speak_data = "I thin that this sign is the " + prediction.label;
  const utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    prediction = results[0];
    console.log(results);
    speak();

    if (results[0].label == "LetterA") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter A!";
    } else if (results[0].label == "LetterB") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter B!";
    } else if (results[0].label == "LetterC") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter C!";
    } else if (results[0].label == "LetterD") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter D!";
    } else if (results[0].label == "LetterE") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter E!";
    } else if (results[0].label == "LetterF") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter F!";
    } else if (results[0].label == "LetterG") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter G!";
    } else if (results[0].label == "LetterH") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter H!";
    } else if (results[0].label == "LetterI") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter I!";
    } else if (results[0].label == "LetterJ") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter J!";
    } else if (results[0].label == "LetterK") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter K!";
    } else if (results[0].label == "LetterL") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter L!";
    } else if (results[0].label == "LetterM") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter M!";
    } else if (results[0].label == "LetterN") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter N!";
    } else if (results[0].label == "LetterO") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter O!";
    } else if (results[0].label == "LetterP") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter P!";
    } else if (results[0].label == "LetterQ") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter Q!";
    } else if (results[0].label == "LetterR") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter R!";
    } else if (results[0].label == "LetterS") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter S!";
    } else if (results[0].label == "LetterT") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter T!";
    } else if (results[0].label == "LetterU") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter U!";
    } else if (results[0].label == "LetterV") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter V!";
    } else if (results[0].label == "LetterW") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter W!";
    } else if (results[0].label == "LetterX") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter X!";
    } else if (results[0].label == "LetterY") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter Y!";
    } else if (results[0].label == "LetterZ") {
      document.getElementById("result_sign_name").innerHTML =
        "I think this sign is the letter Z!";
    }
  }
}
