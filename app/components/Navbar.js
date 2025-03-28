"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import logo from "@/public/logo.avif";

const navigation = [
  {
    name: "Our Clinics",
    href: "#",
    items: [
      { name: "About Us", href: "https://bensonderm.com/about" },
      { name: "Our Providers", href: "https://bensonderm.com/providers" },
      { name: "Our Staff", href: "https://bensonderm.com/staff" },
    ],
  },
  {
    name: "Services",
    href: "#",
    items: [
      {
        name: "Spot & Mole Checks",
        href: "https://bensonderm.com/spot-mole-checks",
      },
      {
        name: "Skin Cancer Prevention",
        href: "https://bensonderm.com/skin-cancer-prevention",
      },
      {
        name: "Skin Cancer Treatment",
        href: "https://bensonderm.com/skin-cancer-treatment",
      },
      {
        name: "Skin Diseases",
        href: "https://bensonderm.com/skin-diseases",
      },
      {
        name: "Acne Treatments",
        href: "https://bensonderm.com/acne-treatments",
      },
      { name: "Nail Disorders", href: "https://bensonderm.com/nail-disorders" },
      { name: "Hair Disorders", href: "https://bensonderm.com/hair-disorders" },
      { name: "Mohs Surgery", href: "https://bensonderm.com/mohs-surgery" },
      {
        name: "Dermatological Surgery",
        href: "https://bensonderm.com/dermatological-surgery",
      },
      {
        name: "View All Services",
        href: "https://bensonderm.com/dermatology-services",
      },
    ],
  },
  { name: "Blog", href: "https://bensonderm.com/blog" },
  {
    name: "Patient Center",
    href: "#",
    items: [
      { name: "Patient Center", href: "https://bensonderm.com/patient-center" },
      {
        name: "Notice of Privacy Practice",
        href: "https://bensonderm.com/media/bensonderm.com/2148/Notice%20of%20Privacy%20Practices.pdf",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MobileNavItem({ item }) {
  if (item.items) {
    return (
      <Disclosure as="div" className="relative text-lg text-center">
        <DisclosureButton className="flex w-full items-center justify-center px-4 py-4  font-medium text-gray-700 hover:bg-gray-50 gap-2">
          <div className="relative">
            <span className="capitalize">{item.name}</span>
            <ChevronDownIcon
              className={classNames(
                "absolute -right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 transition-transform duration-200"
              )}
            />
          </div>
        </DisclosureButton>
        <DisclosurePanel transition className="px-4 py-2 text-gray-500">
          {item.items.map((subItem, subIndex) => (
            <Link
              key={subIndex}
              href={subItem.href}
              className="block w-full text-center py-4 hover:text-primary"
            >
              {subItem.name}
            </Link>
          ))}
        </DisclosurePanel>
      </Disclosure>
    );
  }

  return (
    <Link
      href={item.href}
      className="block px-4 py-4 text-lg text-center font-medium text-gray-700 hover:bg-gray-50 hover:text-primary capitalize"
    >
      {item.name}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="text-dark">
      {/* Nav */}
      <nav className="px-gutter">
        <div className="max-w-container-default mx-auto px-4">
          <div className="flex justify-between items-center py-8">
            <Link href="/">
              <Image
                className="w-auto h-12 md:h-14 lg:h-16"
                width={230}
                height={63}
                src={logo}
                alt="Ben Sonderman MD"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-2 items-center">
              {navigation.map((item, index) => {
                if (item.items) {
                  return (
                    <div key={index}>
                      <Disclosure as="div" className="relative">
                        <DisclosureButton className="relative cursor-pointer">
                          <span className="py-1 px-2 capitalize text-lg hover:text-primary transition-colors duration-300 flex items-center gap-2">
                            {item.name}
                            <ChevronDownIcon className="w-3 h-3" />
                          </span>
                        </DisclosureButton>
                        <DisclosurePanel className="absolute z-40 w-screen max-w-xs transform lg:left-1/2 lg:-translate-x-1/2 mt-3 -ml-4 lg:ml-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-gray-200 ring-opacity-5 overflow-hidden">
                            <div className="relative p-3 bg-white grid gap-4">
                              <div className="grid text-center">
                                {item.items.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="font-regular text-xl hover:bg-gray-50 hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="py-1 px-2 capitalize text-lg hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="https://bensonderm.com/contact-us"
                className="button is-outline"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Disclosure
                as="div"
                className="relative"
                onChange={setIsMenuOpen}
              >
                {({ open }) => (
                  <>
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>

                    <DisclosurePanel className="fixed inset-0 top-[68px] z-50 bg-white">
                      <div className="flex flex-col h-full px-gutter">
                        {/* Header with close button */}
                        <div className="flex items-center justify-between px-4 py-8">
                          <Link href="/" className="text-2xl font-bold">
                            Ben Sonderman MD
                          </Link>
                          <DisclosureButton className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </DisclosureButton>
                        </div>

                        {/* Menu content */}
                        <div className="flex-1 overflow-y-auto">
                          {navigation.map((item, index) => (
                            <MobileNavItem key={index} item={item} />
                          ))}

                          <div className="p-4 mb-10">
                            <Link
                              href="/contact"
                              className="block w-full text-center button is-outline"
                            >
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
