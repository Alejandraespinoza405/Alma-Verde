type CategoryCardProps = {
  name: string;
  image: string;
};

export function CategoryCard({ name, image }: CategoryCardProps) {
return (
  <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-out my-hover:-translate-y-2 my-hover:scale-[1.02]">
    <img
      src={image}
      alt={name}
       className="h-72 w-full object-cover transition-transform duration-500 my-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/20" />

    <h2 className="absolute bottom-6 left-6 text-5xl font-semibold tracking-tight text-white md:text-6xl">
      {name}
    </h2>
  </div>
);
}