import React from 'react';

export const AgrifirmLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g>
            <path d="M30 10C20 10 12 18 12 28v24c0 10 8 18 18 18s18-8 18-18V38c6 0 12-4 14-10-2 8-8 14-16 14V28c0-10-8-18-16-18z" fill="#F5C518" />
            <path d="M40 10c10 0 18 8 18 18v24c0 10-8 18-18 18s-18-8-18-18V42c-6 0-12-4-14-10 2 8 8 14 16 14v6c0 10 8 18 16 18z" fill="#006D3C" />
        </g>
        <text x="72" y="52" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="36" fill="#006D3C">agrifirm</text>
    </svg>
);

export const BiscayartLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 360 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g transform="translate(10,10)">
            <path d="M25 0L50 25L25 50L0 25Z" stroke="#999" strokeWidth="3" fill="none" />
            <circle cx="25" cy="25" r="8" stroke="#999" strokeWidth="2" fill="none" />
            <circle cx="25" cy="25" r="3" fill="#999" />
        </g>
        <text x="72" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="#999" letterSpacing="3">BISCAYART</text>
        <text x="72" y="58" fontFamily="Arial, sans-serif" fontSize="14" fill="#aaa" letterSpacing="6">SEMILLAS</text>
    </svg>
);

export const KersiaLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="22" cy="35" r="12" fill="#00A651" />
        <circle cx="38" cy="35" r="12" fill="#0072BC" />
        <circle cx="30" cy="22" r="12" fill="#8CC63F" />
        <text x="58" y="44" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#0072BC">kersia</text>
        <text x="58" y="62" fontFamily="Arial, sans-serif" fontSize="9" fill="#666" letterSpacing="1">INVENTING A FOOD SAFE WORLD</text>
    </svg>
);

export const BoehringerLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 360 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="32" cy="40" r="28" stroke="#003366" strokeWidth="3" fill="none" />
        <path d="M32 16v6M26 18v10M30 18v10M34 18v10M38 18v10M32 14l-4 4h8z" fill="#003366" />
        <line x1="24" y1="28" x2="40" y2="28" stroke="#003366" strokeWidth="2" />
        <g>
            <rect x="26" y="30" width="2" height="16" fill="#003366" />
            <rect x="30" y="30" width="2" height="16" fill="#003366" />
            <rect x="34" y="30" width="2" height="16" fill="#003366" />
            <rect x="38" y="30" width="2" height="16" fill="#003366" />
        </g>
        <text x="68" y="36" fontFamily="Georgia, serif" fontWeight="bold" fontSize="22" fill="#003366">Boehringer</text>
        <text x="68" y="58" fontFamily="Georgia, serif" fontWeight="bold" fontSize="22" fill="#003366">Ingelheim</text>
    </svg>
);

export const MilkBarLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <text x="0" y="38" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="40" fill="#E31E24">Milk</text>
        <text x="100" y="38" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="40" fill="#333">Bar</text>
        <text x="0" y="55" fontFamily="Arial, sans-serif" fontSize="10" fill="#999" letterSpacing="1">CALF FEEDING SYSTEMS</text>
    </svg>
);
