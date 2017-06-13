/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from './header.component.ngfactory';
import * as import2 from './header.component';
import * as import3 from '@angular/router';
import * as import4 from './errors/error.component.ngfactory';
import * as import5 from './errors/error.component';
import * as import6 from './errors/error.service';
import * as import7 from './app.component';
var styles_AppComponent = [];
export var RenderType_AppComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_AppComponent,
    data: {}
});
export function View_AppComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 9, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'app-header', [], null, null, null, import1.View_HeaderComponent_0, import1.RenderType_HeaderComponent)),
        import0.ɵdid(49152, null, 0, import2.HeaderComponent, [], null, null),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        import0.ɵdid(147456, null, 0, import3.RouterOutlet, [
            import3.RouterOutletMap,
            import0.ViewContainerRef,
            import0.ComponentFactoryResolver,
            [
                8,
                null
            ]
        ], null, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'app-error', [], null, null, null, import4.View_ErrorComponent_0, import4.RenderType_ErrorComponent)),
        import0.ɵdid(114688, null, 0, import5.ErrorComponent, [import6.ErrorService], null, null),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        ck(v, 12, 0);
    }, null);
}
function View_AppComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'my-app', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        import0.ɵdid(49152, null, 0, import7.AppComponent, [], null, null)
    ], null, null);
}
export var AppComponentNgFactory = import0.ɵccf('my-app', import7.AppComponent, View_AppComponent_Host_0, {}, {}, []);
