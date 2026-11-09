import React from 'react';

// Official Python Vector Logo (Dual Intertwined Blue & Yellow Snakes)
export function PythonLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <path
        d="M63.086 5.062c-15.82 0-25.07 6.84-25.07 20.313v15.22h25.438v3.812H25.016C10.742 44.407 0 54.04 0 69.86c0 15.82 9.53 25.102 23.805 25.102h14.21v-19.04c0-14.773 12.39-27.18 27.164-27.18h27.188V25.375C92.367 11.086 80.89 5.062 63.086 5.062zM48.71 14.89c3.96 0 7.18 3.227 7.18 7.188 0 3.96-3.22 7.187-7.18 7.187-3.96 0-7.187-3.227-7.187-7.188 0-3.96 3.227-7.188 7.188-7.188z"
        fill="#387eb8"
      />
      <path
        d="M64.914 122.938c15.82 0 25.07-6.84 25.07-20.313v-15.22H64.547v-3.812h38.438c14.273 0 25.015-9.633 25.015-25.453 0-15.82-9.53-25.102-23.804-25.102h-14.21v19.04c0 14.773-12.39 27.18-27.164 27.18H35.633v23.367c0 14.29 11.477 20.313 29.28 20.313zm14.375-9.828c-3.96 0-7.187-3.227-7.187-7.188 0-3.96 3.227-7.187 7.188-7.187 3.96 0 7.187 3.227 7.187 7.187 0 3.96-3.227 7.188-7.188 7.188z"
        fill="#ffe052"
      />
    </svg>
  );
}

// Official R Project Logo (Oval ellipse with letter R)
export function RLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="46" ry="34" fill="#cbd5e1" />
      <ellipse cx="48" cy="48" rx="36" ry="26" fill="#ffffff" />
      <path
        d="M34 26h20c14 0 22 6 22 17 0 9-6 14-14 16l16 21H64L50 60h-6v20H34V26zm10 24h10c7 0 11-3 11-8s-4-8-11-8H44v16z"
        fill="#2563eb"
      />
      <path
        d="M62 59c4-2 7-6 7-10 0-8-6-13-16-13H42v10h11c5 0 8 2 8 6s-3 6-8 6h-3l12 17h11L62 59z"
        fill="#1e3a8a"
        opacity="0.3"
      />
    </svg>
  );
}

// Official Stata Econometrics Logo
export function StataLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="22" fill="#0284c7" />
      <path
        d="M26 38c0-5 4-9 10-9 7 0 10 4 10 9 0 13-19 9-19 22 0 6 5 11 11 11 7 0 11-4 11-4l-2-4s-3 3-8 3c-4 0-6-3-6-6 0-13 19-9 19-22 0-8-6-14-16-14-9 0-16 6-16 14l6 0z"
        fill="#ffffff"
      />
      <text
        x="50"
        y="78"
        fill="#ffffff"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="17"
        textAnchor="middle"
        letterSpacing="2"
      >
        STATA
      </text>
    </svg>
  );
}

// Official IBM SPSS Statistics Logo
export function SpssLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="22" fill="#be123c" />
      {/* Dynamic statistical nodes & curve */}
      <circle cx="28" cy="68" r="9" fill="#ffffff" />
      <circle cx="50" cy="38" r="9" fill="#ffffff" />
      <circle cx="72" cy="28" r="9" fill="#ffffff" />
      <path
        d="M28 68 C 38 60, 42 45, 50 38 C 58 32, 64 30, 72 28"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <text
        x="50"
        y="88"
        fill="#ffffff"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="15"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        SPSS
      </text>
    </svg>
  );
}

// Official Microsoft Excel Logo
export function ExcelLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="24" y="14" width="64" height="72" rx="10" fill="#107c41" />
      <path d="M44 32h32v8H44zm0 14h32v8H44zm0 14h32v8H44z" fill="#ffffff" opacity="0.3" />
      {/* Front tile with X */}
      <rect x="12" y="24" width="46" height="52" rx="8" fill="#185a37" />
      <path
        d="M26 38l8 12-8 12h6l5-8 5 8h6l-8-12 8-12h-6l-5 8-5-8h-6z"
        fill="#ffffff"
      />
    </svg>
  );
}

// Official QGIS Geographical Information Systems Logo
export function QgisLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" fill="#589632" />
      <circle cx="50" cy="50" r="28" fill="#ffffff" />
      <circle cx="50" cy="50" r="20" fill="#589632" />
      {/* Compass / Arrow pointer */}
      <polygon points="50,14 74,68 50,56 26,68" fill="#93c54b" />
      <polygon points="50,14 74,68 50,56" fill="#ee9900" />
      <polygon points="50,56 74,68 62,86" fill="#f0ad4e" />
    </svg>
  );
}

