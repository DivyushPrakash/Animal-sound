function startClassification(){
    navigator.mediaDevices.getUserMedia()
   mysoundmodel=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WGjplaLwx/model.json", modelloded);
}

function modelloded(){
    mysoundmodel.classify(getresult);
}

function getresult(){
    console.log('GOT RESULTS');
}



