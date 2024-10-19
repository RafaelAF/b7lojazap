export const testSend = (message: string) => {
    const phoneRegex = /^55\d{2}9\d{8}$/;
    const numero = prompt("Modo de teste, insira um numero valido de whatsapp para enviar ex: 5511912345678")

    if(numero === null) return window.open(`https://wa.me//5511912345678?text=${encodeURI(message)}`, "_blank")

    const isPhone = phoneRegex.test(numero)

    if(isPhone){
        alert(`https://wa.me//${numero}?text=${encodeURI(message)}`)
        return window.open(`https://wa.me//${numero}?text=${encodeURI(message)}`, "_blank")
    }else{
        return window.open(`https://wa.me//5511912345678?text=${encodeURI(message)}`, "_blank")
    }
}