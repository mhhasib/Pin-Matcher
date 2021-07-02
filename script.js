
// 1.common function

// Empty Value 
function emptyValue (id){
    document.getElementById(id).vlue = '';
}

// Empty Text
function emptyText(id){
    document.getElementById(id).innerText = '';
}

// Display None
function displayNone (id){
    document.getElementById(id).style.display = 'none';
}

// Display Block
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}

// 2. Generate random number / Pin
function randomNum(){
    var randomNumber = Math.floor( 1000 + Math.random() * 9000 );
    document.getElementById('generatePin').value = randomNumber;

    emptyValue('inputPin');
    displayNone('matched');
    displayNone('unmatched');
}

// 3. Input Pin
function btnKey(id){
    let prevValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = prevValue + key ;

}

// 4. Clean input value
function clean (){
    document.getElementById('inputPin').value = '';
}

// 5. Clean Last Value
function cleanLast (){
    const inputResult =  document.getElementById('inputPin').value;
    const removeValue = inputResult.slice(0,inputResult.length -1);
    document.getElementById('inputPin').value = removeValue;
}

// 6. Submit Btn
function submitBtn (){
    const randomNum = document.getElementById('generatePin').value;
    const typeNum = document.getElementById('inputPin').value;

    // 7. Pin matching condition
    if(randomNum == typeNum){
        displayBlock ('matched');
        displayNone('unmatched');
        displayNone('tryContent');

    }
    else{
        displayBlock('unmatched');
        displayNone('matched');
        tryLeft('tryLeft');
        displayBlock('tryContent');
    }
}

// 8. Pin match Error / Try 3 Left
function tryLeft(id){
    const tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == '1'){
        disableBtn('submit')
    }
}

// trt Left Expired - submit button disabled
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = 'not-allowed';
    button.setAttribute('disabled', 'true') ;
    button.title = 'Please Reload Page'
}