import dynamic from "next/dynamic"
import { CheckIcon } from "@heroicons/react/outline"

const SectionSteps = dynamic(() => import("../Section/SectionSteps"), {
  ssr: false,
})

const stats = [
  { label: "Lessons", value: "7" },
  { label: "Total Time", value: "2 Hours" },
  // { label: "Fun Scale", value: "100" },
  // { label: "Raised", value: "$25M" },
]

const features = [
  {
    name: "How to Install Cypress",
    description: "",
  },
  {
    name: "How to Write an E2E Test",
    description: "",
  },
  {
    name: "The Meaning of Life",
    description: "",
  },
]

export default function SectionContent({
  lessons,
  progressService,
  lessonPath,
}) {
  return (
    <>
      <hr />
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Testing Your First App
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Overview
              </p>
              <div className="prose prose-indigo text-gray-500 mx-auto mt-12 lg:max-w-none">
                <p>
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p>
                <ul role="list">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <h3 className="text-gray-500">Table of Contents</h3>
              </div>
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                <SectionSteps
                  lessonPath={lessonPath}
                  lessons={lessons}
                  progressService={progressService}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                {/* Content area */}
                <div className="">
                  <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                    What You Will Learn
                  </h2>

                  {/* Features */}
                  <div className="mt-12">
                    <dl className="">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative mb-6">
                          <dt>
                            <CheckIcon
                              className="absolute h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                            <p className="ml-9 text-lg leading-6 font-medium text-indigo-400">
                              {feature.name}
                            </p>
                          </dt>
                          <dd className="mt-2 ml-9 text-base text-gray-500">
                            {feature.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* Stats section */}
                <div className="mt-10">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="border-t-2 border-gray-100 pt-6"
                      >
                        <dt className="text-base font-medium text-gray-500">
                          {stat.label}
                        </dt>
                        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
