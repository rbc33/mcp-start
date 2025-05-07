# MCP-Start: Servidor de Clima con Model Context Protocol

Este proyecto es un ejemplo de implementación del Model Context Protocol (MCP) que proporciona información meteorológica para diferentes ciudades.

## Descripción

MCP-Start es un servidor que utiliza el SDK de Model Context Protocol para crear una herramienta que consulta datos meteorológicos en tiempo real. El servidor expone una herramienta llamada `fetch-weather` que permite obtener información del clima para cualquier ciudad.

## Características

- Consulta de datos meteorológicos por nombre de ciudad
- Utiliza APIs públicas de Open-Meteo para geocodificación y pronóstico del tiempo
- Implementa el protocolo MCP para comunicación estandarizada
- Devuelve datos detallados como temperatura, lluvia, humedad y probabilidad de precipitación

## Requisitos

- Node.js (versión recomendada: 18 o superior)
- pnpm (versión 10.10.0 o superior)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mcp-start.git
cd mcp-start

# Instalar dependencias
pnpm install
```

## Uso

Para iniciar el servidor MCP, ejecuta:

```bash
./start-mcp.sh
```

O alternativamente:

```bash
npx -y @modelcontextprotocol/inspector npx -y tsx main.js
```

## Estructura del Proyecto

- `main.ts`: Implementación principal del servidor MCP
- `start-mcp.sh`: Script para iniciar el servidor
- `package.json`: Configuración del proyecto y dependencias

## Dependencias

- `@modelcontextprotocol/sdk`: SDK para implementar el protocolo MCP
- `zod`: Biblioteca para validación de esquemas

## Licencia

ISC
