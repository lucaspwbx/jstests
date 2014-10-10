define(function() {

  'use strict';

  function Stock() {
  }

  Stock.prototype.fetch = function() {
    var url = "/stocks/AOUE";
    var that = this;

    $.getJSON(url, function(data) {
      that.sharePrice = data.sharePrice;
    });
  };

  Stock.prototype.postSharePrice = function() {
    var that = this;

    $.ajax({
      url: "/teste/0",
      type: "POST",
      success: function(data) {
        that.sharePrice = data.sharePrice;
      },
      error: function(data) {
        that.sharePrice = 0;
      }
    });
  };

  return Stock;
});
