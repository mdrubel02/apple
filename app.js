
function mobilePrice(items, simple ){
    const mobileInput=document.getElementById(items + '-number');
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
    const phonePrice=document.getElementById('mobile-total')
    phonePrice.innerText=mobileInputText * 1213;
};

// handle case incrsi and discrise event
   document.getElementById('case-plus').addEventListener('click', function(){
    mobilePrice('case',true);
        console.log('case plus clicked')
   })


   document.getElementById('case-minus').addEventListener('click', function(){

   })




// handle phone incrise and discris event
document.getElementById('phone-plus').addEventListener('click',function(){
    mobilePrice('mobile', true);
    // const mobileInput=document.getElementById('mobile-input');
    // const mobileInputText=mobileInput.value;
    // mobileInput.value=parseInt(mobileInputText) + 1;
});
document.getElementById('phone-minus').addEventListener('click', function(){
    console.log('clicked')
    mobilePrice('mobile', false);
});
