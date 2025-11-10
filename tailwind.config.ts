import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#ECEFF1",
        foreground: "#1A1D1F",
        text: {
          primary: "#1A1D1F",
          secondary: "#636B75",
        },
        button: {
          primary: "#113B61",
          text: "#FFFFFF",
          hover: "#0d2843",
        },
        border: "#D1D5DB",
        input: "#FFFFFF",
        ring: "#113B61",
        primary: {
          DEFAULT: "#113B61",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#636B75",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F7FA",
          foreground: "#636B75",
        },
        accent: {
          DEFAULT: "#113B61",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1D1F",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1D1F",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
