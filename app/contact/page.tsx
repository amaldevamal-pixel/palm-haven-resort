import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import ContactLocation from "@/components/Contact/ContactLocation";

export default function Contact() {
  return (
    <main>
      <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactLocation />
    </main>
  );
}