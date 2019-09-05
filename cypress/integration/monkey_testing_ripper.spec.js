describe('Los estudiantes under monkeys', function () {
    it('visits los estudiantes and survives monkeys', function () {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})

function randomEvent(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if (monkeysLeft > 0) {
        var pos = getRandomInt(0, 4);        
        switch (pos) {
            case 0:
                cy.log('#### select event #### ');
                eventSelect();
                break;
            case 1:
                cy.log('#### input event ####');
                eventInput();
                break;
            case 2:
                cy.log('### botton event ###');
                eventClick();
                break;
            case 3:
                cy.log('### link event ###');
                eventLink();
                break;
            default:
                break;
        }
        monkeysLeft = monkeysLeft - 1;
        cy.wait(2000);
        randomEvent(monkeysLeft);
    }
}

function eventSelect() {
    cy.get('select').then($selects => {
        var selectList = $selects.get(getRandomInt(0, $selects.length));
        if (!Cypress.dom.isHidden(selectList)) {
            cy.wrap(selectList).select('Administración');            
        }        
    });
}

function eventInput() {
    cy.get('input').then($inputs => {
        var inputList = $inputs.get(getRandomInt(0, $inputs.length));
        if (!Cypress.dom.isHidden(inputList)) {
            cy.wrap(inputList).click().type("texto input");            
        }        
    });
}

function eventClick() {
    cy.get('button').then($buttons => {
        var buttonList = $buttons.get(getRandomInt(0, $buttons.length));
        if (!Cypress.dom.isHidden(buttonList)) {
            cy.wrap(buttonList).click({ force: true });
        }
    });
}

function eventLink() {
    cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if (!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({ force: true });            
        }
    });
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};