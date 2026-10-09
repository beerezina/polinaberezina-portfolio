// Keep short Russian prepositions, conjunctions and particles with the next word.
const SHORT_WORD = /(?<![\p{L}\p{N}])(в|во|к|ко|с|со|у|о|об|обо|от|до|за|из|на|по|под|над|при|для|без|про|и|а|но|не|ни) (?=\S)/giu;
const IGNORE_TEXT_IN = 'script,style,noscript,textarea,svg,code,pre,[contenteditable]';

function keepShortWords(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.parentElement?.closest(IGNORE_TEXT_IN)) return;
    const fixed = node.nodeValue.replace(SHORT_WORD, (_, word) => `${word}\u00a0`);
    if (fixed !== node.nodeValue) node.nodeValue = fixed;
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE || node.matches(IGNORE_TEXT_IN)) return;
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) keepShortWords(walker.currentNode);
}

keepShortWords(document.body);
new MutationObserver(changes => {
  for (const change of changes) {
    if (change.type === 'characterData') keepShortWords(change.target);
    else for (const node of change.addedNodes) keepShortWords(node);
  }
}).observe(document.body, {childList: true, characterData: true, subtree: true});
