
describe('NFT Minting', () => {
  it('should mint an NFT successfully', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[placeholder="Address"]').type('addr_test1...');
    cy.get('input[placeholder="Metadata"]').type('{"name": "Test NFT"}');
    cy.get('input[placeholder="Min Price"]').type('1000');
    cy.get('button').click();

    cy.contains('NFT Marketplace');
  });
});
