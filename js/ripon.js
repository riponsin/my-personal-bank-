const loginBtn = document.getElementById("verify_website");
loginBtn.addEventListener( "click", function() {
  const loginArea = document.getElementById("login_area");
  loginArea.style.display = "none";
  const clickBackArea = document.getElementById("click_back_area");
  clickBackArea.style.display ="block";
})


document.getElementById("addDeposit").addEventListener("click", function(){

 const depositAmount = parseInt(document.getElementById('depositAmount').value )
 const cuttentBlan = parseInt(document.getElementById('currentDeposit').innerText)
 const total = depositAmount + cuttentBlan ;
 document.getElementById('currentDeposit').innerText = total;
 document.getElementById('depositAmount').value = ''

 const mainBlance = parseInt( document.getElementById('currentBalance').innerText)
 const nowMainblance = depositAmount + mainBlance;
 document.getElementById('currentBalance').innerText = nowMainblance;

})


document.getElementById('WrithdrawBtn').addEventListener('click', function(){
const widthrow = parseInt(document.getElementById('widthrowInput').value )
const widthrowBlace = parseInt(document.getElementById('widthrowBlance').innerText)
const total  = widthrow + widthrowBlace ;
document.getElementById('widthrowBlance').innerText = total;
document.getElementById('widthrowInput').value = ''

const mainBlance = parseInt(document.getElementById('currentBalance').innerText)
const nowMainblance = mainBlance - widthrow;
document.getElementById('currentBalance').innerText = nowMainblance;

})