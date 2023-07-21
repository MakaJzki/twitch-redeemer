setInterval(function(){
    var autoredeem = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW kIlsPe");
    if(autoredeem != undefined && autoredeem.length > 0) {
        console.log("Autoredeemed channel points");
        autoredeem[0].click();
    }
}, 3000)


