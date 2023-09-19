import type { Network, Node, Edge } from "@/utils/types";

interface filterObject {
	query?: string;
	type?: string | string[];
	related_to?: string | string[];
}

export const filterNetwork = (data: Network, obj: filterObject) => {
	const retObject = { ...data };
	if (obj.related_to) {
		retObject.nodes = retObject.nodes.filter((node: Node) => {
			return retObject.edges.some(
				(edge: Edge) =>
					obj.related_to?.includes(edge.source) || obj.related_to?.includes(edge.target),
			);
		});
	}
	if (obj.type) {
		retObject.nodes = retObject.nodes.filter(
			(node: Node) => obj.type?.includes(node.attributes?.type),
		);
	}
	if (obj.query) {
		retObject.nodes = retObject.nodes.filter(
			(node: Node) =>
				node.attributes?.label.toLowerCase().includes((obj.query || "").toLowerCase()),
		);
	}

	// remove edges with no nodes
	if (obj.query || obj.type || obj.related_to) {
		retObject.edges = retObject.edges.filter((edge: Edge) => {
			console.log("edge", edge);
			return (
				retObject.nodes.some((node: Node) => (edge.source.key || edge.source) === node.key) &&
				retObject.nodes.some((node: Node) => edge.target.key === node.key)
			);
		});
	}
	return retObject as Network;
};

export const getTypes = (data: Network) => [
	...new Set(data.nodes.map((node: Node) => node.attributes.type)),
];
