import { FireIcon, FaceSmileIcon, ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ForwardIcon, EyeIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline'


const features = [
    {
        name: 'Vision and Strategy',
        description:
            'Likely you already have a vision and a strategy. Do you need help refining it, testing it, or communicating it to your teams?',
        icon: EyeIcon,
    },
    {
        name: 'High-Performance Execution',
        description:
            'Making sure that teams are solving the right problems, that hypotheses are tested, and interventions are delivered early and often, are key to high-performance.',
        icon: FireIcon,
    },
    {
        name: 'Alignment Across the Org',
        description:
            'Getting everyone rowing in the same direction is challenging but critical. Effective and frequent presentation of problems being tackled and solutions being worked are one piece of this puzzle.',
        icon: ArrowsPointingInIcon,
    },
    {
        name: 'Employee Engagement > Customer Engagement',
        description:
            'Product management, when done well, is inclusive, which keeps employees engaged. And when employees are engaged, customer engagement will follow.',
        icon: FaceSmileIcon,
    },
];

function ProblemsSolved() {
    return (
        <div className="bg-white mb-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-xl mx-auto">
                    <div className="text-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl font-bold leading-tight dark:text-white"> Problems <span className="text-teal-500">Solved</span> </h1>
                            <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                                <div className="flex-1 h-2 bg-teal-200">
                                </div>
                                <div className="flex-1 h-2 bg-teal-400">
                                </div>
                                <div className="flex-1 h-2 bg-teal-600">
                                </div>
                            </div>
                        </div>
                        <p className="mb-16 text-base text-center text-gray-500">Clarifying the problems facing your customers, generating alignment across your org, and realizing the outcomes your customers need.</p>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>

    )
}

export default ProblemsSolved