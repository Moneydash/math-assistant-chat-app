# Math Assistant Chat App

This project is a chat application built with **React**, **TypeScript**, and **Vite**. It provides users with assistance in solving math-related queries through an interactive chat interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Vite**: A fast build tool and development server that provides hot module replacement (HMR) for a better development experience.
- **LangFlow**: A framework for building applications with language models, enabling seamless integration of AI-driven features.

## Features

- Interactive chat interface for asking math questions.
- Responses are formatted and displayed clearly.
- User privacy is prioritized; chats are temporary and not saved in the database.
- Chat responses may be stored in the OpenAI threads database for quality improvement.

## ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
- Optionally add `...tseslint.configs.stylisticTypeChecked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Environment Variables

To run the application, you need to set up your environment variables. 

1. Copy the `.env.example` file to create your own `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and provide your own LangFlow chat API URL:
   ```plaintext
   VITE_CHAT_API_URL=YOUR_LANGFLOW_CHAT_API_URL_HERE
   ```

Make sure to replace `YOUR_LANGFLOW_CHAT_API_URL_HERE` with your actual LangFlow chat API URL.

## Running the Project

To run the project locally, follow these steps:

1. Navigate to the project directory:
   ```bash
   cd math-assistant
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

Your application should now be running on `http://localhost:5173` (or another port if specified).

## Contributing

If you like this repository, feel free to star it and fork it! Contributions are welcome, and you can submit issues or pull requests for any improvements or features you'd like to see.

Thank you for your support!