"use strict";(self.webpackChunkapp_upcomputers=self.webpackChunkapp_upcomputers||[]).push([[649],{9649:(q,l,r)=>{r.r(l),r.d(l,{ContactModule:()=>I});var s=r(6895),i=r(9541),c=r(433),o=r(1571);function m(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs at least 4 characters. "),o.qZA())}function d(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs to be filled. "),o.qZA())}function u(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,m,2,0,"small",7),o.YNc(2,d,2,0,"small",7),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.contactForm.controls.name.hasError("minLength")),o.xp6(1),o.Q6J("ngIf",e.contactForm.controls.name.hasError("required"))}}function p(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs at least 10 characters. "),o.qZA())}function f(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs to be filled. "),o.qZA())}function g(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,p,2,0,"small",7),o.YNc(2,f,2,0,"small",7),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.contactForm.controls.subject.hasError("minLength")),o.xp6(1),o.Q6J("ngIf",e.contactForm.controls.subject.hasError("required"))}}function _(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs at least 11 characters. "),o.qZA())}function h(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs to be filled. "),o.qZA())}function C(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs a valid e-mail. "),o.qZA())}function v(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs to be filled."),o.qZA())}function F(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,C,2,0,"small",7),o.YNc(2,v,2,0,"small",7),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.contactForm.controls.email.hasError("minLength")),o.xp6(1),o.Q6J("ngIf",e.contactForm.controls.email.hasError("required"))}}function T(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs at least 20 characters. "),o.qZA())}function Z(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," This field needs to be filled."),o.qZA())}function b(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,T,2,0,"small",7),o.YNc(2,Z,2,0,"small",7),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.contactForm.controls.message.hasError("minLength")),o.xp6(1),o.Q6J("ngIf",e.contactForm.controls.message.hasError("required"))}}const y=[{path:"",component:(()=>{class t{constructor(e){this.fb=e,this.contactForm=this.fb.group({name:["",[c.kI.minLength(4),c.kI.required]],subject:["",[c.kI.minLength(10),c.kI.required]],phone:["",[c.kI.minLength(11),c.kI.required]],email:["",[c.kI.email,c.kI.required]],message:["",[c.kI.minLength(20),c.kI.required]]})}ngOnInit(){}formSent(){alert("The message was successfully sent!"),this.contactForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-contact"]],decls:24,vars:28,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Write your name","formControlName","name"],[4,"ngIf"],["type","subject","placeholder","Write you subject","formControlName","subject"],["type","phone","placeholder","(00) 0 0000-0000","formControlName","phone"],["class","error-message",4,"ngIf"],["type","email","placeholder","Write your e-mail","formControlName","email"],["maxlength","300","placeholder","Write your message...","rows","5","formControlName","message"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.604235823089!2d13.332777476009193!3d52.50440323738502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850e8a82af437%3A0xc9786de6c60b8170!2sKurf%C3%BCrstendamm%2C%20Berlin%2C%20Germany!5e0!3m2!1sus-US!2sus!4v1686182926786!5m2!1sus-US!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],[1,"error-message"]],template:function(e,n){1&e&&(o.TgZ(0,"h2",0),o._uU(1,"Contact us"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubmit",function(){return n.formSent()}),o._UZ(4,"input",3),o.YNc(5,u,3,2,"div",4),o._UZ(6,"input",5),o.YNc(7,g,3,2,"div",4),o._UZ(8,"input",6),o.TgZ(9,"div"),o.YNc(10,_,2,0,"small",7),o.YNc(11,h,2,0,"small",7),o.qZA(),o._UZ(12,"input",8),o.YNc(13,F,3,2,"div",4),o._UZ(14,"textarea",9),o.YNc(15,b,3,2,"div",4),o.TgZ(16,"button",10),o._uU(17,"Send"),o.qZA()(),o.TgZ(18,"address"),o._UZ(19,"iframe",11),o.TgZ(20,"p")(21,"span"),o._uU(22,"UP COMPUTERS Store"),o.qZA(),o._uU(23," - Kurf\xfcrstendamm, Berlin, Germany"),o.qZA()()()),2&e&&(o.xp6(3),o.Q6J("formGroup",n.contactForm),o.xp6(1),o.ekj("valid",n.contactForm.controls.name.valid)("invalid",n.contactForm.controls.name.invalid&&(n.contactForm.controls.name.touched||n.contactForm.controls.name.dirty)),o.xp6(1),o.Q6J("ngIf",n.contactForm.controls.name.invalid&&(n.contactForm.controls.name.touched||n.contactForm.controls.name.dirty)),o.xp6(1),o.ekj("valid",n.contactForm.controls.subject.valid)("invalid",n.contactForm.controls.subject.invalid&&(n.contactForm.controls.subject.touched||n.contactForm.controls.subject.dirty)),o.xp6(1),o.Q6J("ngIf",n.contactForm.controls.subject.invalid&&(n.contactForm.controls.subject.touched||n.contactForm.controls.subject.dirty)),o.xp6(1),o.ekj("valid",n.contactForm.controls.phone.valid)("invalid",n.contactForm.controls.phone.invalid&&(n.contactForm.controls.phone.touched||n.contactForm.controls.phone.dirty)),o.xp6(2),o.Q6J("ngIf",n.contactForm.controls.phone.hasError("minLength")),o.xp6(1),o.Q6J("ngIf",n.contactForm.controls.phone.hasError("required")),o.xp6(1),o.ekj("valid",n.contactForm.controls.email.valid)("invalid",n.contactForm.controls.email.invalid&&(n.contactForm.controls.email.touched||n.contactForm.controls.email.dirty)),o.xp6(1),o.Q6J("ngIf",n.contactForm.controls.email.invalid&&(n.contactForm.controls.email.touched||n.contactForm.controls.email.dirty)),o.xp6(1),o.ekj("valid",n.contactForm.controls.message.valid)("invalid",n.contactForm.controls.message.invalid&&(n.contactForm.controls.message.touched||n.contactForm.controls.message.dirty)),o.xp6(1),o.Q6J("ngIf",n.contactForm.controls.message.invalid&&(n.contactForm.controls.message.touched||n.contactForm.controls.message.dirty)),o.xp6(1),o.Q6J("disabled",n.contactForm.invalid))},dependencies:[s.O5,c._Y,c.Fj,c.JJ,c.JL,c.nD,c.sg,c.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}span[_ngcontent-%COMP%]{font-weight:700}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[i.Bz.forChild(y),i.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,x,c.UX]}),t})()}}]);