/* Program där användaren kan skapa flertalet flashcards som finns kvar 
i användarens webbläsare med hjälp av localStorage */

// En knapp skapas för att spara Flashcardet
let placering = document.getElementById('sparaFlashcard');
// skapar elementet "button"
let sparaFlashcard = document.createElement('button');
// Knappen fylls i med text för dess ändamål
sparaFlashcard.textContent = 'skapa flashcard';
// Placering av knappen i div-taggen
placering.appendChild(sparaFlashcard);

// En klass skapas för att styla knappen i CSS
sparaFlashcard.classList.add('sparaFlashcard');

// Skapar en funktion som aktiveras vid knapptryckning
sparaFlashcard.addEventListener('click', () => {
  // Hämtar frågan och svaret som användaren har fyllt i.
  let fraga = document.getElementById('question').value;
  let svar = document.getElementById('answer').value;

  // Hämta eventuella tidigare sparade flashcards från localStorage och addera det nya kortet
  let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

  // Ett objekt skapas för varje nytt flashcard
  let nyttFlashcard = {
    // skapar ett unikt ID för varje kort
    id: Date.now(),
    // En nyckel och ett värde anges
    fråga: fraga,
    svar: svar,
  };

  // Det nya kortet adderas till arrayen
  flashcards.push(nyttFlashcard);

  // Arrayen sparas till localStorage
  localStorage.setItem('flashcards', JSON.stringify(flashcards));

  // Tömmer textareafälten efter att användaren skapat ett nytt kort
  document.getElementById('question').value = '';
  document.getElementById('answer').value = '';

  // Uppdatera visning av kort
  hamtaSparadeKort();
});

// Hämtar JSON-strängarna från localStorage och omvandlar de till objekt igen
function hamtaSparadeKort() {
  // Hämtar listan av kort från localStorage
  let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

  // Rensa visningsområdet
  let flashcardBox = document.getElementById('flashcardBox');
  flashcardBox.innerHTML = '';

  // Loopar igenom arrayen och skapar fler divar för fler kort
  flashcards.forEach((kort, index) => {
    // Skapar en ett div-element för ett nytt kort
    let kortDiv = document.createElement('div');
    // Adderar en CSS-klass för styling av "flashcard"
    kortDiv.classList.add('flashcard');
    // Utskriften i korten, använder mig av en div-tagg för att få till radbryt
    kortDiv.innerHTML =
      '<div>' +
      '<p>' +
      kort.fråga +
      '</p>' +
      '<section class="svaretDiv">' +
      // Här dölj svaret från kortet
      '<p class="svaret" style="display: none;">' +
      kort.svar +
      '</p>' +
      // Knappar skapas för att visa och dölja svaret på frågan
      '<button class="visaKnapp">visa svar</button>' +
      '<button class="doljKnapp" style="display: none;">dölj svar</button>' +
      // Knapp skapad för att kunna radera flashcardet
      '<button class="raderaKnapp">radera kort</button>' +
      '</section>' +
      '</div>';

    // kortDiv blir ett HTML-element och barn till flashcardBox
    flashcardBox.appendChild(kortDiv);

    // Aktiverar knappen för att radera kortet
    let raderaKnapp = kortDiv.querySelector('.raderaKnapp');
    // Skapar en funktion för att radera kortet
    raderaKnapp.addEventListener('click', () => {
      // Raderar ett kort från arrayen utifrån dess unika ID.
      flashcards = flashcards.filter((flashcard) => flashcard.id !== kort.id);

      // Kontrollerar om alla flashcards är raderade, om alla är borta raderas nyckeln flashcards
      if (flashcards.length === 0) {
        localStorage.removeItem('flashcards');
      } else {
        // localStorage uppdateras
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
      }

      // Ser till att hela div-elementet raderas från DOM.
      kortDiv.remove();
    });

    // Variabler skapas för att undvika upprepning samt ha en mer läsbar kod i funktionerna nedan
    let svaretDiv = kortDiv.querySelector('.svaretDiv');
    // Kopplar selektiorn till en variabel
    let visaKnapp = svaretDiv.querySelector('.visaKnapp');
    let doljKnapp = svaretDiv.querySelector('.doljKnapp');
    let svaret = svaretDiv.querySelector('.svaret');

    // Knappen aktiveras för att visa svaret på frågan i kortet
    visaKnapp.addEventListener('click', () => {
      // Visar svaret
      svaret.style.display = 'block';
      // Döljer knappen visa
      visaKnapp.style.display = 'none';
      // Visar knappen dölj
      doljKnapp.style.display = 'inline';
    });

    // Knappen aktiveras för att dölja svaret på frågan i kortet
    doljKnapp.addEventListener('click', () => {
      // Döljer svaret
      svaret.style.display = 'none';
      // Visar knappen visa
      visaKnapp.style.display = 'inline';
      // Döljer knappen dölj
      doljKnapp.style.display = 'none';
    });
  });
}

// Anropar funktionen
hamtaSparadeKort();
