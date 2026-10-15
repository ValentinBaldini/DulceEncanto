import { ArrowRight, ArrowUpRight, Check, ChevronRight, Gift, MapPin, MessageCircle, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SiteFooter, SiteHeader } from '../components/Layout'
import { WHATSAPP_ORDER_URL, WHATSAPP_URL } from '../config'

const steps = [
  ['01', 'Elegí tu favorito', 'Mirá las opciones y encontrá algo rico para cada ocasión.'],
  ['02', 'Escribinos', 'Contanos por WhatsApp qué producto te gustaría pedir.'],
  ['03', 'Coordinamos', 'Definimos juntos todos los detalles de tu pedido.'],
]

const mothersDayMessage = encodeURIComponent(
  'Hola Dulce Encanto, quiero consultar por la promoción del Día de las Madres: una caja de brigadeiros + un porta celular.',
)
const mothersDayWhatsAppUrl = `${WHATSAPP_ORDER_URL}${mothersDayMessage}`

export function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream-50 text-cocoa-800">
      <SiteHeader overlay />
      <main>
        <section id="inicio" className="relative bg-lilac-50 pt-24 lg:min-h-screen lg:pt-28">
          <div className="absolute -left-28 top-52 size-72 rounded-full bg-lilac-200/40 blur-3xl" />
          <div className="absolute right-8 top-32 hidden text-lilac-300 lg:block" aria-hidden="true">
            <svg width="108" height="108" viewBox="0 0 108 108" fill="none">
              <path d="M54 5V103M5 54H103M19 19L89 89M89 19L19 89" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-4 sm:gap-12 sm:px-8 sm:pb-16 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:pb-20 lg:pt-20">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lilac-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-lilac-700 backdrop-blur sm:mb-7">
                <MapPin className="size-3.5" aria-hidden="true" />
                Mendoza, Argentina
              </div>
              <h1 className="font-serif text-[clamp(3rem,13vw,3.4rem)] font-normal leading-[0.9] tracking-[-0.055em] text-cocoa-950 sm:text-[clamp(3.4rem,8vw,7.1rem)] sm:leading-[0.88]">
                Dulce, salado
                <span className="mt-2 block italic text-lilac-600">y con encanto.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-7 text-cocoa-600 sm:mt-8 sm:text-xl sm:leading-8">
                Brigadeiros brasileños, chipá congelado y tortas artesanales por encargo en Mendoza. Todo hecho con dedicación para cada momento.
              </p>
              <div className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lilac-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-lilac-600/20 transition hover:-translate-y-0.5 hover:bg-lilac-700 focus:outline-none focus:ring-2 focus:ring-lilac-700 focus:ring-offset-2"
                  to="/productos"
                >
                  Ver nuestros productos
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa-700 bg-white/60 px-6 py-3.5 font-semibold text-cocoa-800 transition hover:border-lilac-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-lilac-700 focus:ring-offset-2"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar por WhatsApp
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-lilac-300/60" />
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2.25rem] bg-lilac-200 shadow-2xl shadow-cocoa-900/10 sm:aspect-[4/5]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/optimized/hero-brigadeiros-812.webp"
                  srcSet="/images/optimized/hero-brigadeiros-480.webp 480w, /images/optimized/hero-brigadeiros-812.webp 812w"
                  alt="Brigadeiros artesanales de Dulce Encanto"
                  width="812"
                  height="1444"
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 512px, calc(100vw - 2.5rem)"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa-950 via-cocoa-950/85 to-transparent px-6 pb-6 pt-28 text-white">
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-white p-4 shadow-xl sm:-left-8 sm:block sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-lilac-100 text-lilac-700">
                    <Check className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="block text-sm text-cocoa-900">Preparación artesanal</strong>
                    <span className="text-xs text-cocoa-700">En cada pedido</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-28" aria-labelledby="catalogo-title">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div className="relative mx-auto w-full max-w-lg">
              <img
                className="aspect-square w-full rounded-[2rem] object-cover"
                src="/images/optimized/catalogo-360.webp"
                alt="Brigadeiros y chipá de Dulce Encanto"
                width="360"
                height="640"
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 512px, calc(100vw - 2.5rem)"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-5 right-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <strong className="block font-serif text-2xl text-lilac-700">Categorías</strong>
                <span className="text-sm text-cocoa-700">para elegir</span>
              </div>
            </div>
            <div>
              <p className="section-label">Catálogo de productos</p>
              <h2 id="catalogo-title" className="mt-4 font-serif text-4xl leading-tight tracking-tight text-cocoa-950 sm:text-5xl">
                Dulce, salado y para celebrar.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-cocoa-700">
                Explorá nuestros brigadeiros, chipá congelado y tortas. Encontrá tu categoría y prepará la consulta por WhatsApp.
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-lilac-600 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-lilac-700 focus:outline-none focus:ring-2 focus:ring-lilac-700 focus:ring-offset-2"
                to="/productos"
              >
                Ver catálogo completo
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section id="promo-dia-de-las-madres" className="bg-lilac-50 px-5 py-24 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="mothers-day-title">
          <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-cocoa-950 text-white lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-lilac-200/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-lilac-200">
                <Gift className="size-4" aria-hidden="true" />
                Edición especial
              </div>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-lilac-200">Día de las Madres</p>
              <h2 id="mothers-day-title" className="mt-3 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Un detalle dulce para mamá.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-cream-100">
                Una combinación especial para regalar y compartir en su día.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="La promoción incluye">
                <li className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lilac-200 text-cocoa-950">
                    <Check className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">1 caja de brigadeiros</span>
                </li>
                <li className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lilac-200 text-cocoa-950">
                    <Smartphone className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">1 porta celular</span>
                </li>
              </ul>

              <a
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-lilac-700 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cocoa-950"
                href={mothersDayWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Consultar la promoción
              </a>
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/optimized/promo-brigadeiros-640.webp"
                srcSet="/images/optimized/promo-brigadeiros-320.webp 320w, /images/optimized/promo-brigadeiros-640.webp 640w"
                alt="Caja de brigadeiros de Dulce Encanto"
                width="640"
                height="640"
                sizes="(min-width: 1024px) 43vw, 100vw"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/80 via-cocoa-950/10 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 right-6 max-w-[15rem] rounded-2xl bg-white p-4 text-cocoa-950 shadow-2xl sm:bottom-8 sm:right-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lilac-100 text-lilac-700">
                    <Smartphone className="size-6" aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="block font-serif text-xl">Incluye porta celular</strong>
                    <span className="mt-1 block text-sm text-cocoa-700">Un regalo práctico y dulce.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="bg-cocoa-950 py-24 text-white sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="mt-12 aspect-[3/4] w-full rounded-[1.75rem] object-cover"
                src="/images/optimized/brigadeiros-tradicional-640.webp"
                srcSet="/images/optimized/brigadeiros-tradicional-320.webp 320w, /images/optimized/brigadeiros-tradicional-640.webp 640w"
                alt="Brigadeiros de chocolate de Dulce Encanto"
                width="640"
                height="854"
                sizes="(min-width: 1024px) 22vw, 45vw"
                loading="lazy"
                decoding="async"
              />
              <img
                className="aspect-[3/4] w-full rounded-[1.75rem] object-cover"
                src="/images/optimized/chipa-home-360.webp"
                alt="Chipá listo para disfrutar"
                width="360"
                height="640"
                sizes="(min-width: 1024px) 22vw, 45vw"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <p className="section-label text-lilac-300">Hecho con cariño</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Sabores que acercan y momentos que quedan.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8">
                Dulce Encanto reúne recetas dulces y saladas con una mirada artesanal. Cada propuesta nace para acompañar una merienda, una celebración o ese antojo que no necesita excusas.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 p-5">
                  <strong className="block font-serif text-2xl text-lilac-200">Brasil + Mendoza</strong>
                  <span className="mt-1 block text-sm">Una mezcla con identidad propia.</span>
                </div>
                <div className="rounded-2xl border border-white/20 p-5">
                  <strong className="block font-serif text-2xl text-lilac-200">Dulce + salado</strong>
                  <span className="mt-1 block text-sm">Opciones para cada momento.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pedidos" className="bg-cream-50 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="section-label">Simple y directo</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-cocoa-950 sm:text-5xl">Tu pedido, en tres pasos.</h2>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {steps.map(([number, title, description], index) => (
                <div className="relative rounded-[1.75rem] bg-white p-7 sm:p-8" key={title}>
                  <span className="font-serif text-4xl text-lilac-600">{number}</span>
                  <h3 className="mt-8 font-serif text-2xl text-cocoa-950">{title}</h3>
                  <p className="mt-3 leading-7 text-cocoa-700">{description}</p>
                  {index < steps.length - 1 && <ChevronRight className="absolute -right-4 top-1/2 z-10 hidden size-8 rounded-full bg-lilac-100 p-1.5 text-lilac-600 md:block" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-lilac-600 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="absolute -left-16 -top-16 size-48 rounded-full border-[32px] border-white/5" />
            <div className="absolute -bottom-20 -right-12 size-64 rounded-full border-[40px] border-white/5" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">¿Se te antojó?</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Hagamos algo rico juntos.</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8">Escribinos para conocer opciones, resolver dudas y coordinar tu próximo pedido.</p>
              <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-lilac-700 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-lilac-600" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" aria-hidden="true" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
