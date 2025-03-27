import VideoPlayer from "./components/VideoPlayer";
import Services from "./components/Services";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f5f0]">
      <section className="px-gutter py-section-default">
        <div className="max-w-container-default mx-auto">
          <div className="flex flex-col items-center text-center justify-center gap-8">
            <h1 className="text-4xl font-bold max-w-prose">
              State-of-the-Art Skin Care & Southern Hospitality
            </h1>

            <p className="text-lg font-sans max-w-prose">
              Benson Dermatology endeavors to provide an environment of caring
              and warm southern hospitality coupled with the same level of
              expertise and technology available in major centers such as New
              York, Houston, and Los Angeles.
            </p>

            <div className="flex gap-4">
              <Link className="button" href="https://bensonderm.com/providers">
                meet our providers
              </Link>
              <Link
                className="button is-outline"
                href="https://bensonderm.com/appointments"
              >
                get an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default">
        <div className="max-w-container-default mx-auto">
          <div className="flex flex-col items-center text-center justify-center gap-8">
            <VideoPlayer />
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default">
        <div className="max-w-container-default mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-500 aspect-square"></div>
            <div>
              <h2 className="text-2xl font-bold">Our Dermatology Services</h2>
              <Services />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Data
const services = [
  "Spot/Mole Checks",
  "Skin Cancer Prevention",
  "Skin Cancer Screening",
  "Skin Cancer Treatment",
  "Skin Disorders",
  "Acne Treatments",
  "Nail Disorders",
  "Hair Disorders",
  "Mohs Surgery",
  "Dermatological Surgery",
];

const providers = [
  { name: "Dr. Nick Frank" },
  { name: "Dr. April Sanchez" },
  { name: "Dr. Ethan Brown" },
  { name: "Dr. Jessica Wilson" },
];

const locations = [
  {
    name: "Fayetteville",
    address: "123 Main Street, Suite A",
    city: "Fayetteville, AL 12345",
    phone: "(123) 456-7890",
  },
  {
    name: "Carrollton",
    address: "456 Oak Avenue, Suite B",
    city: "Carrollton, AL 12345",
    phone: "(123) 456-7890",
  },
  {
    name: "Selma",
    address: "789 Pine Road, Suite C",
    city: "Selma, AL 12345",
    phone: "(123) 456-7890",
  },
  {
    name: "Auburn",
    address: "101 Maple Lane, Suite D",
    city: "Auburn, AL 12345",
    phone: "(123) 456-7890",
  },
];

const footerLinks = [
  {
    title: "ABOUT BETSON",
    links: [
      "About Betson Dermatology",
      "Dermatology Professionals",
      "Dermatology Services",
      "Dermatology Locations",
      "Make an Appointment",
    ],
  },
  {
    title: "OUR SERVICES",
    links: [
      "Skin Cancer Screening",
      "Skin Cancer Prevention",
      "Skin Cancer Treatment",
      "Acne Treatment",
      "Mohs Surgery",
      "Cosmetic Dermatology",
    ],
  },
  {
    title: "OUR PRACTICE",
    links: [
      "Our Story",
      "Our Team",
      "Blog",
      "Careers",
      "Patient Resources",
      "Insurance",
    ],
  },
  {
    title: "CONTACT US",
    links: ["Call: (123) 456-7890", "Email Us", "Locations", "Facebook"],
  },
];
