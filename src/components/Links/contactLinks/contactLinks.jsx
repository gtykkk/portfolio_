import Image from "next/image"
import Link from "next/link"

const ContactLinks = () => {
    return (
        <>
            <Link href="https://github.com/gtykkk">
                <Image src="/images/github.svg" alt="github" width={35} height={35} />
            </Link>
            <Link href="https://almondine-key-852.notion.site/af0796142db74595a9870d284cda56a8">
                <Image src="/images/notion.svg" alt="github" width={35} height={35} />
            </Link>
            <Link href="">
                <Image src="/images/email.svg" alt="github" width={35} height={35} />
            </Link>
        </>
    )
}

export default ContactLinks