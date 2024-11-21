/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: "Plus Jakarta Sans",
      },
      fontWeight: {
        normal: 500,
        bold: 800,
      },
      colors: {
        "primary-red": "hsl(1, 90%, 64%)",
        "primary-blue": "hsl(219, 85%, 26%)",
        White: " hsl(0, 0%, 100%)",
        "main-bg": "hsl(210, 60%, 98%)",
        "active-msg": "hsl(211, 68%, 94%)",
        "notification-bg-unread": "hsl(205, 33%, 90%)",
        "normal-color": "hsl(219, 14%, 63%)",
        post: "hsl(219, 12%, 42%)",
        name: "hsl(224, 21%, 14%)",
      },
      borderRadius: {
        half: "50%",
      },
      flexShrink: {
        5: "5",
      },
      width: {
        mobile: "calc(100% - 32px)",
      },
    },
  },
  plugins: [],
};
