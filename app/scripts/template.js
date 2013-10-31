angular.module('urban').run(['$templateCache', function($templateCache) {
$templateCache.put('views/about.html', "<h1>About</h1>");
$templateCache.put('views/contact.html', "<h1>Contact</h1>");
$templateCache.put('views/links.html', "<h1>Links</h1>");
$templateCache.put('views/main.html', "<div style=\"main-content\">\n\t<h1>{{main.messages[main.lang].mainTitle}}</h1>\n</div>");
$templateCache.put('views/projects.html', "<h1>Projects</h1>");
$templateCache.put('views/team.html', "<h1>Team page</h1>\n<p>paragraph</p>\n<p>paragraph</p>");
$templateCache.put('templates/header.html', "<h1 class=\"title\"><a class=\"link\" href=\"#/\">URBANTRANSITIONERS</a></h1>\n\n<a href=\"#/about\" class=\"link\">{{main.messages[main.lang].about}}</a>\n<a target=\"_blank\" href=\"http://urbantransitioners.tumblr.com\" class=\"link\">{{main.messages[main.lang].blog}}</a>\n<a href=\"#/links\" class=\"link\">{{main.messages[main.lang].links}}</a>\n<a href=\"#/team\" class=\"link\">{{main.messages[main.lang].team}}</a>\n<a href=\"#/contact\" class=\"link\">{{main.messages[main.lang].contact}}</a>\n\n<div class=\"language-select\">\n\t<a href=\"javascript: 0 void\" ng-click=\"main.lang = 'en'\">en</a>\n    <a href=\"javascript: 0 void\" ng-click=\"main.lang = 'swh'\">swh</a>\n</div>");
}]);