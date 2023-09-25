import type { Network, Node, FilterObject, TypeColors, NetworkGraphData } from "@/utils/types";
import type { GraphData } from "force-graph";

export const createGraph = (data: GraphData) => {
	const graph = { nodes: new Map(), links: new Map() };
	data.nodes.forEach((node: Node) => {
		graph.nodes.set(node.key, {
			...node,
			neighbors: new Set(),
		});
	});
	data.edges.forEach((link) => {
		graph.links.set(link.key, link);
		if (typeof link.source === "string") {
			graph.nodes.get(link.source).neighbors.add(link.target);
			graph.nodes.get(link.target).neighbors.add(link.source);
		} else {
			graph.nodes.get(link.source.key).neighbors.add(link.target.key);
			graph.nodes.get(link.target.key).neighbors.add(link.source.key);
		}
	});

	return graph;
};

export const filterGraph = (data: NetworkGraphData, filterObject: FilterObject) => {
	const ret: NetworkGraphData = { ...data };

	if (filterObject.types) {
		ret.nodes = new Map(
			[...ret.nodes.entries()].filter(
				([key, node]) => filterObject.types?.includes(node.attributes.type),
			),
		);
	}
	if (filterObject.query) {
		ret.nodes = new Map(
			[...ret.nodes.entries()].filter(([key, node]) =>
				node.attributes.label.includes(String(filterObject.query)),
			),
		);
	}
	if (filterObject.related_to) {
		ret.nodes = new Map(
			[...ret.nodes.entries()].filter(([key, node]) => {
				if (filterObject.related_to === node.key) return true;
				for (const key of node.neighbors) {
					if (filterObject.related_to === key) return true;
				}
				return false;
			}),
		);
	}
	if (Object.keys(filterObject).length) {
		ret.links = new Map(
			[...ret.links.entries()].filter(([key, link]) => {
				if (typeof link.source === "string" && typeof link.target === "string")
					return ret.nodes.has(link.source) && ret.nodes.has(link.target);
				else if (typeof link.source === "object" && typeof link.target === "object") {
					return ret.nodes.has(link.source.key) && ret.nodes.has(link.target.key);
				}
				return false;
			}),
		);
	}

	return ret;
};

export const getTypes = (data: Network) => [
	...new Set(data.nodes.map((node: Node) => node.attributes.type)),
];

export const typeColors: TypeColors = {
	Edition: "#A6CEE3",
	Institution: "#1F78B4",
	Person: "#FB9A99",
	City: "#B2DF8A",
	Country: "#33A02C",
};
export const types = Object.keys(typeColors);
