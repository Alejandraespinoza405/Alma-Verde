import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CategoryCard } from "@/components/CategoryCard";
import { RecommendationCard } from "@/components/RecommendationCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section>
  <h2>Explorá por categoría</h2>

  <div className="grid gap-8 md:grid-cols-2">
  <CategoryCard
  name="Interior"
  image="/images/plantas-interior.jpg"
/>

<CategoryCard
  name="Suculentas"
  image="/images/plantas-suculentas.jpg"
/>

<CategoryCard
  name="Plantas con flores"
  image="/images/plantas-flores.jpg"
/>

<CategoryCard
  name="Aromáticas"
  image="/images/plantas-aromaticas.jpg"
/>

<CategoryCard
  name="Exterior"
  image="/images/plantas-exterior.webp"
/>
<RecommendationCard />
</div>
</section>

    </>
    
  );
}