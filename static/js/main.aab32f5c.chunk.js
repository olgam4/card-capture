(this["webpackJsonpcard-capture"]=this["webpackJsonpcard-capture"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),u=n.n(i),c=(n(15),n(8)),s=(n(16),n(9)),o=(n(17),n(2)),h=n(3),d=n(4),l=function(){function e(){Object(o.a)(this,e),this._hand=[],this._discard=[]}return Object(h.a)(e,[{key:"drawFrom",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0;n<t;n++)this._hand=[].concat(Object(d.a)(this._hand),[e.draw()])}},{key:"calculateHandSize",value:function(){return this._hand.length}},{key:"displayHand",value:function(){return Object(d.a)(this._hand)}},{key:"displayDiscard",value:function(){return Object(d.a)(this._discard)}},{key:"buyFrom",value:function(e,t,n,a){var r=this;n.removeAt(t),this._discard=[].concat(Object(d.a)(this._discard),[e]),a.forEach((function(e){r._discard=[].concat(Object(d.a)(r._discard),[e]),r._hand=r._hand.filter((function(t){return!1===e.isTheSameAs(t)}))}))}}]),e}(),f=function(){function e(t){Object(o.a)(this,e),this.name=t}return Object(h.a)(e,[{key:"toString",value:function(){return"".concat(this.name)}}]),e}();f.Diamonds=new f("Diamonds"),f.Hearts=new f("Hearts"),f.Spades=new f("Spades"),f.Clubs=new f("Clubs"),f.Joker=new f("Joker");var v=f,p=function(){function e(t){Object(o.a)(this,e),this.value=t}return Object(h.a)(e,[{key:"toString",value:function(){return"".concat(this.value)}}]),e}();p.None=new p(0),p.Ace=new p(14),p.Two=new p(2),p.Three=new p(3),p.Four=new p(4),p.Five=new p(5),p.Six=new p(6),p.Seven=new p(7),p.Eight=new p(8),p.Nine=new p(9),p.Ten=new p(10),p.Jack=new p(11),p.Queen=new p(12),p.King=new p(13);var y=p,b=function(){function e(t,n){Object(o.a)(this,e),this._suit=t,this._value=n}return Object(h.a)(e,[{key:"display",value:function(){return"".concat(this._value.toString()," of ").concat(this._suit.toString())}},{key:"isHigherThanOrEqualTo",value:function(e){return this._value.value>=e._value.value}},{key:"isTheSameValueAs",value:function(e){return this._value.value===e._value.value}},{key:"isTheSameSuitAs",value:function(e){return this._suit.name===e._suit.name}},{key:"isTheSameAs",value:function(e){return this.isTheSameSuitAs(e)&&this.isTheSameValueAs(e)}}],[{key:"createCards",value:function(t){return[new e(t,y.Ace),new e(t,y.Two),new e(t,y.Three),new e(t,y.Four),new e(t,y.Five),new e(t,y.Six),new e(t,y.Seven),new e(t,y.Eight),new e(t,y.Nine),new e(t,y.Ten),new e(t,y.Jack),new e(t,y.Queen),new e(t,y.King)]}},{key:"fromDisplay",value:function(t){var n=t.split(" "),a=new y(parseInt(n[0]));return new e(new v(n[2]),a)}}]),e}();b.Joker=new b(v.Joker,y.None);var j=b,k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(Object(o.a)(this,e),this._cards=[],null===t){var n=j.createCards(v.Hearts),a=j.createCards(v.Spades),r=j.createCards(v.Clubs),i=j.createCards(v.Diamonds),u=[j.Joker,j.Joker];this._cards=[].concat(Object(d.a)(n),Object(d.a)(a),Object(d.a)(r),Object(d.a)(i),u),this.shuffle()}else this._cards=Object(d.a)(t)}return Object(h.a)(e,[{key:"shuffle",value:function(){for(var e=this._cards.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),n=[this._cards[t],this._cards[e]];this._cards[e]=n[0],this._cards[t]=n[1]}}},{key:"calculateCurrentSize",value:function(){return this._cards.length}},{key:"draw",value:function(){return this._cards.pop()}},{key:"peek",value:function(e){return this._cards[0].display()}}],[{key:"_setupCardCaptureDungeon",value:function(){var t=[];return[v.Hearts,v.Diamonds,v.Spades,v.Clubs].forEach((function(e){t.push(new j(e,y.Five)),t.push(new j(e,y.Six)),t.push(new j(e,y.Seven)),t.push(new j(e,y.Eight)),t.push(new j(e,y.Nine)),t.push(new j(e,y.Ten)),t.push(new j(e,y.Jack)),t.push(new j(e,y.Queen)),t.push(new j(e,y.King)),t.push(new j(e,y.Ace))})),new e(t)}},{key:"_setupCardCaptureDeck",value:function(){var t=[];return[v.Hearts,v.Diamonds,v.Spades,v.Clubs].forEach((function(e){t.push(new j(e,y.Two)),t.push(new j(e,y.Three)),t.push(new j(e,y.Four))})),t.push(j.Joker),t.push(j.Joker),new e(t)}}]),e}();k.CardCaptureDungeon=k._setupCardCaptureDungeon(),k.CardCaptureDeck=k._setupCardCaptureDeck();var _=k,w=function e(){Object(o.a)(this,e)},O=function(){function e(){Object(o.a)(this,e)}return Object(h.a)(e,[{key:"display",value:function(){return{first:this.first,second:this.second,third:this.third,fourth:this.fourth}}},{key:"removeAt",value:function(e){this[e]=void 0}},{key:"placeFirst",value:function(e){this.first=e}},{key:"placeSecond",value:function(e){this.second=e}},{key:"placeThird",value:function(e){this.third=e}},{key:"placeFourth",value:function(e){this.fourth=e}}]),e}(),C=function(){function e(){Object(o.a)(this,e)}return Object(h.a)(e,null,[{key:"areHigherValueThan",value:function(t,n){var a=0;return e._replaceJokers(t).forEach((function(e){a+=e._value.value})),a>=n._value.value}},{key:"areTheSameSuitAs",value:function(t,n){for(var a=0;a<t.length;a++)if(e._isTheSameSuitAsTheOtherCardButNotAJoker(t[a],n))return!1;return!0}},{key:"_isTheSameSuitAsTheOtherCardButNotAJoker",value:function(e,t){return!1===e.isTheSameSuitAs(t)&&!1===e.isTheSameSuitAs(j.Joker)}},{key:"_replaceJokers",value:function(t){var n=Object(d.a)(t),a=n.findIndex((function(e){return e.isTheSameAs(j.Joker)}));if(a){n.splice(a,1);var r=e.findHighestValue(n);n=[].concat(Object(d.a)(n),[r])}var i=n.findIndex((function(e){return e.isTheSameAs(j.Joker)}));if(i){n.splice(i,1);var u=e.findHighestValue(n);n=[].concat(Object(d.a)(n),[u])}return n}},{key:"findHighestValue",value:function(e){for(var t=void 0,n=0;n<e.length;n++)if(0===n)t=e[0];else{var a=e[n];a.isHigherThanOrEqualTo(t)&&(t=a)}return t}}]),e}(),g=function(){function e(){Object(o.a)(this,e),this._player=new l,this._deck=new _,this._dungeon=new _,this._courtyard=new O,this._graveyard=new w}return Object(h.a)(e,[{key:"displayPlayerHand",value:function(){return this._player.displayHand()}},{key:"displayDiscard",value:function(){return this._player.displayDiscard()}},{key:"displayCourtyard",value:function(){return this._courtyard.display()}},{key:"letPlayerDrawFromDeck",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._player.drawFrom(this._deck,e)}},{key:"letPlayerAttackWith",value:function(e,t){var n=e.map(j.fromDisplay),a=this._courtyard[t];if(!C.areHigherValueThan(n,a)||!C.areTheSameSuitAs(n,a))throw new Error("You cannot buy this scrub");this._player.buyFrom(a,t,this._courtyard,n)}},{key:"setupCardCapture",value:function(){this._setupDungeon(),this._setupDeck(),this._setupCourtyard()}},{key:"_setupDungeon",value:function(){this._dungeon=_.CardCaptureDungeon,this._dungeon.shuffle()}},{key:"_setupDeck",value:function(){this._deck=_.CardCaptureDeck,this._deck.shuffle()}},{key:"_setupCourtyard",value:function(){var e=this._dungeon.draw(),t=this._dungeon.draw(),n=this._dungeon.draw(),a=this._dungeon.draw();this._courtyard.placeFirst(e),this._courtyard.placeSecond(t),this._courtyard.placeThird(n),this._courtyard.placeFourth(a)}}],[{key:"_instantiateCardCapture",value:function(){var t=new e;return t.setupCardCapture(),t}}]),e}();g.CardCapture=g._instantiateCardCapture();var m=g,S=n(1),T={game:m.CardCapture},D={choices:new Set},x=function(){var e=Object(a.useState)(T),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("first"),u=Object(s.a)(i,2),o=u[0],h=u[1],d=Object(a.useState)(D),l=Object(s.a)(d,2),f=l[0].choices,v=l[1],p=Object(a.useCallback)((function(){n.game.letPlayerDrawFromDeck(),r({game:n.game})}),[n]),y=Object(a.useCallback)((function(){try{n.game.letPlayerAttackWith(Array.from(f.values()),o)}catch(e){Object(c.b)("You can't capture this one...")}r({game:n.game})}),[o,f,n]),b=Object(a.useCallback)((function(){return n.game.displayPlayerHand()}),[n]),j=Object(a.useCallback)((function(){return n.game.displayDiscard()}),[n]),k=Object(a.useCallback)((function(){return Object.values(n.game.displayCourtyard())}),[n]),_=["first","second","third","fourth"],w=Object(a.useCallback)((function(e){h(e.target.value)}),[]),O=Object(a.useCallback)((function(e){var t=e.target.value;e.target.checked?f.add(t):f.delete(t),v({choices:f})}),[f]);return Object(S.jsxs)("div",{className:"game",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Hand"}),Object(S.jsx)("button",{onClick:p,children:"Draw"}),b().map((function(e,t){return Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{onChange:O,value:e.display(),type:"checkbox"}),e.display()]},"h".concat(t))}))]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Discard"}),j().map((function(e,t){return Object(S.jsx)("div",{children:e.display()},"d".concat(t))}))]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Courtyard"}),Object(S.jsx)("button",{onClick:y,children:"Capture"}),Object(S.jsx)("div",{onChange:w,children:k().map((function(e,t){var n=0===t;return void 0===e?Object(S.jsx)("div",{v:!0,children:"none"},"c".concat(t)):Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{name:"attacked",value:_[t],type:"radio",defaultChecked:n}),e.display()]},"c".concat(t))}))})]}),Object(S.jsx)("div",{children:Object(S.jsx)("h2",{children:"Graveyard"})})]})};var A=function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(x,{}),Object(S.jsx)(c.a,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),i(e),u(e)}))};u.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(A,{})}),document.getElementById("root")),F()}},[[19,1,2]]]);
//# sourceMappingURL=main.aab32f5c.chunk.js.map