/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    coverageDirectory: "reports/coverage",
    coverageReporters: ["text", "html", "cobertura", "clover", "lcov"],
    reporters: [
        "default",
        [
            "jest-junit",
            {
                outputDirectory: "reports",
                outputName: "test-reporter.xml",
            },
        ],
    ],
    testResultsProcessor: "jest-sonar-reporter",
};
