import Link from "next/link";
import { HighlightCode } from "@/lib/highlight";

export default function Documentation() {
  return (
    <div className="container p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Getting Started</h1>

      <p className="mb-4">
        To use these components, you need to have <strong>Next.js</strong>{" "}
        installed. If you don't have Next.js installed, follow the instructions
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
        If you don't have Next.js installed, you can install it with the
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
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
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
@tailwind utilities;`}
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
