const btn1=document.getElementById('btn1')
btn1.addEventListener('click', function(){
  const loginarea=document.getElementById('login');
  loginarea.style.display='none';
  
  const transactionarea=document.getElementById('transaction-area');
  transactionarea.style.display = "block"
})
//deposit button event handlers
const btn2=document.getElementById("btn2")
  btn2.addEventListener("click",function(){
   
    const depositamount=document.getElementById('depositamount').value;
    const depositnumber=parseFloat(depositamount);
    
    const currentdeposit=document.getElementById('currentdeposit').innerText;
    const currentamount=parseFloat(currentdeposit);
    const totaldeposit=depositnumber+currentamount;
    document.getElementById('currentdeposit').innerText=totaldeposit;
    document.getElementById('depositamount').value='';
    
    blackberry('balance1',depositnumber);
    
    
  })
  function blackberry(id,depositnumber){
    let balance=document.getElementById(id).innerText;
    const balancenumber=parseFloat(balance);
    const totalbalance=balancenumber+depositnumber;
    
   document.getElementById(id).innerText=totalbalance;
  }
  

