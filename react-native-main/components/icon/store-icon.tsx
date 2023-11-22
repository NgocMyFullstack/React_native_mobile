import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function StoreIcon(props?: any) {
    return (
        <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={21}
            height={21}
            viewBox='0 0 21 21'
            fill='none'
            {...props}
        >
            <Path
                d='M20.962 5.013l-1.5-4.5A.75.75 0 0018.75 0H2.25a.75.75 0 00-.712.513l-1.5 4.5A.764.764 0 000 5.23V6a3.734 3.734 0 001.5 2.984v9.766A2.25 2.25 0 003.75 21h13.5a2.25 2.25 0 002.25-2.25V9v-.016A3.734 3.734 0 0021 6v-.75-.02a.761.761 0 00-.038-.217zM15.75 1.5h2.46l1 3h-3.46v-3zm-4.5 0h3v3h-3v-3zm-4.5 0h3v3h-3v-3zm-3.96 0h2.46v3H1.79l1-3zm9.21 18H9v-6h3v6zm6-.75a.75.75 0 01-.75.75H13.5v-6.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v6.75H3.75a.75.75 0 01-.75-.75V9.675a3.707 3.707 0 003-.689 3.801 3.801 0 004.5 0 3.801 3.801 0 004.5 0 3.707 3.707 0 003 .689v9.075zm-.75-10.5a2.216 2.216 0 01-1.685-.779.75.75 0 00-1.13 0 2.263 2.263 0 01-3.37 0 .775.775 0 00-1.13 0 2.263 2.263 0 01-3.37 0 .775.775 0 00-1.13 0 2.216 2.216 0 01-1.685.779A2.25 2.25 0 011.5 6h18a2.25 2.25 0 01-2.25 2.25z'
                fill='#fff'
            />
        </Svg>
    );
}

export default StoreIcon;
