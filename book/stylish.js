function stylish(element, style) {
  for (var property in style) {
    element.style[property] = style[property];
  }
};

function unstylish(element, style) {
  for (var property in style) {
    element.style[property] = null;
  }
};

require(["gitbook", "jQuery"], function(gitbook, $) {

  gitbook.events.bind("page.change", function(event) {
    const config = gitbook.state.config.pluginsConfig["bottom-navigation"];

    const color = config.borderColor;
    const iconColor = config.iconColor || color;
    const titleColor = config.titleColor || color;
    const main = {color, borderColor: `${color}`, cursor: "pointer"};
    const subs = ['cardIcon', 'cardTitle'];

    if (config.pageInnerWidth) {
      $('.page-inner').attr(`style', 'width: ${config.pageInnerWidth} !important`);
    }

    $(".card").each(function (i, card) {
      card.addEventListener('mouseover', function () {
        stylish(card, main);

        $(card).find('.cardIcon').each((ii, s) => stylish(s, {color: iconColor}));
        $(card).find('.cardTitle').each((ii, s) => stylish(s, {color: titleColor}));
      });

      card.addEventListener('mouseout', function () {
        unstylish(card, main);

        for (const sub of subs) {
          $(card).find(`.${sub}`).each((ii, s) => unstylish(s, {color}));
        }
      });
    });
  });

});
