describe('Cenario 2: Cadastro', () => {

   beforeEach(() => {
    //Dado que o usuário está na pagina de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url()
      .should('include', 'orangehrmlive')
      .should('include', 'login')

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


  //teste case 1
  it('Clicar no botão save sem preencher nenhum campo', () => {
    //Quando o usuário clica no menu Admin
    cy.get('.oxd-main-menu-item--name').contains('Admin').click();

    //E clica no botão Add
    cy.contains('button', 'Add').click();

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo User Role é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Employee Name é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Status é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Username é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Password é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Confirm Password é obrigatório
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

  })

  //teste case 2
  it('selecionar somente admin no campo User Role e clicar em save', () => {
    //Quando o usuário clica no menu Admin
    cy.get('.oxd-main-menu-item--name').contains('Admin').click();

    //E clica no botão Add
    cy.contains('button', 'Add').click();

    //E seleciona o campo User Role
    cy.get('.oxd-select-text-input').eq(0).click();

    //E seleciona a opção Admin
    cy.contains('.oxd-select-option', 'Admin').click();

    //E verifica se o campo User Role exibe a opção Admin selecionada
    cy.get('.oxd-select-text-input')
    .eq(0)
    .should('contain.text', 'Admin');

    //E clica no botão Save
    cy.contains('button', 'Save').click();
    //Então o sistema exibe uma mensagem de erro informando que o campo Employee Name é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Status é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Username é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Password é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Confirm Password é obrigatório
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
  })

  //teste case 3
  it('Selecionar somente admin no campo User Role, preencher Employee Name e clicar em save', () => {
    //Quando o usuário clica no menu Admin
    cy.get('.oxd-main-menu-item--name').contains('Admin').click();

    //E clica no botão Add
    cy.contains('button', 'Add').click();

    //E seleciona o campo User Role
    cy.get('.oxd-select-text-input').eq(0).click();

    //E seleciona a opção Admin
    cy.contains('.oxd-select-option', 'Admin').click();

    //E verifica se o campo User Role exibe a opção Admin selecionada
    cy.get('.oxd-select-text-input')
    .eq(0)
    .should('contain.text', 'Admin');

    //E preenche o campo Employee Name
    cy.xpath("//input[@placeholder='Type for hints...']").type('a');
    cy.wait(3000);
    cy.xpath("//input[@placeholder='Type for hints...']").type('{downarrow}{enter}');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Status é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Username é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Password é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Confirm Password é obrigatório
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

  })


})