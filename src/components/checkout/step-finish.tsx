import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMessage } from "@/lib/generate-mesage"
import { RotateCcw } from "lucide-react"
// import { useRouter } from 'next/router'

export const StepFinish = () => {
    // const router = useRouter()

    const pageReload = () => {
        window.location.reload()
    }

    const { name } = useCheckoutStore(state => state)

    const message = generateMessage()

    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`

    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente irá te guiar sobre o andamento do pedido.</p>
            <Button>
                <Link target="_blank" href={linkZap}>Enviar para o whatsapp</Link>
            </Button>
            <Button variant="outline" onClick={pageReload}>
                <RotateCcw size={20} />
                Fazer novo pedido.
            </Button>
        </div>
    )
}