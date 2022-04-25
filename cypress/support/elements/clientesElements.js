class ClientesElements {
    minhaConta = () => {return '//*[@id="menu-item-50"]/a'}
    email = () => { return '//*[@name="email"]'}
    senha = () => { return '//*[@id="reg_password"]'}
    botaoRegister = () => {return '//*[@name="register"]'}
    detalhesConta = () => {return '//*[@id="page-36"]/div/div[1]/nav/ul/li[5]/a'}
    salvarDetalhes = () => {return '//*[@name="save_account_details"]'}

    dadoEmail = 'williamnilo4@yopmail.com'
    dadoSenha = 'Will@23032233'
    dadoNome = 'William'
    dadoSobrenome = 'Pereira'
    validarAlteracaoPerfil = 'Account details changed sucessfully'
    exibirDetalhes = () => {return '//*[@id="page-36"]/div/div[1]/div[2]/p[2]/a[3]'}

    campoNome = () => {return '//*[@id="account_first_name"]'}
    campoSobrenome = () => {return '//*[@id="account_last_name"]'}
    campoEmail = () => {return '#account_email'}
}

export default ClientesElements