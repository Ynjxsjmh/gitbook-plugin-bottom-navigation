require(["gitbook", "jQuery"], function(gitbook, $) {

  gitbook.events.bind("page.change", function(event) {
    const config = gitbook.state.config.pluginsConfig["bottom-navigation"];

    const navPrevSelector = config.navPrevSelector || '.navigation-prev';
    const navNextSelector = config.navNextSelector || '.navigation-next';

    if ($('.navPagesContainer .cardPrevious')) {
      $('.navPagesContainer .cardPrevious').attr('href', $(navPrevSelector).attr('href'));
    }

    if ($('.navPagesContainer .cardNext')) {
      $('.navPagesContainer .cardNext').attr('href', $(navNextSelector).attr('href'));
    }
  });

});
