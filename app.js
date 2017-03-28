angular.module('app', ['pdfjsViewer', 'ui.bootstrap', 'ngAnimate']);

angular.module('app').controller('AppCtrl', function($scope, $uibModal) {
  $scope.openIframe = function(){
    var pdf = $uibModal.open({
      template: [
        '<iframe style="overflow:hidden;height:90vh;width:100%" height="90vh" width="100%" src="example.pdf"></iframe>'
      ].join(''),
      controller: function($scope){
        $scope.pdf = {
            src: 'example.pdf'
        };
      },

      resolve: {
      }
    });
  }
  $scope.openPdf = function(){
    var pdf = $uibModal.open({
      template: [
        '<div class="some-pdf-container">',
          '<pdfjs-viewer src="{{ pdf.src }}"></pdfjs-viewer>',
        '</div>'
      ].join(''),
      controller: function($scope){
        $scope.pdf = {
            src: 'example.pdf'
        };
      },
      size: 'lg',
      resolve: {
      }
    });
  }
});
