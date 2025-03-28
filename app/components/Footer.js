import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.avif";
import qnaCosmeticSurgeryLogo from "@/public/qna-cosmetic-surgery-logo.avif";
import qnaMedicalSpaLogo from "@/public/qna-medical-spa-logo.avif";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="">
      <div className="px-gutter py-section-default">
        <div className="max-w-container-default mx-auto flex justify-between">
          <Link href="/">
            <Image src={logo} width={263} height={72} alt="Benson Derm" />
          </Link>
          <Link href="/">
            <Image
              src={qnaCosmeticSurgeryLogo}
              width={183}
              height={72}
              alt="QNA Cosmetic Surgery"
            />
          </Link>
          <Link href="/">
            <Image
              src={qnaMedicalSpaLogo}
              width={183}
              height={72}
              alt="QNA Medical Spa"
            />
          </Link>
        </div>
      </div>

      <div className="px-gutter">
        <div className="w-full h-[1px] bg-gray-200 max-w-container-default mx-auto"></div>
      </div>

      <div className="px-gutter py-section-default">
        <div className="max-w-container-default mx-auto">
          <div className="w-full items-start max-w-full grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-10 lg:gap-16">
            <div className="flex flex-col gap-8">
              <span className="font-bold text-lg uppercase">Areas Served</span>
              <div className="flex flex-col gap-4">
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/ponchatoula-dermatologist"
                >
                  Ponchatoula Dermatologist
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/hammond-dermatologist"
                >
                  Hammond Dermatologist
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/covington-dermatologist"
                >
                  Covington Dermatologist
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/new-orleans-dermatologist"
                >
                  New Orleans Dermatologist
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/baton-rouge-dermatologist"
                >
                  Baton Rouge Dermatologist
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/amite-dermatologist"
                >
                  Amite Dermatologist
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/walker-dermatologist"
                >
                  Walker Dermatologist
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <span className="font-bold text-lg uppercase">Our Services</span>
              <div className="flex flex-col gap-4">
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/spot-mole-checks"
                >
                  Spot & Mole Checks
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/hammond-dermatologist"
                >
                  Skin Cancer Prevention
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/covington-dermatologist"
                >
                  Skin Cancer Treatment
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/new-orleans-dermatologist"
                >
                  Skin Diseases
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/acne-treatments"
                >
                  Acne Treatments
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/nail-disorders"
                >
                  Nail Disorders
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/hair-disorders"
                >
                  Hair Disorders
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/mohs-surgery"
                >
                  Mohs Surgery
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/dermatological-surgery"
                >
                  Dermatological Surgery
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <span className="font-bold text-lg uppercase">Our Practice</span>
              <div className="flex flex-col gap-4">
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/patient-center"
                >
                  Patient Center
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/about"
                >
                  About Us
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/media/bensonderm.com/2148/Notice%20of%20Privacy%20Practices.pdf"
                >
                  Notice of Privacy Practice
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/providers"
                >
                  Our Providers
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/blog"
                >
                  Blog
                </Link>
                <Link
                  className="capitalize hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/contact-us"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <span className="font-bold text-lg uppercase">Contact Us</span>
              <div className="flex flex-col gap-4">
                <Link
                  className="capitalize flex gap-2 items-center hover:text-primary transition-colors duration-300"
                  href="https://bensonderm.com/patient-center"
                >
                  <PhoneIcon className="w-4 h-4 text-primary" />
                  (985) 370-7546
                </Link>

                <p className="mt-8">
                  ©2024 Integrated Dermatology of Ponchatoula
                </p>

                <Link href="https://eversite.com/">
                  <svg
                    className="w-auto h-10 text-[#21CD9C] hover:text-[#1EA18E] transition duration-200 ease-in-out"
                    viewBox="0 0 184 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7744 32.2112C28.7118 31.0267 30.115 29.1934 30.749 27.0075C31.4257 24.6736 31.1479 22.2268 29.9655 20.1044C29.2104 18.7506 28.1064 17.6083 26.7672 16.7904C30.8986 14.2661 32.3374 8.92838 29.9655 4.67655C27.5152 0.304842 21.9307 -1.28872 17.5002 1.12982C15.8548 2.03237 14.5442 3.38619 13.7179 5.05026C13.5043 5.48743 13.4686 5.97396 13.6253 6.43228C13.782 6.8906 14.1097 7.26432 14.5513 7.47585C15.4559 7.92007 16.56 7.54636 17.0016 6.65087C17.5002 5.64961 18.2838 4.83872 19.2739 4.29579C20.556 3.59067 22.0447 3.4285 23.4622 3.83041C24.8797 4.23233 26.0478 5.15602 26.7601 6.42523C27.4724 7.69443 27.6363 9.16812 27.2302 10.5713C26.8242 11.9745 25.8911 13.1309 24.609 13.836C21.9806 15.2744 18.7396 14.3225 17.0729 11.6149C14.6297 7.8002 8.9028 6.41113 4.81421 8.64634C2.63458 9.83798 1.0604 11.7982 0.369467 14.1674C-0.321463 16.5366 -0.0365432 19.0256 1.16724 21.1833C1.93652 22.5653 3.05483 23.7217 4.4082 24.5467C2.54198 25.7454 1.18149 27.5504 0.561788 29.6799C-0.122019 32.0279 0.162901 34.5029 1.35244 36.6394C2.5491 38.7759 4.51504 40.3271 6.887 41.004C9.23046 41.6739 11.7805 41.3848 13.9174 40.2213C15.2636 39.481 16.4104 38.4162 17.2367 37.14L17.2723 37.0836C17.7495 36.2798 18.4476 35.6099 19.281 35.1516C20.5631 34.4465 22.0518 34.2843 23.4693 34.6862C24.8868 35.0881 26.055 36.0118 26.7672 37.281C27.4795 38.5502 27.6434 40.0239 27.2374 41.4271C26.8314 42.8303 25.8982 43.9866 24.6161 44.6918C23.3268 45.3969 21.8453 45.559 20.4278 45.1571C19.0103 44.7552 17.8421 43.8315 17.1298 42.5623C16.6384 41.688 15.5272 41.3707 14.6368 41.8502C13.7536 42.3367 13.433 43.4437 13.9174 44.3181C15.5343 47.209 18.6114 49 21.9592 49C23.4978 49 25.0292 48.6051 26.3826 47.8648C28.5195 46.6943 30.0723 44.7623 30.7561 42.4283C31.4328 40.0944 31.155 37.6477 29.9726 35.5253C29.2104 34.1644 28.1135 33.0221 26.7815 32.2112H26.7744ZM14.3733 35.3208L14.1453 35.1868C13.6467 35.9554 12.9558 36.5971 12.1438 37.0413C10.8403 37.7534 9.33731 37.9227 7.90558 37.5137C6.47387 37.1047 5.28433 36.174 4.5649 34.8836C3.84548 33.5933 3.67453 32.0984 4.08766 30.6811C4.5008 29.2639 5.44815 28.0863 6.75166 27.3742C7.61354 26.9017 8.54665 26.6761 9.46552 26.6761C11.2249 26.6761 12.9273 27.5011 13.9957 29.003C14.7508 30.3074 15.8263 31.4074 17.1227 32.2042C15.9118 32.9516 14.8932 33.974 14.1596 35.1868L14.3804 35.3208H14.3733ZM13.9601 13.5328C14.7721 14.8513 15.8691 15.9584 17.1583 16.7551C15.9403 17.4955 14.9146 18.4968 14.0314 19.8224C13.5256 20.5698 12.8632 21.1762 12.0654 21.6134C10.7405 22.3326 9.21621 22.5089 7.76312 22.0929C6.31004 21.6768 5.11337 20.732 4.37971 19.4205C3.64604 18.116 3.47509 16.6 3.89534 15.1616C4.3156 13.7232 5.27008 12.5386 6.59496 11.8123C7.39273 11.3751 8.31159 11.1706 9.23046 11.1706C11.1109 11.1706 13.0056 12.0309 13.9672 13.5257L13.9601 13.5328ZM14.3804 24.462C15.4559 23.7781 16.3819 22.8685 17.0871 21.8249C17.7139 20.8801 18.4334 20.1891 19.281 19.7307C20.5631 19.0256 22.0518 18.8634 23.4693 19.2654C24.8868 19.6673 26.055 20.591 26.7672 21.8602C27.4795 23.1294 27.6434 24.6031 27.2374 26.0062C26.8314 27.4094 25.8982 28.5658 24.6161 29.2709C23.334 29.976 21.8453 30.1382 20.4278 29.7363C19.0103 29.3344 17.8421 28.4107 17.1298 27.1344C17.1156 27.1133 17.1014 27.0921 17.0729 27.0498L17.0301 26.9793C16.3178 25.9639 15.4275 25.1178 14.3804 24.462Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M78.6439 34.5804H74.6622L66.4921 14.6328H70.9298L76.6709 30.0183L82.4547 14.6328H86.6858L78.6439 34.5804Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M105.918 28.9043C104.785 32.4298 101.559 35.208 96.8717 35.208C91.4653 35.208 86.7357 31.3087 86.7357 24.5467C86.7357 18.2852 91.3015 14.0123 96.3731 14.0123C102.57 14.0123 106.053 18.2429 106.053 24.462C106.053 24.9627 106.01 25.4563 105.968 25.703H90.8029C90.8884 29.2709 93.4811 31.76 96.8788 31.76C100.276 31.76 101.779 29.976 102.534 27.7338L105.925 28.8972L105.918 28.9043ZM101.936 22.5582C101.851 19.6955 99.9702 17.4603 96.4087 17.4603C93.0965 17.4603 91.0878 19.9916 90.924 22.5582H101.943H101.936Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M120.791 18.5743C120.207 18.4897 119.615 18.4474 119.074 18.4474C115.762 18.4474 113.547 20.1891 113.547 24.5819V34.5734H109.608V14.6328H113.461V18.116C114.928 15.0488 117.443 14.3014 119.494 14.3014C120.036 14.3014 120.584 14.386 120.791 14.4283V18.5743Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M125.193 28.1568C125.442 30.2299 127.038 31.8869 129.887 31.8869C132.109 31.8869 133.32 30.6459 133.32 29.2357C133.32 27.9947 132.401 27.0357 130.72 26.662L127.287 25.9146C124.146 25.2518 122.258 23.1364 122.258 20.316C122.258 16.9173 125.485 14.0123 129.424 14.0123C134.951 14.0123 136.668 17.5801 137.088 19.3641L133.612 20.6474C133.441 19.6109 132.608 17.3333 129.424 17.3333C127.415 17.3333 126.076 18.6166 126.076 19.9846C126.076 21.1903 126.831 22.0576 128.377 22.389L131.646 23.0941C135.293 23.8839 137.216 26.0768 137.216 29.0241C137.216 31.9715 134.83 35.2009 129.844 35.2009C124.317 35.2009 121.966 31.6754 121.631 29.3978L125.193 28.1568Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M140.984 34.5804V12.186L144.881 14.6328V34.5804H140.984Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M155.394 14.6328H159.753V18.1583H155.394V28.5235C155.394 30.3497 156.149 31.2593 158.201 31.2593C158.706 31.2593 159.419 31.1747 159.753 31.0901V34.4112C159.419 34.5381 158.414 34.7849 157.075 34.7849C153.642 34.7849 151.462 32.7119 151.462 29.1017V18.1513H147.609V14.6257H148.698C150.878 14.6257 151.797 13.3001 151.797 11.5585V8.32199H155.401V14.6257L155.394 14.6328Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M180.866 28.9043C179.733 32.4298 176.507 35.208 171.82 35.208C166.413 35.208 161.684 31.3087 161.684 24.5467C161.684 18.2852 166.25 14.0123 171.321 14.0123C177.518 14.0123 181.001 18.2429 181.001 24.462C181.001 24.9627 180.959 25.4563 180.916 25.703H165.751C165.836 29.2709 168.429 31.76 171.827 31.76C175.224 31.76 176.727 29.976 177.482 27.7338L180.873 28.8972L180.866 28.9043ZM176.884 22.5582C176.799 19.6955 174.918 17.4603 171.357 17.4603C168.045 17.4603 166.036 19.9916 165.865 22.5582H176.884Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M144.881 8.32904H140.984V12.186H144.881V8.32904Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M66.371 28.9043C65.2385 32.4298 62.0118 35.208 57.3249 35.208C51.9185 35.208 47.1888 31.3087 47.1888 24.5467C47.1888 18.2852 51.7547 14.0123 56.8262 14.0123C63.0232 14.0123 66.5064 18.2429 66.5064 24.462C66.5064 24.9627 66.4636 25.4563 66.4209 25.703H51.2561C51.3415 29.2709 53.9343 31.76 57.332 31.76C60.7296 31.76 62.2326 29.976 62.9876 27.7338L66.3782 28.8972L66.371 28.9043ZM62.3893 22.5582C62.3038 19.6955 60.4234 17.4603 56.8619 17.4603C53.5497 17.4603 51.541 19.9916 51.3772 22.5582H62.3964H62.3893Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M179.014 14.6892V12.6655H178.437C178.28 12.6655 178.173 12.5738 178.173 12.4257C178.173 12.2777 178.28 12.186 178.437 12.186H180.182C180.339 12.186 180.446 12.2777 180.446 12.4257C180.446 12.5738 180.339 12.6655 180.182 12.6655H179.605V14.6892C179.605 14.8795 179.498 14.9924 179.313 14.9924C179.128 14.9924 179.021 14.8795 179.021 14.6892H179.014Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M181.037 14.7244V12.5245C181.037 12.2918 181.179 12.1508 181.414 12.1508C181.621 12.1508 181.728 12.2354 181.813 12.4469L182.511 14.1533H182.526L183.216 12.4469C183.302 12.2354 183.416 12.1508 183.622 12.1508C183.858 12.1508 184 12.2918 184 12.5245V14.7244C184 14.8936 183.9 14.9924 183.736 14.9924C183.573 14.9924 183.473 14.8936 183.473 14.7244V13.0886H183.459L182.768 14.7667C182.718 14.8866 182.64 14.943 182.518 14.943C182.397 14.943 182.312 14.8866 182.262 14.7667L181.571 13.0886H181.557V14.7244C181.557 14.8936 181.464 14.9924 181.3 14.9924C181.137 14.9924 181.037 14.8936 181.037 14.7244Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-16">
            *Individual results may vary. Photography contains a mix of actual
            patients and stock photography. Testimonials are from actual
            patients.
          </p>
        </div>
      </div>
    </footer>
  );
}
