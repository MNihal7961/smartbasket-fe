import React from "react";

interface CategoryItem {
  label: string;
  imageUrl: string;
}

const categories: CategoryItem[] = [
  {
    label: "Top Offers",
    imageUrl: "https://via.placeholder.com/60x60?text=%25",
  },
  {
    label: "Mobiles & Tablets",
    imageUrl: "https://via.placeholder.com/60x60?text=Mobile",
  },
  {
    label: "TVs & Appliances",
    imageUrl: "https://via.placeholder.com/60x60?text=TVs",
  },
  {
    label: "Electronics",
    imageUrl: "https://via.placeholder.com/60x60?text=Electro",
  },
  {
    label: "Fashion",
    imageUrl: "https://via.placeholder.com/60x60?text=Style",
  },
  {
    label: "Beauty, Food..",
    imageUrl: "https://via.placeholder.com/60x60?text=Beauty",
  },
  {
    label: "Home & Kitchen",
    imageUrl: "https://via.placeholder.com/60x60?text=Home",
  },
  {
    label: "Furniture",
    imageUrl: "https://via.placeholder.com/60x60?text=Sofa",
  },
  {
    label: "Flight Bookings",
    imageUrl: "https://via.placeholder.com/60x60?text=Flight",
  },
  {
    label: "Grocery",
    imageUrl: "https://via.placeholder.com/60x60?text=Grocery",
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <div className="bg-white py-4 px-4">
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
        {categories.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="bg-purple-100 p-2 rounded-md">
              <img
                src={item.imageUrl}
                alt={item.label}
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xs font-medium mt-1 truncate w-full">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
