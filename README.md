# opentelemetry-apm

A biblioteca "opentelemetry-apm" é um middleware que integra o OpenTelemetry com sistemas de monitoramento de aplicativos (APM) para rastreamento e monitoramento avançado de aplicativos Node.js. Ela permite que você colete dados de telemetria detalhados de sua aplicação para melhorar o desempenho e a depuração.

## Instalação

Você pode instalar a biblioteca usando o npm ou o yarn:

```bash
npm install opentelemetry-apm
```

ou

```bash
yarn add opentelemetry-apm
```

## Configuração

Antes de usar o "opentelemetry-apm", você deve configurar as seguintes variáveis de ambiente:

#### APM_SERVER_URL

A URL do servidor APM que receberá os dados de telemetria.

#### APM_SERVICE_NAME

O nome do serviço ou aplicação que será registrado no servidor APM.

#### TRACER_SPAN_NAME

O nome do span que será utilizado para rastrear operações específicas no OpenTelemetry.

Exemplo abaixo:

```bash
APM_SERVER_URL=http://localhost:8200
APM_SERVICE_NAME=adapter-service
TRACER_SPAN_NAME=adapter-opentelemetry
```

## Uso

Para utilizar o "opentelemetry-apm" como middleware em sua aplicação Express, siga os passos abaixo:

1 . Importe o middleware no seu arquivo de aplicação:

```python
const { OpenTelemetryMiddleware } = require("opentelemetry-apm");
```

2 . Crie uma instância do aplicativo Express:

```python
const express = require("express");
const app = express();
```

3 . Use o middleware "OpenTelemetryMiddleware" em seu aplicativo Express:

```python
app.use(OpenTelemetryMiddleware);
```

Agora, o OpenTelemetryMiddleware está integrado em sua aplicação Express e começará a coletar dados de telemetria para monitoramento avançado.

## Contribuindo

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request no repositório GitHub.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter detalhes.
