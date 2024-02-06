import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "colors-background-bg-primary": "#fff",
        "primary-2": "#f4e67b",
        khaki: "#eedc59",
        "secondary-4": "#e2e723",
        "primary-1": "#142038",
        "colors-border-border-primary": "#d0d5dd",
        "secondary-1": "#fed12e",
        "colors-text-text-placeholder": "#667085",
        "grey-200": "#ededed",
        black: "#000",
        "secondary-3": "#02583f",
        "interactions-buttons-primary-default": "#65a30d",
        "content-light-main": "#f3f4f6",
        "content-dark-base": "#4b5563",
        "content-dark-main": "#1f2937",
        "background-primary-muted": "#f7fee7",
        "border-dark-subtle": "#d1d5db",
        "content-dark-subtle": "#9ca3af",
        "input-text-placeholder": "#6b7280",
        "input-text-title": "#111827",
        "colors-background-bg-secondary": "#f9fafb",
        "component-colors-components-buttons-tertiary-color-button-tertiary-color-fg":
          "#6941c6",
        "colors-text-text-primary-900": "#101828",
        goldenrod: "#cc9e00",
        "secondary-2": "#72d0f6",
        whitesmoke: "rgba(243, 244, 246, 0.3)",
        teal: "#298066",
      },
      spacing: {
        "spacing-md": "8px",
        "spacing-lg": "12px",
        "spacing-xs": "4px",
        "spacing-xxs": "2px",
        "width-sm": "480px",
        "width-xl": "768px",
        "containerdiv-between-padding": "40px",
        "section-lr-padding": "80px",
        "new-style-container-md": "24px",
        "new-style-container-xs": "12px",
        "new-style-container-sm": "16px",
        "component-trbl-padding": "24px",
        "spacing-140": "560px",
        "container-max-width-desktop": "1280px",
        "spacing-4xl": "32px",
        "new-style-section-section-margin": "16px",
        "device-width": "390px",
        "new-style-container-xxl": "40px",
        "new-style-container-lg": "24px",
        "new-style-container-xl": "32px",
      },
      borderRadius: {
        "radius-md": "8px",
        "rounded-lg": "8px",
        rounded: "4px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        anybody: ["var(--font-anybody)", ...fontFamily.sans],
        "paragraph-regular-semibold": ["var(--font-sans)", ...fontFamily.sans],
        "headings-h4-desktop": ["var(--font-anybody)", ...fontFamily.sans],
        "text-sm-semibold": ["var(--font-anybody)", ...fontFamily.sans],
      },
      fontSize: {
        base: "1rem",
        xl: "1.25rem",
        "5xl": "1.5rem",
        sm: "0.88rem",
        "13xl": "2rem",
        lg: "1.13rem",
        "29xl": "3rem",
        inherit: "inherit",
      },
      screens: {
        mq1275: {
          raw: "screen and (max-width: 1275px)",
        },
        mq1100: {
          raw: "screen and (max-width: 1100px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq900: {
          raw: "screen and (max-width: 900px)",
        },
        mq623: {
          raw: "screen and (max-width: 623px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
} satisfies Config;
