async function getapi()
{
  const api_url ="https://api.api-ninjas.com/v1/quotes";
  const response = await fetch(api_url, {
    request: "GET",
    headers: {
      "X-Api-Key": "gyac5R52MfvwnnazAUBKFA==CipM71tqLc2tGKgU"
    }
  });
  var data = await response.json();
  return data
}

export default getapi