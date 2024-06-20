import React from 'react';

class JavaScript extends React.Component {
    state = {};
    render() {
        return (
            <div className="assignmentListsWrapper">
                <div className="loader" />
                <div className="assignmentLists flex flex-wrap gap-[46px] justify-between md:justify-around">
                    <a
                        className="assignmentCard w-[304px] rounded-[14px] bg-[#fafafa] cursor-pointer flex flex-col m-auto"
                        href="/technical-assessment-test/backend-developer"
                        target="_blank"
                    >
                        <div className="header w-full h-max-content p-[26px_24px_19px] flex gap-[12px] relative">
                            <img
                                alt="Backend Developer"
                                className="skill-icon w-[50px] h-[50px] p-[5px] flex justify-center items-center rounded-[4px] bg-black object-contain"
                                src="https://dersyb7nfifdf.cloudfront.net/production/17900/2f4058e5-567c-4bbc-99ad-1e1945965f5e.png"
                            />
                            <div className="text text-[18px] font-semibold leading-[25px] max-w-[150px]">
                                Backend Developer
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
                        <div className="skillTagsContainer flex flex-wrap gap-[14px] p-[0_20px_27px]">
                            <div className="skillTag rounded-[19px] bg-[#c8e7fd] p-[5px_15px] flex items-center justify-center text-[12px] font-normal">
                                Python Backend
                            </div>
                            <div className="skillTag rounded-[19px] bg-[#c8e7fd] p-[5px_15px] flex items-center justify-center text-[12px] font-normal">
                                PHP Miscellaneous
                            </div>
                            <div className="skillTag rounded-[19px] bg-[#c8e7fd] p-[5px_15px] flex items-center justify-center text-[12px] font-normal">
                                SQL Miscellaneous
                            </div>
                            <div className="skillTag rounded-[19px] bg-[#c8e7fd] p-[5px_15px] flex items-center justify-center text-[12px] font-normal">
                                Java Springboot
                            </div>
                            <div className="skillTag rounded-[19px] bg-[#c8e7fd] p-[5px_15px] flex items-center justify-center text-[12px] font-normal">
                                Ajax
                            </div>
                            <div className="skillTag rounded-[19px] bg-[#c8e7fd] p-[5px_15px] flex items-center justify-center text-[12px] font-normal">
                                Git
                            </div>
                        </div>
                        <div className="moreInfoWrapper flex flex-col gap-[9px] p-[0_20px_28px] mt-auto">
                            <div>
                                <span className="moreInfo bold font-bold">50 minutes</span>
                                <span className="moreInfo font-normal"> duration</span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">Medium</span>
                                <span className="moreInfo font-normal"> difficulty level</span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">43</span>
                                <span className="moreInfo font-normal"> questions</span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">Intermediate</span>
                                <span className="moreInfo font-normal"> seniority level</span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">554+</span>
                                <span className="moreInfo font-normal"> candidates assessed</span>
                            </div>
                            <div>
                                <span className="moreInfo bold font-bold">72</span>
                                <span className="moreInfo font-normal"> organisations served</span>
                            </div>
                        </div>
                    </a>
                    {/* Repeat the same structure for other assignment cards */}
                    <div className="blankFill spanningTwo" />
                </div>
                <div className="pagination hidden">
                    <a className="prevBtn disabled" href="#" style={{ display: 'none' }}>
                        <svg fill="none" height="7" viewBox="0 0 14 7" width="14" xmlns="http://www.w3.org/2000/svg">
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
                    <a className="nextBtn disabled" href="#" style={{ display: 'none' }}>
                        <div>View more</div>
                        <svg fill="none" height="7" viewBox="0 0 14 7" width="14" xmlns="http://www.w3.org/2000/svg">
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

export default JavaScript;
