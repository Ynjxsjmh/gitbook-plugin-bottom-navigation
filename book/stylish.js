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
  const color = "#873077";
  const main = {color, borderColor: `${color}`, cursor: "pointer"};
  const subs = ['cardIcon', 'cardTitle'];

  gitbook.events.bind("page.change", function() {

    Array.from(document.getElementsByClassName('card')).forEach(element => {
      element.addEventListener('mouseover', function () {
        stylish(element, main);

        for (const sub of subs) {
          Array.from(document.getElementsByClassName(sub)).forEach(e => {
            stylish(e, {color});
          });
        }
      });

      element.addEventListener('mouseout', function () {
        unstylish(element, main);

        for (const sub of subs) {
          Array.from(document.getElementsByClassName(sub)).forEach(e => {
            unstylish(e, {color});
          });
        }
      });
    });
  });

});
