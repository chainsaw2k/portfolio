import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { UserIcon } from "@heroicons/react/24/outline";
import SingleExperience from './SingleExperience';


const experiences = [
    {
        coname: 'Section',
        begdate: 'Dec 2021',
        enddate: 'Jan 2023',
        cotag: 'Distributed application delivery optimizing edge proximity-performance against cost.',
        mytitle: 'Senior Product Manager - PaaS Product Management',
        description:
            'Worked with founders to define the market, clarify our value, and deliver our PaaS.',
        icon: CloudArrowUpIcon,
    },
    {
        coname: 'Motorola Solutions',
        begdate: '2019',
        enddate: '2021',

        cotag: '',
        mytitle: '',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        coname: 'Vision and Strategy',
        begdate: '2016',
        enddate: '2018',

        cotag: '',
        mytitle: '',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        coname: 'Vision and Strategy',
        begdate: 'Dec 2021',
        enddate: 'Jan 2023',

        cotag: '',
        mytitle: '',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
];

function ExperienceTimeline() {
    return (
        <div>
            <section className="py-8 bg-[#EFF0F4] dark:bg-gray-800 font-poppins">
                <div className="max-w-xl mx-auto">
                    <div className="text-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl font-bold leading-tight dark:text-white"> Professional <span className="text-teal-500">Experience</span> </h1>
                            <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                                <div className="flex-1 h-2 bg-teal-200">
                                </div>
                                <div className="flex-1 h-2 bg-teal-400">
                                </div>
                                <div className="flex-1 h-2 bg-teal-600">
                                </div>
                            </div>
                        </div>
                        <p className="mb-16 text-base text-center text-gray-500">Recent relevant experience is listed below.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center ">
                    <div className="w-full px-4 mx-auto lg:max-w-5xl ">
                        <div className="relative">
                            <div
                                className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5] dark:bg-gray-700 lg:block left-1/2">
                            </div>
                            <div className="space-y-2 lg:space-y-4">
                                <div> {/*SECTION*/}
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-start w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pr-8">
                                                <div
                                                    className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                                                    <div
                                                        className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                                                        <div
                                                            className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900">
                                                        </div>
                                                    </div>
                                                    <SingleExperience
                                                        coname='Section' cotag='Distributed application delivery optimizing edge proximity-performance against cost.'
                                                        begdate='Dec 2021' enddate='Jan 2023'
                                                        mytitle='Senior Product Manager'
                                                        jobdesc=''
                                                        description='PaaS product management, working with founders and other colleagues to define the market, clarify our value, and deliver our globally distributed virtual Kubernetes cluster.' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[4px]">
                                            {/* <UserIcon className="text-gray-100 dark:text-gray-400" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div> {/*MSI*/}
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-end w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pl-8">
                                                <div
                                                    className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                                                    <div
                                                        className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                                        <div
                                                            className="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg">
                                                        </div>
                                                    </div>
                                                    <SingleExperience
                                                        coname='Motorola Solutions' cotag="Mission-critical communications software for public safety demanding 5 9's of availability."
                                                        begdate='2019' enddate='2021'
                                                        mytitle='Senior Product Manager & Team Lead, SRE, Platform Engineering'
                                                        jobdesc='Product Management for the Cloud Infrastructure Platform for Motorola'
                                                        description='Lead a team of engineers to facilitate better reliability and coordination amongst 75
                                                    application partner teams at Motorola.' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[3px]">
                                        </div>
                                    </div>
                                </div>
                                <div> {/*ADSK DIRECTOR*/}
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-start w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pr-8">
                                                <div
                                                    className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                                                    <div
                                                        className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                                                        <div
                                                            className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900">
                                                        </div>
                                                    </div>
                                                    <SingleExperience
                                                        coname='Autodesk' cotag="Industry leader in design and manufacturing software."
                                                        begdate='2016' enddate='2018'
                                                        mytitle='Director of Product Management, Digital Manufacturing'
                                                        jobdesc='Portfolio Management | Product Vision and Strategy'
                                                        description='Lead 4 product managers to define requirements, priorities, & roadmaps for ~100 developers of cloud and desktop solutions for manufacturing on CNC equipment.' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[2px]">
                                        </div>
                                    </div>
                                </div>
                                <div> {/*ADSK PM*/}
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-end w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pl-8">
                                                <div
                                                    className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                                                    <div
                                                        className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                                        <div
                                                            className="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg">
                                                        </div>
                                                    </div>
                                                    <SingleExperience
                                                        coname='Autodesk' cotag="Industry leader in design and manufacturing software."
                                                        begdate='2015' enddate='2016'
                                                        mytitle='Product Manager'
                                                        jobdesc='Product Management | Vision and Strategy'
                                                        description='Product management for Delcam for SolidWorks, FeatureCAM, and PartMaker, 3 world-class CAM systems for mechanical part manufacturing.' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[1px]">
                                        </div>
                                    </div>
                                </div>
                                <div> {/*ADSK head of eng */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-start w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pr-8">
                                                <div
                                                    className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                                                    <div
                                                        className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                                                        <div
                                                            className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900">
                                                        </div>
                                                    </div>
                                                    <SingleExperience
                                                        coname='Autodesk' cotag="Industry leader in design and manufacturing software."
                                                        begdate='2014' enddate='2015'
                                                        mytitle='Head of Engineering'
                                                        jobdesc='Engineering Lead | Product Management Lead | Full Lifecycle Development'
                                                        description='Head of both engineering management and customer-facing product management for 3 manufacturing products, leading 40 engineers.' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[2px]">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}


export default ExperienceTimeline