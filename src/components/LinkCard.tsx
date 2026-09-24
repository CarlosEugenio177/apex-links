import React from "react"
import { ChevronRight } from "lucide-react"
import { LinkItem } from "../data/links"
import { renderIcon } from "./Icons"

interface LinkCardProps {
  item: LinkItem
}

export function LinkCard({ item }: LinkCardProps) {
  const isExternalLink = /^https?:\/\//.test(item.url || "")

  return (
    <a
      href={item.url || "#"}
      target="_blank"
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className="group relative w-full flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#16181A] text-slate-900 dark:text-neutral-100 border border-slate-200/90 dark:border-[#272A30] shadow-2xs hover:border-[#c30000]/60 dark:hover:border-[#c30000]/60 hover:shadow-xs transition-all duration-150 active:scale-[0.99] min-h-[60px]"
    >
      {/* Left: Icon + Title & Description */}
      <div className="flex items-center gap-3.5 min-w-0 pr-2">
        <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-[#202328] border border-slate-100 dark:border-[#2A2E35] flex items-center justify-center shrink-0">
          {renderIcon(item.icon)}
        </div>

        <div className="min-w-0 text-left">
          <h2 className="text-sm sm:text-[15px] font-bold tracking-tight text-slate-900 dark:text-neutral-100 group-hover:text-[#c30000] dark:group-hover:text-[#ff3b3b] transition-colors truncate">
            {item.title}
          </h2>

          {item.description && (
            <p className="text-xs text-slate-500 dark:text-neutral-400 leading-snug line-clamp-1 pt-0.5">
              {item.description}
            </p>
          )}
        </div>
      </div>

      {/* Right: Chevron Arrow */}
      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-slate-400 dark:text-neutral-500 group-hover:text-[#c30000] dark:group-hover:text-[#ff3b3b] transition-transform group-hover:translate-x-0.5">
        <ChevronRight className="w-4 h-4" />
      </div>
    </a>
  )
}
