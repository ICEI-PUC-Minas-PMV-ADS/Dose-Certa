# Programação de Funcionalidades


Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo:

### Funcionalidade 08: Cadastrar Residências (RF-008)
A funcionalidade de Cadastro de Residência (RF-008) permite que um usuário cadastrado na plataforma `Dose Certa` insira informações sobre as residências dos pacientes. Ao fornecer detalhes como rua, número, cidade, bairro e complemento o usuário poderá posteriormente realizar outras atividades disponíveis na plataforma, tendo essas informações como base.

|ID    | Descrição do Requisito  | Artefato(s) produzido(s) |
|------|-----------------------------------------|----|
|RF-008| O sistema deve permitir o cadastro de informações sobre as residências dos pacientes. | AppMenu.tsx / residencia(page.tsx) / ResidenciaController / Residencia.cs(Models) / ResidenciaService.cs 

![Residencias](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/79332e65-bae0-4272-b744-6016784e6740)


##### Instruções de acesso
1. Acesse o site pelo [Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa?tab=readme-ov-file)
2. Certifique que o seu cadastro/login foi efetuado corretamente
3. No Menu clique em Residencias
4. Clique em + Novo
5. Cadastre em Residencias os dados rua, número, cidade, bairro e complemento
6. Clique no botão Salvar

##### Artefatos produzidos
* [AppMenu.tsx](api-web-frontend-dose-certa/layout/AppMenu.tsx)
* [residencia(page.tsx)](api-web-frontend-dose-certa/app/(main)/pages/residencia)
* [ResidenciaController](api-web-services-dose-certa/api-web-services-dose-certa/Controllers/ResidenciaController.cs)
* [Residencia.cs(Models)](api-web-services-dose-certa/api-web-services-dose-certa/Models/Residencia.cs)
* [ResidenciaService.cs](api-web-services-dose-certa/api-web-services-dose-certa/Services/ResidenciaService.cs)

