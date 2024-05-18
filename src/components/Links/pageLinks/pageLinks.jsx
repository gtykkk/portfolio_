import Link from "next/link"

const PageLinks = () => {
    return (
        <>
            <Link href="/" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/projects" >Projects</Link>
            <Link href="/contact" >Contact</Link>
        </>
    )
}

export default PageLinks