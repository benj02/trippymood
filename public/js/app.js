(function($) {
  SC.initialize({
    client_id: '6ab048dec3b8ddde4cbbe5b0867b44bb',
  });

  SC.stream('/tracks/32536311').then(function(player){
    player.play();
    alert('test');
  });
})(jQuery);
