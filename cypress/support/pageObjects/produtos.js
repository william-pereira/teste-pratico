/// <reference types="Cypress" />

import ProdutosElements from '../elements/produtosElements'
const produtosElements = new ProdutosElements
const url = Cypress.config("baseUrl")

    class produtos {
        acessarSite() {
            cy.visit(url)
        }
        pesquisarProduto() {
            cy.get(produtosElements.botaoMenu()).click()
            cy.xpath(produtosElements.botaoPesquisar()).type(produtosElements.nomeProduto)
        }
        verificarProduto() {
            cy.xpath(produtosElements.validaProduto()).should('not.contain', produtosElements.validaNomeProduto)
        }
        pesquisarProdutoInexistente() {
            cy.get(produtosElements.botaoMenu()).click()
            cy.xpath(produtosElements.botaoPesquisar()).type(produtosElements.nomeProdutoInexistente)
        }
        verificarProdutoInexistente() {
            cy.xpath(produtosElements.validaProdutoInexistente()).should('have.text', produtosElements.mensagemNotFound)
            cy.xpath(produtosElements.validaNomeInexistente()).should('have.text', produtosElements.produtoInexistente)
        }
        pesquisarCategoriaHTML() {
            cy.get(produtosElements.botaoMenu()).click()
            cy.xpath(produtosElements.categoriaHTML()).click()
            cy.get(produtosElements.subCategoriaHTML()).click()
        }
        verificarProdutoListado() {
            cy.xpath(produtosElements.verificaNomeSubCategoria()).should('contain', produtosElements.produtoCategoria)
        }
    }
export default produtos;