import React, { useEffect, useState } from "react";
import Skeleton from "../../components/Skeleton";

function Quote() {
  const [quote, setQuote] = useState();
  const category = "success";

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { "X-API-KEY": "PCcwYgITXqLafoTY+G25HA==c0KMDre4Miik0iPR" },
    })
      .then((res) => res.json())
      .then((res) => setQuote(res[0]));
  }, []);

  return (
    <section>
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
