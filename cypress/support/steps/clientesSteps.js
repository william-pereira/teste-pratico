/* global Given, Then, When */
import clientesPages from '../pageObjects/clientes'
const clientes = new clientesPages

When("Realizo um novo cadastrado no site", () => {
    clientes.cadastrarCliente()
})

And("Preencho os campos obrigatórios do perfil", () =>{
    clientes.acessarPerfil()
    clientes.preencherDados()
})

Then("Devo visualizar se o cadastrado foi criado corretamente", () => {
    clientes.verificarCadastro()
})