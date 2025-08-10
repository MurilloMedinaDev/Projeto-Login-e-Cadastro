document.addEventListener("DOMContentLoaded", function () {
    const botaoEntrar = document.getElementById("btnEntrar");

        botaoEntrar.addEventListener("click", function () {
            let emailDigitado = document.querySelector(".email input").value;
            let senhaDigitada = document.querySelector(".senha input").value;

            if (emailDigitado === "" || senhaDigitada === "") {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioCadastrado"));

            if (!usuarioSalvo) {
                alert("Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.");
                return;
            }

            if (
                emailDigitado === usuarioSalvo.email &&
                senhaDigitada === usuarioSalvo.senha
            ) {
                alert("Login realizado com sucesso! Bem-vindo, " + usuarioSalvo.nome);
                window.location.href = "loginOK.html";
            } else {
                alert("E-mail ou senha incorretos. Tente novamente.");
            }
        });


    const criarLog = document.querySelector(".cadastro");
    if (criarLog) {
        criarLog.addEventListener("click", function () {
            window.location.href = "Cadastro.html";
        });
    }
});
