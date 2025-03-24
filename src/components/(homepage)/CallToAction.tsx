import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="cta-section py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-libre text-3xl font-bold mb-6">
          Ready to Optimize Your Fleet Maintenance?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Join VessM today and experience the future of ship maintenance
          management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register/vendor"
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            Register as Vendor
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
