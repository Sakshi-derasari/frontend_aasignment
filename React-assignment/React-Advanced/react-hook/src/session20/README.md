# Movie Wishlist App

A React-powered Movie Wishlist application deployed on Netlify, featuring Redux state management, performance optimization, and responsive design.

## Features

- **Movie Catalog** — Browse a curated list of movies with posters, ratings, and metadata
- **Wishlist Management** — Add/remove movies to your personal wishlist with one click
- **Search & Filter** — Instantly search movies by title with memoized filtering
- **Performance Optimized** — Uses `React.memo`, `useCallback`, and `useMemo` to prevent unnecessary re-renders
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI** — Dark theme with Tailwind CSS styling

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| Redux Toolkit | State management |
| Tailwind CSS 4 | Styling |
| Vite 8 | Build tool |
| Netlify | Deployment |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/movie-wishlist.git

# Navigate to project directory
cd movie-wishlist

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Log in to [Netlify](https://app.netlify.com)
3. Click "New site from Git" → Select your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

Or use the CLI:

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting  # Select dist/ as public directory
npm run build
firebase deploy
```

## Project Structure

```
src/
├── session20/
│   ├── recipeApp/        # Recipe Sharing App (Firebase)
│   │   ├── RecipeApp.jsx
│   │   └── firebase.json
│   ├── movieApp/         # Movie Wishlist App (Netlify)
│   │   ├── MovieWishlist.jsx
│   │   ├── MobileFixes.jsx
│   │   └── netlify.toml
│   └── README.md
```

## Performance Optimizations

- **React.memo** — `MovieCard` component only re-renders when its props change
- **useCallback** — `toggleWishlist` function reference stays stable across renders
- **useMemo** — Filtered movie list only recalculates when search term changes

## Environment Variables

Create a `.env` file for any API keys:

```env
VITE_API_KEY=your_api_key_here
```

## License

MIT
