describe('Cenario 2: Cadastro', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
  // impede que o Cypress falhe o teste em caso de erro não tratado
  return false
  });


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

  afterEach(() => {

    cy.wait(2000);

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

  //teste case 4
  it('Selecionar somente admin no campo User Role, preencher Employee Name, selecionar status e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Username é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Password é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Confirm Password é obrigatório
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

  })

  //teste case 5
  it('Selecionar somente admin no campo User Role, preencher Employee Name, selecionar status, preencher username e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('a');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Username deve ter pelo menos 5 caracteres
    //E o sistema exibe uma mensagem de erro informando que o campo Password é obrigatório
    //E o sistema exibe uma mensagem de erro informando que o campo Confirm Password é obrigatório
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');


  })

  //teste case 6
  it('Selecionar somente admin no campo User Role, preencher Employee Name, selecionar status, preencher username, preencher password e confirmar password diferentes e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('Felipe');

    //E preenche o campo Password
    cy.xpath("//*[@autocomplete='off']").eq(1).type('a');

    //E preenche o campo Confirm Password
    cy.xpath("//*[@autocomplete='off']").eq(2).type('a');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Password deve ter pelo menos 7 caracteres
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

  })

  //teste case 7
  it('Selecionar somente admin no campo User Role, preencher Employee Name, selecionar status, preencher username, preencher password e confirmar password somente com letras e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('Felipe');

    //E preenche o campo Password
    cy.xpath("//*[@autocomplete='off']").eq(1).type('abcdefghijklmnop');

    //E preenche o campo Confirm Password
    cy.xpath("//*[@autocomplete='off']").eq(2).type('abcdefghijklmnop');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Password deve ter pelo menos 1 numero
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
  })

  //teste case 8
  it('preencher todos os campos, porem com a senha somente com numeros e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('Felipe');

    //E preenche o campo Password
    cy.xpath("//*[@autocomplete='off']").eq(1).type('123456789');

    //E preenche o campo Confirm Password
    cy.xpath("//*[@autocomplete='off']").eq(2).type('123456789');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Password deve ter pelo menos 1 letra minuscula
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
  })

  //teste case 9
  it('preencher todos os campos, porem com a senha e confirmação de senha diferentes e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('Felipe');

    //E preenche o campo Password
    cy.xpath("//*[@autocomplete='off']").eq(1).type('asenhaeumacoisa1');

    //E preenche o campo Confirm Password
    cy.xpath("//*[@autocomplete='off']").eq(2).type('asenhaeumacoisa2');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Password e confirm password não são iguais
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

  })

  //test case 10
  it('Preencher todos os campos, porém preencher username com o maximo de caracteres permitidos e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

    //E preenche o campo Password
    cy.xpath("//*[@autocomplete='off']").eq(1).type('senhacerta1');

    //E preenche o campo Confirm Password
    cy.xpath("//*[@autocomplete='off']").eq(2).type('senhacerta1');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo username deve ter no máximo 40 caracteres
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

  })

  //test case 11
  it('preencher todos os campos, porem preencher a senha com o maximo de caracteres permitidos e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('Felipe');

    //E preenche o campo Password
    cy.xpath("//*[@autocomplete='off']").eq(1).type('kjhchgsdchvsdkchvsdc1dckjvhsdcjhbsd253sdcmhgsvdkjhsdchjbsdc321sc654sdc987sdc321ds654dsc987sdc321sdc654sd987');

    //E preenche o campo Confirm Password
    cy.xpath("//*[@autocomplete='off']").eq(2).type('kjhchgsdchvsdkchvsdc1dckjvhsdcjhbsd253sdcmhgsvdkjhsdchjbsdc321sc654sdc987sdc321ds654dsc987sdc321sdc654sd987');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Password deve ter no máximo 64 caracteres
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

  })

  //teste case 12
  it('prrencher todos os campos, porem com espaços na senha e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('Felipe');

    //E preenche o campo Password
    cy.xpath("//*[@autocomplete='off']").eq(1).type('a senha com espaço1');

    //E preenche o campo Confirm Password
    cy.xpath("//*[@autocomplete='off']").eq(2).type('a senha com espaço1');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    //Então o sistema exibe uma mensagem de erro informando que o campo Password não deve conter espaços
    //E o usuário permanece na página de save sistem user
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
  })

  //teste case 13
  it('preencher todos os campos corretamente e clicar em save', () => {
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

    //E seleciona o campo Status
    cy.get('.oxd-select-text-input').eq(1).click();

    //E seleciona a opção Enabled
    cy.contains('.oxd-select-option', 'Enabled').click();

    //E verifica se o campo Status exibe a opção Enabled selecionada
    cy.get('.oxd-select-text-input')
    .eq(1)
    .should('contain.text', 'Enabled');

    //E preenche o campo Username
    cy.xpath("//*[@autocomplete='off']").eq(0).type('mesquita');

    //E preenche o campo Password
    cy.xpath("//*[@autocomplete='off']").eq(1).type('senhacorreta1');

    //E preenche o campo Confirm Password
    cy.xpath("//*[@autocomplete='off']").eq(2).type('senhacorreta1');

    //E clica no botão Save
    cy.contains('button', 'Save').click();

    cy.wait(2000);

    //Então o sistema cadastra o novo usuário
    //E o usuário é redirecionado para a página user management
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

    cy.wait(2000);

    //e verifica se o novo usuário cadastrado está na lista
    cy.contains('mesquita').should('be.visible');
  
  })

})