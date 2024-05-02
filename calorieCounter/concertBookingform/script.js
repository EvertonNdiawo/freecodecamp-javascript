const add = document.getElementById('input');
const concert = document.getElementById('booksel');

    function addOutput(){
        add.innerHTML = `
        
        <p>Please provide details of your ${concert.value} event below: </p>
       
        <label for="type" value="type" > Event title: 
            <input type="text" id="type" placeholder="Enter title for your event" >
        </label>
        
        <label for="day" value="date" >  Event date: 
            <input type="date" id="date" placeholder="select a date" >
        </label>

        <label for="location" value="location" > Location:    
            <input type="text" id="location" placeholder="Where is your event ?" >
        </label>

        <label for="duration" value="duration" > Duration:   
            <input type="text" id="duration" placeholder="How long is the event ?" >
        </label>

        <label for="start" value="start" >Starting time:   
            <input type="time" id="start" >
        </label>

        <label for="end" value="end" > Ending time:   
            <input type="time" id="end" >
        </label>

        <label for="other" value="other" > Additional information:   
            <textarea type="text" id="other" ></textarea>
        </label> `;
    }
     
    concert.addEventListener('change', addOutput);



/*For purposes of adding customer details to the invoice*/
const custName = document.getElementById('name');
const custEmail = document.getElementById('email');
const custPhone = document.getElementById('phone');
const custAddress = document.getElementById('address');
let invCustName = document.getElementById('clName');
let invCustEmail = document.getElementById('clEmail');
let invCustPhone = document.getElementById('clPhone');
let invCustAddress = document.getElementById('clAddress');



/*Specifically adds the details above into the invoice and calculates cost*/
let calculateButton = document.getElementById('calculate');
   
function calculateCost(){
    invCustName.textContent = custName.value.trim() !== '' ? custName.value : 'Client Name';
    invCustEmail.textContent = custEmail.value.trim() !== '' ? custEmail.value : 'Email Address';
    invCustPhone.textContent = custPhone.value.trim() !== '' ? custPhone.value : 'Phone number';
    invCustAddress.textContent = custAddress.value.trim() !== '' ? custAddress.value : 'Client Address';
}

calculateButton.addEventListener('click', calculateCost);