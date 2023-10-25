
/**
 * Interactive Sentence Creation Page
 *
 * This script provides an interactive way for my kids to complete sentences by dragging and dropping words into blanks.
 * The intent of this program is for the kids to learn how to structure sentence properly in Spanish.
 * 
 * 
 * Four separate sentence structures are provided for the users to interact with.
 *
 * @author: David Ortega
 * Oct-18-23
 * 
 */

(function () {
  window.addEventListener('load', init);

  const sentenceWords = ['Hola', 'me', 'llamo', null, '.'];
  const colorWords = ['Mi', 'color', 'favorito', 'es', 'el', null, '.'];
  const favoriteTeam = ['Mi', 'equipo', 'favorito','son', 'los', null];
  const favoriteSport = ['A','mi','me','gusta','mucho','jugar', 'al', null];

  const enterColor = [];
  const enterName = [];
  const enterTeam = [];
  const enterSport = [];

 /**
 * Initializes event listeners for the drag-and-drop and button click interactions.
 *
 * Sets up listeners for dragging and dropping words into sentence containers,
 * resetting the containers, and converting user input into draggable elements.
 */
  function init() {
      document.addEventListener('dragstart', function (event) {
          event.dataTransfer.setData('text', event.target.innerText);
      });

      id('sentence-container').addEventListener('drop', drop);
      id('sentence-container').addEventListener('dragover', allowDrop);
      id('user-input-container').addEventListener('click', convertToDraggable);
      const resetButton = id('reset');
      resetButton.addEventListener('click', resetBox);

      const resetButton2 = id('reset2');
      resetButton2.addEventListener('click', resetBox);

      const resetButton3 = id('reset3');
      resetButton3.addEventListener('click', resetBox);

      const resetButton4 = id('reset4');
      resetButton4.addEventListener('click', resetBox);
     

      id('sentence-container2').addEventListener('drop', dropTwo);
      id('sentence-container2').addEventListener('dragover', allowDropTwo);
      id('user-input-container2').addEventListener('click', convertToDraggableTwo);

      id('sentence-container3').addEventListener('drop', dropThree);
      id('sentence-container3').addEventListener('dragover', allowDropThree);
      id('user-input-container3').addEventListener('click', convertToDraggableThree);

      id('sentence-container4').addEventListener('drop', dropFour);
      id('sentence-container4').addEventListener('dragover', allowDropFour);
      id('user-input-container4').addEventListener('click', convertToDraggableFour);

      const collectButton = id('collect-button');
      collectButton.addEventListener('click', collectTextAndDisplay);
  }

/**
 * Allows the element to be dropped by preventing the default handling of the element.
 *
 * @param {Event} event - The event associated with the drop.
*/
  function allowDrop(event) {
      event.preventDefault();
  }

  /**
 * Handles the drop event, builds a sentence from dropped words, and validates it against a predefined set of words.
 * @param {Event} event - The drop event triggered when an element is dropped onto the target.
 */

  function drop(event) {
      event.preventDefault();
      let data = event.dataTransfer.getData('text');

      let word = document.createElement('span');
      word.innerText = data;
      event.target.appendChild(word);

      let space = document.createElement('span');
      space.innerText = ' ';
      event.target.appendChild(space);

      let sentence = Array.from(event.target.childNodes)
          .map((node) => node.innerText)
          .join('');

      if (sentence.endsWith('.')) {
          let i = 0;
          for (let token of sentence.split(' ')) {
              if (!sentenceWords[i]) {
                  i++;
                  continue;
              }

              if (sentenceWords[i] === token) {
                  i++;
                  continue;
              } else {
                  document.getElementById('result').innerText = 'Intenta de nuevo.';
                  return;
              }
              i++;
          }
          document.getElementById('result').innerText = 'Muy bien! ' + sentence;
      }
  }


/**
 * Converts non-empty user input into a draggable element, appends it to the 'word-container', 
 * clears the input field, and stores the input in the 'enterName' array.
 */
  function convertToDraggable() {
      const userInput = document.getElementById('user-input').value;
      if (userInput.trim() !== '') {
          const wordContainer = document.getElementById('word-container');
          const newWord = document.createElement('div');
          newWord.className = 'word';
          newWord.draggable = true;
          newWord.innerText = userInput;
          wordContainer.appendChild(newWord);
          document.getElementById('user-input').value = '';
          enterName.push(userInput);
      }
  }

  document.addEventListener('dragstart', function (event) {
      event.dataTransfer.setData('text', event.target.innerText);
  });

/**
 * Allows the element to be dropped by preventing the default handling of the element.
 *
 * @param {Event} event - The event associated with the drop.
 */

  function allowDropTwo(event) {
      event.preventDefault();
  }

/**
 * Handles the drop event, builds a sentence from dropped words, and validates it against a predefined set of words.
 * @param {Event} event - The drop event triggered when an element is dropped onto the target.
 */

  function dropTwo(event) {
      event.preventDefault();
      let data = event.dataTransfer.getData('text');
      let word = document.createElement('span');
      word.innerText = data;
      event.target.appendChild(word);

      let space = document.createElement('span');
      space.innerText = ' ';
      event.target.appendChild(space);

      let sentence = Array.from(event.target.childNodes)
          .map((node) => node.innerText)
          .join('');

      if (sentence.endsWith('.')) {
          let i = 0;
          for (let token of sentence.split(' ')) {
              if (!colorWords[i]) {
                  i++;
                  continue;
              }

              if (colorWords[i] === token) {
                  i++;
                  continue;
              } else {
                  document.getElementById('result2').innerText = 'Intenta de nuevo.';
                  return;
              }
              i++;
          }
          document.getElementById('result2').innerText = 'Muy bien! ' + sentence;
      }
  }

/**
 * Converts non-empty user input into a draggable element, appends it to the 'word-container', 
 * clears the input field, and stores the input in the 'enterName' array.
 */

  function convertToDraggableTwo() {
      const colorInput = document.getElementById('color-input').value;
      if (colorInput.trim() !== '') {
          const wordContainer = document.getElementById('word-container2');
          const newColor = document.createElement('div');
          newColor.className = 'word';
          newColor.draggable = true;
          newColor.innerText = colorInput;
          wordContainer.appendChild(newColor);
          document.getElementById('color-input').value = '';
          enterColor.push(colorInput);
      }
  }


/**
 * Allows the element to be dropped by preventing the default handling of the element.
 *
 * @param {Event} event - The event associated with the drop.
 */

  function allowDropThree(event) {
    event.preventDefault();
}


/**
 * Handles the drop event, builds a sentence from dropped words, and validates it against a predefined set of words.
 * @param {Event} event - The drop event triggered when an element is dropped onto the target.
 */


  function dropThree(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    let word = document.createElement('span');
    word.innerText = data;
    event.target.appendChild(word);

    let space = document.createElement('span');
    space.innerText = ' ';
    event.target.appendChild(space);

    let sentence = Array.from(event.target.childNodes)
        .map((node) => node.innerText)
        .join('');

    if (sentence.endsWith('.')) {
        let i = 0;
        for (let token of sentence.split(' ')) {
            if (!favoriteTeam[i]) {
                i++;
                continue;
            }

            if (favoriteTeam[i] === token) {
                i++;
                continue;
            } else {
                document.getElementById('result3').innerText = 'Intenta de nuevo';
                return;
            }
            i++;
        }
        document.getElementById('result3').innerText = 'Muy bien! ' + sentence;
    }
}


/**
 * Converts non-empty user input into a draggable element, appends it to the 'word-container', 
 * clears the input field, and stores the input in the 'enterName' array.
 */
function convertToDraggableThree() {
    const teamInput = document.getElementById('sport-input').value;
    if (teamInput.trim() !== '') {
        const wordContainer = document.getElementById('word-container3');
        const newTeam = document.createElement('div');
        newTeam.className = 'word';
        newTeam.draggable = true;
        newTeam.innerText = teamInput;
        wordContainer.appendChild(newTeam);
        document.getElementById('sport-input').value = '';
        enterTeam.push(teamInput);
    }
}


/**
 * Allows the element to be dropped by preventing the default handling of the element.
 *
 * @param {Event} event - The event associated with the drop.
 */
function allowDropFour(event) {
  event.preventDefault();
}


/**
 * Handles the drop event, builds a sentence from dropped words, and validates it against a predefined set of words.
 * @param {Event} event - The drop event triggered when an element is dropped onto the target.
 */

function dropFour(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData('text');
  let word = document.createElement('span');
  word.innerText = data;
  event.target.appendChild(word);

  let space = document.createElement('span');
  space.innerText = ' ';
  event.target.appendChild(space);

  let sentence = Array.from(event.target.childNodes)
      .map((node) => node.innerText)
      .join('');

  if (sentence.endsWith('.')) {
      let i = 0;
      for (let token of sentence.split(' ')) {
          if (!favoriteSport[i]) {
              i++;
              continue;
          }

          if (favoriteSport[i] === token) {
              i++;
              continue;
          } else {
              document.getElementById('result4').innerText = 'Intenta de nuevo.';
              return;
          }
          i++;
      }
      document.getElementById('result4').innerText = 'Muy bien!: ' + sentence;
  }
}

/**
 * Converts non-empty user input into a draggable element, appends it to the 'word-container', 
 * clears the input field, and stores the input in the 'enterName' array.
 */

function convertToDraggableFour() {
  const sportInput = document.getElementById('sportPractice-input').value;
  if (sportInput.trim() !== '') {
      const wordContainer = document.getElementById('word-container4');
      const newSport = document.createElement('div');
      newSport.className = 'word';
      newSport.draggable = true;
      newSport.innerText = sportInput;
      wordContainer.appendChild(newSport);
      document.getElementById('sportPractice-input').value = '';
      enterSport.push(sportInput);
  }
}

/**
 * Resets the content of specified sentence containers and result messages to their initial empty state.
 */

function resetBox(){
    clearBox('sentence-container');
    clearBox('sentence-container2');
    clearBox('sentence-container3');
    clearBox('sentence-container4');
    clearMessage('result');
    clearMessage('result2');
    clearMessage('result3');
    clearMessage('result4');
}


/**
 * Hides the specified box element by adding a 'hide' class to it.
 * @param {string} boxId - The ID of the box element to be hidden.
 */
function clearBox(boxId){
    const box = document.getElementById(boxId);
    box.innerText = '';
    box.classList.remove('hide'); 
}



/**
 * Clears the text content of the specified result element.
 *
 * @param {string} resultId - The ID of the result element to be cleared.
 */
function clearMessage(resultId){
    const result = document.getElementById(resultId);
    result.innerText = '';
}


/**
 * Retrieves an element by its ID.
 *
 * @param {string} idName - The ID of the element to retrieve.
 * @returns {HTMLElement} The element with the specified ID.
 */
function id(idName) {
    return document.getElementById(idName);
  }




  


})();
