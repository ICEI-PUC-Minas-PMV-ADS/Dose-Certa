# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

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
|RNF-007| DO sistema deve ser compatível com diferentes dispositivos e navegadores |  MÉDIA | 


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

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.


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

![Gerenciamento de Tempo e Equipe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t2-pmv-ads-2024-1-e4-proj-dad-t2-grupo9/assets/83494301/4597f311-6e4f-4480-ac17-7d2cb626761d)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Gestão de custos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t2-pmv-ads-2024-1-e4-proj-dad-t2-grupo9/assets/83494301/8f67c267-62c4-4e4c-a5dc-c964fdbcdd90)

