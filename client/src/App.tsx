import { ThemeProvider, useTheme } from "@/components/theme-provider"

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setTheme("dark")}>dark</button>
          <button onClick={() => setTheme("light")}>light</button>
          <button onClick={() => setTheme("system")}>system</button>
          <p>{theme}</p>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App