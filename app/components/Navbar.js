import Link from "next/link";

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
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold">
              Ben Sonderman MD
            </Link>

            <div>
              <Link
                href="/"
                className="py-1 px-2 capitalize text-lg hover:text-[#68564b] transition-colors duration-300"
              >
                Our Clinics
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
