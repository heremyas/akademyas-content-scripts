import React, { useEffect, useMemo, useState } from "react";
import Skeleton from "../../components/Skeleton";

const day = new Date().getDay();
localStorage.getItem("quote") ??
  localStorage.setItem("quote", JSON.stringify({ day }));

const category = "success";
async function getQuote() {
  const res = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${category}`,
    {
      headers: { "X-API-KEY": "PCcwYgITXqLafoTY+G25HA==c0KMDre4Miik0iPR" },
    }
  );
  const resData = await res.json();
  return resData[0];
}

function Quote(props) {
  // const [quote, setQuote] = useState();
  const [quote, setQuote] = useState(JSON.parse(localStorage.getItem("quote")));

  useEffect(() => {
    if (quote.quote) {
      if (quote.day !== day) {
        getQuote().then((res) => {
          const q = { ...quote, ...res, day };
          localStorage.setItem("quote", JSON.stringify(q));
          setQuote(q);
        });
      }
    } else {
      getQuote().then((res) => {
        const q = { ...quote, ...res };
        localStorage.setItem("quote", JSON.stringify(q));
        setQuote(q);
      });
    }
  }, []);

  if (!quote) return;

  return (
    <section
      {...props}
      style={{ height: "50vh", display: "grid", placeItems: "center" }}
    >
      <div style={{ display: "grid", placeItems: "center" }}>
        <Skeleton isLoaded={quote}>
          <p>
            <b>{quote?.quote}</b>
          </p>
        </Skeleton>
        <br />
        <Skeleton isLoaded={quote}>
          <p>{quote?.author}</p>
        </Skeleton>
      </div>
    </section>
  );
}

export default Quote;
