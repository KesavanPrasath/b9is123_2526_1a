//write a function to alert if overweight (15kg) baggage

//call it from the page

            //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed
           let check = () => {
  let weight = parseInt(document.getElementById('weight').value);

  if (weight > 15) {
    alert('Your baggage is overweight! (' + weight + 'kg). Please remove some items.');
    document.getElementById('removed').style = 'display:block;';
    document.getElementById('remB').style = 'display:block;';
  } else {
    alert('Your baggage is fine! (' + weight + 'kg). You are good to go ✅');
    document.getElementById('removed').style = 'display:none;';
    document.getElementById('remB').style = 'display:none;';
  }
};

let remove = () => {
  let currentWeight = parseInt(document.getElementById('weight').value);
  let removeAmount = parseInt(document.getElementById('removed').value);
  let newWeight = currentWeight - removeAmount;

  document.getElementById('weight').value = newWeight;

  if (newWeight <= 15) {
    alert('Weight updated to ' + newWeight + 'kg. You are OK to proceed ✅');
    document.getElementById('removed').style = 'display:none;';
    document.getElementById('remB').style = 'display:none;';
  } else {
    alert('Still overweight! Current weight: ' + newWeight + 'kg. Remove more!');
  }
};
                        //Test edit no. 2;
