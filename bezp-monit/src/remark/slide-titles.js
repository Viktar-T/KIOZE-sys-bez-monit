// Turns <Slide title="..."> into a real "##" heading at the start of the
// slide. Slide titles then get anchor links, show up in the table of
// contents and keep a proper heading order (the page title stays the only h1).
// Must run before the default Docusaurus plugins that add heading ids and
// build the table of contents (`beforeDefaultRemarkPlugins`).

function convertSlides(node) {
  if (node.type === 'mdxJsxFlowElement' && node.name === 'Slide') {
    const index = node.attributes.findIndex(
      (attribute) =>
        attribute.type === 'mdxJsxAttribute' &&
        attribute.name === 'title' &&
        typeof attribute.value === 'string',
    );
    if (index !== -1) {
      const [title] = node.attributes.splice(index, 1);
      node.children.unshift({
        type: 'heading',
        depth: 2,
        data: {hProperties: {className: ['slide-title']}},
        children: [{type: 'text', value: title.value}],
      });
    }
  }
  node.children?.forEach(convertSlides);
}

export default function remarkSlideTitles() {
  return (tree) => {
    convertSlides(tree);
  };
}
