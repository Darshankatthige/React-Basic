import react from "react";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import axios from "axios";
import "./common.css";

export const ReactHookExample = () => {
  const [quote, setQuote] = useState("");
  const [oldQuotes,setOldQuotes] = useState({});

  const getNewQuote = useCallback(() => {
    console.log("calling new Quote..... Dom got Rerendered");
    axios.get("https://api.kanye.rest").then((response) => {
      if (response.data.quote) {
        quoteRef.current.focus();
      }
      return setQuote(response.data.quote);
    });
  }, []);

  const getUseMemo = useMemo(() => getNewQuote);

  const quoteRef = useRef();
  const btn = useRef();

  return (
    <div>
      <div className="text-danger text-center">
        <card className="border">
          <h2>React-UseMemo</h2>
          <input className="quote-card" ref={quoteRef} value={quote}>
          
          </input>

          <button onClick={() => getUseMemo()} ref={btn} className="btn">Get  Quote !!!!!</button>


          <div className="old">
              {setOldQuotes}
          </div>
        </card>
      </div>
    </div>
  );
};
