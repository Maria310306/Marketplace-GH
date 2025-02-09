"use client";
import { ReactNode } from "react";
import {CartProvider as USCPProvider} from "use-shopping-cart";
export default function CartProvider({children}:{children: ReactNode}){
    return(
        <USCPProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl="https://marketplace-gh-31.vercel.app/stripe/success"
        cancelUrl="https://marketplace-gh-31.vercel.app/stripe/error"
        currency="USD"
        billingAddressCollection={false}
        shouldPersist={true}
        language="en-US">
        {children}
        </USCPProvider>
    )
}