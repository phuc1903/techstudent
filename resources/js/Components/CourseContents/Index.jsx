import {
    Accordion,
    AccordionContent,
    AccordionPanel,
    AccordionTitle,
} from "flowbite-react";

function CourseContents({ course }) {
    console.log(course);

    return (
        <Accordion>
            {course.sections.map((section) => (
                <AccordionPanel>
                    <AccordionTitle>
                        <div className="flex gap-6">
                            <span className="body-large-500 text-primary-500">
                                {section.title}
                            </span>
                            <div className="flex gap-4">
                                <div className="flex gap-[6px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 text-primary"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                        />
                                    </svg>
                                    <span className="body-medium-400 text-gray-700">
                                        {course.sections.length} Sections
                                    </span>
                                </div>
                                <div className="flex gap-[6px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 text-primary"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                                        />
                                    </svg>

                                    <span className="body-medium-400 text-gray-700">
                                        {section.lessons.length} Lectures
                                    </span>
                                </div>
                                <div className="flex gap-[6px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 text-primary"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>

                                    <span className="body-medium-400 text-gray-700">
                                        56 Lectures
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AccordionTitle>
                    <AccordionContent>
                        <div className="flex flex-col gap-[14px]">
                            {section.lessons.map((lesson) => (
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        {lesson.type.name == "lecture" ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                                />
                                            </svg>
                                        )}
                                        <span className="body-medium-400 text-gray-700">
                                            {lesson.title}
                                        </span>
                                    </div>
                                    <span>4</span>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            ))}
        </Accordion>
    );
}

export default CourseContents;
