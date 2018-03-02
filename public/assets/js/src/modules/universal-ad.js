'use strict';

var $ = require('jquery');

module.exports = function () {
    var ads = null;
        var uat = function () {
            var _this = this;
            tgx_ad_slots.push(function(ti_ads) {
                _this.init();
                _this.inView = 0;
                ads = ti_ads;
                }
            );
        };

        // Initalize the library. Looks for <p> and <br> tags.. and calculates where to place the Ad
        uat.prototype.init = function () {
            // determine the placement for Universal Ad Call
            var pbr_nodes = $('.article__body > p, .article__body > br, .article__body > div, .article__body > blockquote');
            var articlePos = $('.article__body').position();
            var pos = null;
            var lastNodePos = null;
            var spacing = 600; // Minimum spacing between ads
            var nodeForSpacing = [];
            var adDiv, adDef;
            var adAmount = 0;
            var positionList = [];
            var postitionListMap = {};
            var a;
            var trackViewStatus = false;

            if (window.utilities.inBreakPoint('sm')) {
                trackViewStatus = true;
            }

            for (var i = 0; i < pbr_nodes.length; i++) {
                pos = $(pbr_nodes[i]).position();
                if (pos.top === 0) {
                    continue;
                }
                positionList.push([pos.top, $(pbr_nodes[i])]);

                a = 1;
            }

            positionList.sort(function(a, b) {
                return a[0] - b[0];
            });

            for (i = 0; i < positionList.length; i++) {

                 if (lastNodePos === null) {
                    lastNodePos = articlePos.top;
                 }
                 if ((positionList[i][0] > lastNodePos) && positionList[i][0] - lastNodePos > spacing) {
                    lastNodePos = positionList[i][0];
                 // If near outbrain don't load that ad
                 if (this.nearOutbrain(lastNodePos)) {
                    continue;
                 }
                 nodeForSpacing.push(positionList[i][1]);
                 }

            }
            for (i = 0; i < nodeForSpacing.length; i++) {

                adAmount++;
                adDef = this.ad(adAmount, trackViewStatus);
                adDiv = this.adDiv(adDef.id);

                $(nodeForSpacing[i]).after(adDiv);
                this.defineAd(adDef);
            }

        };

        //Add into ad slot
        uat.prototype.defineAd = function (adDef) {
            var _adDef = adDef;
            tgx_ad_slots.push(function(ads) {
                ads.addSlot(_adDef);
            });
        };

        //Check ads viewability to make true or false
        uat.prototype.adCallback = function(event, slot) {
            var i;
            if (event === 'inView') {
                this.inView++;
                for (i = 0; i < ads.exclusive.length; i++) {
                    ads.hide(ads.exclusive[i]);
                }
            }
            if (event === 'outOfView') {
                this.inView--;
                if (this.inView <= 0) {
                    for (i = 0; i < ads.exclusive.length; i++) {
                        ads.show(ads.exclusive[i], true);
                    }
                }
            }
        };

        //Define - 300x250 ad size to loads only for mobile
        uat.prototype.ad = function (adAmount, trackViewStatus) {
            var id = 'universal-ad-call_' + adAmount;
            var _this = this;
            var adDefinition = {
                'id': id,
                responsive: {
                    sm: {sizes: ['300x250'], callback: function(e){_this.adCallback(e, this)}},
                    md: {sizes: ['300x250'], callback: function(e){_this.adCallback(e, this)}},
                    lg: {sizes: ['300x250'], callback: function(e){_this.adCallback(e, this)}},
                    xl: {sizes: ['300x250'], callback: function(e){_this.adCallback(e, this)}}
                },
                defer: 100,
                trackView: trackViewStatus
            };
            return adDefinition;
        };

        //Apply 350x250 ad stye attributes
        uat.prototype.adDiv = function (id) {
            var divEl = document.createElement('div');
            divEl.setAttribute('id', id);
            divEl.setAttribute('style', 'display:block;margin-bottom:20px; margin:0 auto; text-align:center;');
            divEl.setAttribute('class', 'ad-350x250');

            return divEl;
        };

        //check outbrain is near by in the given position
        uat.prototype.nearOutbrain = function (pos) {
            var limit = 1000;
            var footerpos = $('.ad-outbrain').position();
            if (footerpos.top > pos && footerpos.top - pos < limit) {
                return true;
            }
            return false;
        };

        return new uat();
    };
