
// I need a function to generate a string with 5 random numbers and characters

function generateRandomID() {

  // I need a string with all the characters I want to use
  const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';

  // I need a variable to store the random ID
  let randomID = '';

  // I need a loop that will run 5 times
  for (let i = 0; i < 5; i++) {

    // I need a variable to store a random number between 0 and the length of the characters string
    const randomNumber = Math.floor(Math.random() * characters.length);

    // I need to add the character at the random number index to the randomID string
    randomID += characters[randomNumber];

  }

  // I need to return the randomID string
  return randomID;

}

const dropdownAccordions = document.querySelectorAll('.accordion');

if (dropdownAccordions) {
  // Convert the NodeList to an array
  const accordionArray = Array.from(dropdownAccordions);

  accordionArray.forEach((accordion) => {
    const accordionTriggerTitles = accordion.querySelectorAll('h3');

    // Convert the NodeList to an array
    const accordionTriggerTitlesArray = Array.from(accordionTriggerTitles);

    accordionTriggerTitlesArray.forEach((accordionTriggerTitle) => {
      const accordionToggle = accordionTriggerTitle.querySelector('button');
      const accordionToggleText = accordionTriggerTitle.querySelector('span');
      const accordionPanel = accordionTriggerTitle.nextElementSibling;

      // Generate random ID for each accordion and enhance the accessibility of the accordion progressively
      const accordionToggleTextID = `accordionToggleText-${generateRandomID()}`;
      accordionToggleText.setAttribute('id', accordionToggleTextID);

      const accordionPanelID = `accordionPanel-${generateRandomID()}`;
      accordionPanel.setAttribute('id', accordionPanelID);

      // Set the accordion toggle aria-controls attribute to the ID of the accordion panel
      accordionToggle.setAttribute('aria-controls', accordionPanelID);

      // Set the accordion panel aria-labelledby attribute to the ID of the accordion toggle text
      accordionPanel.setAttribute('aria-labelledby', accordionToggleTextID);

      accordionToggle.addEventListener('click', () => {
        const isExpanded =
          accordionToggle.getAttribute('aria-expanded') === 'true' || false;

        accordionToggle.setAttribute('aria-expanded', !isExpanded);

        isExpanded
          ? accordionPanel.classList.remove('expanded')
          : accordionPanel.classList.add('expanded');
        isExpanded
          ? accordionPanel.setAttribute('aria-hidden', 'true')
          : accordionPanel.setAttribute('aria-hidden', 'false');
      });
    });
  });
}
