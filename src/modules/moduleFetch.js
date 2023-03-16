const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.methodPost = async (url, data, next) => {
  console.log(">>> URL POST...", url, data);
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEyYjYxZDBkNGQ5MTQyMDI4YzEyMGUiLCJpYXQiOjE2Nzg5NDc4ODIsImV4cCI6MTY3OTgxMTg4Mn0.gkW5fe4Z3RHtZ6fqKBUrjdWXuP-gx6gQn5ryziZ29A8`,
    },
  };
  try {
    let response = await fetch(url, options);
    response = await response.json();
    return response;
  } catch (err) {}
};
