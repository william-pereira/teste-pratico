/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")

import ClientesElements from "../elements/clientesElements"
const clientesElements = new ClientesElements

import ProdutosElements from "../elements/produtosElements";
const produtosElements = new ProdutosElements


    class clientes {
        cadastrarCliente() {
            cy.get(produtosElements.botaoMenu()).click()
            cy.xpath(clientesElements.minhaConta()).click()
            cy.xpath(clientesElements.email()).type(clientesElements.dadoEmail)
            cy.xpath(clientesElements.senha()).type(clientesElements.dadoSenha)
            cy.wait(3000)
            cy.xpath(clientesElements.botaoRegister()).click({force: true})
            
        }
        acessarPerfil() {
            cy.xpath(clientesElements.detalhesConta()).click()

        }
        preencherDados() {
            cy.xpath(clientesElements.campoNome()).type(clientesElements.dadoNome)
            cy.xpath(clientesElements.campoSobrenome()).type(clientesElements.dadoSobrenome)
            cy.xpath(clientesElements.salvarDetalhes()).click()
        }
        verificarCadastro() {
            cy.xpath(clientesElements.exibirDetalhes()).click()
            cy.xpath(clientesElements.campoNome()).should('have.value', clientesElements.dadoNome)
            cy.xpath(clientesElements.campoSobrenome()).should('have.value', clientesElements.dadoSobrenome)
            cy.get(clientesElements.campoEmail()).should('have.value', clientesElements.dadoEmail)
        }
    }

export default clientes