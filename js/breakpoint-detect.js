/**
 * Detect the current active responsive breakpoint in Bootstrap
 * @returns {string}
 * @author farside {@link https://stackoverflow.com/users/4354249/farside}
 */
function getResponsiveBreakpoint() {
    var envs = {xs:"d-none", sm:"d-sm-none", md:"d-md-none", lg:"d-lg-none", xl:"d-xl-none"};
    var env = "";

    var $el = $("<div>");
    $el.appendTo($("body"));

    for (var i = Object.keys(envs).length - 1; i >= 0; i--) {
        env = Object.keys(envs)[i];
        $el.addClass(envs[env]);
        if ($el.is(":hidden")) {
            break; // env detected
        }
    }
    $el.remove();
    return env;
};