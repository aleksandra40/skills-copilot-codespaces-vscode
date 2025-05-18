function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: '/app/components/skills/member.html',
        link: function (scope, element, attrs) {

            scope.$watch('member', function (newVal, oldVal) {
                if (newVal !== oldVal) {
                    // Perform any necessary updates when the member changes
                }
            });
        }
    };
}