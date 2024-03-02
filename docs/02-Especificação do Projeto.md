# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Fernanda Fernandes, Agente de saúde:

Idade: 25 anos

Localização: Juiz de Fora - Minas Gerais

Motivação: Aprimorar o controle da gestão das visitas e do tratamento dos pacientes.

Necessidades: Cadastrar medicamentos administrados aos paacientes, assim como cadastrar infomrações pertinentes as residências desses pacientes.



Rodrigo Rodrigues, Agente de saúde:

Idade: 45 anos

Localicação: Governador Valadares - Minas Gerais

Motivação: Otimizar a organização de terefas e de visitas a pacientes

Necessidades: Agendar visitas domiciliares aos pacientes, assim como visualizar uma lista com as visitas agendadas, e criar anotações relacionadas as tarefas pendentes.



Pedro Pedrosa, Aposentado:

Idade: 65 anos

Localização: Lajinha - Minas Gerais

Motivação: Facilitar a precisão nas dosagens e nos horários dos medicamentos receitados, assim como acompanhar com eficácia a necessidade de renovação das recetias.

Necessidades: Visualizar as dosagens e os horários de administração dos medicamentos, receber lembretes referentes as visitas agendadas dos agentes de saúde, e lembretes de renovação de receitas médicas.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Fernanda Fernandes  | Fornecer ajuda Remotamente         | Simplificar e agilizar o atendimento   |
|Fernanda Fernandes  | Conseguir ver o perfil dos pacientes |Saber o status do Paciente|  
|Fernanda Fernandes| Fazer alterações nos medicamentos quando necessário | Readequar os medicamentos se necessário a cada paciente |
|Fernanda Fernandes | Cadastrar Medicamentos | Colocar o horário correto dos equipamentos|
|Rodrigo Rodrigues  | Acompanhar o atendimento dos Pacientes| Verificar se ainda a necessidade de manutenção na rotina de medicamentos|
|Rodrigo Rodrigues  |  Agendar Visitas Presenciais| Deixar marcado o horário para comparecer ao local|
|Rodrigo Rodrigues  |Criar Notas pessoais sobre os pacientes| Adicionar alguma particularidade de cada paciente para ele mesmo|
|Rodrigo Rodrigues  |Criar relatórios | Criar relatórios sobre cada visita feita ao paciente|
|Pedro Pedrosa|Verificar a dosagem dos remédios|saber se está consumindo o remédios e forma correta|
|Pedro Pedrosa|Definir alarmes|definir alarmes  de lembrete através da aplicação |
|Pedro Pedrosa|Solicitar Atendimento Presencial|Realizar a solicitação de um atendimento presencial quando necessario|
|Pedro Pedrosa|ter um informativo das medicações|saber o'que é cada remédio e para que serve|


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Nos dias atuais, o gerenciamento de medicamentos é um desafio para agentes comunitários e pacientes devido ao controle manual e à comunicação ineficiente. A proposta é uma aplicação que irá automatizar o gerenciamento de medicamentos, fornecendo aos profissionais da saúde uma lista de controle digital e aos pacientes uma lista atualizada de horários e quantidades de medicamentos. Isso melhora a eficiência, a precisão e a comunicação entre agentes e pacientes.

### Descrição Geral da Proposta

O projeto propõe o desenvolvimento de uma aplicação de saúde com foco no gerenciamento eficiente de medicamentos para agentes de saúde e pacientes que visa centralizar informações essenciais, oferecendo aos agentes de saúde uma lista de controle das residências atendidas e aos pacientes uma listagem atualizada de horários e doses de medicamentos.

Limitações: A aplicação concentra-se exclusivamente no gerenciamento de medicamentos, não abrangendo outras áreas da saúde.

Alinhamento com Estratégias de Negócio: A proposta está alinhada com a estratégia de promover uma saúde melhor e mais eficaz, proporcionando soluções que facilitem o acesso e a administração de medicamentos.

Ao oferecer aos pacientes uma visão clara de seus medicamentos, a aplicação pode aumentar o engajamento e a adesão ao tratamento.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para a priorização dos requisitos, foi utilizado a técnica de escala de três níveis, sendo:
- Requisitos de Alta Prioridade: essenciais para o funcionamento do sistema.
- Requisitos de Média Prioridade: importantes, mas não críticos.
- Requisitos de Baixa Prioridade: podem ser implementados posteriormente.


### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir que os agentes comunitários e pacientes façam login usando credenciais válidas | ALTA | 
|RF-002| O sistema deve permitir que os usuários possam se cadastrar no sistema   | ALTA |
|RF-003| O sistema deve permitir que os agentes comunitários cadastrem, editem ou excluem medicamentos | MÉDIA |
|RF-004| O sistema deve permitir que os agentes comunitários cadastrem, editem ou excluem as medicações dos pacientes | ALTA |
|RF-005| O sistema deve permitir que os pacientes visualizem suas medicações registradas, incluindo informações sobre dosagem e horário de administração | ALTA |
|RF-006| O sistema deve permitir que os agentes comunitários agendem visitas domiciliares com os pacientes | ALTA |
|RF-007| O sistema deve enviar notificações aos pacientes sobre visitas agendadas | BAIXA |
|RF-008| O sistema deve permitir o cadastro de informações sobre as residências dos pacientes | BAIXA |
|RF-009| O sistema deve permitir que os usuários (agentes e pacientes) possam criar anotações relacionadas a tarefas pendentes ou lembretes | MÉDIA |
|RF-010| O sistema deve alertar os pacientes sobre o dia de renovação de receita para suas medicações | MÉDIA |
|RF-011| O sistema deve permitir que os agentes comunitários visualizem uma lista das visitas agendadas para o dia | ALTA |
|RF-012| O sistema deve permitir a interação entre pacientes e agentes comunitários por meio de um chat | BAIXA |
|RF-013| O sistema deve permitir que o agente comunitário gere relatórios  | BAIXA |

### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais ( que não se relacionam ao software) que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve garantir a confidencialidade dos dados dos pacientes e agentes comunitários | ALTA | 
|RNF-002| O sistema deve responder de forma rápida e eficiente, especialmente durante o agendamento de visitas e registro de medicações |  ALTA | 
|RNF-003| O tempo de carregamento das páginas deve ser otimizado para melhorar a experiência do usuário |  MÉDIA | 
|RNF-004| A interface do usuário deve ser intuitiva e fácil de usar, especialmente para os agentes comunitários que farão o agendamento de visitas |  MÉDIA | 
|RNF-005| O sistema deve ser projetado com recursos visuais claros e intuitivos para facilitar o entendimento de pessoas não alfabetizadas |  ALTA | 
|RNF-006| Os pacientes devem conseguir visualizar suas medicações de forma clara e acessível |  ALTA | 
|RNF-007| O sistema deve ser compatível com diferentes dispositivos e navegadores |  MÉDIA | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 23/06/2024 |
|RE-02| A aplicação não pode gerar custos |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho |
|RE-04| O sistema deve ser compatível com dispositivos móveis, permitindo que os agentes acessem e atualizem informações em seus smartphones ou tablets |
|RE-05| A arquitetura do sistema deve ser modular e escalável, facilitando a inclusão de novas funcionalidades e a integração com outros sistemas de saúde |
|RE-06| A interface do aplicativo deve ser intuitiva e fácil de usar, considerando que alguns usuários podem ter pouca experiência com tecnologia ou não serem alfabetizados |
|RE-06| O sistema deve ser capaz de operar offline para acomodar áreas sem acesso confiável à Internet |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. O caso de uso ilustrado no diagrama descreve o sistema para auxiliar agentes comunitários de saúde e pacientes no controle de visitas e medicações. 
O ator agente comunitário poderá se cadastrar no sistema, realizar login, agendar visitas com seus pacientes, registrar as medicações que cada paciente utiliza incluindo dosagem, frequência e horário de administração, e registrar anotações sobre cada paciente.
O ator paciente poderá se cadastrar no sistema, realizar login, consultar as medicações que utiliza, facilitando o controle do tratamento, e receber lembretes sobre a renovação de suas receitas.

![Use case diagram](/docs/img/Eixo%204%20-%20use%20case%20diagram.png)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

O gerenciamento adequado do projeto contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tempo, tarefas, pessoas e do orçamento, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

## Gerenciamento de Tempo e Equipe

Esta meticulosa planilha foi criada para organizar, monitorar e otimizar o gerenciamento de tempo e equipe. Seus principais aspectos são:

* Etapas e Tarefas: A planilha é dividida em etapas do projeto, cada uma com tarefas específicas. Ela oferece uma visão clara do cronograma, permitindo o acompanhamento do progresso de cada etapa.

* Responsabilidades: Cada tarefa é atribuída a determinado membro da equipe. Isso garante que todos saibam suas responsabilidades durante o projeto.

* Datas Importantes: As colunas de início e fim previstos ajudam a planejar prazos. É possivel visualizar quando cada tarefa deve ser concluída.

* Distribuição Equitativa: A seção de distribuição de tarefas mostra como o trabalho está dividido entre os membros da equipe. Isso promove uma abordagem colaborativa.

📌 OBS: A planilha será atualizada conforme o projeto avança. Isso permite ajustes, identificação de atrasos e tomada de decisões informadas.

![Gerenciamento de Tempo e Equipe](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/32b27395-ff87-4331-8c94-7b849172f947)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

A gestão de custos abaixo segue alinhada com valores reais do mercado de trabalho atual (2023-2024).

![Gestão de Orçamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/Dose-Certa/assets/83494301/785fca6d-8fc1-4c6a-9c6e-20d347ee2492)


