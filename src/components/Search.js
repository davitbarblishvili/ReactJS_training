import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);

    console.log(result);

    useEffect(() => {
      const search = async () => {
          const {data} = await axios.get('https://en.wikipedia.org/w/api.php', { 
              params: { 
                  action: 'query', 
                  list: 'search', 
                  origin: '*', 
                  format: 'json',
                  srsearch: term,
              }
          });
          setResult(data.query.search);
      };

      const timeoutid = setTimeout(() => {
        if(term){
            search();
          }
      },500)

      return () => {
          clearTimeout(timeoutid);
      }
    }, [term]);

    const renderedResults = result.map((eachResult) => {
        return (
            <div key={eachResult.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${eachResult.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {eachResult.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html : eachResult.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input className="input" value ={term} onChange={ (e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;