import Link from "next/link";

export default function Home() {
  return (
    <div className="container mt-2">
      <main className="main min-h-[90vh] grid md:place-items-start place-content-start gap-8 mx-auto md:text-start">
        <h1 className="h1 font-bold">Explore Our Next.js Components!</h1>
        <p className="p leading-7 text-lg md:text-xl">
          Dive into our Next.js site packed with expertly crafted components
          styled with modern CSS. We’ve blended top-notch design with smooth
          performance, ensuring your website looks stunning and runs seamlessly.
          Whether you’re building a sleek, responsive interface or adding custom
          functionality, our components are here to simplify your development
          process.
        </p>

        <section className="mt-12">
          <h2 className="h2 font-semibold mb-4">Why Choose Our Components?</h2>
          <ul className="list-none mb-6">
            <li className="flex items-start mb-8">
              <span className="mr-2">✅</span>
              <span>
                Responsive Design: Our components are built to adapt to any
                screen size, ensuring a great user experience across all
                devices.
              </span>{" "}
            </li>
            <li className="flex items-start mb-8">
              <span className="mr-2">✅</span>
              <span>
                Customizable Styles: Easily tweak the appearance of our
                components with Tailwind CSS utilities to match your brand and
                design preferences.
              </span>
            </li>
            <li className="flex items-start mb-8">
              <span className="mr-2">✅</span>
              <span>
                Optimized Performance: Enjoy fast loading times and smooth
                interactions, thanks to our performance-optimized components.
              </span>
            </li>
            <li className="flex items-start mb-8">
              <span className="mr-2">✅</span>
              <span>
                Comprehensive Documentation: Access detailed guides and examples
                to help you get started and make the most of each component.
              </span>
            </li>
            <li className="flex items-start mb-8">
              <span className="mr-2">✅</span>
              <span>
                Simple Integration: Copy and paste the code directly into your
                project. Our components are designed for easy integration with
                minimal setup.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="h2 font-semibold mb-4">Get Started</h2>
          <p className="p leading-7 text-lg  mb-6">
            Ready to elevate your Next.js project? Our component library is
            designed to streamline your development workflow. Start by exploring
            the components or diving into our documentation to learn how to
            integrate them into your project. With our components, building
            beautiful and functional websites has never been easier!
          </p>
          <div className="flex flex-col justify-center items-center gap-6 md:justify-start md:flex-row">
            <Link
              className="bg-mainColor w-3/4 max-w-[250px] text-center text-white py-4 px-8 rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
              href="/components"
            >
              Browse Components
            </Link>
            <Link
              className="dark:bg-white w-3/4 max-w-[250px] bg-slate-300 text-mainColor text-center py-4 px-12 rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
              href="/documentation"
            >
              See Docs
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
