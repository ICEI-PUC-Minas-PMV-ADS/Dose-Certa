# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

### Cenário de Teste: Registro do Usuário

**Objetivo:** Verificar se o usuário consegue fazer o registro no sistema caso ele ainda não seja registrado.

**Descrição:** Testar a função de registro do usuário no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam utilizar o sistema.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT001 - Registro do Usuário** | Quando não há agente comunitário existente com o mesmo email, ao registrar um agente comunitário com tal email | O registro é finalizado com sucesso |
| **CT002 - Registro com Usuário Existente** | Quando há agente comunitário existente com o mesmo email, ao registrar um agente comunitário com tal email | O registro é finalizado com erro |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/4a79213e-51d2-498c-9070-ff2fcaa32234)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/2a76c669-1384-4b6d-bb83-8dcee6a93531)


### Cenário de Teste: Login do Usuário

**Objetivo:** Assegurar que a funcionalidade de Login do usuário esteja operando adequadamente, possibilitando que os usuários entrem em suas contas usando credenciais corretas.

**Descrição:** Avaliar o processo de autenticação do usuário, fornecendo detalhes de login válidos e confirmando se a entrada é permitida no sistema.

**Grupo de Usuários:** Agentes comunitários cadastrados no sistema.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT003 - Login do Usuário** | Quando há agente comunitário existente com determinado email e determinada senha, ao realizar o login usando tal email e tal senha | O login é finalizado com sucesso, possibilitando a autenticação em outros casos de uso |
| **CT004 - Login do Usuário com Senha Errada** | Quando há agente comunitário existente com determinado email e determinada senha, ao realizar o login usando tal email e senha distinta | O login é finalizado com erro |
| **CT005 - Login do Usuário Inexistente** | Quando não há agente comunitário existente com determinado email, ao realizar o login usando tal email e qualquer senha | O login é finalizado com erro |

### Cenário de Teste: Cadastro de Remédios

**Objetivo:** Verificar a funcionalidade de cadastro de novos remédios.

**Descrição:** Testar a função de cadastrar novos remédios no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam cadastrar remédios.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT009 - Cadastro de Remédios** | Quando o agente comunitário deseja cadastrar um novo remédio | O remédio é cadastrado com sucesso |
| **CT010 - Edição de Remédios** | Quando o agente comunitário deseja editar as informações de um remédio existente | As informações do remédio são atualizadas com sucesso |
| **CT011 - Exclusão de Remédios** | Quando o agente comunitário deseja excluir um remédio existente | O remédio é excluído com sucesso |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/ff50c91e-67fb-4278-b729-b2e42aebda83)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/c5d19b85-6979-4d2b-a226-41f5f61ab980)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/f3317cbd-1ee6-4d5d-ab6b-66e873d4ebdd)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/7ed37c9b-a17f-46ca-b9a8-ede0645b8ef7)

### Cenário de Teste: Cadastro de Medicamentos

**Objetivo:** Verificar a funcionalidade de criação de medicamentos a partir dos remédios cadastrados.

**Descrição:** Testar a função de criar medicamentos usando os remédios cadastrados no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam cadastrar medicamentos.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT012 - Cadastro de Medicamentos** | Quando o agente comunitário deseja criar um medicamento que é um conjunto de remédios cadastrados anteriormente | O medicamento é criado com sucesso |
| **CT013 - Edição de Medicamentos** | Quando o agente comunitário deseja editar as informações de um medicamento existente | As informações do medicamento são atualizadas com sucesso |
| **CT014 - Exclusão de Medicamentos** | Quando o agente comunitário deseja excluir um medicamento existente | O medicamento é excluído com sucesso |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/e0a3b5d4-3412-48e0-8e6c-942c8ffb1e79)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/8cacc716-8e3d-45bb-90cd-1804d5a19299)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/2567b13c-5d35-4fc1-a7f5-567e363cbd48)


### Cenário de Teste: Cadastro de Residências

**Objetivo:** Verificar a funcionalidade de cadastro de novas residências no sistema.

**Descrição:** Testar a função de cadastrar novas residências no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam cadastrar residências.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT015 - Cadastro de Residências** | Quando o agente comunitário deseja cadastrar uma nova residência | A residência é cadastrada com sucesso |
| **CT016 - Edição de Residências** | Quando o agente comunitário deseja editar as informações de uma residência existente | As informações da residência são atualizadas com sucesso |
| **CT017 - Exclusão de Residências** | Quando o agente comunitário deseja excluir uma residência existente | A residência é excluída com sucesso |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/89ab796b-86ce-4863-a918-fe1f39759409)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/f562ac05-d70d-4c29-80ef-cc4e5d180def)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/ce737711-6c6e-4424-8458-c08b1c2803e8)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/d2e4c9cd-c9f0-47ca-b6bc-5cea6a91d19d)


### Cenário de Teste: Registro de Visitas

**Objetivo:** Verificar a funcionalidade de registrar visitas utilizando as informações de residências previamente cadastradas.

**Descrição:** Testar a função de registrar visitas no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam registrar visitas.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT018 - Registro de Visitas** | Quando o agente comunitário deseja registrar uma nova visita a um paciente em uma residência cadastrada | A visita é registrada com sucesso |
| **CT019 - Edição de Visitas** | Quando o agente comunitário deseja editar as informações de uma visita existente | As informações da visita são atualizadas com sucesso |
| **CT020 - Exclusão de Visitas** | Quando o agente comunitário deseja excluir uma visita existente | A visita é excluída com sucesso |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/6c18c7b0-60ed-4e1c-ac00-06aebe46c626)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/1e487cc1-0361-4b27-95cb-aae7ebc122e0)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/e121b48c-2c72-4143-81ab-3027d35c72c6)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/885f8c70-b238-469d-9e35-b4305ea34fc4)


### Cenário de Teste: Registro de Anotações

**Objetivo:** Verificar a funcionalidade de registrar anotações no sistema.

**Descrição:** Testar a função de registrar anotações no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam registrar anotações.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT021 - Registro de Anotações** | Quando o agente comunitário deseja adicionar uma anotação sobre uma visita ou paciente | A anotação é registrada com sucesso |
| **CT022 - Edição de Anotações** | Quando o agente comunitário deseja editar as informações de uma anotação existente | As informações da anotação são atualizadas com sucesso |
| **CT023 - Exclusão de Anotações** | Quando o agente comunitário deseja excluir uma anotação existente | A anotação é excluída com sucesso |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/1b5ecd3f-0a65-41ca-ab6d-2998d6d3dd90)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/5d0303b3-3054-42fe-9605-51674bf2bae6)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/a5bdc51a-6dfc-4aba-b5e5-2a3046ab724b)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/33f152e8-fe98-4def-a150-bf75042b6b38)


### Ferramentas de Testes

- **Modelagem dos cenários de teste:** Feita usando Cucumber-Gherkin.
- **Testes unitários do backend:** Executados usando Swigger.
