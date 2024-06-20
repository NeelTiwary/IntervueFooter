import React from 'react'


class DotNet extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="assignmentListsWrapper">
                <div className="loader" />
                <div className="assignmentLists flex flex-wrap gap-12 justify-between">
                    <a
                        className="assignmentCard w-76 rounded-lg bg-gray-50 cursor-pointer flex flex-col mx-auto"
                        href="/technical-assessment-test/asp-dot-net"
                        target="_blank"
                    >
                        <div className="header w-full max-h-max p-6 flex gap-3 relative">
                            <img
                                alt="Asp.Net"
                                className="skill-icon flex w-12 h-12 p-1.5 justify-center items-center rounded bg-black object-contain"
                                src="https://dersyb7nfifdf.cloudfront.net/production/17900/0c477e77-de43-4365-853b-df4c6d34ea76.png"
                            />
                            <div className="RightHeader flex gap-20">
                                <div className="text text-lg font-semibold leading-6 max-w-[150px]">
                                    Asp.Net
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
                        </div>
                        <div className="skillTagsContainer  flex-wrap gap-3.5 p-5 pb-7">
                          <div className='flex py-3'>
                            <div className="skillTag rounded-full bg-blue-200 px-3.5 mx-1 py-1.5 flex items-center justify-center text-sm font-normal">
                                ASP .Net
                            </div>
                            <div className="skillTag rounded-full bg-blue-200 px-3.5 mx-1 py-1.5 flex items-center justify-center text-sm font-normal">
                                .Net Core 6
                            </div>
                            </div>
                            <div className='flex'>
                            <div className="skillTag rounded-full bg-blue-200 px-3.5 mx-1 py-1.5 flex items-center justify-center text-sm font-normal">
                                .Net Miscellaneous
                            </div>
                            <div className="skillTag rounded-full bg-blue-200 px-3.5 mx-1 py-1.5 flex items-center justify-center text-sm font-normal">
                                .Net Web API
                              </div>
                            </div>
                            
                        </div>
                        <div className="moreInfoWrapper flex flex-col gap-2.5 p-5 pb-7 mt-auto">
                            <div>
                                <span className="moreInfo bold font-bold">
                                    30 minutes
                                </span>
                                <span className="moreInfo">
                                    {' '}duration
                                </span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">
                                    Medium
                                </span>
                                <span className="moreInfo">
                                    {' '}difficulty level
                                </span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">
                                    25
                                </span>
                                <span className="moreInfo">
                                    {' '}questions
                                </span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">
                                    Intermediate
                                </span>
                                <span className="moreInfo">
                                    {' '}seniority level
                                </span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">
                                    528+
                                </span>
                                <span className="moreInfo">
                                    {' '}candidates assessed
                                </span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">
                                    68
                                </span>
                                <span className="moreInfo">
                                    {' '}organisations served
                                </span>
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
                        style={{
                            display: 'none'
                        }}
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
                        <div>
                            Previous
                        </div>
                    </a>
                    <a
                        className="nextBtn disabled"
                        href="#"
                        style={{
                            display: 'none'
                        }}
                    >
                        <div>
                            View more
                        </div>
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

export default DotNet;
