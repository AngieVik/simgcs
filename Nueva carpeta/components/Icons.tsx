import React from 'react';

type IconWithClassName = {
    className?: string;
};

// ================================================================================================
// PROPS COMPARTIDAS
// ================================================================================================
const iconProps = {
    className:"w-[clamp(32px,7vw,44px)] h-[clamp(32px,7vw,44px)]",
    strokeWidth: "1", 
    fill:"none", 
    viewBox:"0 0 24 24", 
    stroke:"currentColor",
    "aria-hidden": true as const,
};
const carouselIconProps = {
    className: "w-[clamp(26px,6vw,36px)] h-[clamp(26px,6vw,36px)]",
    strokeWidth: "1", 
    fill:"none", 
    viewBox:"0 0 24 24", 
    stroke:"currentColor",
    "aria-hidden": true as const,
};
// ================================================================================================
// ICONOS DE NAVEGACIÓN PRINCIPAL (HOME)
// ================================================================================================
export const AmbulanceIcon = ({ className }: IconWithClassName) => (
    <svg {...iconProps} className={className || iconProps.className} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 10H6"/><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/>
        <path d="M8 8v4"/><path d="M9 18h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
    </svg>
);
export const ChartBarSquareIcon = ({ className }: IconWithClassName) => (
    <svg {...iconProps} className={className || iconProps.className} strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.5 14.25v2.25m3-3.75v3.75m3-2.25v2.25m3-3.75v3.75M3 3h18v18H3V3z" />
    </svg>
);
export const DiceIcon = ({ className }: IconWithClassName) => (
    <svg {...iconProps} className={className || iconProps.className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563V9.313a1.563 1.563 0 0 1 3.125 0v.25m-3.125 4.875v-.25a1.563 1.563 0 0 1 3.125 0v.25m3.75-5.125v.25a1.563 1.563 0 0 0 3.125 0v-.25" />
    </svg>
);
export const Codigo3Icon = ({ className }: IconWithClassName) => (
    <svg {...iconProps} className={className || iconProps.className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.343A5.96 5.96 0 006.04 12c0 2.905 2.1 5.337 4.96 5.856M12 6.343V2.25m0 4.093a5.96 5.96 0 015.96 5.657c0 2.905-2.1 5.337-4.96 5.856" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75a9.75 9.75 0 100-19.5 9.75 9.75 0 000 19.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75h-7.5" />
    </svg>
);
export const RegistryIcon = ({ className }: IconWithClassName) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        aria-hidden="true"
        className={className || "w-[clamp(32px,7vw,44px)] h-[clamp(32px,7vw,44px)]"}
    >
        <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/>
    </svg>
);
// ================================================================================================
// ICONO DE CARPETA DE HEADER
// ================================================================================================
const folderIconProps = {
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    "aria-hidden": true as const,
};

export const FolderIcon = ({ className }: IconWithClassName) => (
    <svg {...folderIconProps} className={`w-4 h-4 shrink-0 ${className ?? ''}`}>
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>
    </svg>
);

export const OpenFolderIcon = ({ className }: IconWithClassName) => (
    <svg {...folderIconProps} className={`w-4 h-4 shrink-0 ${className ?? ''}`}>
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"/>
    </svg>
);
// ================================================================================================
// ICONOS DEL CUADERNO (MODAL DE INFORMACIÓN)
// ================================================================================================
export const MuteIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z"/>
    </svg>
);
export const LearnIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="m280-620 80-80-80-80-80 80 80 80Zm200-40ZM160-400q-33 0-56.5-23.5T80-480v-360q0-33 23.5-56.5T160-920h640q33 0 56.5 23.5T880-840v360q0 33-23.5 56.5T800-400H671q6-20 8-40t0-40h121v-360H160v360h121q-2 20 0 40t8 40H160Zm500-280q25 0 42.5-17.5T720-740q0-25-17.5-42.5T660-800q-25 0-42.5 17.5T600-740q0 25 17.5 42.5T660-680ZM200-40v-84q0-35 19.5-65t51.5-45q49-23 102-34.5T480-280q54 0 107 11.5T689-234q32 15 51.5 45t19.5 65v84H200Zm80-80h400v-4q0-12-7-22t-18-15q-42-19-86-29t-89-10q-45 0-89 10t-86 29q-11 5-18 15t-7 22v4Zm200-200q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T540-460q0-25-17.5-42.5T480-520q-25 0-42.5 17.5T420-460q0 25 17.5 42.5T480-400Zm0-60Zm0 340Z"/>
    </svg>
);
export const MindIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="M440-400h80v-280h-80v280Zm120-60h80v-180h-80v180Zm-240-20h80v-160h-80v160ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"/>
    </svg>
);
export const PatientIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="M481-276ZM120-160v-160q0-83 58.5-141.5T320-520h429q38 0 64.5 26t26.5 64q0 31-19 55.5T773-342l-93 27v155q0 21-9.5 38T645-94q-16 11-35 13.5T571-86l-189-74H120Zm480-120H375q-7 0-10.5 4t-4.5 9q-1 5 1.5 9.5t8.5 6.5l230 91v-120Zm-400 40h84q-2-6-3-12t-1-13q0-39 28-67t67-28h163l214-59q5-2 7-5t1-7q-1-4-3.5-6.5T749-440H320q-50 0-85 35t-35 85v80Zm200-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T480-720q0-33-23.5-56.5T400-800q-33 0-56.5 23.5T320-720q0 33 23.5 56.5T400-640Zm81 364Zm-81-444Z"/>
    </svg>
);
export const PuzzleIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"/>
    </svg>
);
export const DilemasIcons = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="M467-360Zm-24 80ZM320-440h80v-120q0-33 23.5-56.5T480-640v-80q-66 0-113 47t-47 113v120ZM160-120q-33 0-56.5-23.5T80-200v-80q0-33 23.5-56.5T160-360h40v-200q0-117 81.5-198.5T480-840q117 0 198.5 81.5T760-560v43q-10-2-19.5-2.5T720-520q-11 0-20.5.5T680-517v-43q0-83-58.5-141.5T480-760q-83 0-141.5 58.5T280-560v200h187q-9 19-15 39t-9 41H160v80h283q3 21 9 41t15 39H160Zm560 80q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm0-80q11 0 18-7t7-18q0-11-7-18t-18-7q-11 0-18 7t-7 18q0 11 7 18t18 7Zm-18-76h37v-10q0-11 5.5-19.5T758-242q14-12 22-23t8-31q0-29-19-46.5T720-360q-23 0-41.5 13.5T652-310l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14v14Z"/>
    </svg>
);
export const AyIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="M260-640h40v-40q0-17-11.5-28.5T260-720q-17 0-28.5 11.5T220-680q0 17 11.5 28.5T260-640Zm180 0q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680v40h40Zm62 300ZM419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-168h-40q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 20.5 2t19.5 5v-47q0-17 11.5-28.5T340-880q17 0 29 11.5t12 28.5v56q14-8 28.5-12t30.5-4q50 0 85 35t35 85q0 50-35 85t-85 35h-59v312l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419Z"/>
    </svg>
);
export const SrGlasgowItem = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="M280-80v-200H80v-400h200v-200h400v200h200v400H680v200H280ZM160-520h200q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8q10 0 19 5t14 13l68 102h179v-80H600v-200H360v200H160v80Zm200 360h240v-200h200v-80H600q-10 0-19-5t-15-13l-34-52-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H160v80h200v200Zm120-320Z"/>
    </svg>
);
export const LittleGlasgowItem = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>
    </svg>
);
export const PunchItem = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="19.8,2 11.6,8.7 10.39,7.66 13.99,5.58 9.41,1 8,2.41 10.74,5.15 5,8.46 3.81,12.75 6.27,17 8,16 5.97,12.48 6.32,11.18 9.5,13 10,22 12,22 12.5,12 21,3.4"/><circle cx="5" cy="5" r="2"/></g></g>
    </svg>
);
export const PaperAlertIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="M280-320q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm-40-120h80v-200h-80v200Zm160 80h320v-80H400v80Zm0-160h320v-80H400v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </svg>
);
export const SmallAlgorritmeIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M17 10h-4.59l.58-3.41v-.2c-.01-.26-.12-.51-.3-.7L12 5l-4.6 5c-.27.26-.42.62-.4 1v5c0 1.1.9 2 2 2h5.5c.56.03 1.08-.29 1.3-.8l2.1-4.9c.08-.15.12-.33.1-.5V11c0-.55-.45-1-1-1z"/></g></g>
    </svg>
);
export const ComunGronwIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="m574-256 66-67v-37 37l-66 67Zm212 0-66-67v-37 37l66 67ZM480-480ZM80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v220h-80v-220H160v120H80Zm80 440q-33 0-56.5-23.5T80-240v-120h80v120h220v80H160Zm120-120q-11 0-21-5.5T244-302l-69-138H80v-80h120q11 0 21 5.5t15 16.5l44 88 124-248q5-10 15-15t21-5q11 0 21 5t15 15l79 159q-21 2-39.5 9T481-470l-41-80-124 248q-5 11-15 16.5t-21 5.5ZM500-40q-25 0-42.5-17.5T440-100v-147l53-141q9-23 29.5-37.5T568-440h72v-80h80v80h72q25 0 45.5 14.5T867-388l53 141v147q0 25-17.5 42.5T860-40h-80q-25 0-42.5-17.5T720-100v-60h80v40h40v-113l-48-127h-72v37l66 67-56 56-50-50-50 50-56-56 66-67v-37h-72l-48 127v113h40v-40h80v60q0 25-17.5 42.5T580-40h-80Zm180-200Z"/>
    </svg>
);
export const EyeBrainIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect fill="none" height="24" width="24"/><path d="M7.32,10.56L8.38,9.5L7.32,8.44l1.06-1.06L10.5,9.5l-2.12,2.12L7.32,10.56z M4.5,9c0.03,0,0.05,0.01,0.08,0.01 C5.77,6.07,8.64,4,12,4c2.19,0,4.16,0.88,5.61,2.3c0.15-0.6,0.45-1.29,0.81-1.96C16.68,2.88,14.44,2,11.99,2 c-4.88,0-8.94,3.51-9.81,8.14C2.74,9.44,3.59,9,4.5,9z M21,10.5c-0.42,0-0.82-0.09-1.19-0.22C19.93,10.83,20,11.41,20,12 c0,4.42-3.58,8-8,8c-3.36,0-6.23-2.07-7.42-5.01C4.55,14.99,4.53,15,4.5,15c-0.52,0-1.04-0.14-1.5-0.4 c-0.32-0.18-0.59-0.42-0.82-0.7c0.89,4.61,4.93,8.1,9.8,8.1C17.52,22,22,17.52,22,12c0-0.55-0.06-1.09-0.14-1.62 C21.58,10.45,21.3,10.5,21,10.5z M21,3c0,0-2,2.9-2,4c0,1.1,0.9,2,2,2s2-0.9,2-2C23,5.9,21,3,21,3z M15.62,7.38L13.5,9.5l2.12,2.12 l1.06-1.06L15.62,9.5l1.06-1.06L15.62,7.38z M8.56,17c0.69-1.19,1.97-2,3.44-2s2.75,0.81,3.44,2h1.68c-0.8-2.05-2.79-3.5-5.12-3.5 c-0.87,0-1.7,0.2-2.43,0.57l0,0L5.99,12c0-0.52-0.26-1.02-0.74-1.29c-0.72-0.41-1.63-0.17-2.05,0.55c-0.41,0.72-0.17,1.63,0.55,2.05 c0.48,0.28,1.05,0.25,1.49,0l2.97,1.72l0,0C7.64,15.56,7.18,16.24,6.88,17H8.56z"/>
    </svg>
);
export const PupilarGlasgowIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
        <path d="M480-200q-151 0-269.5-83.5T40-500q52-133 170.5-216.5T480-800q151 0 269.5 83.5T920-500q-52 133-170.5 216.5T480-200Zm-317 68q-38-26-68-58.5T45-261l70-38q16 29 40.5 55t55.5 47l-48 65Zm317-148q115 0 209-59t144-161q-50-102-144-161t-209-59q-115 0-209 59T127-500q50 102 144 161t209 59ZM234-93l48-67q36 15 76 25t82 13v80q-56-4-107.5-17T234-93Zm246-227q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm40 350v-80q42-3 82-13t76-25l48 67q-35 18-92 32.5T520-42Zm277-90-48-66q31-21 55.5-46.5T845-299l70 38q-20 38-50 70.5T797-132ZM480-500Z"/>
    </svg>
);
export const BookOpenIcon = ({ className }: IconWithClassName) => (
    <svg className={className || carouselIconProps.className} fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

// ================================================================================================
// OTROS ICONOS (UI, ACCIONES, ETC.)
// ================================================================================================
export const SunIcon = ({ className }: IconWithClassName) => (
    <svg aria-hidden="true" className={className ?? "w-6 h-6"} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);

export const MoonIcon = ({ className }: IconWithClassName) => (
    <svg aria-hidden="true" className={className ?? "w-6 h-6"} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
);

export const HomeIcon = ({ className }: IconWithClassName) => (
    <svg aria-hidden="true" className={className ?? "w-6 h-6"} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

export const XMarkIcon = ({ className }: IconWithClassName) => (
    <svg aria-hidden="true" className={className ?? "w-6 h-6"} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const StethoscopeIcon = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.124 6.024a5.95 5.95 0 018.412 0L12 6.464l.464-.44a5.95 5.95 0 018.412 0 5.95 5.95 0 010 8.412l-8.412 8.412a.998.998 0 01-1.414 0L3.124 14.436a5.95 5.95 0 010-8.412z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.898V22m-4-8.058v4.118A1.94 1.94 0 009.94 20h4.12a1.94 1.94 0 001.94-1.94v-4.118" />
        <circle cx="7" cy="5" r="2" fill="currentColor"/>
        <circle cx="17" cy="5" r="2" fill="currentColor"/>
    </svg>
);
export const PowerIcon = ({ className }: IconWithClassName) => (
    <svg {...iconProps} className={className || iconProps.className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
    </svg>
);
export const CheckCircleIcon = () => (
    <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const XCircleIcon = () => (
    <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const DownloadIcon = ({ className }: IconWithClassName) => (
    <svg aria-hidden="true" className={className ?? "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);
export const TrashIcon = ({ className }: IconWithClassName) => (
    <svg aria-hidden="true" className={className ?? "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);
export const ReplayIcon = () => (
    <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664 0l-3.182-3.182a8.25 8.25 0 0111.664 0l3.182 3.182" />
    </svg>
);
export const SoundOnIcon = ({ className }: IconWithClassName) => (
    <svg aria-hidden="true" className={className ?? "w-6 h-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.108 12 5v14c0 .892-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);

export const SoundOffIcon = ({ className }: IconWithClassName) => (
    <svg aria-hidden="true" className={className ?? "w-6 h-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.108 12 5v14c0 .892-1.077 1.337-1.707.707L5.586 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l-4-4m0 4l4-4" />
    </svg>
);