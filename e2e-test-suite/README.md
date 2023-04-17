# token-negotiator-test-suite

## ⚙Setup

- Install dependencies: `npm i`
- Run tests in staging env: `npm run test:stage`
- Run tests in production env: `npm run test:prod`
- Run tests locally:

  ```sh
  # You should first build the website locally
  cd ../
  npm ci
  export BASE_PATH=/token-negotiator-examples/ecommerce-store-website
  export MAX_PROCESSES=5
  npm run install-examples && npm run clean && npm run build && npm run copy-artifacts

  # Run tests locally
  cd -
  npm test
  ```

## 🗂Folder Structure

- Overview of the test framework's main structure:

```text
project_dir
└── apis
    └── example.api.ts
└── extensions
    └── extension-folder
└── fixtures
    └── test-data.json
└── pages
    └── example.page.ts
└── tests
    └── example.spec.ts
└── utils
    └── example.util.ts
└── playwright.config.ts
```

- **/apis:** Contains files that utilize public APIs (e.g. email API).
- **/extensions:** Contains Chrome browser extension folders with data files (e.g. MetaMask extension).
- **/fixtures:** Contains test data to be used in test framework
- **/pages:** Contains the Page Object Model of the test framework.
- **/tests:** Contains the spec files for e2e tests.
- **/utils:** Contains the utility files with helper functions.
- **/playwright.config.ts:** Contains Playwright global configuration options.

## 📖Documentation

<a href="https://playwright.dev/docs/intro">Playwright doc</a>
