/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      // tablet: "640px",
      // // => @media (min-width: 640px) { ... }

      // laptop: "1024px",
      // // => @media (min-width: 1024px) { ... }

      // desktop: "1280px",
      // // => @media (min-width: 1280px) { ... }

      // extraSmall: "0px",
      small: "450px",
      medium: "678.75px",
      large: "936px",
      extraLarge: "1080px",
    },
    extend: {
      colors: {
        primary: {
          0: "#000000",
          10: "#21005D",
          20: "#381E72",
          30: "#4F378B",
          40: "#6750A4",
          50: "#7F67BE",
          60: "#9A82DB",
          70: "#B69DF8",
          80: "#D0BCFF",
          90: "#EADDFF",
          95: "#F6EDFF",
          99: "#FFFBFE",
          100: "#FFFFFF",
        },
        secondary: {
          0: "#000000",
          10: "#1D192B",
          20: "#332D41",
          30: "#4A4458",
          40: "#625B71",
          50: "#7A7289",
          60: "#958DA5",
          70: "#B0A7C0",
          80: "#CCC2DC",
          90: "#E8DEF8",
          95: "#F6EDFF",
          99: "#FFFBFE",
          100: "#FFFFFF",
        },
        tertiary: {
          0: "#000000",
          10: "#31111D",
          20: "#492532",
          30: "#633B48",
          40: "#7D5260",
          50: "#986977",
          60: "#B58392",
          70: "#D29DAC",
          80: "#EFB8C8",
          90: "#FFD8E4",
          95: "#FFECF1",
          99: "#FFFBFA",
          100: "#FFFFFF",
        },
        error: {
          0: "#000000",
          10: "#410E0B",
          20: "#601410",
          30: "#8C1D18",
          40: "#B3261E",
          50: "#DC362E",
          60: "#E46962",
          70: "#EC928E",
          80: "#F2B8B5",
          90: "#F9DEDC",
          95: "#FCEEEE",
          99: "#FFFBF9",
          100: "#FFFFFF",
        },
        neutral: {
          0: "#000000",
          10: "#1C1B1F",
          20: "#313033",
          30: "#484649",
          40: "#605D62",
          50: "#787579",
          60: "#939094",
          70: "#AEAAAE",
          80: "#C9C5CA",
          90: "#E6E1E5",
          95: "#F4EFF4",
          99: "#FFFBFE",
          100: "#FFFFFF",
        },
        neutralVariant: {
          0: "#000000",
          10: "#1D1A22",
          20: "#322F37",
          30: "#49454F",
          40: "#605D66",
          50: "#79747E",
          60: "#938F99",
          70: "#AEA9B4",
          80: "#CAC4D0",
          90: "#E7E0EC",
          95: "#F5EEFA",
          99: "#FFFBFE",
          100: "#FFFFFF",
        },

        light: {
          primary: "#6750A4",
          onPrimary: "#FFFFFF",
          onSurfaceVariant: "#49454F",
          surface: "#FFFBFE",
          onSurface: "#1C1B1F",
          error: "#B3261E",
          onError: "#FFFFFF",
        },
        dark: {
          primary: "#D0BCFF",
          onPrimary: "#381E72",
          onSurfaceVariant: "#CAC4D0",
          surface: "#1C1B1F",
          onSurface: "#E6E1E5",
          error: "#F2B8B5",
          onError: "#601410",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "cursive"],
      },
      boxShadow: {
        0: [
          "0 1px 2px rgba(0, 0, 0, 0.3)",
          "0 1px 3px 1px rgba(0, 0, 0, 0.15)",
        ],
        1: [
          "0 1px 2px rgba(0, 0, 0, 0.3)",
          "0 2px 6px 2px rgba(0, 0, 0, 0.15)",
        ],
        2: [
          "0 4px 8px 3px rgba(0, 0, 0, 0.15)",
          "0px 1px 3px rgba(0, 0, 0, 0.3)",
        ],
        3: [
          "0 6px 10px 4px rgba(0, 0, 0, 0.15)",
          "0px 2px 3px rgba(0, 0, 0, 0.3)",
        ],
        4: [
          "0 8px 12px 6px rgba(0, 0, 0, 0.15)",
          "0px 4px 4px rgba(0, 0, 0, 0.3)",
        ],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#661AE6",

          secondary: "#D926AA",

          accent: "#1FB2A5",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
