function chack(){
    let item1 = document.querySelector("#item1").value
    let item2 = document.querySelector("#item2").value
    let item3 = document.querySelector("#item3").value

    if(item1 === "IT" && item2 === "TTS" && item3 === "1-3"){
        document.querySelector("p").innerText = "Your Batch Code: IT-E-3"
        let p = document.querySelector("p")
        p.style.color = "blue"
    }
    else if(item1 === "BBA" && item2 === "MWF" && item3 === "3-5"){
        document.querySelector("p").innerText = "Your Batch Code: BBA-M-5"
        let p = document.querySelector("p")
        p.style.color = "blue"
    }
    else if(item1 === "BSES" && item2 === "TWT" && item3 === "5-7"){
        document.querySelector("p").innerText = "Your Batch Code: BSES-Z-8"
        let p = document.querySelector("p")
        p.style.color = "blue"
    }
    else{
        document.querySelector("p").innerText = "Not Found"
        let p = document.querySelector("p")
        p.style.color = "red"
        
    }
}

