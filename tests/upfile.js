/*!mycenter/modules/common/js/libs/jquery.lib.js*/
;
!
function(a, c, h) {
	function e(a) {
		return a
	}
	function f(a) {
		return g(decodeURIComponent(a.replace(d, " ")))
	}
	function g(a) {
		return 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), a
	}
	function v(a) {
		return i.json ? JSON.parse(a) : a
	}
	var d = /\+/g,
		i = a.cookie = function(d, g, b) {
			var w, l, m, n, o, p, q, r, s, t;
			if (g !== h) return b = a.extend({}, i.defaults, b), null === g && (b.expires = -1), "number" == typeof b.expires && (w = b.expires, l = b.expires = new Date, l.setDate(l.getDate() + w)), g = i.json ? JSON.stringify(g) : String(g), c.cookie = [encodeURIComponent(d), "=", i.raw ? g : encodeURIComponent(g), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path : "", b.domain ? "; domain=" + b.domain : "", b.secure ? "; secure" : ""].join("");
			for (m = i.raw ? e : f, n = c.cookie.split("; "), o = d ? null : {}, p = 0, q = n.length; q > p; p++) {
				if (r = n[p].split("="), s = m(r.shift()), t = m(r.join("=")), d && d === s) {
					o = v(t);
					break
				}
				d || (o[s] = v(t))
			}
			return o
		};
	i.defaults = {}, a.removeCookie = function(c, h) {
		return null !== a.cookie(c) ? (a.cookie(c, null, h), !0) : !1
	}
}(jQuery, document), function(e, t) {
	function i(t, i) {
		var a, n, r, o = t.nodeName.toLowerCase();
		return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !! r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
	}
	function s(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	var a = 0,
		n = /^ui-id-\d+$/;
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.10.3",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		focus: function(t) {
			return function(i, s) {
				return "number" == typeof i ? this.each(function() {
					var t = this;
					setTimeout(function() {
						e(t).focus(), s && s.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		scrollParent: function() {
			var t;
			return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function() {
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function(i) {
			if (i !== t) return this.css("zIndex", i);
			if (this.length) for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
				if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
				n = n.parent()
			}
			return 0
		},
		uniqueId: function() {
			return this.each(function() {
				this.id || (this.id = "ui-id-" + ++a)
			})
		},
		removeUniqueId: function() {
			return this.each(function() {
				n.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
			return function(i) {
				return !!e.data(i, t)
			}
		}) : function(t, i, s) {
			return !!e.data(t, s[3])
		},
		focusable: function(t) {
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function(t) {
			var s = e.attr(t, "tabindex"),
				a = isNaN(s);
			return (a || s >= 0) && i(t, !a)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
		function a(t, i, s, a) {
			return e.each(n, function() {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
			r = s.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + s] = function(i) {
			return i === t ? o["inner" + s].call(this) : this.each(function() {
				e(this).css(r, a(this, i) + "px")
			})
		}, e.fn["outer" + s] = function(t, i) {
			return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
				e(this).css(r, a(this, t, !0, i) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function(e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
		return function(i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
		disableSelection: function() {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
				e.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function(t, i, s) {
				var a, n = e.ui[t].prototype;
				for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
			},
			call: function(e, t, i) {
				var s, a = e.plugins[t];
				if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
			}
		},
		hasScroll: function(t, i) {
			if ("hidden" === e(t).css("overflow")) return !1;
			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
				a = !1;
			return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
		}
	})
}(jQuery), function(e, t) {
	var i = 0,
		s = Array.prototype.slice,
		n = e.cleanData;
	e.cleanData = function(t) {
		for (var i, s = 0; null != (i = t[s]); s++) try {
			e(i).triggerHandler("remove")
		} catch (a) {}
		n(t)
	}, e.widget = function(i, s, n) {
		var a, r, o, c, l = {},
			u = i.split(".")[0];
		i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
			return !!e.data(t, a)
		}, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
			return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
		}, e.extend(o, r, {
			version: n.version,
			_proto: e.extend({}, n),
			_childConstructors: []
		}), c = new s, c.options = e.widget.extend({}, c.options), e.each(n, function(i, n) {
			return e.isFunction(n) ? (l[i] = function() {
				var e = function() {
						return s.prototype[i].apply(this, arguments)
					},
					t = function(e) {
						return s.prototype[i].apply(this, e)
					};
				return function() {
					var i, s = this._super,
						a = this._superApply;
					return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
				}
			}(), t) : (l[i] = n, t)
		}), o.prototype = e.widget.extend(c, {
			widgetEventPrefix: r ? c.widgetEventPrefix : i
		}, l, {
			constructor: o,
			namespace: u,
			widgetName: i,
			widgetFullName: a
		}), r ? (e.each(r._childConstructors, function(t, i) {
			var s = i.prototype;
			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
	}, e.widget.extend = function(i) {
		for (var n, a, r = s.call(arguments, 1), o = 0, c = r.length; c > o; o++) for (n in r[o]) a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
		return i
	}, e.widget.bridge = function(i, n) {
		var a = n.prototype.widgetFullName || i;
		e.fn[i] = function(r) {
			var o = "string" == typeof r,
				c = s.call(arguments, 1),
				l = this;
			return r = !o && c.length ? e.widget.extend.apply(null, [r].concat(c)) : r, this.each(o ?
			function() {
				var s, n = e.data(this, a);
				return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, c), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
			} : function() {
				var t = e.data(this, a);
				t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
			}), l
		}
	}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(t, s) {
			s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(e) {
					e.target === s && this.destroy()
				}
			}), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function() {
			return this.element
		},
		option: function(i, s) {
			var n, a, r, o = i;
			if (0 === arguments.length) return e.widget.extend({}, this.options);
			if ("string" == typeof i) if (o = {}, n = i.split("."), i = n.shift(), n.length) {
				for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) a[n[r]] = a[n[r]] || {}, a = a[n[r]];
				if (i = n.pop(), s === t) return a[i] === t ? null : a[i];
				a[i] = s
			} else {
				if (s === t) return this.options[i] === t ? null : this.options[i];
				o[i] = s
			}
			return this._setOptions(o), this
		},
		_setOptions: function(e) {
			var t;
			for (t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function(e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function() {
			return this._setOption("disabled", !1)
		},
		disable: function() {
			return this._setOption("disabled", !0)
		},
		_on: function(i, s, n) {
			var a, r = this;
			"boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
				function c() {
					return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
				}
				"string" != typeof o && (c.guid = o.guid = o.guid || c.guid || e.guid++);
				var l = n.match(/^(\w+)\s*(.*)$/),
					u = l[1] + r.eventNamespace,
					h = l[2];
				h ? a.delegate(h, u, c) : s.bind(u, c)
			})
		},
		_off: function(e, t) {
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
		},
		_delay: function(e, t) {
			function i() {
				return ("string" == typeof e ? s[e] : e).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function(t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function(t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function(t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(t, i, s) {
			var n, a, r = this.options[t];
			if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(t, i) {
		e.Widget.prototype["_" + t] = function(s, n, a) {
			"string" == typeof n && (n = {
				effect: n
			});
			var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
				e(this)[t](), a && a.call(s[0]), i()
			})
		}
	})
}(jQuery), function(t, e) {
	function i(t, e, i) {
		return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
	}
	function s(e, i) {
		return parseInt(t.css(e, i), 10) || 0
	}
	function n(e) {
		var i = e[0];
		return 9 === i.nodeType ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: 0,
				left: 0
			}
		} : t.isWindow(i) ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: e.scrollTop(),
				left: e.scrollLeft()
			}
		} : i.preventDefault ? {
			width: 0,
			height: 0,
			offset: {
				top: i.pageY,
				left: i.pageX
			}
		} : {
			width: e.outerWidth(),
			height: e.outerHeight(),
			offset: e.offset()
		}
	}
	t.ui = t.ui || {};
	var a, o = Math.max,
		r = Math.abs,
		c = Math.round,
		l = /left|center|right/,
		h = /top|center|bottom/,
		u = /[\+\-]\d+(\.[\d]+)?%?/,
		d = /^\w+/,
		p = /%$/,
		f = t.fn.position;
	t.position = {
		scrollbarWidth: function() {
			if (a !== e) return a;
			var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				o = n.children()[0];
			return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
		},
		getScrollInfo: function(e) {
			var i = e.isWindow ? "" : e.element.css("overflow-x"),
				s = e.isWindow ? "" : e.element.css("overflow-y"),
				n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
				a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
			return {
				width: a ? t.position.scrollbarWidth() : 0,
				height: n ? t.position.scrollbarWidth() : 0
			}
		},
		getWithinInfo: function(e) {
			var i = t(e || window),
				s = t.isWindow(i[0]);
			return {
				element: i,
				isWindow: s,
				offset: i.offset() || {
					left: 0,
					top: 0
				},
				scrollLeft: i.scrollLeft(),
				scrollTop: i.scrollTop(),
				width: s ? i.width() : i.outerWidth(),
				height: s ? i.height() : i.outerHeight()
			}
		}
	}, t.fn.position = function(e) {
		if (!e || !e.of) return f.apply(this, arguments);
		e = t.extend({}, e);
		var a, p, m, g, v, b, w = t(e.of),
			y = t.position.getWithinInfo(e.within),
			F = t.position.getScrollInfo(y),
			x = (e.collision || "flip").split(" "),
			C = {};
		return b = n(w), w[0].preventDefault && (e.at = "left top"), p = b.width, m = b.height, g = b.offset, v = t.extend({}, g), t.each(["my", "at"], function() {
			var t, i, s = (e[this] || "").split(" ");
			1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : h.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = h.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), C[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
		}), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), a = i(C.at, p, m), v.left += a[0], v.top += a[1], this.each(function() {
			var n, l, h = t(this),
				u = h.outerWidth(),
				d = h.outerHeight(),
				f = s(this, "marginLeft"),
				b = s(this, "marginTop"),
				j = u + f + s(this, "marginRight") + F.width,
				k = d + b + s(this, "marginBottom") + F.height,
				_ = t.extend({}, v),
				D = i(C.my, h.outerWidth(), h.outerHeight());
			"right" === e.my[0] ? _.left -= u : "center" === e.my[0] && (_.left -= u / 2), "bottom" === e.my[1] ? _.top -= d : "center" === e.my[1] && (_.top -= d / 2), _.left += D[0], _.top += D[1], t.support.offsetFractions || (_.left = c(_.left), _.top = c(_.top)), n = {
				marginLeft: f,
				marginTop: b
			}, t.each(["left", "top"], function(i, s) {
				t.ui.position[x[i]] && t.ui.position[x[i]][s](_, {
					targetWidth: p,
					targetHeight: m,
					elemWidth: u,
					elemHeight: d,
					collisionPosition: n,
					collisionWidth: j,
					collisionHeight: k,
					offset: [a[0] + D[0], a[1] + D[1]],
					my: e.my,
					at: e.at,
					within: y,
					elem: h
				})
			}), e.using && (l = function(t) {
				var i = g.left - _.left,
					s = i + p - u,
					n = g.top - _.top,
					a = n + m - d,
					c = {
						target: {
							element: w,
							left: g.left,
							top: g.top,
							width: p,
							height: m
						},
						element: {
							element: h,
							left: _.left,
							top: _.top,
							width: u,
							height: d
						},
						horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
						vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
					};
				u > p && p > r(i + s) && (c.horizontal = "center"), d > m && m > r(n + a) && (c.vertical = "middle"), c.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, c)
			}), h.offset(t.extend(_, {
				using: l
			}))
		})
	}, t.ui.position = {
		fit: {
			left: function(t, e) {
				var i, s = e.within,
					n = s.isWindow ? s.scrollLeft : s.offset.left,
					a = s.width,
					r = t.left - e.collisionPosition.marginLeft,
					c = n - r,
					l = r + e.collisionWidth - a - n;
				e.collisionWidth > a ? c > 0 && 0 >= l ? (i = t.left + c + e.collisionWidth - a - n, t.left += c - i) : t.left = l > 0 && 0 >= c ? n : c > l ? n + a - e.collisionWidth : n : c > 0 ? t.left += c : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
			},
			top: function(t, e) {
				var i, s = e.within,
					n = s.isWindow ? s.scrollTop : s.offset.top,
					a = e.within.height,
					r = t.top - e.collisionPosition.marginTop,
					c = n - r,
					l = r + e.collisionHeight - a - n;
				e.collisionHeight > a ? c > 0 && 0 >= l ? (i = t.top + c + e.collisionHeight - a - n, t.top += c - i) : t.top = l > 0 && 0 >= c ? n : c > l ? n + a - e.collisionHeight : n : c > 0 ? t.top += c : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
			}
		},
		flip: {
			left: function(t, e) {
				var i, s, n = e.within,
					a = n.offset.left + n.scrollLeft,
					o = n.width,
					c = n.isWindow ? n.scrollLeft : n.offset.left,
					l = t.left - e.collisionPosition.marginLeft,
					h = l - c,
					u = l + e.collisionWidth - o - c,
					d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
					p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
					f = -2 * e.offset[0];
				0 > h ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(h) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - c, (s > 0 || u > r(s)) && (t.left += d + p + f))
			},
			top: function(t, e) {
				var i, s, n = e.within,
					a = n.offset.top + n.scrollTop,
					o = n.height,
					c = n.isWindow ? n.scrollTop : n.offset.top,
					l = t.top - e.collisionPosition.marginTop,
					h = l - c,
					u = l + e.collisionHeight - o - c,
					d = "top" === e.my[1],
					p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
					f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
					m = -2 * e.offset[1];
				0 > h ? (s = t.top + p + f + m + e.collisionHeight - o - a, t.top + p + f + m > h && (0 > s || r(h) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - c, t.top + p + f + m > u && (i > 0 || u > r(i)) && (t.top += p + f + m))
			}
		},
		flipfit: {
			left: function() {
				t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
			},
			top: function() {
				t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
			}
		}
	}, function() {
		var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
			r = document.createElement("div");
		e = document.createElement(o ? "div" : "body"), s = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		}, o && t.extend(s, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
		for (a in s) e.style[a] = s[a];
		e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
	}()
}(jQuery), function(t) {
	var e = 0;
	t.widget("ui.autocomplete", {
		version: "1.10.3",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		pending: 0,
		_create: function() {
			var e, i, s, n = this.element[0].nodeName.toLowerCase(),
				a = "textarea" === n,
				o = "input" === n;
			this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
				keydown: function(n) {
					if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
					e = !1, s = !1, i = !1;
					var a = t.ui.keyCode;
					switch (n.keyCode) {
					case a.PAGE_UP:
						e = !0, this._move("previousPage", n);
						break;
					case a.PAGE_DOWN:
						e = !0, this._move("nextPage", n);
						break;
					case a.UP:
						e = !0, this._keyEvent("previous", n);
						break;
					case a.DOWN:
						e = !0, this._keyEvent("next", n);
						break;
					case a.ENTER:
					case a.NUMPAD_ENTER:
						this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
						break;
					case a.TAB:
						this.menu.active && this.menu.select(n);
						break;
					case a.ESCAPE:
						this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
						break;
					default:
						i = !0, this._searchTimeout(n)
					}
				},
				keypress: function(s) {
					if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
					if (!i) {
						var n = t.ui.keyCode;
						switch (s.keyCode) {
						case n.PAGE_UP:
							this._move("previousPage", s);
							break;
						case n.PAGE_DOWN:
							this._move("nextPage", s);
							break;
						case n.UP:
							this._keyEvent("previous", s);
							break;
						case n.DOWN:
							this._keyEvent("next", s)
						}
					}
				},
				input: function(t) {
					return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
				},
				focus: function() {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function(t) {
					return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
				}
			}), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
				role: null
			}).hide().data("ui-menu"), this._on(this.menu.element, {
				mousedown: function(e) {
					e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
						delete this.cancelBlur
					});
					var i = this.menu.element[0];
					t(e.target).closest(".ui-menu-item").length || this._delay(function() {
						var e = this;
						this.document.one("mousedown", function(s) {
							s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
						})
					})
				},
				menufocus: function(e, i) {
					if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
						t(e.target).trigger(e.originalEvent)
					});
					var s = i.item.data("ui-autocomplete-item");
					!1 !== this._trigger("focus", e, {
						item: s
					}) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
				},
				menuselect: function(t, e) {
					var i = e.item.data("ui-autocomplete-item"),
						s = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
						this.previous = s, this.selectedItem = i
					})), !1 !== this._trigger("select", t, {
						item: i
					}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
				}
			}), this.liveRegion = t("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function() {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function(t, e) {
			this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
		},
		_initSource: function() {
			var e, i, s = this;
			t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
				s(t.ui.autocomplete.filter(e, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
				s.xhr && s.xhr.abort(), s.xhr = t.ajax({
					url: i,
					data: e,
					dataType: "json",
					success: function(t) {
						n(t)
					},
					error: function() {
						n([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function(t) {
			clearTimeout(this.searching), this.searching = this._delay(function() {
				this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
			}, this.options.delay)
		},
		search: function(t, e) {
			return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
		},
		_search: function(t) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: t
			}, this._response())
		},
		_response: function() {
			var t = this,
				i = ++e;
			return function(s) {
				i === e && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
			}
		},
		__response: function(t) {
			t && (t = this._normalize(t)), this._trigger("response", null, {
				content: t
			}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
		},
		close: function(t) {
			this.cancelSearch = !0, this._close(t)
		},
		_close: function(t) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
		},
		_change: function(t) {
			this.previous !== this._value() && this._trigger("change", t, {
				item: this.selectedItem
			})
		},
		_normalize: function(e) {
			return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
				return "string" == typeof e ? {
					label: e,
					value: e
				} : t.extend({
					label: e.label || e.value,
					value: e.value || e.label
				}, e)
			})
		},
		_suggest: function(e) {
			var i = this.menu.element.empty();
			this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
				of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function() {
			var t = this.menu.element;
			t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(e, i) {
			var s = this;
			t.each(i, function(t, i) {
				s._renderItemData(e, i)
			})
		},
		_renderItemData: function(t, e) {
			return this._renderItem(t, e).data("ui-autocomplete-item", e)
		},
		_renderItem: function(e, i) {
			return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
		},
		_move: function(t, e) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
		},
		widget: function() {
			return this.menu.element
		},
		_value: function() {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(t, e) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
		}
	}), t.extend(t.ui.autocomplete, {
		escapeRegex: function(t) {
			return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(e, i) {
			var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
			return t.grep(e, function(t) {
				return s.test(t.label || t.value || t)
			})
		}
	}), t.widget("ui.autocomplete", t.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function(t) {
					return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(t) {
			var e;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
		}
	})
}(jQuery), function(t) {
	t.widget("ui.menu", {
		version: "1.10.3",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function() {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, t.proxy(function(t) {
				this.options.disabled && t.preventDefault()
			}, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item > a": function(t) {
					t.preventDefault()
				},
				"click .ui-state-disabled > a": function(t) {
					t.preventDefault()
				},
				"click .ui-menu-item:has(a)": function(e) {
					var i = t(e.target).closest(".ui-menu-item");
					!this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function(e) {
					var i = t(e.currentTarget);
					i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(t, e) {
					var i = this.active || this.element.children(".ui-menu-item").eq(0);
					e || this.focus(t, i)
				},
				blur: function(e) {
					this._delay(function() {
						t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function(e) {
					t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
				}
			})
		},
		_destroy: function() {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
				var e = t(this);
				e.data("ui-menu-submenu-carat") && e.remove()
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function(e) {
			function i(t) {
				return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var s, n, a, o, r, c = !0;
			switch (e.keyCode) {
			case t.ui.keyCode.PAGE_UP:
				this.previousPage(e);
				break;
			case t.ui.keyCode.PAGE_DOWN:
				this.nextPage(e);
				break;
			case t.ui.keyCode.HOME:
				this._move("first", "first", e);
				break;
			case t.ui.keyCode.END:
				this._move("last", "last", e);
				break;
			case t.ui.keyCode.UP:
				this.previous(e);
				break;
			case t.ui.keyCode.DOWN:
				this.next(e);
				break;
			case t.ui.keyCode.LEFT:
				this.collapse(e);
				break;
			case t.ui.keyCode.RIGHT:
				this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
				break;
			case t.ui.keyCode.ENTER:
			case t.ui.keyCode.SPACE:
				this._activate(e);
				break;
			case t.ui.keyCode.ESCAPE:
				this.collapse(e);
				break;
			default:
				c = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
					return r.test(t(this).children("a").text())
				}), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
					return r.test(t(this).children("a").text())
				})), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
					delete this.previousFilter
				}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
			}
			c && e.preventDefault()
		},
		_activate: function(t) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
		},
		refresh: function() {
			var e, i = this.options.icons.submenu,
				s = this.element.find(this.options.menus);
			s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function() {
				var e = t(this),
					s = e.prev("a"),
					n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
				s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
			}), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			}), e.children(":not(.ui-menu-item)").each(function() {
				var e = t(this);
				/[^\-—–\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
			}), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		_setOption: function(t, e) {
			"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
		},
		focus: function(t, e) {
			var i, s;
			this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
				this._close()
			}, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
				item: e
			})
		},
		_scrollIntoView: function(e) {
			var i, s, n, a, o, r;
			this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
		},
		blur: function(t, e) {
			e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
				item: this.active
			}))
		},
		_startOpening: function(t) {
			clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
				this._close(), this._open(t)
			}, this.delay))
		},
		_open: function(e) {
			var i = t.extend({
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function(e, i) {
			clearTimeout(this.timer), this.timer = this._delay(function() {
				var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
				s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
			}, this.delay)
		},
		_close: function(t) {
			t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function(t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand: function(t) {
			var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			e && e.length && (this._open(e.parent()), this._delay(function() {
				this.focus(t, e)
			}))
		},
		next: function(t) {
			this._move("next", "first", t)
		},
		previous: function(t) {
			this._move("prev", "last", t)
		},
		isFirstItem: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(t, e, i) {
			var s;
			this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
		},
		nextPage: function(e) {
			var i, s, n;
			return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
				return i = t(this), 0 > i.offset().top - s - n
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
		},
		previousPage: function(e) {
			var i, s, n;
			return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
				return i = t(this), i.offset().top - s + n > 0
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
		},
		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
		}
	})
}(jQuery), function(e, t, i) {
	function o(i, o, n) {
		var r = t.createElement(i);
		return o && (r.id = et + o), n && (r.style.cssText = n), e(r)
	}
	function n() {
		return i.innerHeight ? i.innerHeight : e(i).height()
	}
	function r(e) {
		var t = k.length,
			i = ($ + e) % t;
		return 0 > i ? t + i : i
	}
	function l(e, t) {
		return Math.round((/%/.test(e) ? ("x" === t ? _.width() : n()) / 100 : 1) * parseInt(e, 10))
	}
	function a(e, t) {
		return e.photo || e.photoRegex.test(t)
	}
	function c(e, t) {
		return e.retinaUrl && i.devicePixelRatio > 1 ? t.replace(e.photoRegex, e.retinaSuffix) : t
	}
	function s(e) {
		"contains" in b[0] && !b[0].contains(e.target) && (e.stopPropagation(), b.focus())
	}
	function d() {
		var t, i = e.data(O, Z);
		null == i ? (H = e.extend({}, J), console && console.log && console.log("Error: cboxElement missing settings object")) : H = e.extend({}, i);
		for (t in H) e.isFunction(H[t]) && "on" !== t.slice(0, 2) && (H[t] = H[t].call(O));
		H.rel = H.rel || O.rel || e(O).data("rel") || "nofollow", H.href = H.href || e(O).attr("href"), H.title = H.title || O.title, "string" == typeof H.href && (H.href = e.trim(H.href))
	}
	function h(i, o) {
		e(t).trigger(i), lt.trigger(i), e.isFunction(o) && o.call(O)
	}
	function u() {
		var e, t, i, o, n, r = et + "Slideshow_",
			l = "click." + et;
		H.slideshow && k[1] ? (t = function() {
			clearTimeout(e)
		}, i = function() {
			(H.loop || k[$ + 1]) && (e = setTimeout(G.next, H.slideshowSpeed))
		}, o = function() {
			S.html(H.slideshowStop).unbind(l).one(l, n), lt.bind(st, i).bind(nt, t).bind(rt, n), b.removeClass(r + "off").addClass(r + "on")
		}, n = function() {
			t(), lt.unbind(st, i).unbind(nt, t).unbind(rt, n), S.html(H.slideshowStart).unbind(l).one(l, function() {
				G.next(), o()
			}), b.removeClass(r + "on").addClass(r + "off")
		}, H.slideshowAuto ? o() : n()) : b.removeClass(r + "off " + r + "on")
	}
	function p(i) {
		Y || (O = i, d(), k = e(O), $ = 0, "nofollow" !== H.rel && (k = e("." + tt).filter(function() {
			var t, i = e.data(this, Z);
			return i && (t = e(this).data("rel") || i.rel || this.rel), t === H.rel
		}), $ = k.index(O), -1 === $ && (k = k.add(O), $ = k.length - 1)), v.css({
			opacity: parseFloat(H.opacity),
			cursor: H.overlayClose ? "pointer" : "auto",
			visibility: "visible"
		}).show(), K && b.add(v).removeClass(K), H.className && b.add(v).addClass(H.className), K = H.className, H.closeButton ? N.html(H.close).appendTo(x) : N.appendTo("<div/>"), U || (U = q = !0, b.css({
			visibility: "hidden",
			display: "block"
		}), D = o(ut, "LoadedContent", "width:0; height:0; overflow:hidden").appendTo(x), I = y.height() + j.height() + x.outerHeight(!0) - x.height(), R = F.width() + C.width() + x.outerWidth(!0) - x.width(), B = D.outerHeight(!0), z = D.outerWidth(!0), H.w = l(H.initialWidth, "x"), H.h = l(H.initialHeight, "y"), G.position(), u(), h(it, H.onOpen), W.add(E).hide(), b.focus(), H.trapFocus && t.addEventListener && (t.addEventListener("focus", s, !0), lt.one(ot, function() {
			t.removeEventListener("focus", s, !0)
		})), H.returnFocus && lt.one(ot, function() {
			e(O).focus()
		})), g())
	}
	function f() {
		!b && t.body && (Q = !1, _ = e(i), b = o(ut).attr({
			id: Z,
			"class": e.support.opacity === !1 ? et + "IE" : "",
			role: "dialog",
			tabindex: "-1"
		}).hide(), v = o(ut, "Overlay").hide(), T = e([o(ut, "LoadingOverlay")[0], o(ut, "LoadingGraphic")[0]]), w = o(ut, "Wrapper"), x = o(ut, "Content").append(E = o(ut, "Title"), A = o(ut, "Current"), M = e('<button type="button"/>').attr({
			id: et + "Previous"
		}), L = e('<button type="button"/>').attr({
			id: et + "Next"
		}), S = o("button", "Slideshow"), T), N = e('<button type="button"/>').attr({
			id: et + "Close"
		}), w.append(o(ut).append(o(ut, "TopLeft"), y = o(ut, "TopCenter"), o(ut, "TopRight")), o(ut, !1, "clear:left").append(F = o(ut, "MiddleLeft"), x, C = o(ut, "MiddleRight")), o(ut, !1, "clear:left").append(o(ut, "BottomLeft"), j = o(ut, "BottomCenter"), o(ut, "BottomRight"))).find("div div").css({
			"float": "left"
		}), P = o(ut, !1, "position:absolute; width:9999px; visibility:hidden; display:none"), W = L.add(M).add(A).add(S), e(t.body).append(v, b.append(w, P)))
	}
	function m() {
		function i(e) {
			e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), p(this))
		}
		return b ? (Q || (Q = !0, L.click(function() {
			G.next()
		}), M.click(function() {
			G.prev()
		}), N.click(function() {
			G.close()
		}), v.click(function() {
			H.overlayClose && G.close()
		}), e(t).bind("keydown." + et, function(e) {
			var t = e.keyCode;
			U && H.escKey && 27 === t && (e.preventDefault(), G.close()), U && H.arrowKey && k[1] && !e.altKey && (37 === t ? (e.preventDefault(), M.click()) : 39 === t && (e.preventDefault(), L.click()))
		}), e.isFunction(e.fn.on) ? e(t).on("click." + et, "." + tt, i) : e("." + tt).live("click." + et, i)), !0) : !1
	}
	function g() {
		var n, r, s, u = G.prep,
			p = ++ct;
		q = !0, V = !1, O = k[$], d(), h(at), h(nt, H.onLoad), H.h = H.height ? l(H.height, "y") - B - I : H.innerHeight && l(H.innerHeight, "y"), H.w = H.width ? l(H.width, "x") - z - R : H.innerWidth && l(H.innerWidth, "x"), H.mw = H.w, H.mh = H.h, H.maxWidth && (H.mw = l(H.maxWidth, "x") - z - R, H.mw = H.w && H.w < H.mw ? H.w : H.mw), H.maxHeight && (H.mh = l(H.maxHeight, "y") - B - I, H.mh = H.h && H.h < H.mh ? H.h : H.mh), n = H.href, X = setTimeout(function() {
			T.show()
		}, 100), H.inline ? (s = o(ut).hide().insertBefore(e(n)[0]), lt.one(at, function() {
			s.replaceWith(D.children())
		}), u(e(n))) : H.iframe ? u(" ") : H.html ? u(H.html) : a(H, n) ? (n = c(H, n), V = t.createElement("img"), e(V).addClass(et + "Photo").bind("error", function() {
			H.title = !1, u(o(ut, "Error").html(H.imgError))
		}).one("load", function() {
			var t;
			p === ct && (V.alt = e(O).attr("alt") || e(O).attr("data-alt") || "", H.retinaImage && i.devicePixelRatio > 1 && (V.height = V.height / i.devicePixelRatio, V.width = V.width / i.devicePixelRatio), H.scalePhotos && (r = function() {
				V.height -= V.height * t, V.width -= V.width * t
			}, H.mw && V.width > H.mw && (t = (V.width - H.mw) / V.width, r()), H.mh && V.height > H.mh && (t = (V.height - H.mh) / V.height, r())), H.h && (V.style.marginTop = Math.max(H.mh - V.height, 0) / 2 + "px"), k[1] && (H.loop || k[$ + 1]) && (V.style.cursor = "pointer", V.onclick = function() {
				G.next()
			}), V.style.width = V.width + "px", V.style.height = V.height + "px", setTimeout(function() {
				u(V)
			}, 1))
		}), setTimeout(function() {
			V.src = n
		}, 1)) : n && P.load(n, H.data, function(t, i) {
			p === ct && u("error" === i ? o(ut, "Error").html(H.xhrError) : e(this).contents())
		})
	}
	var v, b, w, x, y, F, C, j, k, _, D, P, T, E, A, S, L, M, N, W, H, I, R, B, z, O, $, V, U, q, Y, X, G, K, Q, J = {
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: !1,
		initialWidth: "600",
		innerWidth: !1,
		maxWidth: !1,
		height: !1,
		initialHeight: "450",
		innerHeight: !1,
		maxHeight: !1,
		scalePhotos: !0,
		scrolling: !0,
		inline: !1,
		html: !1,
		iframe: !1,
		fastIframe: !0,
		photo: !1,
		href: !1,
		title: !1,
		rel: !1,
		opacity: .9,
		preloading: !0,
		className: !1,
		retinaImage: !1,
		retinaUrl: !1,
		retinaSuffix: "@2x.$1",
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",
		open: !1,
		returnFocus: !0,
		trapFocus: !0,
		reposition: !0,
		loop: !0,
		slideshow: !1,
		slideshowAuto: !0,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
		onOpen: !1,
		onLoad: !1,
		onComplete: !1,
		onCleanup: !1,
		onClosed: !1,
		overlayClose: !0,
		escKey: !0,
		arrowKey: !0,
		top: !1,
		bottom: !1,
		left: !1,
		right: !1,
		fixed: !1,
		data: void 0,
		closeButton: !0
	},
		Z = "colorbox",
		et = "cbox",
		tt = et + "Element",
		it = et + "_open",
		nt = et + "_load",
		st = et + "_complete",
		rt = et + "_cleanup",
		ot = et + "_closed",
		at = et + "_purge",
		lt = e("<a/>"),
		ut = "div",
		ct = 0,
		ht = {};
	e.colorbox || (e(f), G = e.fn[Z] = e[Z] = function(t, i) {
		var o = this;
		if (t = t || {}, f(), m()) {
			if (e.isFunction(o)) o = e("<a/>"), t.open = !0;
			else if (!o[0]) return o;
			i && (t.onComplete = i), o.each(function() {
				e.data(this, Z, e.extend({}, e.data(this, Z) || J, t))
			}).addClass(tt), (e.isFunction(t.open) && t.open.call(o) || t.open) && p(o[0])
		}
		return o
	}, G.position = function(t, i) {
		function o() {
			y[0].style.width = j[0].style.width = x[0].style.width = parseInt(b[0].style.width, 10) - R + "px", x[0].style.height = F[0].style.height = C[0].style.height = parseInt(b[0].style.height, 10) - I + "px"
		}
		var r, a, c, s = 0,
			d = 0,
			h = b.offset();
		if (_.unbind("resize." + et), b.css({
			top: -9e4,
			left: -9e4
		}), a = _.scrollTop(), c = _.scrollLeft(), H.fixed ? (h.top -= a, h.left -= c, b.css({
			position: "fixed"
		})) : (s = a, d = c, b.css({
			position: "absolute"
		})), d += H.right !== !1 ? Math.max(_.width() - H.w - z - R - l(H.right, "x"), 0) : H.left !== !1 ? l(H.left, "x") : Math.round(Math.max(_.width() - H.w - z - R, 0) / 2), s += H.bottom !== !1 ? Math.max(n() - H.h - B - I - l(H.bottom, "y"), 0) : H.top !== !1 ? l(H.top, "y") : Math.round(Math.max(n() - H.h - B - I, 0) / 2), b.css({
			top: h.top,
			left: h.left,
			visibility: "visible"
		}), w[0].style.width = w[0].style.height = "9999px", r = {
			width: H.w + z + R,
			height: H.h + B + I,
			top: s,
			left: d
		}, t) {
			var u = 0;
			e.each(r, function(e) {
				return r[e] !== ht[e] ? void(u = t) : void 0
			}), t = u
		}
		ht = r, t || b.css(r), b.dequeue().animate(r, {
			duration: t || 0,
			complete: function() {
				o(), q = !1, w[0].style.width = H.w + z + R + "px", w[0].style.height = H.h + B + I + "px", H.reposition && setTimeout(function() {
					_.bind("resize." + et, G.position)
				}, 1), i && i()
			},
			step: o
		})
	}, G.resize = function(e) {
		var t;
		U && (e = e || {}, e.width && (H.w = l(e.width, "x") - z - R), e.innerWidth && (H.w = l(e.innerWidth, "x")), D.css({
			width: H.w
		}), e.height && (H.h = l(e.height, "y") - B - I), e.innerHeight && (H.h = l(e.innerHeight, "y")), e.innerHeight || e.height || (t = D.scrollTop(), D.css({
			height: "auto"
		}), H.h = D.height()), D.css({
			height: H.h
		}), t && D.scrollTop(t), G.position("none" === H.transition ? 0 : H.speed))
	}, G.prep = function(i) {
		function n() {
			return H.w = H.w || D.width(), H.w = H.mw && H.mw < H.w ? H.mw : H.w, H.w
		}
		function l() {
			return H.h = H.h || D.height(), H.h = H.mh && H.mh < H.h ? H.mh : H.h, H.h
		}
		if (U) {
			var s, d = "none" === H.transition ? 0 : H.speed;
			D.empty().remove(), D = o(ut, "LoadedContent").append(i), D.hide().appendTo(P.show()).css({
				width: n(),
				overflow: H.scrolling ? "auto" : "hidden"
			}).css({
				height: l()
			}).prependTo(x), P.hide(), e(V).css({
				"float": "none"
			}), s = function() {
				function i() {
					e.support.opacity === !1 && b[0].style.removeAttribute("filter")
				}
				var n, l, s = k.length,
					u = "frameBorder",
					p = "allowTransparency";
				U && (l = function() {
					clearTimeout(X), T.hide(), h(st, H.onComplete)
				}, E.html(H.title).add(D).show(), s > 1 ? ("string" == typeof H.current && A.html(H.current.replace("{current}", $ + 1).replace("{total}", s)).show(), L[H.loop || s - 1 > $ ? "show" : "hide"]().html(H.next), M[H.loop || $ ? "show" : "hide"]().html(H.previous), H.slideshow && S.show(), H.preloading && e.each([r(-1), r(1)], function() {
					var i, o, n = k[this],
						r = e.data(n, Z);
					r && r.href ? (i = r.href, e.isFunction(i) && (i = i.call(n))) : i = e(n).attr("href"), i && a(r, i) && (i = c(r, i), o = t.createElement("img"), o.src = i)
				})) : W.hide(), H.iframe ? (n = o("iframe")[0], u in n && (n[u] = 0), p in n && (n[p] = "true"), H.scrolling || (n.scrolling = "no"), e(n).attr({
					src: H.href,
					name: (new Date).getTime(),
					"class": et + "Iframe",
					allowFullScreen: !0,
					webkitAllowFullScreen: !0,
					mozallowfullscreen: !0
				}).one("load", l).appendTo(D), lt.one(at, function() {
					n.src = "//about:blank"
				}), H.fastIframe && e(n).trigger("load")) : l(), "fade" === H.transition ? b.fadeTo(d, 1, i) : i())
			}, "fade" === H.transition ? b.fadeTo(d, 0, function() {
				G.position(0, s)
			}) : G.position(d, s)
		}
	}, G.next = function() {
		!q && k[1] && (H.loop || k[$ + 1]) && ($ = r(1), p(k[$]))
	}, G.prev = function() {
		!q && k[1] && (H.loop || $) && ($ = r(-1), p(k[$]))
	}, G.close = function() {
		U && !Y && (Y = !0, U = !1, h(rt, H.onCleanup), _.unbind("." + et), v.fadeTo(H.fadeOut || 0, 0), b.stop().fadeTo(H.fadeOut || 0, 0, function() {
			b.add(v).css({
				opacity: 1,
				cursor: "auto"
			}).hide(), h(at), D.empty().remove(), setTimeout(function() {
				Y = !1, h(ot, H.onClosed)
			}, 1)
		}))
	}, G.remove = function() {
		b && (b.stop(), e.colorbox.close(), b.stop().remove(), v.remove(), Y = !1, b = null, e("." + tt).removeData(Z).removeClass(tt), e(t).unbind("click." + et))
	}, G.element = function() {
		return e(O)
	}, G.settings = J)
}(jQuery, document, window), !
function($) {
	function init(param, obj) {
		function getCurrPage() {
			if (options.info && options.info.cookie_currPageKey && options.info.cookie_currPage) {
				var a = $.cookie(options.info.cookie_currPageKey + "_currPage");
				if ("" != a && null != a) return a
			}
			return options.currPage ? options.currPage : defaults.currPage
		}
		function getPageNOName() {
			return options.pageNOName ? options.pageNOName : defaults.pageNOName
		}
		function getForm() {
			return options.form ? options.form : defaults.form
		}
		function getPageCount() {
			return options.pageCount ? options.pageCount : 0 == options.pageCount ? 1 : defaults.pageCount
		}
		function getPageSize() {
			return options.pageSize ? options.pageSize : defaults.pageSize
		}
		function getCssStyle() {
			return options.cssStyle ? options.cssStyle : defaults.cssStyle
		}
		function getAjax() {
			return options.ajax && options.ajax.on ? options.ajax : defaults.ajax
		}
		function getParam() {
			return options.ajax.param && options.ajax.param.on ? (options.ajax.param.page = currPage, options.ajax.param) : (defaults.ajax.param.page = currPage, defaults.ajax.param)
		}
		function getFirst() {
			var a;
			return options.info && 0 == options.info.first_on ? "" : a = options.info && options.info.first_on && options.info.first ? "<a href='" + getLink() + "' title='1'>" + options.info.first + "</a>" : "<a href='" + getLink() + "' title='1'>" + defaults.info.first + "</a>"
		}
		function getLast(a) {
			var c;
			return options.info && 0 == options.info.last_on ? "" : c = options.info && options.info.last_on && options.info.last ? "<a href='" + getLink() + "' title='" + a + "'>" + options.info.last + "</a>" : "<a href='" + getLink() + "' title='" + a + "'>" + defaults.info.last + "</a>"
		}
		function getPrev() {
			return options.info && 0 == options.info.prev_on ? "" : options.info && options.info.prev ? options.info.prev : defaults.info.prev
		}
		function getNext() {
			return options.info && 0 == options.info.next_on ? "" : options.info && options.info.next ? options.info.next : defaults.info.next
		}
		function getLink() {
			return options.info && options.info.link ? options.info.link : defaults.info.link
		}
		function getMsg() {
			var a, c = "<input type='text' value='" + currPage + "' >";
			return options.info && 0 == options.info.msg_on ? !1 : options.info && options.info.msg ? (a = options.info.msg, a = a.replace("{currText}", c), a = a.replace("{currPage}", currPage), a = a.replace("{sumPage}", pageCount)) : (a = defaults.info.msg, a = a.replace("{currText}", c), a = a.replace("{currPage}", currPage), a = a.replace("{sumPage}", pageCount))
		}
		function getText() {
			var input, css, val, msg = getMsg();
			if (!msg) return "";
			if (msg = $(msg), input = msg.children(":text"), options.info && options.info.text) {
				css = options.info.text;
				for (temp in css) val = eval("css." + temp), input.css(temp, val);
				return msg.html()
			}
			css = defaults.info.text;
			for (temp in css) val = eval("css." + temp), input.css(temp, val);
			return msg.html()
		}
		function getPageCountId() {
			return options.ajax && options.ajax.pageCountId ? options.ajax.pageCountId : defaults.ajax.pageCountId
		}
		function getAjaxStart() {
			options.ajax && options.ajax.ajaxStart ? options.ajax.ajaxStart() : defaults.ajax.ajaxStart
		}
		function saveCurrPage(a) {
			if (options.info && options.info.cookie_currPageKey && options.info.cookie_currPage) {
				var c = options.info.cookie_currPageKey + "_currPage";
				$.cookie(c, a)
			}
		}
		function getInt(a) {
			return parseInt(a)
		}
		function isCode(a) {
			if (1 > a) return alert("è¾“å…¥å€¼ä¸èƒ½å°äºŽ1ã€‚"), !1;
			var c = /^[0-9]{1,8}$/;
			return c.exec(a) ? a > pageCount ? (alert("è¾“å…¥å€¼ä¸èƒ½å¤§äºŽæ€»é¡µæ•°ã€‚"), !1) : !0 : (alert("è¯·è¾“å…¥æ­£ç¡®çš„æ•°å­—ã€‚"), !1)
		}
		function updateView() {
			var a, c, h;
			for (currPage = getInt(currPage), pageCount = getInt(pageCount), a = getLink(), c = lastPage = 1, c = currPage - tempPage > 0 ? currPage - tempPage : 1, c + pageSize > pageCount ? (lastPage = pageCount + 1, c = lastPage - pageSize) : lastPage = c + pageSize, h = "", h += getFirst(), h += 1 == currPage ? '<span class="disabled" title="' + getPrev() + '">' + getPrev() + " </span>" : "<a href='" + a + "' title='" + (currPage - 1) + "'>" + getPrev() + " </a>", 0 >= c && (c = 1), c; lastPage > c; c++) h += c == currPage ? '<span class="current" title="' + c + '">' + c + "</span>" : "<a href='" + a + "' title='" + c + "'>" + c + "</a>";
			h += currPage == pageCount ? '<span class="disabled" title="' + getNext() + '">' + getNext() + " </span>" : "<a href='" + a + "' title='" + (currPage + 1) + "'>" + getNext() + " </a>", h += getLast(pageCount), h += getText(), obj.html(h), obj.children(":text").keypress(function(a) {
				var c, d, h = a.which;
				if (13 == h) if (c = $(this).val(), c > pageCount && (c = pageCount), getAjax().on) isCode(c) && (obj.children("a").unbind("click"), obj.children("a").each(function() {
					$(this).click(function() {
						return !1
					})
				}), createView(c));
				else {
					if (!isCode(c)) return !1;
					d = $("#" + getForm()), d.append("<input type='hidden' name='" + getPageNOName() + "' value='" + c + "'>"), d.submit()
				}
			}), obj.children("a").each(function() {
				var a = this.title;
				$(this).click(function() {
					if (obj.children("a").unbind("click"), obj.children("a").each(function() {
						$(this).click(function() {
							return !1
						})
					}), getAjax().on) createView(a), $(this).focus();
					else {
						var c = $("#" + getForm());
						c.append("<input type='hidden' name='" + getPageNOName() + "' value='" + a + "'>"), c.submit()
					}
					return !1
				})
			})
		}
		function createView(a) {
			var c, h, d;
			currPage = a, saveCurrPage(a), c = getAjax(), c.on ? (getAjaxStart(), h = c.url, d = getParam(), $.ajax({
				url: h,
				type: "GET",
				data: d,
				contentType: "application/x-www-form-urlencoded;utf-8",
				async: !0,
				cache: !1,
				timeout: 6e4,
				error: function() {
					alert("è®¿é—®æœåŠ¡å™¨è¶…æ—¶ï¼Œè¯·é‡è¯•ï¼Œè°¢è°¢ï¼")
				},
				success: function(a) {
					loadPageCount({
						dataType: c.dataType,
						callback: c.callback,
						data: a
					}), updateView()
				}
			})) : updateView()
		}
		function checkParam() {
			return 1 > currPage ? (alert("é…ç½®å‚æ•°é”™è¯¯\né”™è¯¯ä»£ç :-1"), !1) : currPage > pageCount ? (alert("é…ç½®å‚æ•°é”™è¯¯\né”™è¯¯ä»£ç :-2"), !1) : 2 > pageSize ? (alert("é…ç½®å‚æ•°é”™è¯¯\né”™è¯¯ä»£ç :-3"), !1) : !0
		}
		function loadPageCount(options) {
			var data, resultPageCount, isB, pageCountId, callback;
			if (options.dataType) {
				switch (data = options.data, resultPageCount = !1, isB = !0, pageCountId = getPageCountId(), options.dataType) {
				case "json":
					data = eval("(" + data + ")"), resultPageCount = eval("data." + pageCountId);
					break;
				case "xml":
					resultPageCount = $(data).find(pageCountId).text();
					break;
				default:
					isB = !1, callback = options.callback + "(data)", eval(callback), resultPageCount = $("#" + pageCountId).val()
				}
				resultPageCount && (pageCount = resultPageCount), isB && (callback = options.callback + "(data)", eval(callback))
			}
		}
		var options, currPage, form, pageCount, pageSize, tempPage, defaults, cssStyle;
		param && param instanceof Object && (defaults = new Object({
			currPage: 1,
			pageCount: 10,
			pageSize: 5,
			pageNOName: "pageNo",
			form: "searchForm",
			cssStyle: "myself",
			ajax: {
				on: !1,
				pageCountId: "pageCount",
				param: {
					on: !1,
					page: 1
				},
				ajaxStart: function() {
					return !1
				}
			},
			info: {
				first: "é¦–é¡µ",
				last: "å°¾é¡µ",
				next: "ä¸‹ä¸€é¡µ",
				prev: "ä¸Šä¸€é¡µ",
				first_on: !0,
				last_on: !0,
				next_on: !0,
				prev_on: !0,
				msg_on: !0,
				link: "#",
				msg: "",
				text: {
					width: "22px"
				}
			}
		}), options = param, currPage = getCurrPage(), pageCount = getPageCount(), pageSize = getPageSize(), tempPage = getInt(pageSize / 2), cssStyle = getCssStyle(), obj.addClass(cssStyle), checkParam() && (updateView(), createView(currPage)))
	}
	$.fn.pager = function(a) {
		return init(a, $(this)), $(this)
	}
}(jQuery), function(a, c, h) {
	a.fn.jScrollPane = function(e) {
		function d(g, v) {
			function b(c) {
				var v, F, j, k, _, P, T = !1,
					E = !1;
				if (K = c, Q === h) _ = g.scrollTop(), P = g.scrollLeft(), g.css({
					overflow: "hidden",
					padding: 0
				}), J = g.innerWidth() + f, Z = g.innerHeight(), g.width(J), Q = a('<div class="jspPane" />').css("padding", Ct).append(g.children()), et = a('<div class="jspContainer" />').css({
					width: J + "px",
					height: Z + "px"
				}).append(Q).appendTo(g);
				else {
					if (g.css("width", ""), T = K.stickToBottom && I(), E = K.stickToRight && R(), k = g.innerWidth() + f != J || g.outerHeight() != Z, k && (J = g.innerWidth() + f, Z = g.innerHeight(), et.css({
						width: J + "px",
						height: Z + "px"
					})), !k && jt == tt && Q.outerHeight() == it) return void g.width(J);
					jt = tt, Q.css("width", ""), g.width(J), et.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
				}
				Q.css("overflow", "auto"), tt = c.contentWidth ? c.contentWidth : Q[0].scrollWidth, it = Q[0].scrollHeight, Q.css("overflow", ""), nt = tt / J, q = it / Z, st = q > 1, ot = nt > 1, ot || st ? (g.addClass("jspScrollable"), v = K.maintainPosition && (lt || ht), v && (F = W(), j = H()), w(), y(), C(), v && (M(E ? tt - J : F, !1), L(T ? it - Z : j, !1)), O(), B(), X(), K.enableKeyboardNavigation && V(), K.clickOnTrack && p(), Y(), K.hijackInternalLinks && m()) : (g.removeClass("jspScrollable"), Q.css({
					top: 0,
					width: et.width() - f
				}), n(), $(), U(), D()), K.autoReinitialise && !Ft ? Ft = setInterval(function() {
					b(K)
				}, K.autoReinitialiseDelay) : !K.autoReinitialise && Ft && clearInterval(Ft), _ && g.scrollTop(0) && L(_, !1), P && g.scrollLeft(0) && M(P, !1), g.trigger("jsp-initialised", [ot || st])
			}
			function w() {
				st && (et.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), dt = et.find(">.jspVerticalBar"), pt = dt.find(">.jspTrack"), at = pt.find(">.jspDrag"), K.showArrows && (gt = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", k(0, -1)).bind("click.jsp", z), vt = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", k(0, 1)).bind("click.jsp", z), K.arrowScrollOnHover && (gt.bind("mouseover.jsp", k(0, -1, gt)), vt.bind("mouseover.jsp", k(0, 1, vt))), j(pt, K.verticalArrowPositions, gt, vt)), t = Z, et.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
					t -= a(this).outerHeight()
				}), at.hover(function() {
					at.addClass("jspHover")
				}, function() {
					at.removeClass("jspHover")
				}).bind("mousedown.jsp", function(c) {
					a("html").bind("dragstart.jsp selectstart.jsp", z), at.addClass("jspActive");
					var s = c.pageY - at.position().top;
					return a("html").bind("mousemove.jsp", function(a) {
						T(a.pageY - s, !1)
					}).bind("mouseup.jsp mouseleave.jsp", P), !1
				}), o())
			}
			function o() {
				pt.height(t + "px"), lt = 0, ft = K.verticalGutter + pt.outerWidth(), Q.width(J - ft - f);
				try {
					0 === dt.position().left && Q.css("margin-left", ft + "px")
				} catch (s) {}
			}
			function y() {
				ot && (et.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), bt = et.find(">.jspHorizontalBar"), wt = bt.find(">.jspTrack"), ut = wt.find(">.jspDrag"), K.showArrows && (xt = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", k(-1, 0)).bind("click.jsp", z), x = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", k(1, 0)).bind("click.jsp", z), K.arrowScrollOnHover && (xt.bind("mouseover.jsp", k(-1, 0, xt)), x.bind("mouseover.jsp", k(1, 0, x))), j(wt, K.horizontalArrowPositions, xt, x)), ut.hover(function() {
					ut.addClass("jspHover")
				}, function() {
					ut.removeClass("jspHover")
				}).bind("mousedown.jsp", function(c) {
					a("html").bind("dragstart.jsp selectstart.jsp", z), ut.addClass("jspActive");
					var s = c.pageX - ut.position().left;
					return a("html").bind("mousemove.jsp", function(a) {
						A(a.pageX - s, !1)
					}).bind("mouseup.jsp mouseleave.jsp", P), !1
				}), l = et.innerWidth(), F())
			}
			function F() {
				et.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
					l -= a(this).outerWidth()
				}), wt.width(l + "px"), ht = 0
			}
			function C() {
				if (ot && st) {
					var c = wt.outerHeight(),
						s = pt.outerWidth();
					t -= c, a(bt).find(">.jspCap:visible,>.jspArrow").each(function() {
						l += a(this).outerWidth()
					}), l -= s, Z -= s, J -= c, wt.parent().append(a('<div class="jspCorner" />').css("width", c + "px")), o(), F()
				}
				ot && Q.width(et.outerWidth() - f + "px"), it = Q.outerHeight(), q = it / Z, ot && (yt = Math.ceil(1 / nt * l), yt > K.horizontalDragMaxWidth ? yt = K.horizontalDragMaxWidth : yt < K.horizontalDragMinWidth && (yt = K.horizontalDragMinWidth), ut.width(yt + "px"), ct = l - yt, S(ht)), st && (mt = Math.ceil(1 / q * t), mt > K.verticalDragMaxHeight ? mt = K.verticalDragMaxHeight : mt < K.verticalDragMinHeight && (mt = K.verticalDragMinHeight), at.height(mt + "px"), i = t - mt, E(lt))
			}
			function j(a, c, h, s) {
				var g, v = "before",
					b = "after";
				"os" == c && (c = /Mac/.test(navigator.platform) ? "after" : "split"), c == v ? b = c : c == b && (v = c, g = h, h = s, s = g), a[v](h)[b](s)
			}
			function k(a, s, c) {
				return function() {
					return _(a, s, this, c), this.blur(), !1
				}
			}
			function _(c, h, g, v) {
				g = a(g).addClass("jspActive");
				var b, w, y = !0,
					s = function() {
						0 !== c && kt.scrollByX(c * K.arrowButtonSpeed), 0 !== h && kt.scrollByY(h * K.arrowButtonSpeed), w = setTimeout(s, y ? K.initialDelay : K.arrowRepeatFreq), y = !1
					};
				s(), b = v ? "mouseout.jsp" : "mouseup.jsp", v = v || a("html"), v.bind(b, function() {
					g.removeClass("jspActive"), w && clearTimeout(w), w = null, v.unbind(b)
				})
			}
			function p() {
				D(), st && pt.bind("mousedown.jsp", function(c) {
					if (c.originalTarget === h || c.originalTarget == c.currentTarget) {
						var g, v = a(this),
							b = v.offset(),
							w = c.pageY - b.top - lt,
							y = !0,
							s = function() {
								var a = v.offset(),
									h = c.pageY - a.top - mt / 2,
									b = Z * K.scrollPagePercent,
									C = i * b / (it - Z);
								if (0 > w) lt - C > h ? kt.scrollByY(-b) : T(h);
								else {
									if (!(w > 0)) return void F();
									h > lt + C ? kt.scrollByY(b) : T(h)
								}
								g = setTimeout(s, y ? K.initialDelay : K.trackClickRepeatFreq), y = !1
							},
							F = function() {
								g && clearTimeout(g), g = null, a(document).unbind("mouseup.jsp", F)
							};
						return s(), a(document).bind("mouseup.jsp", F), !1
					}
				}), ot && wt.bind("mousedown.jsp", function(c) {
					if (c.originalTarget === h || c.originalTarget == c.currentTarget) {
						var g, v = a(this),
							b = v.offset(),
							w = c.pageX - b.left - ht,
							y = !0,
							s = function() {
								var a = v.offset(),
									h = c.pageX - a.left - yt / 2,
									b = J * K.scrollPagePercent,
									C = ct * b / (tt - J);
								if (0 > w) ht - C > h ? kt.scrollByX(-b) : A(h);
								else {
									if (!(w > 0)) return void F();
									h > ht + C ? kt.scrollByX(b) : A(h)
								}
								g = setTimeout(s, y ? K.initialDelay : K.trackClickRepeatFreq), y = !1
							},
							F = function() {
								g && clearTimeout(g), g = null, a(document).unbind("mouseup.jsp", F)
							};
						return s(), a(document).bind("mouseup.jsp", F), !1
					}
				})
			}
			function D() {
				wt && wt.unbind("mousedown.jsp"), pt && pt.unbind("mousedown.jsp")
			}
			function P() {
				a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), at && at.removeClass("jspActive"), ut && ut.removeClass("jspActive")
			}
			function T(s, a) {
				st && (0 > s ? s = 0 : s > i && (s = i), a === h && (a = K.animateScroll), a ? kt.animate(at, "top", s, E) : (at.css("top", s), E(s)))
			}
			function E(a) {
				a === h && (a = at.position().top), et.scrollTop(0), lt = a;
				var c = 0 === lt,
					v = lt == i,
					b = a / i,
					s = -b * (it - Z);
				(_t != c || Pt != v) && (_t = c, Pt = v, g.trigger("jsp-arrow-change", [_t, Pt, Dt, Tt])), u(c, v), Q.css("top", s), g.trigger("jsp-scroll-y", [-s, c, v]).trigger("scroll")
			}
			function A(a, s) {
				ot && (0 > a ? a = 0 : a > ct && (a = ct), s === h && (s = K.animateScroll), s ? kt.animate(ut, "left", a, S) : (ut.css("left", a), S(a)))
			}
			function S(a) {
				a === h && (a = ut.position().left), et.scrollTop(0), ht = a;
				var c = 0 === ht,
					v = ht == ct,
					b = a / ct,
					s = -b * (tt - J);
				(Dt != c || Tt != v) && (Dt = c, Tt = v, g.trigger("jsp-arrow-change", [_t, Pt, Dt, Tt])), r(c, v), Q.css("left", s), g.trigger("jsp-scroll-x", [-s, c, v]).trigger("scroll")
			}
			function u(a, s) {
				K.showArrows && (gt[a ? "addClass" : "removeClass"]("jspDisabled"), vt[s ? "addClass" : "removeClass"]("jspDisabled"))
			}
			function r(a, s) {
				K.showArrows && (xt[a ? "addClass" : "removeClass"]("jspDisabled"), x[s ? "addClass" : "removeClass"]("jspDisabled"))
			}
			function L(s, a) {
				var c = s / (it - Z);
				T(c * i, a)
			}
			function M(a, s) {
				var c = a / (tt - J);
				A(c * ct, s)
			}
			function N(c, h, g) {
				var v, b, w, y, F, C, j, k, _, s = 0,
					D = 0;
				try {
					v = a(c)
				} catch (P) {
					return
				}
				for (b = v.outerHeight(), w = v.outerWidth(), et.scrollTop(0), et.scrollLeft(0); !v.is(".jspPane");) if (s += v.position().top, D += v.position().left, v = v.offsetParent(), /^body|html$/i.test(v[0].nodeName)) return;
				y = H(), C = y + Z, y > s || h ? k = s - K.verticalGutter : s + b > C && (k = s - Z + b + K.verticalGutter), k && L(k, g), F = W(), j = F + J, F > D || h ? _ = D - K.horizontalGutter : D + w > j && (_ = D - J + w + K.horizontalGutter), _ && M(_, g)
			}
			function W() {
				return -Q.position().left
			}
			function H() {
				return -Q.position().top
			}
			function I() {
				var s = it - Z;
				return s > 20 && s - H() < 10
			}
			function R() {
				var s = tt - J;
				return s > 20 && s - W() < 10
			}
			function B() {
				et.unbind(At).bind(At, function(a, c, h, g) {
					var v = ht,
						s = lt;
					return kt.scrollBy(h * K.mouseWheelSpeed, -g * K.mouseWheelSpeed, !1), v == ht && s == lt
				})
			}
			function n() {
				et.unbind(At)
			}
			function z() {
				return !1
			}
			function O() {
				Q.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(s) {
					N(s.target, !1)
				})
			}
			function $() {
				Q.find(":input,a").unbind("focus.jsp")
			}
			function V() {
				function c() {
					var a = ht,
						c = lt;
					switch (s) {
					case 40:
						kt.scrollByY(K.keyboardSpeed, !1);
						break;
					case 38:
						kt.scrollByY(-K.keyboardSpeed, !1);
						break;
					case 34:
					case 32:
						kt.scrollByY(Z * K.scrollPagePercent, !1);
						break;
					case 33:
						kt.scrollByY(-Z * K.scrollPagePercent, !1);
						break;
					case 39:
						kt.scrollByX(K.keyboardSpeed, !1);
						break;
					case 37:
						kt.scrollByX(-K.keyboardSpeed, !1)
					}
					return h = a != ht || c != lt
				}
				var s, h, v = [];
				ot && v.push(bt[0]), st && v.push(dt[0]), Q.focus(function() {
					g.focus()
				}), g.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(g) {
					if (g.target === this || v.length && a(g.target).closest(v).length) {
						var b = ht,
							w = lt;
						switch (g.keyCode) {
						case 40:
						case 38:
						case 34:
						case 32:
						case 33:
						case 39:
						case 37:
							s = g.keyCode, c();
							break;
						case 35:
							L(it - Z), s = null;
							break;
						case 36:
							L(0), s = null
						}
						return h = g.keyCode == s && b != ht || w != lt, !h
					}
				}).bind("keypress.jsp", function(a) {
					return a.keyCode == s && c(), !h
				}), K.hideFocus ? (g.css("outline", "none"), "hideFocus" in et[0] && g.attr("hideFocus", !0)) : (g.css("outline", ""), "hideFocus" in et[0] && g.attr("hideFocus", !1))
			}
			function U() {
				g.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
			}
			function Y() {
				if (location.hash && location.hash.length > 1) {
					var c, h, g = escape(location.hash.substr(1));
					try {
						c = a("#" + g + ', a[name="' + g + '"]')
					} catch (s) {
						return
					}
					c.length && Q.find(g) && (0 === et.scrollTop() ? h = setInterval(function() {
						et.scrollTop() > 0 && (N(c, !0), a(document).scrollTop(et.position().top), clearInterval(h))
					}, 50) : (N(c, !0), a(document).scrollTop(et.position().top)))
				}
			}
			function m() {
				a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function(s) {
					var h, g, v, b, w, y, F = this.href.substr(0, this.href.indexOf("#")),
						C = location.href;
					if (-1 !== location.href.indexOf("#") && (C = location.href.substr(0, location.href.indexOf("#"))), F === C) {
						h = escape(this.href.substr(this.href.indexOf("#") + 1));
						try {
							g = a("#" + h + ', a[name="' + h + '"]')
						} catch (j) {
							return
						}
						g.length && (v = g.closest(".jspScrollable"), b = v.data("jsp"), b.scrollToElement(g, !0), v[0].scrollIntoView && (w = a(c).scrollTop(), y = g.offset().top, (w > y || y > w + a(c).height()) && v[0].scrollIntoView()), s.preventDefault())
					}
				}))
			}
			function X() {
				var a, c, h, g, v, s = !1;
				et.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(b) {
					var w = b.originalEvent.touches[0];
					a = W(), c = H(), h = w.pageX, g = w.pageY, v = !1, s = !0
				}).bind("touchmove.jsp", function(b) {
					if (s) {
						var w = b.originalEvent.touches[0],
							y = ht,
							F = lt;
						return kt.scrollTo(a + h - w.pageX, c + g - w.pageY), v = v || Math.abs(h - w.pageX) > 5 || Math.abs(g - w.pageY) > 5, y == ht && F == lt
					}
				}).bind("touchend.jsp", function() {
					s = !1
				}).bind("click.jsp-touchclick", function() {
					return v ? (v = !1, !1) : void 0
				})
			}
			function G() {
				var s = H(),
					a = W();
				g.removeClass("jspScrollable").unbind(".jsp"), g.replaceWith(Et.append(Q.children())), Et.scrollTop(s), Et.scrollLeft(a), Ft && clearInterval(Ft)
			}
			var K, Q, J, Z, et, tt, it, nt, q, st, ot, at, i, lt, ut, ct, ht, dt, pt, ft, t, mt, gt, vt, bt, wt, l, yt, xt, x, Ft, Ct, f, jt, kt = this,
				_t = !0,
				Dt = !0,
				Pt = !1,
				Tt = !1,
				Et = g.clone(!1, !1).empty(),
				At = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
			Ct = g.css("paddingTop") + " " + g.css("paddingRight") + " " + g.css("paddingBottom") + " " + g.css("paddingLeft"), f = (parseInt(g.css("paddingLeft"), 10) || 0) + (parseInt(g.css("paddingRight"), 10) || 0), a.extend(kt, {
				reinitialise: function(c) {
					c = a.extend({}, K, c), b(c)
				},
				scrollToElement: function(a, c, s) {
					N(a, c, s)
				},
				scrollTo: function(a, s, c) {
					M(a, c), L(s, c)
				},
				scrollToX: function(a, s) {
					M(a, s)
				},
				scrollToY: function(s, a) {
					L(s, a)
				},
				scrollToPercentX: function(a, s) {
					M(a * (tt - J), s)
				},
				scrollToPercentY: function(a, s) {
					L(a * (it - Z), s)
				},
				scrollBy: function(a, s, c) {
					kt.scrollByX(a, c), kt.scrollByY(s, c)
				},
				scrollByX: function(s, a) {
					var c = W() + Math[0 > s ? "floor" : "ceil"](s),
						h = c / (tt - J);
					A(h * ct, a)
				},
				scrollByY: function(s, a) {
					var c = H() + Math[0 > s ? "floor" : "ceil"](s),
						h = c / (it - Z);
					T(h * i, a)
				},
				positionDragX: function(s, a) {
					A(s, a)
				},
				positionDragY: function(a, s) {
					T(a, s)
				},
				animate: function(a, c, s, h) {
					var g = {};
					g[c] = s, a.animate(g, {
						duration: K.animateDuration,
						easing: K.animateEase,
						queue: !1,
						step: h
					})
				},
				getContentPositionX: function() {
					return W()
				},
				getContentPositionY: function() {
					return H()
				},
				getContentWidth: function() {
					return tt
				},
				getContentHeight: function() {
					return it
				},
				getPercentScrolledX: function() {
					return W() / (tt - J)
				},
				getPercentScrolledY: function() {
					return H() / (it - Z)
				},
				getIsScrollableH: function() {
					return ot
				},
				getIsScrollableV: function() {
					return st
				},
				getContentPane: function() {
					return Q
				},
				scrollToBottom: function(s) {
					T(i, s)
				},
				hijackInternalLinks: a.noop,
				destroy: function() {
					G()
				}
			}), b(v)
		}
		return e = a.extend({}, a.fn.jScrollPane.defaults, e), a.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
			e[this] = e[this] || e.speed
		}), this.each(function() {
			var f = a(this),
				c = f.data("jsp");
			c ? c.reinitialise(e) : (a("script", f).filter('[type="text/javascript"],:not([type])').remove(), c = new d(f, e), f.data("jsp", c))
		})
	}, a.fn.jScrollPane.defaults = {
		showArrows: !1,
		maintainPosition: !0,
		stickToBottom: !1,
		stickToRight: !1,
		clickOnTrack: !0,
		autoReinitialise: !1,
		autoReinitialiseDelay: 500,
		verticalDragMinHeight: 0,
		verticalDragMaxHeight: 99999,
		horizontalDragMinWidth: 0,
		horizontalDragMaxWidth: 99999,
		contentWidth: h,
		animateScroll: !1,
		animateDuration: 300,
		animateEase: "linear",
		hijackInternalLinks: !1,
		verticalGutter: 4,
		horizontalGutter: 4,
		mouseWheelSpeed: 3,
		arrowButtonSpeed: 0,
		arrowRepeatFreq: 50,
		arrowScrollOnHover: !1,
		trackClickSpeed: 0,
		trackClickRepeatFreq: 70,
		verticalArrowPositions: "split",
		horizontalArrowPositions: "split",
		enableKeyboardNavigation: !0,
		hideFocus: !1,
		keyboardSpeed: 0,
		initialDelay: 300,
		speed: 30,
		scrollPagePercent: .8
	}
}(jQuery, this), !
function(a) {
	"function" == typeof define && define.amd ? define("mycenter/modules/common/js/libs/jquery.lib", ["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
	function c(c) {
		var l, h = c || window.event,
			f = [].slice.call(arguments, 1),
			g = 0,
			v = 0,
			i = 0,
			b = 0,
			w = 0;
		return c = a.event.fix(h), c.type = "mousewheel", h.wheelDelta && (g = h.wheelDelta), h.detail && (g = -1 * h.detail), h.deltaY && (i = -1 * h.deltaY, g = i), h.deltaX && (v = h.deltaX, g = -1 * v), void 0 !== h.wheelDeltaY && (i = h.wheelDeltaY), void 0 !== h.wheelDeltaX && (v = -1 * h.wheelDeltaX), b = Math.abs(g), (!d || d > b) && (d = b), w = Math.max(Math.abs(i), Math.abs(v)), (!e || e > w) && (e = w), l = g > 0 ? "floor" : "ceil", g = Math[l](g / d), v = Math[l](v / e), i = Math[l](i / e), f.unshift(c, g, v, i), (a.event.dispatch || a.event.handle).apply(this, f)
	}
	var d, e, f, h = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		g = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
	if (a.event.fixHooks) for (f = h.length; f;) a.event.fixHooks[h[--f]] = a.event.mouseHooks;
	a.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) for (var a = g.length; a;) this.addEventListener(g[--a], c, !1);
			else this.onmousewheel = c
		},
		teardown: function() {
			if (this.removeEventListener) for (var a = g.length; a;) this.removeEventListener(g[--a], c, !1);
			else this.onmousewheel = null
		}
	}, a.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
}), !
function(a) {
	a.extend(a.fn, {
		validate: function(c) {
			if (!this.length) return void(c && c.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"));
			var h = a.data(this[0], "validator");
			return h ? h : (h = new a.validator(c, this[0]), a.data(this[0], "validator", h), h.settings.onsubmit && (this.validateDelegate(":submit", "click", function(c) {
				h.settings.submitHandler && (h.submitButton = c.target), a(c.target).hasClass("cancel") && (h.cancelSubmit = !0)
			}), this.submit(function(c) {
				function d() {
					var d;
					return h.settings.submitHandler ? (h.submitButton && (d = a("<input type='hidden'/>").attr("name", h.submitButton.name).val(h.submitButton.value).appendTo(h.currentForm)), h.settings.submitHandler.call(h, h.currentForm, c), h.submitButton && d.remove(), !1) : !0
				}
				return void 0 != window.tinyMCE && tinyMCE.triggerSave(), h.settings.debug && c.preventDefault(), h.cancelSubmit ? (h.cancelSubmit = !1, d()) : h.form() ? h.pendingRequest ? (h.formSubmitted = !0, !1) : d() : (h.focusInvalid(), !1)
			})), h)
		},
		valid: function() {
			var c, h;
			return a(this[0]).is("form") ? this.validate().form() : (c = !0, h = a(this[0].form).validate(), this.each(function() {
				c &= h.element(this)
			}), c)
		},
		removeAttrs: function(c) {
			var h = {},
				d = this;
			return a.each(c.split(/\s/), function(a, c) {
				h[c] = d.attr(c), d.removeAttr(c)
			}), h
		},
		rules: function(c, h) {
			var e, f, g, v, i, b, d = this[0];
			if (c) switch (e = a.data(d.form, "validator").settings, f = e.rules, g = a.validator.staticRules(d), c) {
			case "add":
				a.extend(g, a.validator.normalizeRule(h)), f[d.name] = g, h.messages && (e.messages[d.name] = a.extend(e.messages[d.name], h.messages));
				break;
			case "remove":
				return h ? (v = {}, a.each(h.split(/\s/), function(a, c) {
					v[c] = g[c], delete g[c]
				}), v) : (delete f[d.name], g)
			}
			return i = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(d), a.validator.classRules(d), a.validator.attributeRules(d), a.validator.staticRules(d)), d), i.required && (b = i.required, delete i.required, i = a.extend({
				required: b
			}, i)), i
		}
	}), a.extend(a.expr[":"], {
		blank: function(c) {
			return !a.trim("" + c.value)
		},
		filled: function(c) {
			return !!a.trim("" + c.value)
		},
		unchecked: function(a) {
			return !a.checked
		}
	}), a.validator = function(c, h) {
		this.settings = a.extend(!0, {}, a.validator.defaults, c), this.currentForm = h, this.init()
	}, a.validator.format = function(c, h) {
		return 1 === arguments.length ?
		function() {
			var h = a.makeArray(arguments);
			return h.unshift(c), a.validator.format.apply(this, h)
		} : (arguments.length > 2 && h.constructor !== Array && (h = a.makeArray(arguments).slice(1)), h.constructor !== Array && (h = [h]), a.each(h, function(a, h) {
			c = c.replace(new RegExp("\\{" + a + "\\}", "g"), h)
		}), c)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "span",
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: "",
			ignoreTitle: !1,
			onfocusin: function(a) {
				this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
			},
			onfocusout: function(a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function(a, c) {
				(9 != c.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastActive) && this.element(a)
			},
			onclick: function(a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function(c, h, d) {
				"radio" === c.type ? this.findByName(c.name).addClass(h).removeClass(d) : a(c).addClass(h).removeClass(d)
			},
			unhighlight: function(c, h, d) {
				"radio" === c.type ? this.findByName(c.name).removeClass(h).addClass(d) : a(c).removeClass(h).addClass(d)
			}
		},
		setDefaults: function(c) {
			a.extend(a.validator.defaults, c)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function d(c) {
					var h = a.data(this[0].form, "validator"),
						d = "on" + c.type.replace(/^validate/, "");
					h.settings[d] && h.settings[d].call(h, this[0], c)
				}
				var c, h;
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(), c = this.groups = {}, a.each(this.settings.groups, function(h, d) {
					a.each(d.split(/\s/), function(a, d) {
						c[d] = h
					})
				}), h = this.settings.rules, a.each(h, function(c, d) {
					h[c] = a.validator.normalizeRule(d)
				}), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", d).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", d), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				var a, c, h;
				for (this.prepareForm(), a = 0, c = this.currentElements = this.elements(); c[a]; a++) if (void 0 != this.findByName(c[a].name).length && this.findByName(c[a].name).length > 1) for (h = 0; h < this.findByName(c[a].name).length; h++) this.check(this.findByName(c[a].name)[h]);
				else this.check(c[a]);
				return this.valid()
			},
			element: function(c) {
				c = this.validationTargetFor(this.clean(c)), this.lastElement = c, this.prepareElement(c), this.currentElements = a(c);
				var h = this.check(c) !== !1;
				return h ? delete this.invalid[c.name] : this.invalid[c.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), h
			},
			showErrors: function(c) {
				if (c) {
					a.extend(this.errorMap, c), this.errorList = [];
					for (var h in c) this.errorList.push({
						message: c[h],
						element: this.findByName(h)[0]
					});
					this.successList = a.grep(this.successList, function(a) {
						return !(a.name in c)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(a) {
				var h = 0;
				for (c in a) h++;
				return h
			},
			hideErrors: function() {
				this.addWrapper(this.toHide).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (c) {}
			},
			findLastActive: function() {
				var c = this.lastActive;
				return c && 1 === a.grep(this.errorList, function(a) {
					return a.element.name === c.name
				}).length && c
			},
			elements: function() {
				var c = this,
					h = {};
				return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
					return !this.name && c.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in h || !c.objectLength(a(this).rules()) ? !1 : (h[this.name] = !0, !0)
				})
			},
			clean: function(c) {
				return a(c)[0]
			},
			errors: function() {
				var c = this.settings.errorClass.replace(" ", ".");
				return a(this.settings.errorElement + "." + c, this.errorContext)
			},
			reset: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function(c) {
				var h = a(c).attr("type"),
					d = a(c).val();
				return "radio" === h || "checkbox" === h ? a('input[name="' + a(c).attr("name") + '"]:checked').val() : "string" == typeof d ? d.replace(/\r/g, "") : d
			},
			check: function(c) {
				var h, d, e, f, g, v;
				c = this.validationTargetFor(this.clean(c)), h = a(c).rules(), d = !1, e = this.elementValue(c);
				for (g in h) {
					v = {
						method: g,
						parameters: h[g]
					};
					try {
						if (f = a.validator.methods[g].call(this, e, c, v.parameters), "dependency-mismatch" === f) {
							d = !0;
							continue
						}
						if (d = !1, "pending" === f) return void(this.toHide = this.toHide.not(this.errorsFor(c)));
						if (!f) return this.formatAndAdd(c, v), !1
					} catch (i) {
						throw this.settings.debug && window.console && console.log("exception occured when checking element " + c.id + ", check the '" + v.method + "' method", i), i
					}
				}
				return d ? void 0 : (this.objectLength(h) && this.successList.push(c), !0)
			},
			customMetaMessage: function(c, h) {
				if (a.metadata) {
					var d = this.settings.meta ? a(c).metadata()[this.settings.meta] : a(c).metadata();
					return d && d.messages && d.messages[h]
				}
			},
			customDataMessage: function(c, h) {
				return a(c).data("msg-" + h.toLowerCase()) || c.attributes && a(c).attr("data-msg-" + h.toLowerCase())
			},
			customMessage: function(a, c) {
				var h = this.settings.messages[a];
				return h && (h.constructor === String ? h : h[c])
			},
			findDefined: function() {
				for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
				return void 0
			},
			defaultMessage: function(c, h) {
				return this.findDefined(this.customMessage(c.name, h), this.customDataMessage(c, h), this.customMetaMessage(c, h), !this.settings.ignoreTitle && c.title || void 0, a.validator.messages[h], "<strong>Warning: No message defined for " + c.name + "</strong>")
			},
			formatAndAdd: function(c, h) {
				var d = this.defaultMessage(c, h.method),
					e = /\$?\{(\d+)\}/g;
				"function" == typeof d ? d = d.call(this, h.parameters, c) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), h.parameters)), this.errorList.push({
					message: d,
					element: c
				}), this.errorMap[c.name] = d, this.submitted[c.name] = d
			},
			addWrapper: function(a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function() {
				var a, c, h;
				for (a = 0; this.errorList[a]; a++) h = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, h.element, this.settings.errorClass, this.settings.validClass), this.showLabel(h.element, h.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight) for (a = 0, c = this.validElements(); c[a]; a++) this.settings.unhighlight.call(this, c[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return a(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(c, h) {
				var d = this.errorsFor(c);
				d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.attr("generated") && d.html(h)) : (d = a("<" + this.settings.errorElement + "/>").attr({
					"for": this.idOrName(c),
					generated: !0
				}).addClass(this.settings.errorClass).html(h || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(c)) : d.insertAfter(a(c)))), !h && this.settings.success && (d.text("").append('<em class="error_arrow"></em>'), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, c)), this.toShow = this.toShow.add(d)
			},
			errorsFor: function(c) {
				var h = this.idOrName(c);
				return this.errors().filter(function() {
					return a(this).attr("for") === h
				})
			},
			idOrName: function(a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function(a) {
				return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
			},
			checkable: function(a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function(c) {
				return a(this.currentForm).find('[name="' + c + '"]')
			},
			getLength: function(c, h) {
				switch (h.nodeName.toLowerCase()) {
				case "select":
					return a("option:selected", h).length;
				case "input":
					if (this.checkable(h)) return this.findByName(h.name).filter(":checked").length
				}
				return c.length
			},
			depend: function(a, c) {
				return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, c) : !0
			},
			dependTypes: {
				"boolean": function(a) {
					return a
				},
				string: function(c, h) {
					return !!a(c, h.form).length
				},
				"function": function(a, c) {
					return a(c)
				}
			},
			optional: function(c) {
				var h = this.elementValue(c);
				return !a.validator.methods.required.call(this, h, c) && "dependency-mismatch"
			},
			startRequest: function(a) {
				this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
			},
			stopRequest: function(c, h) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[c.name], h && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !h && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(c) {
				return a.data(c, "previousValue") || a.data(c, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(c, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(c, h) {
			c.constructor === String ? this.classRuleSettings[c] = h : a.extend(this.classRuleSettings, c)
		},
		classRules: function(c) {
			var h = {},
				d = a(c).attr("class");
			return d && a.each(d.split(" "), function() {
				this in a.validator.classRuleSettings && a.extend(h, a.validator.classRuleSettings[this])
			}), h
		},
		attributeRules: function(c) {
			var e, f, h = {},
				d = a(c);
			for (e in a.validator.methods)"required" === e ? (f = d.get(0).getAttribute(e), "" === f && (f = !0), f = !! f) : f = d.attr(e), f ? h[e] = f : d[0].getAttribute("type") === e && (h[e] = !0);
			return h.maxlength && /-1|2147483647|524288/.test(h.maxlength) && delete h.maxlength, h
		},
		metadataRules: function(c) {
			if (!a.metadata) return {};
			var h = a.data(c.form, "validator").settings.meta;
			return h ? a(c).metadata()[h] : a(c).metadata()
		},
		staticRules: function(c) {
			var h = {},
				d = a.data(c.form, "validator");
			return d.settings.rules && (h = a.validator.normalizeRule(d.settings.rules[c.name]) || {}), h
		},
		normalizeRules: function(c, h) {
			return a.each(c, function(d, e) {
				if (e === !1) return void delete c[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
					case "string":
						f = !! a(e.depends, h.form).length;
						break;
					case "function":
						f = e.depends.call(h, h)
					}
					f ? c[d] = void 0 !== e.param ? e.param : !0 : delete c[d]
				}
			}), a.each(c, function(d, e) {
				c[d] = a.isFunction(e) ? e(h) : e
			}), a.each(["minlength", "maxlength", "min", "max"], function() {
				c[this] && (c[this] = Number(c[this]))
			}), a.each(["rangelength", "range"], function() {
				c[this] && (c[this] = [Number(c[this][0]), Number(c[this][1])])
			}), a.validator.autoCreateRanges && (c.min && c.max && (c.range = [c.min, c.max], delete c.min, delete c.max), c.minlength && c.maxlength && (c.rangelength = [c.minlength, c.maxlength], delete c.minlength, delete c.maxlength)), c.messages && delete c.messages, c
		},
		normalizeRule: function(c) {
			if ("string" == typeof c) {
				var h = {};
				a.each(c.split(/\s/), function() {
					h[this] = !0
				}), c = h
			}
			return c
		},
		addMethod: function(c, h, d) {
			a.validator.methods[c] = h, a.validator.messages[c] = void 0 !== d ? d : a.validator.messages[c], h.length < 3 && a.validator.addClassRules(c, a.validator.normalizeRule(c))
		},
		methods: {
			required: function(c, h, d) {
				if (!this.depend(d, h)) return "dependency-mismatch";
				if ("select" === h.nodeName.toLowerCase()) {
					var e = a(h).val();
					return e && e.length > 0
				}
				return this.checkable(h) ? this.getLength(c, h) > 0 : (c == a(h).attr("placeholder") && (c = ""), a.trim(c).length > 0)
			},
			remote: function(c, h, d) {
				var e, f, g;
				return this.optional(h) ? "dependency-mismatch" : (e = this.previousValue(h), this.settings.messages[h.name] || (this.settings.messages[h.name] = {}), e.originalMessage = this.settings.messages[h.name].remote, this.settings.messages[h.name].remote = e.message, d = "string" == typeof d && {
					url: d
				} || d, this.pending[h.name] ? "pending" : e.old === c ? e.valid : (e.old = c, f = this, this.startRequest(h), g = {}, g[h.name] = c, a.ajax(a.extend(!0, {
					url: d,
					mode: "abort",
					port: "validate" + h.name,
					dataType: "json",
					data: g,
					success: function(d) {
						var g, v, i, b;
						f.settings.messages[h.name].remote = e.originalMessage, g = d === !0 || "true" === d, g ? (v = f.formSubmitted, f.prepareElement(h), f.formSubmitted = v, f.successList.push(h), delete f.invalid[h.name], f.showErrors()) : (i = {}, b = d || f.defaultMessage(h, "remote"), i[h.name] = e.message = a.isFunction(b) ? b(c) : b, f.invalid[h.name] = !0, f.showErrors(i)), e.valid = g, f.stopRequest(h, g)
					}
				}, d)), "pending"))
			},
			minlength: function(c, h, d) {
				var e = a.isArray(c) ? c.length : this.getLength(a.trim(c), h);
				return this.optional(h) || e >= d
			},
			maxlength: function(c, h, d) {
				var e = a.isArray(c) ? c.length : this.getLength(a.trim(c), h);
				return this.optional(h) || d >= e
			},
			rangelength: function(c, h, d) {
				var e = a.isArray(c) ? c.length : this.getLength(a.trim(c), h);
				return this.optional(h) || e >= d[0] && e <= d[1]
			},
			min: function(a, c, h) {
				return this.optional(c) || a >= h
			},
			max: function(a, c, h) {
				return this.optional(c) || h >= a
			},
			range: function(a, c, h) {
				return this.optional(c) || a >= h[0] && a <= h[1]
			},
			email: function(c, h) {
				return c = a.trim(c), this.optional(h) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[ -퟿豈-﷏ﷰ-￯])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[ -퟿豈-﷏ﷰ-￯])+)*)|((")(((( |	)*(
))?( |	)+)?(([--]|!|[#-[]|[]-~]|[ -퟿豈-﷏ﷰ-￯])|(\\([-	
-]|[ -퟿豈-﷏ﷰ-￯]))))*((( |	)*(
))?( |	)+)?(")))@((([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])))\.)+(([a-z]|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|[ -퟿豈-﷏ﷰ-￯])))$/i.test(c)
			},
			url: function(a, c) {
				return this.optional(c) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])))\.)+(([a-z]|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|[ -퟿豈-﷏ﷰ-￯])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[-]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
			},
			date: function(a, c) {
				return this.optional(c) || !/Invalid|NaN/.test(new Date(a))
			},
			dateISO: function(a, c) {
				return this.optional(c) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
			},
			number: function(a, c) {
				return this.optional(c) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function(a, c) {
				return this.optional(c) || /^\d+$/.test(a)
			},
			creditcard: function(a, c) {
				var h, d, e, f, g;
				if (this.optional(c)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(a)) return !1;
				for (h = 0, d = 0, e = !1, a = a.replace(/\D/g, ""), f = a.length - 1; f >= 0; f--) g = a.charAt(f), d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), h += d, e = !e;
				return 0 === h % 10
			},
			equalTo: function(c, h, d) {
				var e = a(d);
				return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					a(h).valid()
				}), c === e.val()
			}
		}
	}), a.format = a.validator.format
}(jQuery), function(a) {
	var c, h = {};
	a.ajaxPrefilter ? a.ajaxPrefilter(function(a, c, d) {
		var e = a.port;
		"abort" === a.mode && (h[e] && h[e].abort(), h[e] = d)
	}) : (c = a.ajax, a.ajax = function(d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (h[f] && h[f].abort(), h[f] = c.apply(this, arguments)) : c.apply(this, arguments)
	})
}(jQuery), function(a) {
	jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || a.each({
		focus: "focusin",
		blur: "focusout"
	}, function(c, h) {
		function d(c) {
			return c = a.event.fix(c), c.type = h, a.event.handle.call(this, c)
		}
		a.event.special[h] = {
			setup: function() {
				this.addEventListener(c, d, !0)
			},
			teardown: function() {
				this.removeEventListener(c, d, !0)
			},
			handler: function(c) {
				var d = arguments;
				return d[0] = a.event.fix(c), d[0].type = h, a.event.handle.apply(this, d)
			}
		}
	}), a.extend(a.fn, {
		validateDelegate: function(c, h, d) {
			return this.bind(h, function(h) {
				var e = a(h.target);
				return e.is(c) ? d.apply(e, arguments) : void 0
			})
		}
	})
}(jQuery); /*!mycenter/modules/common/js/common.js*/
;
define("mycenter/modules/common/js/common", ["require", "exports", "module"], function() {
	function a(a, c) {
		$.colorbox({
			html: '<div id="uploadFile" class="popup"><table width="100%"><tr><td align="center"><h4 class="error_msg">' + a + '</h4></td></tr><tr><td align="center"><a href="javascript:;" class="btn_s">ç¡®&nbsp;å®š</a></td></tr></table></div>',
			title: c ? c : "é”™è¯¯æç¤º"
		})
	}
	var c = window.location.protocol + "//www.lagou.com";
	window.myresumeCommon = window.myresumeCommon || {
		requestTargets: {
			workShowSave: "/workShow/save.json",
			workShowDel: "/workShow/delws.json",
			skillSave: "/skillEvaluate/save.json",
			skillDel: "/skillEvaluate/delSkill.json",
			skillDelAll: "/skillEvaluate/delAllSkill.json",
			workUpload: "/workShow/uploadWorkPic.json",
			workCut: "/workShow/cutWorkPic.json",
			projectExpSave: "/projectExperience/save.json",
			projectExpDel: "/projectExperience/delProject.json",
			expectJobSave: "/expectJobs/expectJobs.json",
			myRemark: "/resume/intro.json",
			uploadLogo: "/workExperience/uploadLogo.json",
			photoUpload: "/resume/uploadPhoto.json",
			upCreateCompanyLogo: "/c/uploadPic.json",
			createCompanyCut: "/c/cutPic.json"
		},
		templates: {
			workShowOnline: ['<div class="mr_wo_show" data-type="#{type}" data-id="#{id}">', "<div>", '<div class="mr_edit mr_c_r_t">', '<i></i><em class="mr_edit_text" data-type="#{type}">ç¼–è¾‘</em>', "</div>", "</div>", '<div class="mr_self_site">', '<a class="mr_self_sitelink" href="#{ahref}" target="_blank">', "#{href}", "</a>", "</div>", '<div class="mr_wo_preview ueditor_parse">', "#{desc}", "</div>", "</div>", '<form class="add_worksshow_form addWorksShowOnlineFormUpdate dn">', '<div class="mr_add_work mr_addwork_online">', '<div class="mr_worksshow_tab">', '<span class="mr_wst_upimage disabled">ä¸Šä¼ å›¾ç‰‡</span>', '<span class="mr_wst_uponline selected">åœ¨çº¿ä½œå“</span>', "</div>", '<div class="mr_wo_show">', '<div class="mr_self_site">', '<a class="mr_self_sitelink" href="#{ahref}" target="_blank">', "#{href}", "</a>", "</div>", '<div class="mr_wo_preview ueditor_parse">', "#{desc}", "</div>", "</div>", "<label>ä½œå“åœ°å€</label>", '<div class="mr_input_div mr_click_flag">', '<input class="mr_btn workOnlineUrlUpdate" name="url" value="#{href}"/>', "</div>", "<label>ä½œå“æè¿°</label>", '<div id="workOnlineDescUpdate" class="wrap_editor">', '<script id="ueditor_#{id}" type="text/plain" class="ueditor_updateonlineImage"></script>', "</div>", '<div class="mr_ope clearfixs">', '<div class="mr_delete">', '<div class="mr_delete_pop dn">', "<p>ç¡®å®šåˆ é™¤æœ¬æ¡ä¿¡æ¯ï¼Ÿ</p>", "<div>", '<span class="mr_del_ok">åˆ é™¤</span>', '<span class="mr_del_cancel">å–æ¶ˆ</span>  ', "</div>", "</div>", "<span>åˆ é™¤æœ¬æ¡</span>", "</div>", '<input type="submit" class="mr_save" value="ä¿å­˜" data-image-old="#{href}">', '<a href="javascript:;" class="mr_cancel">å–æ¶ˆ</a>', "</div>", "</div>", "</form>"].join(""),
			workShowUpload: ['<div class="mr_wu_show" data-type="#{type}" data-id="#{id}">', '<div class="mr_wu_t">', '<a href="' + c + '/#{imageUrl}" target="_blank">', '<img class="wh43" src="' + c + '/#{imgsrc}" alt="#{title}" data-origin-src="#{imageUrl}" data-cut-url="#{imgsrc}">', "</a>", "</div>", '<div class="mr_wu_con">', '<div class="clearfixs">', '<div class="mr_content_l #{hasTitle}">', '<div class="l2 maxWidth">', '<span class="mr_work_title">[ #{title} ]</span>', "</div>", "</div>", '<div class="mr_content_r">', '<div class="mr_edit mr_c_r_t">', '<i></i><em class="mr_edit_text" data-type="#{type}">ç¼–è¾‘</em>', "</div>", "</div>", "</div> ", '<div class="mr_wu_con_m ueditor_parse">', "#{desc}", "</div> ", "</div>", "</div>", '<form class="add_worksshow_form dn addWorksShowUploadFormUpdate">', '<div class="mr_add_work mr_addwork_online">', '<div class="mr_worksshow_tab">', '<span class="mr_wst_upimage selected">ä¸Šä¼ å›¾ç‰‡</span>', '<span class="mr_wst_uponline disabled">åœ¨çº¿ä½œå“</span>', "</div>", '<div class="mr_worksshow_upimage">', "<div>", "<i></i>", "<span>ä¸Šä¼ ä½œå“å›¾ç‰‡</span>", "</div>", '<input type="file" class="worksshow_up" id="worksshowUpUpdate_#{id}" name="workPic" title="ç›®å‰ä»…æ”¯æŒ10MBä»¥å†…çš„PNG/JPG/JPEG/GIFå›¾ç‰‡" onchange="myresumeCommon.utils.imageUpload( this, myresumeCommon.requestTargets.workUpload, worksShowOperator.addUploadSucc, worksShowOperator.addUploadFail );" />', '<img class="worksshowUpUpdateShow worksshow_img" src="" alt=""/>', "</div>", "<label>ä½œå“æ ‡é¢˜</label>", '<div class="mr_input_div mr_click_flag">', '<input class="mr_btn workUploadTitleUpdate" name="workTitle" value="#{title}"/>', "</div>", "<label>ä½œå“æè¿°</label>", '<div id="workImagesDescUpdate" class="mr_click_flag wrap_editor">', '<script id="ueditor_#{id}" type="text/plain" class="ueditor_updateupdateImage"></script>', "</div>", '<div class="mr_ope clearfixs">', '<div class="mr_delete">', '<div class="mr_delete_pop dn">', "<p>ç¡®å®šåˆ é™¤æœ¬æ¡ä¿¡æ¯ï¼Ÿ</p>", "<div>", '<span class="mr_del_ok">åˆ é™¤</span>', '<span class="mr_del_cancel">å–æ¶ˆ</span>  ', "</div>", "</div>", "<span>åˆ é™¤æœ¬æ¡</span>", "</div>", '<input type="submit" class="mr_save" value="ä¿å­˜" data-image-old="#{imageUrl}">', '<a href="javascript:;" class="mr_cancel">å–æ¶ˆ</a>', "</div> ", "</div>", "</form>"].join(""),
			skillItem: ['<div class="mr_skill_con" data-grade="#{skillPercent}" data-skill-id="#{id}">', '<span class="mr_skill_name" title="#{skillName}">#{skillName}</span>', '<span class="mr_skill_plan">', "<em></em>", "</span>", '<span class="mr_skill_delete"></span>', '<span class="mr_skill_level">#{masterLevel}</span>', '<i class="mr_skill_circle"><em>#{masterLevel}</em></i>', "</div>"].join("")
		},
		config: {
			userPhotoSelector: {
				width: 250,
				height: 250
			},
			companyLogoSelector: {
				width: 250,
				height: 250
			},
			perImagSelector: {
				width: 120,
				height: 120
			},
			productImgSelector: {
				width: 300,
				height: 180
			},
			workShowSelector: {
				width: 280,
				height: 210
			},
			cutLogoImage: {
				width: 360,
				height: 360,
				bgColor: "#ccc",
				enableRotation: !1,
				enableZoom: !0,
				selector: {
					w: 170,
					h: 170,
					showPositionsOnDrag: !1,
					showDimetionsOnDrag: !1,
					centered: !0,
					bgInfoLayer: "#fff",
					borderColor: "#02d1a1",
					animated: !1,
					maxWidth: 358,
					maxHeight: 358,
					borderColorHover: "#02d1a1"
				},
				image: {
					source: "",
					width: 0,
					height: 0,
					minZoom: 10,
					maxZoom: 300
				}
			},
			cutImage: {
				width: 360,
				height: 360,
				bgColor: "#ccc",
				enableRotation: !1,
				enableZoom: !0,
				selector: {
					w: 250,
					h: 250,
					showPositionsOnDrag: !1,
					showDimetionsOnDrag: !1,
					centered: !0,
					bgInfoLayer: "#fff",
					borderColor: "#02d1a1",
					animated: !1,
					maxWidth: 358,
					maxHeight: 358,
					borderColorHover: "#02d1a1"
				},
				image: {
					source: "",
					width: 0,
					height: 0,
					minZoom: 10,
					maxZoom: 300
				}
			},
			cutPerImage: {
				width: 360,
				height: 360,
				bgColor: "#ccc",
				enableRotation: !1,
				enableZoom: !0,
				selector: {
					w: 120,
					h: 120,
					showPositionsOnDrag: !1,
					showDimetionsOnDrag: !1,
					centered: !0,
					bgInfoLayer: "#fff",
					borderColor: "#02d1a1",
					animated: !1,
					maxWidth: 358,
					maxHeight: 358,
					borderColorHover: "#02d1a1"
				},
				image: {
					source: "",
					width: 0,
					height: 0,
					minZoom: 10,
					maxZoom: 300
				}
			},
			cutProductImage: {
				width: 360,
				height: 360,
				bgColor: "#ccc",
				enableRotation: !1,
				enableZoom: !0,
				selector: {
					w: 300,
					h: 180,
					showPositionsOnDrag: !1,
					showDimetionsOnDrag: !1,
					centered: !0,
					bgInfoLayer: "#fff",
					borderColor: "#02d1a1",
					animated: !1,
					maxWidth: 358,
					maxHeight: 358,
					borderColorHover: "#02d1a1"
				},
				image: {
					source: "",
					width: 0,
					height: 0,
					minZoom: 10,
					maxZoom: 300
				}
			},
			tinymce: {
				script_url: c + "/js/tinymce/jscripts/tiny_mce/tiny_mce.js",
				theme: "advanced",
				language: "zh-cn",
				plugins: "paste,autolink,lists,style,layer,save,advhr,advimage,advlink,iespell,inlinepopups,preview,media,searchreplace,contextmenu,fullscreen,noneditable,visualchars,nonbreaking",
				theme_advanced_buttons1: "bullist,numlist",
				theme_advanced_toolbar_location: "top",
				theme_advanced_toolbar_align: "left",
				theme_advanced_statusbar_location: "none",
				theme_advanced_resizing: !1,
				paste_auto_cleanup_on_paste: !0,
				paste_as_text: !0,
				auto_cleanup_word: !0,
				paste_remove_styles: !0,
				contextmenu: "copy cut paste",
				force_br_newlines: !0,
				force_p_newlines: !1,
				apply_source_formatting: !1,
				remove_linebreaks: !1,
				convert_newlines_to_brs: !0,
				content_css: c + "/js/tinymce/examples/css/content.css",
				template_external_list_url: "lists/template_list.js",
				external_link_list_url: "lists/link_list.js",
				template_replace_values: {
					username: "Some User",
					staffid: "991234"
				},
				onchange_callback: function(a) {
					tinyMCE.triggerSave();
					var c = tinyMCE.get(a.id).getContent();
					c.length > 20 && $("#" + a.id).valid()
				}
			}
		},
		errorTips: function(a, c, _) {
			_ = _ || 2e3, 1 != a.data("errortipspending") && (a.text(c), a.show(), a.data("errortipspending", 1), window.setTimeout(function() {
				a.hide(), a.data("errortipspending", 0)
			}, _))
		},
		utils: {
			imageUpload: function(c, _, v, h) {
				c = $(c);
				var w = c.attr("id"),
					g = c.attr("title"),
					b = "text",
					k = {};
				this.AllowExt = ".jpg,.gif,.jpeg,.png,.pjpeg", this.FileExt = c.val().substr(c.val().lastIndexOf(".")).toLowerCase(), 0 != this.AllowExt && -1 == this.AllowExt.indexOf(this.FileExt) ? (a(g), $("input[type = 'file']").val("")) : $.ajaxFileUpload({
					url: _,
					secureuri: !1,
					fileElementId: w,
					data: k,
					dataType: b,
					success: function(c) {
						"text" == b && (c = $.parseJSON(c)), c.success ? v && v(c.content, w) : (h && h(1), a(g, "é”™è¯¯æç¤º"))
					},
					error: function(c) {
						h && h(c), a("æ”¯æŒjpgã€jpegã€gifã€pngæ ¼å¼ï¼Œæ–‡ä»¶å°äºŽ10M", "é”™è¯¯æç¤º")
					}
				})
			},
			unset: function(a) {
				$.each(a, function(c) {
					a[c] = null
				})
			},
			strFormat: function(a, c) {
				a = String(a);
				var _ = Array.prototype.slice.call(arguments, 1),
					v = Object.prototype.toString;
				return _.length ? (_ = 1 == _.length && null !== c && /\[object Array\]|\[object Object\]/.test(v.call(c)) ? c : _, a.replace(/#\{(.+?)\}/g, function(a, c) {
					var h = _[c];
					return "[object Function]" == v.call(h) && (h = h(c)), "undefined" == typeof h ? "" : h
				})) : a
			},
			requester: function(a, c) {
				a.dataType = a.dataType || "json", a.type = a.type || "POST", a.data = a.data || {}, a.data.resubmitToken = globals.token, $.ajax(a).done(function(a) {
					null != a.resubmitToken && "" != a.resubmitToken && (globals.token = a.resubmitToken), c && c(a)
				})
			},
			addHttpPrefix: function(a, c, _) {
				a = a.split("|");
				for (var v = a[0], i = 0, h = a.length; h > i; i++) if (a[i] === c.substring(0, a[i].length)) return;
				_(v + c)
			},
			errorTips: function(a, c, _) {
				_ = _ || 2e3, 1 != a.data("errortipspending") && (a.text(c), a.show(), a.data("errortipspending", 1), window.setTimeout(function() {
					a.hide(), a.data("errortipspending", 0)
				}, _))
			},
			throttle: function(a, c, _, v) {
				_ = void 0 == _ ? null : _, a.tId && clearTimeout(a.tId), a.tId = setTimeout(function() {
					a.apply(_, c)
				}, v ? v : 140)
			},
			inputerListener: function(a, c) {
				var _ = 0;
				if ("onpropertychange" in a[0] && $.browser.ie && parseInt($.browser.version <= 8)) a.bind("propertychange", function(e) {
					"value" == e.originalEvent.propertyName && myresumeCommon.utils.throttle(c, [a.val()], _)
				});
				else if ($.browser.ie && 9 == $.browser.version) {
					var v, h = a.val();
					a.bind("focus", function() {
						v = window.setInterval(function() {
							var v = a.val();
							v != h && (h = v, myresumeCommon.utils.throttle(c, [h], _))
						}, 50)
					}), a.bind("blur", function() {
						window.clearInterval(v), v = void 0
					})
				} else a.bind("input", function() {
					myresumeCommon.utils.throttle(c, [a.val()], _)
				})
			}
		}
	}, $("body").on("click", "a.btn_s", function() {
		$.colorbox.close(), parent.jQuery.colorbox.close()
	}), $(".inline").colorbox({
		inline: !0
	}), $(".errorTips").click(function() {
		a("ä¸Šä¼ é™„ä»¶æ ¼å¼é”™è¯¯!")
	})
}); /*!mycenter/modules/common/js/ajaxfileupload.js*/
;
define("mycenter/modules/common/js/ajaxfileupload", ["require", "exports", "module"], function() {
	jQuery.extend({
		handleError: function(s, a, c, e) {
			s.error && s.error.call(s.context || s, a, c, e), s.global && (s.context ? jQuery(s.context) : jQuery.event).trigger("ajaxError", [a, s, e])
		},
		createUploadIframe: function(a, c) {
			var y = "jUploadFrame" + a,
				j = '<iframe id="' + y + '" name="' + y + '" style="position:absolute; top:-9999px; left:-9999px"';
			return window.ActiveXObject && ("boolean" == typeof c ? j += ' src="javascript:false"' : "string" == typeof c && (j += ' src="' + c + '"')), j += " />", jQuery(j).appendTo(document.body), jQuery("#" + y).get(0)
		},
		createUploadForm: function(a, c, y) {
			var j = "jUploadForm" + a,
				Q = "jUploadFile" + a,
				v = jQuery('<form  action="" method="POST" name="' + j + '" id="' + j + '" enctype="multipart/form-data"></form>');
			if (y) for (var i in y) jQuery('<input type="hidden" name="' + i + '" value="' + y[i] + '" />').appendTo(v);
			var g = jQuery("#" + c),
				b = jQuery(g).clone();
			return jQuery(g).attr("id", Q), jQuery(g).before(b), jQuery(g).appendTo(v), jQuery(v).css("position", "absolute"), jQuery(v).css("top", "-1200px"), jQuery(v).css("left", "-1200px"), jQuery(v).appendTo("body"), v
		},
		ajaxFileUpload: function(s) {
			s = jQuery.extend({}, jQuery.ajaxSettings, s);
			var a = (new Date).getTime(),
				c = jQuery.createUploadForm(a, s.fileElementId, "undefined" == typeof s.data ? !1 : s.data),
				y = (jQuery.createUploadIframe(a, s.secureuri), "jUploadFrame" + a),
				j = "jUploadForm" + a;
			s.global && !jQuery.active++ && jQuery.event.trigger("ajaxStart");
			var Q = !1,
				v = {};
			s.global && jQuery.event.trigger("ajaxSend", [v, s]);
			var g = function(a) {
					var j = document.getElementById(y);
					try {
						j.contentWindow ? (v.responseText = j.contentWindow.document.body ? j.contentWindow.document.body.innerHTML : null, v.responseXML = j.contentWindow.document.XMLDocument ? j.contentWindow.document.XMLDocument : j.contentWindow.document) : j.contentDocument && (v.responseText = j.contentDocument.document.body ? j.contentDocument.document.body.innerHTML : null, v.responseXML = j.contentDocument.document.XMLDocument ? j.contentDocument.document.XMLDocument : j.contentDocument.document)
					} catch (e) {
						jQuery.handleError(s, v, null, e)
					}
					if (v || "timeout" == a) {
						Q = !0;
						var g;
						try {
							if (g = "timeout" != a ? "success" : "error", "error" != g) {
								var b = jQuery.uploadHttpData(v, s.dataType);
								s.success && s.success(b, g), s.global && jQuery.event.trigger("ajaxSuccess", [v, s])
							} else jQuery.handleError(s, v, g)
						} catch (e) {
							g = "error", jQuery.handleError(s, v, g, e)
						}
						s.global && jQuery.event.trigger("ajaxComplete", [v, s]), s.global && !--jQuery.active && jQuery.event.trigger("ajaxStop"), s.complete && s.complete(v, g), jQuery(j).unbind(), setTimeout(function() {
							try {
								jQuery(j).remove(), jQuery(c).remove()
							} catch (e) {
								jQuery.handleError(s, v, null, e)
							}
						}, 100), v = null
					}
				};
			s.timeout > 0 && setTimeout(function() {
				Q || g("timeout")
			}, s.timeout);
			try {
				var c = jQuery("#" + j);
				jQuery(c).attr("action", s.url), jQuery(c).attr("method", "POST"), jQuery(c).attr("target", y), c.encoding ? jQuery(c).attr("encoding", "multipart/form-data") : jQuery(c).attr("enctype", "multipart/form-data"), jQuery(c).submit()
			} catch (e) {
				jQuery.handleError(s, v, null, e)
			}
			return jQuery("#" + y).load(g), {
				abort: function() {}
			}
		},
		uploadHttpData: function(r, a) {
			var c = !a;
			return c = "xml" == a || c ? r.responseXML : r.responseText, "script" == a && jQuery.globalEval(c), "json" == a && (c = jQuery.parseJSON(jQuery(c).text())), "html" == a && jQuery("<div>").html(c).evalScripts(), c
		}
	})
}); /*!mycenter/modules/common/js/libs/json.min.js*/
;
define("mycenter/modules/common/js/libs/json.min", ["require", "exports", "module"], function(require, exports, module) {
	this.JSON || (this.JSON = {}), function() {
		function f(a) {
			return 10 > a ? "0" + a : a
		}
		function quote(a) {
			return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
				var c = meta[a];
				return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + a + '"'
		}
		function str(a, c) {
			var g, d, e, f, y, b = gap,
				i = c[a];
			switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(c, a, i)), typeof i) {
			case "string":
				return quote(i);
			case "number":
				return isFinite(i) ? String(i) : "null";
			case "boolean":
			case "null":
				return String(i);
			case "object":
				if (!i) return "null";
				if (gap += indent, y = [], "[object Array]" === Object.prototype.toString.apply(i)) {
					for (f = i.length, g = 0; f > g; g += 1) y[g] = str(g, i) || "null";
					return e = 0 === y.length ? "[]" : gap ? "[\n" + gap + y.join(",\n" + gap) + "\n" + b + "]" : "[" + y.join(",") + "]", gap = b, e
				}
				if (rep && "object" == typeof rep) for (f = rep.length, g = 0; f > g; g += 1) d = rep[g], "string" == typeof d && (e = str(d, i), e && y.push(quote(d) + (gap ? ": " : ":") + e));
				else for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && y.push(quote(d) + (gap ? ": " : ":") + e));
				return e = 0 === y.length ? "{}" : gap ? "{\n" + gap + y.join(",\n" + gap) + "\n" + b + "}" : "{" + y.join(",") + "}", gap = b, e
			}
		}
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf()
		});
		var cx = /[­؀-؄܏឴឵‌-‏ - ⁠-⁯﻿￰-￿]/g,
			escapable = /[\\\"--­؀-؄܏឴឵‌-‏ - ⁠-⁯﻿￰-￿]/g,
			gap, indent, meta = {
				"\b": "\\b",
				" ": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			rep;
		"function" != typeof JSON.stringify && (JSON.stringify = function(a, c, g) {
			var d;
			if (gap = "", indent = "", "number" == typeof g) for (d = 0; g > d; d += 1) indent += " ";
			else "string" == typeof g && (indent = g);
			if (rep = c, c && "function" != typeof c && ("object" != typeof c || "number" != typeof c.length)) throw new Error("JSON.stringify");
			return str("", {
				"": a
			})
		}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
			function walk(a, c) {
				var g, d, e = a[c];
				if (e && "object" == typeof e) for (g in e) Object.hasOwnProperty.call(e, g) && (d = walk(e, g), void 0 !== d ? e[g] = d : delete e[g]);
				return reviver.call(a, c, e)
			}
			var j;
			if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
				return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
			})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
				"": j
			}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}()
}); /*!mycenter/modules/common/js/jquery-migrate-1.1.1.js*/
;
define("mycenter/modules/common/js/jquery-migrate-1.1.1", ["require", "exports", "module"], function() {
	!
	function(a, c, g) {
		function h(g) {
			y[g] || (y[g] = !0, a.migrateWarnings.push(g), c.console && console.warn && !a.migrateMute && (console.warn("JQMIGRATE: " + g), a.migrateTrace && console.trace && console.trace()))
		}
		function v(c, g, v, y) {
			if (Object.defineProperty) try {
				return void Object.defineProperty(c, g, {
					configurable: !0,
					enumerable: !0,
					get: function() {
						return h(y), v
					},
					set: function(a) {
						h(y), v = a
					}
				})
			} catch (b) {}
			a._definePropertyBroken = !0, c[g] = v
		}
		var y = {};
		a.migrateWarnings = [], !a.migrateMute && c.console && console.log && console.log("JQMIGRATE: Logging is active"), a.migrateTrace === g && (a.migrateTrace = !0), a.migrateReset = function() {
			y = {}, a.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && h("jQuery is not compatible with Quirks Mode");
		var b = a("<input/>", {
			size: 1
		}).attr("size") && a.attrFn,
			w = a.attr,
			j = a.attrHooks.value && a.attrHooks.value.get ||
		function() {
			return null
		}, Q = a.attrHooks.value && a.attrHooks.value.set ||
		function() {
			return g
		}, k = /^(?:input|button)$/i, N = /^[238]$/, C = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, S = /^(?:checked|selected)$/i;
		v(a, "attrFn", b || {}, "jQuery.attrFn is deprecated"), a.attr = function(c, v, y, j) {
			var Q = v.toLowerCase(),
				T = c && c.nodeType;
			return j && (w.length < 4 && h("jQuery.fn.attr( props, pass ) is deprecated"), c && !N.test(T) && (b ? v in b : a.isFunction(a.fn[v]))) ? a(c)[v](y) : ("type" === v && y !== g && k.test(c.nodeName) && c.parentNode && h("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[Q] && C.test(Q) && (a.attrHooks[Q] = {
				get: function(c, h) {
					var v, y = a.prop(c, h);
					return y === !0 || "boolean" != typeof y && (v = c.getAttributeNode(h)) && v.nodeValue !== !1 ? h.toLowerCase() : g
				},
				set: function(c, g, h) {
					var v;
					return g === !1 ? a.removeAttr(c, h) : (v = a.propFix[h] || h, v in c && (c[v] = !0), c.setAttribute(h, h.toLowerCase())), h
				}
			}, S.test(Q) && h("jQuery.fn.attr('" + Q + "') may use property instead of attribute")), w.call(a, c, v, y))
		}, a.attrHooks.value = {
			get: function(a, c) {
				var g = (a.nodeName || "").toLowerCase();
				return "button" === g ? j.apply(this, arguments) : ("input" !== g && "option" !== g && h("jQuery.fn.attr('value') no longer gets properties"), c in a ? a.value : null)
			},
			set: function(a, c) {
				var g = (a.nodeName || "").toLowerCase();
				return "button" === g ? Q.apply(this, arguments) : ("input" !== g && "option" !== g && h("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = c))
			}
		};
		var T, H, M = a.fn.init,
			A = a.parseJSON,
			L = /^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
		a.fn.init = function(c, g, v) {
			var y;
			return c && "string" == typeof c && !a.isPlainObject(g) && (y = L.exec(c)) && y[1] && ("<" !== c.charAt(0) && h("$(html) HTML strings must start with '<' character"), g && g.context && (g = g.context), a.parseHTML) ? M.call(this, a.parseHTML(a.trim(c), g, !0), g, v) : M.apply(this, arguments)
		}, a.fn.init.prototype = a.fn, a.parseJSON = function(a) {
			return a || null === a ? A.apply(this, arguments) : (h("jQuery.parseJSON requires a valid JSON string"), null)
		}, a.uaMatch = function(a) {
			a = a.toLowerCase();
			var c = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: c[1] || "",
				version: c[2] || "0"
			}
		}, a.browser || (T = a.uaMatch(navigator.userAgent), H = {}, T.browser && (H[T.browser] = !0, H.version = T.version), H.chrome ? H.webkit = !0 : H.webkit && (H.safari = !0), a.browser = H), v(a, "browser", a.browser, "jQuery.browser is deprecated"), a.sub = function() {
			function c(a, g) {
				return new c.fn.init(a, g)
			}
			a.extend(!0, c, this), c.superclass = this, c.fn = c.prototype = this(), c.fn.constructor = c, c.sub = this.sub, c.fn.init = function(h, v) {
				return v && v instanceof a && !(v instanceof c) && (v = c(v)), a.fn.init.call(this, h, v, g)
			}, c.fn.init.prototype = c.fn;
			var g = c(document);
			return h("jQuery.sub() is deprecated"), c
		}, a.ajaxSetup({
			converters: {
				"text json": a.parseJSON
			}
		});
		var O = a.fn.data;
		a.fn.data = function(c) {
			var v, y, b = this[0];
			return !b || "events" !== c || 1 !== arguments.length || (v = a.data(b, c), y = a._data(b, c), v !== g && v !== y || y === g) ? O.apply(this, arguments) : (h("Use of jQuery.fn.data('events') is deprecated"), y)
		};
		var E = /\/(java|ecma)script/i,
			F = a.fn.andSelf || a.fn.addBack;
		a.fn.andSelf = function() {
			return h("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), F.apply(this, arguments)
		}, a.clean || (a.clean = function(c, g, v, y) {
			g = g || document, g = !g.nodeType && g[0] || g, g = g.ownerDocument || g, h("jQuery.clean() is deprecated");
			var i, b, w, j, Q = [];
			if (a.merge(Q, a.buildFragment(c, g).childNodes), v) for (w = function(a) {
				return !a.type || E.test(a.type) ? y ? y.push(a.parentNode ? a.parentNode.removeChild(a) : a) : v.appendChild(a) : void 0
			}, i = 0; null != (b = Q[i]); i++) a.nodeName(b, "script") && w(b) || (v.appendChild(b), "undefined" != typeof b.getElementsByTagName && (j = a.grep(a.merge([], b.getElementsByTagName("script")), w), Q.splice.apply(Q, [i + 1, 0].concat(j)), i += j.length));
			return Q
		});
		var J = a.event.add,
			$ = a.event.remove,
			B = a.event.trigger,
			_ = a.fn.toggle,
			P = a.fn.live,
			R = a.fn.die,
			W = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			z = new RegExp("\\b(?:" + W + ")\\b"),
			G = /(?:^|\s)hover(\.\S+|)\b/,
			I = function(c) {
				return "string" != typeof c || a.event.special.hover ? c : (G.test(c) && h("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), c && c.replace(G, "mouseenter$1 mouseleave$1"))
			};
		a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && v(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, c, g, v, y) {
			a !== document && z.test(c) && h("AJAX events should be attached to document: " + c), J.call(this, a, I(c || ""), g, v, y)
		}, a.event.remove = function(a, c, g, h, v) {
			$.call(this, a, I(c) || "", g, h, v)
		}, a.fn.error = function() {
			var a = Array.prototype.slice.call(arguments, 0);
			return h("jQuery.fn.error() is deprecated"), a.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this)
		}, a.fn.toggle = function(c, g) {
			if (!a.isFunction(c) || !a.isFunction(g)) return _.apply(this, arguments);
			h("jQuery.fn.toggle(handler, handler...) is deprecated");
			var v = arguments,
				y = c.guid || a.guid++,
				i = 0,
				b = function(g) {
					var h = (a._data(this, "lastToggle" + c.guid) || 0) % i;
					return a._data(this, "lastToggle" + c.guid, h + 1), g.preventDefault(), v[h].apply(this, arguments) || !1
				};
			for (b.guid = y; i < v.length;) v[i++].guid = y;
			return this.click(b)
		}, a.fn.live = function(c, g, v) {
			return h("jQuery.fn.live() is deprecated"), P ? P.apply(this, arguments) : (a(this.context).on(c, this.selector, g, v), this)
		}, a.fn.die = function(c, g) {
			return h("jQuery.fn.die() is deprecated"), R ? R.apply(this, arguments) : (a(this.context).off(c, this.selector || "**", g), this)
		}, a.event.trigger = function(a, c, g, v) {
			return g || z.test(a) || h("Global events are undocumented and deprecated"), B.call(this, a, c, g || document, v)
		}, a.each(W.split("|"), function(c, g) {
			a.event.special[g] = {
				setup: function() {
					var c = this;
					return c !== document && (a.event.add(document, g + "." + a.guid, function() {
						a.event.trigger(g, null, c, !0)
					}), a._data(this, g, a.guid++)), !1
				},
				teardown: function() {
					return this !== document && a.event.remove(document, g + "." + a._data(this, g)), !1
				}
			}
		})
	}(jQuery, window)
}); /*!mycenter/modules/common/js/jquery-ui-1.8.custom.min.js*/
;
!
function(e) {
	"function" == typeof define && define.amd ? define("mycenter/modules/common/js/jquery-ui-1.8.custom.min", ["jquery"], e) : e(jQuery)
}(function(e) {
	function t(t, s) {
		var n, a, o, r = t.nodeName.toLowerCase();
		return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !! o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
	}
	function i(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.11.1",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		scrollParent: function(t) {
			var i = this.css("position"),
				s = "absolute" === i,
				n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				a = this.parents().filter(function() {
					var t = e(this);
					return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
				}).eq(0);
			return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
		},
		uniqueId: function() {
			var e = 0;
			return function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++e)
				})
			}
		}(),
		removeUniqueId: function() {
			return this.each(function() {
				/^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
			return function(i) {
				return !!e.data(i, t)
			}
		}) : function(t, i, s) {
			return !!e.data(t, s[3])
		},
		focusable: function(i) {
			return t(i, !isNaN(e.attr(i, "tabindex")))
		},
		tabbable: function(i) {
			var s = e.attr(i, "tabindex"),
				n = isNaN(s);
			return (n || s >= 0) && t(i, !n)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
		function s(t, i, s, a) {
			return e.each(n, function() {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			a = i.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + i] = function(t) {
			return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
				e(this).css(a, s(this, t) + "px")
			})
		}, e.fn["outer" + i] = function(t, n) {
			return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
				e(this).css(a, s(this, t, !0, n) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function(e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
		return function(i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
		focus: function(t) {
			return function(i, s) {
				return "number" == typeof i ? this.each(function() {
					var t = this;
					setTimeout(function() {
						e(t).focus(), s && s.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		disableSelection: function() {
			var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function() {
				return this.bind(e + ".ui-disableSelection", function(e) {
					e.preventDefault()
				})
			}
		}(),
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function(t) {
			if (void 0 !== t) return this.css("zIndex", t);
			if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
				if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
				n = n.parent()
			}
			return 0
		}
	}), e.ui.plugin = {
		add: function(t, i, s) {
			var n, a = e.ui[t].prototype;
			for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
		},
		call: function(e, t, i, s) {
			var n, a = e.plugins[t];
			if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
		}
	};
	var s = 0,
		n = Array.prototype.slice;
	e.cleanData = function(t) {
		return function(i) {
			var s, n, a;
			for (a = 0; null != (n = i[a]); a++) try {
				s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
			} catch (o) {}
			t(i)
		}
	}(e.cleanData), e.widget = function(t, i, s) {
		var n, a, o, r, h = {},
			l = t.split(".")[0];
		return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
			return !!e.data(t, n)
		}, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) {
			return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
		}, e.extend(o, a, {
			version: s.version,
			_proto: e.extend({}, s),
			_childConstructors: []
		}), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
			return e.isFunction(s) ? void(h[t] = function() {
				var e = function() {
						return i.prototype[t].apply(this, arguments)
					},
					n = function(e) {
						return i.prototype[t].apply(this, e)
					};
				return function() {
					var t, i = this._super,
						a = this._superApply;
					return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
				}
			}()) : void(h[t] = s)
		}), o.prototype = e.widget.extend(r, {
			widgetEventPrefix: a ? r.widgetEventPrefix || t : t
		}, h, {
			constructor: o,
			namespace: l,
			widgetName: t,
			widgetFullName: n
		}), a ? (e.each(a._childConstructors, function(t, i) {
			var s = i.prototype;
			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
	}, e.widget.extend = function(t) {
		for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
		return t
	}, e.widget.bridge = function(t, i) {
		var s = i.prototype.widgetFullName || t;
		e.fn[t] = function(a) {
			var o = "string" == typeof a,
				r = n.call(arguments, 1),
				h = this;
			return a = !o && r.length ? e.widget.extend.apply(null, [a].concat(r)) : a, this.each(o ?
			function() {
				var i, n = e.data(this, s);
				return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
			} : function() {
				var t = e.data(this, s);
				t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
			}), h
		}
	}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(t, i) {
			i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(e) {
					e.target === i && this.destroy()
				}
			}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function() {
			return this.element
		},
		option: function(t, i) {
			var s, n, a, o = t;
			if (0 === arguments.length) return e.widget.extend({}, this.options);
			if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
				for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
				if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
				n[t] = i
			} else {
				if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
				o[t] = i
			}
			return this._setOptions(o), this
		},
		_setOptions: function(e) {
			var t;
			for (t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function(e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !! t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
		},
		enable: function() {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function() {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function(t, i, s) {
			var n, a = this;
			"boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
				function r() {
					return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
				}
				"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
				var h = s.match(/^([\w:-]*)\s*(.*)$/),
					l = h[1] + a.eventNamespace,
					u = h[2];
				u ? n.delegate(u, l, r) : i.bind(l, r)
			})
		},
		_off: function(e, t) {
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
		},
		_delay: function(e, t) {
			function i() {
				return ("string" == typeof e ? s[e] : e).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function(t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function(t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function(t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(t, i, s) {
			var n, a, o = this.options[t];
			if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(t, i) {
		e.Widget.prototype["_" + t] = function(s, n, a) {
			"string" == typeof n && (n = {
				effect: n
			});
			var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
				e(this)[t](), a && a.call(s[0]), i()
			})
		}
	}), e.widget;
	var a = !1;
	e(document).mouseup(function() {
		a = !1
	}), e.widget("ui.mouse", {
		version: "1.11.1",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function(e) {
				return t._mouseDown(e)
			}).bind("click." + this.widgetName, function(i) {
				return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(t) {
			if (!a) {
				this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
				var i = this,
					s = 1 === t.which,
					n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
				return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					i.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
					return i._mouseMove(e)
				}, this._mouseUpDelegate = function(e) {
					return i._mouseUp(e)
				}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
			}
		},
		_mouseMove: function(t) {
			return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
		},
		_mouseUp: function(t) {
			return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
		},
		_mouseDistanceMet: function(e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return !0
		}
	}), e.widget("ui.draggable", e.ui.mouse, {
		version: "1.11.1",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
		},
		_setOption: function(e, t) {
			this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
		},
		_destroy: function() {
			return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
		},
		_mouseCapture: function(t) {
			var i = this.document[0],
				s = this.options;
			try {
				i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
			} catch (n) {}
			return this.helper || s.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(s.iframeFix === !0 ? "iframe" : s.iframeFix).each(function() {
				e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1e3
				}).css(e(this).offset()).appendTo("body")
			}), !0) : !1)
		},
		_mouseStart: function(t) {
			var i = this.options;
			return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, this.offset.scroll = !1, e.extend(this.offset, {
				click: {
					left: t.pageX - this.offset.left,
					top: t.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
		},
		_mouseDrag: function(t, i) {
			if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
				this.position = s.position
			}
			return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
		},
		_mouseStop: function(t) {
			var i = this,
				s = !1;
			return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				i._trigger("stop", t) !== !1 && i._clear()
			}) : this._trigger("stop", t) !== !1 && this._clear(), !1
		},
		_mouseUp: function(t) {
			return e("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this)
			}), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function(t) {
			return this.options.handle ? !! e(t.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_setHandleClassName: function() {
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
		},
		_removeHandleClassName: function() {
			this.handleElement.removeClass("ui-draggable-handle")
		},
		_createHelper: function(t) {
			var i = this.options,
				s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
		},
		_adjustOffsetFromHelper: function(t) {
			"string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_isRootNode: function(e) {
			return /(html|body)/i.test(e.tagName) || e === this.document[0]
		},
		_getParentOffset: function() {
			var t = this.offsetParent.offset(),
				i = this.document[0];
			return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
				top: 0,
				left: 0
			}), {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var e = this.element.position(),
				t = this._isRootNode(this.scrollParent[0]);
			return {
				top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
				left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var t, i, s, n = this.options,
				a = this.document[0];
			return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], void(s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
		},
		_convertPositionTo: function(e, t) {
			t || (t = this.position);
			var i = "absolute" === e ? 1 : -1,
				s = this._isRootNode(this.scrollParent[0]);
			return {
				top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
				left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
			}
		},
		_generatePosition: function(e, t) {
			var i, s, n, a, o = this.options,
				r = this._isRootNode(this.scrollParent[0]),
				h = e.pageX,
				l = e.pageY;
			return r && this.offset.scroll || (this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			}), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
				top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
				left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
		},
		_trigger: function(t, i, s) {
			return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), e.ui.plugin.add("draggable", "connectToSortable", {
		start: function(t, i, s) {
			var n = s.options,
				a = e.extend({}, i, {
					item: s.element
				});
			s.sortables = [], e(n.connectToSortable).each(function() {
				var i = e(this).sortable("instance");
				i && !i.options.disabled && (s.sortables.push({
					instance: i,
					shouldRevert: i.options.revert
				}), i.refreshPositions(), i._trigger("activate", t, a))
			})
		},
		stop: function(t, i, s) {
			var n = e.extend({}, i, {
				item: s.element
			});
			e.each(s.sortables, function() {
				this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
					top: "auto",
					left: "auto"
				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
			})
		},
		drag: function(t, i, s) {
			var n = this;
			e.each(s.sortables, function() {
				var a = !1,
					o = this;
				this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function() {
					return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
				})), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
					return i.helper[0]
				}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
			})
		}
	}), e.ui.plugin.add("draggable", "cursor", {
		start: function(t, i, s) {
			var n = e("body"),
				a = s.options;
			n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
		},
		stop: function(t, i, s) {
			var n = s.options;
			n._cursor && e("body").css("cursor", n._cursor)
		}
	}), e.ui.plugin.add("draggable", "opacity", {
		start: function(t, i, s) {
			var n = e(i.helper),
				a = s.options;
			n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
		},
		stop: function(t, i, s) {
			var n = s.options;
			n._opacity && e(i.helper).css("opacity", n._opacity)
		}
	}), e.ui.plugin.add("draggable", "scroll", {
		start: function(e, t, i) {
			i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
		},
		drag: function(t, i, s) {
			var n = s.options,
				a = !1,
				o = s.scrollParentNotHidden[0],
				r = s.document[0];
			o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
		}
	}), e.ui.plugin.add("draggable", "snap", {
		start: function(t, i, s) {
			var n = s.options;
			s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
				var t = e(this),
					i = t.offset();
				this !== s.element[0] && s.snapElements.push({
					item: this,
					width: t.outerWidth(),
					height: t.outerHeight(),
					top: i.top,
					left: i.left
				})
			})
		},
		drag: function(t, i, s) {
			var n, a, o, r, h, l, u, d, c, p, f = s.options,
				m = f.snapTolerance,
				g = i.offset.left,
				v = g + s.helperProportions.width,
				_ = i.offset.top,
				b = _ + s.helperProportions.height;
			for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left, l = h + s.snapElements[c].width, u = s.snapElements[c].top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || _ > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
				snapItem: s.snapElements[c].item
			})), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - _), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
				top: u - s.helperProportions.height,
				left: 0
			}).top - s.margins.top), a && (i.position.top = s._convertPositionTo("relative", {
				top: d,
				left: 0
			}).top - s.margins.top), o && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: h - s.helperProportions.width
			}).left - s.margins.left), r && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: l
			}).left - s.margins.left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - _), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
				top: u,
				left: 0
			}).top - s.margins.top), a && (i.position.top = s._convertPositionTo("relative", {
				top: d - s.helperProportions.height,
				left: 0
			}).top - s.margins.top), o && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: h
			}).left - s.margins.left), r && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: l - s.helperProportions.width
			}).left - s.margins.left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
				snapItem: s.snapElements[c].item
			})), s.snapElements[c].snapping = n || a || o || r || p)
		}
	}), e.ui.plugin.add("draggable", "stack", {
		start: function(t, i, s) {
			var n, a = s.options,
				o = e.makeArray(e(a.stack)).sort(function(t, i) {
					return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
				});
			o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) {
				e(this).css("zIndex", n + t)
			}), this.css("zIndex", n + o.length))
		}
	}), e.ui.plugin.add("draggable", "zIndex", {
		start: function(t, i, s) {
			var n = e(i.helper),
				a = s.options;
			n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
		},
		stop: function(t, i, s) {
			var n = s.options;
			n._zIndex && e(i.helper).css("zIndex", n._zIndex)
		}
	}), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
		version: "1.11.1",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_num: function(e) {
			return parseInt(e, 10) || 0
		},
		_isNumber: function(e) {
			return !isNaN(parseInt(e, 10))
		},
		_hasScroll: function(t, i) {
			if ("hidden" === e(t).css("overflow")) return !1;
			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
				n = !1;
			return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
		},
		_create: function() {
			var t, i, s, n, a, o = this,
				r = this.options;
			if (this.element.addClass("ui-resizable"), e.extend(this, {
				_aspectRatio: !! r.aspectRatio,
				aspectRatio: r.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
			}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
				marginLeft: this.originalElement.css("marginLeft"),
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom")
			}), this.originalElement.css({
				marginLeft: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0
			}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css({
				margin: this.originalElement.css("margin")
			}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			} : "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
				zIndex: r.zIndex
			}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
			this._renderAxis = function(t) {
				var i, s, n, a;
				t = t || this.element;
				for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
			}, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
				o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
			}), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
				r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
			}).mouseleave(function() {
				r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var t, i = function(t) {
					e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
				};
			return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
				position: t.css("position"),
				width: t.outerWidth(),
				height: t.outerHeight(),
				top: t.css("top"),
				left: t.css("left")
			}).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
		},
		_mouseCapture: function(t) {
			var i, s, n = !1;
			for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
			return !this.options.disabled && n
		},
		_mouseStart: function(t) {
			var i, s, n, a = this.options,
				o = this.element;
			return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: i,
				top: s
			}, this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: o.width(),
				height: o.height()
			}, this.originalSize = this._helper ? {
				width: o.outerWidth(),
				height: o.outerHeight()
			} : {
				width: o.width(),
				height: o.height()
			}, this.sizeDiff = {
				width: o.outerWidth() - o.width(),
				height: o.outerHeight() - o.height()
			}, this.originalPosition = {
				left: i,
				top: s
			}, this.originalMousePosition = {
				left: t.pageX,
				top: t.pageY
			}, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
		},
		_mouseDrag: function(t) {
			var i, s, n = this.originalMousePosition,
				a = this.axis,
				o = t.pageX - n.left || 0,
				r = t.pageY - n.top || 0,
				h = this._change[a];
			return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
		},
		_mouseStop: function(t) {
			this.resizing = !1;
			var i, s, n, a, o, r, h, l = this.options,
				u = this;
			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
				width: u.helper.width() - a,
				height: u.helper.height() - n
			}, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
				top: h,
				left: r
			})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
		},
		_updatePrevProperties: function() {
			this.prevPosition = {
				top: this.position.top,
				left: this.position.left
			}, this.prevSize = {
				width: this.size.width,
				height: this.size.height
			}
		},
		_applyChanges: function() {
			var e = {};
			return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
		},
		_updateVirtualBoundaries: function(e) {
			var t, i, s, n, a, o = this.options;
			a = {
				minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
				maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
				minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
				maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
			}, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
		},
		_updateCache: function(e) {
			this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
		},
		_updateRatio: function(e) {
			var t = this.position,
				i = this.size,
				s = this.axis;
			return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
		},
		_respectSize: function(e) {
			var t = this._vBoundaries,
				i = this.axis,
				s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
				n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
				a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
				o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
				r = this.originalPosition.left + this.originalSize.width,
				h = this.position.top + this.size.height,
				l = /sw|nw|w/.test(i),
				u = /nw|ne|n/.test(i);
			return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
		},
		_getPaddingPlusBorderDimensions: function(e) {
			for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
			return {
				height: i[0] + i[2],
				width: i[1] + i[3]
			}
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length) for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
				height: i.height() - this.outerDimensions.height || 0,
				width: i.width() - this.outerDimensions.width || 0
			})
		},
		_renderProxy: function() {
			var t = this.element,
				i = this.options;
			this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++i.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function(e, t) {
				return {
					width: this.originalSize.width + t
				}
			},
			w: function(e, t) {
				var i = this.originalSize,
					s = this.originalPosition;
				return {
					left: s.left + t,
					width: i.width - t
				}
			},
			n: function(e, t, i) {
				var s = this.originalSize,
					n = this.originalPosition;
				return {
					top: n.top + i,
					height: s.height - i
				}
			},
			s: function(e, t, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function(t, i, s) {
				return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
			},
			sw: function(t, i, s) {
				return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
			},
			ne: function(t, i, s) {
				return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
			},
			nw: function(t, i, s) {
				return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
			}
		},
		_propagate: function(t, i) {
			e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), e.ui.plugin.add("resizable", "animate", {
		stop: function(t) {
			var i = e(this).resizable("instance"),
				s = i.options,
				n = i._proportionallyResizeElements,
				a = n.length && /textarea/i.test(n[0].nodeName),
				o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
				r = a ? 0 : i.sizeDiff.width,
				h = {
					width: i.size.width - r,
					height: i.size.height - o
				},
				l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
				u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(e.extend(h, u && l ? {
				top: u,
				left: l
			} : {}), {
				duration: s.animateDuration,
				easing: s.animateEasing,
				step: function() {
					var s = {
						width: parseInt(i.element.css("width"), 10),
						height: parseInt(i.element.css("height"), 10),
						top: parseInt(i.element.css("top"), 10),
						left: parseInt(i.element.css("left"), 10)
					};
					n && n.length && e(n[0]).css({
						width: s.width,
						height: s.height
					}), i._updateCache(s), i._propagate("resize", t)
				}
			})
		}
	}), e.ui.plugin.add("resizable", "containment", {
		start: function() {
			var t, i, s, n, a, o, r, h = e(this).resizable("instance"),
				l = h.options,
				u = h.element,
				d = l.containment,
				c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
			c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
				left: 0,
				top: 0
			}, h.containerPosition = {
				left: 0,
				top: 0
			}, h.parentData = {
				element: e(document),
				left: 0,
				top: 0,
				width: e(document).width(),
				height: e(document).height() || document.body.parentNode.scrollHeight
			}) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, s) {
				i[e] = h._num(t.css("padding" + s))
			}), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
				height: t.innerHeight() - i[3],
				width: t.innerWidth() - i[1]
			}, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
				element: c,
				left: s.left,
				top: s.top,
				width: o,
				height: r
			}))
		},
		resize: function(t) {
			var i, s, n, a, o = e(this).resizable("instance"),
				r = o.options,
				h = o.containerOffset,
				l = o.position,
				u = o._aspectRatio || t.shiftKey,
				d = {
					top: 0,
					left: 0
				},
				c = o.containerElement,
				p = !0;
			c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
		},
		stop: function() {
			var t = e(this).resizable("instance"),
				i = t.options,
				s = t.containerOffset,
				n = t.containerPosition,
				a = t.containerElement,
				o = e(t.helper),
				r = o.offset(),
				h = o.outerWidth() - t.sizeDiff.width,
				l = o.outerHeight() - t.sizeDiff.height;
			t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			}), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			})
		}
	}), e.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var t = e(this).resizable("instance"),
				i = t.options,
				s = function(t) {
					e(t).each(function() {
						var t = e(this);
						t.data("ui-resizable-alsoresize", {
							width: parseInt(t.width(), 10),
							height: parseInt(t.height(), 10),
							left: parseInt(t.css("left"), 10),
							top: parseInt(t.css("top"), 10)
						})
					})
				};
			"object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
				s(e)
			})
		},
		resize: function(t, i) {
			var s = e(this).resizable("instance"),
				n = s.options,
				a = s.originalSize,
				o = s.originalPosition,
				r = {
					height: s.size.height - a.height || 0,
					width: s.size.width - a.width || 0,
					top: s.position.top - o.top || 0,
					left: s.position.left - o.left || 0
				},
				h = function(t, s) {
					e(t).each(function() {
						var t = e(this),
							n = e(this).data("ui-resizable-alsoresize"),
							a = {},
							o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						e.each(o, function(e, t) {
							var i = (n[t] || 0) + (r[t] || 0);
							i && i >= 0 && (a[t] = i || null)
						}), t.css(a)
					})
				};
			"object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function(e, t) {
				h(e, t)
			})
		},
		stop: function() {
			e(this).removeData("resizable-alsoresize")
		}
	}), e.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var t = e(this).resizable("instance"),
				i = t.options,
				s = t.size;
			t.ghost = t.originalElement.clone(), t.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: s.height,
				width: s.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
		},
		resize: function() {
			var t = e(this).resizable("instance");
			t.ghost && t.ghost.css({
				position: "relative",
				height: t.size.height,
				width: t.size.width
			})
		},
		stop: function() {
			var t = e(this).resizable("instance");
			t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
		}
	}), e.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var t, i = e(this).resizable("instance"),
				s = i.options,
				n = i.size,
				a = i.originalSize,
				o = i.originalPosition,
				r = i.axis,
				h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
				l = h[0] || 1,
				u = h[1] || 1,
				d = Math.round((n.width - a.width) / l) * l,
				c = Math.round((n.height - a.height) / u) * u,
				p = a.width + d,
				f = a.height + c,
				m = s.maxWidth && p > s.maxWidth,
				g = s.maxHeight && f > s.maxHeight,
				v = s.minWidth && s.minWidth > p,
				_ = s.minHeight && s.minHeight > f;
			s.grid = h, v && (p += l), _ && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = u - t.height, i.size.width = p, i.position.left = o.left + a.width - p))
		}
	}), e.ui.resizable, e.widget("ui.slider", e.ui.mouse, {
		version: "1.11.1",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function() {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
		},
		_refresh: function() {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function() {
			var t, i, s = this.options,
				n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
				o = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
			this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
				e(this).data("ui-slider-handle-index", t)
			})
		},
		_createRange: function() {
			var t = this.options,
				i = "";
			t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
				left: "",
				bottom: ""
			}) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function() {
			this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
		},
		_destroy: function() {
			this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
		},
		_mouseCapture: function(t) {
			var i, s, n, a, o, r, h, l, u = this,
				d = this.options;
			return d.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: t.pageX,
				y: t.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
				var i = Math.abs(s - u.values(t));
				(n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
			}), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
				left: 0,
				top: 0
			} : {
				left: t.pageX - h.left - a.width() / 2,
				top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
		},
		_mouseStart: function() {
			return !0
		},
		_mouseDrag: function(e) {
			var t = {
				x: e.pageX,
				y: e.pageY
			},
				i = this._normValueFromMouse(t);
			return this._slide(e, this._handleIndex, i), !1
		},
		_mouseStop: function(e) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function() {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(e) {
			var t, i, s, n, a;
			return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
		},
		_start: function(e, t) {
			var i = {
				handle: this.handles[t],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
		},
		_slide: function(e, t, i) {
			var s, n, a;
			this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
				handle: this.handles[t],
				value: i,
				values: n
			}), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
				handle: this.handles[t],
				value: i
			}), a !== !1 && this.value(i))
		},
		_stop: function(e, t) {
			var i = {
				handle: this.handles[t],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
		},
		_change: function(e, t) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[t],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
			}
		},
		value: function(e) {
			return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
		},
		values: function(t, i) {
			var s, n, a;
			if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
			if (!arguments.length) return this._values();
			if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
			for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
			this._refreshValue()
		},
		_setOption: function(t, i) {
			var s, n = 0;
			switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !! i), this._super(t, i), t) {
			case "orientation":
				this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
				break;
			case "value":
				this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
				break;
			case "values":
				for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
				this._animateOff = !1;
				break;
			case "min":
			case "max":
				this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
				break;
			case "range":
				this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_value: function() {
			var e = this.options.value;
			return e = this._trimAlignValue(e)
		},
		_values: function(e) {
			var t, i, s;
			if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
			if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue: function(e) {
			if (this._valueMin() >= e) return this._valueMin();
			if (e >= this._valueMax()) return this._valueMax();
			var t = this.options.step > 0 ? this.options.step : 1,
				i = (e - this._valueMin()) % t,
				s = e - i;
			return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.options.max
		},
		_refreshValue: function() {
			var t, i, s, n, a, o = this.options.range,
				r = this.options,
				h = this,
				l = this._animateOff ? !1 : r.animate,
				u = {};
			this.options.values && this.options.values.length ? this.handles.each(function(s) {
				i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					width: i - t + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					height: i - t + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), t = i
			}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
				width: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
				height: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}))
		},
		_handleEvents: {
			keydown: function(t) {
				var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
				switch (t.keyCode) {
				case e.ui.keyCode.HOME:
				case e.ui.keyCode.END:
				case e.ui.keyCode.PAGE_UP:
				case e.ui.keyCode.PAGE_DOWN:
				case e.ui.keyCode.UP:
				case e.ui.keyCode.RIGHT:
				case e.ui.keyCode.DOWN:
				case e.ui.keyCode.LEFT:
					if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
				}
				switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
				case e.ui.keyCode.HOME:
					n = this._valueMin();
					break;
				case e.ui.keyCode.END:
					n = this._valueMax();
					break;
				case e.ui.keyCode.PAGE_UP:
					n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
					break;
				case e.ui.keyCode.PAGE_DOWN:
					n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
					break;
				case e.ui.keyCode.UP:
				case e.ui.keyCode.RIGHT:
					if (s === this._valueMax()) return;
					n = this._trimAlignValue(s + a);
					break;
				case e.ui.keyCode.DOWN:
				case e.ui.keyCode.LEFT:
					if (s === this._valueMin()) return;
					n = this._trimAlignValue(s - a)
				}
				this._slide(t, o, n)
			},
			keyup: function(t) {
				var i = e(t.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
			}
		}
	})
}); /*!mycenter/modules/common/js/jquery.cropzoom.js*/
;
define("mycenter/modules/common/js/jquery.cropzoom", ["require", "exports", "module"], function() {
	!
	function(a) {
		function c() {
			var a = N.image.source.split(".");
			return a[a.length - 1]
		}
		function h() {
			Y("image").scaleX = parseFloat(Y("selector").w / Y("image").w), Y("image").scaleY = parseFloat(Y("selector").h / Y("image").h)
		}
		function g() {
			var a = Y("image").scaleX,
				c = Y("image").scaleY;
			c > a ? (Y("image").h = Y("selector").h + 2, Y("image").w = Math.round(Y("image").w * c), N.image.minZoom = Y("selector").h / N.image.height * 100) : (Y("image").h = Math.round(Y("image").h * a), Y("image").w = Y("selector").w + 2, N.image.minZoom = Y("selector").w / N.image.width * 100), N.image.maxZoom = 3 * N.image.minZoom
		}
		function w() {
			var c = "",
				h = "";
			R() ? (c = "rotate(" + Y("image").rotation + "," + (Y("image").posX + Y("image").w / 2) + "," + (Y("image").posY + Y("image").h / 2) + ")", h = " translate(" + Y("image").posX + "," + Y("image").posY + ")", c += h, a("#img_to_crop").attr2("transform", c)) : (c = Y("image").rotation, a("#img_to_crop").css({
				rotation: c,
				top: Y("image").posY,
				left: Y("image").posX
			}))
		}
		function v() {
			var c = a("<div />").css({
				position: "absolute",
				"background-color": "#FFF",
				"z-index": 3,
				opacity: .6,
				width: 31,
				height: F.height() / 2,
				top: 5,
				left: 5
			}).mouseover(function() {
				a(this).css("opacity", 1)
			}).mouseout(function() {
				a(this).css("opacity", .6)
			}),
				h = a("<div />").css({
					color: "#000",
					font: "700 11px Arial",
					margin: "auto",
					width: 10
				}),
				g = a("<div />").css({
					color: "#000",
					font: "700 11px Arial",
					margin: "auto",
					width: 21
				});
			h.html("0"), g.html("360");
			var v = a("<div />");
			v.slider({
				orientation: "horizontal",
				value: 360,
				min: 0,
				max: 360,
				step: N.rotationSteps > 360 || N.rotationSteps < 0 ? 1 : N.rotationSteps,
				slide: function(c, ui) {
					Y("image").rotation = Math.abs(360 - ui.value), w(), null != N.onRotate && N.onRotate(a("#img_to_crop"), Y("image").rotation)
				}
			}), c.append(h), c.append(v), c.append(g), v.css({
				margin: " 7px auto",
				height: F.height() / 2 - 60,
				position: "relative",
				width: 7
			}), F.append(c)
		}
		function b() {
			var c = F.next("div.isExist");
			c.length > 0 && c.remove();
			var g = a("<div class='isExist' />").css({
				"background-color": "#fff",
				opacity: 1,
				height: F.height() / 2 - 168,
				width: "285px",
				margin: "20px auto 0 auto"
			}),
				v = a("<div />").css({
					color: "#000",
					font: "700 14px Arial",
					"margin-left": "10px",
					"text-align": "left",
					"float": "left"
				}).html("<img class='right' src='../../images/myresume/mr_headright.png' />"),
				b = a("<div />").css({
					color: "#000",
					font: "700 14px Arial",
					"float": "left",
					"margin-right": "10px",
					"text-align": "right"
				}).html("<img class='left' src='../../images/myresume/mr_headleft.png' />"),
				A = a("<div />");
			A.slider({
				orientation: "horizontal ",
				value: y(),
				min: N.image.minZoom,
				max: N.image.maxZoom,
				step: N.zoomSteps > N.image.maxZoom || N.zoomSteps < 0 ? 1 : N.zoomSteps,
				slide: function(c, ui) {
					var g = N.image.width * Math.abs(ui.value) / 100,
						v = N.image.height * Math.abs(ui.value) / 100,
						b = Y("selector").w + 2,
						y = Y("selector").h + 2;
					b > g && (g = b), y > v && (v = y), R() ? (a("#img_to_crop").attr2("width", g + "px"), a("#img_to_crop").attr2("height", v + "px")) : a("#img_to_crop").css({
						width: g + "px",
						height: v + "px"
					}), Y("image").w = g, Y("image").h = v, h(), Y("image").posX = N.width / 2 - Y("image").w / 2 + 1, Y("image").posY = N.height / 2 - Y("image").h / 2 + 1, w(), null != N.onZoom && N.onZoom(a("#img_to_crop"), Y("image"))
				}
			}), g.append(b), g.append(A), g.append(v), A.css({
				margin: " 7px",
				"float": "left",
				height: "5px",
				width: 200,
				position: "relative"
			}), F.after(g)
		}
		function y() {
			var a = 0;
			return a = Y("image").w > Y("image").h ? 100 * Y("image").w / N.image.width : 100 * Y("image").h / N.image.height
		}
		function A() {
			N.selector.centered && (Y("selector").y = N.height / 2 - Y("selector").h / 2, Y("selector").x = N.width / 2 - Y("selector").w / 2);
			var c = a("<div />").attr2("id", "selector").css({
				width: Y("selector").w,
				height: Y("selector").h,
				top: Y("selector").y + "px",
				left: Y("selector").x + "px",
				border: "1px solid " + N.selector.borderColor,
				position: "absolute",
				cursor: "move",
				"user-select": "none",
				"z-index": "1"
			}).mouseover(function() {
				a(this).css({
					border: "1px solid " + N.selector.borderColorHover
				})
			}).mouseout(function() {
				a(this).css({
					border: "1px solid " + N.selector.borderColor
				})
			});
			S(c), F.append(c)
		}
		function S(c) {
			var h = null,
				g = !1;
			h = c.find("#infoSelector").length > 0 ? c.find("#infoSelector") : a("<div />").attr2("id", "infoSelector").css({
				position: "absolute",
				top: 0,
				left: 0,
				"font-size": N.selector.infoFontSize + "px",
				"font-family": "Arial",
				color: N.selector.infoFontColor,
				width: "100%"
			}), N.selector.showDimetionsOnDrag && (h.html("X:" + Y("selector").x + "px - Y:" + Y("selector").y + "px"), g = !0), N.selector.showPositionsOnDrag && h.html(g ? h.html() + " | W:" + Y("selector").w + "px - H:" + Y("selector").h + "px" : ""), c.append(h)
		}
		function z() {
			function c(a) {
				a.offsetX = void 0 != a.offsetX ? a.offsetX : a.originalEvent.layerX, a.offsetY = void 0 != a.offsetY ? a.offsetY : a.originalEvent.layerY
			}
			function h(a) {
				c(a);
				var h = a.offsetX - y,
					b = a.offsetY - A,
					S = g + b,
					z = v + h,
					_ = (N.width - Y("selector").w) / 2,
					k = (N.height - Y("selector").h) / 2;
				S = k > S ? S : k, z = _ > z ? z : _;
				var X = Y("image").w + _ - N.width;
				z = -X + 2 > z ? -X + 2 : z;
				var C = Y("image").h + k - N.height;
				S = -C + 2 > S ? -C + 2 : S, Y("image").posY = S, Y("image").posX = z, w()
			}
			var g, v, b = a("<div />").attr2("id", "fakelayer").css({
				position: "absolute",
				"z-index": 1e3,
				visibility: "invisible",
				width: "360px",
				height: "360px",
				top: "74px",
				left: "30px",
				cursor: "move",
				background: "transparent",
				zoom: "1"
			}),
				y = 0,
				A = 0;
			b.bind("mousedown", function(a) {
				c(a), y = a.offsetX, A = a.offsetY, v = Y("image").posX, g = Y("image").posY, b.bind("mousemove", h)
			}), b.bind("mouseup mouseleave", function() {
				b.unbind("mousemove", h)
			}), F.parent().append(b)
		}
		function _() {
			var c = ["t", "b", "l", "r"];
			a.each(c, function() {
				var c = a("<div />").attr2("id", this).css({
					overflow: "hidden",
					background: N.overlayColor,
					opacity: .6,
					position: "absolute",
					"z-index": 2,
					visibility: "visible"
				});
				F.append(c)
			});
			var h = (N.height - Y("selector").h) / 2,
				g = (N.width - Y("selector").w) / 2;
			F.find("#t").css({
				display: "block",
				width: "100%",
				height: h,
				left: 0,
				top: 0
			}), F.find("#b").css({
				display: "block",
				width: "100%",
				height: h,
				left: 0,
				top: N.height / 2 + Y("selector").h / 2 + 2
			}), F.find("#l").css({
				display: "block",
				width: g,
				height: Y("selector").h + 2,
				left: 0,
				top: h
			}), F.find("#r").css({
				display: "block",
				width: g - 2,
				height: Y("selector").h + 2,
				right: 0,
				top: h
			})
		}
		function k(a, c) {
			F.data(a, c)
		}
		function Y(a) {
			return F.data(a)
		}
		function X(a) {
			return 1 == a.nodeType && "http://www.w3.org/2000/svg" == a.namespaceURI
		}
		function C(c) {
			var h = Y("image"),
				g = Y("selector"),
				w = {
					viewPortW: F.width(),
					viewPortH: F.height(),
					imageX: h.posX,
					imageY: h.posY,
					imageRotate: h.rotation,
					imageW: h.w,
					imageH: h.h,
					imageSource: h.source,
					selectorX: g.x,
					selectorY: g.y,
					selectorW: g.w,
					selectorH: g.h
				};
			return a.extend(w, c)
		}
		var F = null,
			N = null,
			R = function() {
				return a.browser.msie && a.browser.version >= 9 || !a.browser.msie
			};
		a.fn.cropzoom = function(y) {
			return N = a.extend(!0, a.fn.cropzoom.defaults, y), this.each(function() {
				if (!a.isFunction(a.fn.draggable) || !a.isFunction(a.fn.resizable) || !a.isFunction(a.fn.slider)) return void alert("You must include ui.draggable, ui.resizable and ui.slider to use cropZoom");
				if ("" == N.image.source || 0 == N.image.width || 0 == N.image.height) return void alert("You must set the source, witdth and height of the image element");
				a("#img_to_crop").remove(), F = a(this), F.empty(), F.css({
					width: N.width,
					height: N.height,
					position: "relative"
				}), k("image", {
					h: N.image.height,
					w: N.image.width,
					posY: 0,
					posX: 0,
					scaleX: 0,
					scaleY: 0,
					rotation: 0,
					source: N.image.source
				}), k("selector", {
					x: N.selector.x,
					y: N.selector.y,
					w: null != N.selector.maxWidth && N.selector.w > N.selector.maxWidth ? N.selector.maxWidth : N.selector.w,
					h: null != N.selector.maxHeight && N.selector.h > N.selector.maxHeight ? N.selector.maxHeight : N.selector.h
				}), h(), g(), Y("image").posX = N.width / 2 - Y("image").w / 2 + 1, Y("image").posY = N.height / 2 - Y("image").h / 2 + 1;
				var y = null,
					S = null;
				if (R()) y = F[0].ownerDocument.createElementNS("http://www.w3.org/2000/svg", "svg"), y.setAttribute("id", "k"), y.setAttribute("width", N.width), y.setAttribute("height", N.height), y.setAttribute("preserveAspectRatio", "none"), S = F[0].ownerDocument.createElementNS("http://www.w3.org/2000/svg", "image"), S.setAttributeNS("http://www.w3.org/1999/xlink", "href", N.image.source), S.setAttribute("width", Y("image").w), S.setAttribute("height", Y("image").h), S.setAttribute("id", "img_to_crop"), S.setAttribute("preserveAspectRatio", "none"), a(S).attr2("x", 0), a(S).attr2("y", 0), a(S).css("cursor", "move"), y.appendChild(S), a.browser.msie && a.browser.version >= 10 && window.setTimeout(function() {
					S.setAttributeNS("http://www.w3.org/1999/xlink", "href", ""), S.setAttributeNS("http://www.w3.org/1999/xlink", "href", N.image.source)
				}, 0);
				else {
					F[0].ownerDocument.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML");
					var X = document.createStyleSheet();
					X.addRule("v\\:image", "behavior: url(#default#VML);display:inline-block"), X.addRule("v\\:image", "antiAlias: false;"), y = a("<div />").attr2("id", "k").css({
						width: N.width,
						height: N.height,
						position: "absolute"
					}), S = document.createElement("v:image"), S.setAttribute("id", "img_to_crop"), S.setAttribute("src", N.image.source), S.setAttribute("gamma", "0"), a(S).css({
						position: "absolute",
						left: 0,
						top: 0,
						width: Y("image").w,
						height: Y("image").h,
						cursor: "move"
					}), S.setAttribute("coordsize", "21600,21600"), S.outerHTML = S.outerHTML;
					var C = c();
					("png" == C || "gif" == C) && (S.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + N.image.source + "',sizingMethod='scale');"), y.append(S)
				}
				return F.append(y), w(), A(), F.find(".ui-icon-gripsmall-diagonal-se").css({
					width: 8,
					height: 8
				}), _(), z(), N.enableZoom && b(), N.enableRotation && v(), this
			})
		};
		var Z = a.fn.addClass;
		a.fn.addClass = function(c) {
			return c = c || "", this.each(function() {
				if (X(this)) {
					var h = this;
					a.each(c.split(/\s+/), function(i, c) {
						var g = h.className ? h.className.baseVal : h.getAttribute("class"); - 1 == a.inArray(c, g.split(/\s+/)) && (g += (g ? " " : "") + c, h.className ? h.className.baseVal = g : h.setAttribute("class", g))
					})
				} else Z.apply(a(this), [c])
			})
		};
		var D = a.fn.removeClass;
		a.fn.removeClass = function(c) {
			return c = c || "", this.each(function() {
				if (X(this)) {
					var h = this;
					a.each(c.split(/\s+/), function(i, c) {
						var g = h.className ? h.className.baseVal : h.getAttribute("class");
						g = a.grep(g.split(/\s+/), function(n) {
							return n != c
						}).join(" "), h.className ? h.className.baseVal = g : h.setAttribute("class", g)
					})
				} else D.apply(a(this), [c])
			})
		};
		var H = a.fn.toggleClass;
		a.fn.toggleClass = function(c, h) {
			return this.each(function() {
				X(this) ? ("boolean" != typeof h && (h = !a(this).hasClass(c)), a(this)[(h ? "add" : "remove") + "Class"](c)) : H.apply(a(this), [c, h])
			})
		};
		var M = a.fn.hasClass;
		a.fn.hasClass = function(c) {
			c = c || "";
			var h = !1;
			return this.each(function() {
				if (X(this)) {
					var g = (this.className ? this.className.baseVal : this.getAttribute("class")).split(/\s+/);
					h = a.inArray(c, g) > -1
				} else h = M.apply(a(this), [c]);
				return !h
			}), h
		};
		var T = a.fn.attr;
		a.fn.attr2 = function(c, h, g) {
			if ("string" == typeof c && void 0 === h) {
				var w = T.apply(this, [c, h, g]);
				return w && w.baseVal ? w.baseVal.valueAsString : w
			}
			var v = c;
			return "string" == typeof c && (v = {}, v[c] = h), this.each(function() {
				if (X(this)) for (var n in v) this.setAttribute(n, "function" == typeof v[n] ? v[n]() : v[n]);
				else T.apply(a(this), [c, h, g])
			})
		};
		var V = a.fn.removeAttr;
		a.fn.removeAttr = function(c) {
			return this.each(function() {
				X(this) ? this[c] && this[c].baseVal ? this[c].baseVal.value = "" : this.setAttribute(c, "") : V.apply(a(this), [c])
			})
		}, a.fn.cropzoom.defaults = {
			width: 500,
			height: 375,
			bgColor: "#000",
			overlayColor: "#fff",
			selector: {
				x: 0,
				y: 0,
				w: 229,
				h: 100,
				aspectRatio: !1,
				centered: !1,
				borderColor: "yellow",
				borderColorHover: "red",
				bgInfoLayer: "#FFF",
				infoFontSize: 10,
				infoFontColor: "blue",
				showPositionsOnDrag: !0,
				showDimetionsOnDrag: !0,
				maxHeight: null,
				maxWidth: null
			},
			image: {
				source: "",
				rotation: 0,
				width: 0,
				height: 0,
				minZoom: 10,
				maxZoom: 150
			},
			enableRotation: !0,
			enableZoom: !0,
			zoomSteps: 1,
			rotationSteps: 5,
			onSelectorDrag: null,
			onSelectorDragStop: null,
			onSelectorResize: null,
			onSelectorResizeStop: null,
			onZoom: null,
			onRotate: null,
			onImageDrag: null
		}, a.fn.extend({
			setSelector: function(x, c, h, g, w) {
				void 0 != w && 1 == w ? a("#selector").animate({
					top: c,
					left: x,
					width: h,
					height: g
				}, "slow") : a("#selector").css({
					top: c,
					left: x,
					width: h,
					height: g
				}), k("selector", {
					x: x,
					y: c,
					w: h,
					h: g
				})
			},
			restore: function() {
				F.empty(), k("image", {}), k("selector", {}), a("#img_to_crop").remove()
			},
			send: function(c, h, g, w) {
				a.ajax({
					url: c,
					type: h,
					data: C(g),
					success: function(r) {
						k("imageResult", r), null != r.resubmitToken && "" != r.resubmitToken && (globals.token = r.resubmitToken), void 0 !== w && null != w && w(r)
					},
					error: function(r) {
						null != r.resubmitToken && "" != r.resubmitToken && (globals.token = r.resubmitToken)
					}
				})
			}
		})
	}(jQuery)
}); /*!mycenter/modules/common/js/libs/components.js*/
;
define("mycenter/modules/common/js/libs/components", ["require", "exports", "module"], function() {
	!
	function() {
		var a = {
			CityWrapper: function() {
				var a = {
					active: "mr_on"
				},
					c = {
						hotCitys: "<li>åŒ—äº¬</li><li>ä¸Šæµ·</li><li>å¹¿å·ž</li><li>æ·±åœ³</li><li>æ­å·ž</li><li>æˆéƒ½</li><li>è¥¿å®‰</li><li>å—äº¬</li><li>åŽ¦é—¨</li><li>æ­¦æ±‰</li>"
					},
					g = function(a) {
						var c = {};
						this._get = function(a) {
							return c[a]
						}, this._set = function(a, g) {
							var v = this;
							return c[a] = g, v
						}, v.call(this, a)
					},
					v = function(a) {
						var g = this;
						if (!a.container) throw "Need options.container!";
						var v = {};
						a.container.find(".mr_province li:first ul").html(c.hotCitys);
						var _ = a.container.find(".mr_province li");
						_.each(function() {
							var a = $(this);
							v[a.find("span")] = a.find("ul")
						}), g._set("container", a.container)._set("onchange", a.onchange)._set("targetShown", a.container.find('input[type="button"]'))._set("basicCity", a.container.find('input[name="workCity"]'))._set("beforeShown", a.beforeShown)._set("afterHide", a.afterHide)._set("targetPanel", a.container.find(".xl_list"))._set("value", void 0)._set("targetProvinceWrap", a.container.find(".mr_province"))._set("targetProvinces", a.container.find(".mr_province span"))._set("targetCityWrap", a.container.find(".mr_province ul"))._set("targetCityObjs", a.container.find(".mr_province ul li"))._set("targetHotCitys", a.container.find(".mr_province li:first  ul li"))._set("targetHotCityUl", a.container.find(".mr_province li:first  ul"))._set("targetHotCityLeft", a.container.find(".mr_province li:first  span"))._set("oProvinceCity", v)._set("targetCityUl", a.container.find(".mr_province li ul")), h.call(g)
					},
					h = function() {
						var a = this;
						b.call(a)
					},
					_ = {
						hide: function(a) {
							if (a._get("stateShown")) {
								a._get("targetPanel").hide();
								var c = a._get("afterHide");
								c && c(a._get("container"), a), a._set("stateShown", !1)
							}
						},
						show: function(a) {
							if (!a._get("stateShown")) {
								C.call(a);
								var c = a._get("beforeShown");
								c && c(a._get("container"), a), a._get("targetPanel").show(), a._set("stateShown", !0)
							}
						},
						change: function(a, c) {
							var g = a._get("value");
							a._get("targetShown").val(g), a._get("basicCity").val(g);
							var v = a._get("onchange");
							g != c && v && v(g, a._get("container")), _.hide(a)
						}
					},
					C = function() {
						var c = this;
						c._get("targetProvinces").removeClass(a.active), c._get("targetCityObjs").removeClass(a.active), c._set("value", c._get("targetShown").val());
						var g = !0,
							v = c._get("value");
						return c._get("targetCityUl").hide(), "" == v || "æ‰€åœ¨åŸŽå¸‚" == v ? (c._get("targetHotCityLeft").addClass(a.active), c._get("targetHotCityLeft").next().show(), c._get("targetProvinceWrap").animate({
							scrollTop: "0px"
						}, 1), g = !1, !1) : void(g && (c._get("targetHotCitys").each(function() {
							var h = $(this),
								_ = $.trim(h.text());
							return v == _ ? (c._get("targetHotCityUl").show(), h.addClass(a.active), c._get("targetHotCityLeft").addClass(a.active), c._get("targetProvinceWrap").animate({
								scrollTop: "0px"
							}, 1), g = !1, !1) : void 0
						}), g && c._get("targetCityWrap").each(function() {
							var h = $(this);
							h.find("li").each(function() {
								var h = $(this);
								if (v == $.trim(h.text())) {
									var _ = h.parent();
									_.show(), h.addClass(a.active), _.prev().addClass(a.active);
									var C = _.parent().index();
									return c._get("targetProvinceWrap").animate({
										scrollTop: 33 * C + "px"
									}, 1), g = !1, !1
								}
							})
						})))
					},
					y = {
						containerClick: function(a, c) {
							c._get("stateShown") ? _.hide(c) : _.show(c)
						},
						documentClick: function(a, c) {
							c._get("stateShown") && _.hide(c)
						},
						provinceClick: function(c, g) {
							{
								var v = $(this);
								$.trim(v.text())
							}
							g._get("targetProvinces").removeClass(a.active), v.addClass(a.active), g._get("targetCityWrap").hide(), v.next().show(), g._get("targetCityObjs").removeClass(a.active), v.next().find("li").each(function() {
								var c = $(this);
								g._get("value") == $.trim(c.text()) && c.addClass(a.active)
							})
						},
						cityClick: function(c, g) {
							var v = $(this),
								h = v.parent();
							h.find("li").removeClass(a.active), v.addClass(a.active);
							var C = g._get("value");
							g._set("value", v.text()), _.change(g, C)
						}
					},
					b = function() {
						var a = this;
						a._get("container").bind("click", function(c) {
							y.containerClick.call(this, c, a), c.stopPropagation()
						}), $(document).bind("click", function(c) {
							y.documentClick.call(this, c, a)
						}), a._get("targetPanel").bind("click", function(a) {
							a.stopPropagation()
						}), a._get("targetProvinceWrap").delegate("span", "click", function(c) {
							y.provinceClick.call(this, c, a), c.stopPropagation()
						}), a._get("targetCityWrap").delegate("li", "click", function(c) {
							y.cityClick.call(this, c, a), c.stopPropagation()
						})
					};
				return g.prototype = {
					constructor: g,
					show: function() {
						var a = this;
						return _.show(a), a
					},
					hide: function() {
						var a = this;
						return _.hide(a), a
					},
					set: function(a, c) {
						var g = this,
							v = g._get("value");
						if (g._set("value", a), g._get("targetShown").val(a), c) {
							var h = g._get("onchange");
							a != v && h && h(a, g._get("container"))
						}
						return g
					},
					get: function() {
						var a = this;
						return a._get("value")
					},
					reset: function() {
						var a = this;
						return a.set(""), a
					}
				}, g
			}(),
			CalendarWrapper: function() {
				var a = {
					active: "active",
					today: "today",
					hover: "active",
					disable: "disable"
				},
					c = {
						toToday: "<li>è‡³ä»Š</li>",
						toTodayText: "è‡³ä»Š"
					},
					g = function(a) {
						var c = {};
						this._get = function(a) {
							return c[a]
						}, this._set = function(a, g) {
							var v = this;
							return c[a] = g, v
						}, v.call(this, a)
					},
					v = function(a) {
						var c = this;
						if (!a.container) throw "Need options.container!";
						c._set("container", a.container)._set("onchange", a.onchange)._set("beforeShown", a.beforeShown)._set("afterHide", a.afterHide)._set("has2Today", a.has2Today || !1)._set("targetHidden", a.container.find('input[type="hidden"]'))._set("targetShown", a.container.find('input[type="button"]'))._set("targetPanel", a.container.find(".mr_calendar_ym"))._set("targetYearsCon", a.container.find(".mr_year"))._set("targetMonthsCon", a.container.find(".mr_month"))._set("targetYearsLis", a.container.find(".mr_year li"))._set("targetMonthsLis", a.container.find(".mr_month li"))._set("targetMonthsSpans", a.container.find(".mr_month span"))._set("value", void 0)._set("valueYear", void 0)._set("valueMonth", void 0)._set("stateShown", !1)._set("leftBr", void 0)._set("rightBr", void 0)._set("targetYearWrap", a.container.find(".mr_year"))._set("disable", !1), b.call(c)
					},
					h = function(a) {
						return a + "æœˆ"
					},
					_ = function(a) {
						return a.replace("æœˆ", "")
					},
					C = function(a, c) {
						return 10 > +c && (c = "0" + c), a + "." + c
					},
					y = function(a) {
						a += "";
						var c = a.split(".");
						return {
							year: c[0],
							month: parseInt(c[1]) + ""
						}
					},
					b = function() {
						var a = this;
						a._get("has2Today") && "è‡³ä»Š" != a._get("targetYearsCon").find("li:first").text() && a._get("targetYearsCon").prepend(c.toToday) && a._set("targetYearsLis", a._get("container").find(".mr_year li")), W.call(a), B.call(a), Y.call(a)
					},
					w = {
						hide: function(a) {
							if (a._get("stateShown")) {
								a._get("targetPanel").hide();
								var c = a._get("afterHide");
								c && c(a._get("container"), a), a._set("stateShown", !1), a._set("valueYear", void 0)._set("valueMonth", void 0)
							}
						},
						show: function(a) {
							if (!a._get("disable") && !a._get("stateShown")) {
								S.call(a);
								var c = a._get("beforeShown");
								c && c(a._get("container"), a), a._get("targetPanel").show(), a._set("stateShown", !0)
							}
						},
						change: function(a, c) {
							var g = a._get("value");
							a._get("targetHidden").val(g), a._get("targetShown").val(g);
							var v = a._get("onchange");
							g != c && v && v(g, a._get("container")), w.hide(a)
						}
					},
					S = function() {
						var g = this;
						g._get("targetYearsLis").removeClass(a.active), g._get("targetMonthsSpans").removeClass(a.active).removeClass(a.disable), M.call(g);
						var v = g._get("value"),
							_ = g._get("targetYearsCon").find("li:first");
						if ("" == $.trim(v)) {
							var C;
							if ("è‡³ä»Š" == $.trim(_.text())) {
								var b = _.nextAll().not(".disable").first();
								b.trigger("click"), g._set("valueYear", b.text()), C = b
							} else {
								var w = g._get("targetYearsCon").find("li").not(".disable").first();
								w.trigger("click"), g._set("valueYear", w.text()), C = w
							}
							return void g._get("targetYearWrap").animate({
								scrollTop: 32 * $(w).index() + "px"
							}, 1)
						}
						if (v == c.toTodayText) {
							g._get("targetYearsCon").find("li:first").addClass(a.active);
							var S = g._get("todayMonth");
							return g._get("targetMonthsSpans").each(function() {
								var c = $(this);
								$.trim(c.text()) == h(S) && c.addClass(a.today)
							}), void g._get("targetYearWrap").animate({
								scrollTop: 0
							}, 1)
						}
						var k = y(v);
						g._set("valueYear", k.year), g._set("valueMonth", k.month), g._get("targetYearsLis").each(function() {
							var c = $(this);
							return $.trim(c.text()) == k.year ? (c.addClass(a.active), window.setTimeout(function() {
								c.trigger("click")
							}, 0), g._get("targetYearWrap").animate({
								scrollTop: 32 * c.index() + "px"
							}, 1), !1) : void 0
						}), g._get("targetMonthsSpans").each(function() {
							var c = $(this);
							return $.trim(c.text()) == h(k.month) ? (c.addClass(a.active), !1) : void 0
						})
					},
					k = {
						containerClick: function(a, c) {
							c._get("stateShown") ? w.hide(c) : w.show(c)
						},
						documentClick: function(a, c) {
							c._get("stateShown") && w.hide(c)
						},
						yearsClick: function(g, v) {
							var _ = $(this);
							if (!_.hasClass(a.disable)) {
								var C = $.trim(_.text());
								if (C == c.toTodayText) {
									var b = v._get("value");
									return v._set("value", C), void w.change(v, b)
								}
								if (v._set("valueYear", C), v._get("targetYearsLis").removeClass(a.active), _.addClass(a.active), v._get("targetMonthsSpans").removeClass(a.active).removeClass(a.today).removeClass(a.disable), C == v._get("todayYear")) {
									var S = v._get("todayMonth");
									v._get("targetMonthsSpans").each(function() {
										var c = $(this);
										$.trim(c.text()) == h(S) && c.addClass(a.today)
									})
								}
								M.call(v);
								var k = v._get("value");
								k && (k = y(k), C == k.year && v._get("targetMonthsSpans").each(function() {
									var c = $(this);
									$.trim(c.text()) == h(k.month) && c.addClass(a.active)
								}))
							}
						},
						monthsClick: function(c, g) {
							var v;
							if (v = g._get("valueYear")) {
								var h = $(this);
								if (!h.hasClass(a.disable)) {
									var y = _($.trim(h.text()));
									g._set("valueMonth", y), g._get("targetMonthsSpans").removeClass(a.active), h.addClass(a.active);
									var b = g._get("value");
									g._set("value", C(v, y)), w.change(g, b)
								}
							}
						}
					},
					Y = function() {
						var a = this;
						a._get("container").bind("click", function(c) {
							k.containerClick.call(this, c, a), c.stopPropagation()
						}), $(document).bind("click", function(c) {
							k.documentClick.call(this, c, a)
						}), a._get("targetPanel").bind("click", function(a) {
							a.stopPropagation()
						}), a._get("targetYearsCon").delegate("li", "click", function(c) {
							k.yearsClick.call(this, c, a), c.stopPropagation()
						}), a._get("targetMonthsCon").delegate("span", "click", function(c) {
							k.monthsClick.call(this, c, a), c.stopPropagation()
						})
					},
					T = function(c) {
						var g = this;
						g._get("targetMonthsSpans").each(function() {
							var g = $(this);
							c(_($.trim(g.text()))) && g.addClass(a.disable)
						})
					},
					P = function(c) {
						var g = this;
						g._get("targetYearsLis").each(function() {
							var g = $(this);
							c($.trim(g.text())) && g.addClass(a.disable)
						})
					},
					M = function() {
						var g = this;
						g._get("targetMonthsSpans").removeClass(a.disable), g._get("targetYearsLis").removeClass(a.disable);
						var v, h = g._get("leftBr"),
							_ = g._get("rightBr"),
							b = g._get("value");
						return _ != c.toTodayText && _ || (_ = C(g._get("todayYear"), g._get("todayMonth"))), b || g._get("valueYear") ? (v = b && !g._get("valueYear") ? b == c.toTodayText ? g._get("todayYear") : y(b).year : g._get("valueYear"), void H.call(g, h, _, v)) : (v = g._get("todayYear"), void H.call(g, h, _, v))
					},
					H = function(a, c, g) {
						var v = this;
						if (a) {
							var h = y(a);
							g == h.year && T.call(v, function(a) {
								return +a < +h.month
							}), P.call(v, function(a) {
								return +a < h.year
							})
						}
						if (c) {
							var _ = y(c);
							g == _.year && T.call(v, function(a) {
								return +a > +_.month
							}), g > _.year && T.call(v, function() {
								return !0
							}), P.call(v, function(a) {
								return +a > _.year
							})
						}
					},
					B = function() {
						var c = this,
							g = c._get("todayYear"),
							v = c._get("todayMonth");
						c._get("targetYearsLis").each(function() {
							var c = $(this);
							return $.trim(c.text()) == g ? (c.addClass(a.today), !1) : void 0
						}), c._get("targetMonthsSpans").each(function() {
							var c = $(this);
							return $.trim(c.text()) == h(v) ? (c.addClass(a.today), !1) : void 0
						})
					},
					W = function() {
						var a = this,
							c = new Date,
							g = c.getFullYear(),
							v = c.getMonth() + 1;
						a._set("todayYear", g), a._set("todayMonth", v);
						var h = C(g, v);
						a._set("todayDate", h), a._set("rightBr", h)
					};
				return g.prototype = {
					constructor: g,
					show: function() {
						var a = this;
						return w.show(a), a
					},
					hide: function() {
						var a = this;
						return w.hide(a), a
					},
					disable: function() {
						var a = this;
						return a._set("disable", !0), a
					},
					enable: function() {
						var a = this;
						return a._set("disable", !1), a
					},
					set: function(a, c) {
						var g = this,
							v = g._get("value");
						if (g._set("value", a), g._get("targetHidden").val(a), g._get("targetShown").val(a), c) {
							var h = g._get("onchange");
							a != v && h && h(a, g._get("container"))
						}
						return g
					},
					get: function() {
						var a = this;
						return a._get("value")
					},
					reset: function() {
						var a = this;
						return a.set(""), a._set("leftBr", void 0), a._set("rightBr", void 0), a
					},
					setLeftBoundary: function(a) {
						var c = this;
						return c._set("leftBr", a), M.call(c), c
					},
					setRightBoundary: function(a) {
						var c = this;
						return c._set("rightBr", a), M.call(c), c
					}
				}, g
			}(),
			CalendarDouble: function() {
				var c = function(a) {
						this.init(a)
					};
				return c.prototype = {
					constructor: c,
					init: function(c) {
						var g = this;
						if (!c.wrap) throw "Need wrap!";
						g.wrap = c.wrap;
						var v = g.wrap.children("div:first"),
							h = g.wrap.children("div:last");
						g.calendarStart = new a.CalendarWrapper({
							container: v,
							onchange: function(a) {
								g.calendarEnd.setLeftBoundary(a)
							},
							beforeShown: function(a) {
								$(document).trigger("click");
								var c = a.find('input[type="button"]');
								"èµ·å§‹æ—¶é—´" != c.val() && "ç»“æŸæ—¶é—´" != c.val() && a.find("span.error").hide(), g.calendarEnd.hide(), a.siblings().find('input[type="button"]').removeClass("select_color"), a.parents(".practice").find(".practiceDate").find('input[type="button"]').removeClass("select_color"), a.parents(".work").find(".workDate").find('input[type="button"]').removeClass("select_color"), a.find('input[type="button"]').addClass("select_color")
							},
							afterHide: function(a) {
								a.find('input[type="button"]').removeClass("select_color"), $(".mr_workexpFormTop").css("paddingBottom", "15px").siblings(".adddel").css("marginTop", "0px"), $(".mr_practiceConFormTop").css("paddingBottom", "15px").siblings(".adddel").css("marginTop", "0px");
								var c = a.find('input[type="button"]');
								"èµ·å§‹æ—¶é—´" != c.val() && "ç»“æŸæ—¶é—´" != c.val() && (a.find('input[type="button"]').css("color", "#333"), a.find("span.error").hide())
							}
						}), g.calendarEnd = new a.CalendarWrapper({
							container: h,
							onchange: function(a) {
								g.calendarStart.setRightBoundary(a)
							},
							beforeShown: function(a) {
								$(document).trigger("click");
								var c = a.find('input[type="button"]');
								"èµ·å§‹æ—¶é—´" != c.val() && "ç»“æŸæ—¶é—´" != c.val() && a.find("span.error").hide(), g.calendarStart.hide(), a.siblings().find('input[type="button"]').removeClass("select_color"), a.parents(".practice").find(".practiceDate").find('input[type="button"]').removeClass("select_color"), a.parents(".work").find(".workDate").find('input[type="button"]').removeClass("select_color"), a.find('input[type="button"]').addClass("select_color")
							},
							afterHide: function(a) {
								a.find('input[type="button"]').removeClass("select_color"), $(".mr_workexpFormTop").css("paddingBottom", "15px").siblings(".adddel").css("marginTop", "0px"), $(".mr_practiceConFormTop").css("paddingBottom", "15px").siblings(".adddel").css("marginTop", "0px");
								var c = a.find('input[type="button"]');
								"èµ·å§‹æ—¶é—´" != c.val() && "ç»“æŸæ—¶é—´" != c.val() && (a.find('input[type="button"]').css("color", "#333"), a.find("span.error").hide())
							},
							has2Today: !0
						})
					},
					setCalendarStart: function(a) {
						var c = this;
						c.calendarStart.set(a, !0)
					},
					setCalendarEnd: function(a) {
						var c = this;
						c.calendarEnd.set(a, !0)
					},
					getCalendarStart: function() {
						var a = this;
						return a.calendarStart.get()
					},
					getCalendarEnd: function() {
						var a = this;
						return a.calendarEnd.get()
					},
					disable: function() {
						var a = this;
						a.calendarStart.disable(), a.calendarEnd.disable()
					},
					enable: function() {
						var a = this;
						a.calendarStart.enable(), a.calendarEnd.enable()
					},
					show: function() {
						var a = this;
						a.calendarStart.show(), a.calendarEnd.show()
					},
					hide: function() {
						var a = this;
						a.calendarStart.hide(), a.calendarEnd.hide()
					}
				}, c
			}()
		};
		window.components = a
	}()
}); /*!common/components/jquery-validate/jquery-validate.js*/
;
define("common/components/jquery-validate/jquery-validate", ["require", "exports", "module"], function() {
	!
	function(a) {
		a.extend(a.fn, {
			validate: function(h) {
				if (!this.length) return void(h && h.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"));
				var c = a.data(this[0], "validator");
				return c ? c : (c = new a.validator(h, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(h) {
					c.settings.submitHandler && (c.submitButton = h.target), a(h.target).hasClass("cancel") && (c.cancelSubmit = !0)
				}), this.submit(function(h) {
					function d() {
						var d;
						return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, h), c.submitButton && d.remove(), !1) : !0
					}
					return void 0 != window.tinyMCE && tinyMCE.triggerSave(), c.settings.debug && h.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
				})), c)
			},
			valid: function() {
				var h, c;
				return a(this[0]).is("form") ? this.validate().form() : (h = !0, c = a(this[0].form).validate(), this.each(function() {
					h &= c.element(this)
				}), h)
			},
			removeAttrs: function(h) {
				var c = {},
					d = this;
				return a.each(h.split(/\s/), function(a, h) {
					c[h] = d.attr(h), d.removeAttr(h)
				}), c
			},
			rules: function(h, c) {
				var e, f, g, F, i, v, d = this[0];
				if (h) switch (e = a.data(d.form, "validator").settings, f = e.rules, g = a.validator.staticRules(d), h) {
				case "add":
					a.extend(g, a.validator.normalizeRule(c)), f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
					break;
				case "remove":
					return c ? (F = {}, a.each(c.split(/\s/), function(a, h) {
						F[h] = g[h], delete g[h]
					}), F) : (delete f[d.name], g)
				}
				return i = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(d), a.validator.classRules(d), a.validator.attributeRules(d), a.validator.staticRules(d)), d), i.required && (v = i.required, delete i.required, i = a.extend({
					required: v
				}, i)), i
			}
		}), a.extend(a.expr[":"], {
			blank: function(h) {
				return !a.trim("" + h.value)
			},
			filled: function(h) {
				return !!a.trim("" + h.value)
			},
			unchecked: function(a) {
				return !a.checked
			}
		}), a.validator = function(h, c) {
			this.settings = a.extend(!0, {}, a.validator.defaults, h), this.currentForm = c, this.init()
		}, a.validator.format = function(h, c) {
			return 1 === arguments.length ?
			function() {
				var c = a.makeArray(arguments);
				return c.unshift(h), a.validator.format.apply(this, c)
			} : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
				h = h.replace(new RegExp("\\{" + a + "\\}", "g"), c)
			}), h)
		}, a.extend(a.validator, {
			defaults: {
				messages: {},
				groups: {},
				rules: {},
				errorClass: "error",
				validClass: "valid",
				errorElement: "span",
				focusInvalid: !0,
				errorContainer: a([]),
				errorLabelContainer: a([]),
				onsubmit: !0,
				ignore: "",
				ignoreTitle: !1,
				onfocusin: function(a) {
					this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
				},
				onfocusout: function(a) {
					this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
				},
				onkeyup: function(a, h) {
					(9 != h.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastActive) && this.element(a)
				},
				onclick: function(a) {
					a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
				},
				highlight: function(h, c, d) {
					"radio" === h.type ? this.findByName(h.name).addClass(c).removeClass(d) : a(h).addClass(c).removeClass(d)
				},
				unhighlight: function(h, c, d) {
					"radio" === h.type ? this.findByName(h.name).removeClass(c).addClass(d) : a(h).removeClass(c).addClass(d)
				}
			},
			setDefaults: function(h) {
				a.extend(a.validator.defaults, h)
			},
			messages: {
				required: "This field is required.",
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				creditcard: "Please enter a valid credit card number.",
				equalTo: "Please enter the same value again.",
				maxlength: a.validator.format("Please enter no more than {0} characters."),
				minlength: a.validator.format("Please enter at least {0} characters."),
				rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
				range: a.validator.format("Please enter a value between {0} and {1}."),
				max: a.validator.format("Please enter a value less than or equal to {0}."),
				min: a.validator.format("Please enter a value greater than or equal to {0}.")
			},
			autoCreateRanges: !1,
			prototype: {
				init: function() {
					function d(h) {
						var c = a.data(this[0].form, "validator"),
							d = "on" + h.type.replace(/^validate/, "");
						c.settings[d] && c.settings[d].call(c, this[0], h)
					}
					var h, c;
					this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(), h = this.groups = {}, a.each(this.settings.groups, function(c, d) {
						a.each(d.split(/\s/), function(a, d) {
							h[d] = c
						})
					}), c = this.settings.rules, a.each(c, function(h, d) {
						c[h] = a.validator.normalizeRule(d)
					}), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", d).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", d), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
				},
				form: function() {
					return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
				},
				checkForm: function() {
					var a, h, c;
					for (this.prepareForm(), a = 0, h = this.currentElements = this.elements(); h[a]; a++) if (void 0 != this.findByName(h[a].name).length && this.findByName(h[a].name).length > 1) for (c = 0; c < this.findByName(h[a].name).length; c++) this.check(this.findByName(h[a].name)[c]);
					else this.check(h[a]);
					return this.valid()
				},
				element: function(h) {
					h = this.validationTargetFor(this.clean(h)), this.lastElement = h, this.prepareElement(h), this.currentElements = a(h);
					var c = this.check(h) !== !1;
					return c ? delete this.invalid[h.name] : this.invalid[h.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
				},
				showErrors: function(h) {
					if (h) {
						a.extend(this.errorMap, h), this.errorList = [];
						for (var c in h) this.errorList.push({
							message: h[c],
							element: this.findByName(c)[0]
						});
						this.successList = a.grep(this.successList, function(a) {
							return !(a.name in h)
						})
					}
					this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
				},
				resetForm: function() {
					a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
				},
				numberOfInvalids: function() {
					return this.objectLength(this.invalid)
				},
				objectLength: function(a) {
					var h = 0;
					for (c in a) h++;
					return h
				},
				hideErrors: function() {
					this.addWrapper(this.toHide).hide()
				},
				valid: function() {
					return 0 === this.size()
				},
				size: function() {
					return this.errorList.length
				},
				focusInvalid: function() {
					if (this.settings.focusInvalid) try {
						a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
					} catch (h) {}
				},
				findLastActive: function() {
					var h = this.lastActive;
					return h && 1 === a.grep(this.errorList, function(a) {
						return a.element.name === h.name
					}).length && h
				},
				elements: function() {
					var h = this,
						c = {};
					return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
						return !this.name && h.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !h.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
					})
				},
				clean: function(h) {
					return a(h)[0]
				},
				errors: function() {
					var h = this.settings.errorClass.replace(" ", ".");
					return a(this.settings.errorElement + "." + h, this.errorContext)
				},
				reset: function() {
					this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
				},
				prepareForm: function() {
					this.reset(), this.toHide = this.errors().add(this.containers)
				},
				prepareElement: function(a) {
					this.reset(), this.toHide = this.errorsFor(a)
				},
				elementValue: function(h) {
					var c = a(h).attr("type"),
						d = a(h).val();
					return "radio" === c || "checkbox" === c ? a('input[name="' + a(h).attr("name") + '"]:checked').val() : "string" == typeof d ? d.replace(/\r/g, "") : d
				},
				check: function(h) {
					var c, d, e, f, g, F;
					h = this.validationTargetFor(this.clean(h)), c = a(h).rules(), d = !1, e = this.elementValue(h);
					for (g in c) {
						F = {
							method: g,
							parameters: c[g]
						};
						try {
							if (f = a.validator.methods[g].call(this, e, h, F.parameters), "dependency-mismatch" === f) {
								d = !0;
								continue
							}
							if (d = !1, "pending" === f) return void(this.toHide = this.toHide.not(this.errorsFor(h)));
							if (!f) return this.formatAndAdd(h, F), !1
						} catch (i) {
							throw this.settings.debug && window.console && console.log("exception occured when checking element " + h.id + ", check the '" + F.method + "' method", i), i
						}
					}
					return d ? void 0 : (this.objectLength(c) && this.successList.push(h), !0)
				},
				customMetaMessage: function(h, c) {
					if (a.metadata) {
						var d = this.settings.meta ? a(h).metadata()[this.settings.meta] : a(h).metadata();
						return d && d.messages && d.messages[c]
					}
				},
				customDataMessage: function(h, c) {
					return a(h).data("msg-" + c.toLowerCase()) || h.attributes && a(h).attr("data-msg-" + c.toLowerCase())
				},
				customMessage: function(a, h) {
					var c = this.settings.messages[a];
					return c && (c.constructor === String ? c : c[h])
				},
				findDefined: function() {
					for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
					return void 0
				},
				defaultMessage: function(h, c) {
					return this.findDefined(this.customMessage(h.name, c), this.customDataMessage(h, c), this.customMetaMessage(h, c), !this.settings.ignoreTitle && h.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + h.name + "</strong>")
				},
				formatAndAdd: function(h, c) {
					var d = this.defaultMessage(h, c.method),
						e = /\$?\{(\d+)\}/g;
					"function" == typeof d ? d = d.call(this, c.parameters, h) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
						message: d,
						element: h
					}), this.errorMap[h.name] = d, this.submitted[h.name] = d
				},
				addWrapper: function(a) {
					return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
				},
				defaultShowErrors: function() {
					var a, h, c;
					for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
					if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
					if (this.settings.unhighlight) for (a = 0, h = this.validElements(); h[a]; a++) this.settings.unhighlight.call(this, h[a], this.settings.errorClass, this.settings.validClass);
					this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
				},
				validElements: function() {
					return this.currentElements.not(this.invalidElements())
				},
				invalidElements: function() {
					return a(this.errorList).map(function() {
						return this.element
					})
				},
				showLabel: function(h, c) {
					var d = this.errorsFor(h);
					d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.attr("generated") && d.html(c)) : (d = a("<" + this.settings.errorElement + "/>").attr({
						"for": this.idOrName(h),
						generated: !0
					}).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(h)) : d.insertAfter(a(h)))), !c && this.settings.success && (d.text("").append('<em class="error_arrow"></em>'), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, h)), this.toShow = this.toShow.add(d)
				},
				errorsFor: function(h) {
					var c = this.idOrName(h);
					return this.errors().filter(function() {
						return a(this).attr("for") === c
					})
				},
				idOrName: function(a) {
					return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
				},
				validationTargetFor: function(a) {
					return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
				},
				checkable: function(a) {
					return /radio|checkbox/i.test(a.type)
				},
				findByName: function(h) {
					return a(this.currentForm).find('[name="' + h + '"]')
				},
				getLength: function(h, c) {
					switch (c.nodeName.toLowerCase()) {
					case "select":
						return a("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
					}
					return h.length
				},
				depend: function(a, h) {
					return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, h) : !0
				},
				dependTypes: {
					"boolean": function(a) {
						return a
					},
					string: function(h, c) {
						return !!a(h, c.form).length
					},
					"function": function(a, h) {
						return a(h)
					}
				},
				optional: function(h) {
					var c = this.elementValue(h);
					return !a.validator.methods.required.call(this, c, h) && "dependency-mismatch"
				},
				startRequest: function(a) {
					this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
				},
				stopRequest: function(h, c) {
					this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[h.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
				},
				previousValue: function(h) {
					return a.data(h, "previousValue") || a.data(h, "previousValue", {
						old: null,
						valid: !0,
						message: this.defaultMessage(h, "remote")
					})
				}
			},
			classRuleSettings: {
				required: {
					required: !0
				},
				email: {
					email: !0
				},
				url: {
					url: !0
				},
				date: {
					date: !0
				},
				dateISO: {
					dateISO: !0
				},
				number: {
					number: !0
				},
				digits: {
					digits: !0
				},
				creditcard: {
					creditcard: !0
				}
			},
			addClassRules: function(h, c) {
				h.constructor === String ? this.classRuleSettings[h] = c : a.extend(this.classRuleSettings, h)
			},
			classRules: function(h) {
				var c = {},
					d = a(h).attr("class");
				return d && a.each(d.split(" "), function() {
					this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
				}), c
			},
			attributeRules: function(h) {
				var e, f, c = {},
					d = a(h);
				for (e in a.validator.methods)"required" === e ? (f = d.get(0).getAttribute(e), "" === f && (f = !0), f = !! f) : f = d.attr(e), f ? c[e] = f : d[0].getAttribute("type") === e && (c[e] = !0);
				return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
			},
			metadataRules: function(h) {
				if (!a.metadata) return {};
				var c = a.data(h.form, "validator").settings.meta;
				return c ? a(h).metadata()[c] : a(h).metadata()
			},
			staticRules: function(h) {
				var c = {},
					d = a.data(h.form, "validator");
				return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[h.name]) || {}), c
			},
			normalizeRules: function(h, c) {
				return a.each(h, function(d, e) {
					if (e === !1) return void delete h[d];
					if (e.param || e.depends) {
						var f = !0;
						switch (typeof e.depends) {
						case "string":
							f = !! a(e.depends, c.form).length;
							break;
						case "function":
							f = e.depends.call(c, c)
						}
						f ? h[d] = void 0 !== e.param ? e.param : !0 : delete h[d]
					}
				}), a.each(h, function(d, e) {
					h[d] = a.isFunction(e) ? e(c) : e
				}), a.each(["minlength", "maxlength", "min", "max"], function() {
					h[this] && (h[this] = Number(h[this]))
				}), a.each(["rangelength", "range"], function() {
					h[this] && (h[this] = [Number(h[this][0]), Number(h[this][1])])
				}), a.validator.autoCreateRanges && (h.min && h.max && (h.range = [h.min, h.max], delete h.min, delete h.max), h.minlength && h.maxlength && (h.rangelength = [h.minlength, h.maxlength], delete h.minlength, delete h.maxlength)), h.messages && delete h.messages, h
			},
			normalizeRule: function(h) {
				if ("string" == typeof h) {
					var c = {};
					a.each(h.split(/\s/), function() {
						c[this] = !0
					}), h = c
				}
				return h
			},
			addMethod: function(h, c, d) {
				a.validator.methods[h] = c, a.validator.messages[h] = void 0 !== d ? d : a.validator.messages[h], c.length < 3 && a.validator.addClassRules(h, a.validator.normalizeRule(h))
			},
			methods: {
				required: function(h, c, d) {
					if (!this.depend(d, c)) return "dependency-mismatch";
					if ("select" === c.nodeName.toLowerCase()) {
						var e = a(c).val();
						return e && e.length > 0
					}
					return this.checkable(c) ? this.getLength(h, c) > 0 : (h == a(c).attr("placeholder") && (h = ""), a.trim(h).length > 0)
				},
				remote: function(h, c, d) {
					var e, f, g;
					return this.optional(c) ? "dependency-mismatch" : (e = this.previousValue(c), this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {
						url: d
					} || d, this.pending[c.name] ? "pending" : e.old === h ? e.valid : (e.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = h, a.ajax(a.extend(!0, {
						url: d,
						mode: "abort",
						port: "validate" + c.name,
						dataType: "json",
						data: g,
						success: function(d) {
							var g, F, i, v;
							f.settings.messages[c.name].remote = e.originalMessage, g = d === !0 || "true" === d, g ? (F = f.formSubmitted, f.prepareElement(c), f.formSubmitted = F, f.successList.push(c), delete f.invalid[c.name], f.showErrors()) : (i = {}, v = d || f.defaultMessage(c, "remote"), i[c.name] = e.message = a.isFunction(v) ? v(h) : v, f.invalid[c.name] = !0, f.showErrors(i)), e.valid = g, f.stopRequest(c, g)
						}
					}, d)), "pending"))
				},
				minlength: function(h, c, d) {
					var e = a.isArray(h) ? h.length : this.getLength(a.trim(h), c);
					return this.optional(c) || e >= d
				},
				maxlength: function(h, c, d) {
					var e = a.isArray(h) ? h.length : this.getLength(a.trim(h), c);
					return this.optional(c) || d >= e
				},
				rangelength: function(h, c, d) {
					var e = a.isArray(h) ? h.length : this.getLength(a.trim(h), c);
					return this.optional(c) || e >= d[0] && e <= d[1]
				},
				min: function(a, h, c) {
					return this.optional(h) || a >= c
				},
				max: function(a, h, c) {
					return this.optional(h) || c >= a
				},
				range: function(a, h, c) {
					return this.optional(h) || a >= c[0] && a <= c[1]
				},
				email: function(h, c) {
					return h = a.trim(h), this.optional(c) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[ -퟿豈-﷏ﷰ-￯])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[ -퟿豈-﷏ﷰ-￯])+)*)|((")(((( |	)*(
))?( |	)+)?(([--]|!|[#-[]|[]-~]|[ -퟿豈-﷏ﷰ-￯])|(\\([-	
-]|[ -퟿豈-﷏ﷰ-￯]))))*((( |	)*(
))?( |	)+)?(")))@((([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])))\.)+(([a-z]|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|[ -퟿豈-﷏ﷰ-￯])))$/i.test(h)
				},
				url: function(a, h) {
					return this.optional(h) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])))\.)+(([a-z]|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|[ -퟿豈-﷏ﷰ-￯])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[-]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
				},
				date: function(a, h) {
					return this.optional(h) || !/Invalid|NaN/.test(new Date(a))
				},
				dateISO: function(a, h) {
					return this.optional(h) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
				},
				number: function(a, h) {
					return this.optional(h) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
				},
				digits: function(a, h) {
					return this.optional(h) || /^\d+$/.test(a)
				},
				creditcard: function(a, h) {
					var c, d, e, f, g;
					if (this.optional(h)) return "dependency-mismatch";
					if (/[^0-9 \-]+/.test(a)) return !1;
					for (c = 0, d = 0, e = !1, a = a.replace(/\D/g, ""), f = a.length - 1; f >= 0; f--) g = a.charAt(f), d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e;
					return 0 === c % 10
				},
				equalTo: function(h, c, d) {
					var e = a(d);
					return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
						a(c).valid()
					}), h === e.val()
				}
			}
		}), a.format = a.validator.format
	}(jQuery), function(a) {
		var h, c = {};
		a.ajaxPrefilter ? a.ajaxPrefilter(function(a, h, d) {
			var e = a.port;
			"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
		}) : (h = a.ajax, a.ajax = function(d) {
			var e = ("mode" in d ? d : a.ajaxSettings).mode,
				f = ("port" in d ? d : a.ajaxSettings).port;
			return "abort" === e ? (c[f] && c[f].abort(), c[f] = h.apply(this, arguments)) : h.apply(this, arguments)
		})
	}(jQuery), function(a) {
		jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || a.each({
			focus: "focusin",
			blur: "focusout"
		}, function(h, c) {
			function d(h) {
				return h = a.event.fix(h), h.type = c, a.event.handle.call(this, h)
			}
			a.event.special[c] = {
				setup: function() {
					this.addEventListener(h, d, !0)
				},
				teardown: function() {
					this.removeEventListener(h, d, !0)
				},
				handler: function(h) {
					var d = arguments;
					return d[0] = a.event.fix(h), d[0].type = c, a.event.handle.apply(this, d)
				}
			}
		}), a.extend(a.fn, {
			validateDelegate: function(h, c, d) {
				return this.bind(c, function(c) {
					var e = a(c.target);
					return e.is(h) ? d.apply(e, arguments) : void 0
				})
			}
		})
	}(jQuery)
}); /*!dep/jquery-validation/dist/jquery.validate.js*/
;
!
function(a) {
	"function" == typeof define && define.amd ? define("dep/jquery-validation/dist/jquery.validate", ["jquery"], a) : a(jQuery)
}(function(a) {
	a.extend(a.fn, {
		validate: function(h) {
			if (!this.length) return void(h && h.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(h, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(h) {
				c.settings.submitHandler && (c.submitButton = h.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.on("submit.validate", function(h) {
				function g() {
					var g, v;
					return c.settings.submitHandler ? (c.submitButton && (g = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), v = c.settings.submitHandler.call(c, c.currentForm, h), c.submitButton && g.remove(), void 0 !== v ? v : !1) : !0
				}
				return c.settings.debug && h.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, g()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : g() : (c.focusInvalid(), !1)
			})), c)
		},
		valid: function() {
			var h, c, g;
			return a(this[0]).is("form") ? h = this.validate().form() : (g = [], h = !0, c = a(this[0].form).validate(), this.each(function() {
				h = c.element(this) && h, g = g.concat(c.errorList)
			}), c.errorList = g), h
		},
		rules: function(h, c) {
			var g, v, b, y, C, w, L = this[0];
			if (h) switch (g = a.data(L.form, "validator").settings, v = g.rules, b = a.validator.staticRules(L), h) {
			case "add":
				a.extend(b, a.validator.normalizeRule(c)), delete b.messages, v[L.name] = b, c.messages && (g.messages[L.name] = a.extend(g.messages[L.name], c.messages));
				break;
			case "remove":
				return c ? (w = {}, a.each(c.split(/\s/), function(h, c) {
					w[c] = b[c], delete b[c], "required" === c && a(L).removeAttr("aria-required")
				}), w) : (delete v[L.name], b)
			}
			return y = a.validator.normalizeRules(a.extend({}, a.validator.classRules(L), a.validator.attributeRules(L), a.validator.dataRules(L), a.validator.staticRules(L)), L), y.required && (C = y.required, delete y.required, y = a.extend({
				required: C
			}, y), a(L).attr("aria-required", "true")), y.remote && (C = y.remote, delete y.remote, y = a.extend(y, {
				remote: C
			})), y
		}
	}), a.extend(a.expr[":"], {
		blank: function(h) {
			return !a.trim("" + a(h).val())
		},
		filled: function(h) {
			return !!a.trim("" + a(h).val())
		},
		unchecked: function(h) {
			return !a(h).prop("checked")
		}
	}), a.validator = function(h, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, h), this.currentForm = c, this.init()
	}, a.validator.format = function(h, c) {
		return 1 === arguments.length ?
		function() {
			var c = a.makeArray(arguments);
			return c.unshift(h), a.validator.format.apply(this, c)
		} : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(i, n) {
			h = h.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
				return n
			})
		}), h)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function(a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function(h, c) {
				var g = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === c.which && "" === this.elementValue(h) || -1 !== a.inArray(c.keyCode, g) || (h.name in this.submitted || h === this.lastElement) && this.element(h)
			},
			onclick: function(a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function(h, c, g) {
				"radio" === h.type ? this.findByName(h.name).addClass(c).removeClass(g) : a(h).addClass(c).removeClass(g)
			},
			unhighlight: function(h, c, g) {
				"radio" === h.type ? this.findByName(h.name).removeClass(c).addClass(g) : a(h).removeClass(c).addClass(g)
			}
		},
		setDefaults: function(h) {
			a.extend(a.validator.defaults, h)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date ( ISO ).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function h(h) {
					var c = a.data(this.form, "validator"),
						g = "on" + h.type.replace(/^validate/, ""),
						v = c.settings;
					v[g] && !a(this).is(v.ignore) && v[g].call(c, this, h)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, g = this.groups = {};
				a.each(this.settings.groups, function(h, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
						g[c] = h
					})
				}), c = this.settings.rules, a.each(c, function(h, g) {
					c[h] = a.validator.normalizeRule(g)
				}), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", h).on("click.validate", "select, option, [type='radio'], [type='checkbox']", h), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			},
			form: function() {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var i = 0, a = this.currentElements = this.elements(); a[i]; i++) this.check(a[i]);
				return this.valid()
			},
			element: function(h) {
				var c = this.clean(h),
					g = this.validationTargetFor(c),
					v = !0;
				return this.lastElement = g, void 0 === g ? delete this.invalid[c.name] : (this.prepareElement(g), this.currentElements = a(g), v = this.check(g) !== !1, v ? delete this.invalid[g.name] : this.invalid[g.name] = !0), a(h).attr("aria-invalid", !v), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), v
			},
			showErrors: function(h) {
				if (h) {
					a.extend(this.errorMap, h), this.errorList = [];
					for (var c in h) this.errorList.push({
						message: h[c],
						element: this.findByName(c)[0]
					});
					this.successList = a.grep(this.successList, function(a) {
						return !(a.name in h)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
				var i, h = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				if (this.settings.unhighlight) for (i = 0; h[i]; i++) this.settings.unhighlight.call(this, h[i], this.settings.errorClass, "");
				else h.removeClass(this.settings.errorClass)
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(a) {
				var i, h = 0;
				for (i in a) h++;
				return h
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (e) {}
			},
			findLastActive: function() {
				var h = this.lastActive;
				return h && 1 === a.grep(this.errorList, function(n) {
					return n.element.name === h.name
				}).length && h
			},
			elements: function() {
				var h = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
					return !this.name && h.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !h.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
				})
			},
			clean: function(h) {
				return a(h)[0]
			},
			errors: function() {
				var h = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + h, this.errorContext)
			},
			reset: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function(h) {
				var c, g = a(h),
					v = h.type;
				return "radio" === v || "checkbox" === v ? this.findByName(h.name).filter(":checked").val() : "number" === v && "undefined" != typeof h.validity ? h.validity.badInput ? !1 : g.val() : (c = g.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function(h) {
				h = this.validationTargetFor(this.clean(h));
				var c, g, v, b = a(h).rules(),
					y = a.map(b, function(n, i) {
						return i
					}).length,
					C = !1,
					w = this.elementValue(h);
				for (g in b) {
					v = {
						method: g,
						parameters: b[g]
					};
					try {
						if (c = a.validator.methods[g].call(this, w, h, v.parameters), "dependency-mismatch" === c && 1 === y) {
							C = !0;
							continue
						}
						if (C = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(h)));
						if (!c) return this.formatAndAdd(h, v), !1
					} catch (e) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + h.id + ", check the '" + v.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + h.id + ", check the '" + v.method + "' method."), e
					}
				}
				if (!C) return this.objectLength(b) && this.successList.push(h), !0
			},
			customDataMessage: function(h, c) {
				return a(h).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(h).data("msg")
			},
			customMessage: function(a, h) {
				var m = this.settings.messages[a];
				return m && (m.constructor === String ? m : m[h])
			},
			findDefined: function() {
				for (var i = 0; i < arguments.length; i++) if (void 0 !== arguments[i]) return arguments[i];
				return void 0
			},
			defaultMessage: function(h, c) {
				return this.findDefined(this.customMessage(h.name, c), this.customDataMessage(h, c), !this.settings.ignoreTitle && h.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + h.name + "</strong>")
			},
			formatAndAdd: function(h, c) {
				var g = this.defaultMessage(h, c.method),
					v = /\$?\{(\d+)\}/g;
				"function" == typeof g ? g = g.call(this, c.parameters, h) : v.test(g) && (g = a.validator.format(g.replace(v, "{$1}"), c.parameters)), this.errorList.push({
					message: g,
					element: h,
					method: c.method
				}), this.errorMap[h.name] = g, this.submitted[h.name] = g
			},
			addWrapper: function(a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function() {
				var i, a, h;
				for (i = 0; this.errorList[i]; i++) h = this.errorList[i], this.settings.highlight && this.settings.highlight.call(this, h.element, this.settings.errorClass, this.settings.validClass), this.showLabel(h.element, h.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
				if (this.settings.unhighlight) for (i = 0, a = this.validElements(); a[i]; i++) this.settings.unhighlight.call(this, a[i], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return a(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(h, c) {
				var g, v, b, y = this.errorsFor(h),
					C = this.idOrName(h),
					w = a(h).attr("aria-describedby");
				y.length ? (y.removeClass(this.settings.validClass).addClass(this.settings.errorClass), y.html(c)) : (y = a("<" + this.settings.errorElement + ">").attr("id", C + "-error").addClass(this.settings.errorClass).html(c || ""), g = y, this.settings.wrapper && (g = y.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(g) : this.settings.errorPlacement ? this.settings.errorPlacement(g, a(h)) : g.insertAfter(h), y.is("label") ? y.attr("for", C) : 0 === y.parents("label[for='" + C + "']").length && (b = y.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), w ? w.match(new RegExp("\\b" + b + "\\b")) || (w += " " + b) : w = b, a(h).attr("aria-describedby", w), v = this.groups[h.name], v && a.each(this.groups, function(h, c) {
					c === v && a("[name='" + h + "']", this.currentForm).attr("aria-describedby", y.attr("id"))
				}))), !c && this.settings.success && (y.text(""), "string" == typeof this.settings.success ? y.addClass(this.settings.success) : this.settings.success(y, h)), this.toShow = this.toShow.add(y)
			},
			errorsFor: function(h) {
				var c = this.idOrName(h),
					g = a(h).attr("aria-describedby"),
					v = "label[for='" + c + "'], label[for='" + c + "'] *";
				return g && (v = v + ", #" + g.replace(/\s+/g, ", #")), this.errors().filter(v)
			},
			idOrName: function(a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function(h) {
				return this.checkable(h) && (h = this.findByName(h.name)), a(h).not(this.settings.ignore)[0]
			},
			checkable: function(a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function(h) {
				return a(this.currentForm).find("[name='" + h + "']")
			},
			getLength: function(h, c) {
				switch (c.nodeName.toLowerCase()) {
				case "select":
					return a("option:selected", c).length;
				case "input":
					if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return h.length
			},
			depend: function(a, h) {
				return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, h) : !0
			},
			dependTypes: {
				"boolean": function(a) {
					return a
				},
				string: function(h, c) {
					return !!a(h, c.form).length
				},
				"function": function(a, h) {
					return a(h)
				}
			},
			optional: function(h) {
				var c = this.elementValue(h);
				return !a.validator.methods.required.call(this, c, h) && "dependency-mismatch"
			},
			startRequest: function(a) {
				this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
			},
			stopRequest: function(h, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[h.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(h) {
				return a.data(h, "previousValue") || a.data(h, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(h, "remote")
				})
			},
			destroy: function() {
				this.resetForm(), a(this.currentForm).off(".validate").removeData("validator")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(h, c) {
			h.constructor === String ? this.classRuleSettings[h] = c : a.extend(this.classRuleSettings, h)
		},
		classRules: function(h) {
			var c = {},
				g = a(h).attr("class");
			return g && a.each(g.split(" "), function() {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		normalizeAttributeRule: function(a, h, c, g) {
			/min|max/.test(c) && (null === h || /number|range|text/.test(h)) && (g = Number(g), isNaN(g) && (g = void 0)), g || 0 === g ? a[c] = g : h === c && "range" !== h && (a[c] = !0)
		},
		attributeRules: function(h) {
			var c, g, v = {},
				b = a(h),
				y = h.getAttribute("type");
			for (c in a.validator.methods)"required" === c ? (g = h.getAttribute(c), "" === g && (g = !0), g = !! g) : g = b.attr(c), this.normalizeAttributeRule(v, y, c, g);
			return v.maxlength && /-1|2147483647|524288/.test(v.maxlength) && delete v.maxlength, v
		},
		dataRules: function(h) {
			var c, g, v = {},
				b = a(h),
				y = h.getAttribute("type");
			for (c in a.validator.methods) g = b.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(v, y, c, g);
			return v
		},
		staticRules: function(h) {
			var c = {},
				g = a.data(h.form, "validator");
			return g.settings.rules && (c = a.validator.normalizeRule(g.settings.rules[h.name]) || {}), c
		},
		normalizeRules: function(h, c) {
			return a.each(h, function(g, v) {
				if (v === !1) return void delete h[g];
				if (v.param || v.depends) {
					var b = !0;
					switch (typeof v.depends) {
					case "string":
						b = !! a(v.depends, c.form).length;
						break;
					case "function":
						b = v.depends.call(c, c)
					}
					b ? h[g] = void 0 !== v.param ? v.param : !0 : delete h[g]
				}
			}), a.each(h, function(g, v) {
				h[g] = a.isFunction(v) ? v(c) : v
			}), a.each(["minlength", "maxlength"], function() {
				h[this] && (h[this] = Number(h[this]))
			}), a.each(["rangelength", "range"], function() {
				var c;
				h[this] && (a.isArray(h[this]) ? h[this] = [Number(h[this][0]), Number(h[this][1])] : "string" == typeof h[this] && (c = h[this].replace(/[\[\]]/g, "").split(/[\s,]+/), h[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != h.min && null != h.max && (h.range = [h.min, h.max], delete h.min, delete h.max), null != h.minlength && null != h.maxlength && (h.rangelength = [h.minlength, h.maxlength], delete h.minlength, delete h.maxlength)), h
		},
		normalizeRule: function(h) {
			if ("string" == typeof h) {
				var c = {};
				a.each(h.split(/\s/), function() {
					c[this] = !0
				}), h = c
			}
			return h
		},
		addMethod: function(h, c, g) {
			a.validator.methods[h] = c, a.validator.messages[h] = void 0 !== g ? g : a.validator.messages[h], c.length < 3 && a.validator.addClassRules(h, a.validator.normalizeRule(h))
		},
		methods: {
			required: function(h, c, g) {
				if (!this.depend(g, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var v = a(c).val();
					return v && v.length > 0
				}
				return this.checkable(c) ? this.getLength(h, c) > 0 : h.length > 0
			},
			email: function(a, h) {
				return this.optional(h) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function(a, h) {
				return this.optional(h) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)(?:\.(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)*(?:\.(?:[a-z¡-￿]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
			},
			date: function(a, h) {
				return this.optional(h) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function(a, h) {
				return this.optional(h) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function(a, h) {
				return this.optional(h) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function(a, h) {
				return this.optional(h) || /^\d+$/.test(a)
			},
			creditcard: function(a, h) {
				if (this.optional(h)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(a)) return !1;
				var n, c, g = 0,
					v = 0,
					b = !1;
				if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
				for (n = a.length - 1; n >= 0; n--) c = a.charAt(n), v = parseInt(c, 10), b && (v *= 2) > 9 && (v -= 9), g += v, b = !b;
				return g % 10 === 0
			},
			minlength: function(h, c, g) {
				var v = a.isArray(h) ? h.length : this.getLength(h, c);
				return this.optional(c) || v >= g
			},
			maxlength: function(h, c, g) {
				var v = a.isArray(h) ? h.length : this.getLength(h, c);
				return this.optional(c) || g >= v
			},
			rangelength: function(h, c, g) {
				var v = a.isArray(h) ? h.length : this.getLength(h, c);
				return this.optional(c) || v >= g[0] && v <= g[1]
			},
			min: function(a, h, c) {
				return this.optional(h) || a >= c
			},
			max: function(a, h, c) {
				return this.optional(h) || c >= a
			},
			range: function(a, h, c) {
				return this.optional(h) || a >= c[0] && a <= c[1]
			},
			equalTo: function(h, c, g) {
				var v = a(g);
				return this.settings.onfocusout && v.off(".validate-equalTo").on("blur.validate-equalTo", function() {
					a(c).valid()
				}), h === v.val()
			},
			remote: function(h, c, g) {
				if (this.optional(c)) return "dependency-mismatch";
				var v, b, y = this.previousValue(c);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), y.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = y.message, g = "string" == typeof g && {
					url: g
				} || g, y.old === h ? y.valid : (y.old = h, v = this, this.startRequest(c), b = {}, b[c.name] = h, a.ajax(a.extend(!0, {
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: b,
					context: v.currentForm,
					success: function(g) {
						var b, C, w, L = g === !0 || "true" === g;
						v.settings.messages[c.name].remote = y.originalMessage, L ? (w = v.formSubmitted, v.prepareElement(c), v.formSubmitted = w, v.successList.push(c), delete v.invalid[c.name], v.showErrors()) : (b = {}, C = g || v.defaultMessage(c, "remote"), b[c.name] = y.message = a.isFunction(C) ? C(h) : C, v.invalid[c.name] = !0, v.showErrors(b)), y.valid = L, v.stopRequest(c, L)
					}
				}, g)), "pending")
			}
		}
	});
	var h, c = {};
	a.ajaxPrefilter ? a.ajaxPrefilter(function(a, h, g) {
		var port = a.port;
		"abort" === a.mode && (c[port] && c[port].abort(), c[port] = g)
	}) : (h = a.ajax, a.ajax = function(g) {
		var v = ("mode" in g ? g : a.ajaxSettings).mode,
			port = ("port" in g ? g : a.ajaxSettings).port;
		return "abort" === v ? (c[port] && c[port].abort(), c[port] = h.apply(this, arguments), c[port]) : h.apply(this, arguments)
	})
}); /*!common/components/validate/additional-methods.js*/
;
define("common/components/validate/additional-methods", ["require", "exports", "module", "dep/jquery-validation/dist/jquery.validate"], function(require) {
	require("dep/jquery-validation/dist/jquery.validate"), $.validator.defaults.errorElement = "span", $.validator.defaults.ignore = "", $.validator.defaults.onfocusout = function(F) {
		("TEXTAREA" === F.tagName || "INPUT" === F.tagName && "password" !== F.type) && (F.value = $.trim(F.value)), this.checkable(F) || !(F.name in this.submitted) && this.optional(F) || this.element(F)
	}, jQuery.validator.addMethod("truename", function(F, a) {
		var D = /^([a-zA-Z ]+|[一-龥]+)$/;
		return this.optional(a) || D.test(F)
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸ç®€ç§°"), jQuery.validator.addMethod("specialchar", function(F, a) {
		F = $.trim(F);
		var D = /^([一-龥a-zA-Z0-9])/;
		return this.optional(a) || D.test(F)
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸ç®€ç§°"), jQuery.validator.addMethod("newSpecialChar", function(F, a) {
		var D = new RegExp("[`~!@$^&*()=|{}'Â·:;',\\[\\]<>/?~ï¼@ï¿¥â€¦â€¦&*ï¼ˆï¼‰â€”â€”|{}ã€ã€‘â€˜ï¼›ï¼šâ€â€œ'ã€‚ï¼Œã€ï¼Ÿ]");
		return this.optional(a) || !D.test(F)
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸ç®€ç§°"), $.validator.addMethod("maxLen", function(F, a, D) {
		var h = $.trim($(a).val());
		return this.optional(a) || h.length <= D
	}), $.validator.addMethod("txtMaxLength", function(F, a, D) {
		var h = $("<div></div>").html($(a).val()),
			v = h.text();
		return this.optional(a) || v.length <= D
	}), jQuery.validator.addMethod("positionspecialchar", function(F, a) {
		var D = /^([Â·`~!@$^&':;,?~ï¼â€¦â€¦&ï¼›ï¼šã€‚ï¼Œã€ï¼Ÿ=])/;
		return this.optional(a) || !D.test(F)
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸ç®€ç§°"), jQuery.validator.addMethod("ievaluean", function(F, a) {
		var D = new RegExp("15å­—ä»¥å†…å¯¹é¢è¯•çš„ç®€å•æè¿°å“¦");
		return this.optional(a) || !D.test(F)
	}, "è¯·å¡«å†™çŸ­è¯„"), jQuery.validator.addMethod("checkCity", function(F, a) {
		var D = /^[一-龥]{0,}$/;
		return this.optional(a) || D.test(F)
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸æ‰€åœ¨åŸŽå¸‚ï¼Œå¦‚ï¼šåŒ—äº¬"), jQuery.validator.addMethod("checkNum", function(F, a) {
		var D = /^[0-9]*$/;
		return this.optional(a) || !D.test(F)
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„ä¸€å¥è¯ä»‹ç»"), jQuery.validator.addMethod("checkUrl", function(F, a) {
		F = $.trim(F);
		var D = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])))\.)+(([a-z]|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|[ -퟿豈-﷏ﷰ-￯])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[-]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
		return F != $(a).attr("placeholder") ? ("http://" != F.substring(0, 7) && "https://" != F.substring(0, 8) && (F = "http://" + F), this.optional(a) || D.test(F)) : !1
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸ç½‘å€"), jQuery.validator.addMethod("checkUrlNot", function(F, a) {
		F = $.trim(F);
		var D = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])))\.)+(([a-z]|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|[ -퟿豈-﷏ﷰ-￯])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[-]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
		return F != $(a).attr("placeholder") ? ("http://" != F.substring(0, 7) && "https://" != F.substring(0, 8) && (F = "http://" + F), this.optional(a) || D.test(F)) : !0
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸ç½‘å€"), jQuery.validator.addMethod("checkUrlNew", function(F, a) {
		F = $.trim(F);
		var D = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])))\.)+(([a-z]|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|[ -퟿豈-﷏ﷰ-￯])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[-]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
			h = /\.[\w]+[一-龥]+/i;
		return F != $(a).attr("placeholder") ? ("http://" != F.substring(0, 7) && "https://" != F.substring(0, 8) && (F = "http://" + F), this.optional(a) || !h.test(F) && D.test(F)) : !0
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸ç½‘å€"), jQuery.validator.addMethod("rangeLen", function(F, a, D) {
		if (F != $(a).attr("placeholder")) {
			var h = $.isArray(F) ? F.length : this.getLength($.trim(F), a);
			return this.optional(a) || h >= D[0] && h <= D[1]
		}
		return !1
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„èŒƒå›´"), jQuery.validator.addMethod("rangeLenNew", function(F, a, D) {
		var h = $("<div></div>").html($(a).val()),
			F = h.text();
		if (F != $(a).attr("placeholder")) {
			var v = $.isArray(F) ? F.length : this.getLength($.trim(F), a);
			return this.optional(a) || v >= D[0] && v <= D[1]
		}
		return !1
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„èŒƒå›´"), jQuery.validator.addMethod("salaryRange", function() {
		return "" != $("#salaryMin").val() && $("#salaryMin").val() != $("#salaryMin").attr("placeholder") && "" != $("#salaryMax").val() && $("#salaryMax").val() != $("#salaryMax").attr("placeholder") && parseInt($.trim($("#salaryMax").val())) / parseInt($.trim($("#salaryMin").val())) > 2 ? !1 : !0
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„æœˆè–ªèŒƒå›´"), jQuery.validator.addMethod("Dvalue", function() {
		return "" != $("#salaryMin").val() && $("#salaryMin").val() != $("#salaryMin").attr("placeholder") && "" != $("#salaryMax").val() && $("#salaryMax").val() != $("#salaryMax").attr("placeholder") ? parseInt($.trim($("#salaryMax").val())) > parseInt($.trim($("#salaryMin").val())) ? !0 : !1 : !0
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„æœˆè–ªèŒƒå›´"), jQuery.validator.addMethod("isTel", function(F) {
		for (var a = F.split(","), D = !0, h = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^[0-9]{3,4}\-[0-9]{7,8}\-[0-9]{3,5}$)|(^[0-9]{7,8}\-[0-9]{3,5}$)|(^\([0-9]{3,4}\)[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{7,8}\-[0-9]{3,5}$)|(^1[3,4,5,7,8]{1}[0-9]{9}$)/, i = 0; i < a.length; i++) h.test(a[i]) || (D = !1);
		return D ? !0 : !1
	}, "è¯·è¾“å…¥æ­£ç¡®çš„æ‰‹æœºå·æˆ–åº§æœºå·ï¼Œåº§æœºæ ¼å¼å¦‚010-62555255æˆ–010-6255255-åˆ†æœºå·ï¼Œå¤šä¸ªç”µè¯ç”¨è‹±æ–‡é€—å·éš”å¼€"), jQuery.validator.addMethod("isMobile", function(F) {
		var a = /^[\d\+\-]+$/;
		return a.test(F) ? !0 : !1
	}, "è¯·è¾“å…¥æ­£ç¡®çš„æ‰‹æœºå·"), jQuery.validator.addMethod("rangeLenStr", function(F, a, D) {
		for (var h = $.trim(F).length, v = 0, i = 0; h > i; i++) F.charCodeAt(i) < 27 || F.charCodeAt(i) > 126 ? v += 2 : v++;
		return v <= 2 * D[1] && v >= 2 * D[0] || 0 == v ? !0 : !1
	}, "è¯·è¾“å…¥1-40ä¸ªå­—ç¬¦"), jQuery.validator.addMethod("maxlenStr", function(F, a, D) {
		for (var h = F.length, $ = 0, i = 0; h > i; i++) F.charCodeAt(i) < 27 || F.charCodeAt(i) > 126 ? $ += 2 : $++;
		return 2 * D >= $ ? !0 : !1
	}, "è¯·è¾“å…¥100å­—ä»¥å†…çš„å­—ç¬¦"), jQuery.validator.addMethod("moreEmail", function(F) {
		F = F.replace("ï¼›", ";").split(";"), F = jQuery.grep(F, function(n) {
			return "" !== $.trim(n) && null != n
		});
		var a = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[ -퟿豈-﷏ﷰ-￯])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[ -퟿豈-﷏ﷰ-￯])+)*)|((")(((( |	)*(
))?( |	)+)?(([--]|!|[#-[]|[]-~]|[ -퟿豈-﷏ﷰ-￯])|(\\([-	
-]|[ -퟿豈-﷏ﷰ-￯]))))*((( |	)*(
))?( |	)+)?(")))@((([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|\d|[ -퟿豈-﷏ﷰ-￯])))\.)+(([a-z]|[ -퟿豈-﷏ﷰ-￯])|(([a-z]|[ -퟿豈-﷏ﷰ-￯])([a-z]|\d|-|\.|_|~|[ -퟿豈-﷏ﷰ-￯])*([a-z]|[ -퟿豈-﷏ﷰ-￯])))$/i,
			D = !0;
		if (F.length > 2) D = !1;
		else for (var i = 0; i < F.length; i++) a.test($.trim(F[i])) || (D = !1);
		return D ? !0 : !1
	}, "è¯·è¾“å…¥æœ‰æ•ˆçš„é‚®ä»¶åœ°å€ï¼Œæœ€å¤š2ä¸ªï¼Œå¹¶ç”¨è‹±æ–‡;éš”å¼€"), jQuery.validator.addMethod("checkExceptSharp", function(F, a) {
		var D = /^[一-龥a\d\w#\'\s]+$/;
		return this.optional(a) || D.test(F)
	}, 'ä¸èƒ½è¾“å…¥é™¤åŽ»"#"ä¹‹å¤–çš„ç‰¹æ®Šå­—ç¬¦'), jQuery.validator.addMethod("tinymceLength", function(F, a, D) {
		var h = $(a),
			v = $.trim(h.text().replace(/&nbsp;/g, "")),
			c = getStrLen(v);
		return this.optional(a) || 2 * D[0] <= c && c <= 2 * D[1]
	}, jQuery.validator.format("è¯·è¾“å…¥é•¿åº¦ä¸º {0} - {1} çš„å­—é•¿")), jQuery.validator.addMethod("checkMoney", function(F, a) {
		var D = /^([1-9]\d*|0)(\.\d{1,2})?$/;
		return this.optional(a) || D.test(F)
	}, "è¯·è¾“å…¥æ­£ç¡®é‡‘é¢")
}); /*!mycenter/modules/myresume/myresume/main.js*/
;
define("mycenter/modules/myresume/myresume/main", ["require", "exports", "module", "mycenter/modules/common/js/libs/jquery.lib", "mycenter/modules/common/js/common", "mycenter/modules/common/js/ajaxfileupload", "mycenter/modules/common/js/libs/json.min", "mycenter/modules/common/js/jquery-migrate-1.1.1", "mycenter/modules/common/js/jquery-ui-1.8.custom.min", "mycenter/modules/common/js/jquery.cropzoom", "mycenter/modules/common/js/libs/components", "dep/jquery-colorbox/jquery.colorbox", "common/components/jquery-validate/jquery-validate", "common/components/validate/additional-methods", "common/widgets/plat/exposure"], function(require, exports, module) {
	function handleFrames() {
		try {
			$.each(Array.prototype.slice.call(window.frames), function(a, c) {
				c.document.body.onclick = function() {
					c.top.document.body.click()
				}
			})
		} catch (e) {}
	}
	function validateChange(o) {
		var a = $(o),
			c = a.parents("form").validate().element(a);
		c && a.parent().css("margin-bottom", "0")
	}
	function img_check(o, action_url, id) {
		var _obj = $(o),
			obj = $("#" + id),
			oNext = obj.next(),
			oPrev = obj.prev();
		this.AllowExt = ".jpg,.gif,.jpeg,.png,.pjpeg", this.FileExt = obj.val().substr(obj.val().lastIndexOf(".")).toLowerCase(), 0 != this.AllowExt && -1 == this.AllowExt.indexOf(this.FileExt) ? errorTips("è¯·ä¸Šä¼ jpgã€gifã€pngæ ¼å¼å¤´åƒï¼Œå¤§å°ä¸è¶…è¿‡2M") : ($("#" + id + "_error").text("").hide(), $.ajaxFileUpload({
			url: action_url,
			secureuri: !1,
			fileElementId: id,
			data: {
				companyLogo: obj.val(),
				workId: oMoudle.workId
			},
			dataType: "text",
			success: function(rs) {
				oMoudle.workId = "";
				var data = eval("(" + rs + ")");
				if (data.success) {
					var imgSrc = GLOBAL_DOMAIN.ctx + "/" + data.content;
					oPrev.removeClass("active").addClass("up"), oNext.css({
						width: 120,
						height: 120
					}).attr("src", imgSrc), $("#selfDescription").find(".mr_headimg").attr("src", imgSrc)
				} else errorTips("ä¸Šä¼ å¤±è´¥ï¼Œè¯·é‡æ–°ä¸Šä¼ ", "ä¸Šä¼ å¤´åƒ")
			},
			error: function() {
				errorTips("ä¸Šä¼ å¤±è´¥ï¼Œè¯·é‡æ–°ä¸Šä¼ ", "ä¸Šä¼ å¤´åƒ")
			}
		}))
	}
	function errorTips(a, c) {
		$.colorbox({
			html: '<div id="uploadFile" class="popup"><table width="100%"><tr><td align="center"><h4 class="error_msg">' + a + '</h4></td></tr><tr><td align="center"><a href="javascript:;" class="btn_s">ç¡®&nbsp;å®š</a></td></tr></table></div>',
			title: c ? c : "é”™è¯¯æç¤º"
		})
	}
	function file_check(obj, action_url, id) {
		if (2 == uploadFlag) return !1;
		uploadFlag = 2, $("#loadingImg").css("visibility", "visible");
		var obj = $("#" + id),
			userId = $("#userid").val();
		return this.AllowExt = ".doc,.docx,.pdf,.ppt,.pptx,.txt,.wps", this.FileExt = obj.val().substr(obj.val().lastIndexOf(".")).toLowerCase(), "" == obj.val() ? ($("#loadingImg").css("visibility", "hidden"), !1) : void(0 != this.AllowExt && -1 == this.AllowExt.indexOf(this.FileExt) ? (errorTips("åªæ”¯æŒwordã€pdfã€pptã€txtã€wpsæ ¼å¼æ–‡ä»¶ï¼Œè¯·é‡æ–°ä¸Šä¼ "), $("#resumeUpload").val(""), $("#loadingImg").css("visibility", "hidden"), uploadFlag = 1) : $.ajaxFileUpload({
			type: "POST",
			url: action_url,
			secureuri: !1,
			fileElementId: id,
			data: {
				userId: userId
			},
			dataType: "text",
			success: function(jsonStr) {
				uploadFlag = 1;
				var json = eval("(" + jsonStr + ")");
				if ($("#loadingImg").css("visibility", "hidden"), json.success) {
					$.ajax({
						url: GLOBAL_DOMAIN.ctx + "/mycenter/resume/setDefaultResume.json",
						type: "POST",
						data: {
							type: "0"
						}
					}).done(function(a) {
						a.success ? $("#default_resume").val("é»˜è®¤æŠ•é€’ï¼šé™„ä»¶ç®€åŽ†") : alert(a.msg || "è¯·åˆ·æ–°é‡è¯•")
					}), $(".mr_upload").hide(), $(".mr_uploaded .mr_up_main a").text(json.content.nearbyName).attr("title", "ä¸‹è½½" + json.content.nearbyName), $(".mr_uploaded .mr_up_main p").text(json.content.time);
					var isShowDefault = $("#isShowDefault");
					"0" == isShowDefault.val() ? $(".mr_uploaded .mr_set_default").hide() : $(".mr_uploaded .mr_set_default").show(), $(".mr_uploaded").show(), $.colorbox({
						inline: !0,
						href: $("div#uploadFileSuccess"),
						title: "ä¸Šä¼ é™„ä»¶ç®€åŽ†"
					})
				} else - 1 == json.code ? $.colorbox({
					inline: !0,
					href: $("div#fileResumeUpload"),
					title: "é™„ä»¶ç®€åŽ†ä¸Šä¼ å¤±è´¥"
				}) : -2 == json.code ? $.colorbox({
					inline: !0,
					href: $("div#fileResumeUploadSize"),
					title: "é™„ä»¶ç®€åŽ†ä¸Šä¼ å¤±è´¥"
				}) : (uploadFlag = 1, errorTips("ç®€åŽ†ä¸Šä¼ å¤±è´¥ï¼Œè¯·é‡æ–°ä¸Šä¼ "), $("#loadingImg").css("visibility", "hidden"))
			},
			error: function() {
				errorTips("ç®€åŽ†ä¸Šä¼ å¤±è´¥ï¼Œè¯·é‡æ–°ä¸Šä¼ "), $("#loadingImg").css("visibility", "hidden"), uploadFlag = 1, $(".btn_s").click(function() {
					window.location.reload()
				}), $("#colorbox").on("click", "#cboxClose", function() {
					"uploadFile" == $(this).siblings("#cboxLoadedContent").children("div").attr("id") && window.location.reload()
				})
			}
		}))
	}
	function getStrLen(a) {
		for (var i, c, _ = 0, i = 0; i < a.length; i++) c = a.charCodeAt(i), _ += isDbcCase(c) ? 1 : 2;
		return _
	}
	function isDbcCase(a) {
		return a >= 32 && 127 >= a ? !0 : a >= 65377 && 65439 >= a ? !0 : !1
	}
	function updateRatioRM(a, c) {
		var _ = a / 100 * 250,
			h = c / 100 * 250;
		$(".mr_solid").animate({
			width: _
		}), $(".mr_dashed").animate({
			width: h
		}), $(".mr_top .mr_bfb").text(a + "%")
	}
	function updateResumeTime(a) {
		$(".upResumeTime").text(a)
	}
	function initTitlePosition() {
		var a = parseInt($("#customBlock .cust_title").width()) / 2;
		$("#customBlock .cust_title").css("margin-left", -parseInt(.65 * a))
	}
	function switchResumeStatus(a, c, _) {
		$.colorbox.close(), $.ajax({
			url: GLOBAL_DOMAIN.ctx + "/mycenter/openMyResume.json",
			type: "POST",
			async: !1,
			data: {
				openStatus: a
			},
			dataType: "json"
		}).done(function(a) {
			clearTimeout(g);
			var h = $(".openresume_tip");
			if (1 == a.state) {
				h.hide();
				var v = $(".succ-fail");
				1 == a.content.data.openStatus ? (_.eq(0).attr("checked", "checked"), $(c).removeClass("toggle-off"), v.find("p").text("å·²å¼€å¯æœºä¼š+"), globals.isOpenResume = 1, v.show()) : (_.eq(1).attr("checked", "checked"), $(c).addClass("toggle-off"), v.find("p").text("å·²å…³é—­æœºä¼š+"), globals.isOpenResume = 0, v.show());
				var g = setTimeout(function() {
					v.stop().hide(), openFlag = !0
				}, 3e3)
			} else {
				if (405 == a.state) return $(".open_resume_notice").show(), !1;
				alert(a.message)
			}
		})
	}
	function getCountDays(a, c) {
		var _ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return (a - 0) % 4 == 0 && c - 0 == 2 ? 29 : _[c - 1]
	}
	function getEscapedHtml(a) {
		return $("<span>" + a + "</span>").html()
	}
	function revertEscapedHtml(a) {
		return $("<span>" + a + "</span>").text()
	}
	window.localStorage &&
	function() {
		var a = $('input[name="userid"]').val(),
			c = "ENABLE_" + a + "_PRIVACY_TIP";
		void 0 == window.localStorage[c] && (window.localStorage[c] = "true"), "false" == window.localStorage[c] ? $(".privacy_settings_tip").hide() : $(".privacy_settings_tip").show(), $(".privacy_settings_img, .privacy_settings_btn").on("click", function() {
			window.localStorage[c] = "false", window.location.href = "https://www.lagou.com/user/resumePrivacy.html"
		}), $(".privacy_settings_close").on("click", function() {
			window.localStorage[c] = "false", $(".privacy_settings_tip").hide()
		}), window.onbeforeunload = function() {
			window.localStorage[c] = "false"
		}, $(".privacy_settings").mouseenter(function() {
			$(".privacy_settings_tip").show()
		}), $(".privacy_settings").mouseleave(function() {
			"true" != window.localStorage[c] && $(".privacy_settings_tip").hide()
		})
	}(), require("mycenter/modules/common/js/libs/jquery.lib"), require("mycenter/modules/common/js/common"), require("mycenter/modules/common/js/ajaxfileupload"), require("mycenter/modules/common/js/libs/json.min"), require("mycenter/modules/common/js/jquery-migrate-1.1.1"), require("mycenter/modules/common/js/jquery-ui-1.8.custom.min"), require("mycenter/modules/common/js/jquery.cropzoom"), require("mycenter/modules/common/js/libs/components"), require("dep/jquery-colorbox/jquery.colorbox"), require("common/components/jquery-validate/jquery-validate"), require("common/components/validate/additional-methods");
	var exposure = require("common/widgets/plat/exposure").exposure,
		imageOld = "";
	$(window).on("message", function(e) {
		var a = e.origin || e.originalEvent.origin;
		if (0 === a.indexOf(window.location.protocol + "//www.lagou.com")) {
			var c = e.data || e.originalEvent.data;
			c && c.code && c.token && (window.X_Anti_Forge_Code = c.code, window.X_Anti_Forge_Token = c.token)
		}
	});
	var cutOK = "",
		projectTitle = $(".mr_jobe_list .l2 .projectTitle");
	projectTitle.each(function() {
		var a = $(this),
			c = a.width();
		a.find("span").css("left", c + 5)
	});
	var amountScore = parseInt($.trim($(".mr_bfb").text())),
		oMoudle = {
			workId: "",
			eduId: ""
		},
		oMoudleScore = {
			expectJobsScore: "",
			projectExpScore: "",
			workShowScore: "",
			skillScore: "",
			myRemarkScore: ""
		},
		oDelMoudle, oMdScore = {
			expectJobsScore: globals.expectJobsScore,
			skillScore: globals.skillScore,
			projectExpScore: globals.projectExperienceScore,
			workShowScore: globals.workShowScore,
			myRemarkScore: globals.myRemarkScore
		};
	$(function() {
		function a() {
			var a = $(".mr_job_des .mr_expjob_content"),
				r = /&nbsp;/g,
				c = $.trim(a.text()).replace(r, "");
			"" != c && $(".mr_job_des").removeClass("dn")
		}
		function c() {
			var a = $(".mr_sns a");
			a.eq(a.length - 1).addClass(), a.each(function() {
				{
					var a = $(this).data("sns"),
						c = $(this),
						_ = c.find("span");
					_.find("em")
				}
				switch (parseInt(a)) {
				case 1:
					var h = document.createTextNode("Twitter");
					c.addClass("sns1");
					break;
				case 2:
					var h = document.createTextNode("Dribbble");
					c.addClass("sns2");
					break;
				case 3:
					var h = document.createTextNode("Behance");
					c.addClass("sns3");
					break;
				case 4:
					var h = document.createTextNode("LinkedIn");
					c.addClass("sns4");
					break;
				case 5:
					var h = document.createTextNode("Quora");
					c.addClass("sns5");
					break;
				case 6:
					var h = document.createTextNode("Github");
					c.addClass("sns6");
					break;
				case 7:
					var h = document.createTextNode("çŸ¥ä¹Ž");
					c.addClass("sns7");
					break;
				case 8:
					var h = document.createTextNode("LOFTER");
					c.addClass("sns8");
					break;
				case 9:
					var h = document.createTextNode("UIä¸­å›½");
					c.addClass("sns9");
					break;
				case 10:
					var h = document.createTextNode("æ–°æµªå¾®åš");
					c.addClass("sns10");
					break;
				case 11:
					var h = document.createTextNode("SegmentFault");
					c.addClass("sns11");
					break;
				case 12:
					var h = document.createTextNode("StackoverFlow");
					c.addClass("sns12")
				}
				_.prepend($(h)).css("marginLeft", -(_.width() + 20) / 2 + "px")
			})
		}
		function _(a) {
			for (var c = 0, i = 0; i < a.length; i++) {
				var _ = a.charCodeAt(i);
				_ >= 1 && 126 >= _ || _ >= 65376 && 65439 >= _ ? c++ : c += 2
			}
			return c
		}
		function h(a, c) {
			for (var i = 0; i < a.length; i++) a[i] == c && (a.splice(i, 1), i--);
			return a
		}
		function v(a, c, _) {
			var h, v = $("#workExperience .list_show .mr_jobe_list"),
				k = $("#educationalBackground .list_show .mr_jobe_list"),
				w = $(".toggle");
			a ? 0 == v.length || 0 == k.length ? (h = "2", b(w, _, h)) : g(_) : 0 == k.length ? (h = "2", b(w, _, h)) : ($(".openresume_tip").hide(), g(_))
		}
		function g(a) {
			globals.isOpenResume = a ? "3" : "0"
		}
		function b(a, c, _) {
			switch ($(".openresume_tip").hide(), a.addClass("toggle-off"), $(".openresume_tip").hide(), globals.isOpenResume = _, _) {
			case "2":
				$(".unopen").show();
				break;
			case "3":
				$(".firstset").show()
			}
			globals.isFirstOpen = c;
			var h = a.find("input");
			h.eq(0).attr("checked", "checked")
		}
		function k(e) {
			return e.stopPropagation(), !1
		}
		function w(a, c, _, h) {
			if (y(), oDelMoudle.parent().parent().removeClass("md_flag").addClass("dn"), $("#" + c).addClass("dn"), "customBlock" != c) {
				switch (c) {
				case "expectJob":
					globals.hasExpectJobs = !1;
					break;
				case "skillsAssess":
					globals.hasSkillEvaluates = !1;
					break;
				case "selfDescription":
					globals.hasSelf = !1;
					break;
				case "worksShow":
					globals.hasWorkShows = !1
				}
				if (0 == _) {
					var v = parseInt($.trim($(".mr_bfb").text())),
						g = amountScore - v,
						b = parseInt(h.content.infoCompleteStatus.score);
					$(".mr_top .mr_bfb").text(b + "%"), amountScore = g + b, H(c, 1)
				} else H(c, 1)
			} else $("#customTitleName").val("");
			$(".hide_md").each(function() {
				var d = $(this).data("md");
				d == c && $(this).addClass("dn").removeClass("mr_hide")
			}), 9 == $(".md_flag").length ? $(".mr_module_add").addClass("dn") : $(".mr_module_add").removeClass("dn"), a.parents(".mr_md_del").remove()
		}
		function y() {
			switch (Q) {
			case "olinfoForm":
				$(".mr_p_info").show(), $("#olinfoForm .mr_info_edit").addClass("dn");
				break;
			case "addJobForm":
				$("#addJobForm .mr_cancel").trigger("click");
				break;
			case "upJobForm":
				$("#currentUpJobForm .mr_cancel").trigger("click");
				break;
			case "addEduForm":
				$("#addEduForm .mr_cancel").trigger("click");
				break;
			case "upEduForm":
				$("#upEduForm .mr_cancel").trigger("click");
				break;
			case "addProForm":
				$("#addProForm .mr_cancel").trigger("click");
				break;
			case "upProForm":
				$("#currentUpProForm .mr_cancel").trigger("click");
				break;
			case "addWorksShowUploadForm":
				$("#addWorksShowUploadForm .mr_cancel").trigger("click");
				break;
			case "upWorksShowUploadForm":
				$("#upWorksShowUploadForm .mr_cancel").trigger("click");
				break;
			case "upSelfForm":
				$("#upSelfForm .mr_cancel").trigger("click");
				break;
			case "upExpJobForm":
				$("#upExpJobForm .mr_cancel").trigger("click");
				break;
			case "upCustomForm":
				$("#upCustomForm .mr_cancel").trigger("click");
				break;
			case "updateSkill":
				$("#skillsAssess .mr_moudle_content .mr_cancel").trigger("click");
				break;
			default:
				return
			}
			z(), Q = "", K = !1
		}
		function C(a, c) {
			1 == c && y();
			var _ = $("#" + a).offset();
			switch (a) {
			case "expectJob":
				1 == c && $("#expectJob .mr_head_r").trigger("click");
				break;
			case "workExperience":
				1 == c && $("#workExperience .mr_head_r").trigger("click");
				break;
			case "projectExperience":
				1 == c && $("#projectExperience .mr_head_r").trigger("click");
				break;
			case "educationalBackground":
				1 == c && $("#educationalBackground .mr_head_r").trigger("click");
			case "selfDescription":
				1 == c && $("#selfDescription .mr_head_r").trigger("click");
				break;
			case "worksShow":
				1 == c && $("#worksShow .mr_head_r").trigger("click");
				break;
			case "customBlock":
				1 == c && $("#customBlock .mr_head_r").trigger("click");
				break;
			case "skillsAssess":
				1 == c && $("#skillsAssess .mr_head_r").trigger("click");
				break;
			case "baseinfo":
				1 == c && $("#baseinfo .mr_head_r").trigger("click");
				break;
			default:
				return
			}
			$("body,html").animate({
				scrollTop: _.top
			}, 400, function() {
				$("#" + a).animate({
					borderColor: "#e46a4a"
				}, 300, function() {
					$(this).animate({
						borderColor: "transparent"
					})
				})
			})
		}
		function j(a, c) {
			if (!a) {
				$(".openresume_tip").hide(), $(".unopen").show(), $(".toggle").addClass("toggle-off"), globals.isOpenResume = "2", globals.isFirstOpen = c;
				var _ = $(".toggle").find("input");
				_.eq(0).attr("checked", "checked")
			}
		}
		function S(a) {
			$("#addJobForm").submit(function() {
				a.sync()
			}).validate({
				rules: lt.rules,
				messages: lt.messages,
				errorPlacement: function(a, c) {
					"hidden" == c.attr("type") ? ($(c).parent().css("margin-bottom", "20px"), a.appendTo($(c).parent())) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
				},
				submitHandler: function(c) {
					var _ = globals.resumeId,
						h = $("img.logo_u", c).attr("src"),
						v = $('input[name="companyName"]', c).val(),
						g = $('input[name="positionName"]', c).val(),
						b = $('input[name="startTime"]', c).val(),
						k = $('input[name="endTime"]', c).val(),
						w = a.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"),
						y = globals.token,
						C = !1;
					if ("" != $.trim(h)) {
						C = !0;
						for (var j = h.split("/"), S = [], i = 0, F = 3; F < j.length; F++, i++) S[i] = j[F];
						h = S.join("/")
					}
					$(c).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0);
					var L = $(c).find(":submit");
					$.ajax({
						url: GLOBAL_DOMAIN.ctx + "/workExperience/save.json",
						type: "post",
						data: {
							id: _,
							companyLogo: h,
							companyName: v,
							positionName: g,
							startDate: b,
							endDate: k,
							workContent: w,
							resubmitToken: y,
							isUploadLogo: C
						},
						dataType: "json"
					}).done(function(_) {
						if (globals.token = _.resubmitToken, _.success) {
							_.content.companyLogo ? L.parents("form").siblings(".mr_jobe_list").find(".li").find("img").attr("src", _.content.companyLogo).show() : L.parents("form").siblings(".mr_jobe_list").find(".li").find("img").hide(), L.parents("form").find(".logo_u").attr("src", _.content.companyLogo);
							var h = _.content.isOpenMyResume,
								v = $(".toggle"),
								g = _.content.firstOpen;
							globals.isFirstOpen = g, h && ($(".openresume_tip").hide(), globals.isFirstOpen ? (globals.isOpenResume = "3", $(".firstset").show()) : globals.isOpenResume = v.hasClass("toggle-off") ? "0" : "1"), U(_), T(), $("img.logo_u", c).css({
								width: 0,
								height: 0
							}), $("div.up", c).removeClass("up"), updateResumeTime(_.content.refreshTime);
							var rt = _.content.infoCompleteStatus.score,
								b = parseInt($.trim($(".mr_bfb").text())),
								k = amountScore - b + rt;
							updateRatioRM(rt, k), lt.obj.find(".mr_head_r").trigger("click");
							var w = _.content.workExperiences;
							I(w);
							var y = lt.obj.find(".mr_empty_add");
							y.not(":hidden") && y.hide();
							var C = $(".mr_module .flag_work");
							C.is(":hidden") || C.addClass("dn"), a.setContent(""), ft.reset(), ht.reset()
						} else $(c).find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (_.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>");
						$(c).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
					})
				}
			})
		}
		function T() {
			var a = $("#addJobForm");
			$("#companyLogo", a).val(""), $("img.logo_u", a).attr("src", ""), $("#companyName", a).val(""), $("#positionName", a).val(""), $("#startTime", a).val(""), $(".mr_btn", a).val(""), $("#endTime", a).val(""), $("#jobContent", a).val("")
		}
		function F() {
			$("#currentUpJobForm").submit(function() {
				G.sync()
			}).validate({
				rules: lt.rules,
				messages: lt.messages,
				errorPlacement: function(a, c) {
					"hidden" == c.attr("type") ? ($(c).parent().css("margin-bottom", "20px"), a.appendTo($(c).parent())) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
				},
				submitHandler: function(a) {
					var c = globals.token,
						_ = globals.resumeId,
						h = $("#currentUpJobForm > .mr_expid").val(),
						v = $("img.logo_u", a).attr("src"),
						g = $('input[name="companyName"]', a).val(),
						b = $('input[name="positionName"]', a).val(),
						k = $('input[name="startTime"]', a).val(),
						w = $('input[name="endTime"]', a).val(),
						y = G.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"),
						C = $("input[name='companyLogoHide']", a).val(),
						j = !1;
					if (C != v) {
						j = !0;
						for (var S = v.split("/"), T = [], i = 0, F = 3; F < S.length; F++, i++) T[i] = S[F];
						v = T.join("/")
					} else {
						for (var S = v.split("/"), T = [], i = 0, F = 3; F < S.length; F++, i++) T[i] = S[F];
						v = T.join("/")
					}
					$(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), $.ajax({
						url: GLOBAL_DOMAIN.ctx + "/workExperience/save.json",
						type: "post",
						data: {
							id: _,
							companyLogo: v,
							companyName: g,
							positionName: b,
							startDate: k,
							endDate: w,
							workContent: y,
							resubmitToken: c,
							expid: h,
							isUploadLogo: j
						},
						dataType: "json"
					}).done(function(c) {
						if (globals.token = c.resubmitToken, c.success) {
							U(c), updateResumeTime(c.content.refreshTime);
							var rt = c.content.infoCompleteStatus.score,
								_ = parseInt($.trim($(".mr_bfb").text())),
								h = amountScore - _ + rt;
							updateRatioRM(rt, h), $(".mr_cancel", a).trigger("click");
							var v = c.content.workExperiences;
							I(v)
						} else $(a).find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (c.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>");
						$(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
					})
				}
			})
		}
		function I(a) {
			var c = (lt.obj.find(".list_show"), lt.obj.find(".list_show .updatejob_wrap .mr_jobe_list")),
				_ = lt.obj.find(".list_show .new_addjob_hide .mr_jobe_list"),
				h = lt.obj.find(".list_show .new_addjob_hide .jobExpForm");
			if (a.length > c.length) {
				for (var v = [], g = 0; g < a.length; g++) v.push(a[g].id);
				for (var b = v[0], i = 0; i < v.length; i++) b < v[i] && (b = v[i]);
				var k = v.indexOf(b);
				a[k].companyLogo ? $(_).find("img").attr("src", GLOBAL_DOMAIN.lgsctx + "/" + a[k].companyLogo).show() : $(_).find("img").hide(), $(_).find("h4").html(a[k].companyName), $(_).find("h4").next().html(a[k].positionName), $(_).find(".mr_edit").attr({
					"data-expid": a[k].id,
					"data-logo": a[k].companyLogo,
					"data-comname": a[k].companyName,
					"data-posname": a[k].positionName,
					"data-startime": a[k].startDate,
					"data-endtime": a[k].endDate,
					"data-content": a[k].workContent
				}), $(_).find(".mr_content_r span:eq(0)").text(a[k].startDate), $(_).find(".mr_content_r span:eq(2)").text(a[k].endDate), a[k].workContent ? ($(_).find(".mr_content_m").show(), $(_).find(".mr_content_m").html(a[k].workContent)) : $(_).find(".mr_content_m").hide(), $(h).find(".mr_expid").val(a[k].id), $(h).find(".mr_sta_time .mr_btn").val(a[k].startDate), $(h).find(".mr_sta_time .startTime").val(a[k].startDate), $(h).find(".mr_end_time .mr_btn").val(a[k].endDate), $(h).find(".mr_end_time .endTime").val(a[k].endDate), a[k].companyLogo && $(h).find('input[name="companyLogoHide"]').val(GLOBAL_DOMAIN.lgsctx + "/" + a[k].companyLogo), k > 0 ? ($(c[k - 1]).next().after($(".new_addjob_hide").html()), $(c[k - 1]).next().next().next().find(".companyName").val(a[k].companyName), $(c[k - 1]).next().next().next().find(".autoPosition").val(a[k].positionName), $(c[k - 1]).next().next().next().find("script").attr("id", "ueditor_" + a[k].id), $(c[k - 1]).next().next().next().find(".mr_upload_logo .companyLogo_new_hide").attr("id", "upcompanyLogo_" + a[k].id)) : (lt.obj.find(".list_show .updatejob_wrap").prepend($(".new_addjob_hide").html()), $(lt.obj.find(".list_show .updatejob_wrap").find(".jobExpForm")[0]).find(".companyName").val(a[k].companyName), $(lt.obj.find(".list_show .updatejob_wrap").find(".jobExpForm")[0]).find(".autoPosition").val(a[k].positionName), $(lt.obj.find(".list_show .updatejob_wrap").find(".jobExpForm")[0]).find("script").attr("id", "ueditor_" + a[k].id), $(lt.obj.find(".list_show .updatejob_wrap").find(".jobExpForm")[0]).find(".mr_upload_logo .companyLogo_new_hide").attr("id", "upcompanyLogo_" + a[k].id))
			} else for (var i = 0; i < a.length; i++) a[i].companyLogo ? ($(c[i]).find("img").attr("src", GLOBAL_DOMAIN.lgsctx + "/" + a[i].companyLogo).show(), $(c[i]).next("form").find('input[name="companyLogoHide"]').val(GLOBAL_DOMAIN.lgsctx + "/" + a[i].companyLogo)) : $(c[i]).find("img").hide(), $(c[i]).find("h4").html(a[i].companyName), $(c[i]).find("h4").next().html(a[i].positionName), $(c[i]).find(".mr_edit").attr({
				"data-expid": a[i].id,
				"data-logo": a[i].companyLogo,
				"data-comname": a[i].companyName,
				"data-posname": a[i].positionName,
				"data-startime": a[i].startDate,
				"data-endtime": a[i].endDate,
				"data-content": a[i].workContent
			}), $(c[i]).find(".mr_content_r span:eq(0)").text(a[i].startDate), $(c[i]).find(".mr_content_r span:eq(2)").text(a[i].endDate), a[i].workContent ? ($(c[i]).find(".mr_content_m").show(), $(c[i]).find(".mr_content_m").html(a[i].workContent)) : $(c[i]).find(".mr_content_m").hide()
		}
		function L() {
			gt.obj.find(".ul_edubg").on("click", "li", function(e) {
				e.stopPropagation();
				var a = $(this).parent().parent();
				a.prev().val($(this).text()), a.prev().prev().val($(this).text()), a.hide(), $(".select_color").removeClass("select_color");
				var c = $(this).parents("form").validate().element(a.prev().prev());
				c && (a.next().hide(), $(this).parents(".mr_timed_div").css("margin-bottom", "0"))
			})
		}
		function E() {
			gt.obj.find(".ul_eduy").on("click", "li", function(e) {
				e.stopPropagation();
				var a = $(this).parent().parent();
				a.prev().val($(this).text()), a.prev().prev().val($(this).text()), a.hide(), $(".select_color").removeClass("select_color");
				var c = $(this).parents("form").validate().element(a.prev().prev());
				c && (a.next().hide(), $(this).parents(".mr_timed_div").css("margin-bottom", "0"))
			})
		}
		function O(a) {
			var c = a;
			$('input[name="schoolName"]', c).val(""), $('input[name="positionName"]', c).val(""), $('input[name="degree_val"]', c).val(""), $('input[name="degree_text"]', c).val(""), $('input[name="graduate"]', c).val(""), $('input[name="graduate_text"]', c).val("")
		}
		function N() {
			$("#addEduForm").validate({
				rules: gt.rules,
				messages: gt.messages,
				errorPlacement: function(a, c) {
					gt.errorPlacement(a, c)
				},
				submitHandler: function(a) {
					var c = globals.resumeId,
						_ = $('input[name="schoolName"]', a).val(),
						h = $('input[name="positionName"]', a).val(),
						v = $('input[name="degree_val"]', a).val(),
						g = $('input[name="graduate"]', a).val(),
						b = globals.token;
					$(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), $.ajax({
						url: GLOBAL_DOMAIN.ctx + "/educationExperience/save.json",
						type: "post",
						data: {
							id: c,
							schoolName: _,
							professional: h,
							education: v,
							endYear: g,
							resubmitToken: b
						},
						dataType: "json"
					}).done(function(c) {
						if (c.success) {
							var _ = c.content.isOpenMyResume,
								h = $(".toggle"),
								v = c.content.firstOpen;
							globals.isFirstOpen = v, _ && ($(".openresume_tip").hide(), globals.isFirstOpen ? (globals.isOpenResume = "3", $(".firstset").show()) : globals.isOpenResume = h.hasClass("toggle-off") ? "0" : "1"), U(c), globals.token = c.resubmitToken, O(a), updateResumeTime(c.content.refreshTime);
							var rt = c.content.infoCompleteStatus.score,
								g = parseInt($.trim($(".mr_bfb").text())),
								b = amountScore - g + rt;
							updateRatioRM(rt, b), gt.obj.find(".mr_head_r").trigger("click");
							var k = c.content.educationExperiences;
							A(k);
							var w = gt.obj.find(".mr_empty_add");
							w.not(":hidden") && w.hide();
							var y = $(".mr_module .flag_edu");
							y.is(":hidden") || y.addClass("dn")
						} else alert(c.msg || "è¯·åˆ·æ–°é‡è¯•");
						$(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
					})
				}
			})
		}
		function P() {
			$("#upEduForm").validate({
				rules: gt.rules,
				messages: gt.messages,
				errorPlacement: function(a, c) {
					gt.errorPlacement(a, c)
				},
				submitHandler: function(a) {
					var c = globals.resumeId,
						_ = $('input[name="schoolName"]', a).val(),
						h = $('input[name="positionName"]', a).val(),
						v = $('input[name="degree_val"]', a).val(),
						g = $('input[name="graduate"]', a).val(),
						b = globals.token;
					$(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), $.ajax({
						url: GLOBAL_DOMAIN.ctx + "/educationExperience/save.json",
						type: "POST",
						data: {
							id: c,
							schoolName: _,
							professional: h,
							education: v,
							endYear: g,
							resubmitToken: b,
							eduid: oMoudle.eduId
						},
						dataType: "json"
					}).done(function(c) {
						if (c.success) {
							U(c), globals.token = c.resubmitToken, O(a), updateResumeTime(c.content.refreshTime);
							var rt = c.content.infoCompleteStatus.score,
								_ = parseInt($.trim($(".mr_bfb").text())),
								h = amountScore - _ + rt;
							updateRatioRM(rt, h), $(".mr_cancel", a).trigger("click");
							var v = c.content.educationExperiences;
							A(v)
						} else alert(c.msg || "è¯·åˆ·æ–°é‡è¯•")
					})
				}
			})
		}
		function A(a) {
			for (var c = "", i = 0; i < a.length; i++) c += '<div class="clearfixs mb46 mr_jobe_list">', c += '<div class="mr_content_l">', "" != a[i].schoolBadge && (c += '<div class="l1">', c += '<img src="' + GLOBAL_DOMAIN.lgsctx + "/" + a[i].schoolBadge + '" alt="å­¦æ ¡Logo"/>', c += "</div>"), c += '<div class="l2">', c += "<h4>" + a[i].schoolName + "</h4>", c += "<span>" + a[i].education + " Â· " + a[i].professional + "</span>", c += "</div>", c += "</div>", c += '<div class="mr_content_r">', c += '<div class="mr_edit mr_c_r_t" data-eduid = "' + a[i].id + '" data-schoolname = "' + a[i].schoolName + '" data-edu = "' + a[i].education + '" data-pro = "' + a[i].professional + '" data-date = "' + a[i].endDate + '">', c += "<i></i><em>ç¼–è¾‘</em>", c += "</div>", c += 1 == a[i].whetherGraduate ? "<span>" + a[i].endDate + "å¹´æ¯•ä¸š</span>" : "<span>" + a[i].endDate + "å¹´æ¯•ä¸š( é¢„è®¡ )</span>", c += "</div>", c += "</div>";
			gt.obj.find(".list_show").html(c)
		}
		function U(a) {
			var c = ($.trim($(".base_info .j").text()), $(".ul_shenfen")),
				_ = a.content.resume,
				h = a.content.latestWorkExperience,
				v = a.content.latestEducationExperience,
				g = _.userIdentity,
				b = _.workYear;
			if (h) var k = h.positionName + " Â· " + h.companyName;
			else var k = "Â·";
			if (v) var w = v.professional + " Â· " + v.schoolName;
			else var w = "Â·";
			var y, C, j, S = $.trim(w),
				T = $.trim(k);
			switch (y = $("span.shenfen"), 0 == y.length && (y = $("<span></span>").addClass("shenfen"), $(".info_t").prepend(y)), C = $("<i></i>"), g) {
			case 0:
				"åº”å±Šæ¯•ä¸šç”Ÿ" == $.trim(b) ? (j = $("Â·" != S ? "<em data-id='0' title='" + w + "'>" + w + "</em>" : "<em data-id='0' title='" + k + "'>" + k + "</em>"), y.removeClass("dn").empty(), y.append(C).append(j)) : (j = $("Â·" != T ? "<em data-id='0' title='" + k + "'>" + k + "</em>" : "<em data-id='0' title='" + w + "'>" + w + "</em>"), y.removeClass("dn").empty(), y.append(C).append(j)), "Â·" == $.trim(y.text()) && y.addClass("dn");
				break;
			case 1:
				j = $("Â·" != S ? "<em data-id='1' title='" + w + "'>" + w + "</em>" : "<em data-id='2' title='" + k + "'>" + k + "</em>"), y.removeClass("dn").empty(), y.append(C).append(j), "Â·" == $.trim(y.text()) && y.addClass("dn");
				break;
			case 2:
				j = $("Â·" != T ? "<em data-id='2' title='" + k + "'>" + k + "</em>" : "<em data-id='1' title='" + w + "'>" + w + "</em>"), y.removeClass("dn").empty(), y.append(C).append(j), "Â·" == $.trim(y.text()) && y.addClass("dn")
			}
			var F = c.find("li[data-id='2']"),
				I = c.find("li[data-id='1']");
			if ("Â·" != T) if (F.length > 0) F.text(k);
			else {
				var L = $("<li></li>").attr({
					"data-id": "2",
					title: k
				}).text(k);
				c.append(L)
			} else F.remove();
			if ("Â·" != S) if (I.length > 0) I.text(w);
			else {
				var E = $("<li></li>").attr({
					"data-id": "1",
					title: w
				}).text(w);
				c.append(E)
			} else I.remove()
		}
		function M(a) {
			$("#addProForm").submit(function() {
				a.sync()
			}).validate({
				rules: {
					projectName: {
						required: !0,
						maxlenStr: 50
					},
					thePost: {
						required: !0,
						maxlenStr: 30
					},
					startTime: {
						required: !0
					},
					endTime: {
						required: !0
					},
					editorValue: {
						required: !1,
						ueditorLength: [10, 1600]
					},
					pro_link: {
						maxlenStr: 60,
						checkUrl: !0
					}
				},
				messages: {
					projectName: {
						required: "å¿…å¡«",
						maxlenStr: "è¯·è¾“å…¥100å­—ç¬¦ä»¥å†…çš„é¡¹ç›®åç§°"
					},
					thePost: {
						required: "å¿…å¡«",
						maxlenStr: "å“‡ï¼Œä½ çš„èŒè´£è¿™ä¹ˆåŽ‰å®³ï¼Œä½ çš„å…¬å¸çŸ¥é“å—ï¼Ÿ60ä¸ªå­—ç¬¦ä»¥å†…å“¦"
					},
					startTime: {
						required: "å¿…å¡«"
					},
					endTime: {
						required: "å¿…å¡«"
					},
					editorValue: {
						ueditorLength: "è¯·è¾“å…¥10-1600å­—ç¬¦çš„é¡¹ç›®æè¿°"
					},
					pro_link: {
						maxlenStr: "é“¾æŽ¥å¤ªé•¿ï¼Œç›®å‰åªæ”¯æŒ120å­—ç¬¦ä»¥å†…å“¦",
						checkUrl: "è¯·è¾“å…¥æœ‰æ•ˆçš„é¡¹ç›®é“¾æŽ¥"
					}
				},
				errorPlacement: function(a, c) {
					"hidden" == c.attr("type") ? ($(c).parent().css("margin-bottom", "25px"), a.appendTo($(c).parent())) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
				},
				submitHandler: function(c) {
					var _ = $('input[name="projectName"]', c).val(),
						h = $('input[name="thePost"]', c).val(),
						v = $('input[name="startTime"]', c).val(),
						g = $('input[name="endTime"]', c).val(),
						b = a.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"),
						k = $('input[name="pro_link"]', c).val();
					$(c).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), myresumeCommon.utils.addHttpPrefix("http://|https://", k, function(a) {
						k = "" == k ? "" : a
					}), $.ajax({
						url: GLOBAL_DOMAIN.ctx + myresumeCommon.requestTargets.projectExpSave,
						type: "POST",
						data: {
							id: globals.resumeId,
							projectid: "",
							projectName: $.trim(_),
							positionName: $.trim(h),
							startDate: $.trim(v),
							endDate: $.trim(g),
							projectRemark: $.trim(b),
							dutyRemark: "",
							projectUrl: $.trim(k)
						},
						dataType: "json"
					}).done(function(a) {
						if (a.success) {
							Q = "", K = !0, z(), $("#addProForm").addClass("dn");
							var _ = a && a.content && a.content.projectExperiences || [];
							D(_), kt.AddCancel();
							var h = kt.obj.find(".mr_empty_add");
							_.length ? h.hide() : h.show(), updateResumeTime(a.content.refreshTime), "" != oMoudleScore.projectExpScore && (amountScore -= oMoudleScore.projectExpScore), oMoudleScore.projectExpScore = "";
							var rt = a.content.infoCompleteStatus.score,
								v = parseInt($.trim($(".mr_bfb").text())),
								g = amountScore - v + rt;
							updateRatioRM(rt, g), kt.checkState(), wt.reset(), yt.reset()
						} else $(c).find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (a.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>");
						$(c).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
					})
				}
			})
		}
		function R(a) {
			$("#currentUpProForm").submit(function() {
				G.sync()
			}).validate({
				rules: {
					projectName: {
						required: !0,
						maxlenStr: 50
					},
					thePost: {
						required: !0,
						maxlenStr: 30
					},
					startTime: {
						required: !0
					},
					endTime: {
						required: !0
					},
					editorValue: {
						required: !1,
						ueditorLength: [10, 1600]
					},
					pro_link: {
						maxlenStr: 60,
						checkUrl: !0
					}
				},
				messages: {
					projectName: {
						required: "å¿…å¡«",
						maxlenStr: "è¯·è¾“å…¥100å­—ç¬¦ä»¥å†…çš„é¡¹ç›®åç§°"
					},
					thePost: {
						required: "å¿…å¡«",
						maxlenStr: "å“‡ï¼Œä½ çš„èŒè´£è¿™ä¹ˆåŽ‰å®³ï¼Œä½ çš„å…¬å¸çŸ¥é“å—ï¼Ÿ60ä¸ªå­—ç¬¦ä»¥å†…å“¦"
					},
					startTime: {
						required: "å¿…å¡«"
					},
					endTime: {
						required: "å¿…å¡«"
					},
					editorValue: {
						ueditorLength: "è¯·è¾“å…¥10-1600å­—ç¬¦çš„é¡¹ç›®æè¿°"
					},
					pro_link: {
						maxlenStr: "é“¾æŽ¥å¤ªé•¿ï¼Œç›®å‰åªæ”¯æŒ120å­—ç¬¦ä»¥å†…å“¦",
						checkUrl: "è¯·è¾“å…¥æœ‰æ•ˆçš„é¡¹ç›®é“¾æŽ¥"
					}
				},
				errorPlacement: function(a, c) {
					"hidden" == c.attr("type") ? ($(c).parent().css("margin-bottom", "25px"), a.appendTo($(c).parent())) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
				},
				submitHandler: function(c) {
					var _ = $('input[name="projectName"]', c).val(),
						h = $('input[name="thePost"]', c).val(),
						v = $('input[name="startTime"]', c).val(),
						g = $('input[name="endTime"]', c).val(),
						b = G.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"),
						k = $('input[name="pro_link"]', c).val();
					$(c).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), myresumeCommon.utils.addHttpPrefix("http://|https://", k, function(a) {
						k = "" == k ? "" : a
					}), $.ajax({
						url: GLOBAL_DOMAIN.ctx + myresumeCommon.requestTargets.projectExpSave,
						type: "POST",
						data: {
							id: globals.resumeId,
							projectid: a,
							projectName: $.trim(_),
							positionName: $.trim(h),
							startDate: $.trim(v),
							endDate: $.trim(g),
							projectRemark: $.trim(b),
							dutyRemark: "",
							projectUrl: $.trim(k)
						},
						dataType: "json"
					}).done(function(a) {
						if ($(c).find(":submit").val("ä¿å­˜").attr("disabled", !1), a.success) {
							Q = "", K = !0, z();
							var _ = a && a.content && a.content.projectExperiences || [];
							D(_), kt.UpCancel();
							var h = kt.obj.find(".mr_empty_add");
							_.length ? h.hide() : h.show(), updateResumeTime(a.content.refreshTime), "" != oMoudleScore.projectExpScore && (amountScore -= oMoudleScore.projectExpScore), oMoudleScore.projectExpScore = "";
							var rt = a.content.infoCompleteStatus.score,
								v = parseInt($.trim($(".mr_bfb").text())),
								g = amountScore - v + rt;
							updateRatioRM(rt, g), kt.checkState()
						} else $(c).find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (a.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>")
					})
				}
			})
		}
		function D(a) {
			{
				var c = (kt.obj.find(".list_show"), kt.obj.find(".list_show .updatepro_wrap .mr_jobe_list")),
					_ = kt.obj.find(".list_show .new_addpro_hide .mr_jobe_list");
				kt.obj.find(".list_show .new_addpro_hide .proExpForm")
			}
			if (a.length > c.length) {
				for (var h = [], v = 0; v < a.length; v++) h.push(a[v].id);
				for (var g = h[0], i = 0; i < h.length; i++) g < h[i] && (g = h[i]);
				var b = h.indexOf(g);
				if ($(_).attr("data-id", a[b].id), a[b].projectUrl && "" != a[b].projectUrl) {
					var k = revertEscapedHtml(a[b].projectUrl);
					$(_).find(".projectTitle").attr("href", k), $(_).find(".projectTitle").attr("target", "_blank"), $(_).find(".projectTitle").html(a[b].projectName + "<i></i>")
				} else $(_).find(".projectTitle").removeAttr("href").removeAttr("target"), $(_).find(".projectTitle").addClass("nourl"), $(_).find(".projectTitle").html(a[b].projectName);
				$(_).find(".l2 p").html(a[b].positionName), $(_).find(".mr_edit").attr("data-id", a[b].id), $(_).find(".mr_edit").attr("data-remark", a[b].projectRemark), $(_).find(".mr_content_r span:eq(0)").text(a[b].startDate), $(_).find(".mr_content_r span:eq(2)").text(a[b].endDate), a[b].projectRemark && "" != a[b].projectRemark ? $(_).find(".mr_content_m").html(a[b].projectRemark) : $(_).find(".mr_content_m").addClass("dn"), b > 0 ? ($(c[b - 1]).next().after(kt.obj.find(".list_show .updatepro_wrap").parent().find(".new_addpro_hide").html()), $(c[b - 1]).next().next().next().find("script").attr("id", "ueditor_" + a[b].id)) : (kt.obj.find(".list_show .updatepro_wrap").prepend(kt.obj.find(".list_show .updatepro_wrap").parent().find(".new_addpro_hide").html()), $(kt.obj.find(".list_show .updatepro_wrap").find(".proExpForm")[0]).find("script").attr("id", "ueditor_" + a[b].id))
			} else for (var i = 0; i < a.length; i++) for (var v = 0; v < c.length; v++) if ($(c[v]).attr("data-id") == a[i].id) {
				if (a[i].projectUrl && "" != a[i].projectUrl) {
					var k = revertEscapedHtml(a[i].projectUrl);
					$(c[v]).find(".projectTitle").attr("href", k), $(c[v]).find(".projectTitle").attr("target", "_blank"), $(c[v]).find(".projectTitle").html(a[i].projectName + "<i></i>")
				} else $(c[v]).find(".projectTitle").removeAttr("href").removeAttr("target"), $(c[v]).find(".projectTitle").addClass("nourl"), $(c[v]).find(".projectTitle").html(a[i].projectName);
				$(c[v]).find(".l2 p").html(a[i].positionName), $(c[v]).find(".mr_edit").attr("data-id", a[i].id), $(c[v]).find(".mr_edit").attr("data-remark", a[i].projectRemark), $(c[v]).find(".mr_content_r span:eq(0)").text(a[i].startDate), $(c[v]).find(".mr_content_r span:eq(2)").text(a[i].endDate), $(c[v]).find(".mr_content_m").html(a[i].projectRemark)
			}
		}
		function B() {
			var a = $(".mr_empty_add");
			a.not("hidden").addClass("addgrey"), a.bind("click", J), $(".mr_head_r").each(function() {
				$(this).css("cursor", "default");
				var a = $(this).children("em").text();
				"æ·»åŠ " == a ? $(this).addClass("mr_add_grey") : "ç¼–è¾‘" == a && $(this).addClass("mr_up_grey")
			}), $(".mr_c_r_t").each(function() {
				$(this).css("cursor", "default");
				var a = $(this).children("em").text();
				"æ·»åŠ " == a ? $(this).addClass("mr_add_grey") : "ç¼–è¾‘" == a && $(this).addClass("mr_up_grey")
			})
		}
		function J() {
			return !1
		}
		function z() {
			var a = $(".mr_empty_add");
			a.not("hidden").removeClass("addgrey"), a.unbind("click", J), $(".mr_head_r").each(function() {
				$(this).css("cursor", "pointer");
				var a = $(this).children("em");
				$(this).hasClass("mr_add_grey") ? (a.text("æ·»åŠ "), $(this).removeClass("mr_add_grey")) : $(this).hasClass("mr_up_grey") && (a.text("ç¼–è¾‘"), $(this).removeClass("mr_up_grey"))
			}), $(".mr_c_r_t").each(function() {
				$(this).css("cursor", "pointer");
				var a = $(this).children("em");
				$(this).hasClass("mr_add_grey") ? (a.text("æ·»åŠ "), $(this).removeClass("mr_add_grey")) : $(this).hasClass("mr_up_grey") && (a.text("ç¼–è¾‘"), $(this).removeClass("mr_up_grey"))
			}), K = !0, Q = ""
		}
		function H(a, c) {
			var _ = parseInt($.trim($(".mr_bfb").text())),
				h = 0;
			switch (a) {
			case "expectJob":
				h = parseInt(oMdScore.expectJobsScore), oMoudleScore.expectJobsScore = h;
				break;
			case "projectExperience":
				h = parseInt(oMdScore.projectExpScore), oMoudleScore.projectExpScore = h;
				break;
			case "worksShow":
				h = parseInt(oMdScore.workShowScore), oMoudleScore.workShowScore = h;
				break;
			case "skillsAssess":
				h = parseInt(oMdScore.skillScore), oMoudleScore.skillScore = h;
				break;
			case "selfDescription":
				h = parseInt(oMdScore.myRemarkScore), oMoudleScore.myRemarkScore = h;
				break;
			default:
				return
			}
			0 == c ? amountScore += h : amountScore -= h, amountScore >= 100 && (amountScore = 100), _ > amountScore && (amountScore = _), updateRatioRM(_, amountScore)
		}
		var G = void 0,
			W = $("#customTitleName");
		$("#customBlock .cust_title span").text("" == W.val() ? "è‡ªå®šä¹‰æ ‡é¢˜" : W.val()), 9 == $(".md_flag").length ? $(".mr_module_add").addClass("dn") : $(".mr_module_add").removeClass("dn"), initTitlePosition();
		var V = globals.initRatio;
		updateRatioRM(V, V);
		var Y = $(".mr_myresume_r .scroll_fix").offset();
		$(window).scroll(function() {
			var a = $(window).scrollTop();
			Y && Y.top <= a ? $(".mr_myresume_r .scroll_fix").addClass("mr_myresume_r_fix") : $(".mr_myresume_r .scroll_fix").removeClass("mr_myresume_r_fix")
		}), 0 == $(".m_hide").hasClass("dn").length && $(".mr_module_add").hide();
		var Q = "",
			X = "",
			K = !0;
		window.onbeforeunload = function() {
			return K ? void 0 : "å†…å®¹è¿˜æœªä¿å­˜ï¼Œç¡®è®¤ç¦»å¼€è¯¥é¡µé¢å—ï¼Ÿ "
		}, a(), $.validator.addMethod("ueditorLength", function(a, c, _) {
			var h = a.replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"),
				$ = getStrLen(h);
			return $ <= _[1] && $ >= _[0] ? !0 : !1
		}, $.validator.format("è¯·è¾“å…¥é•¿åº¦ä¸º {0} - {1} çš„å­—é•¿"));
		var Z = function() {
				$(".companyName").autocomplete({
					source: function(a, c) {
						var _ = new Array;
						$.ajax({
							type: "POST",
							async: !1,
							url: GLOBAL_DOMAIN.sctx + "/suggestion",
							dataType: "jsonp",
							jsonp: "suggestCompanyback",
							data: {
								input: a.term,
								type: 2,
								num: 6
							}
						}).done(function(a) {
							if (null != a && void 0 != a) for (var h in a) {
								var $ = a[h];
								if (null != $ && void 0 != $ && $.length > 0) for (var i in $) _.push($[i].cont)
							}
							c(_)
						})
					},
					minLength: 1
				})
			};
		$(".mr_created").delegate(".companyName", "keydown keyup", function() {
			myresumeCommon.utils.throttle(Z, [], this, 300)
		});
		var et = function() {
				$(".autoPosition").autocomplete({
					source: function(a, c) {
						var _ = new Array;
						$.ajax({
							type: "POST",
							async: !1,
							url: GLOBAL_DOMAIN.sctx + "/suggestion",
							dataType: "jsonp",
							jsonp: "suggestPositionback",
							data: {
								input: a.term,
								type: 5,
								num: 6
							}
						}).done(function(a) {
							if (null != a && void 0 != a) for (var h in a) {
								var $ = a[h];
								if (null != $ && void 0 != $ && $.length > 0) for (var i in $) _.push($[i].cont)
							}
							c(_)
						})
					},
					minLength: 1
				})
			};
		$(".mr_created").delegate(".autoPosition", "keydown keyup", function() {
			myresumeCommon.utils.throttle(et, [], this, 300)
		});
		var tt = function() {
				$(".autoCollege").autocomplete({
					source: function(a, c) {
						var _ = new Array;
						$.ajax({
							type: "POST",
							async: !1,
							url: GLOBAL_DOMAIN.sctx + "/suggestion",
							dataType: "jsonp",
							jsonp: "suggestCollegeback",
							data: {
								input: a.term,
								type: 3,
								num: 6
							}
						}).done(function(a) {
							if (null != a && void 0 != a) for (var h in a) {
								var $ = a[h];
								if (null != $ && void 0 != $ && $.length > 0) for (var i in $) _.push($[i].cont)
							}
							c(_)
						})
					},
					minLength: 1
				})
			};
		$(".mr_created").delegate(".autoCollege", "keydown keyup", function() {
			myresumeCommon.utils.throttle(tt, [], this, 300)
		});
		var at = function() {
				$(".autoMajor").autocomplete({
					source: function(a, c) {
						var _ = new Array;
						$.ajax({
							type: "POST",
							async: !1,
							url: GLOBAL_DOMAIN.sctx + "/suggestion",
							dataType: "jsonp",
							jsonp: "suggestMajorback",
							data: {
								input: a.term,
								type: 4,
								num: 6
							}
						}).done(function(a) {
							if (null != a && void 0 != a) for (var h in a) {
								var $ = a[h];
								if (null != $ && void 0 != $ && $.length > 0) for (var i in $) _.push($[i].cont)
							}
							c(_)
						})
					},
					minLength: 1
				})
			};
		$(".mr_created").delegate(".autoMajor", "keydown keyup", function() {
			myresumeCommon.utils.throttle(at, [], this, 300)
		}), $(".mr_name_edit .ed_name,.mr_intro_edit .ed_name").bind("click", function(e) {
			e.stopPropagation(), $(".select_color").removeClass("select_color"), $(this).addClass("select_color")
		}), $(".mr_r_nav ul li:first").bind("click", function(e) {
			e.stopPropagation();
			var a = $(this).find("em");
			a.is(":hidden") || a.addClass("dn")
		}), $(".mr_sns") && $(".mr_sns a").length > 0 && c(), $(".mr_sns a").hover(function() {
			$(this).find("span").show()
		}, function() {
			$(this).find("span").hide()
		}), $(".mr_headfile").hover(function() {
			$(this).siblings(".shadow").show()
		}, function() {
			$(this).siblings(".shadow").hide()
		}), $(".mr_p_name,.mr_p_info,.mr_p_introduce").hover(function() {
			$(this).addClass("mr_active").find(".mr_edit").removeClass("dn")
		}, function() {
			$(this).removeClass("mr_active").find(".mr_edit").addClass("dn")
		}), $(".mr_p_name .mr_edit").bind("click", function() {
			$(".mr_p_name").hide(), $("#mr_name").val($(".mr_p_name .mr_name").text()), $(".mr_name_edit").removeClass("dn"), $("#nameForm").find("input#mr_name")[0].focus(), K = !1
		});
		var ot = $("input#mr_name");
		ot.on("keyup", function() {
			var a = $.trim(ot.val()).length;
			0 == a && $(this).attr("placeholder", "å§“å")
		}), $(".mr_name_edit .cancel").bind("click", function() {
			$(".mr_p_name").show(), $(".mr_name_edit").addClass("dn"), K = !0
		}), $(".mr_p_introduce .mr_edit").bind("click", function() {
			$(".mr_p_introduce").hide(), "0" == $(this).attr("data-type") && $("#mr_intro").val($(".mr_p_introduce .mr_intro").text()), $(".mr_intro_edit").removeClass("dn"), $("#mr_intro").focus(), $("#introduceForm .mroneError").hide(), K = !1
		}), $(".mr_intro_edit .cancel").bind("click", function() {
			$(".mr_p_introduce").show(), $(".mr_intro_edit").addClass("dn"), K = !0
		}), $(".a").hover(function() {
			var a = $(".birth_span"),
				c = $.trim(a.text()),
				_ = $(".a");
			"" != c && "å‡ºç”Ÿ" != c ? (a.removeClass("dn"), _.css("cursor", "pointer")) : _.css("cursor", "default")
		}, function() {
			setTimeout(function() {
				var a = $(".birth_span");
				a.addClass("dn")
			}, 90)
		}), jQuery.validator.addMethod("truename", function(a, c) {
			var _ = /^([a-zA-Z ]+|[一-龥]+)$/;
			return this.optional(c) || _.test(a)
		}, "è¯·è¾“å…¥æœ‰æ•ˆçš„å…¬å¸ç®€ç§°"), jQuery.validator.addMethod("truename2", function(a, c) {
			var _ = /([Â·`~!@#$^&':;,?~ï¼â€¦â€¦&ï¼›ï¼šã€‚ï¼Œã€ï¼Ÿ=])/;
			return this.optional(c) || !_.test(a)
		}, "è¯·è¾“å…¥æœ‰æ•ˆçš„åå­—"), $("#nameForm").validate({
			rules: {
				mr_name: {
					required: !0,
					truename2: !0,
					rangeLenStr: [1, 15]
				}
			},
			messages: {
				mr_name: {
					required: "å¿…å¡«",
					truename2: "æ ¼å¼é”™è¯¯",
					rangeLenStr: "è¯·è¾“å…¥çœŸå®žå§“å"
				}
			},
			errorPlacement: function(a, c) {
				a.appendTo($(c).parent()), $(".c_section span.error").css("margin", "5px 0 10px 138px")
			},
			submitHandler: function(a) {
				var c = globals.token,
					_ = $('input[name="mr_name"]', a).val(),
					h = globals.resumeId;
				_ = $.trim(_), $(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), $.ajax({
					url: GLOBAL_DOMAIN.ctx + "/resume/updateUserName.json",
					type: "POST",
					data: {
						name: _,
						id: h,
						resubmitToken: c
					},
					dataType: "json"
				}).done(function(c) {
					if (c.success) {
						K = !0, globals.token = c.resubmitToken;
						var _ = c.content.resume,
							h = _.name;
						$(".mr_name_edit").addClass("dn"), $(".mr_name").html(h).parent().show();
						var v = c.content.url;
						$("#body").append("<iframe id='ifr' style='display:none;' src='" + v + "'></iframe>")
					} else alert(c.msg || "è¯·åˆ·æ–°é‡è¯•");
					$(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
				})
			}
		}), $("#introduceForm").on("keyup", 'input[name="mr_intro"]', function() {
			var a = $(this),
				c = $.trim(a.val()),
				h = _(c);
			0 == h ? (K = !0, a.siblings("span.mroneError").text("å¿…å¡«").css("display", "block")) : 4 > h ? (K = !0, a.siblings("span.mroneError").text("å¤ªçŸ­äº†").css("display", "block")) : h >= 4 && 58 >= h ? a.siblings("span.mroneError").hide() : h > 58 && a.siblings("span.mroneError").text("è¯·è¾“å…¥4-58ä¸ªå­—ç¬¦çš„ä»‹ç»").css("display", "block")
		}), $("#introduceForm .save").click(function() {
			var a = $(this),
				c = $.trim($("#introduceForm #mr_intro").val()),
				h = _(c);
			if (0 == h) K = !0, a.siblings("span.mroneError").text("å¿…å¡«").css("display", "block");
			else if (4 > h) K = !0, a.siblings("span.mroneError").text("å¤ªçŸ­äº†").css("display", "block");
			else if (h >= 4 && 58 >= h) {
				var v = $("#introduceForm"),
					g = globals.resumeId,
					b = $('input[name="mr_intro"]', v).val();
				$(v).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0);
				var k = globals.token;
				$.ajax({
					url: GLOBAL_DOMAIN.ctx + "/resume/oneWord.json",
					type: "POST",
					data: {
						oneWord: b,
						resubmitToken: k,
						id: g
					},
					dataType: "json"
				}).done(function(a) {
					if (a.success) {
						globals.token = a.resubmitToken, $(".mr_intro_edit").addClass("dn");
						var c = $(".mr_intro");
						c.hasClass("mr_intro_grey") && c.removeClass("mr_intro_grey").addClass("mr_intro_normal"), c.text(b).attr("title", b).parent().show();
						var _ = a.content.infoCompleteStatus.score,
							h = parseInt($.trim($(".mr_bfb").text())),
							g = amountScore - h + _;
						updateRatioRM(_, g)
					} else alert(a.msg || "è¯·åˆ·æ–°é‡è¯•");
					$(v).find(":submit").val("ä¿ å­˜").attr("disabled", !1), K = !0
				})
			} else h > 58 && a.siblings("span.mroneError").text("è¯·è¾“å…¥4-58ä¸ªå­—ç¬¦çš„ä»‹ç»").show()
		}), $(".mr_created,.mr_uncreate").delegate(".normal_s", "click", function(e) {
			e.stopPropagation();
			var a = $(this).find(".xl_list"),
				c = a.is(":hidden");
			$(".xl_list").hide(), $(".select_color").removeClass("select_color"), c ? ($(this).addClass("select_color"), a.show()) : a.hide(), mt && mt.hide(), ut && ut.hide(), ct && ct.hide()
		}), $(".mr_created,.mr_uncreate").delegate(".email_s,.mobile_s", "focus", function(e) {
			e.stopPropagation();
			var a = $(this).find(".xl_list"),
				c = a.is(":hidden");
			$(".xl_list").hide(), $(".select_color").removeClass("select_color"), c ? ($(this).addClass("select_color"), a.show()) : a.hide(), mt && mt.hide(), ut && ut.hide(), ct && ct.hide()
		}), $(".mr_self_state .mr_self_s").bind("click", function(e) {
			e.stopPropagation(), $(".form_wrap").removeClass("select_color");
			var a = $(this).find(".xl_list");
			a.is(":hidden") && $(this).addClass("select_color"), a.toggle()
		}), $(".mr_self_state .mr_self_s").hover(function() {
			$(this).hasClass("active") && $(this).removeClass("active")
		}, function() {
			var a = $(this).find(".xl_list");
			a.is(":hidden") && $(this).addClass("active")
		}), $("#mr_mobile,#mr_email").click(function(e) {
			e.stopPropagation(), $(".select_color").removeClass("select_color"), $(this).parent().addClass("select_color"), ut.hide()
		}), $(".xl_list").bind("click", function(e) {
			e.stopPropagation()
		}), $(".mr_my_qr").hover(function() {
			$(this).addClass("open")
		}, function() {
			$(this).removeClass("open")
		}), $(document).click(function() {
			var a = $(".mr_years");
			a.find(".xl_list").is(":visible") && "" == $("#mr_year").val() && $("<span class='error'>").text("å¿…é€‰").appendTo(a);
			var c = $(".mr_months");
			c.find(".xl_list").is(":visible") && "" == $("#mr_month").val() && $("<span class='error'>").text("å¿…é€‰").appendTo(c), $(".xl_list").hide(), $(".select_color").removeClass("select_color");
			var _ = $(".mr_down_tip");
			_.is(":hidden") || _.addClass("dn"), mt && mt.hide(), ut && ut.hide(), ct && ct.hide(), wt && wt.hide(), yt && yt.hide(), bt && bt.hide(), xt && xt.hide(), ft && ft.hide(), ht && ht.hide(), pt && pt.hide(), _t && _t.hide(), wt && wt.hide(), yt && yt.hide();
			var h = $(".mr_self_state .mr_self_s");
			h.hasClass("active") || h.addClass("active");
			var v = $(".set_default_wrap");
			v.hasClass("active") && v.trigger("click")
		}), $(".ul_xl").delegate("li", "click", function() {
			$("#xl").val($(this).text()), $(this).parent().parent().hide(), $(".select_color").removeClass("select_color")
		}), $(".ul_gznx").delegate("li", "click", function() {
			var a = $(this).text();
			if ($("#gznx").val(a), "åº”å±Šæ¯•ä¸šç”Ÿ" == $.trim(a)) {
				var c = $(".ul_shenfen li[data-id = '1']");
				0 != c.length && ($("#shenfen").val(c.text()), globals.personIdFlag = "1")
			} else {
				var _ = $(".ul_shenfen li[data-id = '2']");
				0 != _.length && ($("#shenfen").val(_.text()), globals.personIdFlag = "2")
			}
			$(this).parent().parent().hide(), $(".select_color").removeClass("select_color")
		}), $(".mr_years .normal_s, .mr_months .normal_s").click(function() {
			$(this).parent().find("span.error").remove()
		}), $(".ul_year").delegate("li", "click", function() {
			var a = $("#mr_year").val();
			$("#mr_year").val($(this).text()), $(this).parent().parent().hide(), $(".select_color").removeClass("select_color"), a != $(this).text() && !! $("#mr_month").val() &&
			function(a, c) {
				$("#olinfoForm .mr_days").show().find("#mr_day").val("01");
				for (var _ = getCountDays(a, c), h = [], i = 1; _ >= i; i++) h.push(10 > i ? "<li>0" + i + "</li>" : "<li>" + i + "</li>");
				$("#olinfoForm .mr_days .ul_day").html(h.join(""))
			}($("#mr_year").val(), $("#mr_month").val())
		}), $(".ul_month").delegate("li", "click", function() {
			var a = $("#mr_month").val();
			$("#mr_month").val($(this).text()), $(this).parent().parent().hide(), $(".select_color").removeClass("select_color"), a != $(this).text() && !! $("#mr_year").val() &&
			function(a, c) {
				$("#olinfoForm .mr_days").show().find("#mr_day").val("01");
				for (var _ = getCountDays(a, c), h = [], i = 1; _ >= i; i++) h.push(10 > i ? "<li>0" + i + "</li>" : "<li>" + i + "</li>");
				$("#olinfoForm .mr_days .ul_day").html(h.join(""))
			}($("#mr_year").val(), $("#mr_month").val())
		}), $(".ul_day").delegate("li", "click", function() {
			$("#mr_day").val($(this).text()), $(this).parent().parent().hide(), $(".select_color").removeClass("select_color")
		}), $(".ul_shenfen").delegate("li", "click", function() {
			$("#shenfen").val($(this).text()), globals.personIdFlag = $(this).attr("data-id"), $(this).parent().parent().hide(), $(".select_color").removeClass("select_color")
		}), $(".ul_self_state").delegate("li", "click", function() {
			var a = globals.token,
				c = $(this).text(),
				_ = $(this);
			$.ajax({
				url: GLOBAL_DOMAIN.ctx + "/resume/updateUserStatus.json",
				type: "post",
				data: {
					status: c,
					resumeId: globals.resumeId,
					resubmitToken: a
				},
				dataType: "json"
			}).done(function(a) {
				a.success ? (globals.resubmitToken = a.resubmitToken, updateResumeTime(a.content.refreshTime), $("#self_state").val(c), _.parent().parent().hide(), $(".select_color").removeClass("select_color")) : alert(a.msg || "è¯·åˆ·æ–°é‡è¯•")
			})
		}), $(".mr_sex .mr_man").bind("click", function() {
			$(this).addClass("active").find("i").addClass("active"), $(".mr_sex .mr_women").removeClass("active").find("i").removeClass("active")
		}), $(".mr_sex .mr_women").bind("click", function() {
			$(this).addClass("active").find("i").addClass("active"), $(".mr_sex .mr_man").removeClass("active").find("i").removeClass("active")
		}), $(".sns_area").delegate('input[id^="sns"]', "click", function(e) {
			e.stopPropagation(), $(".select_color").removeClass("select_color"), $(this).parent().addClass("select_color")
		}), $(".sns_area").delegate(".sns_del", "click", function() {
			var a = $(this).parent().find("i").attr("class");
			a = "." + a, $(this).parent().remove(), $(".mr_add_m ul .active").removeClass("active"), $(".mr_add_m " + a).show();
			var c = $(".sns_area .mr_sns_m");
			return 0 == c.length && ($(".mr_add_sns").hide(), $(".sns_empty").show()), !1
		}), $(".mr_add_m li").hover(function() {
			$(this).find("span").show()
		}, function() {
			$(this).find("span").hide()
		}), $(".mr_locks").hover(function() {
			$(this).find("em").show()
		}, function() {
			$(this).find("em").hide()
		}), $(".mr_add_m ul").delegate("li", "click", function(e) {
			e.stopPropagation(), $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
		}), $(".mr_add_op .sns_save").bind("click", function(e) {
			e.stopPropagation();
			var a = "";
			return $(".mr_add_m ul .active").each(function() {
				var c = $(this).data("flag"),
					_ = "sns" + c;
				a += '<div class="form_wrap mr_sns_m">', a += '	<i class="' + _ + '"></i>', a += '	<em class=""></em>', a += '	<a href="javascript:;" class="sns_del"></a>', a += '	<input type="text" id="' + _ + '" name="' + _ + '" data-sns="' + c + '" class="mr_button" />', a += "</div>"
			}), $(".mr_add_m ul .active").removeClass("active"), $(".sns_area").append(a), $(".mr_add_m").slideUp("dn"), !1
		}), $(".mr_add_m").click(function(e) {
			e.stopPropagation()
		}), $(".mr_add_op .sns_cancel").bind("click", function(e) {
			return e.stopPropagation(), $(".mr_add_m li").removeClass("active"), $(".mr_add_m").slideUp("dn"), !1
		}), $(".sns_add").bind("click", function() {
			12 != $(".sns_area .mr_sns_m").length && ($(".mr_add_m li").show(), $(".sns_area i").each(function() {
				var a = $(this).attr("class");
				a = "." + a, $(".mr_add_m " + a).hide()
			}), $(".mr_add_m").slideToggle(300))
		}), $(".sns_add_empty").bind("click", function() {
			12 != $(".sns_area .mr_sns_m").length && ($(".mr_add_m li").show(), $(".sns_area i").each(function() {
				var a = $(this).attr("class");
				a = "." + a, $(".mr_add_m " + a).hide()
			}), $(".mr_add_m").slideToggle(300))
		}), $(".sns_area").delegate("input[id^='sns']", "keyup", function() {
			$.trim($(this).val()) && $(this).parent().find("em").removeClass("mr_no").removeClass("mr_ok").addClass("mr_ok")
		});
		var it = {
			required: !0,
			checkUrlNot: !0,
			maxlength: 100
		};
		$("#olinfoForm").validate({
			rules: {
				mr_year: {
					required: !0
				},
				mr_month: {
					required: !0
				},
				mr_mobile: {
					required: !0,
					isMobile: !0,
					maxlength: 20
				},
				mr_email: {
					required: !0,
					email: !0,
					maxlength: 100
				},
				sns1: it,
				sns2: it,
				sns3: it,
				sns4: it,
				sns5: it,
				sns6: it,
				sns7: it,
				sns8: it,
				sns9: it,
				sns10: it,
				sns11: it,
				sns12: it
			},
			messages: {
				mr_year: {
					required: "å¿…é€‰"
				},
				mr_month: {
					required: "å¿…é€‰"
				},
				mr_mobile: {
					required: "å¿…å¡«",
					isMobile: "è¯·è¾“å…¥æœ‰æ•ˆçš„æ‰‹æœºå·ç ",
					maxlength: "ç›®å‰ä»…æ”¯æŒæœ‰æ•ˆå¤§é™†å’Œæµ·å¤–å·ç "
				},
				mr_email: {
					required: "å¿…å¡«",
					email: "è¯·è¾“å…¥æ­£ç¡®çš„é‚®ç®±",
					maxlength: "è¾“å…¥100ä¸ªå­—ç¬¦ä»¥å†…çš„é‚®ç®±åœ°å€"
				}
			},
			errorPlacement: function(a, c) {
				$(c).data("sns") ? $(c).parent().find("em").addClass("mr_no") : (a.insertAfter($(c).parent()), $(".c_section span.error").css("margin", "5px 0 10px 138px"))
			},
			submitHandler: function(a) {
				return $(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), $("#sess_submit").one("click", function() {
					var _ = $('input[name="shenfen"]', a).val(),
						g = $('input[name="mr_year"]', a).val(),
						b = $('input[name="mr_month"]', a).val(),
						k = $('input[name="xl"]', a).val(),
						w = $('input[name="gznx"]', a).val(),
						y = $('input[name="szcs"]', a).val(),
						C = $('input[name="mr_mobile"]', a).val(),
						j = $('input[name="mr_email"]', a).val(),
						S = $(".sns_area input"),
						T = $(".mr_sex span.active em").text(),
						F = {},
						I = [],
						L = "",
						E = globals.token;
					if (C && "" != C) {
						var O = h(C.split(""), "-");
						C = h(O, "+").join("")
					}
					S.each(function() {
						var a = $(this).val(),
							c = $(this).data("sns");
						F[c] = a;
						var _ = {};
						_.accountId = c, _.accountUrl = a, I.push(_);
						var h = "sns" + c;
						a = 0 == $.trim(a).indexOf("http://") || 0 == $.trim(a).indexOf("https://") ? a : "http://" + a, L += "<a href='" + a + "' target='_blank' data-sns='" + c + "' data-site='" + a + "' class='" + h + "'><span><em></em></span></a>"
					}), I = JSON.stringify(I), $.ajax({
						url: GLOBAL_DOMAIN.ctx + "/resume/basic.json",
						type: "post",
						data: {
							highestEducation: k,
							workYear: w,
							phone: C,
							email: j,
							liveCity: y,
							birthday: g + "." + b,
							workYear: w,
							sex: T,
							type: 1,
							resubmitToken: E,
							socialAccountJson: I,
							userIdentity: globals.personIdFlag
						},
						dataType: "json"
					}).done(function(h) {
						if (globals.token = h.resubmitToken, h.success) {
							$("#sess_submit").hide().siblings("input").show(), $(".w_tips").hide(), z(), Q = "", K = !0, updateResumeTime(h.content.refreshTime);
							var rt = h.content.infoCompleteStatus.score,
								F = parseInt($.trim($(".mr_bfb").text())),
								I = amountScore - F + rt;
							updateRatioRM(rt, I), $("#olinfoForm .mr_info_edit").addClass("dn"), $(".mr_infoed .shenfen em").text(_).attr("title", _), w = $('input[name="gznx"]', a).val();
							var E = w,
								O = E;
							if ("åº”å±Šæ¯•ä¸šç”Ÿ" != $.trim(w) ? ($(".mr_infoed .base_info .job_span").text(w += "å·¥ä½œç»éªŒ"), E += "å·¥ä½œç»éªŒ") : $(".mr_infoed .base_info .job_span").text(w), $(".mr_infoed .base_info .s").text(T), h.content.resume.ageNum) {
								var N = $(".mr_infoed .base_info .a").show();
								N.children(".age").text(h.content.resume.ageNum + "å²"), N.children(".birth_span").html(g + "å¹´" + b + "æœˆå‡ºç”Ÿ<em></em>")
							} else $(".mr_infoed .base_info .a").hide();
							$(".mr_infoed .base_info .x").text(k), $(".mr_infoed .base_info .d").text(y), $(".mr_infoed .mobile em").text(C).attr("title", C), $(".mr_infoed .email em").text(j).attr("title", j), S.length > 0 ? $(".mr_infoed .mr_sns").removeClass("dn") : $(".mr_infoed .mr_sns").addClass("dn"), $(".mr_infoed .mr_sns").html(L);
							var P = $(".mr_module .flag_work"),
								A = $("#workExperience"),
								U = h.content.isOpenMyResume,
								M = h.content.firstOpen;
							if ("åº”å±Šæ¯•ä¸šç”Ÿ" == w) A.find(".mr_title_c").text("å®žä¹ ç»åŽ†"), A.find(".mr_empty_add span").text("æ·»åŠ å®žä¹ ç»åŽ†"), $(".mr_module li[data-md = 'workExperience'] .mr_m_name").text("å®žä¹ ç»åŽ†"), P.is(":hidden") || P.addClass("dn"), v(!1, U, M);
							else {
								if (A.find(".mr_title_c").text("å·¥ä½œç»åŽ†"), A.find(".mr_empty_add span").text("æ·»åŠ å·¥ä½œç»åŽ†"), $(".mr_module li[data-md = 'workExperience'] .mr_m_name").text("å·¥ä½œç»åŽ†"), 0 == $("#workExperience .mr_jobe_list").length) {
									var P = $(".mr_module .flag_work");
									P.is(":hidden") && P.removeClass("dn")
								}
								v(!0, U, M)
							}
							var R = $(".mr_infoed .mr_edit_on");
							R.attr("data-sf", $.trim(_.split("Â·")[0])), R.attr("data-shenfen", _), R.attr("data-sex", T), R.attr("data-xl", k), R.attr("data-gzjy", O), R.attr("data-city", y), R.attr("data-mobile", C), R.attr("data-email", j), R.attr("data-birthYear", g), R.attr("data-birthMonth", b), $(".mr_p_info").show();
							var D = $(".mr_ope .mr_cancel");
							D.attr("data-sf", $.trim(_.split("Â·")[0])), D.attr("data-shenfen", _), D.attr("data-sex", T), D.attr("data-xl", k), D.attr("data-gzjy", O), D.attr("data-city", y), D.attr("data-mobile", C), D.attr("data-email", j), D.attr("data-birthYear", g), D.attr("data-birthMonth", b), c()
						} else alert(h.msg || "è¯·åˆ·æ–°é‡è¯•");
						$(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
					})
				}), $("#mr_mobile").val() != $("#sess_phone").val() && $("#sess_phone").val().length > 0 && $("#mr_email").val() != $("#sess_email").val() && $("#sess_email").val().length > 0 ? ($("#mr_mobile").parent().nextAll("p.w_tips:eq(0)").show(), void $("#sess_submit").show().siblings("input").hide()) : $("#mr_mobile").val() != $("#sess_phone").val() && $("#mr_mobile").val().length > 0 && $("#sess_phone").val().length > 0 ? ($("#mr_mobile").parent().nextAll("p.w_tips:eq(1)").show(), void $("#sess_submit").show().siblings("input").hide()) : ($("#mr_mobile").parent().nextAll("p.w_tips:eq(1)").hide(), $("#mr_email").val() != $("#sess_email").val() && $("#mr_email").val().length > 0 && $("#sess_email").val().length > 0 ? ($("#mr_email").parent().nextAll("p.w_tips:eq(2)").show(), void $("#sess_submit").show().siblings("input").hide()) : ($("#mr_email").parent().nextAll("p.w_tips:eq(2)").hide(), void $("#sess_submit").trigger("click")))
			}
		}), $("#infoForm").validate({
			rules: {
				mr_mobile: {
					required: !0,
					isMobile: !0,
					maxlength: 20
				},
				mr_email: {
					required: !0,
					email: !0,
					maxlength: 100
				}
			},
			messages: {
				mr_mobile: {
					required: "å¿…å¡«",
					isMobile: "è¯·è¾“å…¥æœ‰æ•ˆçš„æ‰‹æœºå·ç ",
					maxlength: "ç›®å‰ä»…æ”¯æŒæœ‰æ•ˆå¤§é™†å’Œæµ·å¤–å·ç "
				},
				mr_email: {
					required: "å¿…å¡«",
					email: "è¯·è¾“å…¥æ­£ç¡®çš„é‚®ç®±",
					maxlength: "è¯·è¾“å…¥æ­£ç¡®çš„é‚®ç®±"
				}
			},
			errorPlacement: function(a, c) {
				$(c).parent().after(a), $(".c_section span.error").css("margin", "5px 0 10px 138px")
			},
			submitHandler: function(a) {
				return $(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), $("#sess_submit").one("click", function() {
					var c = $('input[name="xl"]', a).val(),
						_ = $('input[name="gznx"]', a).val(),
						v = $('input[name="mr_mobile"]', a).val(),
						g = $('input[name="mr_email"]', a).val(),
						b = $('input[name="szcs"]', a).val(),
						k = globals.token;
					if (v && "" != v) {
						var w = h(v.split(","), "-");
						v = h(w, "+").join("")
					}
					$.ajax({
						url: GLOBAL_DOMAIN.ctx + "/resume/basic.json",
						type: "POST",
						data: {
							highestEducation: c,
							workYear: _,
							phone: v,
							email: g,
							liveCity: b,
							type: 1,
							resubmitToken: k
						},
						dataType: "json"
					}).done(function(h) {
						if (globals.token = h.resubmitToken, h.success) {
							$("#sess_submit").hide().siblings("input").show(), $(".w_tips").hide(), z(), Q = "", K = !0, $(".mr_p_info .xl em").text(c);
							var k = _;
							$(".mr_p_info .gzjy em").text("åº”å±Šæ¯•ä¸šç”Ÿ" != $.trim(_) ? _ += "å·¥ä½œç»éªŒ" : _), $(".mr_p_info .city em").text(b), $(".mr_p_info .mobile em").text(v), $(".mr_p_info .email em").text(g).attr("title", g), $("#infoForm .mr_info_edit").addClass("dn");
							var w = $(".mr_p_info .mr_edit_unon");
							w.attr("data-xl", c), w.attr("data-gzjy", k), w.attr("data-city", b), w.attr("data-mobile", v), w.attr("data-email", g), $(".mr_p_info").show()
						} else alert(h.msg || "è¯·åˆ·æ–°é‡è¯•");
						$(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
					})
				}), $("#mr_mobile").val() != $("#sess_phone").val() && $("#sess_phone").val().length > 0 && $("#mr_email").val() != $("#sess_email").val() && $("#sess_email").val().length > 0 ? ($("#mr_mobile").parent().nextAll("p.w_tips:eq(0)").show(), void $("#sess_submit").show().siblings("input").hide()) : $("#mr_mobile").val() != $("#sess_phone").val() && $("#mr_mobile").val().length > 0 && $("#sess_phone").val().length > 0 ? ($("#mr_mobile").parent().nextAll("p.w_tips:eq(1)").show(), void $("#sess_submit").show().siblings("input").hide()) : ($("#mr_mobile").parent().nextAll("p.w_tips:eq(1)").hide(), $("#mr_email").val() != $("#sess_email").val() && $("#mr_email").val().length > 0 && $("#sess_email").val().length > 0 ? ($("#mr_email").parent().nextAll("p.w_tips:eq(2)").show(), void $("#sess_submit").show().siblings("input").hide()) : ($("#mr_email").parent().nextAll("p.w_tips:eq(2)").hide(), void $("#sess_submit").trigger("click")))
			}
		}), $("#infoForm .mr_info_edit .mr_cancel").bind("click", function() {
			$(".mr_info_edit").addClass("dn"), $("#xl").val($(this).attr("data-xl")), $("#gznx").val($(this).attr("data-gzjy")), $("#mr_mobile").val($(this).attr("data-mobile")), $("#mr_email").val($(this).attr("data-email")), $("#szcs").val($(this).attr("data-city")), $("#sess_submit").hide().siblings("input").show(), $(".w_tips").hide(), $(".mr_p_info").show(), K = !0
		}), $("#olinfoForm .mr_info_edit .mr_cancel").bind("click", function() {
			$(".mr_info_edit").addClass("dn");
			var a = $("#olinfoForm");
			a.find("span.error").hide(), a.find("input.error").removeClass("error"), $("#mr_year").val($(this).attr("data-birthYear")), $("#mr_month").val($(this).attr("data-birthMonth"));
			var c = $(this).attr("data-sex");
			$(".mr_sex span,.mr_sex i").removeClass("active"), "ç”·" == c || "" == c ? ($(".mr_sex .mr_man").addClass("active"), $(".mr_sex .mr_man i").addClass("active")) : ($(".mr_sex .mr_women").addClass("active"), $(".mr_sex .mr_women i").addClass("active"));
			var _ = $(".info_t .shenfen em");
			globals.personIdFlag = _.attr("data-id"), $("#shenfen").val(_.text()), $("#xl").val($(this).attr("data-xl")), $("#gznx").val($(this).attr("data-gzjy")), $("#mr_mobile").val($(this).attr("data-mobile")), $("#mr_email").val($(this).attr("data-email")), $("#szcs").val($(this).attr("data-city")), $("#sess_submit").hide().siblings("input").show(), $(".w_tips").hide(), $(".mr_p_info").show(), K = !0, Q = "", z()
		}), $(".mr_p_info .mr_edit_unon").bind("click", function() {
			$(".mr_p_info").hide(), $("#xl").val($(this).attr("data-xl")), $("#gznx").val($(this).attr("data-gzjy")), $("#mr_mobile").val($(this).attr("data-mobile")), $("#mr_email").val($(this).attr("data-email")), $("#szcs").val($(this).attr("data-city")), $("#infoForm .mr_info_edit").removeClass("dn"), $("#infoForm").find(":submit").val("ä¿å­˜").attr("disabled", !1), K = !1
		}), $(".mr_p_info .mr_edit_on").bind("click", function() {
			if ("" == Q) {
				$("#olinfoForm").find(":submit").val("ä¿å­˜").attr("disabled", !1), B(), Q = "olinfoForm", K = !1, $(".mr_p_info").hide();
				var a = $(this).attr("data-sex");
				$(".mr_sex span,.mr_sex i").removeClass("active"), "ç”·" == a ? ($(".mr_sex .mr_man").addClass("active"), $(".mr_sex .mr_man i").addClass("active")) : "å¥³" == a && ($(".mr_sex .mr_women").addClass("active"), $(".mr_sex .mr_women i").addClass("active"));
				var c = $(".info_t .shenfen em");
				globals.personIdFlag = c.attr("data-id"), c.parent().hasClass("dn") ? $("#shenfen").val("") : "Â·" == $.trim(c.text()) ? $("#shenfen").val("") : $("#shenfen").val(c.text()).attr("title", c.text()), "" == $.trim($(".ul_shenfen").text()) ? $(".mr_showidentity_div").bind("click", k) : $(".mr_showidentity_div").unbind("click", k), $("#xl").val($(this).attr("data-xl")), $("#gznx").val($(this).attr("data-gzjy"));
				var _ = $("#gznx").val();
				if ("åº”å±Šæ¯•ä¸šç”Ÿ" == $.trim(_)) {
					var h = $(".ul_shenfen li[data-id = '1']");
					0 != h.length && (globals.personIdFlag = "1")
				} else {
					var v = $(".ul_shenfen li[data-id = '2']");
					0 != v.length && (globals.personIdFlag = "2")
				}
				if ($("#mr_mobile").val($(this).attr("data-mobile")), $("#mr_email").val($(this).attr("data-email")), $("#szcs").val($(this).attr("data-city")), $(".mr_sns a").length > 0) {
					$(".mr_add_sns").show(), $(".sns_empty").hide();
					var g = "";
					$(".mr_sns a").each(function() {
						var a = $(this).data("sns"),
							c = $(this).data("site"),
							_ = "sns" + a;
						g += '<div class="form_wrap mr_sns_m">', g += '	<i class="' + _ + '"></i>', g += '	<em class="mr_ok"></em>', g += '	<a href="javascript:;" class="sns_del"></a>', g += '	<input type="text" id="' + _ + '" name="' + _ + '" data-sns="' + a + '" class="mr_button" value="' + c + '"/>', g += "</div>"
					}), $(".mr_info_edit .sns_area").html(g)
				}
				0 == $(".sns_area .mr_sns_m").length && ($(".mr_add_sns").hide(), $(".sns_empty").show()), $("#olinfoForm .mr_info_edit").removeClass("dn")
			}
		});
		var nt = function() {
				var a, c = $("#uploadImages"),
					_ = c.find("#cropzoom_container"),
					h = c.find("#crop"),
					v = c.find("#restore");
				h.bind("click", function() {
					a.send(GLOBAL_DOMAIN.ctx + "/resume/cutPic.json", "POST", {
						resubmitToken: globals.token
					}, function(c) {
						a.showImage.attr("src", GLOBAL_DOMAIN.ctx + "/" + c.content.uploadPath + "?cc=" + Math.random()), $.colorbox.close(), a.showImage = null, null != c.resubmitToken && "" != c.resubmitToken && (globals.token = c.resubmitToken), updateResumeTime(c.content.refreshTime);
						var rt = c.content.infoCompleteStatus.score,
							_ = parseInt($.trim($(".mr_bfb").text())),
							h = amountScore - _ + rt;
						updateRatioRM(rt, h), $(".shadow").hide(), $(".mr_headfile").hover(function() {
							$(".shadow").show()
						}, function() {
							$(".shadow").hide()
						}), a.restore()
					})
				}), v.bind("click", function() {
					a.restore(), $(".shadow").hide(), $(".mr_headfile").hover(function() {
						$(".shadow").show()
					}, function() {
						$(".shadow").hide()
					}), $.colorbox.close()
				});
				var g = function(h) {
						var v = $(".mr_headimg"),
							g = GLOBAL_DOMAIN.ctx + "/" + h.uploadPath;
						$.colorbox({
							inline: !0,
							href: c,
							title: "é€‰æ‹©è£å‰ªåŒºåŸŸ"
						}), myresumeCommon.config.cutImage.image.source = g, myresumeCommon.config.cutImage.image.width = h.srcImageW, myresumeCommon.config.cutImage.image.height = h.srcImageH, myresumeCommon.config.cutImage.selector.w = myresumeCommon.config.userPhotoSelector.width, myresumeCommon.config.cutImage.selector.h = myresumeCommon.config.userPhotoSelector.height, a = _.cropzoom(myresumeCommon.config.cutImage), a.showImage = null, a.showImage = v
					},
					b = function() {};
				return {
					upSucc: g,
					upFail: b
				}
			}();
		window.uploadPhoto = nt, $("#colorbox").on("click", "#cboxClose", function() {
			"uploadImages" == $(this).siblings("#cboxLoadedContent").children("div").attr("id") && ($(".shadow").hide(), $(".mr_headfile").hover(function() {
				$(".shadow").show()
			}, function() {
				$(".shadow").hide()
			}))
		});
		var st = function() {
				var a, c = $("#uploadLogos"),
					_ = c.find("#cropzoom_container"),
					h = c.find("#crop"),
					v = c.find("#restore"),
					g = function(h, v) {
						var g = $("#" + v).next(".logo_u"),
							b = GLOBAL_DOMAIN.ctx + "/" + h.uploadPath;
						$.colorbox({
							inline: !0,
							href: c,
							title: "é€‰æ‹©è£å‰ªåŒºåŸŸ"
						}), myresumeCommon.config.cutImage.image.source = b, myresumeCommon.config.cutImage.image.width = h.srcImageW, myresumeCommon.config.cutImage.image.height = h.srcImageH, myresumeCommon.config.cutImage.selector.w = myresumeCommon.config.userPhotoSelector.width, myresumeCommon.config.cutImage.selector.h = myresumeCommon.config.userPhotoSelector.height, a = _.cropzoom(myresumeCommon.config.cutImage), a.showImage = null, a.showImage = g
					},
					b = function() {};
				return h.bind("click", function() {
					$(".jobExpForm").find(":submit").val("ä¸Šä¼ ä¸­").attr("disabled", !0), a.send(GLOBAL_DOMAIN.ctx + "/workExperience/cutLogo.json", "POST", {
						resubmitToken: globals.token
					}, function(c) {
						oMoudle.workId = "", a.showImage.css({
							width: 120,
							height: 120
						}).attr("src", GLOBAL_DOMAIN.ctx + "/" + c.content + "?cc=" + Math.random()), a.showImage.prev().prev().removeClass("active").addClass("up"), $.colorbox.close(), a.showImage = null, null != c.resubmitToken && "" != c.resubmitToken && (globals.token = c.resubmitToken), $(".jobExpForm").find(":submit").val("ä¿å­˜").attr("disabled", !1), a.restore()
					})
				}), v.bind("click", function() {
					a.restore(), $.colorbox.close()
				}), {
					upSucc: g,
					upFail: b
				}
			}();
		window.uploadCompanyLogo = st, $(".mr_uploaded").on("click", "a.mr_del", function() {
			confirm("ä½ ç¡®å®šè¦åˆ é™¤è¯¥é™„ä»¶å—ï¼Ÿåˆ é™¤åŽä½ è®¾ç½®çš„é»˜è®¤æŠ•é€’ç®€åŽ†ä¹Ÿå°†å¤±æ•ˆ") && $.ajax({
				url: GLOBAL_DOMAIN.ctx + "/nearBy/delNearBy.json",
				type: "GET"
			}).done(function(a) {
				a.success ? ($(".mr_uploaded").hide(), $(".mr_upload").show()) : alert(a.msg || "è¯·åˆ·æ–°é‡è¯•")
			})
		}), $(".mr_module ul").delegate(".md_flag a", "click", function(e) {
			e.stopPropagation(), $(".mr_module li").removeClass("active"), $(this).parent().addClass("active");
			var a = $(this).parent().data("md");
			C(a, 0)
		}), $(".mr_module").unbind("click"), $(".mr_module").delegate(".hide_md", "click", function() {
			$(this).addClass("dn").addClass("mr_hide");
			var a = $(this).data("md");
			$("#" + a).removeClass("dn"), "customBlock" == a && initTitlePosition(), $(".m_hide").each(function() {
				var d = $(this).data("md");
				if (d == a) {
					$(this).removeClass("dn").addClass("md_flag"), H(a, 0), C(a, 1), $(".mr_module li").removeClass("active"), $(this).addClass("active");
					var c = $(this).attr("data-md");
					"customBlock" == $.trim(c) && $("#customBlock .cust_title span").text("è‡ªå®šä¹‰æ ‡é¢˜"), initTitlePosition()
				}
			}), 9 == $(".mr_module ul .md_flag").length ? $(".mr_module_add").addClass("dn") : $(".mr_module_add").removeClass("dn")
		}), $(".mr_module_add").mouseover(function() {
			$(this).addClass("dn"), $(".hide_md").removeClass("dn"), $(".hide_md").mouseover(function() {
				$(".mr_module_add").addClass("dn"), $(".hide_md").removeClass("dn")
			})
		}), $(".hide_md").mouseout(function() {
			$(".mr_module .hide_md").addClass("dn");
			$(".mr_module .m_hide").each(function(i) {
				$(this).hasClass("dn") && i++
			}), 9 == $(".md_flag").length ? $(".mr_module_add").addClass("dn") : $(".mr_module_add").removeClass("dn")
		}), $(".mr_created").on("click", ".mr_md_del", function(e) {
			e.stopPropagation()
		}), $(".mr_hide_del").bind("click", function(e) {
			e.stopPropagation(), $(".mr_module .mr_md_del").remove(), $(this).parent().after($("#del_hide_tip").html()), oDelMoudle = $(this)
		}), $(".mr_created").on("click", ".mr_md_del .mr_del_cel", function(e) {
			e.stopPropagation(), $(this).parents(".mr_md_del").remove()
		});
		var dt = !0;
		$(".mr_created").on("click", ".mr_md_del .mr_del_btn", function(e) {
			if (dt) {
				e.stopPropagation(), $(this).text("åˆ é™¤ä¸­"), dt = !1;
				var a = $(this);
				$(this).unbind();
				var c, _, h = "",
					v = oDelMoudle.parent().parent().data("md"),
					g = globals.token,
					b = globals.resumeId,
					k = "false";
				switch (v) {
				case "expectJob":
					h = "/expectJobs/delExpectJobs.json", k = globals.hasExpectJobs, _ = $("#expHideId").val(), c = {
						resumeId: b,
						type: 1,
						resubmitToken: g,
						id: _
					}, St.clear();
					break;
				case "projectExperience":
					h = "/projectExperience/delAllProject.json", k = globals.hasProjectExperiences, c = {
						resumeId: b,
						type: 1,
						resubmitToken: g
					}, kt.clear();
					break;
				case "selfDescription":
					h = "/resume/intro.json", k = globals.hasSelf, c = {
						resumeId: b,
						type: 1,
						resubmitToken: g
					}, jt.clear();
					break;
				case "worksShow":
					h = "/workShow/delAllWorkShow.json", k = globals.hasWorkShows, c = {
						resumeId: b,
						type: 1,
						resubmitToken: g
					}, Ft.clear();
					break;
				case "customBlock":
					h = "/userDefine/delUserDefine.json", k = globals.hasUserDefines, _ = $("#customId").val(), c = {
						resumeId: b,
						type: 1,
						resubmitToken: g,
						id: _
					};
					var y = $("#customBlock");
					y.find(".cust_title span").text("è‡ªå®šä¹‰æ ‡é¢˜"), y.find(".custom_list").html("");
					break;
				case "skillsAssess":
					h = "/skillEvaluate/delAllSkill.json", k = globals.hasSkillEvaluates, c = {
						resumeId: b,
						type: 1,
						resubmitToken: g
					}, It.clear();
					break;
				default:
					return
				}
				k ? $.ajax({
					url: GLOBAL_DOMAIN.ctx + h,
					type: "POST",
					data: c,
					dataType: "json"
				}).done(function(c) {
					"expectJob" == v && $("#expHideId").val(""), globals.token = c.resubmitToken, c.success ? w(a, v, 0, c) : alert(c.msg || "è¯·åˆ·æ–°é‡è¯•"), dt = !0
				}) : (w(a, v, 1, 0), dt = !0)
			}
		}), $(".mr_bottom_l").bind("click", function(e) {
			e.stopPropagation();
			var a = $(".mr_down_tip");
			a.is(":hidden") ? a.removeClass("dn") : a.addClass("dn")
		}), $(".mr_down_tip li").bind("click", function(e) {
			e.stopPropagation(), $(".mr_down_tip").addClass("dn")
		}), $(".mr_down_tip li").hover(function() {
			$(".mr_down_tip li.active").removeClass("active"), $(this).addClass("active")
		}, function() {
			$(".mr_down_tip li.active").removeClass("active"), $(this).removeClass("active")
		}), $(".mr_created").delegate(".mr_delete span", "click", function() {
			$(this).prev(".mr_delete_pop").removeClass("dn")
		}), $(".mr_created").delegate(".mr_del_cancel", "click", function() {
			"" == X && $(this).parent().parent().addClass("dn")
		}), $(".mr_created").delegate(".mr_del_ok", "click", function() {
			X = "1";
			var a = $(this).parents(".mr_moudle_content"),
				c = $(this).parents("form"),
				_ = $(".mr_del_ok", c).data("id"),
				h = "";
			switch (Q) {
			case "upJobForm":
				h = "/workExperience/delExp.json";
				break;
			case "upEduForm":
				h = "/educationExperience/delEdu.json";
				break;
			case "upExpJobForm":
				$("#upExpJobForm .mr_cancel").trigger("click");
				break;
			case "upProForm":
				h = myresumeCommon.requestTargets.projectExpDel;
				break;
			default:
				return
			}
			$(this).text("åˆ é™¤ä¸­...").attr("disabled", !0);
			var v = $(this);
			$.ajax({
				url: GLOBAL_DOMAIN.ctx + h,
				type: "POST",
				data: {
					id: _,
					resubmitToken: globals.token
				},
				dataType: "json"
			}).done(function(_) {
				if (_.success) {
					null != _.resubmitToken && "" != _.resubmitToken && (globals.token = _.resubmitToken), updateResumeTime(_.content.refreshTime);
					var rt = _.content.infoCompleteStatus.score,
						h = parseInt($.trim($(".mr_bfb").text())),
						g = amountScore - h + rt;
					switch (amountScore = g, updateRatioRM(rt, g), Q) {
					case "upJobForm":
						var b = _.content.isOpenMyResume,
							k = _.content.firstOpen;
						if (j(b, k), 1 == a.find(".updatejob_wrap .mr_jobe_list").length) {
							a.find(".mr_empty_add").show(); {
								$.trim($(".base_info .j").text())
							}("2" == $(".shenfen em").attr("data-id") || "0" == $(".shenfen em").attr("data-id")) && ($(".mr_infoed .info_t .shenfen").addClass("dn"), $(".mr_p_info .mr_edit_on").attr("data-sf", ""));
							var w = $(".ul_shenfen li[data-id = '2']");
							w && w.remove();
							var y = $(".mr_module .flag_work");
							"å®žä¹ ç»åŽ†" != $.trim($("#workExperience .mr_title_c").text()) && y.is(":hidden") && y.removeClass("dn")
						}
						U(_);
						break;
					case "upEduForm":
						var b = _.content.isOpenMyResume,
							k = _.content.firstOpen;
						if (j(b, k), 1 == a.find(".mr_jobe_list").length) {
							a.find(".mr_empty_add").show(); {
								$.trim($(".base_info .j").text())
							}("1" == $(".shenfen em").attr("data-id") || "0" == $(".shenfen em").attr("data-id")) && ($(".mr_infoed .info_t .shenfen").addClass("dn"), $(".mr_p_info .mr_edit_on").attr("data-sf", ""));
							var C = $(".ul_shenfen li[data-id = '1']");
							C && C.remove();
							var y = $(".mr_module .flag_edu");
							y.is(":hidden") && y.removeClass("dn")
						}
						U(_);
						break;
					case "upExpJobForm":
						$("#upExpJobForm .mr_cancel").trigger("click");
						break;
					case "upProForm":
						$("#currentUpProForm .mr_cancel").trigger("click");
						var S = kt.obj.find(".mr_empty_add"),
							T = _ && _.content && _.content.projectExperiences || [];
						T.length ? (globals.hasProjectExperiences = !0, S.hide()) : (globals.hasProjectExperiences = !1, S.show());
						break;
					default:
						return
					}
					z(), Q = "", K = !0, c.prev().remove(), c.remove()
				} else alert(_.msg || "è¯·åˆ·æ–°é‡è¯•");
				X = "", v.text("åˆ é™¤").attr("disabled", !1)
			})
		});
		var lt = {
			obj: $("#workExperience"),
			clearError: function() {
				this.obj.find("span.error").hide(), this.obj.find("input.error").removeClass("error")
			},
			rules: {
				companyName: {
					required: !0,
					maxlenStr: 40
				},
				positionName: {
					required: !0,
					maxlenStr: 30
				},
				startTime: {
					required: !0
				},
				endTime: {
					required: !0
				},
				editorValue: {
					required: !1,
					ueditorLength: [0, 1600]
				}
			},
			messages: {
				companyName: {
					required: "å¿…å¡«",
					maxlenStr: "è¯·è¾“å…¥80å­—ç¬¦ä»¥å†…çš„å…¬å¸åç§°"
				},
				positionName: {
					required: "å¿…å¡«",
					maxlenStr: "è¯·è¾“å…¥60å­—ç¬¦ä»¥å†…çš„èŒä½åç§°"
				},
				startTime: {
					required: "å¿…å¡«"
				},
				endTime: {
					required: "å¿…å¡«"
				},
				editorValue: {
					ueditorLength: "è¯·è¾“å…¥1600å­—ç¬¦ä»¥å†…çš„å·¥ä½œå†…å®¹"
				}
			},
			AddCancel: function() {
				$("#addJobForm").addClass("dn"), this.obj.find(".mr_jobe_list").length <= 1 && this.obj.find(".mr_empty_add").show(), z(), this.obj.find(".mr_head_r").removeClass("mr_add_grey").removeClass("mr_up_grey").removeClass("mr_addup_cel").children("em").text("æ·»åŠ "), Q = "", K = !0
			},
			UpCancel: function() {
				z(), $("#currentUpJobForm").prev().show(), $("#currentUpJobForm").hide(), $("#currentUpJobForm").attr("id", ""), Q = "", K = !0
			}
		};
		try {
			var mt = new components.CityWrapper({
				container: $("#olinfoForm .city_s"),
				onchange: function(a, c) {
					c.find(".error").hide()
				},
				beforeShown: function(a) {
					$(document).trigger("click"), $(".select_color").removeClass("select_color"), a.addClass("select_color")
				},
				afterHide: function(a) {
					a.removeClass("select_color")
				}
			}),
				ct = new components.CityWrapper({
					container: $("#upExpJobForm .city_s"),
					onchange: function(a, c) {
						c.find(".error").hide()
					},
					beforeShown: function(a) {
						$(document).trigger("click"), $(".select_color").removeClass("select_color"), a.addClass("select_color")
					},
					afterHide: function(a) {
						a.removeClass("select_color")
					}
				}),
				ut = new components.CityWrapper({
					container: $("#infoForm .city_s"),
					onchange: function(a, c) {
						c.find(".error").hide()
					},
					beforeShown: function(a) {
						$(document).trigger("click"), $(".select_color").removeClass("select_color"), a.addClass("select_color")
					},
					afterHide: function(a) {
						a.removeClass("select_color")
					}
				})
		} catch (e) {}
		try {
			var pt, _t, ft = new components.CalendarWrapper({
				container: $("#addJobForm").find(".mr_timed_div:first"),
				onchange: function(a, c) {
					ht.setLeftBoundary(a), c.find(".error").hide()
				},
				beforeShown: function(a) {
					ht.hide(), $(".select_color").removeClass("select_color"), a.addClass("select_color"), a.css("zIndex", "2"), a.siblings("div:last").css("zIndex", "1")
				},
				afterHide: function(a) {
					a.removeClass("select_color"), a.css("zIndex", "auto"), a.siblings("div:last").css("zIndex", "auto")
				}
			}),
				ht = new components.CalendarWrapper({
					container: $("#addJobForm").find(".mr_timed_div:last"),
					onchange: function(a, c) {
						ft.setRightBoundary(a), c.find(".error").hide()
					},
					beforeShown: function(a) {
						ft.hide(), $(".select_color").removeClass("select_color"), a.addClass("select_color")
					},
					afterHide: function(a) {
						a.removeClass("select_color")
					},
					has2Today: !0
				})
		} catch (e) {}
		var $t = null;
		lt.obj.delegate(".mr_head_r", "click", function() {
			$t || ($t = UE.getEditor("ueditor_addjob"), $t.addListener("ready", function() {
				$t.setContent(""), $t.on("contextmenu", function() {
					return !0
				})
			})), $t.addListener("keyup", function() {
				this.sync(), $("#addJobForm").find("textarea").valid()
			}), lt.clearError(), S($t);
			var a = lt.obj.find(".mr_empty_add");
			"æ·»åŠ " == $(this).children("em").text() ? "" == Q && (Q = "addJobForm", K = !1, $("#addJobForm").removeClass("dn"), B(), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").addClass("mr_addup_cel").children("em").text("å–æ¶ˆ"), a.not(":hidden") && a.hide()) : (K = !0, $("#addJobForm").addClass("dn"), z(), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").removeClass("mr_addup_cel").children("em").text("æ·»åŠ "), Q = "", lt.obj.find(".mr_jobe_list").length <= 1 && a.show())
		}), lt.obj.delegate(".mr_empty_add", "click", function() {
			$(this).hide(), $("#workExperience .mr_head_r").trigger("click")
		});
		var vt = void 0;
		lt.obj.delegate(".mr_edit", "click", function() {
			if ("" == Q) {
				B(), Q = "upJobForm", K = !1, $(this).parents(".mr_jobe_list").next().attr("id", "currentUpJobForm"), $(this).parents(".mr_jobe_list").next().show(), $(this).parents(".mr_jobe_list").hide();
				var a = $("#currentUpJobForm");
				a.find(".companyName").val(a.prev().find(".l2 h4").text()), a.find(".autoPosition").val(a.prev().find(".l2 span").text());
				var c;
				"block" != a.prev().find(".mr_content_m").css("display") ? c = "" : (c = a.prev().find(".mr_content_m").html(), c = $.trim(c)), vt = "ueditor_" + $(this).data("expid"), G = null, G = UE.getEditor(vt), G.isReady && G.setContent(c), G.addListener("ready", function() {
					G.setContent(c), G.on("contextmenu", function() {
						return !0
					})
				}), G.addListener("keyup", function() {
					this.sync(), a.find("textarea").valid()
				}), $(".mr_del_ok", a).attr("data-id", $(this).data("expid")), oMoudle.workId = $(this).data("expid"), $("img.logo_u", a).prev().prev().addClass("up");
				var _ = $(this).attr("data-logo");
				"" != _ ? (_ = GLOBAL_DOMAIN.lgsctx + "/" + _, $("img.logo_u", a).css({
					width: 120,
					height: 120
				}).attr("src", _), $("input[name='companyLogoHide']", a).val(_)) : (_ = "", $(".mr_upload_logo div", a).removeClass("up"), $("img.logo_u", a).css({
					width: 0,
					height: 0
				}).attr("src", _), $("input[name='companyLogoHide']", a).val("")), F(), pt = new components.CalendarWrapper({
					container: a.find(".mr_timed_div:first"),
					onchange: function(a, c) {
						_t.setLeftBoundary(a), c.find(".error").hide()
					},
					beforeShown: function(a) {
						_t.hide(), $(".select_color").removeClass("select_color"), a.addClass("select_color")
					},
					afterHide: function(a) {
						a.removeClass("select_color")
					}
				}), _t = new components.CalendarWrapper({
					container: a.find(".mr_timed_div:last"),
					onchange: function(a, c) {
						pt.setRightBoundary(a), c.find(".error").hide()
					},
					beforeShown: function(a) {
						pt.hide(), $(".select_color").removeClass("select_color"), a.addClass("select_color")
					},
					afterHide: function(a) {
						a.removeClass("select_color")
					},
					has2Today: !0
				}), pt.set($(this).attr("data-startime"), !0), _t.set($(this).attr("data-endtime"), !0), handleFrames()
			}
		}), lt.obj.delegate(".mr_upload_logo", "mouseover", function() {
			var a = $(this).find("div");
			a.hasClass("up") || a.addClass("active")
		}), lt.obj.delegate(".mr_upload_logo", "mouseout", function() {
			var a = $(this).find("div");
			a.hasClass("up") || a.removeClass("active")
		}), lt.obj.delegate("#currentUpJobForm .mr_cancel", "click", function() {
			imageOld = "", lt.UpCancel()
		}), $("#addJobForm .mr_cancel").bind("click", function() {
			imageOld = "", lt.AddCancel()
		}), $(".mr_created").delegate("a.mce_fullscreen", "click", function() {
			var a = $("#mce_fullscreen_container .mceToolbarRow1"),
				c = $("#mce_fullscreen_container #mce_fullscreen_toolbargroup"),
				_ = '<a href="javascript:;" class="writeBtn">å†™å¥½äº†</a>',
				h = $(this).attr("id"),
				v = h.split("_");
			h = v[0], c.append(_), $(window).resize(function() {
				$("table#mce_fullscreen_tbl").css("width", "100%")
			}), $("#mce_fullscreen_container .writeBtn").bind("click", function() {
				ff.fullscreenEditor.execCommand("mceFullScreen")
			}), a.find("td:nth-child(3)").addClass("borderLNone");
			var g = $("#mce_fullscreen_ifr")[0].contentDocument.body;
			$(g).css({
				backgroundColor: "#f9f9f9",
				color: "#555",
				fontSize: "16px"
			}), g.focus()
		});
		var gt = {
			obj: $("#educationalBackground"),
			rules: {
				schoolName: {
					required: !0,
					checkNum: !0,
					maxlenStr: 50,
					truename2: !0
				},
				positionName: {
					required: !0,
					checkNum: !0,
					maxlenStr: 50,
					newSpecialChar: !0
				},
				degree_text: {
					required: !0
				},
				graduate_text: {
					required: !0
				}
			},
			messages: {
				schoolName: {
					required: "å¿…å¡«",
					checkNum: "è¯·è¾“å…¥æœ‰æ•ˆçš„å­¦æ ¡åç§°",
					maxlenStr: "è¯·è¾“å…¥æœ‰æ•ˆçš„å­¦æ ¡åç§°",
					truename2: "è¯·è¾“å…¥æœ‰æ•ˆçš„å­¦æ ¡åç§°"
				},
				positionName: {
					required: "å¿…å¡«",
					checkNum: "è¯·è¾“å…¥æœ‰æ•ˆçš„ä¸“ä¸šåç§°",
					maxlenStr: "è¯·è¾“å…¥æœ‰æ•ˆçš„ä¸“ä¸šåç§°",
					newSpecialChar: "è¯·è¾“å…¥æœ‰æ•ˆçš„ä¸“ä¸šåç§°"
				},
				degree_text: {
					required: "å¿…å¡«"
				},
				graduate_text: {
					required: "å¿…å¡«"
				}
			},
			errorPlacement: function(a, c) {
				"hidden" == c.attr("type") ? ($(c).parent().css("margin-bottom", "20px"), a.appendTo($(c).parent())) : "button" == c.attr("type") ? a.appendTo($(c).parent()) : a.insertAfter($(c).parent())
			},
			clearError: function() {
				this.obj.find("span.error").hide(), this.obj.find("input.error").removeClass("error")
			},
			AddCancel: function() {
				$("#addEduForm").addClass("dn"), this.obj.find(".mr_jobe_list").length < 1 && this.obj.find(".mr_empty_add").show(), z(), this.obj.find(".mr_head_r").removeClass("mr_add_grey").removeClass("mr_up_grey").removeClass("mr_addup_cel").children("em").text("æ·»åŠ "), Q = "", K = !0
			},
			UpCancel: function() {
				z(), $("#upEduForm").prev().show(), $("#upEduForm").remove(), Q = "", K = !0
			}
		};
		gt.obj.delegate(".mr_head_r", "click", function() {
			if (gt.clearError(), N(), "æ·»åŠ " == $(this).children("em").text()) {
				var a = gt.obj.find(".mr_empty_add");
				"" == Q && (a.not(":hidden") && a.hide(), Q = "addEduForm", K = !1, $("#addEduForm").removeClass("dn"), B(), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").addClass("mr_addup_cel").children("em").text("å–æ¶ˆ"))
			} else $("#educationalBackground .mr_jobe_list").length < 1 && $("#educationalBackground .mr_empty_add").show(), $("#addEduForm").addClass("dn"), z(), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").removeClass("mr_addup_cel").children("em").text("æ·»åŠ "), Q = ""
		}), gt.obj.delegate(".mr_empty_add", "click", function() {
			$(this).hide(), $("#educationalBackground .mr_head_r").trigger("click")
		}), gt.obj.delegate(".mr_edit", "click", function() {
			if ("" == Q) {
				B(), Q = "upEduForm", K = !1;
				var a = "";
				a = $("#edu_update_hide").html(), $(this).parents(".mr_jobe_list").hide().after(a), L(), E(), $(this).parents(".mr_jobe_list").next().attr("id", "upEduForm");
				var c = $("#upEduForm");
				$("#eduId", c).val($(this).data("eduid")), $(".mr_del_ok", c).attr("data-id", $(this).data("eduid")), oMoudle.eduId = $(this).data("eduid"), $('input[name="schoolName"]', c).val($(this).data("schoolname")), $('input[name="positionName"]', c).val($(this).data("pro")), $('input[name="degree_text"]', c).val($(this).data("edu")), $('input[name="degree_val"]', c).val($(this).data("edu")), $('input[name="graduate_text"]', c).val($(this).data("date")), $('input[name="graduate"]', c).val($(this).data("date")), P()
			}
		}), gt.obj.delegate("#upEduForm .mr_cancel", "click", function() {
			gt.UpCancel()
		}), $("#addEduForm .mr_cancel").bind("click", function() {
			gt.AddCancel()
		}), L(), E();
		var bt, xt, kt = {
			obj: $("#projectExperience"),
			clearError: function() {
				this.obj.find("span.error").hide(), this.obj.find("input.error").removeClass("error")
			},
			AddCancel: function() {
				var a = $("#addProForm");
				a.addClass("dn"), a.find('input[name="projectName"]').val(""), a.find('input[name="thePost"]').val(""), a.find('input[name="startTime"]').val(""), a.find('input[name="endTime"]').val(""), a.find('input[name="pro_link"]').val(""), a.find('input[type="button"]').val(""), this.obj.find(".mr_jobe_list").length <= 2 && (this.obj.find(".mr_empty_add").show(), globals.hasProjectExperiences = !1), z(), this.obj.find(".mr_head_r").removeClass("mr_add_grey").removeClass("mr_up_grey").removeClass("mr_addup_cel").children("em").text("æ·»åŠ "), Q = "", K = !0, this.checkState(), wt.reset(), yt.reset()
			},
			UpCancel: function() {
				z(), $("#currentUpProForm").prev().show(), $("#currentUpProForm").hide(), $("#currentUpProForm").attr("id", ""), Q = "", K = !0, this.checkState()
			},
			checkState: function() {
				this.obj.find(".mr_jobe_list").length <= 2 ? (this.obj.find(".mr_empty_add").show(), globals.hasProjectExperiences = !1) : (this.obj.find(".mr_empty_add").hide(), globals.hasProjectExperiences = !0)
			},
			clear: function() {
				var a = $("#addProForm");
				a.find('input[name="projectName"]').val(""), a.find('input[name="thePost"]').val(""), a.find('input[name="startTime"]').val(""), a.find('input[name="endTime"]').val(""), a.find('input[name="pro_link"]').val(""), a.find('input[type="button"]').val("");
				var c = this.obj;
				c.find(".list_show").html(c.find(".temp_hide").html()), c.find(".mr_empty_add").show(), this.clearError(), this.checkState()
			}
		},
			wt = new components.CalendarWrapper({
				container: $("#addProForm").find(".mr_timed_div:first"),
				onchange: function(a, c) {
					yt.setLeftBoundary(a), c.find(".error").hide()
				},
				beforeShown: function(a) {
					yt.hide(), $(".select_color").removeClass("select_color"), a.addClass("select_color")
				},
				afterHide: function(a) {
					a.removeClass("select_color")
				}
			}),
			yt = new components.CalendarWrapper({
				container: $("#addProForm").find(".mr_timed_div:last"),
				onchange: function(a, c) {
					wt.setRightBoundary(a), c.find(".error").hide()
				},
				beforeShown: function(a) {
					wt.hide(), $(".select_color").removeClass("select_color"), a.addClass("select_color")
				},
				afterHide: function(a) {
					a.removeClass("select_color")
				},
				has2Today: !0
			}),
			Ct = null;
		kt.obj.delegate(".mr_head_r", "click", function() {
			Ct ? Ct.setContent("") : (Ct = UE.getEditor("ueditor_addpro"), Ct.addListener("ready", function() {
				Ct.setContent(""), Ct.on("contextmenu", function() {
					return !0
				})
			}), Ct.addListener("keyup", function() {
				this.sync(), $("#addProForm").find("textarea").valid()
			})), kt.clearError(), M(Ct), "æ·»åŠ " == $(this).children("em").text() ? "" == Q && (Q = "addProForm", K = !1, $("#addProForm").removeClass("dn"), B(), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").addClass("mr_addup_cel").children("em").text("å–æ¶ˆ"), kt.checkState(), kt.obj.find(".mr_empty_add").hide()) : ($("#addProForm").addClass("dn"), z(), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").removeClass("mr_addup_cel").children("em").text("æ·»åŠ "), Q = "", kt.checkState(), kt.obj.find(".mr_jobe_list").length <= 2 && kt.obj.find(".mr_empty_add").show())
		}), kt.obj.delegate(".mr_empty_add", "click", function() {
			$(this).hide(), $("#projectExperience .mr_head_r").trigger("click")
		}), kt.obj.delegate(".mr_edit", "click", function() {
			if ("" == Q) {
				B(), Q = "upProForm", K = !1, $(this).parents(".mr_jobe_list").next().attr("id", "currentUpProForm"), $(this).parents(".mr_jobe_list").next().show(), $(this).parents(".mr_jobe_list").hide();
				var a = $("#currentUpProForm"),
					c = $(this).attr("data-remark") ? $(this).attr("data-remark") : "";
				c = $.trim(c), G = null, G = UE.getEditor("ueditor_" + $(this).attr("data-id")), G.isReady && G.setContent(c), G.addListener("ready", function() {
					G.setContent(c), G.on("contextmenu", function() {
						return !0
					})
				}), G.addListener("keyup", function() {
					this.sync(), a.find("textarea").valid()
				});
				var _ = $(this).parents(".mr_jobe_list");
				R(_.attr("data-id")), a.find(".mr_del_ok").attr("data-id", _.data("id")), a.find('input[name="projectName"]').val($.trim(_.find(".projectTitle").text())), a.find('input[name="thePost"]').val($.trim(_.find(".l2 p").text()));
				var h = $.trim(_.find(".mr_content_r span").text()).split(" - ");
				a.find('input[name="startTime"]').val(h[0]).prev().val(h[0]), a.find('input[name="endTime"]').val(h[1]).prev().val(h[1]), a.find('textarea[name="upproContent"]').val($.trim(_.find(".mr_content_m").html())), a.find('input[name="pro_link"]').val($.trim(_.find(".projectTitle").attr("href"))), kt.checkState(), bt = new components.CalendarWrapper({
					container: a.find(".mr_timed_div:first"),
					onchange: function(a, c) {
						xt.setLeftBoundary(a), c.find(".error").hide()
					},
					beforeShown: function(a) {
						xt.hide(), $(".select_color").removeClass("select_color"), a.addClass("select_color")
					},
					afterHide: function(a) {
						a.removeClass("select_color")
					}
				}), xt = new components.CalendarWrapper({
					container: a.find(".mr_timed_div:last"),
					onchange: function(a, c) {
						bt.setRightBoundary(a), c.find(".error").hide()
					},
					beforeShown: function(a) {
						bt.hide(), $(".select_color").removeClass("select_color"), a.addClass("select_color")
					},
					afterHide: function(a) {
						a.removeClass("select_color")
					},
					has2Today: !0
				}), bt.set(h[0], !0), xt.set(h[1], !0), handleFrames()
			}
		}), kt.obj.delegate("#currentUpProForm .mr_cancel", "click", function() {
			kt.UpCancel()
		}), $("#addProForm .mr_cancel").bind("click", function() {
			kt.AddCancel()
		});
		var jt = {
			obj: $("#selfDescription"),
			clearError: function() {
				this.obj.find("span.error").hide(), this.obj.find("input.error").removeClass("error")
			},
			UpCancel: function() {
				$("#upSelfForm").addClass("dn"), z(), Q = "", K = !0, this.obj.find(".mr_head_r").removeClass("mr_up_grey").removeClass("mr_add_grey").removeClass("mr_addup_cel").children("em").text("ç¼–è¾‘"), this.obj.find(".self_des_list").removeClass("dn"), this.checkState()
			},
			clear: function() {
				jt.obj.find(".mr_self_r").html(""), this.checkState(), this.clearError()
			},
			checkState: function() {
				"" == $.trim($(".mr_self_r").html()) ? (jt.obj.find(".mr_empty_add").show(), jt.obj.find(".self_des_list").addClass("dn")) : (jt.obj.find(".mr_empty_add").hide(), jt.obj.find(".self_des_list").removeClass("dn"))
			}
		};
		jt.obj.delegate(".mr_head_r", "click", function() {
			if (jt.clearError(), "ç¼–è¾‘" == $(this).children("em").text()) {
				if ("" == Q) {
					G = null, G = UE.getEditor("ueditor_selfDescribe");
					var a = jt.obj.find(".mr_self_r").html();
					a = $.trim(a), G.isReady && G.setContent(a), G.addListener("ready", function() {
						G.setContent(a), G.on("contextmenu", function() {
							return !0
						})
					}), G.addListener("keyup", function() {
						this.sync(), $("#upSelfForm").find("textarea").valid()
					}), Q = "upSelfForm", K = !1, $("#upSelfForm").removeClass("dn"), B(), jt.obj.find(".self_des_list").addClass("dn"), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").addClass("mr_addup_cel").children("em").text("å–æ¶ˆ"); {
						$("#upSelfForm")
					}
					jt.obj.find(".mr_empty_add").hide()
				}
			} else $("#upSelfForm").addClass("dn"), z(), $(this).removeClass("mr_up_grey").removeClass("mr_add_grey").removeClass("mr_addup_cel").children("em").text("ç¼–è¾‘"), Q = "", jt.obj.find(".self_des_list").removeClass("dn"), K = !0, "" == G.getContent() && jt.obj.find(".mr_empty_add").show(), jt.checkState()
		}), $("#upSelfForm .mr_cancel").bind("click", function() {
			jt.UpCancel()
		}), jt.obj.find(".mr_empty_add").bind("click", function() {
			jt.obj.find(".mr_head_r").trigger("click")
		}), $("#upSelfForm").submit(function() {
			G.sync()
		}).validate({
			rules: {
				editorValue: {
					required: !0,
					ueditorLength: [10, 1600]
				}
			},
			messages: {
				editorValue: {
					required: "å¿…å¡«",
					ueditorLength: "è¯·è¾“å…¥10-1600å­—ç¬¦çš„è‡ªæˆ‘æè¿°"
				}
			},
			errorPlacement: function(a, c) {
				"text" == c.attr("type") || "button" == c.attr("type") ? ($(c).parent().css("margin-bottom", "20px"), a.appendTo($(c).parent())) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
			},
			submitHandler: function(a) {
				$(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), myresumeCommon.utils.requester({
					url: myresumeCommon.requestTargets.myRemark,
					data: {
						resumeId: globals.resumeId,
						myRemark: G.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>")
					}
				}, function(c) {
					if ($(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1), c.success) {
						jt.clearError(), jt.UpCancel(), jt.obj.find(".mr_self_r").html(c.content.resume.myRemark), updateResumeTime(c.content.refreshTime), globals.hasSelf = !0, "" != oMoudleScore.myRemarkScore && (amountScore -= oMoudleScore.myRemarkScore), oMoudleScore.myRemarkScore = "", "" != $.trim(jt.obj.find(".mr_self_r").html()) && (jt.obj.find(".mr_empty_add").hide(), jt.obj.find(".self_des_list").removeClass("dn"));
						var rt = c.content.infoCompleteStatus.score,
							_ = parseInt($.trim($(".mr_bfb").text())),
							h = amountScore - _ + rt;
						updateRatioRM(rt, h)
					} else $(a).find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (c.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>")
				})
			}
		});
		var St = {
			obj: $("#expectJob"),
			clearError: function() {
				this.obj.find("span.error").hide(), this.obj.find("input.error").removeClass("error")
			},
			UpCancel: function() {
				$("#upExpJobForm").addClass("dn"), z(), Q = "", K = !0, this.obj.find(".mr_head_r").removeClass("mr_up_grey").removeClass("mr_add_grey").removeClass("mr_addup_cel").children("em").text("ç¼–è¾‘"), this.obj.find(".expectjob_list").removeClass("dn"), this.checkState()
			},
			clear: function() {
				{
					var a = $("#expectJob .expectjob_list");
					a.find(".mr_job_name").html(""), a.find(".mr_job_type").html(""), a.find(".mr_job_adr").html(""), a.find(".mr_job_range").html(""), a.find(".mr_job_des").html("")
				}
				this.checkState(), this.clearError()
			},
			checkState: function() {
				"" == $.trim($(".expectjob_list").text()).replace(/\s/g, "") ? (St.obj.find(".expectjob_list").addClass("dn"), St.obj.find(".mr_empty_add").show()) : (St.obj.find(".mr_empty_add").hide(), St.obj.find(".expectjob_list").removeClass("dn"), globals.hasExpectJobs = !0)
			},
			clearCityError: function() {
				St.obj.find(".mr_job_city").find("span.error").hide()
			},
			clearPayError: function() {
				St.obj.find(".mr_pay_div").find("span.error").hide()
			},
			clearPayLayer: function() {
				St.obj.find(".xl_list:first, .xl_list:last").hide()
			}
		};
		St.obj.delegate(".mr_head_r", "click", function() {
			if (St.clearError(), "ç¼–è¾‘" == $(this).children("em").text()) {
				if ("" == Q) {
					var a = $("#expectJob .expectjob_list");
					G = null, G = UE.getEditor("ueditor_expJobDes");
					var c = a.find(".mr_expjob_content").html();
					c = $.trim(c), G.isReady && G.setContent(c), G.addListener("ready", function() {
						G.setContent(c), G.on("contextmenu", function() {
							return !0
						})
					}), G.addListener("keyup", function() {
						this.sync(), $("#upExpJobForm").find("textarea").valid()
					}), Q = "upExpJobForm", K = !1, $("#upExpJobForm").removeClass("dn"), B(), jt.obj.find(".expectjob_list").addClass("dn"), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").addClass("mr_addup_cel").children("em").text("å–æ¶ˆ");
					var _ = a.find(".mr_job_name").text(),
						h = a.find(".mr_job_type").text(),
						v = $(this).attr("data-city") || a.find(".mr_job_adr").text() || $("#mr_mr_head").find(".mr_p_info .base_info em:last").text() || "",
						g = a.find(".mr_job_range").text(),
						b = a.find(".mr_expjob_content").html(),
						k = $("#upExpJobForm");
					$('input[name="expjobName"]', k).val($.trim(_));
					var w = $.trim(h);
					$('input[name="exp_job_type"]', k).val("" == w ? "å…¨èŒ" : w), $('input[name="jobCity"]', k).val($.trim(v)), $('input[name="monthpay"]', k).val($.trim(g)), $("#expJobDes").val($.trim(b)), St.checkState(), St.obj.find(".mr_empty_add").hide(), St.obj.find(".expectjob_list").addClass("dn")
				}
			} else $("#upExpJobForm").addClass("dn"), z(), $(this).removeClass("mr_up_grey").removeClass("mr_add_grey").removeClass("mr_addup_cel").children("em").text("ç¼–è¾‘"), Q = "", jt.obj.find(".expectjob_list").removeClass("dn"), K = !0, St.checkState()
		}), $("#upExpJobForm .mr_cancel").bind("click", function() {
			St.UpCancel()
		}), St.obj.find(".mr_empty_add").bind("click", function() {
			St.obj.find(".mr_head_r").trigger("click")
		}), St.obj.find(".ul_exptype").on("click", "li", function(e) {
			e.stopPropagation(), $(this).parent().parent().prev().val($(this).text()), $(this).parent().parent().hide(), $(".select_color").removeClass("select_color")
		}), St.obj.find(".ul_pay").on("click", "li", function(e) {
			e.stopPropagation(), $(this).parent().parent().prev().val($(this).text()), $(this).parent().parent().hide(), $(".select_color").removeClass("select_color"), St.clearPayError()
		}), $("#upExpJobForm").submit(function() {
			G.sync()
		}).validate({
			rules: {
				expjobName: {
					required: !1,
					maxlenStr: 30,
					positionspecialchar: !0
				},
				editorValue: {
					ueditorLength: [0, 400]
				},
				monthpay: {
					required: !1
				},
				jobCity: {
					required: !1
				}
			},
			messages: {
				expjobName: {
					maxlenStr: "è¯·è¾“å…¥æœ‰æ•ˆçš„æœŸæœ›èŒä½",
					positionspecialchar: "æ ¼å¼é”™è¯¯"
				},
				editorValue: {
					ueditorLength: $.validator.format("è¯·è¾“å…¥400å­—ç¬¦ä»¥å†…çš„è¡¥å……è¯´æ˜Ž")
				}
			},
			errorPlacement: function(a, c) {
				"text" == c.attr("type") || "button" == c.attr("type") ? ($(c).parent().css("margin-bottom", "20px"), a.appendTo($(c).parent())) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
			},
			submitHandler: function(a) {
				$(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0);
				var c = $('input[name="expjobName"]', a).val(),
					_ = $('input[name="exp_job_type"]', a).val(),
					h = $('input[name="jobCity"]', a).val(),
					v = $('input[name="monthpay"]', a).val(),
					g = G.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"),
					b = $.trim($("#expectJob .mr_job_info").attr("data-id"));
				$.ajax({
					url: GLOBAL_DOMAIN.ctx + myresumeCommon.requestTargets.expectJobSave,
					type: "POST",
					data: {
						id: globals.resumeId,
						expectId: b || "",
						city: h,
						positionType: _,
						positionName: c,
						addExplain: g,
						salarys: v,
						resubmitToken: globals.token
					},
					dataType: "json"
				}).done(function(b) {
					if (b.success) {
						"" == $.trim(h) && $("#expectJob .mr_head_r").attr("data-city", ""), null != b.resubmitToken && "" != b.resubmitToken && (globals.token = b.resubmitToken), $(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1), updateResumeTime(b.content.refreshTime), "" != oMoudleScore.expectJobsScore && (amountScore -= oMoudleScore.expectJobsScore), oMoudleScore.expectJobsScore = "";
						var rt = b.content.infoCompleteStatus.score,
							k = parseInt($.trim($(".mr_bfb").text())),
							w = amountScore - k + rt;
						updateRatioRM(rt, w), globals.hasExpectJobs = !0;
						var y = $(".mr_module .flag_hopework");
						y.is(":hidden") || y.addClass("dn");
						var C = $("#expectJob .expectjob_list");
						b.content.expectJobs && $("#expHideId").val(b.content.expectJobs.id), C.find(".mr_job_name").text(c), C.find(".mr_job_name").attr("title", c), C.find(".mr_job_type").text(_), C.find(".mr_job_adr").text(h), C.find(".mr_job_adr").attr("title", h), C.find(".mr_job_range").text(v), C.find(".mr_expjob_content").html(g), b.content.expectJobs && $("#expectJob .mr_job_info").attr("data-id", b.content.expectJobs.id), "" == $.trim(c) ? $(".mr_name_li").addClass("dn") : $(".mr_name_li").removeClass("dn"), "" == $.trim(_) ? $(".mr_jobtype_li").addClass("dn") : $(".mr_jobtype_li").removeClass("dn"), "" == $.trim(h) ? $(".mr_city_li").addClass("dn") : $(".mr_city_li").removeClass("dn"), "" == $.trim(v) ? $(".mr_jobrange_li").addClass("dn") : $(".mr_jobrange_li").removeClass("dn"), "" == $.trim(g) ? $(".mr_job_des").addClass("dn") : $(".mr_job_des").removeClass("dn"), St.UpCancel(), $(".expectjob_list").removeClass("dn"), $("#upExpJobForm").addClass("dn"), z(), Q = "", K = !0, St.checkState()
					} else $(a).find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (b.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>");
					$(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
				})
			}
		});
		var Tt = {
			obj: $("#customBlock"),
			clearError: function() {
				this.obj.find("span.error").hide(), this.obj.find("input.error").removeClass("error")
			},
			UpCancel: function() {
				initTitlePosition(), $("#upCustomForm").addClass("dn"), z(), Q = "", K = !0, this.obj.find(".mr_head_r").removeClass("mr_up_grey").removeClass("mr_add_grey").removeClass("mr_addup_cel").children("em").text("ç¼–è¾‘"), this.obj.find(".custom_list").removeClass("dn");
				var a = $(".mr_content_cus").text();
				"" == $.trim(a) && $("#customBlock .mr_empty_add").show()
			},
			SetTitle: function() {
				var a = $("#customTitleName");
				$("#customBlock .cust_title span").text("" != a.val() && a.val() ? a.val() : "è‡ªå®šä¹‰æ ‡é¢˜")
			}
		};
		Tt.obj.delegate(".mr_empty_add", "click", function() {
			$(this).addClass("dn"), $("#customBlock .mr_head_r").trigger("click")
		}), $("#customCon").bind("full2restore", function() {
			$("#customCon").valid()
		}), Tt.obj.delegate(".mr_head_r", "click", function() {
			$("#customBlock .mr_empty_add").hide(), Tt.clearError(), Tt.obj.find(".mr_add_work img").attr("src", $("#userpic").attr("src"));
			var a = $("#customBlock .cust_title").text(),
				c = $("#customBlock .custom_list").html();
			c = $.trim(c);
			var _ = $.trim(a);
			if ($("#upCustomForm input[name='titleName']").val("è‡ªå®šä¹‰æ ‡é¢˜" == _ ? "" : _), "ç¼–è¾‘" == $(this).children("em").text())"" == Q && (G = null, G = UE.getEditor("ueditor_customBlock"), G.isReady && G.setContent(c), G.addListener("ready", function() {
				G.setContent(c), G.on("contextmenu", function() {
					return !0
				})
			}), G.addListener("keyup", function() {
				this.sync(), $("#upCustomForm").find("textarea").valid()
			}), Q = "upCustomForm", K = !1, $("#upCustomForm").removeClass("dn"), B(), Tt.obj.find(".custom_list").addClass("dn"), $(this).removeClass("mr_add_grey").removeClass("mr_up_grey").addClass("mr_addup_cel").children("em").text("å–æ¶ˆ"));
			else {
				Tt.SetTitle(), initTitlePosition(), $("#upCustomForm").addClass("dn"), z(), $(this).removeClass("mr_up_grey").removeClass("mr_add_grey").removeClass("mr_addup_cel").children("em").text("ç¼–è¾‘"), Q = "", Tt.obj.find(".custom_list").removeClass("dn"), K = !0;
				var h = $(".mr_content_cus").text();
				"" == $.trim(h) && $("#customBlock .mr_empty_add").show()
			}
		}), $("#upCustomForm .mr_cancel").bind("click", function() {
			Tt.SetTitle(), Tt.UpCancel()
		}), $("#upCustomForm").submit(function() {
			G.sync()
		}).validate({
			rules: {
				titleName: {
					required: !0,
					rangeLenStr: [0, 10]
				},
				editorValue: {
					required: !0,
					ueditorLength: [2, 1600]
				}
			},
			messages: {
				titleName: {
					required: "å¿…å¡«",
					rangeLenStr: "è¯·è¾“å…¥20ä¸ªå­—ç¬¦ä»¥å†…çš„æ ‡é¢˜"
				},
				editorValue: {
					required: "å¿…å¡«",
					ueditorLength: "è¯·è¾“å…¥2-1600å­—ç¬¦çš„æœ‰æ•ˆå†…å®¹"
				}
			},
			errorPlacement: function(a, c) {
				"customCon" == c.attr("id") ? $(c).parent().after(a) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
			},
			submitHandler: function(a) {
				var c = globals.token,
					_ = globals.resumeId,
					h = $("#customId").val(),
					v = $('input[name="titleName"]', a).val(),
					g = G.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>");
				$(a).find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), $.ajax({
					url: GLOBAL_DOMAIN.ctx + "/userDefine/titleSave.json",
					type: "post",
					data: {
						id: _,
						defineId: h,
						titleName: v,
						titleContent: g,
						resubmitToken: c
					},
					dataType: "json"
				}).done(function(c) {
					if (c.success) {
						globals.hasUserDefines = !0, globals.token = c.resubmitToken, updateResumeTime(c.content.refreshTime), $(".mr_cancel", a).trigger("click"), $("#customBlock .mr_moudle_content .mr_empty_add").hide(), z(), Q = "", K = !0, Tt.obj.find(".mr_head_r").removeClass("mr_up_grey").removeClass("mr_add_grey").removeClass("mr_addup_cel").children("em").text("ç¼–è¾‘"); {
							var _ = $('input[name="titleName"]', a).val();
							$("#customCon").val()
						}
						$("#customBlock .cust_title span").text(_), $("#upCustomForm").addClass("dn");
						var h = c.content.userDefine,
							v = "";
						v += '<input id="customTitleName" type="hidden" value="' + h.titleName + '" />', v += '<input id="customId" type="hidden" value="' + h.id + '" />', v += '<div class="custom_list ueditor_parse" data-id="' + h.id + '">' + h.titleContent + "</div>", $(".mr_content_cus").html(v), initTitlePosition()
					} else $(a).find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (c.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>");
					$(a).find(":submit").val("ä¿ å­˜").attr("disabled", !1)
				})
			}
		}), $("#upCustomForm input[name='titleName']").keyup(function() {});
		try {
			myresumeCommon.utils.inputerListener($("#upCustomForm input[name='titleName']"), function(a) {
				for (var c = a.length, _ = 0, h = a, i = 0; c > i; i++) {
					a.charCodeAt(i) < 27 || a.charCodeAt(i) > 126 ? _ += 2 : _++;
					var v = $("#titleName");
					if (_ > 20) {
						h = a.substring(0, i), v.val(h);
						break
					}
				}
				$("#customBlock .cust_title span").text("" == h ? "è‡ªå®šä¹‰æ ‡é¢˜" : h);
				var g = parseInt($("#customBlock .cust_title").width()) / 2;
				$("#customBlock .cust_title").css("margin-left", .7 * -g)
			})
		} catch (e) {}
		var Ft = function() {
				var a = {
					upload: 0,
					online: 1
				},
					c = a.upload,
					_ = {
						edit: "æ·»åŠ ",
						cancel: "å–æ¶ˆ"
					},
					h = {
						normal: 0,
						edit: 1
					},
					v = h.normal,
					g = {
						editcancel: "mr_addup_cel"
					},
					b = {
						url: "www.example.com",
						previewText: "<p>è¿™é‡Œæ˜¯ä½ çš„ä½œå“æè¿°</p>"
					},
					k = $("#worksShow"),
					w = k.find(".mr_head_r"),
					y = w.find("em"),
					C = k.find(".mr_moudle_content"),
					j = C.find(".mr_worksshow_forms"),
					S = C.find("#addWorksShowUploadForm"),
					T = C.find("#addWorksShowOnlineForm"),
					F = C.find(".mr_work_online"),
					I = C.find(".mr_work_upload"),
					L = C.find(".mr_cancel"),
					E = C.find(".mr_worksshow_forms .mr_save"),
					O = C.find(".mr_empty_add"),
					N = T.find("#workOnlineUrl"),
					P = T.find(".mr_self_sitelink"),
					A = T.find(".mr_wo_preview"),
					U = S.find("#worksshowUp");
				U.click(function() {
					$(this).blur()
				});
				var M, R = S.find("#worksshowUpShow"),
					D = S.find("#workUploadTitle"),
					J = function() {
						return F.find(".mr_wo_show").length + I.find(".mr_wu_show").length
					},
					H = function() {
						C.find(".mr_worksshow_tab span").bind("click", function() {
							var _ = $(this);
							_.hasClass("selected") || (j.find("span.error").hide(), _.hasClass("mr_wst_uponline") ? (S.hide(), T.show(), c = a.online) : (S.show(), T.hide(), c = a.upload))
						})
					},
					W = null,
					V = null,
					Y = function() {
						"" == Q && (A.html(b.previewText), P.html(b.url), y.text(_.cancel), w.addClass(g.editcancel), R.css({
							width: "0",
							height: "0"
						}), O.hide(), W ? W.setContent("") : (W = UE.getEditor("ueditor_adduploadImage"), W.addListener("ready", function() {
							$("#ueditor_adduploadImage").bind("contextmenu", function() {
								return !1
							}), W.setContent(""), W.on("contextmenu", function() {
								return !0
							})
						})), V ? V.setContent("") : (V = UE.getEditor("ueditor_addonlineImage"), V.addListener("ready", function() {
							$("#ueditor_addonlineImage").bind("contextmenu", function() {
								return !1
							}), V.setContent(""), V.on("contextmenu", function() {
								return !0
							})
						})), nt(N, P, !0), st(A, !0), W.addListener("keyup", function() {
							this.sync(), S.find("textarea").valid()
						}), S.submit(function() {
							W.sync()
						}).validate({
							rules: {
								workPicHidden: {
									required: !0
								},
								workTitle: {
									required: !1,
									maxlenStr: 50
								},
								editorValue: {
									required: !1,
									ueditorLength: [0, 1e3]
								}
							},
							messages: {
								workPicHidden: {
									required: "è¯·é€‰æ‹©è¦ä¸Šä¼ çš„å›¾ç‰‡"
								},
								workTitle: {
									required: "è¯·è¾“å…¥ä½œå“æ ‡é¢˜",
									maxlenStr: "è¯·è¾“å…¥æœ‰æ•ˆçš„ä½œå“æ ‡é¢˜ï¼ˆ100å­—ç¬¦ä»¥å†…ï¼‰"
								},
								editorValue: {
									required: "è¯·æè¿°ä½ çš„ä½œå“",
									ueditorLength: "è¯·è¾“å…¥1000å­—ç¬¦ä»¥å†…çš„æè¿°"
								}
							},
							errorPlacement: function(a, c) {
								"button" == c.attr("type") ? a.appendTo($(c).parent()) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
							}
						}), V.addListener("keyup", function() {
							this.sync(), T.find("textarea").valid()
						}), T.submit(function() {
							V.sync()
						}).validate({
							rules: {
								url: {
									required: !0,
									maxlenStr: 500,
									checkUrl: !0
								},
								editorValue: {
									required: !0,
									ueditorLength: [0, 200]
								}
							},
							messages: {
								url: {
									required: "è¯·è¾“å…¥åœ¨çº¿åœ°å€",
									maxlenStr: "è¯·è¾“å…¥1000å­—ç¬¦ä»¥å†…çš„ç½‘å€",
									checkUrl: "è¯·è¾“å…¥æœ‰æ•ˆçš„åœ¨çº¿åœ°å€"
								},
								editorValue: {
									required: "è¯·æè¿°ä½ çš„ä½œå“",
									ueditorLength: "è¯·è¾“å…¥200å­—ç¬¦ä»¥å†…çš„æè¿°"
								}
							},
							errorPlacement: function(a, c) {
								"button" == c.attr("type") ? a.appendTo($(c).parent()) : a.insertAfter(c.is("textarea") ? c.parent().find(".wrap_editor") : $(c).parent())
							}
						}), j.find(".up").removeClass("up"), j.show(), v = h.edit, Q = c == a.upload ? "addWorksShowUploadForm" : "addWorksShowOnlineForm", K = !1, B())
					},
					X = function() {
						y.text(_.edit), w.removeClass(g.editcancel), j.hide(), !J() && O.show(), v = h.normal, Q = "", K = !0, z()
					},
					Z = function() {
						ot(), v == h.normal ? Y() : X()
					},
					et = function() {
						return {
							id: globals.resumeId,
							wsid: "",
							url: "",
							workName: "",
							imageUrl: "",
							workTitle: "",
							workDescribe: ""
						}
					},
					tt = function(a) {
						var c = a && a.content && a.content.workShows || [],
							_ = {
								online: "",
								upload: ""
							};
						$.each(c, function(a, c) {
							c.url && (_.online += myresumeCommon.utils.strFormat(myresumeCommon.templates.workShowOnline, {
								type: "online",
								id: c.id,
								href: c.url,
								desc: c.workName,
								ahref: ~c.url.indexOf("http://") || ~c.url.indexOf("https://") ? c.url : "http://" + c.url
							})), c.imageUrl && (_.upload += myresumeCommon.utils.strFormat(myresumeCommon.templates.workShowUpload, {
								type: "upload",
								id: c.id,
								imgsrc: c.cutImageUrl,
								imageUrl: c.imageUrl,
								desc: c.workDescribe,
								title: c.workTitle,
								hasTitle: "" != c.workTitle ? "" : "dn"
							}))
						}), F.html(_.online), I.html(_.upload);
						var h = $(".mr_wu_con .mr_content_l");
						h.each(function() {
							var a = $(this);
							a.hasClass("dn") && "" != $.trim(a.parent().next(".mr_wu_con_m").text()) && (a.parent().addClass("step_aside"), a.parent().next(".mr_wu_con_m").addClass("step_content"))
						}), c.length ? O.hide() : O.show(), globals.hasWorkShows = c.length ? !0 : !1, updateResumeTime(a.content.refreshTime), "" != oMoudleScore.workShowScore && (amountScore -= oMoudleScore.workShowScore), oMoudleScore.workShowScore = "";
						var rt = a.content.infoCompleteStatus.score,
							v = parseInt($.trim($(".mr_bfb").text())),
							g = amountScore - v + rt;
						updateRatioRM(rt, g)
					},
					at = function(_) {
						k.find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0);
						var h = et();
						if (c == a.online) {
							var v = N.val();
							myresumeCommon.utils.addHttpPrefix("", v, function(a) {
								v = "" == v ? "" : a
							}), h.url = $.trim(v), h.workName = V.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>")
						} else c == a.upload && (h.workTitle = $.trim(D.val()), h.workDescribe = W.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"), imageOld && "" != imageOld ? (h.imageUrl = $.trim(imageOld), R.attr("data-origin-src", imageOld), k.find(":submit").attr("data-image-old", imageOld), h.cutImageUrl = $.trim(R.attr("data-cut-url"))) : (imageOld = k.find(":submit").attr("data-image-old"), h.imageUrl = $.trim(imageOld), R.attr("data-origin-src", imageOld), h.cutImageUrl = $.trim(R.attr("data-cut-url"))));
						myresumeCommon.utils.requester({
							url: myresumeCommon.requestTargets.workShowSave,
							data: h
						}, function(a) {
							k.find(":submit").val("ä¿ å­˜").attr("disabled", !1);
							var c = k.find(":submit");
							if (a.success) {
								c.parents(".add_worksshow_form").prev(".mr_wu_show").find(".mr_wu_t").find("a").attr("href", GLOBAL_DOMAIN.lgsctx + "/" + a.content.workShow.imageUrl), tt(a), imageOld = "", w.trigger("click");
								var h = $("#worksshowUpShow");
								h.attr("src", "").attr("data-origin-src", "").attr("data-cut-url", "").css({
									width: 0,
									height: 0
								}), h.prev().prev().removeClass("up"), $("#workUploadTitle").val(""), $("#workImagesDescContent").val(""), _ == T && $("#workOnlineUrl").val(""), h.parent().find(".work-pic-hidden").val("")
							} else k.find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (a.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>")
						})
					},
					ot = function() {
						j.find("span.error").hide()
					},
					it = function() {
						var _ = c == a.upload ? S : T;
						return _.valid() && at(_), !1
					},
					nt = function(a, c, _) {
						var h = function() {
								var h = $.trim(a.val());
								_ && myresumeCommon.utils.addHttpPrefix("", h, function(a) {
									h = "" == h ? "" : a
								});
								var v = c[0].tagName.toLowerCase();
								"a" == v ? (0 == h.length, c.attr("href", h), c.html(h)) : (0 == h.length && (h = b.url), c.html(h))
							};
						a.bind("keyup", h).bind("blur", h)
					},
					st = function(a, c) {
						return c ? void V.on("keyup", function() {
							a.html($.trim(V.getContent()))
						}) : void G.on("keyup", function() {
							a.html($.trim(G.getContent()))
						})
					},
					dt = function(a) {
						if ("" == Q) {
							Q = "addWorksShowOnlineFormUpdate", K = !1, B();
							var c = a.next(".addWorksShowOnlineFormUpdate");
							c.find(".workOnlineUrlUpdate").val(a.find(".mr_self_sitelink").attr("href"));
							var _ = "ueditor_" + a.attr("data-id");
							G = null, G = UE.getEditor(_);
							var h = a.find(".mr_wo_preview").html();
							h = $.trim(h), G.isReady && G.setContent(h), G.addListener("ready", function() {
								G.setContent(h), G.on("contextmenu", function() {
									return !0
								})
							}), c.show(), a.hide(), G.addListener("keyup", function() {
								this.sync(), c.find("textarea").valid()
							});
							var v = c.find(".workOnlineUrlUpdate"),
								g = a.attr("data-id"),
								b = c.find(".mr_self_sitelink"),
								k = c.find(".mr_wo_preview");
							nt(v, b, !0), st(k);
							var w = c.find(".mr_save"),
								y = c.find(".mr_cancel"),
								C = c.find(".mr_del_ok");
							c.submit(function() {
								G.sync()
							}).validate({
								rules: {
									url: {
										required: !0,
										maxlenStr: 500,
										checkUrl: !0
									},
									editorValue: {
										required: !0,
										ueditorLength: [0, 200]
									}
								},
								messages: {
									url: {
										required: "è¯·è¾“å…¥åœ¨çº¿åœ°å€",
										maxlenStr: "è¯·è¾“å…¥1000å­—ç¬¦ä»¥å†…çš„ç½‘å€",
										checkUrl: "è¯·è¾“å…¥æœ‰æ•ˆçš„åœ¨çº¿åœ°å€"
									},
									editorValue: {
										required: "è¯·æè¿°ä½ çš„ä½œå“",
										ueditorLength: "è¯·è¾“å…¥200å­—ç¬¦ä»¥å†…çš„æè¿°"
									}
								},
								errorPlacement: function(a, c) {
									"button" == c.attr("type") ? a.appendTo($(c).parent()) : a.insertAfter(c.is("textarea") ? c.parent().find(".wrap_editor") : $(c).parent())
								},
								submitHandler: function() {
									w.val("ä¿å­˜ä¸­...").attr("disabled", !0);
									var a = et();
									a.url = $.trim(v.val()), a.workName = G.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"), a.wsid = g, imageOld && "" != imageOld ? (a.imageUrl = imageOld, w.attr("data-image-old", imageOld)) : a.imageUrl = w.attr("data-image-old"), myresumeCommon.utils.requester({
										url: myresumeCommon.requestTargets.workShowSave,
										data: a
									}, function(a) {
										w.val("ä¿ å­˜").attr("disabled", !1), a.success ? (w.parents(".add_worksshow_form").prev(".mr_wu_show").find(".mr_wu_t").find("a").attr("href", GLOBAL_DOMAIN.lgsctx + "/" + a.content.workShow.imageUrl), tt(a), imageOld = "", y.trigger("click"), z(), Q = "", K = !0, UE.delEditor(_)) : c.find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (a.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>")
									})
								}
							}), y.bind("click", function() {
								a.show(), c.hide(), Q = "", K = !0, z()
							}), C.bind("click", function() {
								C.text("åˆ é™¤ä¸­...").attr("disabled", !0);
								var a = et();
								return a.id = g, myresumeCommon.utils.requester({
									url: myresumeCommon.requestTargets.workShowDel,
									data: a
								}, function(a) {
									tt(a), y.trigger("click"), C.text("åˆ  é™¤").attr("disabled", !1), "" != oMoudleScore.workShowScore && (amountScore -= oMoudleScore.workShowScore), oMoudleScore.workShowScore = "";
									var rt = a.content.infoCompleteStatus.score,
										c = parseInt($.trim($(".mr_bfb").text())),
										_ = amountScore - c + rt;
									amountScore = _, updateRatioRM(rt, _), z(), Q = "", K = !0
								}), !1
							})
						}
					},
					lt = function(a) {
						if ("" == Q) {
							Q = "addWorksShowUploadFormUpdate", K = !1, B();
							var c = a.next(".addWorksShowUploadFormUpdate"),
								_ = "ueditor_" + a.attr("data-id");
							G = null, G = UE.getEditor(_);
							var h = a.find(".mr_wu_con_m").html();
							h = $.trim(h), G.isReady && G.setContent(h), G.addListener("ready", function() {
								G.setContent(h), G.on("contextmenu", function() {
									return !0
								})
							}), G.addListener("keyup", function() {
								this.sync(), c.find("textarea").valid()
							}), c.show(), a.hide();
							var v = c.find(".workUploadTitleUpdate"),
								g = a.attr("data-id"),
								b = $.trim(a.find(".mr_wu_t img").attr("src")),
								k = $.trim(a.find(".mr_wu_t img").attr("data-origin-src")),
								w = $.trim(a.find(".mr_wu_t img").attr("data-cut-url")),
								y = $.trim(a.find(".mr_work_title").text());
							y = y.substring(2, y.length - 2);
							var C = ($.trim(a.find(".mr_wu_con_m").html()), c.find(".worksshow_img"));
							C.attr("data-origin-src", k), C.attr("data-cut-url", w);
							var j = C.prev().prev();
							j.addClass("up"), "" != b ? C.css({
								width: "100%",
								height: "100%"
							}).attr("src", b) : (logoSrc = "", j.removeClass("up"), C.css({
								width: 0,
								height: 0
							}).attr("src", b)), v.val(y);
							var S = c.find(".mr_save"),
								T = c.find(".mr_cancel"),
								F = c.find(".mr_del_ok");
							c.submit(function() {
								G.sync()
							}).validate({
								rules: {
									workPicHidden: {
										required: !0
									},
									workTitle: {
										required: !1,
										maxlenStr: 50
									},
									editorValue: {
										required: !1,
										ueditorLength: [0, 1e3]
									}
								},
								messages: {
									workPicHidden: {
										required: "è¯·é€‰æ‹©è¦ä¸Šä¼ çš„å›¾ç‰‡"
									},
									workTitle: {
										required: "è¯·è¾“å…¥ä½œå“æ ‡é¢˜",
										maxlenStr: "è¯·è¾“å…¥æœ‰æ•ˆçš„ä½œå“æ ‡é¢˜ï¼ˆ100å­—ç¬¦ä»¥å†…ï¼‰"
									},
									editorValue: {
										required: "è¯·æè¿°ä½ çš„ä½œå“",
										ueditorLength: "è¯·è¾“å…¥1000å­—ç¬¦ä»¥å†…çš„æè¿°"
									}
								},
								errorPlacement: function(a, c) {
									"button" == c.attr("type") ? a.appendTo($(c).parent()) : c.is("textarea") ? $(c).parent().find(".wrap_editor").after(a) : a.insertAfter($(c).parent())
								},
								submitHandler: function() {
									S.val("ä¿å­˜ä¸­...").attr("disabled", !0);
									var a = et();
									a.wsid = g, a.workTitle = $.trim(v.val()), a.workDescribe = G.getContent().replace(/<([a-z][a-z0-9]*)[^>]*?(\/?)>/gi, "<$1$2>"), imageOld && "" != imageOld ? (a.imageUrl = $.trim(imageOld), C.attr("data-origin-src", imageOld), S.attr("data-image-old", imageOld)) : a.imageUrl = $.trim(S.attr("data-image-old")), a.cutImageUrl = $.trim(C.attr("data-cut-url")), myresumeCommon.utils.requester({
										url: myresumeCommon.requestTargets.workShowSave,
										data: a
									}, function(a) {
										S.val("ä¿ å­˜").attr("disabled", !1), a.success ? (S.parents(".add_worksshow_form").prev(".mr_wu_show").find(".mr_wu_t").find("a").attr("href", GLOBAL_DOMAIN.lgsctx + "/" + a.content.workShow.imageUrl), tt(a), T.trigger("click"), z(), Q = "", K = !0, UE.delEditor(_)) : c.find(".wrap_editor").after('<span for="ueditor_textarea_editorValue" class="error">' + (a.msg || "è¯·åˆ·æ–°é‡è¯•") + "</span>")
									})
								}
							}), T.bind("click", function() {
								a.show(), c.hide(), Q = "", K = !0, z()
							}), F.bind("click", function() {
								F.text("åˆ é™¤ä¸­...").attr("disabled", !0);
								var a = et();
								return a.id = g, myresumeCommon.utils.requester({
									url: myresumeCommon.requestTargets.workShowDel,
									data: a
								}, function(a) {
									tt(a), T.trigger("click"), F.text("åˆ  é™¤").attr("disabled", !1), z(), Q = "", K = !0
								}), !1
							})
						}
					},
					mt = function() {
						var a = $(this),
							c = a.attr("data-type");
						"online" == c ? dt(a.parents(".mr_wo_show")) : lt(a.parents(".mr_wu_show"))
					},
					ct = function() {
						F.html(""), I.html(""), J() ? O.hide() : O.show()
					},
					ut = function() {
						w.bind("click", Z), L.bind("click", Z), E.bind("click", it), H(), O.click(function() {
							w.trigger("click")
						}), C.delegate(".mr_wo_show .mr_edit_text, .mr_wu_show .mr_edit_text", "click", mt), window.setTimeout(function() {}, 3e3)
					},
					pt = $("#cropimageContainer"),
					_t = pt.find("#cropzoom_container"),
					ft = pt.find("#cropimageEnsure"),
					ht = pt.find("#cropimageRestore");
				ft.bind("click", function() {
					$(".add_worksshow_form").find(":submit").val("ä¸Šä¼ ä¸­").attr("disabled", !0), M.send(GLOBAL_DOMAIN.ctx + myresumeCommon.requestTargets.workCut, "POST", {
						resubmitToken: globals.token
					}, function(a) {
						$(".worksshowUpUpdateShow").prev().prev().prev().removeClass("active").addClass("up"), $(".worksshowUpUpdateShow").parent().find(".work-pic-hidden").val(a.content), $(".worksshowUpUpdateShow").attr("src", GLOBAL_DOMAIN.lgsctx + "/" + a.content).css({
							width: "100%",
							height: "100%"
						}), $(".worksshowUpUpdateShow").attr("data-cut-url", a.content).css({
							width: "100%",
							height: "100%"
						}), M.showImage.prev().prev().prev().removeClass("active").addClass("up"), M.showImage.parent().find(".work-pic-hidden").val(a.content), M.showImage.attr("src", GLOBAL_DOMAIN.lgsctx + "/" + a.content).css({
							width: "100%",
							height: "100%"
						}), M.showImage.attr("data-cut-url", a.content).css({
							width: "100%",
							height: "100%"
						}), $.colorbox.close(), M.showImage = null, null != a.resubmitToken && "" != a.resubmitToken && (globals.token = a.resubmitToken), $(".add_worksshow_form").find(":submit").val("ä¿å­˜").attr("disabled", !1), M.restore()
					})
				}), ht.bind("click", function() {
					$("#worksShow input[name='workPicHidden']").val(""), M.restore(), $.colorbox.close()
				});
				var $t = function(a, c) {
						var _ = $("#" + c + "Show"),
							h = GLOBAL_DOMAIN.lgsctx + "/" + a.uploadPath,
							v = "/" + a.uploadPath;
						_.parent().parent().find(".error").hide(), _.attr("data-origin-src", h), _.attr("data-cut-url", v), imageOld = a.uploadPath, $.colorbox({
							inline: !0,
							href: pt,
							title: "é€‰æ‹©è£å‰ªåŒºåŸŸ"
						}), myresumeCommon.config.cutImage.image.source = h, myresumeCommon.config.cutImage.image.width = a.srcImageW, myresumeCommon.config.cutImage.image.height = a.srcImageH, myresumeCommon.config.cutImage.selector.w = myresumeCommon.config.workShowSelector.width, myresumeCommon.config.cutImage.selector.h = myresumeCommon.config.workShowSelector.height, M = _t.cropzoom(myresumeCommon.config.cutImage), M.showImage = _
					},
					vt = function() {};
				return {
					init: ut,
					addUploadSucc: $t,
					addUploadFail: vt,
					clear: ct
				}
			}();
		window.worksShowOperator = Ft, Ft.init(), $("#worksShow").delegate(".mr_worksshow_upimage", "mouseover", function() {
			var a = $(this).find("div");
			a.hasClass("up") || a.addClass("active")
		}), $("#worksShow").delegate(".mr_worksshow_upimage", "mouseout", function() {
			var a = $(this).find("div");
			a.hasClass("up") || a.removeClass("active")
		});
		var It = function() {
				var a = {
					edit: "ç¼–è¾‘",
					cancel: "å–æ¶ˆ"
				},
					c = {
						normal: 0,
						edit: 1
					},
					_ = {
						skillplanstart: 10,
						skillplanend: 420,
						skillcirclestart: 122,
						skillcircleend: 532,
						allwidth: 410
					},
					h = c.normal,
					v = {
						editcancel: "mr_addup_cel"
					},
					g = {
						inbk: "inline-block"
					},
					b = {
						defaultText: "äº†è§£",
						hashDefine: {
							"äº†è§£": {
								min: 0,
								max: 84
							},
							"ç†Ÿæ‚‰": {
								min: 84,
								max: 168
							},
							"æŽŒæ¡": {
								min: 168,
								max: 252
							},
							"ç²¾é€š": {
								min: 252,
								max: 336
							},
							"ä¸“å®¶": {
								min: 336,
								max: 450
							}
						}
					},
					k = {
						skillTitle: "è¾“å…¥æŠ€èƒ½åç§°"
					},
					w = 5,
					y = function() {
						return h
					},
					C = function(a) {
						var c = b.defaultText;
						for (var _ in b.hashDefine) if (b.hashDefine[_].min < a && a <= b.hashDefine[_].max) {
							c = _;
							break
						}
						return c
					},
					j = $("#skillsAssess"),
					S = j.find(".mr_moudle_content"),
					T = S.find(".mr_skill_con"),
					F = S.find(".me_skill_list"),
					I = j.find(".mr_head_r"),
					L = I.find("em"),
					E = j.find(".mr_skill_delete"),
					O = j.find(".mr_skill_circle"),
					N = j.find(".mr_skill_level"),
					P = j.find(".mr_empty_add"),
					A = j.find(".mr_skill_add"),
					U = j.find(".mr_skill_add_button"),
					M = j.find(".mr_skill_opera"),
					R = M.find(".mr_save"),
					D = M.find(".mr_cancel"),
					J = function() {
						if ("" == Q) {
							L.text(a.cancel), I.addClass(v.editcancel), G(!0), E = F.find(".mr_skill_delete"), O = F.find(".mr_skill_circle"), N = F.find(".mr_skill_level"), E.css("display", g.inbk), O.css("display", g.inbk), N.hide(), A.show(), ot(), h = c.edit;
							var _ = $(".mr_skill_name");
							"è¾“å…¥æŠ€èƒ½åç§°" == $.trim(_.text()) && _.css("font-style", "italic"), Q = "updateSkill", K = !1, B(), S.addClass("mr_skilledit_background")
						}
					},
					H = function() {
						L.text(a.edit), I.removeClass(v.editcancel), G(), E = F.find(".mr_skill_delete"), O = F.find(".mr_skill_circle"), N = F.find(".mr_skill_level"), E.hide(), O.hide(), N.show(), A.hide(), h = c.normal, Q = "", K = !0, z(), S.removeClass("mr_skilledit_background")
					},
					G = function(a) {
						F.children('.mr_skill_con[data-del-flag!="1"]').length || (a ? (P.hide(), F.html(myresumeCommon.utils.strFormat(myresumeCommon.templates.skillItem, {
							skillPercent: "10",
							id: "",
							skillName: k.skillTitle,
							masterLevel: "äº†è§£"
						})), F.children("div").attr("data-add-flag", "1")) : (P.show(), M.hide()))
					},
					W = function() {
						V(), h == c.normal ? J() : H()
					},
					V = function() {
						S.find("div[data-add-flag=1]").remove(), F.children("div[data-del-flag=1]").show().removeAttr("data-del-flag"), nt(S.find("div[data-grade-edit=1]")), S.find(".mr_skill_con").each(function() {
							var a = $(this).find(".mr_skill_name");
							a.text(a.attr("title"))
						})
					},
					Y = function() {
						var a = [];
						return F.children("div[data-del-flag=1][data-add-flag!=1]").each(function(c, _) {
							a.push(_.getAttribute("data-skill-id"))
						}), a
					},
					X = function() {
						var a, c = 40,
							_ = j.find(".mr_skill_con"),
							h = !1,
							v = 0;
						return $.each(_, function(c) {
							var _ = $(this);
							if (1 != _.attr("data-del-flag")) {
								var g = $.trim(_.find(".mr_skill_name").text());
								if ("" == g || ~g.indexOf(k.skillTitle)) return a = c, h = !0, !1;
								var b = getStrLen(g);
								b > v && (v = b, a = c)
							}
						}), h ? (void 0 != a && $(_[a]).find(".mr_skill_name").trigger("click"), myresumeCommon.utils.errorTips(j.find(".error"), "å¿…å¡«"), !1) : v > c ? (void 0 != a && $(_[a]).find(".mr_skill_name").trigger("click"), myresumeCommon.utils.errorTips(j.find(".error"), "è¯·è¾“å…¥20ä¸ªå­—ç¬¦ä»¥å†…çš„æŠ€èƒ½åç§°"), !1) : !0
					},
					Z = function() {
						if (X()) {
							var a = Y(),
								c = at();
							return j.find(":submit").val("ä¿å­˜ä¸­...").attr("disabled", !0), a.length ? void myresumeCommon.utils.requester({
								url: myresumeCommon.requestTargets.skillDel,
								data: {
									skillId: a.join(",")
								}
							}, function() {
								et(c)
							}) : void et(c)
						}
					},
					et = function(a) {
						var c = {
							skillJson: JSON.stringify(a),
							resumeId: globals.resumeId
						};
						myresumeCommon.utils.requester({
							url: myresumeCommon.requestTargets.skillSave,
							data: c
						}, function(a) {
							tt(a), W(), j.find(":submit").val("ä¿ å­˜").attr("disabled", !1)
						})
					},
					tt = function(a) {
						var c = a && a.content && a.content.skillEvaluates || [],
							_ = "";
						$.each(c, function(a, c) {
							_ += myresumeCommon.utils.strFormat(myresumeCommon.templates.skillItem, c)
						}), F.html(_), c.length ? P.hide() : P.show(), nt(F.children()), globals.hasSkillEvaluates = c.length ? !0 : !1, updateResumeTime(a.content.refreshTime), "" != oMoudleScore.skillScore && (amountScore -= oMoudleScore.skillScore), oMoudleScore.skillScore = "";
						var rt = a.content.infoCompleteStatus.score,
							h = parseInt($.trim($(".mr_bfb").text())),
							v = amountScore - h + rt;
						updateRatioRM(rt, v)
					},
					at = function() {
						var a = F.find(".mr_skill_con"),
							c = st(a);
						return c
					},
					ot = function() {
						F.children('.mr_skill_con[data-del-flag!="1"]').length >= w ? U.hide() : U.show()
					},
					it = function(a) {
						a.attr("data-add-flag", "1"), a.removeAttr("data-del-flag"), a.find(".mr_skill_plan em").width(_.skillplanstart), a.find(".mr_skill_circle").css("left", _.skillcirclestart).find("em").text(b.defaultText), a.removeAttr("data-grade").removeAttr("data-grade-edit").removeAttr("data-skill-id"), a.find(".mr_skill_name").attr("title", "").css("font-style", "italic"), a.show(), ot()
					},
					nt = function(a) {
						a = a || T, a.each(function(a, c) {
							var h = _.allwidth * (c.getAttribute("data-grade") / 100),
								v = $(c),
								g = C(h);
							v.find(".mr_skill_plan em").width(_.skillplanstart + h), v.find(".mr_skill_circle").css("left", _.skillcirclestart + h + "px").find("em").text(g), v.find(".mr_skill_level").text(g)
						})
					},
					st = function(a) {
						var c = [];
						return a = a || T, a.each(function(a, h) {
							var v = $(h);
							if (!~$.trim(v.find(".mr_skill_name").text()).indexOf(k.skillTitle) && !v.attr("data-del-flag")) {
								var g = {},
									b = v.find(".mr_skill_plan em").width() - _.skillplanstart,
									w = parseInt(b / _.allwidth * 100);
								g.id = v.attr("data-skill-id") || "", g.skillName = $.trim(v.find(".mr_skill_name").text()), g.masterLevel = $.trim(v.find(".mr_skill_circle").text()), g.skillPercent = 0 > +w ? 0 : w, c.push(g)
							}
						}), c
					},
					dt = function(a) {
						$(this).parent(".mr_skill_con").attr("data-del-flag", 1).hide(), ot(), a.stopPropagation()
					},
					lt = function() {
						F.html(""), P.show()
					},
					mt = function() {
						nt(), I.bind("click", W), D.bind("click", W), P.bind("click", W), R.bind("click", Z), j.delegate(".mr_skill_delete", "click", dt)
					};
				return {
					init: mt,
					clear: lt,
					initWidths: _,
					rangeDefine: b,
					onAddSkill: it,
					defaultsText: k,
					getState: y,
					toggleOpenOnclick: W
				}
			}();
		It.init(), $(".mr_created").delegate(".mr_click_flag", "click", function(e) {
			e.stopPropagation(), $(".xl_list").hide(), $(".select_color").removeClass("select_color"), $(this).addClass("select_color"), mt && mt.hide(), ut && ut.hide(), ct && ct.hide(), wt && wt.hide(), yt && yt.hide(), bt && bt.hide(), xt && xt.hide(), ft && ft.hide(), ht && ht.hide(), pt && pt.hide(), _t && _t.hide(), wt && wt.hide(), yt && yt.hide()
		}), $("#skillsAssess").delegate(".mr_skill_circle", "mousedown", function() {
			var a = $(this),
				c = a.siblings(".mr_skill_plan").find("em"),
				_ = a.parent(".mr_skill_con"),
				h = a.siblings(".mr_skill_plan");
			return a.parent().attr("data-grade-edit", "1"), $(document).on("mousemove", function($) {
				var e = $ || event,
					l = e.clientX - _.offset().left - 122 - a.width() / 2;
				0 > l ? l = 0 : l > h.width() - a.width() / 2 && (l = h.width() - a.width() / 2), a.css({
					left: 122 + l + "px"
				}), c.width(l + a.width() / 2), c.width() <= 84 ? a.find("em").text("äº†è§£") : c.width() > 84 && c.width() <= 168 ? a.find("em").text("ç†Ÿæ‚‰") : c.width() > 168 && c.width() <= 252 ? a.find("em").text("æŽŒæ¡") : c.width() > 252 && c.width() <= 336 ? a.find("em").text("ç²¾é€š") : c.width() > 336 && a.find("em").text("ä¸“å®¶")
			}), $(document).on("mouseup", function() {
				$(this).off("mousemove"), $(this).off("mouseup")
			}), !1
		}), $("#skillsAssess").delegate(".mr_skill_name", "click", function(a) {
			if (It.getState()) {
				$text = $(this).text();
				var c = $('<input type="text" name="skillname" />');
				$(this).empty(), c.appendTo($(this)), c.val($text), c.css({
					width: "90px",
					height: "22px",
					"font-size": "14px",
					border: "none",
					outline: "none",
					margin: "0px",
					padding: "0 5px",
					border: "1px solid #00b88d",
					"line-height": "22px"
				}), c.on("click", function(a) {
					a.stopPropagation()
				}), c.on("focus", function() {
					var a = $.trim(c.val());
					"" == a || a == It.defaultsText.skillTitle ? c.css("color", "silver") : c.css("color", "#000"), c.select()
				}), c.on("blur", function() {
					var a = $.trim(c.val()) || It.defaultsText.skillTitle,
						_ = c.closest(".mr_skill_name");
					_.text(a), a == It.defaultsText.skillTitle ? _.css("font-style", "italic") : _.css("font-style", "normal"), c.remove()
				}), c.on("keyup", function() {
					$.trim(c.val());
					c.css("color", "#000")
				}), c.focus(), a.stopPropagation()
			}
		});
		var Lt, Et = (navigator.appName, navigator.appVersion),
			Ot = Et.split(";");
		Ot.length > 1 && (Lt = Ot[1].replace(/[ ]/g, "")), $(".mr_skill_add_button span").on("click", function(a) {
			var c = $(".mr_skill_con"),
				_ = $(".mr_skill_con").eq(c.length - 1),
				h = _.clone(!0);
			h.find(".mr_skill_name").text(It.defaultsText.skillTitle), _.after(h), It.onAddSkill(h), a.stopPropagation()
		}), $(".mr_set_default").bind("click", function(e) {
			e.stopPropagation();
			var a = $(this),
				c = a.find(".set_default_wrap"),
				_ = a.find(".xl_list");
			c.hasClass("active") ? (c.removeClass("active"), _.hide()) : (c.addClass("active"), _.show())
		}), $(".ul_resume_type li").bind("click", function(e) {
			e.stopPropagation();
			var a = $(this),
				c = a.parent().parent();
			$.ajax({
				url: GLOBAL_DOMAIN.ctx + "/mycenter/resume/setDefaultResume.json",
				type: "POST",
				data: {
					type: a.attr("data-type")
				}
			}).done(function(_) {
				_.success ? (c.hide(), $("#default_resume").val(a.text()), $(".set_default_wrap").removeClass("active")) : alert(_.msg || "è¯·åˆ·æ–°é‡è¯•")
			})
		})
	});
	var uploadFlag = 1;
	window.setTimeout(function() {
		handleFrames()
	}, 7e3);
	var openFlag = !0,
		toggleHandler = function(a) {
			var a = a,
				c = $(a).find("input");
			c.click(function() {
				openFlag && (openFlag = !1, "3" != globals.isOpenResume && "2" != globals.isOpenResume && (c.eq(1).is(":checked") ? switchResumeStatus(0, a, c) : ($.colorbox({
					inline: !0,
					href: $("div#closeplus"),
					title: "æç¤º"
				}), openFlag = !0)))
			}), $(a).hover(function() {
				$(".openresume_tip").toggleClass("dn")
			}, function() {
				$(".openresume_tip").toggleClass("dn")
			}), $("#openResumeStatus .btn").click(function() {
				switchResumeStatus(0, a, c)
			}), $("#closeplus a").click(function() {
				switchResumeStatus(1, a, c)
			})
		},
		oTip = $(".openresume_tip");
	if ("3" == globals.isOpenResume && (oTip.hide(), $(".firstset").show()), $(".toggle").each(function(a, c) {
		toggleHandler(c)
	}), $(".openresume_tip i").bind("click", function(e) {
		e.stopPropagation, $(this).parent().hide()
	}), $(".toggle").mouseover(function() {
		switch (globals.isOpenResume) {
		case "0":
			$(".firstset").show();
			break;
		case "2":
			$(".unopen").show();
			break;
		case "3":
			$(".firstset").show(), $(".unopen").hide()
		}
	}), $(".firstset a").on("click", function() {
		$.ajax({
			url: GLOBAL_DOMAIN.ctx + "/mycenter/openMyResume.json",
			type: "POST",
			data: {
				openStatus: 0
			},
			dataType: "json"
		}).done(function() {
			window.location.href = "https://www.lagou.com/user/resumePrivacy.html"
		})
	}), $(document).on("change", "#resumeUpload", function() {
		file_check($(this), "//www.lagou.com/nearBy/updateMyResume.json", "resumeUpload")
	}), $(document).on("change", "#resumeUpload1", function() {
		file_check($(this), "//www.lagou.com/nearBy/updateMyResume.json", "resumeUpload1")
	}), $("#paiTipTop").size() > 0) {
		var $wrapperPai = $("#paiTipTop");
		sessionStorage.banResumePaiTipTop && "0" != sessionStorage.banResumePaiTipTop || $wrapperPai.show();
		var $btnClosePai = $wrapperPai.find(".btn_close");
		$btnClosePai.on("click", function() {
			$wrapperPai.hide(), sessionStorage.banResumePaiTipTop = 1
		});
		var $exposureTarget = $("#paiTipTop");
		exposure([
			[$exposureTarget.attr("data-lg-tj-id"), $exposureTarget.attr("data-lg-tj-no"), $exposureTarget.attr("data-lg-tj-cid")]
		], "t")
	}
}); /*!mycenter/page/myresume/main.js*/
;
define("mycenter/page/myresume/main", ["require", "exports", "module", "mycenter/modules/myresume/myresume/main", "common/widgets/plat/poster"], function(require) {
	require("mycenter/modules/myresume/myresume/main"), require("common/widgets/plat/poster")
});