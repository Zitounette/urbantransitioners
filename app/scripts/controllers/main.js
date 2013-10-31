'use strict';

angular.module('urban')
  .controller('mainCtrl', ['$scope', function ($scope) {
    $scope.main = {
    	title: 'U R B A N T R A N S I T I O N E R S',
    	lang: 'en',
    	messages: {
    		en : {
    			about: 'About',
    			contact: 'Contact',
    			blog: 'Blog',
    			links: 'Links',
    			team: 'Team',
    			projects: 'Projects',
    			mainTitle: 'We work for a smoother urban transition.'
    		},
    		swh: {
    			about: 'kuhusu',
    			contact: 'kuwasiliana na',
    			blog: 'blog',
    			links: 'viungo',
    			team: 'timu',
    			projects: 'miradi',
    			mainTitle: 'Sisi kazi kwa ajili ya mpito laini ya mijini.'
    		}
    	}
    };
  }]);
