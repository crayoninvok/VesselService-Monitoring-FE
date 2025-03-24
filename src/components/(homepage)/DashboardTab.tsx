import Image from "next/image";

interface DashboardTabProps {
  heading: string;
  description: string;
  features: string[];
  imagePath: string;
  imageAlt: string;
}

export default function DashboardTab({
  heading,
  description,
  features,
  imagePath,
  imageAlt,
}: DashboardTabProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          {heading}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-2 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-200">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-md">
          <Image
            src={imagePath}
            alt={imageAlt}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
