import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import TableData from './components/TableData'
import { Button } from './components/Button'

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h1>Component Playground</h1>
      <Button variant="text" label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`} onclick={toggleTheme}/>
      <TableData />
    </>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
