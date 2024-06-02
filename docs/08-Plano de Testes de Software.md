# Plano de Teste de Software

**Objetivo dos Testes de Software:** Validar as funcionalidades do sistema garantindo que cada uma delas atenda aos requisitos especificados e funcione corretamente.

### Cenário de Teste: Registro do Usuário

**Objetivo:** Verificar se o usuário consegue fazer o registro no sistema caso ele ainda não seja registrado.

**Descrição:** Testar a função de registro do usuário no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam utilizar o sistema.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT001 - Registro do Usuário** | Quando não há agente comunitário existente com o mesmo email, ao registrar um agente comunitário com tal email | O registro é finalizado com sucesso |
| **CT002 - Registro com Usuário Existente** | Quando há agente comunitário existente com o mesmo email, ao registrar um agente comunitário com tal email | O registro é finalizado com erro |

### Cenário de Teste: Login do Usuário

**Objetivo:** Assegurar que a funcionalidade de Login do usuário esteja operando adequadamente, possibilitando que os usuários entrem em suas contas usando credenciais corretas.

**Descrição:** Avaliar o processo de autenticação do usuário, fornecendo detalhes de login válidos e confirmando se a entrada é permitida no sistema.

**Grupo de Usuários:** Agentes comunitários cadastrados no sistema.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT003 - Login do Usuário** | Quando há agente comunitário existente com determinado email e determinada senha, ao realizar o login usando tal email e tal senha | O login é finalizado com sucesso, possibilitando a autenticação em outros casos de uso |
| **CT004 - Login do Usuário com Senha Errada** | Quando há agente comunitário existente com determinado email e determinada senha, ao realizar o login usando tal email e senha distinta | O login é finalizado com erro |
| **CT005 - Login do Usuário Inexistente** | Quando não há agente comunitário existente com determinado email, ao realizar o login usando tal email e qualquer senha | O login é finalizado com erro |

### Cenário de Teste: Registro de Pacientes

**Objetivo:** Verificar a funcionalidade de registro de novos pacientes.

**Descrição:** Testar a função de registrar novos pacientes no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam registrar pacientes.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT006 - Registro de Pacientes** | Quando o agente comunitário deseja registrar um novo paciente com informações completas e válidas | O paciente é registrado com sucesso |
| **CT007 - Edição de Pacientes** | Quando o agente comunitário deseja editar as informações de um paciente existente | As informações do paciente são atualizadas com sucesso |
| **CT008 - Exclusão de Pacientes** | Quando o agente comunitário deseja excluir um paciente existente | O paciente é excluído com sucesso |

### Cenário de Teste: Cadastro de Remédios

**Objetivo:** Verificar a funcionalidade de cadastro de novos remédios.

**Descrição:** Testar a função de cadastrar novos remédios no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam cadastrar remédios.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT009 - Cadastro de Remédios** | Quando o agente comunitário deseja cadastrar um novo remédio | O remédio é cadastrado com sucesso |
| **CT010 - Edição de Remédios** | Quando o agente comunitário deseja editar as informações de um remédio existente | As informações do remédio são atualizadas com sucesso |
| **CT011 - Exclusão de Remédios** | Quando o agente comunitário deseja excluir um remédio existente | O remédio é excluído com sucesso |

### Cenário de Teste: Cadastro de Medicamentos

**Objetivo:** Verificar a funcionalidade de criação de medicamentos a partir dos remédios cadastrados.

**Descrição:** Testar a função de criar medicamentos usando os remédios cadastrados no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam cadastrar medicamentos.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT012 - Cadastro de Medicamentos** | Quando o agente comunitário deseja criar um medicamento que é um conjunto de remédios cadastrados anteriormente | O medicamento é criado com sucesso |
| **CT013 - Edição de Medicamentos** | Quando o agente comunitário deseja editar as informações de um medicamento existente | As informações do medicamento são atualizadas com sucesso |
| **CT014 - Exclusão de Medicamentos** | Quando o agente comunitário deseja excluir um medicamento existente | O medicamento é excluído com sucesso |

### Cenário de Teste: Cadastro de Residências

**Objetivo:** Verificar a funcionalidade de cadastro de novas residências no sistema.

**Descrição:** Testar a função de cadastrar novas residências no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam cadastrar residências.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT015 - Cadastro de Residências** | Quando o agente comunitário deseja cadastrar uma nova residência | A residência é cadastrada com sucesso |
| **CT016 - Edição de Residências** | Quando o agente comunitário deseja editar as informações de uma residência existente | As informações da residência são atualizadas com sucesso |
| **CT017 - Exclusão de Residências** | Quando o agente comunitário deseja excluir uma residência existente | A residência é excluída com sucesso |

### Cenário de Teste: Registro de Visitas

**Objetivo:** Verificar a funcionalidade de registrar visitas utilizando as informações de residências previamente cadastradas.

**Descrição:** Testar a função de registrar visitas no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam registrar visitas.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT018 - Registro de Visitas** | Quando o agente comunitário deseja registrar uma nova visita a um paciente em uma residência cadastrada | A visita é registrada com sucesso |
| **CT019 - Edição de Visitas** | Quando o agente comunitário deseja editar as informações de uma visita existente | As informações da visita são atualizadas com sucesso |
| **CT020 - Exclusão de Visitas** | Quando o agente comunitário deseja excluir uma visita existente | A visita é excluída com sucesso |

### Cenário de Teste: Registro de Anotações

**Objetivo:** Verificar a funcionalidade de registrar anotações no sistema.

**Descrição:** Testar a função de registrar anotações no sistema.

**Grupo de Usuários:** Agentes comunitários que desejam registrar anotações.

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|--------------------|
| **CT021 - Registro de Anotações** | Quando o agente comunitário deseja adicionar uma anotação sobre uma visita ou paciente | A anotação é registrada com sucesso |
| **CT022 - Edição de Anotações** | Quando o agente comunitário deseja editar as informações de uma anotação existente | As informações da anotação são atualizadas com sucesso |
| **CT023 - Exclusão de Anotações** | Quando o agente comunitário deseja excluir uma anotação existente | A anotação é excluída com sucesso |

### Ferramentas de Testes

- **Modelagem dos cenários de teste:** Feita usando Cucumber-Gherkin.
- **Testes unitários do backend:** Executados usando Swigger.
