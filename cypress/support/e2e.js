Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore specific error messages
  if (err.message.includes('$ is not defined')) {
    return false   // prevents Cypress from failing the test
  }

  // Or just ignore all uncaught exceptions
  return false
})
