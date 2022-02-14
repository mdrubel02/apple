document.getElementById('incrice-btn').addEventListener('click',function(){
    mobilePrice(true);
});
document.getElementById('discriment-btn').addEventListener('click', function(){
    console.log('clicked')
    mobilePrice(false);
});


function mobilePrice( simple ){
    const mobileInput=document.getElementById('mobile-input');
    console.log(mobileInput);
    const mobileInputText=mobileInput.value;
    if(simple == true){
        mobileInputText.value= mobileInput.value + 1;
        console.log(mobileInput.value);
    }
} 