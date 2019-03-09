export function mangleText(node: Node = document.body): Promise<void> {
    return new Promise((resolve) => {
        // recurse into child nodes
        if (node.hasChildNodes()) {
            return Promise
                .all(Array.from(node.childNodes.values()).map(mangleText))
                .then(() => resolve());
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
            .map(char => char.charCodeAt(0) * 3 % 65535)
            .map(code => String.fromCharCode(code))
            .join('');

        // update with mangled content
        setTimeout(() => {
            node.textContent = newText;
            return resolve();
        }, Math.random() * 1000);
    });
}

/*
 * Call mangleText in a loop forever.
 */
export function mangleTextForever(node: Node = document.body): void {
    mangleText(node).then(() => mangleTextForever(node));
}
