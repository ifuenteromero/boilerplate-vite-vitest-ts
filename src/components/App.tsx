import { useState } from 'react';
import { projectName } from '../projectName';

const App = () => {
    const [text, setText] = useState('on');
    const handleClick = () =>
        setText((prevText) => (prevText === 'on' ? 'off' : 'on'));

    return (
        <>
            <h1>{projectName}</h1>
            <button onClick={handleClick}>{text}</button>
        </>
    );
};

export default App;
