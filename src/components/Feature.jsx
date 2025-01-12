import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "AI-Powered Mock Interviews",
    description:
      "Get realistic interview experiences tailored to your dream job. Our AI simulates real recruiter interactions, ensuring you’re prepared for every question that comes your way.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Job-Specific Questioning",
    description:
      "Upload the job posting, and PrepFi generates targeted questions based on the role and requirements. Practice with precision to address what truly matters.",
    icon: LockClosedIcon,
  },
  {
    name: "Actionable Feedback & Insights",
    description:
      "Receive detailed feedback on your responses, including strengths, areas for improvement, and tips to refine your delivery. PrepFi helps you grow with every session.",
    icon: ArrowPathIcon,
  },
  {
    name: "Anytime, Anywhere Access",
    description:
      "Practice interviews on your schedule. PrepFi’s cloud-based platform works seamlessly on desktop and mobile, so you can prepare whenever inspiration strikes.",
    icon: FingerPrintIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#5379ce]">
            Why Choose PrepFi?
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Discover how PrepFi’s cutting-edge features
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 leading-5">
            Preparing for interviews can be overwhelming—but it doesn’t have to
            be. PrepFi equips you with the tools and confidence to ace any
            interview by simulating real-life recruiter interactions and
            tailoring the experience to your dream job.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#5379ce]">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
