export function jsonToCsv(jsonObjArr: Array<object>, headers?: Array<string>) {
	let csvString = "";
	if (headers) csvString += headers.join(",");
	else csvString += Object.keys(Object(jsonObjArr[0])).join(",");
	csvString += "\r\n";

	jsonObjArr.forEach((obj) => {
		csvString += Object.values(obj).join(",") + "\r\n";
	});

	return csvString;
}

export function downloadString(str: string, name = "data", encode = false, type?: string) {
	let ret = "";
	if (type) ret += `data:${type}/csv;charset=utf-8,`;
	ret += encode ? encodeURI(str) : str;
	const link = document.createElement("a");
	link.setAttribute("href", ret);
	link.setAttribute("download", name);
	document.body.appendChild(link); // Required for FF

	link.click();
	document.body.removeChild(link);
	link.remove();
}
