export type IconType = "whatsapp" | "telegram" | "instagram" | "tiktok" | "link"

export interface LinkItem {
  id: string
  title: string
  description?: string
  url: string
  icon: IconType
}

export interface ProfileData {
  name: string
  handle: string
  bio: string
  logoUrl: string
  socials: {
    instagram?: string
    telegram?: string
    tiktok?: string
    whatsapp?: string
  }
}

export const profileData: ProfileData = {
  name: "APEX Clube de Ofertas",
  handle: "@apexclubedeofertas",
  bio: "No topo com facilidade.",
  logoUrl: "/apex_logo.svg",
  socials: {
    instagram: "https://instagram.com/apexclubedeofertas",
  },
}

export const whatsappGroupUrl = import.meta.env.VITE_LINKWPP || "https://chat.whatsapp.com/FiDihiAcSR4A11jPrHOLuB"

export const linksList: LinkItem[] = [
  {
    id: "grupo-whatsapp",
    title: "Grupo WhatsApp",
    description: "Ofertas e achadinhos compartilhados na comunidade.",
    url: whatsappGroupUrl,
    icon: "whatsapp",
  }
]
