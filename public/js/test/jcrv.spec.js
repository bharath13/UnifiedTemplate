var jcr = require('../../../vendor/jcr/jcrv.js');
var expect = require('chai').expect;

describe('jcr testing suite', function() {

    it('should validate the reference file - article-title.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/02-text/article-title.jcr', '../../source/_patterns/00-atoms/02-text/article-title.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - copyright.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/02-text/copyright.jcr', '../../source/_patterns/00-atoms/02-text/copyright.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-meta-info.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/02-text/recipe-meta-info.jcr', '../../source/_patterns/00-atoms/02-text/recipe-meta-info.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - byline-text.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/byline/byline-text.jcr', '../../source/_patterns/00-atoms/byline/byline-text.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - profile-image.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/byline/profile-image.jcr', '../../source/_patterns/00-atoms/byline/profile-image.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - breadcrumbs.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/navigation/breadcrumbs.jcr', '../../source/_patterns/00-atoms/navigation/breadcrumbs.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - keyword.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/text/keyword.jcr', '../../source/_patterns/00-atoms/text/keyword.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - section-title.json', function() {
        expect(function(){
            jcr('source/_patterns/00-atoms/text/section-title.jcr', '../../source/_patterns/00-atoms/text/section-title.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article-text.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/article/article-text.jcr', '../../source/_patterns/01-molecules/article/article-text.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - brand-social.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/blocks/brand-social.jcr', '../../source/_patterns/01-molecules/blocks/brand-social.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - byline.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/blocks/byline.jcr', '../../source/_patterns/01-molecules/blocks/byline.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - keyword-set.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/blocks/keyword-set.jcr', '../../source/_patterns/01-molecules/blocks/keyword-set.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recirc-list.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/blocks/recirc-list.jcr', '../../source/_patterns/01-molecules/blocks/recirc-list.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - share-tools.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/blocks/share-tools.jcr', '../../source/_patterns/01-molecules/blocks/share-tools.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - list-with-divider.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/lists/list-with-divider.jcr', '../../source/_patterns/01-molecules/lists/list-with-divider.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - primary-menu.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/navigation/primary-menu.jcr', '../../source/_patterns/01-molecules/navigation/primary-menu.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - secondary-menu.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/navigation/secondary-menu.jcr', '../../source/_patterns/01-molecules/navigation/secondary-menu.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-meta.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/recipe/recipe-meta.jcr', '../../source/_patterns/01-molecules/recipe/recipe-meta.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - blockquote.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/text/blockquote.jcr', '../../source/_patterns/01-molecules/text/blockquote.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - section-title.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/text/section-title.jcr', '../../source/_patterns/01-molecules/text/section-title.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - tout-400x300.json', function() {
        expect(function(){
            jcr('source/_patterns/01-molecules/touts/tout-400x300.jcr', '../../source/_patterns/01-molecules/touts/tout-400x300.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article-body.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/article/article-body.jcr', '../../source/_patterns/02-organisms/article/article-body.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article-credit.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/article/article-credit.jcr', '../../source/_patterns/02-organisms/article/article-credit.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article-header.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/article/article-header.jcr', '../../source/_patterns/02-organisms/article/article-header.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article-media.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/article/article-media.jcr', '../../source/_patterns/02-organisms/article/article-media.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article-meta.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/article/article-meta.jcr', '../../source/_patterns/02-organisms/article/article-meta.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article-title.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/article/article-title.jcr', '../../source/_patterns/02-organisms/article/article-title.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - dek.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/article/dek.jcr', '../../source/_patterns/02-organisms/article/dek.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - full-width-subscribe.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/full-width-subscribe/full-width-subscribe.jcr', '../../source/_patterns/02-organisms/full-width-subscribe/full-width-subscribe.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - chicory.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/chicory.jcr', '../../source/_patterns/02-organisms/recipe/chicory.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - nutrition-list.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/nutrition-list.jcr', '../../source/_patterns/02-organisms/recipe/nutrition-list.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-description.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-description.jcr', '../../source/_patterns/02-organisms/recipe/recipe-description.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-header.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-header.jcr', '../../source/_patterns/02-organisms/recipe/recipe-header.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-ingredient-list.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-ingredient-list.jcr', '../../source/_patterns/02-organisms/recipe/recipe-ingredient-list.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-instruction-list-item.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-instruction-list-item.jcr', '../../source/_patterns/02-organisms/recipe/recipe-instruction-list-item.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-instruction-list.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-instruction-list.jcr', '../../source/_patterns/02-organisms/recipe/recipe-instruction-list.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-list.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-list.jcr', '../../source/_patterns/02-organisms/recipe/recipe-list.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-main-content.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-main-content.jcr', '../../source/_patterns/02-organisms/recipe/recipe-main-content.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-meta-footer.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-meta-footer.jcr', '../../source/_patterns/02-organisms/recipe/recipe-meta-footer.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-sidebar.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-sidebar.jcr', '../../source/_patterns/02-organisms/recipe/recipe-sidebar.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - recipe-title.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/recipe-title.jcr', '../../source/_patterns/02-organisms/recipe/recipe-title.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - related-content.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/recipe/related-content.jcr', '../../source/_patterns/02-organisms/recipe/related-content.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - sidebar-body.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/sidebar/sidebar-body.jcr', '../../source/_patterns/02-organisms/sidebar/sidebar-body.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - site-footer.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/site-footer/site-footer.jcr', '../../source/_patterns/02-organisms/site-footer/site-footer.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - site-header.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/site-header/site-header.jcr', '../../source/_patterns/02-organisms/site-header/site-header.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - glance-bar.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/site-menu/glance-bar.jcr', '../../source/_patterns/02-organisms/site-menu/glance-bar.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - search-bar.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/site-menu/search-bar.jcr', '../../source/_patterns/02-organisms/site-menu/search-bar.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - site-menu.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/site-menu/site-menu.jcr', '../../source/_patterns/02-organisms/site-menu/site-menu.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - site-nav.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/site-nav/site-nav.jcr', '../../source/_patterns/02-organisms/site-nav/site-nav.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - article.json', function() {
        expect(function(){
            jcr('source/_patterns/04-pages/article.jcr', '../../source/_patterns/04-pages/article.json');
        }).to.not.throw(Error);
    });

    it('should validate the reference file - glance-bar.json', function() {
        expect(function(){
            jcr('source/_patterns/02-organisms/site-menu/glance-bar.jcr', '../../source/_patterns/02-organisms/site-menu/glance-bar.json');
        }).to.not.throw(Error);
    });

});