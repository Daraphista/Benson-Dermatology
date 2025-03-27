import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f5f0]">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Betson Dermatology Logo"
            width={120}
            height={40}
            className="mr-6"
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-xs uppercase">
          <a href="#" className="text-orange-500">
            Our Practice
          </a>
          <a href="#" className="text-gray-700">
            Brown Creek
          </a>
          <a href="#" className="text-gray-700">
            Our Offices
          </a>
          <a href="#" className="text-gray-700">
            Services
          </a>
          <a href="#" className="text-gray-700">
            Blog
          </a>
          <a href="#" className="text-gray-700">
            Patient Center
          </a>
          <a href="#" className="text-gray-700">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-serif mb-2">
          State-of-the-Art Skin Care
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif mb-8">
          &amp; Southern Hospitality
        </h2>

        <p className="mb-8">
          Benson Dermatology endeavors to provide an environment of caring and
          warm southern hospitality coupled with the same level of expertise and
          technology available in major centers such as New York, Houston, and
          Los Angeles.
        </p>

        <div className="relative aspect-video bg-gray-200 mb-8 rounded overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
              WATCH OUR STORY
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <h3 className="text-center text-gray-700 uppercase text-sm font-medium mb-6">
          Our Dermatology Services
        </h3>

        <div className="max-w-md mx-auto">
          {services.map((service, index) => (
            <Disclosure key={index} as="div" className="mb-2">
              <>
                <DisclosureButton className="flex group w-full justify-between rounded-lg bg-white px-4 py-3 text-left text-sm font-medium focus:outline-none focus-visible:ring">
                  <span>{service}</span>
                  <ChevronUpIcon className="group-data-[open]:rotate-180 transform h-5 w-5 text-orange-500" />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pt-2 pb-4 text-sm text-gray-500">
                  Service details would go here.
                </DisclosurePanel>
              </>
            </Disclosure>
          ))}

          <div className="text-center mt-6">
            <button className="text-orange-500 text-xs uppercase font-medium">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-center text-gray-700 uppercase text-sm font-medium mb-6">
          Awards and Recognition
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5, 6].map((award) => (
            <div
              key={award}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
            >
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt={`Award ${award}`}
                width={40}
                height={40}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="bg-[#f2e8de] rounded-lg p-6 md:p-8 relative">
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-2 py-1">
            TESTIMONIALS
          </div>
          <div className="md:flex gap-8 mt-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Patient Testimonial"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 italic mb-4 text-lg">
                "For the first time in the 31 years of my life, I can honestly
                say I feel confident enough to leave the house without makeup."
              </p>
              <p className="text-gray-600 font-medium">- SAMANTHA K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Certification Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="md:flex gap-8 items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h4 className="text-gray-500 uppercase text-xs mb-2">
              The Reassurance of Working With
            </h4>
            <h3 className="text-2xl font-serif mb-4">Board Certification</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Board certification is a voluntary process that goes beyond
              medical licensure to demonstrate a physician's exceptional
              expertise in a particular specialty. Our board-certified
              dermatologists have completed rigorous training and passed
              challenging exams to earn this prestigious credential.
            </p>
            <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 text-sm rounded">
              Learn More
            </button>
          </div>
          <div className="md:w-1/3">
            <div className="relative">
              <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Board Certified Doctors"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
              <div className="absolute top-0 right-0">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Certification Badge"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-serif mb-8 text-center">
          Dermatologists &amp; Providers
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {providers.map((provider, index) => (
            <div key={index} className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={provider.name}
                width={200}
                height={200}
                className="rounded-lg mb-3 mx-auto"
              />
              <h4 className="font-medium text-sm">{provider.name}</h4>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 text-sm rounded">
            Read Bios
          </button>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-serif mb-8">Our Locations</h3>
        <div className="md:flex gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="grid grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-bold text-sm mb-2">{location.name}</h4>
                  <p className="text-sm text-gray-700 mb-1">
                    {location.address}
                  </p>
                  <p className="text-sm text-gray-700 mb-3">{location.city}</p>
                  <p className="text-sm text-gray-700 mb-3">{location.phone}</p>
                  <a href="#" className="text-orange-500 text-sm">
                    Directions
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
            <p className="text-gray-500">Map would go here</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Betson Dermatology Logo"
                width={120}
                height={40}
                className="mb-6"
              />
              <div className="flex gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Badge 1"
                  width={40}
                  height={40}
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Badge 2"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerLinks.map((column, colIndex) => (
                <div key={colIndex}>
                  <h5 className="text-gray-700 font-medium mb-4 text-sm">
                    {column.title}
                  </h5>
                  <ul className="space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-gray-600 text-xs hover:text-orange-500"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
            <p>
              ©2023 Betson Dermatology. All rights reserved. Content and images
              are property of Betson Dermatology.
            </p>
          </div>
        </div>
      </footer>
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
