import React from "react"
import { ProfileData } from "../data/links"

interface ProfileHeaderProps {
  profile: ProfileData
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center space-y-3 mb-6">
      {/* Brand Logo Card (Direct exact image) */}
      <div className="w-52 h-28 sm:w-64 sm:h-32 rounded-2xl bg-white dark:bg-black border border-slate-200/90 dark:border-neutral-800 shadow-xs p-3 sm:p-3.5 flex items-center justify-center transition-colors duration-200">
        <img
          src={profile.logoUrl}
          alt={profile.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Identity & Text */}
      <div className="space-y-1 max-w-sm px-2">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          {profile.name}
        </h1>
        <p className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
          {profile.handle}
        </p>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 pt-1 leading-relaxed">
          {profile.bio}
        </p>
      </div>
    </header>
  )
}
