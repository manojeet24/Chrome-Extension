console.log("Background Script running");

chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab){
    //see all info of tab - 
    console.log(tab);
    let msg={
        txt:"hello",
        id:tab.id
    }
    chrome.tabs.sendMessage(tab.id,msg);
}
