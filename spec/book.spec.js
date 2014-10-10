define(['src/book'], function(Book) {
  describe('Book', function() {

    it('blalala', function() {
      var book = new Book('livrodoscott');

      expect(book.title).toBe('livrodoscott');
    });

    it('is favourited', function() {
      var book = new Book('livrodoscott');

      expect(book.isFavourited()).toBe(false);

      book.persistFavouriteStatus(true);

      expect(book.isFavourited()).toBe(true);
    });
  });
});
