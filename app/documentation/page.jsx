import Link from "next/link";
import { HighlightCode } from "@/lib/highlight";

export default function Documentation() {
  return (
    <div className="container rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Getting Started</h1>

      <p className="mb-4">
        To use these components, you need to have <strong>Next.js</strong>{" "}
        installed. If you do not have Next.js installed, follow the instructions
        on the
        <Link
          href="https://nextjs.org/docs/getting-started"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {" "}
          Next.js Documentation
        </Link>
        .
      </p>

      <p className="mb-4">
        Additionally, these components use <strong>Tailwind CSS</strong> for
        styling. If you already have Next.js but not Tailwind CSS, you can
        install Tailwind by following the guide on the
        <Link
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {" "}
          Tailwind CSS Documentation
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mb-2">Installation</h2>

      <p className="mb-4">
        If you do not have Next.js installed, you can install it with the
        following command:
      </p>
      <HighlightCode language="bash" content={`npx create-next-app@latest`} />
      <p className="mt-4 mb-4">
        After setting up Next.js, you can add Tailwind CSS by following these
        steps:
      </p>
      <HighlightCode
        language="bash"
        content={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
      />
      <p className="mt-4 mb-4">
        After installing Tailwind, update your{" "}
        <code className="bg-gray-200 text-black p-1 rounded">
          tailwind.config.js
        </code>{" "}
        file and include the paths to your files:
      </p>

      <HighlightCode
        language="javascript"
        content={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./_components/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        mainColor: "#0056b3",
        hover: "hsl(var(--hover))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        textColor: "hsl(var(--text))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in-top": {
          "0%": {
            transform: "translate(-50%, -300%)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(-50%, 0)",
            opacity: "1",
          },
        },
        "slide-out-top": {
          "0%": {
            transform: "translate(-50%, 0)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(-50%, -300%)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-top":
          "slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-out-top":
          "slide-out-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
`}
      />

      <p className="mt-4 mb-4">
        Finally, add the following import in your{" "}
        <code className="bg-gray-200 p-1 text-black rounded">globals.css</code>{" "}
        or{" "}
        <code className="bg-gray-200 p-1 text-black rounded">styles.css</code>:
      </p>

      <HighlightCode
        language="css"
        content={`@tailwind base;
@tailwind components;
@tailwind utilities;


@layer components {
  .container {
    width: 95%;
    margin: auto;
    max-width: var(--max-width);
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .no-scrollbar:-webkit-scrollbar {
    display: none;
  }

  .h1 {
    font-size: clamp(1.5rem, 4vw + 1rem, 72px);
    font-weight: bold;
  }

  .p {
    font-size: clamp(16px, 1vw + 15px, 18px);
  }

  .h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
}

@layer base {
  :root {
    --max-width: 1100px;
    --mainColor: #0056b3;
    --hover: 211, 88%, 55%;
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

`}
      />

      <h2 className="text-xl font-semibold mb-2 mt-4">Using the Components</h2>

      <p className="mb-4">
        Once you have everything set up, copy the code for the component you
        want to use and paste it into your project. You may need to install
        additional libraries for some components if necessary.
      </p>
    </div>
  );
}
