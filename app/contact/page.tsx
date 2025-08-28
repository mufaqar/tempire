import Contact from "@/components/homepage/contact";
import PageBanner from "@/components/pageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Tempire",
    description:
        "Get in touch with Tempire for equipment financing solutions. Contact us today to explore flexible financing options for your business.",
};

export default function Contact_Us() {
    return (
        <>
            <PageBanner title="Contact Us" />
            <Contact />
        </>
    );
}
