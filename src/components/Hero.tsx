export function Hero() {
  return (
    <section>
      <div className="relative h-[70vh] w-full">
  <img
    src="/images/plantas-hero.jpg"
    alt="Paisaje de Bariloche"
    className="h-full w-full object-cover object-[center_25%]"
  />

   <div className="absolute inset-0 bg-black/20" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
  <h1 className="text-3xl font-bold md:text-6xl">
    Descubrí el mundo de las plantas
  </h1>

  <p className="mt-4 max-w-2xl px-6 text-lg md:px-0 md:text-xl">
   Explorá distintas especies y encontrá la que mejor se adapta a tu hogar.
  </p>
</div>
</div>
    </section>
  );
}