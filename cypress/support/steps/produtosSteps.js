/* global Given, Then, When */

import produtosPages from '../pageObjects/produtos'
const produtos = new produtosPages

// Scenario 01
Given("Eu acesso o site Practice Automation Testing", () => {
    produtos.acessarSite();
})

When("Pesquiso um produto no campo de pesquisa", () => {
    produtos.pesquisarProduto();
})

Then("Devo verificar se o produto pesquisado foi listado no site", () => {
    produtos.verificarProduto();
})

// Scenario 02
When("Pesquiso um produto inexistente no campo de pesquisa", () => {
    produtos.pesquisarProdutoInexistente();
})

Then("Devo visualizar uma mensagem no site informando que o item não foi encontrado", () => {
    produtos.verificarProdutoInexistente();
})

// Scenario 03

When("Acesso a sub categoria HTML dentro da categoria HTML", () => {
    produtos.pesquisarCategoriaHTML();
})

Then("Devo conferir se o produto Thinking in HTML está listado no site", () => {
    produtos.verificarProdutoListado();
})