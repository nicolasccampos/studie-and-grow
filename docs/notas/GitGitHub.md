# Git/GitHub


## Fluxo de Trabalho e Resolução de Problemas com Git



Registro de boas práticas de versionamento e soluções para problemas reais enfrentados no dia a dia pelo terminal.


---


<u>Dia 16/11/2026</u>


### **1. Padrão de Commits Semânticos (Conventional Commits)**


Em vez de mensagens genéricas como "atualizando arquivos", utilizo prefixos que deixam o histórico do repositório claro e profissional:


| **Prefixo** | **Quando usar**                            | **Exemplo**                                                    |
| ----------- | ------------------------------------------ | -------------------------------------------------------------- |
| **feat:**   | Nova funcionalidade ou novo recurso        | **`feat: adiciona script de sincronizacao com API do Notion`** |
| **fix:**    | Correção de um bug ou erro                 | **`fix: corrige caminho base do VitePress no deploy`**         |
| **docs:**   | Alterações apenas em documentação ou notas | **`docs: adiciona documentacao de POO em Java`**               |
| **chore:**  | Configurações, pacotes ou manutenção       | **`chore: configura .gitignore e dependencias do projeto`**    |


### **2. TIL: Como remover a pasta node_modules commitada por engano**


Tive um problema ao criar o repositório para anotações, Ao rodar **`git add .`** antes de posicionar corretamente o **`.gitignore`**  na raiz do projeto, milhares de arquivos da pasta **`node_modules`**  entraram no commit.


O que entendi no momento era que mesmo criando o **`.gitignore`**e depois do **`node_modules`**,  o Git continuava rastreando a pasta e gerando conflitos.


O  **`.gitignore`** só ignora arquivos que **ainda não foram rastreados** (_untracked_). Se um arquivo já entrou em um commit antes, o Git continua monitorando suas alterações.

Minha solução foi remover a pasta apenas do índice de rastreamento do Git (_staging/cache_), mantendo os arquivos físicos intactos no computador:


```text
git rm -r --cached node_modules

git commit -m "chore: remove node_modules do controle de versao"
git push origin main
```


### **3. TIL: Resolvendo erro [rejected] main -> main (fetch first) com GitHub Actions**


Encontrei outro erro na criação do repositório, ao tentar enviar alterações locais com **`git push`**, o terminal rejeitou o envio informando que o repositório remoto continha alterações que não existiam localmente (**`Updates were rejected because the remote contains work that you do not have locally`**).


Como o repositório possui um bot do **GitHub Actions** que baixa notas do Notion e faz commits automáticos na branch **`main`**, o histórico do GitHub avançou um commit à frente do histórico local da minha máquina.

Minha solução foi antes de fazer o **`push`**, é necessário trazer os commits do robô e aplicar os meus commits locais por cima:


```text
git add .
git commit -m "fix: ajustes na configuracao local"
git pull --rebase origin main
git push origin main
```


### **4. TIL: Desfazendo meu último commit local sem perder o código**


Fiz um commit local que incluiu arquivos indesejados antes de dar **`git push`** e precisei desfazer o pacote do commit sem perder as alterações que escrevi nos arquivos.


Minha slução foi usar o **`git reset`** voltando 1 commit (**`HEAD~1`**), mantendo os arquivos modificados no diretório de trabalho:


```text
git reset HEAD~1
```

