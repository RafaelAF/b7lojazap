import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart"
import { Button } from "@/components/ui/button";
import { Minus, PlusIcon } from "lucide-react";

type Props = {
    cartItem: Cart;
}


export const CartItemQuantity = ({ cartItem }: Props) => {

    const { upsertCartItem } = useCartStore(state => state)

    return (
        <div className="flex items-center gap-2">
            <Button 
                variant="outline"
                size="icon"
                className="size-6"
                onClick={()=>upsertCartItem(cartItem.product, 1)}
            >
                <PlusIcon size={3} /></Button>
            <div className="text-xs">{cartItem.quantity}</div>
            <Button 
                variant="outline"
                size="icon"
                className="size-6"
                onClick={()=>upsertCartItem(cartItem.product, -1)}
            ><Minus size={3} /></Button>
        </div>
    )
}