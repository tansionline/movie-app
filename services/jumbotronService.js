async function getJumbotron() {
  return await fetch("http://localhost:8080/jumbotron").then(
    async (response) =>
      await response.json().then((data) => {
        return data;
      })
  );
}

module.exports.getJumbotron = getJumbotron;
