beforeEach(() => {
  cy.visit('/')
})

describe('Initial Price', () => {
  it('should show correct value', () => {
    cy.get('input[name="initialPrice"]')
      .type('100000')
      .should('have.value', '1,000.00')
      .clear()

    cy.get('input[name="initialPrice"]')
      .type('10000')
      .should('have.value', '100.00')
      .clear()

    cy.get('input[name="initialPrice"]')
      .type('1000')
      .should('have.value', '10.00')
      .clear()

    cy.get('input[name="initialPrice"]')
      .type('100')
      .should('have.value', '1.00')
      .clear()

    cy.get('input[name="initialPrice"]')
      .type('199')
      .should('have.value', '1.99')
      .clear()

    cy.get('input[name="initialPrice"]')
      .type('-100')
      .should('have.value', '1.00')
      .clear()

    cy.get('input[name="initialPrice"]')
      .type('100-')
      .should('have.value', '1.00')
      .clear()

    cy.get('input[name="initialPrice"]')
      .type('-')
      .should('have.value', '0.00')
      .clear()
  })
})

describe('Billing', () => {
  describe('Billing Period', () => {
    it('should show correct value', () => {
      cy.get('input[name="billingPeriod"]')
        .type('12')
        .should('have.value', '12')
        .clear()

      cy.get('input[name="billingPeriod"]')
        .type('-12')
        .should('have.value', '12')
        .clear()

      cy.get('input[name="billingPeriod"]')
        .type('-')
        .should('have.value', '0')
        .clear()
    })
  })

  describe('Billing Frequency', () => {
    it('should show correct value', () => {
      cy.get('[data-cy="billingFrequency"]').click()
      cy.get('[data-cy="billingFrequency_Days"]').click()

      cy.get('[data-cy="billingFrequency"]').contains('Days')

      cy.get('[data-cy="billingFrequency"]').click()
      cy.get('[data-cy="billingFrequency_Weeks"]').click()

      cy.get('[data-cy="billingFrequency"]').contains('Weeks')

      cy.get('[data-cy="billingFrequency"]').click()
      cy.get('[data-cy="billingFrequency_Months"]').click()

      cy.get('[data-cy="billingFrequency"]').contains('Months')
    })
  })
})

describe('Monthly Payment', () => {
  it('should show correct value', () => {
    cy.get('input[name="periodPayment"]')
      .type('100000')
      .should('have.value', '1,000.00')
      .clear()

    cy.get('input[name="periodPayment"]')
      .type('10000')
      .should('have.value', '100.00')
      .clear()

    cy.get('input[name="periodPayment"]')
      .type('1000')
      .should('have.value', '10.00')
      .clear()

    cy.get('input[name="periodPayment"]')
      .type('100')
      .should('have.value', '1.00')
      .clear()

    cy.get('input[name="periodPayment"]')
      .type('199')
      .should('have.value', '1.99')
      .clear()

    cy.get('input[name="periodPayment"]')
      .type('-100')
      .should('have.value', '1.00')
      .clear()

    cy.get('input[name="periodPayment"]')
      .type('100-')
      .should('have.value', '1.00')
      .clear()

    cy.get('input[name="periodPayment"]')
      .type('-')
      .should('have.value', '0.00')
      .clear()
  })
})

describe('Trial', () => {
  describe('Trial period', () => {
    it('should be disabled', () => {
      cy.get('input[name="trialPeriod"]').should('be.disabled')
    })

    it('should be enable', () => {
      cy.get('[data-cy="trialFrequency"]').click()
      cy.get('[data-cy="trialFrequency_Days"]').click()

      cy.get('input[name="trialPeriod"]').should('not.be.disabled')
    })

    it('should show correct value', () => {
      cy.get('[data-cy="trialFrequency"]').click()
      cy.get('[data-cy="trialFrequency_Days"]').click()

      cy.get('input[name="trialPeriod"]')
        .type('12')
        .should('have.value', '12')
        .clear()

      cy.get('input[name="trialPeriod"]')
        .type('-12')
        .should('have.value', '12')
        .clear()

      cy.get('input[name="trialPeriod"]')
        .type('-')
        .should('have.value', '0')
        .clear()
    })
  })
  describe('Trial Frequency', () => {
    it('should show correct value', () => {
      cy.get('[data-cy="trialFrequency"]').click()
      cy.get('[data-cy="trialFrequency_Days"]').click()

      cy.get('[data-cy="trialFrequency"]').contains('Days')

      cy.get('[data-cy="trialFrequency"]').click()
      cy.get('[data-cy="trialFrequency_Weeks"]').click()

      cy.get('[data-cy="trialFrequency"]').contains('Weeks')

      cy.get('[data-cy="trialFrequency"]').click()
      cy.get('[data-cy="trialFrequency_Months"]').click()

      cy.get('[data-cy="trialFrequency"]').contains('Months')

      cy.get('[data-cy="trialFrequency"]').click()
      cy.get('[data-cy="trialFrequency_None"]').click()

      cy.get('[data-cy="trialFrequency"]').contains('None')

      cy.get('input[name="trialPeriod"]').should('be.disabled')
    })
  })
})

describe('Duration', () => {
  it('should show correct value', () => {
    cy.get('[data-cy="duration"]').click()
    cy.get('[data-cy="duration_Never ends"]').click()

    cy.get('[data-cy="duration"]').contains('Never ends')

    cy.get('[data-cy="duration"]').click()
    cy.get('[data-cy="duration_Customize"]').click()

    cy.get('[data-cy="duration"]').contains('Customize')
  })
})

describe('Billing Cycles', () => {
  it('should be invisible', () => {
    cy.get('[data-cy="duration"]').click()
    cy.get('[data-cy="duration_Never ends"]').click()

    cy.get('input[name="billingCycles"]').should('not.be.visible')
  })

  it('should show correct value', () => {
    cy.get('[data-cy="duration"]').click()
    cy.get('[data-cy="duration_Customize"]').click()

    cy.get('input[name="billingCycles"]')
      .type('12')
      .should('have.value', '12')
      .clear()

    cy.get('input[name="billingCycles"]')
      .type('-12')
      .should('have.value', '12')
      .clear()

    cy.get('input[name="billingCycles"]')
      .type('-')
      .should('have.value', '0')
      .clear()
  })
})
