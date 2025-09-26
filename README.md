Here's a project template using Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, NextAuth, Next-Theme, Axios, and React-query.

## Author

Natalia Manosso - Software Developer

## Technologies Used

- **Next.js**: React framework for production.
- **React**: Library for building user interfaces.
- **TypeScript**: A JavaScript superset that adds static typing.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **Shadcn UI**: Custom UI components.
- **NextAuth**: Authentication for Next.js.
- **Next-Theme**: Theme management.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React-query**: Data-fetching and state management library for handling requests.

## Folder Structure

```
├── src/
│   ├── app/                      # Application pages and routes
│   │   ├── (private-routes)/        # Layout for Private Routes
│   │   └── api/                     # Nextauth routing
│   ├── components/               # Reusable components
│   │   ├── auth/                    # Authentication components
│   │   ├── examples/                # Component examples
│   │   ├── layout/                  # Base application components
│   │   └── ui/                      # ShadcnUI components
│   ├── context/                  # Global contexts
│   ├── hooks/                    # Custom hooks
│   ├── lib/                      # Helpers
│   │   ├── auth/                    # NextAuth configurations
│   │   ├── http/                    # Request configurations
│   │   ├── mocks/                   # Data mocks
│   │   ├── utils/                   # General utilities
│   │   └── validations/             # Zod schemas
│   ├── providers/                # Application providers
│   ├── services/                 # Services and API calls
│   └── types/                    # Typings
├── public/                       # Static files
├── .env.example                  # Environment variables template
├── .eslintrc.json                # ESLint configuration
├── .prettierrc                   # Prettier configuration
├── middleware.ts                 # Middleware template
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```

## How to Start

1. **Install dependencies:** Navigate to the project directory and run:

```bash
npm install
```

2. **Environment Configuration:** Rename the `.env.example` file to `.env.local` and set up the necessary environment variables.

3. **Run the project:** Start the development server:

```bash
npm run dev
```

The project will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates the production build.
- `npm run start`: Starts the server in production mode.
- `npm run lint`: Runs the linter to check code quality.
- `npm run format`: Runs prettier to format the code.

Last updated: 09/2025.
