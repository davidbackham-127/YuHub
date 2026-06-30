import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

/**
 * Toggles between light and dark theme.
 * Requires ThemeProvider from next-themes to be mounted above in the tree.
 */
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <SunIcon className="size-4" />
      ) : (
        <MoonIcon className="size-4" />
      )}
    </Button>
  )
}

export default ThemeToggle
