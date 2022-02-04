
import React from 'react';

export default function Robot(props) {
    // fill="#ed7474" #d8edb7
    console.log(props.color)
    return (

        <svg className='box' viewBox="0 0 1259 1137" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5">
            <path fill="#ed7474" stroke="#000" stroke-width="19.05" d="M9.55 9.527h1153.18v1044.29H9.55z" />
            <path fill="#f29f9f" stroke="#000" stroke-width="18.94" d="M2862 734h418v999h-418z" transform="matrix(.9665 0 0 1.04453 -2007.413 -757.161)" />
            <path fill="#c25151" stroke="#000" stroke-width="19.64" d="M2862 734h418v999h-418z" transform="matrix(.88934 0 0 1.04453 -2535.741 -757.161)" />
            <path d="M1996.47 1141.88H1699.1l104.14 226.24-104.14 78.68h297.37l-84.54-202.15 84.54-102.77Z" fill="#d8edb7" stroke="#000" stroke-width="19.13" transform="matrix(.9926 0 0 1 -1533.241 -946.492)" />
            <path d="M1996.47 1141.88H1699.1l104.14 226.24-104.14 78.68h297.37l-84.54-202.15 84.54-102.77Z" fill={props.color[0]} stroke="#000" stroke-width="19.13" transform="matrix(.9926 0 0 1 -972.611 -946.492)" />
            <path d="m2075.24 1502.64 58.09 58.6 62.77-55.67-1.88 124.66-60.89-68.99-54.66 69.69-3.43-128.29Z" fill="none" stroke="#000" stroke-width="21.13" transform="matrix(1.02482 0 0 .75889 -1600.344 -584.182)" />
            <path d="M990 752.158h-78.44l-2.22 56.58-150.66 58.13-.96-114.71H181.18v65.1l98-1.22-98 92.67v81.54h195.05l-.43-118 136.29 118H990v-238.09Z" fill={props.color[1]} stroke="#000" stroke-width="19.05" />
            <path d="m225.49 871.208-40.17 46.17-4.14 72.87h198.5l-3.88-118 136.29 118H990v-119.04H847.88l1.29 58-120 1 .19-59H510.52l.41 46.17-171.57-121.17.48 75H225.49" stroke="#000" stroke-width="19.17" />
            <path d="m207.83 314.818 52.34-30.31 25 49 33-57 34-38 28.92 39.36 67.34-82.48H153.27l54.56 119.43ZM799.56 382.878l33.61-49.37 35 56 21-24 31 58 34.26-54.81 54.63 131.61H713.89l103.38-78.68-17.71-38.75Z" stroke="#000" stroke-width="19.05" />
            <path d="m415.931 347.848 65 152.46M145.694 241.696l67.955 151.167M957.17 303.508l73-88M990 393.508l40.17 90M1021.17 402.508l28 58" fill="none" stroke="#000" stroke-width="19.05" />
            <path d="M1249.17 1126.798H95.99l-86.44-72.98h1153.18V9.527l86.44 72.981v1044.29l-86.44-72.98" stroke="#000" stroke-width="19.05" />
            <path d="M1021.17 844.508v145.74" fill="none" stroke="#000" stroke-width="19.05" />
            <path d="M2576 1791v145.74" fill="none" stroke="#000" stroke-width="21.22" transform="matrix(1 0 0 .78237 -1526.83 -530.021)" />
            <path d="M2576 1791v145.74" fill="none" stroke="#000" stroke-width="19.25" transform="matrix(0 1 -.97985 0 2078.9 -1855.992)" />
            <path d="M2576 1791v145.74" fill="none" stroke="#000" stroke-width="25.16" transform="matrix(1 0 0 .38335 -2422.735 247.788)" />
            <path d="M548.17 9.527v123.981M9.55 620.298h137.62M200.17 9.527v88.981M200.17 98.508H9.55M1162.73 579.508h-91.56M922.73 170.508h-91.56M271.23 531.273h-91.56M1071.17 579.508v104.93M61.17 32.508l-24 39.01M114.17 32.508l-27 39.01M140.17 71.518l34-39.01M831.17 786.508v-133l-40 45" fill="none" stroke="#000" stroke-width="19.05" />
            <path d="M1070.664 44s1.17 82.666 0 81.496" fill="none" stroke="#000" stroke-width="19.17" />
            <path d="M1030.175 85.018s82.665-1.17 81.495 0" fill="none" stroke="#000" stroke-width="19.17" />
        </svg>


    )
}