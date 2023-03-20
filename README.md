**Desafio - Analista de Testes de Software Jr - IATECAM**

Framework de teste utilizado: Cypress v12.8.1

Instruções para a execução:
1. É necessário realizar a instalação do NodeJs, o mesmo pode ser encontrado no link: [NodeJs](https://nodejs.org/en/download);
2. Uma vez que o NodeJs esteja instalado, crie uma pasta com um nome de sua preferência;
3. Abra o terminal do seu sistema operacional e navegue até a pasta criada no passo anterior;
4. Agora, execute o comando: **npm install cypress --save-dev**, esse comando irá instalar o Cypress de forma local, com as dependências de desenvolvimento;
5. Após finalizar a instalação, inicie o Cypress por meio do comando: **npx cypress open**;
![welcome cypress](/images/welcome.png)
6. Agora selecione a opção *"E2E Testing"*, e escolha o navegador em que os testes serão executados. Os testes desenvolvidos foram executados no <u>Google Chrome</u>, por isso recomenda-se o uso desse navegador para executa-los;
![welcome cypress](/images/browser.png)  
7. Agora, clique em *"Start E2E Testing in Chrome"*, uma uma nova janela será aberta em seu navegador;
![welcome cypress](/images/specs.png)
8. Na barra lateral esquerda, por padrão, estará selecionada a aba *"Specs"*, onde ficam armazenados os testes;
9. Copie o arquivo <u>01-teste-comparacao.cy.js</u> presente na pasta **3-automation** e cole na pasta <u>\cypress\e2e </u>, presente dentro da pasta criada no passo 2;
10. Volte para a aba do cypress, você já deve ser capaz de visualizar o teste adicionado. Para executá-lo, basta clicar com o botão esquerdo encima do teste.
![welcome cypress](/images/test.png)
Os arquivos originais do desafio podem ser encontrados no link: [Google Drive](https://drive.google.com/drive/folders/1VK3CQf4VJbGV44sTJtzpwfUlSw0RSqFx?usp=sharing)