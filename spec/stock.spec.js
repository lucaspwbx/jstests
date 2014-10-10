define(['src/stock'], function(Stock) {
  describe("Stock", function() {
    var stock;

    beforeEach(function() {
      stock = new Stock();
    });

    describe("quatro", function() {
      var xhr;

      describe("success", function() {
        beforeEach(function() {
          xhr = sinon.fakeServer.create();
          xhr.respondWith(
            'POST',
            /\/teste\/(.+)/,
            [200,
            { "Content-Type": "application/json"},
            '{"sharePrice":99}'
            ]);

          //     stock.fetch();
          stock.postSharePrice();
          xhr.respond();
        });

        afterEach(function() {
          xhr.restore();
        });

        it("uhul", function() {
          expect(stock.sharePrice).toEqual(99);
        });
      });

      describe("failure", function() {
        beforeEach(function() {
          xhr = sinon.fakeServer.create();
          xhr.respondWith(
            'POST',
            /\/teste\/(.+)/,
            [404,
            { "Content-Type": "application/json"},
            '{"sharePrice":0}'
            ]);

          stock.postSharePrice();
          xhr.respond();
        });

        afterEach(function() {
          xhr.restore();
        });

        it("uhul", function() {
          expect(stock.sharePrice).toEqual(0);
        });
      });

    });

    describe("tres", function() {
      var xhr;

      beforeEach(function() {
        xhr = sinon.fakeServer.create();
        xhr.respondWith(
          '/stocks/AOUE',
          [
          200,
          {"Content-Type":"application/json"},
          '{"sharePrice":20.50}'
          ]);
        stock.fetch();

        xhr.respond();
      });

      afterEach(function() {
        xhr.restore();
      });

      it("blalala", function() {
        expect(stock.sharePrice).toEqual(20.50);
      });
    });

    describe("um", function() {
      var xhr;

      beforeEach(function() {
        xhr = sinon.fakeServer.create();
        xhr.respondWith([
          200,
          {"Content-Type":"application/json"},
          '{"sharePrice":20.13}'
          ]);

        stock.fetch();

        xhr.respond();
      });

      afterEach(function() {
        xhr.restore();
      });

      it("should update its share price", function() {
        expect(stock.sharePrice).toEqual(20.13);
      });
    });

    describe("dois", function() {
      var xhr;

      beforeEach(function() {
        var fetchRequest;
        xhr = sinon.useFakeXMLHttpRequest();

        xhr.onCreate = function (request) {
          fetchRequest = request;
        };

        stock.fetch();

        fetchRequest.respond(
          200,
          {"Content-Type":"application/json"},
          '{"sharePrice": 20.13}'
          );
      });

      afterEach(function() {
        xhr.restore();
      });

      it("success", function() {
        expect(stock.sharePrice).toEqual(20.13);
      });
    });
  });
});
