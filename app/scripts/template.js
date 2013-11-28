angular.module('urban').run(['$templateCache', function($templateCache) {
$templateCache.put('views/about.html', "<h1>About</h1>");
$templateCache.put('views/contact.html', "<h1>Contact</h1>");
$templateCache.put('views/links.html', "<h1>Links</h1>");
$templateCache.put('views/main.html', "<div style=\"main-content\">\r\n\t<h1>{{main.messages[main.lang].mainTitle}}</h1>\r\n</div>");
$templateCache.put('views/projects.html', "<h1>Projects</h1>");
$templateCache.put('views/team.html', "<section class=\"team\">\r\n<h1 class=\"opaque\">Team page</h1>\r\n<h2 class=\"opaque\">Zita Floret</h2>\r\n<p class=\"opaque\">sdfiarfkamdscölkaeoriadkclamdfajrf sdfnhdsfijsakdakjf</p>\r\n<p class=\"opaque\">paragraph</p>\r\n<img width=\"200px\" class=\"zita\" src=\"images/Zitaprofile.JPG\">\r\n</section>");
$templateCache.put('templates/header.html', "<h1 class=\"title\"><a class=\"link\" href=\"#/\">URBANTRANSITIONERS</a></h1>\r\n\r\n<a href=\"#/about\" class=\"link\">{{main.messages[main.lang].about}}</a>\r\n<a target=\"_blank\" href=\"http://urbantransitioners.tumblr.com\" class=\"link\">{{main.messages[main.lang].blog}}</a>\r\n<a href=\"#/links\" class=\"link\">{{main.messages[main.lang].links}}</a>\r\n<a href=\"#/team\" class=\"link\">{{main.messages[main.lang].team}}</a>\r\n<a href=\"#/contact\" class=\"link\">{{main.messages[main.lang].contact}}</a>\r\n\r\n<div class=\"language-select\">\r\n\t<a href=\"javascript: 0 void\" ng-click=\"main.lang = 'en'\">en</a>\r\n    <a href=\"javascript: 0 void\" ng-click=\"main.lang = 'swh'\">swh</a>\r\n</div>");
}]);