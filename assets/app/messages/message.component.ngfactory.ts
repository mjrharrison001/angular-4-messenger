/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './message.component';
import * as import3 from './message.service';
const styles_MessageComponent:any[] = ['.author[_ngcontent-%COMP%] {\n      display: inline-block;\n      font-style: italic;\n      font-size: 12px;\n      width: 80%;\n    }\n\n    .config[_ngcontent-%COMP%]{\n      display: inline-block;\n      text-align: right;\n      font-size: 12px;\n      width: 19%;\n    }'];
export const RenderType_MessageComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_MessageComponent,
  data: {}
}
);
function View_MessageComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onEdit()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Edit']))
  ]
  ,(null as any),(null as any));
}
function View_MessageComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onDelete()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Delete']))
  ]
  ,(null as any),(null as any));
}
export function View_MessageComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'article',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'panel-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n    ',
      '\n  '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'footer',[[
        'class',
        'panel-footer'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'author'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n      ',
      '\n    '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'config'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_MessageComponent_1)),
    import0.ɵdid(16384,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_MessageComponent_2)),
    import0.ɵdid(16384,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.MessageComponent = v.component;
    const currVal_2:any = co.belongsToUser();
    ck(v,13,0,currVal_2);
    const currVal_3:any = co.belongsToUser();
    ck(v,16,0,currVal_3);
  },(ck,v) => {
    var co:import2.MessageComponent = v.component;
    const currVal_0:any = co.message.content;
    ck(v,3,0,currVal_0);
    const currVal_1:any = co.message.username;
    ck(v,8,0,currVal_1);
  });
}
function View_MessageComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-message',([] as any[]),(null as any),(null as any),(null as any),View_MessageComponent_0,RenderType_MessageComponent)),
    import0.ɵdid(49152,(null as any),0,import2.MessageComponent,[import3.MessageService],(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const MessageComponentNgFactory:import0.ComponentFactory<import2.MessageComponent> = import0.ɵccf('app-message',import2.MessageComponent,View_MessageComponent_Host_0,{message: 'message'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbWpyaGEvRG9jdW1lbnRzL0RvY3VtZW50cy9EZXZlbG9wbWVudC9VZGVteSBBbmd1bGFyIE5vZGUgSlMvc2VlZC1wcm9qZWN0L3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL21qcmhhL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvVWRlbXkgQW5ndWxhciBOb2RlIEpTL3NlZWQtcHJvamVjdC9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL21qcmhhL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvVWRlbXkgQW5ndWxhciBOb2RlIEpTL3NlZWQtcHJvamVjdC9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvbWpyaGEvRG9jdW1lbnRzL0RvY3VtZW50cy9EZXZlbG9wbWVudC9VZGVteSBBbmd1bGFyIE5vZGUgSlMvc2VlZC1wcm9qZWN0L3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzLk1lc3NhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAge3sgbWVzc2FnZS5jb250ZW50IH19XHJcbiAgPC9kaXY+XHJcbiAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICB7eyBtZXNzYWdlLnVzZXJuYW1lIH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cclxuICAgICAgPGEgKGNsaWNrKT1cIm9uRWRpdCgpXCIgKm5nSWY9XCJiZWxvbmdzVG9Vc2VyKClcIj5FZGl0PC9hPlxyXG4gICAgICA8YSAoY2xpY2spPVwib25EZWxldGUoKVwiICpuZ0lmPVwiYmVsb25nc1RvVXNlcigpXCI+RGVsZXRlPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb290ZXI+XHJcbjwvYXJ0aWNsZT5cclxuIiwiPGFwcC1tZXNzYWdlPjwvYXBwLW1lc3NhZ2U+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DU007UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBRztRQUFBO1FBQUE7TUFBQTtNQUFIO0lBQUE7SUFBOEM7Ozs7OztNQUM5QztRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFHO1FBQUE7UUFBQTtNQUFBO01BQUg7SUFBQTtJQUFnRDs7Ozs7O01BVnREO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUM7TUFDbkM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRWxCO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2QjtNQUMzQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW9CO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFFZDtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBb0I7SUFDbEI7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzRDtJQUN0RDtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTBEO0lBQ3REO0lBQ0M7SUFDRDs7OztJQUprQjtJQUF0QixVQUFzQixTQUF0QjtJQUN3QjtJQUF4QixVQUF3QixTQUF4Qjs7O0lBVG9CO0lBQUE7SUFJRjtJQUFBOzs7OztJQ0x4QjtnQkFBQTs7OzsifQ==