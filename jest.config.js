module.exports = {
    rootDir: ".",
    roots: ["<rootDir>/src"],
    testRegex: "((\\.|/)(test|spec))\\.(t|j)sx?$",
    moduleFileExtensions: [
        "js"
    ],
    snapshotResolver: "<rootDir>/scripts/testing/snapshot-resolver.js"
};