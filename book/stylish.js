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

    const color = config.color;
    const main = {color, borderColor: `${color}`, cursor: "pointer"};
    const subs = ['cardIcon', 'cardTitle'];

    $(".card").each(function () {
      var card = this;

      card.addEventListener('mouseover', function () {
        stylish(card, main);

        for (const sub of subs) {
          $(`.${sub}`).each(() => stylish(this, {color}));
        }
      });

      card.addEventListener('mouseout', function () {
        unstylish(card, main);

        for (const sub of subs) {
          $(`.${sub}`).each(() => unstylish(this, {color}));
        }
      });
    });
  });

});
