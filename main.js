  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }

const form = document.querySelector('form');
const completePaymentButton = document.querySelector('button#complete-payment');

form.addEventListener('submit', handleFormSubmission);                       

function handleFormSubmission(event) {
  event.preventDefault();
  validate();
  form.reportValidity();
  if (form.checkValidity() === false) {
    console.log('Invalid data found');
    // Handle invalid form data.
  } else {
    // On a production site do form submission.
    completePaymentButton.textContent = 'Making payment...';
    completePaymentButton.disabled = 'true';
    setTimeout(() => {alert('Made payment!');}, 500);
  }
}

// Do form validation.
function validate() {
  let message= '';
  if (!/someregex/.test(someField.value)) {
     console.log(`Invalid value ${someField.value} for someField`);
	 	 message = 'Explain how to enter a valid value';
   }
   someInput.setCustomValidity(message);
}

