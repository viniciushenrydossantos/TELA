// Abrir o modal
const openButtons = document.querySelectorAll('.open-modal');
openButtons.forEach((button) => { //pega qual dos botões foram selecionados da class .open-modal

  button.addEventListener("click", () => { //arrow function pegar algo - no caso clique do botão
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId); 
    modal.showModal(); 

  });
});

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach((button)=>{


    button.addEventListener('click', () =>{
        const modalId = button.getAttribute("data-modal"); 
        const modal = document.getElementById(modalId); 
        modal.close(); 

    })

})
document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.querySelector("#cadastrarContaModal form");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const email = document.getElementById("emailCadastro").value.trim();
            const senha = document.getElementById("senhaCadastro").value.trim();
            const senhaConfirmacao = document.getElementById("senhaConfirmacao").value.trim();

            if ( !email || !senha || !senhaConfirmacao) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            if (senha !== senhaConfirmacao) {
                alert("As senhas não coincidem.");
                return;
            }

            console.log("Cadastro realizado com sucesso!");
            alert("Cadastro realizado com sucesso!");

            $("#cadastrarContaModal").modal("hide");

            formCadastro.reset();
        });
    }
});



