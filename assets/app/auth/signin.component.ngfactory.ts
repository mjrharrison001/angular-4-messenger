/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './signin.component';
import * as import2 from '@angular/forms';
import * as import3 from './auth.service';
import * as import4 from '@angular/router';
const styles_SigninComponent:any[] = ([] as any[]);
export const RenderType_SigninComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_SigninComponent,
  data: {}
}
);
export function View_SigninComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),37,'div',[[
        'class',
        'col-md-8 col-md-offset-2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),34,'form',[[
        'novalidate',
        ''
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngSubmit'
      ]
      ,
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.SigninComponent = v.component;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,4).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,4).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngSubmit' === en)) {
        const pd_2:any = ((<any>co.onSubmit()) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.ɵbf,([] as any[]),(null as any),(null as any)),
    import0.ɵdid(540672,(null as any),0,import2.FormGroupDirective,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
      ,{form: [
        0,
        'form'
      ]
    },{ngSubmit: 'ngSubmit'}),
    import0.ɵprd(2048,(null as any),import2.ControlContainer,(null as any),[import2.FormGroupDirective]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatusGroup,[import2.ControlContainer],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'email'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Mail'])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'formControlName',
        'email'
      ]
      ,
      [
        'id',
        'email'
      ]
      ,
      [
        'type',
        'email'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,14)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,14).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,14)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,14)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(671744,(null as any),0,import2.FormControlName,[
      [
        3,
        import2.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import0.ɵprd(2048,(null as any),import2.NgControl,(null as any),[import2.FormControlName]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'password'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Password'])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'formControlName',
        'password'
      ]
      ,
      [
        'id',
        'password'
      ]
      ,
      [
        'type',
        'password'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,27)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,27).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,27)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,27)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(671744,(null as any),0,import2.FormControlName,[
      [
        3,
        import2.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import0.ɵprd(2048,(null as any),import2.NgControl,(null as any),[import2.FormControlName]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-primary'
      ]
      ,
      [
        'type',
        'submit'
      ]

    ]
      ,[[
        8,
        'disabled',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Submit'])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import1.SigninComponent = v.component;
    const currVal_7:any = co.myForm;
    ck(v,4,0,currVal_7);
    const currVal_15:any = 'email';
    ck(v,16,0,currVal_15);
    const currVal_23:any = 'password';
    ck(v,29,0,currVal_23);
  },(ck,v) => {
    var co:import1.SigninComponent = v.component;
    const currVal_0:any = import0.ɵnov(v,6).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(v,6).ngClassTouched;
    const currVal_2:any = import0.ɵnov(v,6).ngClassPristine;
    const currVal_3:any = import0.ɵnov(v,6).ngClassDirty;
    const currVal_4:any = import0.ɵnov(v,6).ngClassValid;
    const currVal_5:any = import0.ɵnov(v,6).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(v,6).ngClassPending;
    ck(v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = import0.ɵnov(v,18).ngClassUntouched;
    const currVal_9:any = import0.ɵnov(v,18).ngClassTouched;
    const currVal_10:any = import0.ɵnov(v,18).ngClassPristine;
    const currVal_11:any = import0.ɵnov(v,18).ngClassDirty;
    const currVal_12:any = import0.ɵnov(v,18).ngClassValid;
    const currVal_13:any = import0.ɵnov(v,18).ngClassInvalid;
    const currVal_14:any = import0.ɵnov(v,18).ngClassPending;
    ck(v,13,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14);
    const currVal_16:any = import0.ɵnov(v,31).ngClassUntouched;
    const currVal_17:any = import0.ɵnov(v,31).ngClassTouched;
    const currVal_18:any = import0.ɵnov(v,31).ngClassPristine;
    const currVal_19:any = import0.ɵnov(v,31).ngClassDirty;
    const currVal_20:any = import0.ɵnov(v,31).ngClassValid;
    const currVal_21:any = import0.ɵnov(v,31).ngClassInvalid;
    const currVal_22:any = import0.ɵnov(v,31).ngClassPending;
    ck(v,26,0,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22);
    const currVal_24:boolean = !co.myForm.valid;
    ck(v,34,0,currVal_24);
  });
}
function View_SigninComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-signin',([] as any[]),(null as any),(null as any),(null as any),View_SigninComponent_0,RenderType_SigninComponent)),
    import0.ɵdid(114688,(null as any),0,import1.SigninComponent,[
      import3.AuthService,
      import4.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const SigninComponentNgFactory:import0.ComponentFactory<import1.SigninComponent> = import0.ɵccf('app-signin',import1.SigninComponent,View_SigninComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbWpyaGEvRG9jdW1lbnRzL0RvY3VtZW50cy9EZXZlbG9wbWVudC9VZGVteSBBbmd1bGFyIE5vZGUgSlMvc2VlZC1wcm9qZWN0L3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL2F1dGgvc2lnbmluLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9tanJoYS9Eb2N1bWVudHMvRG9jdW1lbnRzL0RldmVsb3BtZW50L1VkZW15IEFuZ3VsYXIgTm9kZSBKUy9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvYXV0aC9zaWduaW4uY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvbWpyaGEvRG9jdW1lbnRzL0RvY3VtZW50cy9EZXZlbG9wbWVudC9VZGVteSBBbmd1bGFyIE5vZGUgSlMvc2VlZC1wcm9qZWN0L3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL2F1dGgvc2lnbmluLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvbWpyaGEvRG9jdW1lbnRzL0RvY3VtZW50cy9EZXZlbG9wbWVudC9VZGVteSBBbmd1bGFyIE5vZGUgSlMvc2VlZC1wcm9qZWN0L3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL2F1dGgvc2lnbmluLmNvbXBvbmVudC50cy5TaWduaW5Db21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+TWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+XHJcbiIsIjxhcHAtc2lnbmluPjwvYXBwLXNpZ25pbj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQztNQUNwQztRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQTJCO1FBQUE7UUFBQTtNQUFBO01BQTNCO0lBQUE7Z0JBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBbUQ7TUFDakQ7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUN0QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1CO0lBQVk7SUFDL0I7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTs7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUkwQjtJQUN0QjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7TUFDdEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQjtJQUFnQjtJQUN0QztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7S0FBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBOztNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBSTZCO0lBQ3pCO0lBQ047TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUc2QjtJQUFlO0lBQ3ZDO0lBQ0g7Ozs7SUF0QkU7SUFBTixTQUFNLFNBQU47SUFPTTtJQUpGLFVBSUUsVUFKRjtJQVlFO0lBSkYsVUFJRSxVQUpGOzs7SUFYSjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFNBQUEscUVBQUE7SUFHSTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsMEVBQUE7SUFRQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsNEVBQUE7SUFTQTtJQUhGLFVBR0UsVUFIRjs7Ozs7SUNsQko7Z0JBQUE7OztJQUFBO0tBQUE7OztJQUFBOzs7In0=
