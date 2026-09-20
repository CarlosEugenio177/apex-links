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
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logoUrl: "/apex_logo.png",
  socials: {
    instagram: "https://instagram.com",
    telegram: "https://t.me",
    tiktok: "https://tiktok.com",
  },
}

// Adicione ou edite os links diretamente neste array
export const linksList: LinkItem[] = [
  {
    id: "grupo-whatsapp",
    title: "Grupo WhatsApp",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    url: "https://chat.whatsapp.com/seu-link-aqui",
    icon: "whatsapp",
  },
  {
    id: "canal-telegram",
    title: "Canal Telegram",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    url: "https://t.me/seu-link-aqui",
    icon: "telegram",
  },
]
