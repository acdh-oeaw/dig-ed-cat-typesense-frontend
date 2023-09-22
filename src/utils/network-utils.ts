import type { Network, Node, Edge, FilterObject, TypeColors } from "@/utils/types";
import type { GraphData } from "force-graph";

// export const filterNetwork = (data: Network, obj: FilterObject) => {
// 	console.log("filterNetwork", obj, data);
// 	const retObject = { ...data };

// 	if (obj.related_to) {
// 	}
// 	if (obj.types) {
// 		retObject.nodes = retObject.nodes.filter(
// 			(node: Node) => obj.types?.includes(node.attributes?.type),
// 		);
// 	}
// 	if (obj.query) {
// 		retObject.nodes = retObject.nodes.filter(
// 			(node: Node) =>
// 				node.attributes?.label.toLowerCase().includes((obj.query || "").toLowerCase()),
// 		);
// 	}

// 	// remove edges with no nodes
// 	if (obj.query || obj.types || obj.related_to) {
// 		retObject.edges = retObject.edges.filter((edge: Edge) => {
// 			return (
// 				retObject.nodes.some((node: Node) => (edge.source.key || edge.source) === node.key) &&
// 				retObject.nodes.some((node: Node) => (edge.target.key || edge.target) === node.key)
// 			);
// 		});
// 	}
// 	console.log("filteredNetwork", retObject);

// 	return retObject as Network;
// };

export function createGraph(data: GraphData) {
	console.log(data);

	const graph = { nodes: new Map(), links: new Map() };
	data.nodes.forEach((node: Node) => {
		graph.nodes.set(node.key, {
			...node,
			neighbors: new Set(),
		});
	});
	data.edges.forEach((link) => {
		graph.links.set(link.key, link);
		graph.nodes.get(link.source).neighbors.add(link.target);
		graph.nodes.get(link.target).neighbors.add(link.source);
	});

	console.log(graph);
	return graph;
}

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
