import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
	name: "Demo",
	version: "1.0.0",
});

server.tool(
	"fetch-weather",
	"Tool to fetch the weather of a city",
	{
		city: z.string().describe("City name"),
	},
	async ({ city }) => {
		const response = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
		);
		const data = await response.json();
		console.log(data);
		if (data.length === 0) {
			return {
				content: [
					{
						type: "text",
						text: `No se encontro informacion ara la ciudad ${city}`,
					},
				],
			};
		}
		const { latitude, longitude } = data.results[0];
		const weatherResponse = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,relative_humidity_2m,apparent_temperature,precipitation_probability`
		);
		const weatherData = await weatherResponse.json();
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(weatherData, null, 2),
				},
			],
		};
	}
);

const transport = new StdioServerTransport();
await server.connect(transport);
