// when the input field is empty
function calcHandler (){
    
    // When the fields is empty
    const billInput = document.getElementById('js-bill-input');

    const customInput = document.querySelector('.js-custom');

    const peopleInput = document.querySelector('.js-num-people');

    const resetBtn = document.querySelector('.js-reset-btn');


    function updateResetBtn(){

    


            if(
                billInput.value.trim() !== '' && 
                peopleInput.value.trim() !== ''
            
            ){
                resetBtn.removeAttribute('disabled');
            }else {
                resetBtn.setAttribute('disabled', 'true');
            }




    }

    billInput.addEventListener('input', updateResetBtn);
    peopleInput.addEventListener('input', updateResetBtn);


    
    // When number of people is less than one
    const peopleElement = document.querySelector('.number-of-people-container');
    function zeroPeople (){

        
        
        if(peopleInput.value.trim() <= 0){

            document.querySelector('.warning-msg').style.display = 'block';
            peopleElement.classList.add('active-zero');

        }else{
            document.querySelector('.warning-msg').style.display = 'none';
            peopleElement.classList.remove('active-zero');
            console.log('is one or greater');
        }
    }

    peopleElement.addEventListener('input', zeroPeople);

    document.querySelector('.warning-msg').addEventListener('input',zeroPeople );




    // for the inputs and calculation
    const percent5Button = document.querySelector('.js-5-percent');
    const percent10Button = document.querySelector('.js-10-percent');
    const percent15Button = document.querySelector('.js-15-percent');
    const percent25Button = document.querySelector('.js-25-percent');
    const percent50Button = document.querySelector('.js-50-percent');

    function inputsCalculation (percent,button){
        const peopleValue = parseFloat(peopleInput.value);
        const billValue = parseFloat(billInput.value);
        const calculatedResult = billValue * (percent / 100);
        const calculateFinal = calculatedResult / peopleValue ;
        document.querySelector('.tip-results').innerHTML = `$${calculateFinal.toFixed(2)}`;

        const allButtons = document.querySelectorAll('.tip-button');
        allButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // Adding the .selected class to the clicked button
        button.classList.add('selected');


        // // for Total Split Amount
        const totalAmount = billValue + calculatedResult;
        const splitTotal = totalAmount / peopleValue;
        document.querySelector('.total-split-per-person').innerHTML = `$${splitTotal.toFixed(2)}`;
    }

    percent5Button.addEventListener("click", () => {
        inputsCalculation (5,percent5Button);
    });
      
    percent10Button.addEventListener("click", () => {
        inputsCalculation (10,percent10Button);
    });
      
    percent15Button.addEventListener("click", () => {
        inputsCalculation (15,percent15Button)
    });

    percent25Button.addEventListener("click", () => {
        inputsCalculation (25,percent25Button)
    });

    percent50Button.addEventListener("click", () => {
        inputsCalculation (50,percent50Button)
    });

    peopleInput.addEventListener('input',inputsCalculation);


    function customHandler (){
        const billValue = parseFloat(billInput.value);
        const peopleValue = parseFloat(peopleInput.value);
        const customValue = parseFloat(customInput.value);
        const percentageCustom = customValue / 100;
        const customResults = billValue * percentageCustom;
        const finalCustomResults = customResults / peopleValue;
        document.querySelector('.tip-results').innerHTML = `$${finalCustomResults.toFixed(2)}`;

        // // for Total Split Amount
        const totalAmount = billValue + customResults;
        const splitTotal = totalAmount / peopleValue;
        document.querySelector('.total-split-per-person').innerHTML = `$${splitTotal.toFixed(2)}`;

        

    }
    

    customInput.addEventListener('input',customHandler);
    peopleInput.addEventListener('input',customHandler);


    // For the reset button

    function resetButton (){

        resetBtn.addEventListener('click', function (){
            
            document.querySelector('.tip-results').innerHTML = '$0.00';
            
            document.querySelector('.total-split-per-person').innerHTML = '$0.00';

        });
    }

    resetButton ();

    

   

}

calcHandler ();


