import Image from "next/image";

interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function AboutPage() {
  // Core values data
  const coreValues: CoreValue[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency in all our operations and building trust with our customers and partners.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We continuously push the boundaries of what's possible in maritime technology to deliver cutting-edge solutions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Collaboration",
      description:
        "We foster collaboration between all stakeholders in the maritime maintenance ecosystem.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "Excellence",
      description:
        "We are committed to excellence in everything we do, from product development to customer service.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Reliability",
      description:
        "We build reliable solutions that maritime professionals can depend on every day.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Customer Focus",
      description:
        "Our customers' success is our success. We listen, learn, and adapt to meet their evolving needs.",
    },
  ];

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Captain Michael Chen",
      role: "Chief Executive Officer",
      bio: "Former ship captain with 20+ years of maritime experience and a passion for technology innovation.",
      image:
        "https://res.cloudinary.com/dcf4czeat/image/upload/v1742808632/person1_dbj9z2.jpg",
    },
    {
      name: "Sarah Williams",
      role: "Chief Technology Officer",
      bio: "Maritime software engineer with extensive experience developing solutions for the shipping industry.",
      image:
        "https://res.cloudinary.com/dcf4czeat/image/upload/v1742808632/person2_zzwtfe.jpg",
    },
    {
      name: "Raj Patel",
      role: "Chief Operations Officer",
      bio: "Former fleet manager with deep understanding of vessel maintenance challenges and solutions.",
      image:
        "https://res.cloudinary.com/dcf4czeat/image/upload/v1742808632/person3_tphjdc.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-libre text-4xl md:text-5xl font-bold mb-6">
              About VessM
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Leading the maritime industry with innovative vessel maintenance
              management solutions
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="relative h-16 mt-8">
          <svg
            className="absolute bottom-0 w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,122.7C672,128,768,160,864,170.7C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-libre text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                VessM was founded by a team of maritime industry experts who
                recognized the need for a more efficient, transparent, and
                integrated approach to vessel maintenance management.
              </p>
              <p className="text-gray-600 mb-4">
                With decades of combined experience in ship operations,
                technical management, and maritime technology, our founding team
                set out to build a solution that would address the real-world
                challenges faced by vessel operators, ship officers, and
                maintenance vendors.
              </p>
              <p className="text-gray-600">
                Today, VessM is trusted by maritime companies around the world
                to streamline their maintenance operations, reduce vessel
                downtime, and improve communication between all stakeholders in
                the maintenance process.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dcf4czeat/image/upload/v1742808630/vessel-team_w93fte.jpg"
                  alt="VessM Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="font-libre text-3xl font-bold text-gray-800 mb-4">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600">
                  To transform vessel maintenance management through innovative
                  technology that connects ship owners, officers, and vendors in
                  a seamless, transparent ecosystem that reduces downtime, cuts
                  costs, and improves operational efficiency.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600">
                  To become the global standard for maritime maintenance
                  management, powering a more efficient, sustainable, and
                  profitable maritime industry where vessels operate at peak
                  performance with minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-libre text-3xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at VessM
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-800"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-libre text-3xl font-bold text-gray-800 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Meet the experienced maritime professionals leading VessM
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-800 font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-libre text-3xl md:text-4xl font-bold mb-6">
              Join the Maritime Maintenance Revolution
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Experience how VessM can transform your vessel maintenance
              operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 text-center"
              >
                Schedule a Demo
              </a>
              <a
                href="/login"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300 text-center"
              >
                Login to Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
