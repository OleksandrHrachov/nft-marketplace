describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("Should visit to Home page", () => {
    cy.get("h1").should("contains.text", "Discover Digital Art & Collect NFTs");
  });

  it("Should get banner for Home page", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:5000/graphql",
      body: {
        query: `
          query {
            banner {
              _id
              assetName
              createdBy
              imgUrl
              creatorNickName
              creatorAvatarUrl
              assetId
            }
          }
        `,
      },
    })
    .its("body.data.banner")
    .and("have.keys", [
      '_id',
      "assetName",
      "createdBy",
      "imgUrl",
      "creatorNickName",
      "creatorAvatarUrl",
      "assetId"
    ]);
  });
});
