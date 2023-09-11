export const removeDuplicates = (arr: object[], key: string) => {
	return arr.filter(
		(value: object, index: number, self: object[]) =>
			index === self.findIndex((t: object) => t[key] === value[key]),
	);
};

export const firstLetterUp = (str: String) => str.charAt(0).toUpperCase() + str.slice(1);
