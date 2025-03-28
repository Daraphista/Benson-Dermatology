import VideoPlayer from "./components/VideoPlayer";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f5f0]">
      <Navbar />

      <section className="px-gutter py-section-default bg-gradient-to-b from-white to-[#f9f5f0]">
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

      <section className="px-gutter py-section-default bg-white">
        <div className="max-w-container-default mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="bg-gray-500 aspect-square"></div>
            <div>
              <h2 className="text-h2 font-bold mb-6">
                Our Dermatology Services
              </h2>
              <div className="">
                {services.map((service, index) => (
                  <Disclosure
                    key={index}
                    as="div"
                    className="mb-2 group border-b border-primary"
                  >
                    <>
                      <DisclosureButton className="group flex group w-full justify-between py-4 text-left text-h5 font-medium focus:outline-none focus-visible:ring">
                        <span>{service.service}</span>
                        <PlusIcon className="group-data-[open]:rotate-45 transition-transform duration-300 transform h-6 w-6 text-dark" />
                      </DisclosureButton>
                      <DisclosurePanel className="pt-0 pb-6">
                        {service.description}
                      </DisclosurePanel>
                    </>
                  </Disclosure>
                ))}
              </div>
              <Link
                className="button is-outline mt-10"
                href="https://bensonderm.com/services"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default bg-white">
        <div className="max-w-container-default mx-auto">
          <div className="flex flex-col items-center text-center justify-center gap-8">
            <h2 className="text-h2 font-bold mb-6">We love our community!</h2>
            <div className="flex gap-4">
              <div className="bg-gray-500 h-10 w-10 "></div>
              <div className="bg-gray-500 h-10 w-10 "></div>
              <div className="bg-gray-500 h-10 w-10 "></div>
              <div className="bg-gray-500 h-10 w-10 "></div>
              <div className="bg-gray-500 h-10 w-10 "></div>
              <div className="bg-gray-500 h-10 w-10 "></div>
              <div className="bg-gray-500 h-10 w-10 "></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default">
        <div className="max-w-container-default mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="bg-gray-500 aspect-square"></div>
            <div>
              <h2 className="text-h2 font-bold mb-16">Testimonials</h2>

              <p className="text-4xl italic max-w-prose mb-8">
                For the first time in the 31 years of my life, I can honestly
                say I feel confident enough to leave the house without makeup!
              </p>

              <span className="text-h5">- Clarence A.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default bg-[#eddac7]">
        <div className="max-w-container-default mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <p className="text-h5 font-bold mb-4">
                The Big Leagues of Medicine
              </p>
              <h2 className="text-h2 font-bold mb-8">Board Certification</h2>

              <p className="text-lg font-sans max-w-prose">
                When looking for a medical provider, is there a reliable
                indicator to decipher a true expert in a given field from one
                who simply calls oneself a specialist? The answer is called
                “board certification.” Contained within these two words are
                three to eight years of intense, full-time academic and clinical
                training beyond four years M.D. or D.O. degree followed by
                days-long testing by an accredited national specialist board.
              </p>

              <Link
                className="button is-dark-outline mt-10"
                href="https://bensonderm.com/about"
              >
                Read more about us
              </Link>
            </div>

            <div className="bg-gray-500 aspect-square"></div>
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default bg-white">
        <div className="max-w-container-default mx-auto">
          <div className="flex flex-col items-center text-center justify-center gap-8">
            <h2 className="text-h2 max-w-prose">Dermatologists & Providers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
              <div className="border-t border-primary py-4 flex gap-7">
                <div className="bg-gray-500 aspect-square w-30 rounded-lg"></div>
                <h3 className="text-h3 font-bold mt-1">Dr. Nick Frank</h3>
              </div>
              <div className="border-t border-primary py-4 flex gap-7">
                <div className="bg-gray-500 aspect-square w-30 rounded-lg"></div>
                <h3 className="text-h3 font-bold mt-1">Dr. April Sanchez</h3>
              </div>
              <div className="border-t border-primary py-4 flex gap-7">
                <div className="bg-gray-500 aspect-square w-30 rounded-lg"></div>
                <h3 className="text-h3 font-bold mt-1">Dr. Falon Brown</h3>
              </div>
              <div className="border-t border-primary py-4 flex gap-7">
                <div className="bg-gray-500 aspect-square w-30 rounded-lg"></div>
                <h3 className="text-h3 font-bold mt-1">Dr. Jessica Wilson</h3>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                className="button is-outline"
                href="https://bensonderm.com/providers"
              >
                read bios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row">
        <div className="w-full pl-gutter py-section-default">
          <div className="ml-auto max-w-lg pr-16">
            <h2 className="text-h2 font-bold mb-8">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {locations.map((location, index) => (
                <div key={index}>
                  <h3 className="text-h6 font-bold mb-4">{location.name}</h3>
                  <p className="font-sans">
                    {location.address} {location.city}
                  </p>
                  <Link
                    href={`tel:${location.phone}`}
                    className="text-lg font-semibold font-sans mb-8 block hover:text-primary transition-colors duration-300"
                  >
                    {location.phone}
                  </Link>

                  <div>
                    <Link
                      className="uppercase text-primary hover:text-dark transition-colors duration-300 font-bold"
                      href={`https://bensonderm.com/contact-us#email`}
                    >
                      contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-300 aspect-square flex items-center justify-center">
          Map Here
        </div>
      </section>
    </main>
  );
}

// Data
const services = [
  {
    service: "Spot (Mole) Checks",
    description:
      "Regular mole checks are crucial for early detection of skin cancer. Our dermatologists perform thorough examinations using advanced technology to identify any suspicious growths.",
  },
  {
    service: "Skin Cancer Prevention",
    description:
      "Learn about effective strategies to protect your skin from harmful UV rays, including proper sunscreen use, protective clothing, and lifestyle modifications.",
  },
  {
    service: "Skin Cancer Screening",
    description:
      "Comprehensive skin cancer screenings using state-of-the-art equipment and techniques to detect early signs of skin cancer.",
  },
  {
    service: "Skin Cancer Treatment",
    description:
      "Comprehensive skin cancer screenings using state-of-the-art equipment and techniques to detect early signs of skin cancer.",
  },
  {
    service: "Nail Disorders",
    description:
      "Comprehensive skin cancer screenings using state-of-the-art equipment and techniques to detect early signs of skin cancer.",
  },
  {
    service: "Hair Disorders",
    description:
      "Comprehensive skin cancer screenings using state-of-the-art equipment and techniques to detect early signs of skin cancer.",
  },
  {
    service: "Mohs Surgery",
    description:
      "Comprehensive skin cancer screenings using state-of-the-art equipment and techniques to detect early signs of skin cancer.",
  },
];

const providers = [
  { name: "Dr. Nick Frank" },
  { name: "Dr. April Sanchez" },
  { name: "Dr. Ethan Brown" },
  { name: "Dr. Jessica Wilson" },
];

const locations = [
  {
    name: "Ponchatoula Dermatology Clinic",
    address: "180 N. 5th St.",
    city: "Ponchatoula, LA 70454",
    phone: "(985) 370-7546",
  },
  {
    name: "Covington Dermatology Clinic",
    address: "190 Greenbriar Blvd. #103",
    city: "Covington, LA 70433",
    phone: "(985) 898 7999",
  },
  {
    name: "Amite Dermatology Clinic",
    address: "309 West Walnut St., Suite A",
    city: "Amite, LA 70422",
    phone: "(985) 370-7546",
  },
  {
    name: "Walker Dermatology Clinic",
    address: "29799 South Walker Rd.",
    city: "Walker, LA 70785",
    phone: "(225) 998-0500",
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
