describe('Test permutation default text', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show permutation to No Trial with never-ending subscription', () => {
    cy.get('p').contains(
      `Your customer will be charged $0.00 immediately and then $0.00 every 0 Months until they cancel.`
    )
  })

  it('should show permutation to Trial with never ending subscription', () => {
    cy.get('[data-cy="trialFrequency"]').click()
    cy.get('[data-cy="trialFrequency_Days"]').click()

    cy.get('p').contains(
      `Your customer will be charged $0.00 immediately for their 0 Days trial, and then $0.00 every 0 Months until they cancel.`
    )
  })

  it('should show permutation to Trial with ending subscription', () => {
    cy.get('[data-cy="trialFrequency"]').click()
    cy.get('[data-cy="trialFrequency_Days"]').click()

    cy.get('[data-cy="duration"]').click()
    cy.get('[data-cy="duration_Customize"]').click()

    cy.get('p').contains(
      `Your customer will be charged $0.00 immediately for their 0 Days trial, and then $0.00 every 0 Months, 0 times. The total amount paid will be $0.00.`
    )
  })
})

describe('Test permutation change text', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show permutation to No Trial with never-ending subscription', () => {
    // I'm using cents to save currency

    cy.get('input[name="initialPrice"]').type('20000')
    cy.get('input[name="billingPeriod"]').type('5')
    cy.get('input[name="periodPayment"]').clear()
    cy.get('input[name="periodPayment"]').type('30000')

    cy.get('p').contains(
      'Your customer will be charged $200.00 immediately and then $300.00 every 5 Months until they cancel.'
    )

    cy.get('[data-cy="billingFrequency"]').click()
    cy.get('[data-cy="billingFrequency_Days"]').click()
    cy.get('p').contains(
      'Your customer will be charged $200.00 immediately and then $300.00 every 5 Days until they cancel.'
    )

    cy.get('[data-cy="billingFrequency"]').click()
    cy.get('[data-cy="billingFrequency_Weeks"]').click()
    cy.get('p').contains(
      'Your customer will be charged $200.00 immediately and then $300.00 every 5 Weeks until they cancel.'
    )
  })

  it('should show permutation to Trial with never ending subscription', () => {
    cy.get('[data-cy="trialFrequency"]').click()
    cy.get('[data-cy="trialFrequency_Days"]').click()

    cy.get('p').contains(
      `Your customer will be charged $0.00 immediately for their 0 Days trial, and then $0.00 every 0 Months until they cancel.`
    )
    cy.get('[data-cy="trialFrequency"]').click()
    cy.get('[data-cy="trialFrequency_Weeks"]').click()

    cy.get('p').contains(
      `Your customer will be charged $0.00 immediately for their 0 Weeks trial, and then $0.00 every 0 Months until they cancel.`
    )
    cy.get('[data-cy="trialFrequency"]').click()
    cy.get('[data-cy="trialFrequency_Months"]').click()
    cy.get('input[name="trialPeriod"]').type('12')

    cy.get('p').contains(
      `Your customer will be charged $0.00 immediately for their 12 Months trial, and then $0.00 every 0 Months until they cancel.`
    )

    cy.get('[data-cy="duration"]').click()
    cy.get('[data-cy="duration_Customize"]').click()

    cy.get('input[name="billingCycles"]').should('be.visible')
    cy.get('input[name="billingCycles"]').type('12')

    cy.get('p').contains(
      `Your customer will be charged $0.00 immediately for their 12 Months trial, and then $0.00 every 0 Months, 12 times. The total amount paid will be $0.00.`
    )
  })
})
