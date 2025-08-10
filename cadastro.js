document.addEventListener("DOMContentLoaded", function () {
    const botaoCadastro = document.getElementById("btnCadastrar");

    if (botaoCadastro) {
        botaoCadastro.addEventListener("click", function () {
            let nomeUsarioNovo = document.getElementById("nomeNovo").value;
            let emailNovo = document.getElementById("emailNovo").value;
            let senhaNovo = document.getElementById("senhaNovo").value;

            if (nomeUsarioNovo === "" || emailNovo === "" || senhaNovo === "") {
                alert("Por favor, preencha todos os campos!");
            } else {
               
                const usuario = {
                    nome: nomeUsarioNovo,
                    email: emailNovo,
                    senha: senhaNovo
                };

                localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

                alert("Cadastro realizado com sucesso! Faça o login.");
                window.location.href = "index.html";
            }
        });
    }
});
