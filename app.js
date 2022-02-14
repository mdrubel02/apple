
function mobilePrice( simple ){
    const mobileInput=document.getElementById('phone-number');
    console.log(mobileInput);
    let mobileInputText=mobileInput.value;
    if(simple == true){
        mobileInputText=parseInt(mobileInputText) + 1;
        console.log(mobileInput);
    }
    else if(mobileInputText  > 0){
        mobileInputText=parseInt(mobileInputText) - 1;
    }
    mobileInput.value=mobileInputText;
    const phonePrice=document.getElementById('mobile-price')
    phonePrice.innerText=mobileInputText * 1213;
};

document.getElementById('phone-plus').addEventListener('click',function(){
    mobilePrice(true);
    // const mobileInput=document.getElementById('mobile-input');
    // const mobileInputText=mobileInput.value;
    // mobileInput.value=parseInt(mobileInputText) + 1;
});
document.getElementById('phone-minus').addEventListener('click', function(){
    console.log('clicked')
    mobilePrice(false);
});
