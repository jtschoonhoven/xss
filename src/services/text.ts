export function mangleText(node: Node): Promise<void> {
    return new Promise((resolve) => {
        // recurse into child nodes
        if (node.hasChildNodes()) {
            Promise.all(Array.from(node.childNodes.values()).map(mangleText));
        }
        // skip non-text nodes
        if (node.nodeType !== Node.TEXT_NODE) {
            return resolve();
        }
        // skip empty nodes
        if (!node.textContent || !node.textContent.trim()) {
            return resolve();
        }
        // get the text content of the node
        const text = node.textContent.trim();

        // mangle the text
        const newText = text
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) * 2))
            .join('');

        // update with mangled content
        setTimeout(() => {
            node.textContent = newText;
            return resolve();
        }, Math.random() * 500);
    });
}
