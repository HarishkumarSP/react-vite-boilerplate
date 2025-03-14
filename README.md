# React Vite Boilerplate

A modern, scalable, and production-ready React boilerplate built with **Vite**, **TypeScript**, **Tailwind CSS**, and best practices for code quality and testing.

---

## Features

- ⚡ **Vite**: Blazing-fast build tool for modern web development.
- 🧩 **React + TypeScript**: Type-safe and scalable React application.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- 🧪 **Vitest**: Fast and modern unit/component testing.
- 🕵️ **Playwright**: End-to-end testing with multi-browser support.
- 🛠️ **Code Quality Tools**:
  - ESLint
  - Prettier
  - EditorConfig
- 🐶 **Husky + Lint-Staged**: Git hooks for pre-commit linting and formatting.
- 🚀 **Deployment Ready**:
  - Netlify
  - Docker

---

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HarishkumarSP/react-vite-boilerplate
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

---

## Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```
- **Run Unit Tests (Vitest)**:
  ```bash
  npm test
  ```
- **Run End-to-End Tests (Playwright)**:
  ```bash
  npm run test:e2e
  ```
- **Lint Code**:
  ```bash
  npm run lint
  ```
- **Format Code**:
  ```bash
  npm run format
  ```

---

## Testing

### Unit/Component Testing (Vitest)

- Tests are located in `src/__tests__` or alongside components.
- Run tests:
  ```bash
  npm test
  ```
- Generate coverage report:
  ```bash
  npm run coverage
  ```

### End-to-End Testing (Playwright)

- Tests are located in `e2e/` or `tests/`.
- Run tests:
  ```bash
  npm run test:e2e
  ```
- Open interactive UI mode:
  ```bash
  npm run test:e2e:ui
  ```
- View HTML report:
  ```bash
  npm run test:e2e:report
  ```

---

## Code Quality Tools

### ESLint

- Lints your code for errors and enforces best practices.
- Configuration: `.eslint.config.js`
- Run linting:
  ```bash
  npm run lint
  ```

### Prettier

- Formats your code for consistency.
- Configuration: `.prettierrc`
- Run formatting:
  ```bash
  npm run format
  ```

### EditorConfig

- Ensures consistent coding styles across editors.
- Configuration: `.editorconfig`

---

## Folder Structure

```
react-vite-boilerplate/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── e2e/                  # Playwright E2E tests
├── tests/                # Vitest unit/component tests
├── .editorconfig
├── .env
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── playwright.config.ts
└── package.json
```

---

## Deployment

### Netlify

1. Push your code to a Git repository.
2. Log in to Netlify and connect your repository.
3. Netlify will automatically build and deploy your app.

### Docker

1. Build the Docker image:
   ```bash
   docker build -t my-react-app .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 my-react-app
   ```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)

### **Key Features of This README**

1. **Comprehensive Overview**: Covers all aspects of the boilerplate setup.
2. **Easy-to-Follow Instructions**: Step-by-step guides for installation, testing, and deployment.
3. **Code Quality Tools**: Highlights ESLint, Prettier, and EditorConfig.
4. **Folder Structure**: Provides a clear view of the project organization.
5. **Contributing Guidelines**: Encourages collaboration and open-source contributions.
6. **Deployment Options**: Offers multiple deployment options.
