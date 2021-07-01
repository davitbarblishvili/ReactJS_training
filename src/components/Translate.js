import React, {useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


const options = [
    {
        label: 'Afrikans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Georgian',
        value: 'ka'
    }

]

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown 
                options={options}
                selected={language}
                onSelectedChange={setLanguage}  
                label='Select a language'        
            />
            <hr/>
            <h3 className="header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    );
};


export default Translate;