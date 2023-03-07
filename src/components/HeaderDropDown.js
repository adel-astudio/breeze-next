import React from 'react';
import Dropdown from './Dropdown';
const HeaderDropDown = ({ text, children }) => {
    return (
        <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Dropdown
                align="right"
                width="48"
                trigger={
                    <button className="flex items-center text-sm font-sans text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                        <div>{text}</div>

                        <div className="ml-1">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                }>
                {children}
            </Dropdown>
        </div>
    );
};

export default HeaderDropDown;