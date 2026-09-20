import React from "react"
import { Sun, Moon } from "lucide-react"
import { ThemeProvider, useTheme } from "./context/ThemeContext"
import { ProfileHeader } from "./components/ProfileHeader"
import { SocialLinks } from "./components/SocialLinks"
import { LinkCard } from "./components/LinkCard"
import { profileData, linksList } from "./data/links"

function MainContent() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C0D0E] text-slate-900 dark:text-neutral-100 flex flex-col justify-between transition-colors duration-200">
      {/* Top bar with Theme Toggle */}
      <div className="w-full max-w-xl mx-auto px-4 pt-4 flex justify-end">
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          className="p-2 rounded-full bg-slate-100 dark:bg-[#16181A] border border-slate-200 dark:border-[#272A30] text-slate-700 dark:text-neutral-300 hover:text-[#c30000] dark:hover:text-[#ff3b3b] hover:border-[#c30000]/40 dark:hover:border-[#c30000]/50 transition-all cursor-pointer"
          title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-600" />
          )}
        </button>
      </div>

      {/* Main Container */}
      <main className="w-full max-w-md mx-auto px-4 py-4 flex-1 flex flex-col items-center">
        {/* Profile Header */}
        <ProfileHeader profile={profileData} />

        {/* Social Icons */}
        <SocialLinks socials={profileData.socials} />

        {/* Links Stack */}
        <div className="w-full space-y-3">
          {linksList.map((link) => (
            <LinkCard key={link.id} item={link} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-slate-400 dark:text-neutral-600">
        <p>© {new Date().getFullYear()} {profileData.name}</p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  )
}
