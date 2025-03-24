import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="mb-4">
            <span className="inline-block bg-blue-700 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-2">
              Maritime Excellence
            </span>
          </div>
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
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2 mr-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center text-xs"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm opacity-80">
              Trusted by ship owners worldwide
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-cyan-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dcf4czeat/image/upload/v1742808633/Hauling_Photo_Business_Blog_Banner_sg4fdw.png"
                alt="VessM Dashboard Preview"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-blue-900 text-sm font-semibold">
                    Live Vessel Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-10"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#ffffff"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#ffffff"
            opacity=".5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
