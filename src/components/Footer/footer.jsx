import Image from "next/image"
import Link from "next/link"
import ContactLinks from "../Links/contactLinks/contactLinks"

const Footer = () => {
  return (
    <div className="flex gap-8 bg-gray-800 p-6">
        <ContactLinks />
    </div>
  )
}

export default Footer