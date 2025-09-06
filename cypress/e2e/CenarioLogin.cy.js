
describe('Cenario 1: Login', () => {

  beforeEach(() => {
    //Dado que o usuário está na pagina de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login')
  })



  //teste case 1
  it('Login sem preenchimento de senha nem username', () => {
    //Quando o usuário não preenche os campos de username e senha

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que o campo username é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo senha é obrigatório
    //E o usuário permanece na página de login
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login')
  })

  //teste case 2
  it('Login com username preenchido mas senha sem preenchimento', () => {
    //Quando o usuário preenche o campo de username
    cy.xpath("//input[@placeholder='Username']").type('Admin');

    //E não preenche o campo de senha

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que o campo senha é obrigatório
    //E o usuário permanece na página de login

    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login') 

  })

  //teste case 3
  it('Login com senha preenchida mas username sem preenchimento', () => {
    //Quando o usuário não preenche o campo de username

    //E preenche o campo de senha
    cy.xpath("//input[@placeholder='Password']").type('admin123');

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que o campo username é obrigatório
    //E o usuário permanece na página de login
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login') 
  })

  //teste case 4
  it('Login com username "admin" tudo minusculo', () => {
    //Quando o usuário preenche o campo de username com "admin"
    cy.xpath("//input[@placeholder='Username']").type('admin');

    //E preenche o campo de senha com "admin123"
    cy.xpath("//input[@placeholder='Password']").type('admin123');

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que o usuário é inválido
    //E o usuário permanece na página de login
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login') 

  })

  //teste case 5
  it('Login com username e Senha corretos', () => {
    //Quando o usuário preenche o campo de username com "Admin"
    cy.xpath("//input[@placeholder='Username']").type('Admin');

    //E preenche o campo de senha com "admin123"
    cy.xpath("//input[@placeholder='Password']").type('admin123');

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema autentica o usuário
    //E o usuário é redirecionado para a página dashboard
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'dashboard')
      
  })

  //teste case 6
  it('Login com username "ADMIN" tudo maiusculo', () => {
    //Quando o usuário preenche o campo de username com "ADMIN"
    cy.xpath("//input[@placeholder='Username']").type('ADMIN');

    //E preenche o campo de senha com "admin123"
    cy.xpath("//input[@placeholder='Password']").type('admin123');

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que o usuário é inválido
    //E o usuário permanece na página de login
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login')
  })

  //teste case 7
  it('Login com Senha toda maiuscula', () => {
    //Quando o usuário preenche o campo de username com "Admin"
    cy.xpath("//input[@placeholder='Username']").type('Admin');

    //E preenche o campo de senha com "ADMIN123"
    cy.xpath("//input[@placeholder='Password']").type('ADMIN123');

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que a senha é inválida
    //E o usuário permanece na página de login
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login')

  })

  //teste case 8
  it('login com username e senha em chinês', () => {
    //Quando o usuário preenche o campo de username com "管理员"
    cy.xpath("//input[@placeholder='Username']").type('管理员');

    //E preenche o campo de senha com "密码123"
    cy.xpath("//input[@placeholder='Password']").type('管理员123');

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que o usuário é inválido
    //E o usuário permanece na página de login
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login')
  })

  //teste case 9
  it('login com username contendo emoji', () => {
    //Quando o usuário preenche o campo de username com "Admin😀"
    cy.xpath("//input[@placeholder='Username']").type('Admin😀');

    //E preenche o campo de senha com "admin123"
    cy.xpath("//input[@placeholder='Password']").type('admin123');

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que o usuário é inválido
    //E o usuário permanece na página de login
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login')

  })

  //teste case 10
  it('login com username e senha corretos, mas com espaços antes e depois', () => {
    //Quando o usuário preenche o campo de username com " Admin "
    cy.xpath("//input[@placeholder='Username']").type(' Admin ');

    //E preenche o campo de senha com " admin123 "
    cy.xpath("//input[@placeholder='Password']").type(' admin123 ');

    //E clica no botão de login
    cy.xpath("//button[@type='submit']").click();

    //Então o sistema exibe uma mensagem de erro informando que o usuário é inválido
    //E o usuário permanece na página de login
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login')

  })

})

