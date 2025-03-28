import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const navigation = [
  {
    name: "Our Clinics",
    href: "#",
    items: [
      { name: "About Us", href: "/about" },
      { name: "Our Providers", href: "/providers" },
      { name: "Our Staff", href: "/staff" },
    ],
  },
  {
    name: "Services",
    href: "#",
    items: [
      { name: "Spot & Mole Checks", href: "/spot-mole-checks" },
      { name: "Skin Cancer Prevention", href: "/skin-cancer-prevention" },
      { name: "Skin Cancer Treatment", href: "/skin-cancer-treatment" },
      { name: "Skin Diseases", href: "/skin-diseases" },
      { name: "Acne Treatments", href: "/acne-treatments" },
      { name: "Nail Disorders", href: "/nail-disorders" },
      { name: "Hair Disorders", href: "/hair-disorders" },
      { name: "Mohs Surgery", href: "/mohs-surgery" },
      { name: "Dermatological Surgery", href: "/dermatological-surgery" },
      { name: "View All Services", href: "/dermatology-services" },
    ],
  },
  { name: "Blog", href: "/blog" },
  {
    name: "Patient Center",
    href: "#",
    items: [
      { name: "Patient Center", href: "/patient-center" },
      {
        name: "Notice of Privacy Practice",
        href: "https://bensonderm.com/media/bensonderm.com/2148/Notice%20of%20Privacy%20Practices.pdf",
      },
    ],
  },
];

export default function Navbar() {
  return (
    <div>
      {/* Banner */}
      <div className="flex justify-center items-center gap-4 py-4">
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

      {/* Nav */}
      <nav className="bg-white px-gutter">
        <div className="max-w-container-default mx-auto px-4">
          <div className="flex justify-between items-center py-8">
            <Link href="/" className="text-2xl font-bold">
              Ben Sonderman MD
            </Link>

            <div className="flex gap-4 items-center">
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

              <Link href="/contact" className="button is-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
