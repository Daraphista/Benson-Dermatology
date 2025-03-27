"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  {
    title: "Spot/Mole Checks",
    description:
      "Regular mole checks are crucial for early detection of skin cancer. Our dermatologists perform thorough examinations using advanced technology to identify any suspicious growths.",
    link: "/spot-mole-checks",
  },
  {
    title: "Skin Cancer Prevention",
    description:
      "Learn about effective strategies to protect your skin from harmful UV rays, including proper sunscreen use, protective clothing, and lifestyle modifications.",
    link: "/skin-cancer-prevention",
  },
  {
    title: "Skin Cancer Screening",
    description:
      "Comprehensive skin cancer screenings using state-of-the-art equipment and techniques to detect early signs of skin cancer.",
    link: "/skin-cancer-screening",
  },
  {
    title: "Skin Cancer Treatment",
    description:
      "Advanced treatment options for various types of skin cancer, including surgical and non-surgical approaches tailored to your specific condition.",
    link: "/skin-cancer-treatment",
  },
  {
    title: "Skin Disorders",
    description:
      "Diagnosis and treatment of various skin conditions including eczema, psoriasis, rashes, and other dermatological concerns.",
    link: "/skin-disorders",
  },
  {
    title: "Acne Treatments",
    description:
      "Personalized acne treatment plans using the latest medications and techniques to help you achieve clear, healthy skin.",
    link: "/acne-treatments",
  },
  {
    title: "Nail Disorders",
    description:
      "Treatment for fungal infections, ingrown nails, and other nail-related conditions affecting both fingernails and toenails.",
    link: "/nail-disorders",
  },
  {
    title: "Hair Disorders",
    description:
      "Comprehensive care for hair loss, scalp conditions, and other hair-related issues affecting both men and women.",
    link: "/hair-disorders",
  },
  {
    title: "Mohs Surgery",
    description:
      "Advanced surgical technique for treating skin cancer with the highest cure rate while preserving healthy tissue.",
    link: "/mohs-surgery",
  },
  {
    title: "Dermatological Surgery",
    description:
      "Expert surgical procedures for removing skin growths, cysts, and other dermatological conditions with minimal scarring.",
    link: "/dermatological-surgery",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Our Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <Disclosure key={service.title}>
            {({ open }) => (
              <div className="bg-white rounded-lg shadow">
                <DisclosureButton className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-lg font-medium hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-brand-1 focus-visible:ring-opacity-75">
                  <span>{service.title}</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "rotate-180 transform" : "",
                      "h-5 w-5 text-brand-1 transition-transform duration-200"
                    )}
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pb-4">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-brand-1 hover:text-brand-2 font-medium"
                  >
                    Learn more about {service.title.toLowerCase()}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
