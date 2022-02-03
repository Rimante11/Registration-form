const registerform = document.getElementById('registerform');
const allErrors = document.querySelectorAll('.error');

function hideErrors() { 
  allErrors.forEach((errorElem) => { 
    errorElem.style.display = 'none';
  });
}

registerform.addEventListener('submit', (e) => { 
  e.preventDefault();

  hideErrors();

  const inputs = registerform.querySelectorAll('input');
  inputs.forEach((input) => { 
    if (!input.checkValidity()) { 
      const errorElem = document.getElementById(input.id + 'error');
      errorElem.style.display = 'block';
    }
  });

});

hideErrors();


