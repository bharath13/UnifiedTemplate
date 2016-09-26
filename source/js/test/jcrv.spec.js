var jcr = require('../../../vendor/jcr/jcrv.js');
var expect = require('chai').expect;

describe('jcr testing suite', function() {

    it('should validate the reference file - article.json', function() {
        expect(function(){
            jcr('source/_patterns/04-pages/article.jcr', '../../source/_patterns/04-pages/article.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article-title.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/02-text/article-title.jcr', '../../source/_patterns/00-atoms/02-text/article-title.json');
        }).to.not.throw(Error);
    });

});