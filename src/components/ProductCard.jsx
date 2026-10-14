import { MessageCircle, Minus, Plus } from 'lucide-react'
import { WHATSAPP_ORDER_URL } from '../config'

const cardStyles = {
  premium: {
    accent: 'bg-lilac-600',
    article: 'border-lilac-400 bg-lilac-50 shadow-lg shadow-lilac-600/10',
    badge: 'bg-cocoa-950 text-white',
    eyebrow: 'text-lilac-700',
    imageBackground: 'bg-cocoa-900',
    summary: 'bg-white text-cocoa-900 ring-1 ring-lilac-200',
    cta: 'bg-cocoa-900 text-white hover:bg-cocoa-950',
  },
  tradicional: {
    accent: 'bg-cocoa-300',
    article: 'border-lilac-200 bg-cream-50 shadow-sm',
    badge: 'bg-white text-lilac-700',
    eyebrow: 'text-cocoa-700',
    imageBackground: 'bg-lilac-100',
    summary: 'bg-lilac-100 text-cocoa-900',
    cta: 'bg-lilac-600 text-white hover:bg-lilac-700',
  },
}

function getWhatsAppOrderUrl(productName, quantity) {
  const boxLabel = quantity === 1 ? 'caja' : 'cajas'
  const presentation = productName.replace(/^Caja /, '').toLowerCase()
  const totalUnits = quantity * 12
  const message = `Hola Dulce Encanto, quiero pedir ${quantity} ${boxLabel} ${presentation} de brigadeiros. Son ${totalUnits} unidades en total.`

  return `${WHATSAPP_ORDER_URL}${encodeURIComponent(message)}`
}

export function ProductCard({ product, quantity, onQuantityChange }) {
  const { name, eyebrow, description, icon: Icon, image, imageAlt, imagePosition } = product
  const boxLabel = quantity === 1 ? 'caja' : 'cajas'
  const styles = cardStyles[product.id] ?? cardStyles.tradicional

  const decrease = () => onQuantityChange(Math.max(1, quantity - 1))
  const increase = () => onQuantityChange(quantity + 1)
  const updateFromInput = (event) => {
    const nextQuantity = Number.parseInt(event.target.value, 10)
    onQuantityChange(Number.isNaN(nextQuantity) ? 1 : Math.max(1, nextQuantity))
  }

  return (
    <article className={`relative grid overflow-hidden rounded-3xl border sm:grid-cols-[180px_1fr] ${styles.article}`}>
      <div className={`absolute inset-x-0 top-0 z-10 h-1 ${styles.accent}`} aria-hidden="true" />
      <div className={`relative aspect-[16/8] overflow-hidden sm:aspect-auto sm:min-h-full ${styles.imageBackground}`}>
        <img className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`} src={image} alt={imageAlt} />
        <span className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] shadow-md ${styles.badge}`}>
          <Icon className="size-3.5" aria-hidden="true" />
          12 unidades
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <p className={`text-xs font-bold uppercase tracking-[0.14em] ${styles.eyebrow}`}>{eyebrow}</p>
        <h2 className="mt-1 font-serif text-3xl text-cocoa-950">{name}</h2>
        <p className="mt-2 leading-6 text-cocoa-700">{description}</p>

        <div className="mt-5 border-t border-lilac-200 pt-4">
          <div className="flex items-center justify-between gap-3">
            <label className="text-sm font-bold text-cocoa-900" htmlFor={`quantity-${product.id}`}>
              Cantidad
            </label>
            <div className="inline-flex items-center overflow-hidden rounded-full border border-cocoa-700 bg-white" role="group" aria-label={`Cantidad de ${name}`}>
              <button className="grid size-10 place-items-center text-cocoa-900 transition hover:bg-lilac-100 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer" type="button" onClick={decrease} disabled={quantity === 1} aria-label={`Quitar una ${name.toLowerCase()}`}>
                <Minus className="size-4" aria-hidden="true" />
              </button>
              <input className="h-10 w-10 border-x border-cocoa-700 bg-white text-center font-bold text-cocoa-950 outline-none focus:bg-lilac-50" id={`quantity-${product.id}`} type="number" min="1" inputMode="numeric" value={quantity} onChange={updateFromInput} />
              <button className="grid size-10 place-items-center text-cocoa-900 transition hover:bg-lilac-100 cursor-pointer" type="button" onClick={increase} aria-label={`Agregar una ${name.toLowerCase()}`}>
                <Plus className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className={`mt-3 flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm ${styles.summary}`} aria-live="polite">
            <span>{quantity} {boxLabel}</span>
            <strong>{quantity * 12} unidades</strong>
          </div>

          <a className={`mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-bold transition hover:-translate-y-0.5 ${styles.cta}`} href={getWhatsAppOrderUrl(name, quantity)} target="_blank" rel="noreferrer">
            <MessageCircle className="size-5" aria-hidden="true" />
            Pedir {name.toLowerCase()}
          </a>
        </div>
      </div>
    </article>
  )
}
