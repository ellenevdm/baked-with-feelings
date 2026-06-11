import {
  BUSINESS_EMAIL,
  buildMailtoLink,
  buildWhatsappLink,
} from "./contact";

export const HEADER_LINKS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Menu',
        href: '/menu',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
    {
        label: 'FAQ',
        href: '/faq',
    }
]


export const FOOTER_LINKS = [
    {
        label: 'Menu',
        href: '/menu'
    },
    {
        label: 'FAQ',
        href: "/faq"
    },
    {
        label: 'Contact',
        href: '/contact'
    },
    {
        label:'Terms & Conditions',
        href: '/terms-and-conditions'
    }
]

export const SOCIAL_LINKS =[
    {
        href: buildWhatsappLink(),
        icon: 'FaWhatsapp',
        label: 'WhatsApp',
        handle: 'Chat with Us'
    },

    {
        href: buildMailtoLink('Website enquiry from Baked with Feelings'),
        icon: 'FaEnvelope',
        label: 'Email',
        handle: BUSINESS_EMAIL
    },

    {
        href: 'https://www.instagram.com/baked.withfeelings/',
        icon:'FaInstagram',
        label: 'Instagram',
        handle: '@baked.withfeelings'
    },

    {
        href: 'https://www.facebook.com/profile.php?id=61590961100102',
        icon: 'FaFacebook',
        label: 'Facebook',
        handle: 'Baked With Feelings'
    }

]
