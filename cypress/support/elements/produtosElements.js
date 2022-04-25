class ProdutosElements {
    // Scenario 01 - Procurar um produto existente
    botaoMenu = () => {return '#menu-icon'}
    botaoPesquisar = () => {return '//*[@name="s"]'}
    nomeProduto = 'HTML{enter}'
    validaNomeProduto = 'Android Quick Start'
    validaProduto = () => {return '//*[@id="loops-wrapper"]'}
    
    // Scenario 02 - Procurar um produto inexistente
    nomeProdutoInexistente = 'ItemNãoExiste{enter}'
    validaProdutoInexistente = () => { return '//*[@id="content"]/p'}
    mensagemNotFound = 'Sorry, nothing found.'
    validaNomeInexistente = () => {return '//*[@id="content"]/h1/em'}
    produtoInexistente = 'ItemNãoExiste'
    
    // Scenario 03 - Listar Produto na Sub Categoria HTML
    categoriaHTML = () => {return '//*[@id="menu-item-40"]'}
    subCategoriaHTML = () => {return '.cat-item-19 > a'}
    verificaNomeSubCategoria = () => {return '//*[@class="products masonry-done"]'}
    produtoCategoria = 'Thinking in HTML'
}

export default ProdutosElements