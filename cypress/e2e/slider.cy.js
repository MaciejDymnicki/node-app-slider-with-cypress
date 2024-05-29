describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

//Test 2: Zweryfikuj, czy opis każdego slajdu jest wyświetlany poprawnie
describe('Swiper Gallery Slide Content Test', function () {
  const slides = [
    { title: 'Rome', description: 'Italy' },
    { title: 'London', description: 'United Kingdom' },
    { title: 'Paris', description: 'France' }
  ];

   it('should display correct title and description for each slide', function () {
    cy.visit('http://localhost:3000');
    
    slides.forEach((slide, index) => {
      if (index > 0) {
        cy.get('.swiper-button-next').click();
        cy.wait(1000); // Czekaj na zakończenie animacji przejścia slajdu
      }
      cy.get('.swiper-slide-active h1').should('contain', slide.title);
      cy.get('.swiper-slide-active p').should('contain', slide.description);
    });
  });
});

