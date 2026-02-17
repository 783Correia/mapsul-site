import { siteConfig } from "@/config/site";

export function getWhatsAppLink(message?: string): string {
    const baseUrl = `https://wa.me/${siteConfig.whatsapp}`;
    if (message) {
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
}
