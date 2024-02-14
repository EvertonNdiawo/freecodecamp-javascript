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


const hide = document.getElementById('hide');
let calculateButton = document.getElementById('calculate');
   
function calculateCost(){
    let costDiv = document.getElementById('hide');
    let costH = document.getElementById('costH');
    costDiv.style.display = "block";
    costH.innerText = `Heres your invoice for the ${concert.value} event: `;
    costH.style.fontSize = "16px";
}

calculateButton.addEventListener('click', calculateCost);