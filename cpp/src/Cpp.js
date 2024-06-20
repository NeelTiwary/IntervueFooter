import React from 'react';


class Cpp extends React.Component {
    state = {};

    render() {
        return (
            <div >
                <div />
                <div className="flex gap-12 flex-wrap justify-between md:justify-around">
                    <a
                        className="w-76 rounded-lg bg-gray-50 cursor-pointer flex flex-col mx-auto"
                        href="/technical-assessment-test/cpp"
                        target="_blank"
                    >
                        <div className="w-full max-h-full p-6 flex gap-3 relative">
                            <img
                                alt="CPP"
                                className="skill-icon flex w-12 h-12 p-1.5 justify-center items-center rounded bg-black object-contain"
                                src="https://dersyb7nfifdf.cloudfront.net/production/17900/0c55f5e0-ca19-4072-9764-ef66097ea340.png"
                            />
                            <div className="text-lg font-semibold leading-6 max-w-xs">
                                CPP
                            </div>
                            <div className="proceedArrow">
                                <svg
                                    fill="none"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    width="28"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.0005 23.5205C8.73647 23.5205 4.48047 19.2645 4.48047 14.0005C4.48047 8.73647 8.73647 4.48047 14.0005 4.48047C19.2645 4.48047 23.5205 8.73647 23.5205 14.0005C23.5205 19.2645 19.2645 23.5205 14.0005 23.5205ZM14.0005 5.60047C9.35247 5.60047 5.60047 9.35247 5.60047 14.0005C5.60047 18.6485 9.35247 22.4005 14.0005 22.4005C18.6485 22.4005 22.4005 18.6485 22.4005 14.0005C22.4005 9.35247 18.6485 5.60047 14.0005 5.60047Z"
                                        fill="#5B5B5B"
                                    />
                                    <path
                                        d="M13.8328 19.4324L13.0488 18.6484L17.6968 14.0004L13.0488 9.35236L13.8328 8.56836L19.2648 14.0004L13.8328 19.4324Z"
                                        fill="#5B5B5B"
                                    />
                                    <path
                                        d="M8.96094 13.4404H18.4809V14.5604H8.96094V13.4404Z"
                                        fill="#5B5B5B"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3.5 p-0 px-5 pb-7">
                            <div className="rounded-full bg-blue-100 p-1.5 px-4 flex items-center justify-center text-xs font-normal">
                                Miscellaneous
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 p-0 px-5 pb-7 mt-auto">
                            <div>
                                <span className=" bold font-bold">40 minutes</span>
                                <span className="text-sm font-normal"> duration</span>
                            </div>
                            <div>
                                <span className="bold font-bold">Hard</span>
                                <span className="text-sm font-normal"> difficulty level</span>
                            </div>
                            <div>
                                <span className="bold font-bold">25</span>
                                <span className="text-sm font-normal"> questions</span>
                            </div>
                            <div>
                                <span className="bold font-bold">Intermediate</span>
                                <span className="text-sm font-normal"> seniority level</span>
                            </div>
                            <div>
                                <span className="bold font-bold">973+</span>
                                <span className="text-sm font-normal"> candidates assessed</span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">75</span>
                                <span className="moreInfo text-sm font-normal"> organisations served</span>
                            </div>
                        </div>
                    </a>
                    <div className="blankFill spanningThree" />
                    <div className="blankFill spanningThree" />
                    <div className="blankFill spanningTwo" />
                </div>
                <div className="pagination hidden">
                    <a
                        className="prevBtn disabled"
                        href="#"
                        style={{ display: 'none' }}
                    >
                        <svg
                            fill="none"
                            height="7"
                            viewBox="0 0 14 7"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.81872 1L7.09832 6L12.3779 1"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                        <div>Previous</div>
                    </a>
                    <a
                        className="nextBtn disabled"
                        href="#"
                        style={{ display: 'none' }}
                    >
                        <div>View more</div>
                        <svg
                            fill="none"
                            height="7"
                            viewBox="0 0 14 7"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.81872 1L7.09832 6L12.3779 1"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        );
    }
}

export default Cpp;
