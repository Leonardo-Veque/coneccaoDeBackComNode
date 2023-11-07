document.addEventListener("DOMContentLoaded", () => {
  const elementoDoServidor = document.getElementById("server-data");

  fetch("/dados-do-servidor")
    .then((response) => response.json())
    .then((data) => {
      elementoDoServidor.innerText = `Versão do Node.js: ${data.nodeVersion}`;
    })
    .catch((error) => {
      elementoDoServidor.innerText = "Erro ao carregar os dados do servidor =(";
      console.log(error);
    });
});
