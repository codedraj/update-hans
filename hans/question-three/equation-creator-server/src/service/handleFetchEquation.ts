export const fetchEquation = async (len: number) => {
  const response = await fetch("http://localhost:4000/" + len.toString());
  const data = await response.json();
  console.log(data);
  return data;
};
