define(['src/song'], function(Song) {
  describe('Song', function() {

    it('can create a song', function() {
      var song = new Song('Daft Punk', 'Get Lucky');

      expect(song.artist).toBe('Daft Punk');
      expect(song.title).toBe('Get Lucky');
    });
  });
});
