import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section py-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="font-libre text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Streamline Your Fleet Maintenance with VessM
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            The comprehensive ship service maintenance platform connecting ship
            owners, officers, and vendors in one unified system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/register/vendor"
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 text-center"
            >
              Register as Vendor
            </Link>
            <Link
              href="/login"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300 text-center"
            >
              Login to Dashboard
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <Image
              src="https://res.cloudinary.com/dcf4czeat/image/upload/v1742808633/Hauling_Photo_Business_Blog_Banner_sg4fdw.png"
              alt="VessM Dashboard Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
