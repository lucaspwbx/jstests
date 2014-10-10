define(function() {
  'use strict';

  function Book(title) {
    this.title = title;
  }

  Book.prototype.isFavourited = function() {
    return this.favourited === true;
  };

  Book.prototype.persistFavouriteStatus = function(value) {
    this.favourited = true;
  };

  return Book;
});
