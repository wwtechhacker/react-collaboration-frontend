import React from 'react';
import Typewriter from "typewriter-effect";

type Props = {
    content: [string];
    style: any;
}

const CustomTypewriter: React.FC<Props> = ({ content, style }) => {
    return (

        <div style={style}>
            <Typewriter
                onInit={(typewriter) => {
                    content && content.map((item: any) => {
                        typewriter
                            .typeString(item)
                            .pauseFor(1000)
                            .deleteAll()
                    })
                    typewriter.start();
                }}
                options={{ delay: 100, deleteSpeed: 0.5, loop: true }}
            />
        </div>
    );
}

export default CustomTypewriter;