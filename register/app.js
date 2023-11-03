let form = document.getElementById('form');
    let inputName = document.getElementById('name');
    let inputNumber = document.getElementById('number');
    let inputSelect = document.getElementById('select');
    let inputRollNumber = document.getElementById('roll-number');
    let regContent = document.querySelector('.regcontent');


    // style

    inputName.style.cssText = "margin: 5px 20px 15px 0px;";
    inputNumber.style.cssText = "margin: 5px 20px 15px 0px;";
    inputSelect.style.cssText = "margin: 5px 20px 15px 0px;";
    inputRollNumber.style.cssText = "margin: 5px 20px 15px 0px;";
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Create elements to display the entered data
      let studentData = document.createElement('div');
      let nameText = document.createElement('input');
      let numberText = document.createElement('input');
      let cityText = document.createElement('input');
      let rollNumberText = document.createElement('input');

    //   set attributes class names
    studentData.classList.add('studentdata');
    nameText.classList.add('nametext'); 
    numberText.classList.add('numbertext');
    cityText.classList.add('citytext');
    rollNumberText.classList.add('rollnumbertext');

    // style

    nameText.style.cssText = 'margin: 5px 20px 15px 0px;  border:none;';
    numberText.style.cssText = 'margin: 5px 20px 15px 0px;border:none; ';
    cityText.style.cssText = 'margin: 5px 20px 15px 0px; border:none;';
    rollNumberText.style.cssText = 'margin: 5px 20px 15px 0px; border:none;';



    //   create buttons for present and absent
    let presentBtn =document.createElement('button');
    let absentBtn =document.createElement('button');
    presentBtn.innerText = 'P';
    absentBtn.innerText = 'A'

    // style

    presentBtn.style.cssText ='margin: 5px 20px 15px 0px; background-color: skyblue; border-color: skyblue;';
    absentBtn.style.cssText ='margin: 5px 20px 15px 0px; background-color: tomato; border-color: skyblue;';

      // Assign entered values to the created elements
      nameText.value =  inputName.value;
      numberText.value =  inputNumber.value;
      cityText.value = inputSelect.options[inputSelect.selectedIndex].value;
      rollNumberText.value =  inputRollNumber.value;

      // Append the data elements to the main container
      studentData.appendChild(nameText);
      studentData.appendChild(numberText);
      studentData.appendChild(cityText);
      studentData.appendChild(rollNumberText);
      studentData.appendChild(presentBtn);
      studentData.appendChild(absentBtn);
      regContent.appendChild(studentData);

      // Reset input values after submission
      inputName.value = "";
      inputNumber.value = "";
      inputSelect.value = "";
      inputRollNumber.value = "";

      presentBtn.addEventListener('click',(e) =>{
        if(presentBtn.innerText.toLowerCase() === 'p'){
             presentBtn.innerText = 'Present'
             absentBtn.remove();
        }

        
      } )

      absentBtn.addEventListener('click',(e) =>{
        if(absentBtn.innerText.toLowerCase() === 'a'){
             absentBtn.innerText = 'Absent'
             presentBtn.remove();
        }

        
      } )




    });
   

  