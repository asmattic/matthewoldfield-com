module.exports = {
  name: '@asmattic/matthewoldfield-com',
  out: './docs/',
  entryPoints: ["./tsconfig.json", "./components/**", "./pages/**", "./scripts/**", "./lib/**", "./layouts/**"],
  exclude: [
    './pages/server.tsx',
  ],
  excludeExternals: true,
  excludePrivate: true,
  hideGenerator: true,
  readme: 'none'
};

