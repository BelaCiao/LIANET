import React from 'react';

export const LianetLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* The 'L' shape in primary color */}
    <path
      d="M4 2V30H14V26H8V6H24V14H28V2H4Z"
      fill="#0A2540"
    />
    {/* The circuit 'N' and nodes in secondary green */}
    <g fill="#3ECF8E">
      <path
        d="M12 12V24L20 12V24"
        stroke="#3ECF8E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12L22 10"
        stroke="#3ECF8E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="23" cy="9" r="1.5" />
      <path
        d="M20 18L22 18"
        stroke="#3ECF8E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="23" cy="18" r="1.5" />
      <path
        d="M20 24L22 26"
        stroke="#3ECF8E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="23" cy="27" r="1.5" />
      <path
        d="M12 12L10 10"
        stroke="#3ECF8E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="9" r="1.5" />
      <path
        d="M12 24L10 26"
        stroke="#3ECF8E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="27" r="1.5" />
    </g>
  </svg>
);

export const MonitorIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

export const WifiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

export const HandshakeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 10c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5z"></path>
    <path d="M9.5 10c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5z"></path>
    <path d="M18 16.8V13c0-1.1-.9-2-2-2h-1.42c-.44 0-.85.22-1.1.59L12 13l-1.48-1.41A1.99 1.99 0 009.42 11H8c-1.1 0-2 .9-2 2v3.8c0 .66.54 1.2 1.2 1.2H16.8c.66 0 1.2-.54 1.2-1.2z"></path>
  </svg>
);

export const FlexibilityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 12H2a1 1 0 00-1 1v1a1 1 0 001 1h2.5"/><path d="M19.5 12H22a1 1 0 011 1v1a1 1 0 01-1 1h-2.5"/><path d="M12 4.5V2a1 1 0 00-1-1h-1a1 1 0 00-1 1v2.5"/><path d="M12 19.5V22a1 1 0 001 1h1a1 1 0 001-1v-2.5"/><path d="M12 12m-6 0a6 6 0 1012 0 6 6 0 10-12 0"/>
    </svg>
);

export const VersatilityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
    </svg>
);

export const ExperienceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

export const SpecializationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.45 16.86L2.05 22L7.31 20.62C8.75 21.41 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.27 20.92 6.83 19.16 4.98C17.41 3.14 14.89 2 12.04 2ZM17.16 15.26C16.96 15.76 15.77 16.36 15.23 16.42C14.68 16.47 14.23 16.44 13.88 16.29C13.53 16.14 12.56 15.79 11.45 14.77C10.05 13.48 9.2 11.93 9.04 11.63C8.88 11.33 8.76 11.18 8.76 10.94C8.76 10.71 8.65 10.5 8.48 10.32C8.3 10.15 8.07 9.94 7.82 9.69C7.57 9.44 7.45 9.29 7.33 9.07C7.2 8.85 7.09 8.66 7.15 8.42C7.21 8.18 7.39 7.99 7.56 7.83C7.73 7.67 7.91 7.64 8.08 7.64C8.26 7.64 8.42 7.64 8.56 7.65C8.71 7.66 8.88 7.67 9.06 8.12C9.25 8.57 9.76 9.73 9.86 9.88C9.96 10.03 10.06 10.15 10 10.27C9.93 10.39 9.86 10.45 9.73 10.59C9.61 10.73 9.49 10.84 9.38 10.96C9.28 11.08 9.17 11.2 9.3 11.4C9.43 11.6 9.83 12.23 10.43 12.78C11.19 13.49 11.83 13.84 12.11 13.97C12.38 14.1 12.55 14.07 12.7 13.92C12.88 13.73 13.1 13.39 13.31 13.11C13.52 12.83 13.73 12.78 13.95 12.88C14.17 12.98 15.25 13.51 15.48 13.63C15.71 13.75 15.88 13.83 15.93 13.92C15.98 14.02 15.98 14.39 15.81 14.73C15.65 15.07 15.35 15.18 15.26 15.26L17.16 15.26Z" />
  </svg>
);