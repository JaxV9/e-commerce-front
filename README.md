# 🌐 AWS Front – Angular Frontend

An Angular 18 frontend application for the e-commerce project. This project includes full development tooling with Karma and Cypress for unit and end-to-end testing, strict TypeScript configuration, and modern Angular features.

---

## 🚀 Features

- ✅ Built with Angular 18 (CLI 18.1.4)
- ⚙️ Strict TypeScript setup
- 🌈 CSS-based styling
- 🧪 Unit testing with Karma and Jasmine
- 🧭 E2E testing with Cypress (CI-ready)
- 📦 Optimized production builds with budgets and hashing
- 🧰 Includes Makefile for common tasks

---

## 📁 Project Structure

```
.
├── src/                     # Application source code
├── dist/                    # Production builds
├── public/                  # Static assets
├── cypress/                 # Cypress test folder
├── angular.json             # Angular CLI configuration
├── tsconfig.json            # TypeScript configuration
├── karma.conf.js            # Karma test runner config
├── cypress.config.ts        # Cypress E2E configuration
├── package.json             # Project metadata and scripts
├── Makefile                 # Common command shortcuts
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (npm install -g @angular/cli)
- Yarn or npm

### 1. Clone the Repository

```bash
git clone git@github.com:JaxV9/e-commerce-front.git
cd e-commerce-front
```

### 2. Install Dependencies

```bash
npm install
```

---

## 📦 Scripts

| Command           | Description                                  |
|------------------|----------------------------------------------|
| `npm start`       | Start the dev server (`ng serve`)            |
| `npm run build`   | Build for production                         |
| `npm test`        | Run unit tests (Karma + Jasmine)             |
| `npm run e2e`     | Run E2E tests (Cypress)                      |
| `npm run cypress:open` | Open Cypress UI                        |
| `npm run cypress:run`  | Run Cypress tests in headless mode     |

---

## 🛠 Makefile Commands

| Make Command    | Equivalent NPM Script |
|----------------|------------------------|
| `make start`    | `npm start`            |
| `make test`     | `npm test`             |
| `make e2e`      | `npm run e2e`          |

---

## 🧪 Testing

### Unit Tests

Run with Karma in headless Chrome:

```bash
npm test
```

### E2E Tests (Cypress)

Headless run for CI:

```bash
npm run cypress:run
```

Open interactive mode:

```bash
npm run cypress:open
```

### Cypress Configuration

Located in `cypress.config.ts`.  
Component and E2E tests are supported with Angular and Webpack dev server.

---

## ⚙️ Development Server

```bash
npm start
```

App will be available at: [http://localhost:4200](http://localhost:4200)  
Live reload is enabled.

---

## 🔐 Production Build

```bash
npm run build
```

Output will be saved to `dist/aws-front/` with full optimization.

---

## 📚 Angular Resources

- [Angular CLI Docs](https://angular.dev/tools/cli)
- [Cypress Docs](https://docs.cypress.io/)
- [Karma Docs](https://karma-runner.github.io/)

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author


- <a href="https://github.com/JaxV9">JaxV9</a>
- <a href="https://github.com/Nalithdev">Nalithdev</a>
- <a href="https://github.com/ImDimeh">ImDimeh</a>
- <a href="https://github.com/Pl83">Pl83</a>
