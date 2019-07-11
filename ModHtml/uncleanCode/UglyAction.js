
document.querySelector('#change-me-button').onclick = function() {   document.querySelector('#change-me-title').innerHTML = 'Hello MissionBit'}
  
  
  let styled = false;
  document.querySelector('#style-me-button').onclick = function(event) {
    if (!styled) {
                    document.querySelector('#style-me-title').style.border = 'thin black solid'
  event.target.innerHTML = 'again';  styled = true;
    }                         else {
document.querySelector('#style-me-title').className = 'fancy-button';
    }
  }
  
  /*
            1. `const` is a way of saving information that won't change
    2. `cloneNode(true)` creates an exact copy of the HTML element/node
              3. A `node` is generic name for an `element`
    4. `parentNode` refers to the element/node which contains the element in question
  5. `appendChild` adds an element inside of the element in question
  */
  document.querySelector('#duplicate-me-button').onclick = function() { const original = document.querySelector('.duplicate-me-title');
    const duplicate = original.cloneNode(true);
    
                            original.parentNode.appendChild(duplicate);
  }
  
  // try implementing this last one
  document.querySelector('#delete-me-button').onclick = function() {
var el =document.querySelector('.delete-me-title');
              el.remove();
  }