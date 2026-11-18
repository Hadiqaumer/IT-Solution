import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F2E24", brass: "#7A4F00", ground: "#CFE3D2", sage: "#A9CDB4",
        gold: "#E3CF8E", teal: "#94C9BE", clay: "#E1B497", muted: "#2B4A3E",
      },
      fontFamily: { sans: ["var(--font-jakarta)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
