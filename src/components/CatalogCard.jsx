import { MessageCircle } from 'lucide-react'
import { WHATSAPP_ORDER_URL } from '../config'

function getInquiryUrl(productName) {
  const message = `Hola Dulce Encanto, quiero consultar por ${productName.toLowerCase()}.`
  return `${WHATSAPP_ORDER_URL}${encodeURIComponent(message)}`
}

export function CatalogCard({ product }) {
  const { name, eyebrow, description, image, imageAlt, icon: Icon } = product

  return (
    <article className="grid max-w-3xl overflow-hidden rounded-3xl border border-lilac-200 bg-cream-50 shadow-sm sm:grid-cols-[190px_1fr]">
      <div className="relative min-h-44 overflow-hidden bg-lilac-100 sm:min-h-full">
        {image ? (
          <img className="absolute inset-0 h-full w-full object-cover" src={image} alt={imageAlt} />
        ) : (
          <div className="grid h-full min-h-44 place-items-center bg-gradient-to-br from-lilac-100 to-lilac-200 text-lilac-700" role="img" aria-label={imageAlt}>
            <Icon className="size-20" strokeWidth={1.2} aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-lilac-600">{eyebrow}</p>
        <h2 className="mt-1 font-serif text-3xl text-cocoa-950">{name}</h2>
        <p className="mt-3 mb-4 leading-7 text-cocoa-700">{description}</p>
        <a
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lilac-600 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-lilac-700 sm:mt-auto"
          href={getInquiryUrl(name)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  )
}
