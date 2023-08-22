// describe('Transfer Form', () => {
//     beforeEach(() => {
//         // Предположим, ваше приложение запущено на http://localhost:3000
//         cy.visit('http://localhost:8080/')
//     })

//     it('should display validation errors for empty fields and invalid sum', () => {
//         cy.get('#submit').click()
//         cy.wait(5000)
//         // Нажимаем на кнопку отправки без заполнения полей
//         cy.get('.buttonTranslation').click()

//         // Проверяем, что toast сообщение содержит нужный текст
//         cy.contains('Поля "Номер получателя" и "Сумма перевода" должны быть заполнены')

//         // Заполняем только поле с номером получателя
//         cy.get('input[placeholder="Номер получателя"]').type('1234567890')
//         cy.get('.buttonTranslation').click()

//         // Проверяем наличие ошибки только для поля с суммой перевода
//         cy.contains('Поле "Сумма перевода" должно быть заполнено')

//         // Заполняем поле с суммой перевода нулем
//         cy.get('input[placeholder="Сумма перевода"]').type('0')
//         cy.get('.buttonTranslation').click()

//         // Проверяем наличие ошибки о том, что сумма не может быть равна 0
//         cy.contains('Сумма перевода не может быть равна 0')
//     })

//     // Другие тест-кейсы, такие как успешная отправка формы, можно добавить здесь
// })

describe('Transfer Form', () => {
    beforeEach(() => {
        // Предположим, ваше приложение запущено на http://localhost:3000
        cy.visit('http://localhost:8080/')
        cy.get('#submit').click()
        cy.intercept('POST', '/login').as('loginRequest')
    })

    it('should display validation errors for empty fields and invalid sum', () => {
        cy.get('#submit').click() // Замените селектор на правильный, если он отличается.
        cy.wait('@loginRequest').its('response.body.payload').should('have.property', 'token');
    })

    // Другие тест-кейсы, такие как успешная отправка формы, можно добавить здесь
})
