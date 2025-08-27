


function getcoinNumber(id) {
    const coin = parseInt(document.getElementById(id).innerText);
    return coin;
}

function setCoinNumber(id, value) {
    document.getElementById(id).innerText = value;
}


const callHistoryArray = []

// call button -------------
const callButton = document.querySelectorAll('.bttn-call');

for (let button of callButton) {
    button.addEventListener('click', function () {
        const commomcard = button.closest('.card');
        const helplineName = commomcard.querySelector('p').innerText; 
        const helplineNumber = commomcard.querySelector('h3').innerText; 
        console.log(helplineName, helplineNumber);

        const coine = getcoinNumber('coin-num');
        
        if (coine < 20) {
            alert('😢 You don t have enough coins to make a call    !!! You need at least 20 coins.');
            return;
        }
        const totalCoin = coine - 20;
        setCoinNumber('coin-num', totalCoin);
        alert('📞 Calling ' + helplineName + ' (' + helplineNumber + ')...');



        
    const data = {
        name : helplineName ,
        number:helplineNumber ,
       
        date : new Date().toLocaleTimeString()
    }
    
    callHistoryArray.push(data)
    
    
    const callHistory = document.getElementById('history');
    callHistory.innerHTML = ""
    for(const data of callHistoryArray){
      const div = document.createElement('div')
      div.innerHTML = `
      <div  class="bg-[#FAFAFA] rounded-lg flex justify-between items-center p-4 mb-2">
              <div>
                <h1>${data.name}</h1>
                <p>${data.number}</p>
              </div>
              <div> ${data.date}</div>

            </div>
      `
      callHistory.appendChild(div)
    }
    });
}

// history clear section
document.getElementById('btn-clear')
.addEventListener('click', function(){
  const callHistoryDiv = document.getElementById('history')
  callHistoryDiv.innerHTML = ''
  callHistoryArray = []; 
})


// copy button related style-------------------------
let copyCount = 0;
const copyButtons = document.querySelectorAll('.btn-copy');

for (let button of copyButtons) {
  button.addEventListener('click', function () {
    const card = button.closest('.card');
    const serviceNumber = card.querySelector('h3').innerText;

   navigator.clipboard.writeText(serviceNumber);

    alert("Number copied: " + serviceNumber);
    copyCount++;
    
  document.getElementById('copy').innerText = copyCount;
   
   
  });
}




//  hart count related-------------
let heartNumber = 0;
const haertClick = document.getElementsByClassName("hart-img");

for (let click of haertClick) {
  click.addEventListener("click", function () {
    heartNumber++;
    
    document.getElementById("heart-i").innerText = heartNumber;

    
  });
}





