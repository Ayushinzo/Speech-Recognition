let clear = document.querySelector(".clear")

function record(){
    var recognition = new webkitSpeechRecognition();
    // console.log(recognition)
    recognition.lang = "en-GB"
    recognition.onresult = function(event){
        document.getElementsByClassName('speech')[0].style.display = "inline-block"
        clear.style.display = "inline-block"
        document.getElementsByClassName('speech')[0].innerText = event.results[0][0].transcript
    }
    recognition.start()
}


clear.addEventListener('click', ()=>{
    document.getElementsByClassName('speech')[0].innerText = ""
    document.getElementsByClassName('speech')[0].style.display = "none"
    clear.style.display = "none"
})