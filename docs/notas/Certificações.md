# Certificações 


# AZ-900 — MICROSOFT AZURE


# PARTE 1 — FUNDAMENTOS DA COMPUTAÇÃO EM NUVEM


## 1. O QUE É COMPUTAÇÃO EM NUVEM (CLOUD COMPUTING)?


Computação em nuvem é a disponibilização de recursos e serviços de tecnologia pela Internet, permitindo que empresas e usuários utilizem infraestrutura computacional sem precisar adquirir e manter todos os equipamentos fisicamente.


Esses recursos podem incluir:

- Servidores;
- Máquinas virtuais;
- Armazenamento;
- Bancos de dados;
- Redes;
- Aplicações;
- Serviços de inteligência artificial;
- Ferramentas de segurança;
- Serviços de análise de dados.

Em vez de comprar equipamentos, instalar servidores e construir um datacenter próprio, uma organização pode contratar esses recursos de um provedor de nuvem, como a Microsoft Azure.


### 1.1. Como funciona na prática?


Imagine uma empresa que possui um sistema de vendas.


Esse sistema precisa de:

1. Um servidor para executar a aplicação;
2. Um banco de dados para armazenar clientes e pedidos;
3. Armazenamento para guardar documentos e imagens;
4. Uma rede para permitir a comunicação;
5. Recursos de segurança para controlar os acessos.

Tradicionalmente, a empresa precisaria adquirir equipamentos, configurar a infraestrutura e manter os servidores.


Com a computação em nuvem, ela pode contratar os serviços necessários pela Internet e pagar conforme as condições do serviço contratado.


### 1.2. Infraestrutura local x computação em nuvem


**Infraestrutura local (On-premises):**


A empresa mantém seus próprios equipamentos e datacenter.


É responsável por atividades como:

- Comprar servidores;
- Manter equipamentos;
- Configurar redes;
- Administrar sistemas operacionais;
- Garantir energia e refrigeração;
- Substituir equipamentos defeituosos;
- Proteger fisicamente a infraestrutura.

**Computação em nuvem:**


A empresa utiliza recursos disponibilizados por um provedor.


O provedor administra a infraestrutura física, enquanto a empresa administra as partes do serviço que permanecem sob sua responsabilidade.


### Comparação


| Infraestrutura local                           | Computação em nuvem                                         |
| ---------------------------------------------- | ----------------------------------------------------------- |
| Exige investimento em equipamentos             | Permite contratar recursos sob demanda                      |
| A empresa mantém o datacenter                  | O provedor mantém a infraestrutura física                   |
| Expansão depende da aquisição de equipamentos  | Pode aumentar recursos conforme a necessidade               |
| Exige manutenção física                        | Parte da manutenção é responsabilidade do provedor          |
| Capacidade depende da infraestrutura adquirida | Capacidade pode ser ajustada conforme os limites do serviço |


**Importante:** utilizar a nuvem não significa que a empresa deixa de administrar seus sistemas, aplicações, dados e acessos.


### 1.3. O que é um provedor de nuvem?


Um provedor de nuvem é uma empresa que disponibiliza serviços de computação, armazenamento, rede e outras tecnologias pela Internet.


Alguns dos principais provedores são:

- Microsoft Azure;
- Amazon Web Services (AWS);
- Google Cloud Platform (GCP).

Essas empresas mantêm grandes infraestruturas de datacenters e disponibilizam recursos para clientes que desejam utilizar serviços de nuvem.


### 1.4. Virtualização


Virtualização é uma tecnologia que permite criar representações virtuais de recursos computacionais físicos.


Por meio dela, um único servidor físico pode executar várias máquinas virtuais, cada uma com seu próprio sistema operacional e ambiente de execução.


**Exemplo prático:**


Imagine um servidor físico com capacidade suficiente para executar diferentes máquinas virtuais.


Uma empresa pode utilizar esse servidor para executar:

- Uma máquina virtual com Windows Server;
- Uma máquina virtual com Linux;
- Outra máquina virtual para hospedar um banco de dados.

Cada máquina virtual funciona como um ambiente computacional independente, embora compartilhe a infraestrutura física.


### Por que a virtualização é importante para a nuvem?

- Permite aproveitar melhor os recursos físicos;
- Facilita a criação de ambientes computacionais;
- Permite executar diferentes sistemas operacionais;
- Ajuda a separar aplicações e ambientes;
- Facilita o provisionamento de recursos.

**Atenção:** virtualização e computação em nuvem não são sinônimos. A virtualização é uma tecnologia que pode ser utilizada para fornecer serviços de nuvem, mas a computação em nuvem envolve também gerenciamento, acesso, provisionamento e disponibilização de serviços.


---


## 2. MODELOS DE IMPLANTAÇÃO DA NUVEM


Existem três modelos principais de implantação da computação em nuvem:

- Nuvem pública (Public Cloud);
- Nuvem privada (Private Cloud);
- Nuvem híbrida (Hybrid Cloud).

Cada modelo apresenta características diferentes de infraestrutura, controle e utilização.


### 2.1. Nuvem pública (Public Cloud)


Na nuvem pública, os serviços são disponibilizados por um provedor de nuvem e compartilhados entre diferentes clientes em uma infraestrutura do provedor.


Isso não significa que os clientes tenham acesso aos dados uns dos outros.


Os ambientes são logicamente separados e protegidos por mecanismos de segurança e isolamento.


**Exemplos de provedores:**

- Microsoft Azure;
- Amazon Web Services (AWS);
- Google Cloud Platform (GCP).

**Características:**

- Infraestrutura mantida pelo provedor;
- Recursos disponibilizados pela Internet;
- Possibilidade de aumentar ou reduzir recursos;
- Cobrança conforme o serviço contratado;
- Menor necessidade de manter datacenter próprio.

**Exemplo prático:**


Uma startup deseja hospedar seu sistema de vendas, mas não possui dinheiro para construir um datacenter.


Ela contrata máquinas virtuais, banco de dados e armazenamento de um provedor de nuvem pública.


Assim, consegue executar seu sistema sem comprar todos os equipamentos.


### 2.2. Nuvem privada (Private Cloud)


Na nuvem privada, a infraestrutura é destinada exclusivamente a uma organização.


Pode ser mantida pela própria empresa ou por um provedor contratado.


**Características:**

- Ambiente exclusivo para uma organização;
- Maior possibilidade de controle sobre a infraestrutura;
- Possibilidade de personalização;
- Pode atender requisitos específicos de segurança e conformidade;
- Pode exigir maior investimento e administração.

**Exemplo prático:**


Uma instituição possui requisitos específicos de controle e decide manter uma infraestrutura de nuvem privada destinada exclusivamente às suas operações.


### 2.3. Nuvem híbrida (Hybrid Cloud)


A nuvem híbrida combina ambientes de nuvem pública e privada ou infraestrutura local com serviços de nuvem pública.


Permite que a organização mantenha determinados sistemas em seu próprio ambiente e utilize serviços de nuvem para outras necessidades.


**Exemplo prático:**


Um banco mantém determinados sistemas e dados em sua infraestrutura privada, mas utiliza a nuvem pública para hospedar aplicações e serviços que precisam de maior flexibilidade.


Outro exemplo seria uma empresa que mantém seu banco de dados localmente, mas hospeda sua aplicação web na Azure.


### 2.4. Comparação dos modelos


| Característica          | Pública                                               | Privada                         | Híbrida                          |
| ----------------------- | ----------------------------------------------------- | ------------------------------- | -------------------------------- |
| Infraestrutura          | Provedor                                              | Dedicada a uma organização      | Combinação de ambientes          |
| Compartilhamento físico | Infraestrutura do provedor atende diferentes clientes | Uso exclusivo da organização    | Depende dos ambientes            |
| Controle                | Depende do serviço contratado                         | Maior controle sobre o ambiente | Combina diferentes níveis        |
| Personalização          | Conforme o serviço                                    | Geralmente maior                | Conforme cada ambiente           |
| Exemplo                 | Aplicação hospedada na Azure                          | Nuvem exclusiva de uma empresa  | Banco local e aplicação na nuvem |


### 2.5. Vantagens e limitações


**Nuvem pública**


Vantagens:

- Menor necessidade de investimento inicial em infraestrutura física;
- Facilidade para contratar recursos;
- Possibilidade de escalabilidade;
- Infraestrutura física administrada pelo provedor.

Limitações:

- Dependência do provedor;
- Menor controle sobre a infraestrutura física;
- Necessidade de avaliar requisitos de segurança, conformidade e localização dos dados.

**Nuvem privada**


Vantagens:

- Maior controle sobre o ambiente;
- Possibilidade de personalização;
- Infraestrutura dedicada à organização.

Limitações:

- Pode exigir maior investimento;
- Pode exigir equipe especializada;
- A organização pode ter mais responsabilidades de manutenção.

**Nuvem híbrida**


Vantagens:

- Combina diferentes ambientes;
- Permite manter determinados sistemas localmente;
- Oferece flexibilidade na distribuição das cargas de trabalho.

Limitações:

- Pode aumentar a complexidade de gerenciamento;
- Exige integração entre ambientes;
- Requer atenção à segurança e à comunicação entre infraestruturas.

### 2.6. Como identificar em uma questão?


**Situação 1:**


Uma empresa contrata serviços da Microsoft Azure para hospedar sua aplicação.


Resposta: nuvem pública.


**Situação 2:**


Uma organização mantém uma infraestrutura de nuvem exclusiva para suas operações.


Resposta: nuvem privada.


**Situação 3:**


Uma empresa mantém parte dos sistemas em seu datacenter e utiliza a nuvem pública para outras aplicações.


Resposta: nuvem híbrida.


**Atenção:** não confunda nuvem pública com dados públicos. O modelo público diz respeito à infraestrutura disponibilizada pelo provedor, não significa que as informações armazenadas sejam abertas a qualquer pessoa.


## 3. MODELOS DE DESPESAS: CAPEX E OPEX


Ao trabalhar com infraestrutura de tecnologia, uma empresa precisa considerar os custos relacionados à aquisição, manutenção e utilização dos recursos.


Existem dois conceitos importantes:

- CapEx;
- OpEx.

### 3.1. CapEx — Capital Expenditure (Despesas de Capital)


CapEx representa investimentos realizados na aquisição de bens e infraestrutura que serão utilizados por um período prolongado.


No contexto de tecnologia, pode envolver:

- Compra de servidores;
- Aquisição de equipamentos de rede;
- Construção de datacenters;
- Compra de sistemas físicos;
- Aquisição de equipamentos de armazenamento.

**Exemplo prático:**


Uma empresa decide construir seu próprio datacenter.


Para isso, precisa comprar servidores, equipamentos de rede, sistemas de refrigeração e outros componentes.


Esse investimento inicial representa CapEx.


### Características do CapEx

- Exige investimento inicial;
- Envolve aquisição de bens;
- Os equipamentos podem ser utilizados por vários anos;
- A empresa assume os custos de manutenção;
- A capacidade depende dos recursos adquiridos.

### 3.2. OpEx — Operational Expenditure (Despesas Operacionais)


OpEx representa despesas relacionadas à operação e utilização de produtos e serviços.


Na computação em nuvem, está associado ao pagamento pelos recursos contratados e consumidos, conforme as condições de cobrança.


**Exemplo prático:**


Uma empresa utiliza máquinas virtuais, armazenamento e banco de dados na Azure.


Em vez de comprar servidores, paga pelos serviços conforme o modelo de cobrança aplicável.


Esse tipo de despesa está relacionado ao OpEx.


### Características do OpEx

- Pagamento relacionado à utilização ou contratação de serviços;
- Menor necessidade de investimento inicial em equipamentos;
- Possibilidade de ajustar recursos;
- Despesas operacionais;
- Maior flexibilidade na contratação.

### 3.3. Comparação entre CapEx e OpEx


| CapEx                                  | OpEx                                                   |
| -------------------------------------- | ------------------------------------------------------ |
| Investimento de capital                | Despesa operacional                                    |
| Compra de equipamentos                 | Contratação de serviços                                |
| Exige investimento inicial             | Pode envolver pagamento conforme utilização            |
| Equipamentos são mantidos pela empresa | Parte da infraestrutura pode ser mantida pelo provedor |
| Exemplo: comprar servidores            | Exemplo: contratar máquinas virtuais na nuvem          |


### 3.4. Relação com a computação em nuvem


A computação em nuvem permite que muitas empresas reduzam a necessidade de investimentos iniciais em infraestrutura física.


Em vez de comprar servidores antecipadamente, podem contratar recursos de acordo com a necessidade.


Isso pode transformar parte dos custos de infraestrutura em despesas operacionais.


**Exemplo comparativo:**


Uma empresa precisa de capacidade computacional para executar um sistema.


**Cenário A — CapEx:**


A empresa compra servidores, equipamentos de rede e armazenamento para montar sua própria infraestrutura.


**Cenário B — OpEx:**


A empresa contrata máquinas virtuais, armazenamento e outros serviços de um provedor de nuvem.


No segundo cenário, ela reduz a necessidade de comprar toda a infraestrutura física antecipadamente.


**Importante:** utilizar nuvem não significa que todos os custos sejam necessariamente OpEx em qualquer situação contábil. Para a prova, a associação principal é:

- Compra de infraestrutura física: CapEx.
- Contratação e utilização de serviços: OpEx.

### 3.5. Como identificar na prova?


**Situação 1:**


Uma empresa compra servidores para montar um datacenter próprio.


Resposta: CapEx.


**Situação 2:**


Uma organização contrata serviços de armazenamento na nuvem e paga conforme as condições do serviço.


Resposta: OpEx.


**Situação 3:**


Uma empresa deseja evitar um grande investimento inicial na compra de equipamentos.


Resposta: a computação em nuvem pode ajudar a reduzir a necessidade de CapEx.


---


## 4. MODELO BASEADO NO CONSUMO (CONSUMPTION-BASED MODEL)


O modelo baseado no consumo permite que o cliente pague de acordo com a quantidade de recursos ou serviços utilizados, conforme as regras de cobrança do provedor.


Esse modelo é uma das principais características da computação em nuvem.


### 4.1. Como funciona?


Imagine uma aplicação que utiliza:

- Uma máquina virtual;
- Armazenamento;
- Banco de dados;
- Transferência de dados.

A cobrança pode considerar diferentes fatores, como:

- Tempo de utilização;
- Capacidade provisionada;
- Quantidade de armazenamento;
- Operações realizadas;
- Transferência de dados;
- Nível de serviço contratado.

Cada serviço possui suas próprias regras de cobrança.


### 4.2. Exemplo prático


Uma empresa possui um sistema utilizado principalmente durante o horário comercial.


Ela contrata recursos na nuvem e acompanha o consumo.


Se aumentar a utilização de determinado serviço, o custo pode aumentar conforme o modelo de cobrança.


Se reduzir a utilização, pode diminuir os custos, desde que também ajuste os recursos e as condições de contratação.


### 4.3. Principais características

- Pagamento relacionado ao consumo dos recursos;
- Possibilidade de contratar serviços conforme a necessidade;
- Menor necessidade de adquirir infraestrutura antecipadamente;
- Monitoramento dos gastos;
- Flexibilidade para ajustar a capacidade;
- Possibilidade de reduzir custos quando os recursos são corretamente dimensionados.

### 4.4. Vantagens do modelo baseado no consumo


**1. Flexibilidade**


A empresa pode contratar recursos conforme suas necessidades, sem precisar adquirir toda a infraestrutura antecipadamente.


**2. Controle de custos**


É possível acompanhar o consumo e identificar quais serviços estão gerando despesas.


**3. Escalabilidade**


A organização pode ajustar a capacidade dos recursos conforme o crescimento ou a redução da demanda.


**4. Menor investimento inicial**


A empresa não precisa necessariamente comprar servidores e equipamentos para começar a utilizar os serviços.


### 4.5. Relação entre consumo e escalabilidade


O modelo baseado no consumo pode trabalhar em conjunto com a escalabilidade.


Imagine uma loja virtual que recebe poucos acessos durante a madrugada e muitos acessos durante uma promoção.


A infraestrutura pode ser dimensionada de acordo com a demanda.


Quando os recursos aumentam, os custos podem aumentar também. Quando são reduzidos, os custos podem diminuir conforme o modelo de cobrança.


Isso permite alinhar a capacidade computacional às necessidades da aplicação.


### 4.6. Atenção: pagar pelo consumo não significa que tudo é gratuito quando não está sendo utilizado


Alguns recursos podem continuar gerando cobrança enquanto estiverem provisionados, mesmo que a aplicação não esteja recebendo usuários.


Por exemplo, uma máquina virtual pode continuar gerando custos enquanto estiver ligada, mesmo sem receber acessos.


Além disso, determinados recursos de armazenamento e serviços possuem regras próprias de cobrança.


Por isso, é importante monitorar os recursos e entender o modelo de cobrança de cada serviço.


### 4.7. Ferramentas relacionadas ao controle de custos no Azure


A Microsoft Azure disponibiliza ferramentas que ajudam as organizações a acompanhar e planejar seus gastos.


**Azure Pricing Calculator (Calculadora de Preços do Azure)**


Permite estimar os custos de serviços antes de contratá-los.


Pode ser utilizada para comparar configurações e planejar despesas.


**Azure Cost Management**


Permite acompanhar e analisar os custos relacionados aos serviços utilizados.


Ajuda a identificar gastos, acompanhar tendências e controlar o orçamento.


**Azure Budgets (Orçamentos)**


Permite estabelecer limites de orçamento e configurar alertas quando os gastos atingem determinados valores ou condições.


Essas ferramentas serão estudadas com mais profundidade na parte de gerenciamento e governança.


### 4.8. Comparação dos conceitos


| Conceito                  | Significado                                    | Exemplo                                     |
| ------------------------- | ---------------------------------------------- | ------------------------------------------- |
| CapEx                     | Investimento em infraestrutura e bens          | Comprar servidores                          |
| OpEx                      | Despesa operacional                            | Contratar serviços de nuvem                 |
| Modelo baseado no consumo | Cobrança relacionada à utilização dos recursos | Pagar pelo uso de armazenamento             |
| Pricing Calculator        | Estimar custos                                 | Simular o preço de uma máquina virtual      |
| Cost Management           | Acompanhar e analisar gastos                   | Ver quanto a empresa gastou                 |
| Budgets                   | Definir orçamentos e alertas                   | Receber alerta ao atingir determinado gasto |


### 4.9. Como identificar na prova?


**Situação 1:**


Uma empresa deseja pagar conforme a utilização de recursos computacionais.


Resposta: modelo baseado no consumo.


**Situação 2:**


Uma organização deseja estimar quanto custará hospedar uma aplicação antes de contratar os serviços.


Resposta: Azure Pricing Calculator.


**Situação 3:**


Uma empresa deseja acompanhar os gastos realizados com os serviços de nuvem.


Resposta: Azure Cost Management.


**Situação 4:**


Uma organização deseja estabelecer um orçamento e receber alertas quando os gastos atingirem determinado valor.


Resposta: Azure Budgets.


**Situação 5:**


Uma empresa mantém uma máquina virtual provisionada e acredita que não haverá cobrança porque não está recebendo usuários.


Resposta: afirmação incorreta. A cobrança depende das condições do serviço e do estado do recurso, não apenas da quantidade de usuários.


## 5. Benefícios da computação em nuvem


A computação em nuvem oferece benefícios que ajudam empresas a executar aplicações, armazenar dados e administrar recursos de tecnologia com mais flexibilidade.


Para a certificação AZ-900, é importante conhecer esses benefícios e, principalmente, saber diferenciá-los.


### 5.1 Alta disponibilidade (High Availability)


Alta disponibilidade é a capacidade de um serviço permanecer acessível e funcionando durante o maior tempo possível.


O objetivo é reduzir interrupções e evitar que uma falha impeça os usuários de acessar o serviço.


**Exemplo:**


Um sistema de uma empresa precisa ficar disponível para seus funcionários durante todo o expediente. Para isso, sua infraestrutura pode utilizar componentes redundantes, reduzindo o risco de uma falha interromper o serviço.


**Atenção:** alta disponibilidade não significa que um serviço nunca ficará fora do ar. Significa que sua arquitetura busca minimizar o tempo de indisponibilidade.


### 5.2 Escalabilidade (Scalability)


Escalabilidade é a capacidade de aumentar ou diminuir os recursos de um sistema para atender às necessidades de processamento.


Existem dois tipos principais:


**Escalabilidade vertical (Scale Up / Scale Down)**


Consiste em aumentar ou diminuir a capacidade de uma máquina existente.


Exemplo:

- Aumentar a memória RAM de um servidor.
- Adicionar mais capacidade de processamento.
- Reduzir os recursos quando não forem mais necessários.

**Escalabilidade horizontal (Scale Out / Scale In)**


Consiste em adicionar ou remover máquinas ou instâncias para distribuir o processamento.


Exemplo:

- Uma aplicação recebe muitos acessos.
- Em vez de aumentar a capacidade de apenas um servidor, a empresa adiciona outros servidores.
- O processamento passa a ser distribuído entre eles.

**Comparação:**


| Tipo       | Como funciona                       | Exemplo          |
| ---------- | ----------------------------------- | ---------------- |
| Vertical   | Aumenta a capacidade de uma máquina | Mais memória RAM |
| Horizontal | Adiciona mais máquinas              | Mais servidores  |


### 5.3 Elasticidade (Elasticity)


Elasticidade é a capacidade de ajustar os recursos automaticamente ou rapidamente conforme a demanda.


Exemplo:


Uma loja virtual recebe muitos acessos durante uma promoção. A infraestrutura aumenta os recursos para suportar o movimento e pode reduzi-los quando o volume de acessos diminuir.


**Diferença entre escalabilidade e elasticidade:**

- Escalabilidade: capacidade de aumentar ou diminuir recursos.
- Elasticidade: ajuste dos recursos de acordo com as mudanças na demanda, muitas vezes de maneira automática.

Atenção: os conceitos são relacionados, mas não são sinônimos.


### 5.4 Confiabilidade (Reliability)


Confiabilidade é a capacidade de um sistema funcionar corretamente e de maneira consistente ao longo do tempo.


Uma infraestrutura confiável busca evitar falhas e manter os serviços operacionais mesmo diante de problemas.


Exemplo:


Uma aplicação utiliza componentes distribuídos para reduzir a dependência de um único equipamento.


### 5.5 Previsibilidade (Predictability)


Previsibilidade é a capacidade de estimar o comportamento e os custos de uma infraestrutura.


Na nuvem, isso pode envolver:

- Previsibilidade de desempenho: estimar como os recursos responderão a determinadas cargas de trabalho.
- Previsibilidade de custos: acompanhar e estimar os gastos com base no consumo e no planejamento.

Exemplo:


Uma empresa acompanha seu consumo de armazenamento e processamento para planejar o orçamento dos próximos meses.


### 5.6 Segurança (Security)


A nuvem oferece recursos e ferramentas para proteger aplicações, dados e infraestrutura.


Entre as possibilidades estão:

- Controle de acesso.
- Autenticação.
- Criptografia.
- Monitoramento.
- Proteção contra ameaças.
- Gerenciamento de identidades.

Exemplo:


Uma empresa pode configurar permissões para que somente funcionários autorizados tenham acesso a determinados arquivos.


Importante: utilizar a nuvem não significa que toda a segurança será responsabilidade do provedor. A responsabilidade é compartilhada entre o provedor e o cliente, dependendo do modelo de serviço contratado.


### 5.7 Governança (Governance)


Governança é o conjunto de regras, políticas e processos utilizados para controlar e organizar os recursos de tecnologia.


Na nuvem, ajuda a garantir que os recursos sejam utilizados de acordo com as regras da organização.


Exemplo:


Uma empresa estabelece regras para limitar a criação de recursos em determinadas regiões e controlar os gastos dos departamentos.


### 5.8 Gerenciabilidade (Manageability)


Gerenciabilidade é a facilidade de administrar, configurar, monitorar e controlar os recursos de uma infraestrutura.


Na nuvem, isso pode ser feito por:

- Portal de gerenciamento.
- Linha de comando.
- APIs.
- Ferramentas de monitoramento.
- Automação.

Exemplo:


Um administrador utiliza o portal do Azure para acompanhar máquinas virtuais, verificar configurações e administrar recursos.


### 5.9 Resumo dos benefícios


| Benefício            | Significado principal                                |
| -------------------- | ---------------------------------------------------- |
| Alta disponibilidade | Manter o serviço acessível pelo maior tempo possível |
| Escalabilidade       | Aumentar ou diminuir a capacidade                    |
| Elasticidade         | Ajustar recursos conforme a demanda                  |
| Confiabilidade       | Funcionamento consistente e confiável                |
| Previsibilidade      | Prever desempenho e custos                           |
| Segurança            | Proteger dados, aplicações e infraestrutura          |
| Governança           | Estabelecer regras e controlar recursos              |
| Gerenciabilidade     | Administrar e monitorar recursos                     |


### 5.10 Como isso pode aparecer na prova?

- Se a questão falar sobre aumentar a memória de um servidor, pense em escalabilidade vertical.
- Se falar sobre adicionar mais servidores, pense em escalabilidade horizontal.
- Se falar sobre ajustar automaticamente os recursos conforme o movimento de usuários, pense em elasticidade.
- Se falar sobre manter um serviço acessível, pense em alta disponibilidade.
- Se falar sobre estimar gastos e desempenho, pense em previsibilidade.
- Se falar sobre regras e políticas de utilização, pense em governança.
- Se falar sobre administrar recursos por ferramentas, pense em gerenciabilidade.

**Anotação para guardar:** escalabilidade está relacionada à capacidade de alterar recursos; elasticidade está relacionada à adaptação desses recursos conforme a demanda.


---


## 6. Disponibilidade, SLA, tolerância a falhas e recuperação


Além de conhecer os benefícios da nuvem, é importante entender como os serviços lidam com interrupções, falhas e perda de dados.


### 6.1 SLA — Service Level Agreement


SLA significa _Service Level Agreement_, ou Acordo de Nível de Serviço.


É um compromisso formal que estabelece determinados níveis de serviço que o provedor espera cumprir.


Um SLA pode definir:

- Percentual de disponibilidade.
- Condições de funcionamento do serviço.
- Responsabilidades do provedor.
- Condições para solicitar compensações em caso de descumprimento.

Exemplo:


Um serviço pode oferecer um SLA de 99,9% de disponibilidade durante determinado período de medição, conforme as condições do contrato.


**O que significa a porcentagem de disponibilidade?**


Quanto maior o percentual, menor tende a ser o tempo de indisponibilidade permitido.


Valores aproximados de indisponibilidade anual:


| Disponibilidade | Indisponibilidade anual aproximada |
| --------------- | ---------------------------------- |
| 99%             | 3 dias e 15 horas                  |
| 99,9%           | 8 horas e 46 minutos               |
| 99,95%          | 4 horas e 23 minutos               |
| 99,99%          | 52 minutos e 34 segundos           |


Esses valores são aproximações matemáticas considerando um ano de 365 dias. O cálculo e as condições reais de um SLA dependem do contrato e do período de medição.


**Atenção para a prova:** um SLA de 99,99% representa um compromisso de disponibilidade maior que um SLA de 99,9%.


### 6.2 Tolerância a falhas (Fault Tolerance)


Tolerância a falhas é a capacidade de um sistema continuar funcionando mesmo quando um de seus componentes apresenta uma falha.


Isso pode ser alcançado por meio de redundância e distribuição de componentes.


Exemplo:


Uma aplicação possui componentes redundantes. Se um deles apresentar uma falha, outro pode continuar atendendo às solicitações.


**Ideia principal:** o sistema continua funcionando mesmo diante de uma falha.


### 6.3 Recuperação de desastres (Disaster Recovery)


Recuperação de desastres é o conjunto de estratégias e procedimentos utilizados para restaurar sistemas e serviços após uma interrupção grave.


Um desastre pode envolver:

- Falhas graves de infraestrutura.
- Problemas em um datacenter.
- Incidentes que afetem a operação.
- Eventos que comprometam a disponibilidade dos serviços.

Exemplo:


Uma empresa mantém uma estratégia de recuperação que permite restaurar seus serviços utilizando recursos em outra região, caso a infraestrutura principal seja afetada.


**Ideia principal:** recuperar os serviços depois de um evento grave.


### 6.4 Backup (Cópia de segurança)


Backup é uma cópia dos dados utilizada para possibilitar sua recuperação caso os dados originais sejam perdidos, danificados ou alterados indevidamente.


Exemplo:


Uma empresa realiza cópias de segurança de seu banco de dados para conseguir recuperar informações caso ocorra um problema.


O backup é importante para proteger os dados contra situações como:

- Exclusão acidental.
- Corrupção de arquivos.
- Falhas de equipamentos.
- Incidentes que comprometam as informações.

### 6.5 Redundância (Redundancy)


Redundância é a utilização de componentes ou recursos adicionais para evitar que a falha de um único elemento interrompa um serviço.


Exemplo:


Uma empresa mantém dois componentes capazes de realizar a mesma função. Se um falhar, o outro poderá assumir o funcionamento, dependendo da arquitetura.


**Diferença entre backup e redundância:**


| Conceito    | Objetivo                                                 |
| ----------- | -------------------------------------------------------- |
| Backup      | Recuperar dados a partir de cópias de segurança          |
| Redundância | Evitar que a falha de um componente interrompa o serviço |


Importante: redundância não substitui backup. Se uma exclusão ou corrupção de dados for replicada, a redundância pode não permitir recuperar a versão anterior.


### 6.6 Latência (Latency)


Latência é o tempo necessário para que os dados sejam transmitidos entre dois pontos de uma rede.


Em geral, quanto menor a latência, mais rápida é a comunicação entre os sistemas.


A latência pode ser influenciada por:

- Distância física entre os dispositivos.
- Qualidade da conexão.
- Roteamento da rede.
- Congestionamento.
- Infraestrutura utilizada.

Exemplo:


Uma aplicação hospedada em uma região geograficamente distante de seus usuários pode apresentar maior latência de comunicação.


Por isso, escolher uma região adequada para hospedar recursos pode influenciar a experiência dos usuários.


### 6.7 Diferenças que você precisa dominar


| Conceito                 | Pergunta que ajuda a identificar                    |
| ------------------------ | --------------------------------------------------- |
| SLA                      | Qual nível de serviço foi prometido?                |
| Alta disponibilidade     | Como manter o serviço acessível?                    |
| Tolerância a falhas      | Como continuar funcionando mesmo com uma falha?     |
| Recuperação de desastres | Como restaurar os serviços após um desastre?        |
| Backup                   | Como recuperar dados perdidos ou alterados?         |
| Redundância              | Como evitar depender de um único componente?        |
| Latência                 | Quanto tempo os dados levam para chegar ao destino? |


### 6.8 Como isso pode aparecer na prova?

- Se a questão apresentar um compromisso percentual de disponibilidade, pense em SLA.
- Se o sistema continuar funcionando mesmo após a falha de um componente, pense em tolerância a falhas.
- Se a empresa precisar restaurar seus serviços depois de um desastre, pense em recuperação de desastres.
- Se a empresa precisar recuperar arquivos excluídos, pense em backup.
- Se houver componentes extras para evitar a interrupção do serviço, pense em redundância.
- Se a questão falar sobre o tempo de comunicação entre dois pontos, pense em latência.

**Anotação para guardar:** backup protege a recuperação dos dados; redundância ajuda a manter o funcionamento; recuperação de desastres trata da restauração dos serviços após uma interrupção grave.


## 7. Modelos de serviço em nuvem: IaaS, PaaS e SaaS


Os modelos de serviço em nuvem definem o nível de gerenciamento oferecido pelo provedor e o nível de responsabilidade que permanece com o cliente.


Os três principais modelos são:

- IaaS — Infrastructure as a Service (Infraestrutura como Serviço).
- PaaS — Platform as a Service (Plataforma como Serviço).
- SaaS — Software as a Service (Software como Serviço).

A principal diferença entre eles está na quantidade de infraestrutura que o cliente precisa administrar.


### 7.1 IaaS — Infrastructure as a Service


IaaS significa Infraestrutura como Serviço.


Nesse modelo, o provedor disponibiliza recursos de infraestrutura pela internet, como:

- Máquinas virtuais.
- Armazenamento.
- Redes.
- Recursos de processamento.

O cliente possui maior controle sobre a infraestrutura contratada e fica responsável por administrar elementos como o sistema operacional, as aplicações e suas configurações.


**Exemplo prático:**


Uma empresa precisa de um servidor para executar uma aplicação. Em vez de comprar um servidor físico, contrata uma máquina virtual no Azure.


A empresa ainda precisa configurar e administrar o sistema operacional e os programas instalados.


**Exemplo no Azure:**

- Azure Virtual Machines (Máquinas Virtuais do Azure).

**Quando utilizar?**


Quando a empresa precisa de maior controle sobre o ambiente, como configurar o sistema operacional ou instalar softwares específicos.


### 7.2 PaaS — Platform as a Service


PaaS significa Plataforma como Serviço.


Nesse modelo, o provedor oferece uma plataforma pronta para desenvolver, executar e gerenciar aplicações.


O cliente não precisa administrar diretamente toda a infraestrutura ou o sistema operacional. Seu foco fica principalmente no desenvolvimento e gerenciamento da aplicação e dos dados.


**Exemplo prático:**


Um desenvolvedor precisa publicar uma aplicação web. Em vez de configurar um servidor e administrar seu sistema operacional, utiliza uma plataforma gerenciada pelo Azure.


**Exemplo no Azure:**

- Azure App Service.

**Quando utilizar?**


Quando a empresa deseja desenvolver e publicar aplicações sem precisar administrar diretamente a infraestrutura e o sistema operacional.


### 7.3 SaaS — Software as a Service


SaaS significa Software como Serviço.


Nesse modelo, o usuário utiliza um software disponibilizado pelo provedor, geralmente por meio da internet.


O provedor administra a infraestrutura, a plataforma e a própria aplicação.


O usuário normalmente precisa apenas acessar o serviço e utilizar suas funcionalidades, além de administrar configurações e dados que estejam sob sua responsabilidade.


**Exemplo prático:**


Uma empresa utiliza um serviço de e-mail acessado pelo navegador, sem precisar instalar e administrar toda a infraestrutura responsável pelo funcionamento do sistema.


**Exemplos:**

- Microsoft 365.
- Outlook na versão online.
- Microsoft Teams.

**Quando utilizar?**


Quando o usuário ou a empresa deseja utilizar um software pronto, sem precisar desenvolver ou administrar sua infraestrutura.


### 7.4 Comparação entre IaaS, PaaS e SaaS


| Característica         | IaaS               | PaaS                          | SaaS                   |
| ---------------------- | ------------------ | ----------------------------- | ---------------------- |
| Infraestrutura física  | Provedor           | Provedor                      | Provedor               |
| Sistema operacional    | Cliente administra | Provedor administra           | Provedor administra    |
| Plataforma de execução | Cliente administra | Provedor administra           | Provedor administra    |
| Aplicação              | Cliente administra | Cliente desenvolve/administra | Provedor administra    |
| Principal foco         | Infraestrutura     | Desenvolvimento               | Utilização do software |


A tabela apresenta uma visão simplificada. As responsabilidades exatas dependem do serviço e de sua configuração.


### 7.5 Entendendo a diferença com um exemplo


Imagine que três empresas precisam utilizar um sistema de vendas.


**Empresa A — IaaS**


Contrata uma máquina virtual e instala o sistema operacional e o software de vendas.


Ela possui maior controle, mas também precisa administrar mais componentes.


**Empresa B — PaaS**


Utiliza uma plataforma gerenciada para publicar seu sistema de vendas.


Não precisa administrar diretamente o sistema operacional e a infraestrutura subjacente.


**Empresa C — SaaS**


Contrata um sistema de vendas pronto, acessado pela internet.


Não precisa desenvolver ou administrar a infraestrutura que mantém o software funcionando.


### 7.6 Como memorizar?

- IaaS: infraestrutura pronta para você administrar.
- PaaS: plataforma pronta para você desenvolver e executar aplicações.
- SaaS: software pronto para você utilizar.

Uma forma de lembrar:


**IaaS = administrar infraestrutura.**


**PaaS = desenvolver aplicações.**


**SaaS = utilizar aplicações.**


### 7.7 Como isso pode aparecer na prova?

- Se a questão falar sobre contratar uma máquina virtual e administrar o sistema operacional, pense em IaaS.
- Se falar sobre desenvolver e publicar aplicações sem administrar servidores e sistema operacional, pense em PaaS.
- Se falar sobre utilizar um software pronto pela internet, pense em SaaS.
- Se a empresa precisar de maior controle sobre a infraestrutura, IaaS pode ser a alternativa adequada.
- Se a empresa quiser reduzir o trabalho de gerenciamento da infraestrutura durante o desenvolvimento, PaaS pode ser a opção.
- Se o objetivo for simplesmente utilizar um aplicativo pronto, SaaS é o modelo mais provável.

**Anotação para guardar:** quanto mais próximo de SaaS, menor tende a ser a responsabilidade do cliente sobre a infraestrutura técnica. IaaS oferece mais controle e exige mais gerenciamento do cliente.


---


## 8. Modelo de responsabilidade compartilhada (Shared Responsibility Model)


O modelo de responsabilidade compartilhada define como as responsabilidades pela segurança e pelo gerenciamento são divididas entre o provedor de nuvem e o cliente.


No Azure, por exemplo, a Microsoft é responsável por proteger a infraestrutura física e os componentes que mantém, enquanto o cliente continua responsável por determinadas configurações, acessos, dados e aplicações.


**Ideia principal:** utilizar a nuvem não significa transferir todas as responsabilidades de segurança para o provedor.


### 8.1 Responsabilidades do provedor


O provedor de nuvem é responsável por proteger e manter os elementos da infraestrutura que oferece.


Entre suas responsabilidades estão:

- Datacenters físicos.
- Segurança física das instalações.
- Hardware.
- Infraestrutura de rede física.
- Manutenção dos componentes físicos.
- Infraestrutura necessária para oferecer os serviços contratados.

**Exemplo:**


A Microsoft é responsável pela segurança física dos datacenters do Azure, incluindo os controles de acesso às instalações.


### 8.2 Responsabilidades do cliente


O cliente continua responsável por proteger e administrar os elementos que estão sob seu controle.


Dependendo do modelo de serviço, isso pode incluir:

- Dados armazenados.
- Identidades e contas de usuários.
- Senhas e credenciais.
- Permissões de acesso.
- Configurações de segurança.
- Aplicações desenvolvidas.
- Sistemas operacionais, quando aplicável.

**Exemplo:**


Uma empresa utiliza o Azure para armazenar documentos. A Microsoft protege a infraestrutura, mas a empresa precisa configurar corretamente quem pode acessar esses documentos.


### 8.3 Como a responsabilidade muda entre IaaS, PaaS e SaaS?


A divisão de responsabilidades depende do modelo de serviço.


**IaaS:**


O cliente possui mais responsabilidades técnicas, pois precisa administrar componentes como o sistema operacional, as aplicações e determinadas configurações.


**PaaS:**


O provedor assume mais responsabilidades, incluindo a administração do sistema operacional e da plataforma. O cliente continua responsável principalmente pelas aplicações, pelos dados e pelos acessos sob seu controle.


**SaaS:**


O provedor administra uma parcela ainda maior do ambiente, incluindo a aplicação. O cliente continua responsável por aspectos como seus dados, identidades, acessos e configurações disponíveis no serviço.


### 8.4 Comparação geral


| Responsabilidade              | IaaS     | PaaS     | SaaS     |
| ----------------------------- | -------- | -------- | -------- |
| Datacenter físico             | Provedor | Provedor | Provedor |
| Hardware                      | Provedor | Provedor | Provedor |
| Infraestrutura de rede física | Provedor | Provedor | Provedor |
| Sistema operacional           | Cliente  | Provedor | Provedor |
| Plataforma                    | Cliente  | Provedor | Provedor |
| Aplicações                    | Cliente  | Cliente  | Provedor |
| Dados e acessos do cliente    | Cliente  | Cliente  | Cliente  |


Essa é uma representação simplificada para estudo. Algumas responsabilidades podem variar conforme o serviço, a configuração e os recursos contratados.


### 8.5 Exemplo prático


Imagine que uma empresa utiliza uma máquina virtual no Azure para armazenar e processar informações.


A Microsoft é responsável por:

- Proteger o datacenter.
- Manter o hardware.
- Administrar a infraestrutura física.

A empresa é responsável por:

- Administrar o sistema operacional da máquina virtual.
- Configurar os usuários.
- Gerenciar permissões.
- Proteger os dados.
- Manter seus aplicativos atualizados.

Se a empresa configurar permissões incorretamente e permitir que pessoas não autorizadas acessem seus dados, isso não significa necessariamente que o provedor falhou em proteger a infraestrutura.


### 8.6 Relação com segurança e identidade


O cliente precisa controlar quem pode acessar seus recursos.


No Azure, existem ferramentas para ajudar nessa tarefa, como o Microsoft Entra ID, anteriormente conhecido como Azure Active Directory.


Ele oferece recursos relacionados a:

- Identidades.
- Autenticação.
- Gerenciamento de usuários.
- Controle de acesso.
- Gerenciamento de grupos.

Outro conceito importante é o princípio do menor privilégio: cada usuário deve receber somente as permissões necessárias para executar suas atividades.


### 8.7 Como isso pode aparecer na prova?

- Se a questão perguntar quem protege fisicamente os datacenters, a responsabilidade é do provedor.
- Se perguntar quem administra os usuários e as permissões de acesso da organização, pense no cliente.
- Se falar sobre gerenciamento do sistema operacional em IaaS, a responsabilidade é do cliente.
- Se falar sobre gerenciamento do sistema operacional em PaaS, a responsabilidade é do provedor.
- Se falar sobre utilização de um software pronto em SaaS, o provedor administra a aplicação.
- Se a questão afirmar que o provedor é responsável por absolutamente toda a segurança, desconfie: o modelo é de responsabilidade compartilhada.

**Anotação para guardar:** o provedor protege a infraestrutura que oferece, mas o cliente continua responsável por proteger seus dados, identidades, acessos e configurações sob seu controle.


## 9. Serverless e Azure Functions


### 9.1 O que é Serverless?


Serverless significa, literalmente, “sem servidor”.


É um modelo de computação em nuvem no qual o desenvolvedor não precisa administrar diretamente os servidores e a infraestrutura que executam seu código.


**Importante:** Serverless não significa que não existem servidores. Os servidores continuam existindo, mas seu gerenciamento fica sob responsabilidade do provedor de nuvem.


O desenvolvedor pode se concentrar na criação e execução do código, enquanto o provedor administra a infraestrutura necessária.


### 9.2 Como funciona?


Em uma aplicação tradicional, a equipe pode precisar:

- Configurar servidores.
- Administrar sistemas operacionais.
- Gerenciar capacidade de processamento.
- Monitorar a infraestrutura.
- Planejar a disponibilidade dos recursos.

Em uma arquitetura Serverless, grande parte desse gerenciamento é abstraída pelo provedor.


O código pode ser executado quando determinado evento acontece, sem que o desenvolvedor precise manter um servidor próprio permanentemente disponível.


### 9.3 Azure Functions


O Azure Functions é um serviço de computação Serverless do Microsoft Azure.


Ele permite executar pequenos trechos de código em resposta a eventos, sem precisar administrar diretamente os servidores.


Esses códigos são chamados de funções.


**Exemplo prático:**


Imagine uma aplicação que recebe arquivos enviados por usuários.


Quando um novo arquivo é enviado, uma Azure Function pode ser executada automaticamente para processá-lo.


Outros exemplos:

- Executar um código quando uma mensagem chega a uma fila.
- Processar informações recebidas por uma API.
- Executar uma tarefa em horários programados.
- Responder a eventos de outros serviços do Azure.

### 9.4 Triggers (Gatilhos)


Triggers são os gatilhos que determinam quando uma Azure Function será executada.


Exemplos:

- HTTP Trigger: executa uma função quando recebe uma solicitação HTTP.
- Timer Trigger: executa uma função em horários ou intervalos programados.
- Blob Trigger: pode executar uma função quando um arquivo é adicionado ou atualizado em um armazenamento Blob.
- Queue Trigger: executa uma função quando uma mensagem chega a uma fila.

**Exemplo:**


Uma empresa deseja executar uma tarefa todos os dias às 8 horas.


Pode utilizar uma Azure Function com Timer Trigger para iniciar essa execução automaticamente.


### 9.5 Vantagens do Serverless

- Menor necessidade de administrar servidores.
- Maior foco no desenvolvimento do código.
- Possibilidade de execução conforme eventos.
- Escalabilidade gerenciada pelo provedor, conforme o plano e a configuração.
- Pagamento baseado no modelo de cobrança do serviço e no consumo, conforme suas condições.

### 9.6 Serverless é sempre a melhor escolha?


Não necessariamente.


É importante avaliar:

- Tipo de aplicação.
- Tempo de execução necessário.
- Frequência de execução.
- Necessidade de controle sobre a infraestrutura.
- Limites e condições do serviço.
- Modelo de cobrança.

Uma aplicação que precisa de controle específico sobre o sistema operacional, por exemplo, pode exigir outro modelo de computação.


### 9.7 Comparação: máquina virtual e Azure Functions


| Característica              | Máquina Virtual                                | Azure Functions                           |
| --------------------------- | ---------------------------------------------- | ----------------------------------------- |
| Administração de servidores | Maior responsabilidade do cliente              | Gerenciada pelo provedor                  |
| Execução                    | Ambiente normalmente mantido disponível        | Pode ser acionada por eventos             |
| Controle da infraestrutura  | Maior                                          | Menor                                     |
| Principal utilização        | Aplicações que precisam de ambiente controlado | Execução de funções e tarefas específicas |


### 9.8 Como isso pode aparecer na prova?

- Se a questão falar sobre executar código sem administrar servidores, pense em Serverless.
- Se falar sobre executar código quando um evento acontece, pense em Azure Functions.
- Se falar sobre executar uma função em horários programados, pense em Timer Trigger.
- Se falar sobre executar uma função após uma solicitação HTTP, pense em HTTP Trigger.
- Se a questão afirmar que Serverless significa ausência física de servidores, está incorreta.

**Anotação para guardar:** Azure Functions é um serviço Serverless que permite executar código em resposta a eventos, sem que o desenvolvedor precise administrar diretamente os servidores.


---


## 10. Revisão geral da Parte 1 — Fundamentos de Cloud Computing


Esta seção reúne os conceitos estudados na Parte 1. A ideia é revisar as diferenças que podem aparecer em questões de múltipla escolha.


### 10.1 Conceitos fundamentais


| Conceito          | Definição                                                              |
| ----------------- | ---------------------------------------------------------------------- |
| Cloud Computing   | Disponibilização de recursos computacionais pela internet              |
| Provedor de nuvem | Empresa que oferece serviços de computação em nuvem                    |
| On-premises       | Infraestrutura mantida localmente pela organização                     |
| Virtualização     | Tecnologia que permite criar ambientes virtuais sobre recursos físicos |
| Nuvem pública     | Infraestrutura oferecida por um provedor para diferentes clientes      |
| Nuvem privada     | Ambiente de nuvem dedicado a uma organização                           |
| Nuvem híbrida     | Combinação de ambientes de nuvem pública e privada                     |


### 10.2 Custos e consumo


| Conceito            | Definição                                                             |
| ------------------- | --------------------------------------------------------------------- |
| CapEx               | Investimento inicial em infraestrutura e equipamentos                 |
| OpEx                | Despesas operacionais contínuas                                       |
| Consumo sob demanda | Pagamento conforme a utilização dos recursos, de acordo com o serviço |


**Lembre-se:**

- Comprar servidores físicos representa normalmente CapEx.
- Pagar mensalmente por serviços de nuvem representa normalmente OpEx.
- A nuvem permite reduzir a necessidade de grandes investimentos iniciais, mas exige controle dos gastos.

### 10.3 Benefícios da nuvem


| Conceito                  | Significado                                 |
| ------------------------- | ------------------------------------------- |
| Alta disponibilidade      | Manter os serviços acessíveis               |
| Escalabilidade vertical   | Aumentar a capacidade de uma máquina        |
| Escalabilidade horizontal | Adicionar mais máquinas                     |
| Elasticidade              | Ajustar recursos conforme a demanda         |
| Confiabilidade            | Manter funcionamento consistente            |
| Previsibilidade           | Estimar custos e desempenho                 |
| Segurança                 | Proteger dados, aplicações e infraestrutura |
| Governança                | Definir regras e políticas                  |
| Gerenciabilidade          | Administrar e monitorar recursos            |


### 10.4 Disponibilidade e recuperação


| Conceito                 | Significado                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| SLA                      | Acordo de nível de serviço                                         |
| Tolerância a falhas      | Continuar funcionando mesmo diante de falhas                       |
| Recuperação de desastres | Restaurar serviços após uma interrupção grave                      |
| Backup                   | Cópia de segurança para recuperar dados                            |
| Redundância              | Recursos adicionais para evitar dependência de um único componente |
| Latência                 | Tempo de comunicação entre pontos de uma rede                      |


### 10.5 Modelos de serviço


| Modelo | O que oferece               | Exemplo                |
| ------ | --------------------------- | ---------------------- |
| IaaS   | Infraestrutura como serviço | Azure Virtual Machines |
| PaaS   | Plataforma como serviço     | Azure App Service      |
| SaaS   | Software como serviço       | Microsoft 365          |


**Regra para memorizar:**

- IaaS: mais controle e gerenciamento pelo cliente.
- PaaS: foco no desenvolvimento de aplicações.
- SaaS: utilização de um software pronto.

### 10.6 Responsabilidade compartilhada

- O provedor é responsável pela infraestrutura física e pelos componentes que administra.
- O cliente é responsável pelos dados, identidades, acessos e configurações sob seu controle.
- Em IaaS, o cliente possui mais responsabilidades técnicas.
- Em PaaS, o provedor assume mais responsabilidades.
- Em SaaS, o provedor administra uma parcela maior do ambiente.

### 10.7 Serverless


| Conceito        | Significado                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| Serverless      | Execução de código sem administração direta dos servidores pelo desenvolvedor |
| Azure Functions | Serviço Serverless do Azure                                                   |
| Trigger         | Gatilho que inicia a execução de uma função                                   |
| HTTP Trigger    | Aciona a função por uma solicitação HTTP                                      |
| Timer Trigger   | Aciona a função em horários programados                                       |


---


### 10.8 Exercícios de revisão


Tente responder sem consultar os tópicos anteriores. As questões abaixo são autorais, no estilo de revisão para certificação.


**Questão 1**


Uma empresa deseja aumentar a memória RAM de uma máquina virtual para melhorar seu desempenho. Qual conceito está sendo aplicado?


A) Escalabilidade horizontal.


B) Escalabilidade vertical.


C) Recuperação de desastres.


D) Redundância.


**Questão 2**


Uma aplicação recebe muitos acessos durante uma promoção. A infraestrutura adiciona automaticamente recursos para atender à demanda e os reduz quando o movimento diminui.


Qual benefício da nuvem está sendo utilizado?


A) Governança.


B) Latência.


C) Elasticidade.


D) Backup.


**Questão 3**


Uma empresa deseja utilizar um software pronto pela internet, sem administrar servidores ou desenvolver a aplicação.


Qual modelo de serviço atende melhor a essa necessidade?


A) IaaS.


B) PaaS.


C) SaaS.


D) On-premises.


**Questão 4**


Uma empresa contrata uma máquina virtual no Azure e fica responsável pela instalação e administração do sistema operacional.


Qual modelo de serviço está sendo utilizado?


A) SaaS.


B) PaaS.


C) IaaS.


D) Serverless.


**Questão 5**


Qual é a principal função de um SLA?


A) Criar cópias de segurança dos dados.


B) Estabelecer compromissos sobre os níveis de serviço oferecidos.


C) Aumentar automaticamente a memória dos servidores.


D) Administrar os usuários de uma organização.


**Questão 6**


Uma empresa deseja recuperar arquivos que foram excluídos acidentalmente.


Qual recurso é especialmente importante para essa situação?


A) Latência.


B) Escalabilidade horizontal.


C) Backup.


D) Governança.


**Questão 7**


Uma aplicação precisa continuar funcionando mesmo quando um de seus componentes apresenta uma falha.


Qual conceito está relacionado a essa necessidade?


A) Tolerância a falhas.


B) CapEx.


C) SaaS.


D) Previsibilidade.


**Questão 8**


Qual é a principal característica do modelo de responsabilidade compartilhada?


A) O provedor é responsável por toda a segurança, sem participação do cliente.


B) O cliente é responsável por toda a infraestrutura física.


C) O provedor e o cliente possuem responsabilidades diferentes relacionadas à segurança e ao gerenciamento.


D) O cliente não precisa administrar acessos e permissões.


**Questão 9**


Uma empresa deseja executar um código automaticamente quando um arquivo é enviado ao armazenamento Blob do Azure.


Qual serviço pode atender a essa necessidade?


A) Azure Functions.


B) Microsoft 365.


C) Azure Virtual Machines.


D) Azure Cost Management.


**Questão 10**


Uma empresa combina sua infraestrutura local com serviços de nuvem pública.


Qual modelo de implantação está sendo utilizado?


A) Nuvem pública.


B) Nuvem privada.


C) Nuvem híbrida.


D) SaaS.


---


### 10.9 Gabarito comentado

1. **B — Escalabilidade vertical.** A capacidade de uma máquina existente está sendo aumentada.
2. **C — Elasticidade.** Os recursos são ajustados conforme a demanda.
3. **C — SaaS.** O usuário utiliza um software pronto.
4. **C — IaaS.** O cliente administra o sistema operacional da máquina virtual.
5. **B — SLA.** Define compromissos relacionados ao nível de serviço.
6. **C — Backup.** Permite recuperar dados a partir de cópias de segurança.
7. **A — Tolerância a falhas.** O sistema continua funcionando mesmo com a falha de um componente.
8. **C — Responsabilidade compartilhada.** O provedor e o cliente possuem responsabilidades diferentes.
9. **A — Azure Functions.** Pode executar código em resposta a eventos, como o envio de arquivos.
10. **C — Nuvem híbrida.** Combina infraestrutura local e nuvem pública.

---


### 10.10 Checklist de aprendizagem


Antes de avançar para a próxima parte, verifique se consegue explicar cada conceito sem consultar o material.

- [ ] Explicar o que é Cloud Computing.
- [ ] Diferenciar On-premises e Cloud.
- [ ] Diferenciar nuvem pública, privada e híbrida.
- [ ] Explicar CapEx e OpEx.
- [ ] Entender o modelo de consumo sob demanda.
- [ ] Diferenciar escalabilidade vertical e horizontal.
- [ ] Diferenciar escalabilidade e elasticidade.
- [ ] Entender alta disponibilidade e confiabilidade.
- [ ] Explicar SLA e seus percentuais.
- [ ] Diferenciar backup, redundância e recuperação de desastres.
- [ ] Entender tolerância a falhas e latência.
- [ ] Diferenciar IaaS, PaaS e SaaS.
- [ ] Explicar o modelo de responsabilidade compartilhada.
- [ ] Entender o conceito de Serverless.
- [ ] Explicar o funcionamento do Azure Functions e dos Triggers.

**Conclusão da Parte 1:** você deve conseguir reconhecer os conceitos de computação em nuvem, comparar seus modelos e identificar qual solução atende a cada situação apresentada em uma questão.


Parte 1 concluída


Quando quiser, seguimos para a Parte 2 — Arquitetura e serviços do Azure, começando pelos componentes de arquitetura: regiões, zonas de disponibilidade, pares de regiões, recursos, grupos de recursos, assinaturas e grupos de gerenciamento.

