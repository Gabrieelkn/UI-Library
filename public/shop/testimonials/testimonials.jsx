import Image from "next/image";
import avatar1 from "@/public/avatar1.png";
import avatar2 from "@/public/avatar2.png";
import avatar3 from "@/public/avatar3.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "Tech Enthusiast",
      text: "I was blown away by how easy [product] was to use. It completely transformed the way I [do something]. The customer support was exceptional as well. Highly recommend!",
      avatar: avatar1,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Small Business Owner",
      text: "[Company] provided outstanding [service]. They were incredibly responsive and went above and beyond to meet our needs. I'm thrilled with the results.",
      avatar: avatar2,
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Online Shopper",
      text: "I'm so happy with my purchase from [company]! The [product] is even better than I expected. Shipping was fast and the customer service was top-notch.",
      avatar: avatar3,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center flex-wrap gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white dark:bg-muted p-4 w-3/4 max-w-80 rounded-lg shadow-md">
      <div className="flex items-center mt-1">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg text-gray-900 dark:text-foreground font-medium">
            {testimonial.name}
          </h3>
        </div>
      </div>
      <p className="text-gray-700 dark:text-foreground mt-3 text-lg">
        {testimonial.text}
      </p>
    </div>
  );
}
