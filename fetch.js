// how to lod api in javascript


let loddata=()=>{


    let url=`https://api.kanye.rest/`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>showdata(data))

}


let showdata=(qutoe)=>{
    console.log(qutoe.quote);
    let element=document.getElementById("mahedi")
    element.style.background="black"
    element.style.color="white"


    element.innerText=qutoe.quote
}


loddata()
