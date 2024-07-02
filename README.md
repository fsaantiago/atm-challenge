# Sobre
Este projeto em Node.js e Express simula um sistema de caixa eletrônico (ATM).

## Descrição

A API possui um endpoint principal que permite a solicitação de saque. A lógica implementada garante que o número mínimo de cédulas seja utilizado para qualquer valor de saque permitido.

### Endpoint

- **URL**: `/api/saque`
- **Método**: POST
- **Entrada**:
  ```json
  {
    "value": 380
  }
- **Saída**:
  ```json
  {
  "100": 3,
  "50": 1,
  "20": 1,
  "10": 1,
  "5": 0,
  "2": 0,
  "1": 0
  }

#### Comandos Git para Envio

```bash
# Inicializar o repositório Git
git clone <https://github.com/fsaantiago/atm-challenge>
cd atm-api

# Instale as dependências:
npm install
```

### Executar o Servidor
```bash
# Inicie o servidor:
node dist/index.js

# O servidor estará rodando na porta 5000 ou na porta especificada na variável de ambiente PORT.
```
### Exemplo de uso

#### Faça uma requisição POST para o endpoint /api/saque com um corpo JSON especificando o valor do saque:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"value": 380}' http://localhost:5000/api/saque
```

#### Passo a passo para testes:

```bash
# Compile o projeto
npx tsc

# Execute o servidor
node dist/index.ts

# Execute os testes
npm test
```

### Adicionar repositório remoto
```bash
git remote add origin <https://github.com/fsaantiago/atm-challenge>
```

### Enviar os arquivos para o repositório remoto
```bash
git push -u origin master
```

### Desafios enfrentados durante a construção da API

- **Configuração Inicial do Ambiente de Desenvolvimento:** Adaptar o ambiente para trabalhar com TypeScript e configurar corretamente o transpilador para JavaScript compatível com o Node.js.
- **Implementação da Lógica de Saque:** Desenvolver um algoritmo eficiente para calcular a menor quantidade de cédulas necessárias para um valor de saque dado, considerando as denominações disponíveis (100, 50, 20, 10, 5 e 2). E por isso a estrutura possui apenas 3 functions principais:
  - `index.ts`: function principal para chamada dos cálculos;
  - `withdrawal.ts`: function com a estrutura de cálculos para saque e retirada das notas e sua quantidade correta;
  - `withdrawal.tests.ts`: function para testar se a api está funcionando corretamente.

- **Gerenciamento de Erros:** Implementar tratamento adequado para situações em que o valor solicitado não pode ser atendido com as combinações disponíveis de cédulas, retornando mensagens de erro claras e informativas. Um dos exemplos foi a não identificação da porta 5000.
  - Foi necessário realizar estes passos:
  ```bash
  # Comando para encontrar o PID do processo que está usando a porta 5000:
  lsof -i :5000

  # Ao visualizar a linha que mostra o PID (Process ID) do processo, foi necessário matar este processo com:
  kill -9 <PID>
  ```
- **Testes Automatizados:** Criar e executar testes automatizados utilizando Jest para validar a funcionalidade da API em diferentes cenários, incluindo casos de uso normais e excepcionais.

## Tecnologias utilizadas:

**Ferramentas de Desenvolvimento:** IntelliJ IDEA

**Linguagem:** TypeScript

**Frameworks:** Node.js, Jest e Express


  

