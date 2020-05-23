const subject = require("./index");

describe("The subject", () => {
    it("should match snapshot ", () => {
        expect(subject).toMatchSnapshot();
    });

});