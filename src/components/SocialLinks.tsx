import React from "react"
import { ProfileData } from "../data/links"
import { InstagramIcon, TelegramIcon, TikTokIcon, WhatsAppIcon } from "./Icons"

interface SocialLinksProps {
  socials: ProfileData["socials"]
}

export function SocialLinks({ socials }: SocialLinksProps) {
  const items = [
    { key: "instagram", url: socials.instagram, icon: InstagramIcon, title: "Instagram" },
    { key: "telegram", url: socials.telegram, icon: TelegramIcon, title: "Telegram" },
    { key: "tiktok", url: socials.tiktok, icon: TikTokIcon, title: "TikTok" },
    { key: "whatsapp", url: socials.whatsapp, icon: WhatsAppIcon, title: "WhatsApp" },
  ].filter((item) => !!item.url)

  if (items.length === 0) return null

  return (
    <div className="flex items-center justify-center gap-2.5 mb-6">
      {items.map(({ key, url, icon: IconComponent, title }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white dark:bg-[#16181A] border border-slate-200 dark:border-[#272A30] shadow-2xs flex items-center justify-center text-slate-600 dark:text-neutral-300 hover:text-[#c30000] dark:hover:text-[#ff3b3b] hover:border-[#c30000]/40 dark:hover:border-[#c30000]/60 transition-all"
          title={title}
          aria-label={title}
        >
          <IconComponent className="w-4 h-4" />
        </a>
      ))}
    </div>
  )
}
