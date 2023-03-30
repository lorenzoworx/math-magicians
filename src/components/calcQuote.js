import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=money', {
        headers: { 'X-Api-Key': 'C77aXTE5gwAedoSalg/AMw==zvy7T0mdP5mqxYin' },
        contentType: 'application/json',
      });
      if (!response.ok) {
        throw Error('Error fetching quote');
      }
      return response.json();
    };
    fetchQuote().then((data) => {
      setQuote(data[0].quote);
      setLoading(false);
      setError(false);
    }).catch((error) => {
      setQuote(null);
      setLoading(false);
      setError(error.message);
    });
  }, []);
  return (
    <div className="quote">
      {loading && <p>Loading...</p>}
      {quote && <p>{quote}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Quote;
