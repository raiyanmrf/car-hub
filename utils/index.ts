export async function fetchData() {
  const headers = {
    "X-RapidAPI-Key": "8c4aa89dfcmshf1bd5ae67dfb5a1p14c8eejsnba5a41b102ee",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
}
