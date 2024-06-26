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
  "2": 0
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
