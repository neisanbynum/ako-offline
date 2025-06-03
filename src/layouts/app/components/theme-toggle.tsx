import { Button } from "@/components/base/button"
import { useTheme } from "@/utils/hooks/useTheme"
import { titlecase } from "@/utils/parsers/strings"
import { cn } from "@sglara/cn"
import { Sun, Moon } from "lucide-react"

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useTheme('dark', 'ako-offline-theme')
	const base = 'absolute transition-transform duration-600'

	return (
		<Button.Icon
			size='sm'
			onClick={toggleTheme}
			aria-label={`Toggle Theme to ${titlecase(theme === 'dark' ? 'light' : 'dark')}`}
			icons={[
				{
					icon: Sun,
					className: cn(theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100', base)
				},
				{
					icon: Moon,
					className: cn(theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0', base)
				}
			]}
		/>
	)
}
ThemeToggle.displayName = 'App.Topbar.ThemeToggle'

export { ThemeToggle }