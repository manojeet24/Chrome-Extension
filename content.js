console.log("Content Script Running");

var col=['#F5F901','#0152F9','#F90101','#01F934'];
var count=new Array(1000).fill(0);  //for each tab stores no of clicks;
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
    //console.log(message.id);
    if(message.txt==="hello")
    {
        count[message.id]+=1;
        console.log(count[message.id]);
        let para=document.getElementsByTagName('p');
        for(ele of para)
            ele.style['background-color']=col[count[message.id]%4];
    }
}