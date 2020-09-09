module.exports = function(book, page) {
  let navigation = ['<div class="navPagesContainer">'];

  if (page.previous && page.previous.path && page.next && page.next.path) {
    navigation.push('<div class="navPagesLinks">');
  } else {
    navigation.push('<div class="navPagesLink">');
  }

  if (page.previous && page.previous.path) {
    navigation.push(`<a class="card cardPrevious">`);
    navigation.push('  <div class="cardIcon">');
    navigation.push('    <i class="fa fa-angle-left"></i>');
    navigation.push('  </div>');
    navigation.push('  <div class="cardPreviousBody">');
    navigation.push('    <div class="cardHint">');
    navigation.push('      <span>Previous</span>');
    navigation.push('    </div>');
    navigation.push('    <div class="cardTitle">');
    navigation.push(`      <span>${page.previous.title}</span>`);
    navigation.push('    </div>');
    navigation.push('  </div>');
    navigation.push('</a>');
  }

  if (page.next && page.next.path) {
    navigation.push(`<a class="card cardNext">`);
    navigation.push('  <div class="cardNextBody">');
    navigation.push('    <div class="cardHint">');
    navigation.push('      <span>Next</span>');
    navigation.push('    </div>');
    navigation.push('    <div class="cardTitle">');
    navigation.push(`      <span>${page.next.title}</span>`);
    navigation.push('    </div>');
    navigation.push('  </div>');
    navigation.push('  <div class="cardIcon">');
    navigation.push('    <i class="fa fa-angle-right"></i>');
    navigation.push('  </div>');
    navigation.push('</a>');
  }

  navigation.push('</div>');
  navigation.push('</div>');

  navigation = navigation.map(n => n.trim());

  page.content += '\n\n' + navigation.join(' ');

  return page;
};
