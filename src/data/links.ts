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
    instagram: "https://www.instagram.com/clube_apex?vrfl=Z25ldHYwaXUwaWQz&utm_source=qr",
    tiktok: "https://www.tiktok.com/@apexclubeodefertas?_r=1&_t=ZS-9AvoDuQ8CPZ",
  },
}

export const whatsappGroupUrl = import.meta.env.VITE_LINKWPP || "https://chat.whatsapp.com/J2AR9AZNHvNG8hhxYqOm3C"

export const linksList: LinkItem[] = [
  {
    id: "grupo-whatsapp",
    title: "Grupo WhatsApp",
    description: "Ofertas monitoradas, cupons testados e oportunidades verificadas.",
    url: whatsappGroupUrl,
    icon: "whatsapp",
  }
]
