import { useState } from "react";
import {
  ArrowLeft,
  CakeSlice,
  Cookie,
  Gift,
  MessageCircle,
  Package,
  Snowflake,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CatalogCard } from "../components/CatalogCard";
import { ProductCard } from "../components/ProductCard";
import { SiteFooter, SiteHeader } from "../components/Layout";
import { WHATSAPP_URL } from "../config";

const categories = [
  {
    id: "brigadeiros",
    label: "Brigadeiros",
    description: "Cajas de 12 unidades en presentación Premium o Tradicional.",
    icon: Cookie,
  },
  {
    id: "chipa",
    label: "Chipá congelado",
    description:
      "Opciones para guardar en el freezer y hornear cuando quieras.",
    icon: Snowflake,
  },
  {
    id: "tortas",
    label: "Tortas",
    description:
      "Propuestas para cumpleaños, encuentros y momentos especiales.",
    icon: CakeSlice,
  },
];

const brigadeiroProducts = [
  {
    id: "premium",
    name: "Caja Premium",
    eyebrow: "Para regalar o celebrar",
    description:
      "Una presentación especial para regalar, sumar a una mesa dulce o acompañar una celebración.",
    icon: Gift,
    image: "/images/Brigadeiros-premium.jpeg",
    imageAlt: "Brigadeiros en presentación premium",
    imagePosition: "object-center",
  },
  {
    id: "tradicional",
    name: "Caja Tradicional",
    eyebrow: "El clásico para compartir",
    description:
      "La opción clásica para una merienda, una juntada o ese antojo que no necesita excusas.",
    icon: Package,
    image: "/images/Brigadeiros-tradicional-2.jpeg",
    imageAlt: "Brigadeiros en presentación tradicional",
    imagePosition: "origin-top scale-[1.55] object-top",
  },
];

const categoryProducts = {
  chipa: {
    name: "Chipá congelado",
    eyebrow: "Horneá cuando quieras",
    description:
      "Chipá congelado para disfrutar recién hecho. Consultanos por las presentaciones disponibles y coordiná tu pedido.",
    image: "/images/Chipa1.jpeg",
    imageAlt: "Chipá de Dulce Encanto listo para hornear",
    icon: Snowflake,
  },
  tortas: {
    name: "Tortas",
    eyebrow: "Para momentos especiales",
    description:
      "Tortas para acompañar celebraciones y encuentros. Consultanos por las opciones disponibles para tu ocasión.",
    imageAlt: "Ilustración de una torta de Dulce Encanto",
    icon: CakeSlice,
  },
};

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("brigadeiros");
  const [quantities, setQuantities] = useState({ premium: 1, tradicional: 1 });
  const selectedCategory = categories.find(({ id }) => id === activeCategory);

  const updateQuantity = (productId, quantity) => {
    setQuantities((current) => ({ ...current, [productId]: quantity }));
  };

  return (
    <div className="min-h-screen bg-white text-cocoa-800">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-lilac-50 py-12 sm:py-16">
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-lilac-200/50 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold text-lilac-700 transition hover:text-cocoa-950"
              to="/"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver al inicio
            </Link>
            <div className="mt-8 flex flex-col gap-6">
              <div>
                <p className="section-label">Catálogo</p>
                <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-cocoa-950 sm:text-6xl">
                  Algo rico para cada momento.
                </h1>
              </div>
              <p className="mt-1 leading-7 text-cocoa-700">
                Explorá brigadeiros, chipá congelado y tortas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16" aria-labelledby="category-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div
              className="category-scroll flex gap-2 overflow-x-auto pb-2"
              role="group"
              aria-label="Filtrar catálogo por categoría"
            >
              {categories.map(({ id, label, icon: Icon }) => {
                const isActive = activeCategory === id;
                return (
                  <button
                    className={`cursor-pointer inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition ${isActive ? "border-lilac-700 bg-lilac-700 text-white" : "border-cocoa-700 bg-white text-cocoa-800 hover:bg-lilac-100"}`}
                    key={id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(id)}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 border-b border-lilac-200 pb-5">
              <h2 id="category-title" className="sr-only">
                {selectedCategory.label}
              </h2>
              <p className="max-w-2xl leading-7 text-cocoa-700">
                {selectedCategory.description}
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2" aria-live="polite">
              {activeCategory === "brigadeiros" ? (
                brigadeiroProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    quantity={quantities[product.id]}
                    onQuantityChange={(quantity) =>
                      updateQuantity(product.id, quantity)
                    }
                  />
                ))
              ) : (
                <CatalogCard product={categoryProducts[activeCategory]} />
              )}
            </div>
          </div>
        </section>

        <section className="bg-cream-50 px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <p className="section-label">¿Tenés alguna duda?</p>
            <h2 className="mt-3 font-serif text-4xl text-cocoa-950 sm:text-5xl">
              Te ayudamos a elegir.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-cocoa-700">
              Escribinos si querés conocer más opciones antes de preparar tu
              pedido.
            </p>
            <a
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-cocoa-900 px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-lilac-700"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
