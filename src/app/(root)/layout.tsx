import { ReactNode } from "react";


export default function HomeRootLayout({
    children
}: {
    children: ReactNode
}) {

    return (
        <section className="h-screen max-w-[1280px] w-full mx-auto border-l-1 border-r-1 shadow-2xl">
         {children}
        </section>
    )
}