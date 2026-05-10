// tailwind.config.ts
const config = {
  theme: {
    extend: {
        fontFamily: {
      jakarta: ['var(--font-jakarta)', 'sans-serif'],
      serif: ['var(--font-serif)', 'serif'],
    },
      colors: {
        brand: {
          DEFAULT: "#5051CE", // Exact shade from your logo
          dark: "#3E3F9F",
          light: "#EEF2FF",
        },
        accent: "#FDBA12", // The gold from your banner
      },
      // Adding a subtle glassmorphism blur
      backdropBlur: {
        xs: '2px',
      }
    },
  },
}