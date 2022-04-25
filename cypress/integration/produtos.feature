Feature: Procurando por produto

Scenario: Procurar um produto existente
Given Eu acesso o site Practice Automation Testing
When Pesquiso um produto no campo de pesquisa
Then Devo verificar se o produto pesquisado foi listado no site

Scenario: Procurar um produto que não existe
Given Eu acesso o site Practice Automation Testing
When Pesquiso um produto inexistente no campo de pesquisa
Then Devo visualizar uma mensagem no site informando que o item não foi encontrado

Scenario: Lista um produto no site
Given Eu acesso o site Practice Automation Testing
When Acesso a sub categoria HTML dentro da categoria HTML
Then Devo conferir se o produto Thinking in HTML está listado no site