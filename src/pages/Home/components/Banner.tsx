import React from "react";
import {
  Server,
  ShoppingBag,
  MonitorSmartphone,
  Gamepad2,
  Monitor,
  Sparkles,
  Smile,
  Store,
} from "lucide-react";

const categories = [
  { label: "Servers", icon: Server },
  { label: "Fashion", icon: ShoppingBag },
  { label: "Electronics", icon: MonitorSmartphone },
  { label: "Gaming", icon: Gamepad2 },
  { label: "TV/Projectors", icon: Monitor },
  { label: "Toys", icon: Sparkles },
  { label: "Sport", icon: Smile },
  { label: "Grocery", icon: Store },
];

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-white rounded-xl"
        style={{
          backgroundImage:
            "url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-light.jpg')",
        }}
      >
        <div className="rounded-xl w-full py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Don’t miss out on exclusive deals.
            </h1>
            <p className="text-gray-800 mb-6 text-sm sm:text-base">
              Don&apos;t Miss Out – Limited Stock at Rock-Bottom Prices!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
              Shop now
            </button>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <div className="-mt-8 w-full px-4">
        <div className="bg-white rounded-xl shadow-md max-w-6xl mx-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div
              key={category.label}
              className="flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="bg-gray-900 p-3 rounded-md mb-2">
                <category.icon className="text-white w-5 h-5" />
              </div>
              <span className="text-sm text-gray-900 font-semibold">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
