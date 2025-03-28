import VideoPlayer from "./components/VideoPlayer";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";

import servicesImage from "@/public/services.avif";

import badge1 from "@/public/badge-1.avif";
import badge2 from "@/public/badge-2.avif";
import badge3 from "@/public/badge-3.avif";
import badge4 from "@/public/badge-4.avif";
import badge5 from "@/public/badge-5.avif";
import badge6 from "@/public/badge-6.avif";
import badge7 from "@/public/badge-7.avif";
import badge8 from "@/public/badge-8.avif";
import badge9 from "@/public/badge-9.avif";

import testimonialImage from "@/public/testimonial.avif";

import aboutImage from "@/public/about.avif";
import aboutBadge from "@/public/about-badge.avif";

import drNickFrank from "@/public/dr-nick-frank.avif";
import drAprilSanchez from "@/public/dr-april-sanchez.avif";
import drFalonBrown from "@/public/dr-falon-brown.avif";
import drJessicaWilson from "@/public/dr-jessica-wilson.avif";

import map from "@/public/map.avif";

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
    <main className="min-h-screen">
      {/* Banner */}
      <div className="flex justify-center items-center gap-x-1 lg:gap-4 gap-y-0 py-4 flex-wrap bg-light">
        <Link
          className="py-1 px-2 text-lg font-bold uppercase hover:text-[#68564b] transition-colors duration-300"
          href="https://bensonderm.com/"
        >
          Benson derm
        </Link>
        <Link
          className="py-1 px-2 text-lg font-bold uppercase hover:text-[#68564b] transition-colors duration-300"
          href="https://qnaspa.com/"
        >
          QnA Cosmetic Surgery & Medical Spa
        </Link>
        <Link
          className="py-1 px-2 text-lg font-bold uppercase text-primary hover:text-[#68564b] transition-colors duration-300"
          href="https://qnaspa.com/specials"
        >
          QnA Specials
        </Link>
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 w-full -z-1 h-full md:h-3/4 bg-gradient-to-t from-[#fff2e5] to-white"></div>

        <Navbar />

        <section className="px-gutter py-section-default bg-gradient-to-b">
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
                <Link
                  className="button"
                  href="https://bensonderm.com/providers"
                >
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
      </div>

      <section className="px-gutter py-section-default bg-white">
        <div className="max-w-container-default mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="relative w-full overflow-hidden f_ccBNl fc_22d94 ">
              <div
                className="aspect-w-1 aspect-h-1 overflow-hidden origin-center transform rotate-[30deg]"
                style={{ clipPath: "ellipse(34% 49% at 50% 50%)" }}
              >
                <picture>
                  <Image
                    src={servicesImage}
                    className="object-cover w-full h-full origin-center transform -rotate-[30deg]"
                    alt=""
                    unoptimized
                  />
                </picture>
              </div>
              <svg
                className="absolute top-0 left-0 w-24 h-24 sm:w-48 sm:h-48 lg:w-72 lg:h-72"
                viewBox="0 0 156 206"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8189 5.58147C36.3133 -2.78691 55.7331 0.477231 75.4405 12.5903C95.1421 24.6999 115.096 45.6349 130.623 72.5287C146.15 99.4225 154.303 127.17 154.94 150.287C155.576 173.411 148.693 191.861 134.199 200.229C119.704 208.598 100.285 205.333 80.5772 193.22C60.8756 181.111 40.9221 160.176 25.395 133.282C9.8678 106.388 1.71435 78.6404 1.07795 55.5236C0.441368 32.3999 7.32442 13.9498 21.8189 5.58147Z"
                  stroke="#FF6B00"
                  strokeWidth="0.3"
                ></path>
              </svg>
            </div>
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
            <div className="flex flex-wrap gap-2 justify-center">
              <Image src={badge1} className="h-24 object-contain" alt="" />
              <Image src={badge2} className="h-24 object-contain" alt="" />
              <Image src={badge3} className="h-24 object-contain" alt="" />
              <Image src={badge4} className="h-24 object-contain" alt="" />
              <Image src={badge5} className="h-24 object-contain" alt="" />
              <Image src={badge6} className="h-24 object-contain" alt="" />
              <Image src={badge7} className="h-24 object-contain" alt="" />
              <Image src={badge8} className="h-24 object-contain" alt="" />
              <Image src={badge9} className="h-24 object-contain" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default bg-light">
        <div className="max-w-container-default mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
            <Image
              src={testimonialImage}
              className="w-full rounded-2xl object-cover aspect-3/4 lg:-mb-22"
              unoptimized
              alt=""
            />
            <div className="md:mt-16">
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

      <section className="px-gutter py-section-default bg-gradient-to-b from-[#EDDAC7]/60 to-[#EDDAC7]">
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

            <div className="relative w-full overflow-hidden f_ccBNj fc_22d94 ">
              <div
                className="aspect-square overflow-hidden origin-center transform rotate-[30deg]"
                style={{ clipPath: "ellipse(34% 49% at 50% 50%)" }}
              >
                <Image
                  src={aboutImage}
                  className="object-cover w-full h-full origin-center transform -rotate-[30deg]"
                  alt=""
                  unoptimized
                />
              </div>

              <Image
                src={aboutBadge}
                className="absolute top-0 left-0 aspect-square mix-blend-multiply w-full object-cover max-w-[33%]"
                alt=""
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default bg-white">
        <div className="max-w-container-default mx-auto">
          <div className="flex flex-col items-center text-center justify-center gap-8">
            <h2 className="text-h2 max-w-prose">Dermatologists & Providers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-20 w-full">
              <div className="border-t border-primary py-4 flex gap-7">
                <Image
                  alt=""
                  src={drNickFrank}
                  className="aspect-5/6 object-cover rounded-lg"
                />
                <h3 className="text-h3 font-bold mt-1">Dr. Nick Frank</h3>
              </div>
              <div className="border-t border-primary py-4 flex gap-7">
                <Image
                  alt=""
                  src={drAprilSanchez}
                  className="aspect-5/6 object-cover rounded-lg"
                />
                <h3 className="text-h3 font-bold mt-1">Dr. April Sanchez</h3>
              </div>
              <div className="border-t border-primary py-4 flex gap-7">
                <Image
                  alt=""
                  src={drFalonBrown}
                  className="aspect-5/6 object-cover rounded-lg"
                />
                <h3 className="text-h3 font-bold mt-1">Dr. Falon Brown</h3>
              </div>
              <div className="border-t border-primary py-4 flex gap-7">
                <Image
                  alt=""
                  src={drJessicaWilson}
                  className="aspect-5/6 object-cover rounded-lg"
                />
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

      <section className="flex flex-col lg:flex-row bg-light">
        <div className="flex-1 px-gutter lg:pr-0 py-section-default">
          <div className="mx-auto w-full max-w-section-default lg:ml-auto lg:mr-0 lg:max-w-lg pr-16">
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
        <Image
          src={map}
          className="flex-1 w-full max-h-64 lg:w-1/2 lg:h-full object-cover"
          alt=""
          unoptimized
        />
      </section>

      <Footer />
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
