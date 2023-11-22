import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TakeawayIcon(props?: any) {
    const DEFAULT_COLOR = '#D8D8D8';
    const fillColor = props.color || DEFAULT_COLOR;

    return (
        <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={34}
            viewBox='0 0 20 34'
            fill='none'
            {...props}
        >
            <Path
                d='M11.028.003a.996.996 0 00-1.065.923L9.6 6.043H6.973a.996.996 0 00-.446.105c-.115.096-3.871 1.454-4.467 5.872H.996a.996.996 0 00-.996.996V17c0 .55.446.996.996.996h1.112l1.666 13.386A2.993 2.993 0 006.739 34h6.444a2.993 2.993 0 002.965-2.618l1.665-13.386h1.113c.55 0 .996-.446.996-.996v-3.984a.996.996 0 00-.996-.996h-1.064c-.594-4.404-4.362-5.785-4.467-5.872a.996.996 0 00-.446-.105h-1.352l.354-4.976a.996.996 0 00-.923-1.064zm-3.82 8.032h2.25l-.283 3.985h-5.1c.538-2.938 3.076-3.939 3.133-3.985zM8.51 21.348c-1.06.273-2.231.501-3.904.591l-.491-3.943h4.633l-.238 3.352zm5.66 9.787a.998.998 0 01-.988.873H6.739a.997.997 0 01-.988-.872l-.898-7.215a20.907 20.907 0 003.51-.487l-.392 5.515a.996.996 0 101.987.141l.44-6.199c1.362-.388 2.697-.749 4.907-.869l-1.134 9.113zm1.384-11.12c-2.24.094-3.707.413-5.006.766l.197-2.785h5.06l-.251 2.02zm2.375-4.011H1.992v-1.992H17.93v1.992zm-5.216-7.969c.085.07 2.585.991 3.133 3.985h-4.674l.283-3.985h1.258z'
                fill={fillColor}
            />
        </Svg>
    );
}

export default TakeawayIcon;
