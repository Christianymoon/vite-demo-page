import { ContactForm } from "../components/ContactForm";


export function Contact() {

    return (
        <div className="contact bg-black text-white flex flex-col justify-center items-center h-screen">
            <h1 className="font-sans text-4xl font-bold mb-4">Contactanos</h1>
            <ContactForm />
        </div>
    )
}