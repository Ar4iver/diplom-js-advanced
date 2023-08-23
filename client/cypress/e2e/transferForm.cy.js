describe('Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
        cy.wait(2000)
        cy.get('#submit').click()
    })

    it('Проверяем создаётся ли счёт', () => {
        cy.get('#addAccounts').click({ force: true })
        cy.contains('Счёт успешно создан!')
    })

    it('Проверка работы перехода на страницу счёта и работа формы переводов', () => {
        cy.wait(2000)
        cy.contains('74213041477477406320783754')
            .closest('#accountItem')
            .find('a')
            .click()
        cy.contains('Вход успешно выполнен!')

        cy.get('input[placeholder="Номер получателя"]').type('1234567890')
        cy.get('#buttonSubmit').click()
        cy.contains('Укажите корректную сумму перевода.')

        cy.get('input[placeholder="Номер получателя"]').type('88804713156056105141175054')
        cy.get('input[placeholder="Сумма перевода"]').type('100000')
        cy.get('#buttonSubmit').click()
        cy.contains('Перевод валюты успешно выполнен!')
    })
})
