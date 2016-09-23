var jcr = require('../../../vendor/jcr/jcrv.js');
var expect = require('chai').expect;

describe('jcr testing suite - Test artcile.json', function() {
    it('should validate the reference article file', function() {
        expect(function(){
            jcr('source/_patterns/04-pages/article.json', 'source/_patterns/04-pages/article.json');
        }).to.throw(Error);
    });
});
