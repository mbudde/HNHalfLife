// ==UserScript==
// @name           HNHalfLife
// @description    This script aims to reduce HN conversation half-lifes by making it easy to find new comments
// @include        http://news.ycombinator.com/*
// @include        https://news.ycombinator.com/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js
// ==/UserScript==

    //jQuery-JSON plugin v2.3-min
    (function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
    var type=typeof o;if(type==='undefined'){return undefined;}
    if(type==='number'||type==='boolean'){return''+o;}
    if(type==='string'){return $.quoteString(o);}
    if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
    if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
    if(day<10){day='0'+day;}
    if(hours<10){hours='0'+hours;}
    if(minutes<10){minutes='0'+minutes;}
    if(seconds<10){seconds='0'+seconds;}
    if(milli<100){milli='0'+milli;}
    if(milli<10){milli='0'+milli;}
    return'"'+year+'-'+month+'-'+day+'T'+
    hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
    if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
    return'['+ret.join(',')+']';}
    var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
    type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
    val=$.toJSON(o[k]);pairs.push(name+':'+val);}
    return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
    c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
    return'"'+string+'"';};})(jQuery);

    /*
    * ----------------------------- JSTORAGE -------------------------------------
    * Simple local storage wrapper to save data on the browser side, supporting
    * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
    *
    * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
    * Project homepage: www.jstorage.info
    *
    * Licensed under MIT-style license:
    */
    (function(a){function o(){var a,c,d,e=Infinity,f=false;clearTimeout(i);if(!b.__jstorage_meta||typeof b.__jstorage_meta.TTL!="object"){return}a=+(new Date);d=b.__jstorage_meta.TTL;for(c in d){if(d.hasOwnProperty(c)){if(d[c]<=a){delete d[c];delete b[c];f=true}else if(d[c]<e){e=d[c]}}}if(e!=Infinity){i=setTimeout(o,e-a)}if(f){m()}}function n(a){if(!a||typeof a!="string"&&typeof a!="number"){throw new TypeError("Key name must be string or numeric")}if(a=="__jstorage_meta"){throw new TypeError("Reserved key name")}return true}function m(){try{c.jStorage=f(b);if(d){d.setAttribute("jStorage",c.jStorage);d.save("jStorage")}e=c.jStorage?String(c.jStorage).length:0}catch(a){}}function l(){if(c.jStorage){try{b=g(String(c.jStorage))}catch(a){c.jStorage="{}"}}else{c.jStorage="{}"}e=c.jStorage?String(c.jStorage).length:0}function k(){var a=false;if("localStorage"in window){try{window.localStorage.setItem("_tmptest","tmpval");a=true;window.localStorage.removeItem("_tmptest")}catch(b){}}if(a){try{if(window.localStorage){c=window.localStorage;h="localStorage"}}catch(e){}}else if("globalStorage"in window){try{if(window.globalStorage){c=window.globalStorage[window.location.hostname];h="globalStorage"}}catch(f){}}else{d=document.createElement("link");if(d.addBehavior){d.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(d);d.load("jStorage");var g="{}";try{g=d.getAttribute("jStorage")}catch(i){}c.jStorage=g;h="userDataBehavior"}else{d=null;return}}l();o()}if(!a||!(a.toJSON||Object.toJSON||window.JSON)){throw new Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!")}var b={},c={jStorage:"{}"},d=null,e=0,f=a.toJSON||Object.toJSON||window.JSON&&(JSON.encode||JSON.stringify),g=a.evalJSON||window.JSON&&(JSON.decode||JSON.parse)||function(a){return String(a).evalJSON()},h=false,i,j={isXML:function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":false},encode:function(a){if(!this.isXML(a)){return false}try{return(new XMLSerializer).serializeToString(a)}catch(b){try{return a.xml}catch(c){}}return false},decode:function(a){var b="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(a){var b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a);return b},c;if(!b){return false}c=b.call("DOMParser"in window&&new DOMParser||window,a,"text/xml");return this.isXML(c)?c:false}};a.jStorage={version:"0.1.6.1",set:function(a,c){n(a);if(j.isXML(c)){c={_is_xml:true,xml:j.encode(c)}}else if(typeof c=="function"){c=null}else if(c&&typeof c=="object"){c=g(f(c))}b[a]=c;m();return c},get:function(a,c){n(a);if(a in b){if(b[a]&&typeof b[a]=="object"&&b[a]._is_xml&&b[a]._is_xml){return j.decode(b[a].xml)}else{return b[a]}}return typeof c=="undefined"?null:c},deleteKey:function(a){n(a);if(a in b){delete b[a];if(b.__jstorage_meta&&typeof b.__jstorage_meta.TTL=="object"&&a in b.__jstorage_meta.TTL){delete b.__jstorage_meta.TTL[a]}m();return true}return false},setTTL:function(a,c){var d=+(new Date);n(a);c=Number(c)||0;if(a in b){if(!b.__jstorage_meta){b.__jstorage_meta={}}if(!b.__jstorage_meta.TTL){b.__jstorage_meta.TTL={}}if(c>0){b.__jstorage_meta.TTL[a]=d+c}else{delete b.__jstorage_meta.TTL[a]}m();o();return true}return false},flush:function(){b={};m();return true},storageObj:function(){function a(){}a.prototype=b;return new a},index:function(){var a=[],c;for(c in b){if(b.hasOwnProperty(c)&&c!="__jstorage_meta"){a.push(c)}}return a},storageSize:function(){return e},currentBackend:function(){return h},storageAvailable:function(){return!!h},reInit:function(){var a,b;if(d&&d.addBehavior){a=document.createElement("link");d.parentNode.replaceChild(a,d);d=a;d.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(d);d.load("jStorage");b="{}";try{b=d.getAttribute("jStorage")}catch(e){}c.jStorage=b;h="userDataBehavior"}l()}};k()})(window.jQuery||window.$)



if (window.location.pathname !== "/saved") {
    var user = $("span.pagetop a[href^=user]").attr("href").match(/user\?id=([A-Za-z0-9_]+)/)[1];
    $("span.pagetop:first").append(" | <a href='http://news.ycombinator.com/saved?id=" + user + "'>saved</a>");
}


if (window.location.pathname === "/item") {
    var $subtext = $("td.subtext:first");
    var storyId = $subtext.find("a[href^=item]").attr("href").substring(8);
    var numComments = $subtext.find("a[href^=item]").text().match(/([0-9]+) comments?/)[1];

    var story = $.jStorage.get(storyId);
    if (!story || !story.maxCommentId) {
        var maxCommentId = 0;
        $('span.comhead a[href^=item]').each(function() {
            var id = Number($(this).attr('href').substring(8));
            if (id > maxCommentId) {
              maxCommentId = id;
            }
        });
        var dataToInsert = {
            "numComments": numComments,
            "maxCommentId": maxCommentId
        };

        $.jStorage.set(storyId, dataToInsert);
    } else {
        var commentDiff = numComments - story.numComments;

        if (commentDiff >= 1) {
            // Update the subtext at top of story
            $subtext.find('a[href^=item]:last').append(" (" + commentDiff.toString() + " new)");

            // Really gross inline HTML here, needs a better solution
            $('img[src$="s\.gif"][width="0"]:first')
                .parents()
                .eq(7)
                .prepend('<table id="newComments" style="margin-left:7px"><thead><tr><td class="comhead" colspan="2"><a href="#" id="showComments">Show New Comments</a></td></tr></thead></table>');

            $('<tbody id="newCommentsBody"></tbody>').css("display","none").appendTo("#newComments");
            $('<tfooter><tr><td><br/></td></tr></footer>').appendTo("#newComments");


            var potentialNewComments = new Array();
            var newMaxCommentId = story.maxCommentId;

            // Find all new comments
            $("span.comhead:not(:first)").each(function() {
                var commentAuthor = $(this).find("a[href^=user]").text();
                if (!commentAuthor) return; // Deleted comment
                var commentId = Number($(this).find("a[href^=item]").attr("href").substring(8));
                var commentText = $(this).parents().eq(1).find("span.comment > span").text().substring(0, 80);
                if (commentId > newMaxCommentId) {
                    newMaxCommentId = commentId;
                }

                if (commentId > story.maxCommentId) {
                    potentialNewComments.push({
                        "commentDOMObject": this,
                        "commentId": commentId,
                        "commentText": commentText,
                        "commentAuthor": commentAuthor
                    });
                }
            });

            // Sorts descending, so the most recent comments (largest numbers) come first
            potentialNewComments.sort(function(a, b) {
                return a.commentId < b.commentId;
            });

            // This should never happen, but just in case...
            if (potentialNewComments.length < commentDiff) {
                commentDiff = potentialNewComments.length;
            }

            // Finally, add the indicator for new comments.  Also adds to "comment list" at top of page
            // Really gross inline HTML here, needs a better solution
            for (var tIndex = 0; tIndex < commentDiff; ++tIndex) {
                $(potentialNewComments[tIndex].commentDOMObject)
                    .find('a[href^=item]')
                    .css('color', '#FF6C0A')
                    .attr('name', potentialNewComments[tIndex].commentId);
                $("<tr><td style='width: 10px'></td><td class='default'><span class='comhead'>" + potentialNewComments[tIndex].commentAuthor + " says: <a style='text-decoration: underline' href='#" + potentialNewComments[tIndex].commentId + "'> " + potentialNewComments[tIndex].commentText + "[...]</a></span></td></tr>").appendTo("#newCommentsBody");
            }

            setTimeout(function() {
                $.jStorage.set(storyId, {
                  'numComments': numComments,
                  'maxCommentId': newMaxCommentId
                });
            }, 5000);

        }

    }

    // Event handler for "comment list"
    $("#showComments").click(function(e) {
        if ($("#newCommentsBody").is(":visible"))
            $(this).text("Show New Comments");
        else
            $(this).text("Hide New Comments");

       $("#newCommentsBody").toggle();
       e.preventDefault();
    });

}

// Update main index pages with "New Comments" text
else if (window.location.pathname.match(/\/(?:news|newest|ask|best|active|noobstories|saved|x)/)) {
    $("td.subtext").each(function() {

        // A little kludgy, but this checks for the occasional job posting, which
        // don't have normal subtext lines (no points, comments, etc)
        if ($(this).text().match("point")) {

            var commentsLink = $(this).find("a[href^=item]:last");
            var id = commentsLink.attr("href").substring(8);
            
            // Check to see if this story is in our storage
            var story = $.jStorage.get(id);

            if (story) {
                var numComments = commentsLink.text().match(/([0-9]+) comments?/)[1];
                var commentDiff = numComments - story.numComments;

                if (commentDiff > 0) {
                    $("<span> (" + commentDiff.toString() + " new)</span>").css("color","#FF6C0A").appendTo(commentsLink);
                }

            }
        }
    });
}
