async function addItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound !== -1) {
        userCart[indexFound].quantity += item.quantity;
    } else {
        userCart.push(item);
    }
}

async function calculateTotal(userCart, couponCode = "") {
    console.log("\n=== RESUMO DO PEDIDO SHOPEE ===");

    const totalBruto = userCart.reduce((total, item) => total + item.subtotal(), 0);
    
    const coupons = {
        "SHOPEE10": 0.10, 
        "SHOPEE20": 0.20 
    };

    let desconto = 0;
    const cupaoFormatado = couponCode.toUpperCase();

    if (coupons[cupaoFormatado]) {
        desconto = totalBruto * coupons[cupaoFormatado];
    } else if (couponCode !== "") {
        console.log(`❌ Cupão "${couponCode}" não encontrado.`);
    }

    const totalComDesconto = totalBruto - desconto;

    console.log(`Total Bruto:        R$ ${totalBruto.toFixed(2)}`);
    console.log(`Desconto aplicado:  R$ ${desconto.toFixed(2)}`);
    console.log(`------------------------------`);
    console.log(`TOTAL A PAGAR:      R$ ${totalComDesconto.toFixed(2)}`);

    return totalComDesconto;
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name  === name)
    if(index !== -1){
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound === -1) {
        console.log("Erro: Item não encontrado no carrinho.");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
    } else {
        userCart.splice(indexFound, 1);
    }
}

async function applyCoupon(totalValue, couponCode) {
    const coupons = {
        "FRETEFREE": { type: "fixed", value: 5.00, minPrice: 20.00 },
        "SHOPEE10": { type: "percentage", value: 0.10, minPrice: 0.00 }
    };

    const coupon = coupons[couponCode.toUpperCase()];

    if (!coupon) {
        console.log("Cupom inválido.");
        return totalValue;
    }

    if (totalValue < coupon.minPrice) {
        return totalValue;
    }

    let discount = coupon.type === "percentage" ? totalValue * coupon.value : coupon.value;
    const finalTotal = Math.max(0, totalValue - discount);
    
    return finalTotal;
}

async function displayCart(userCart) {
    console.log("Shopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} | ${item.name} | R$ ${item.price} | ${item.quantity}X | Subtotal: R$ ${item.subtotal()}`);
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    applyCoupon
}