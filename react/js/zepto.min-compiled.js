/* Zepto 1.1.6 - zepto ajax event data form touch fx fx_methods - zeptojs.com/license */
var Zepto = function () {
  function L(t) {
    return null == t ? String(t) : j[S.call(t)] || "object";
  }function A(t) {
    return "function" == L(t);
  }function Z(t) {
    return null != t && t == t.window;
  }function $(t) {
    return null != t && t.nodeType == t.DOCUMENT_NODE;
  }function R(t) {
    return "object" == L(t);
  }function k(t) {
    return R(t) && !Z(t) && Object.getPrototypeOf(t) == Object.prototype;
  }function z(t) {
    return "number" == typeof t.length;
  }function F(t) {
    return a.call(t, function (t) {
      return null != t;
    });
  }function _(t) {
    return t.length > 0 ? n.fn.concat.apply([], t) : t;
  }function I(t) {
    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
  }function q(t) {
    return t in c ? c[t] : c[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
  }function H(t, e) {
    return "number" != typeof e || l[I(t)] ? e : e + "px";
  }function U(t) {
    var e, n;return f[t] || (e = u.createElement(t), u.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), f[t] = n), f[t];
  }function X(t) {
    return "children" in t ? s.call(t.children) : n.map(t.childNodes, function (t) {
      return 1 == t.nodeType ? t : void 0;
    });
  }function V(t, e) {
    var n,
        i = t ? t.length : 0;for (n = 0; i > n; n++) this[n] = t[n];this.length = i, this.selector = e || "";
  }function B(n, i, r) {
    for (e in i) r && (k(i[e]) || D(i[e])) ? (k(i[e]) && !k(n[e]) && (n[e] = {}), D(i[e]) && !D(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e]);
  }function Y(t, e) {
    return null == e ? n(t) : n(t).filter(e);
  }function J(t, e, n, i) {
    return A(e) ? e.call(t, n, i) : e;
  }function W(t, e, n) {
    null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
  }function G(e, n) {
    var i = e.className || "",
        r = i && i.baseVal !== t;return n === t ? r ? i.baseVal : i : void (r ? i.baseVal = n : e.className = n);
  }function K(t) {
    try {
      return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t;
    } catch (e) {
      return t;
    }
  }function Q(t, e) {
    e(t);for (var n = 0, i = t.childNodes.length; i > n; n++) Q(t.childNodes[n], e);
  }var t,
      e,
      n,
      i,
      P,
      N,
      r = [],
      o = r.concat,
      a = r.filter,
      s = r.slice,
      u = window.document,
      f = {},
      c = {},
      l = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
      h = /^\s*<(\w+|!)[^>]*>/,
      p = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      d = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      m = /^(?:body|html)$/i,
      g = /([A-Z])/g,
      v = ["val", "css", "html", "text", "data", "width", "height", "offset"],
      y = ["after", "prepend", "before", "append"],
      x = u.createElement("table"),
      w = u.createElement("tr"),
      b = { tr: u.createElement("tbody"), tbody: x, thead: x, tfoot: x, td: w, th: w, "*": u.createElement("div") },
      E = /complete|loaded|interactive/,
      T = /^[\w-]*$/,
      j = {},
      S = j.toString,
      C = {},
      O = u.createElement("div"),
      M = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
      D = Array.isArray || function (t) {
    return t instanceof Array;
  };return C.matches = function (t, e) {
    if (!e || !t || 1 !== t.nodeType) return !1;var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;if (n) return n.call(t, e);var i,
        r = t.parentNode,
        o = !r;return o && (r = O).appendChild(t), i = ~C.qsa(r, e).indexOf(t), o && O.removeChild(t), i;
  }, P = function (t) {
    return t.replace(/-+(.)?/g, function (t, e) {
      return e ? e.toUpperCase() : "";
    });
  }, N = function (t) {
    return a.call(t, function (e, n) {
      return t.indexOf(e) == n;
    });
  }, C.fragment = function (e, i, r) {
    var o, a, f;return p.test(e) && (o = n(u.createElement(RegExp.$1))), o || (e.replace && (e = e.replace(d, "<$1></$2>")), i === t && (i = h.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, o = n.each(s.call(f.childNodes), function () {
      f.removeChild(this);
    })), k(r) && (a = n(o), n.each(r, function (t, e) {
      v.indexOf(t) > -1 ? a[t](e) : a.attr(t, e);
    })), o;
  }, C.Z = function (t, e) {
    return new V(t, e);
  }, C.isZ = function (t) {
    return t instanceof C.Z;
  }, C.init = function (e, i) {
    var r;if (!e) return C.Z();if ("string" == typeof e) {
      if (e = e.trim(), "<" == e[0] && h.test(e)) r = C.fragment(e, RegExp.$1, i), e = null;else {
        if (i !== t) return n(i).find(e);r = C.qsa(u, e);
      }
    } else {
      if (A(e)) return n(u).ready(e);if (C.isZ(e)) return e;if (D(e)) r = F(e);else if (R(e)) r = [e], e = null;else if (h.test(e)) r = C.fragment(e.trim(), RegExp.$1, i), e = null;else {
        if (i !== t) return n(i).find(e);r = C.qsa(u, e);
      }
    }return C.Z(r, e);
  }, n = function (t, e) {
    return C.init(t, e);
  }, n.extend = function (t) {
    var e,
        n = s.call(arguments, 1);return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
      B(t, n, e);
    }), t;
  }, C.qsa = function (t, e) {
    var n,
        i = "#" == e[0],
        r = !i && "." == e[0],
        o = i || r ? e.slice(1) : e,
        a = T.test(o);return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : s.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
  }, n.contains = u.documentElement.contains ? function (t, e) {
    return t !== e && t.contains(e);
  } : function (t, e) {
    for (; e && (e = e.parentNode);) if (e === t) return !0;return !1;
  }, n.type = L, n.isFunction = A, n.isWindow = Z, n.isArray = D, n.isPlainObject = k, n.isEmptyObject = function (t) {
    var e;for (e in t) return !1;return !0;
  }, n.inArray = function (t, e, n) {
    return r.indexOf.call(e, t, n);
  }, n.camelCase = P, n.trim = function (t) {
    return null == t ? "" : String.prototype.trim.call(t);
  }, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function () {}, n.map = function (t, e) {
    var n,
        r,
        o,
        i = [];if (z(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);else for (o in t) n = e(t[o], o), null != n && i.push(n);return _(i);
  }, n.each = function (t, e) {
    var n, i;if (z(t)) {
      for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t;
    } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;return t;
  }, n.grep = function (t, e) {
    return a.call(t, e);
  }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
    j["[object " + e + "]"] = e.toLowerCase();
  }), n.fn = { constructor: C.Z, length: 0, forEach: r.forEach, reduce: r.reduce, push: r.push, sort: r.sort, splice: r.splice, indexOf: r.indexOf, concat: function () {
      var t,
          e,
          n = [];for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = C.isZ(e) ? e.toArray() : e;return o.apply(C.isZ(this) ? this.toArray() : this, n);
    }, map: function (t) {
      return n(n.map(this, function (e, n) {
        return t.call(e, n, e);
      }));
    }, slice: function () {
      return n(s.apply(this, arguments));
    }, ready: function (t) {
      return E.test(u.readyState) && u.body ? t(n) : u.addEventListener("DOMContentLoaded", function () {
        t(n);
      }, !1), this;
    }, get: function (e) {
      return e === t ? s.call(this) : this[e >= 0 ? e : e + this.length];
    }, toArray: function () {
      return this.get();
    }, size: function () {
      return this.length;
    }, remove: function () {
      return this.each(function () {
        null != this.parentNode && this.parentNode.removeChild(this);
      });
    }, each: function (t) {
      return r.every.call(this, function (e, n) {
        return t.call(e, n, e) !== !1;
      }), this;
    }, filter: function (t) {
      return A(t) ? this.not(this.not(t)) : n(a.call(this, function (e) {
        return C.matches(e, t);
      }));
    }, add: function (t, e) {
      return n(N(this.concat(n(t, e))));
    }, is: function (t) {
      return this.length > 0 && C.matches(this[0], t);
    }, not: function (e) {
      var i = [];if (A(e) && e.call !== t) this.each(function (t) {
        e.call(this, t) || i.push(this);
      });else {
        var r = "string" == typeof e ? this.filter(e) : z(e) && A(e.item) ? s.call(e) : n(e);this.forEach(function (t) {
          r.indexOf(t) < 0 && i.push(t);
        });
      }return n(i);
    }, has: function (t) {
      return this.filter(function () {
        return R(t) ? n.contains(this, t) : n(this).find(t).size();
      });
    }, eq: function (t) {
      return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
    }, first: function () {
      var t = this[0];return t && !R(t) ? t : n(t);
    }, last: function () {
      var t = this[this.length - 1];return t && !R(t) ? t : n(t);
    }, find: function (t) {
      var e,
          i = this;return e = t ? "object" == typeof t ? n(t).filter(function () {
        var t = this;return r.some.call(i, function (e) {
          return n.contains(e, t);
        });
      }) : 1 == this.length ? n(C.qsa(this[0], t)) : this.map(function () {
        return C.qsa(this, t);
      }) : n();
    }, closest: function (t, e) {
      var i = this[0],
          r = !1;for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : C.matches(i, t));) i = i !== e && !$(i) && i.parentNode;return n(i);
    }, parents: function (t) {
      for (var e = [], i = this; i.length > 0;) i = n.map(i, function (t) {
        return (t = t.parentNode) && !$(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
      });return Y(e, t);
    }, parent: function (t) {
      return Y(N(this.pluck("parentNode")), t);
    }, children: function (t) {
      return Y(this.map(function () {
        return X(this);
      }), t);
    }, contents: function () {
      return this.map(function () {
        return this.contentDocument || s.call(this.childNodes);
      });
    }, siblings: function (t) {
      return Y(this.map(function (t, e) {
        return a.call(X(e.parentNode), function (t) {
          return t !== e;
        });
      }), t);
    }, empty: function () {
      return this.each(function () {
        this.innerHTML = "";
      });
    }, pluck: function (t) {
      return n.map(this, function (e) {
        return e[t];
      });
    }, show: function () {
      return this.each(function () {
        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = U(this.nodeName));
      });
    }, replaceWith: function (t) {
      return this.before(t).remove();
    }, wrap: function (t) {
      var e = A(t);if (this[0] && !e) var i = n(t).get(0),
          r = i.parentNode || this.length > 1;return this.each(function (o) {
        n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i);
      });
    }, wrapAll: function (t) {
      if (this[0]) {
        n(this[0]).before(t = n(t));for (var e; (e = t.children()).length;) t = e.first();n(t).append(this);
      }return this;
    }, wrapInner: function (t) {
      var e = A(t);return this.each(function (i) {
        var r = n(this),
            o = r.contents(),
            a = e ? t.call(this, i) : t;o.length ? o.wrapAll(a) : r.append(a);
      });
    }, unwrap: function () {
      return this.parent().each(function () {
        n(this).replaceWith(n(this).children());
      }), this;
    }, clone: function () {
      return this.map(function () {
        return this.cloneNode(!0);
      });
    }, hide: function () {
      return this.css("display", "none");
    }, toggle: function (e) {
      return this.each(function () {
        var i = n(this);(e === t ? "none" == i.css("display") : e) ? i.show() : i.hide();
      });
    }, prev: function (t) {
      return n(this.pluck("previousElementSibling")).filter(t || "*");
    }, next: function (t) {
      return n(this.pluck("nextElementSibling")).filter(t || "*");
    }, html: function (t) {
      return 0 in arguments ? this.each(function (e) {
        var i = this.innerHTML;n(this).empty().append(J(this, t, e, i));
      }) : 0 in this ? this[0].innerHTML : null;
    }, text: function (t) {
      return 0 in arguments ? this.each(function (e) {
        var n = J(this, t, e, this.textContent);this.textContent = null == n ? "" : "" + n;
      }) : 0 in this ? this[0].textContent : null;
    }, attr: function (n, i) {
      var r;return "string" != typeof n || 1 in arguments ? this.each(function (t) {
        if (1 === this.nodeType) if (R(n)) for (e in n) W(this, e, n[e]);else W(this, n, J(this, i, t, this.getAttribute(n)));
      }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t;
    }, removeAttr: function (t) {
      return this.each(function () {
        1 === this.nodeType && t.split(" ").forEach(function (t) {
          W(this, t);
        }, this);
      });
    }, prop: function (t, e) {
      return t = M[t] || t, 1 in arguments ? this.each(function (n) {
        this[t] = J(this, e, n, this[t]);
      }) : this[0] && this[0][t];
    }, data: function (e, n) {
      var i = "data-" + e.replace(g, "-$1").toLowerCase(),
          r = 1 in arguments ? this.attr(i, n) : this.attr(i);return null !== r ? K(r) : t;
    }, val: function (t) {
      return 0 in arguments ? this.each(function (e) {
        this.value = J(this, t, e, this.value);
      }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
        return this.selected;
      }).pluck("value") : this[0].value);
    }, offset: function (t) {
      if (t) return this.each(function (e) {
        var i = n(this),
            r = J(this, t, e, i.offset()),
            o = i.offsetParent().offset(),
            a = { top: r.top - o.top, left: r.left - o.left };"static" == i.css("position") && (a.position = "relative"), i.css(a);
      });if (!this.length) return null;if (!n.contains(u.documentElement, this[0])) return { top: 0, left: 0 };var e = this[0].getBoundingClientRect();return { left: e.left + window.pageXOffset, top: e.top + window.pageYOffset, width: Math.round(e.width), height: Math.round(e.height) };
    }, css: function (t, i) {
      if (arguments.length < 2) {
        var r,
            o = this[0];if (!o) return;if (r = getComputedStyle(o, ""), "string" == typeof t) return o.style[P(t)] || r.getPropertyValue(t);if (D(t)) {
          var a = {};return n.each(t, function (t, e) {
            a[e] = o.style[P(e)] || r.getPropertyValue(e);
          }), a;
        }
      }var s = "";if ("string" == L(t)) i || 0 === i ? s = I(t) + ":" + H(t, i) : this.each(function () {
        this.style.removeProperty(I(t));
      });else for (e in t) t[e] || 0 === t[e] ? s += I(e) + ":" + H(e, t[e]) + ";" : this.each(function () {
        this.style.removeProperty(I(e));
      });return this.each(function () {
        this.style.cssText += ";" + s;
      });
    }, index: function (t) {
      return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0]);
    }, hasClass: function (t) {
      return t ? r.some.call(this, function (t) {
        return this.test(G(t));
      }, q(t)) : !1;
    }, addClass: function (t) {
      return t ? this.each(function (e) {
        if ("className" in this) {
          i = [];var r = G(this),
              o = J(this, t, e, r);o.split(/\s+/g).forEach(function (t) {
            n(this).hasClass(t) || i.push(t);
          }, this), i.length && G(this, r + (r ? " " : "") + i.join(" "));
        }
      }) : this;
    }, removeClass: function (e) {
      return this.each(function (n) {
        if ("className" in this) {
          if (e === t) return G(this, "");i = G(this), J(this, e, n, i).split(/\s+/g).forEach(function (t) {
            i = i.replace(q(t), " ");
          }), G(this, i.trim());
        }
      });
    }, toggleClass: function (e, i) {
      return e ? this.each(function (r) {
        var o = n(this),
            a = J(this, e, r, G(this));a.split(/\s+/g).forEach(function (e) {
          (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e);
        });
      }) : this;
    }, scrollTop: function (e) {
      if (this.length) {
        var n = "scrollTop" in this[0];return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
          this.scrollTop = e;
        } : function () {
          this.scrollTo(this.scrollX, e);
        });
      }
    }, scrollLeft: function (e) {
      if (this.length) {
        var n = "scrollLeft" in this[0];return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
          this.scrollLeft = e;
        } : function () {
          this.scrollTo(e, this.scrollY);
        });
      }
    }, position: function () {
      if (this.length) {
        var t = this[0],
            e = this.offsetParent(),
            i = this.offset(),
            r = m.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, { top: i.top - r.top, left: i.left - r.left };
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var t = this.offsetParent || u.body; t && !m.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;return t;
      });
    } }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (e) {
    var i = e.replace(/./, function (t) {
      return t[0].toUpperCase();
    });n.fn[e] = function (r) {
      var o,
          a = this[0];return r === t ? Z(a) ? a["inner" + i] : $(a) ? a.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function (t) {
        a = n(this), a.css(e, J(this, r, t, a[e]()));
      });
    };
  }), y.forEach(function (t, e) {
    var i = e % 2;n.fn[t] = function () {
      var t,
          o,
          r = n.map(arguments, function (e) {
        return t = L(e), "object" == t || "array" == t || null == e ? e : C.fragment(e);
      }),
          a = this.length > 1;return r.length < 1 ? this : this.each(function (t, s) {
        o = i ? s : s.parentNode, s = 0 == e ? s.nextSibling : 1 == e ? s.firstChild : 2 == e ? s : null;var f = n.contains(u.documentElement, o);r.forEach(function (t) {
          if (a) t = t.cloneNode(!0);else if (!o) return n(t).remove();o.insertBefore(t, s), f && Q(t, function (t) {
            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
          });
        });
      });
    }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) {
      return n(e)[t](this), this;
    };
  }), C.Z.prototype = V.prototype = n.fn, C.uniq = N, C.deserializeValue = K, n.zepto = C, n;
}();window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
  function h(e, n, i) {
    var r = t.Event(n);return t(e).trigger(r, i), !r.isDefaultPrevented();
  }function p(t, e, i, r) {
    return t.global ? h(e || n, i, r) : void 0;
  }function d(e) {
    e.global && 0 === t.active++ && p(e, null, "ajaxStart");
  }function m(e) {
    e.global && ! --t.active && p(e, null, "ajaxStop");
  }function g(t, e) {
    var n = e.context;return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e]);
  }function v(t, e, n, i) {
    var r = n.context,
        o = "success";n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), x(o, e, n);
  }function y(t, e, n, i, r) {
    var o = i.context;i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), x(e, n, i);
  }function x(t, e, n) {
    var i = n.context;n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n);
  }function w() {}function b(t) {
    return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : a.test(t) ? "script" : s.test(t) && "xml") || "text";
  }function E(t, e) {
    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
  }function T(e) {
    e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0);
  }function j(e, n, i, r) {
    return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), { url: e, data: n, success: i, dataType: r };
  }function C(e, n, i, r) {
    var o,
        a = t.isArray(n),
        s = t.isPlainObject(n);t.each(n, function (n, u) {
      o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? C(e, u, i, n) : e.add(n, u);
    });
  }var i,
      r,
      e = 0,
      n = window.document,
      o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      a = /^(?:text|application)\/javascript/i,
      s = /^(?:text|application)\/xml/i,
      u = "application/json",
      f = "text/html",
      c = /^\s*$/,
      l = n.createElement("a");l.href = window.location.href, t.active = 0, t.ajaxJSONP = function (i, r) {
    if (!("type" in i)) return t.ajax(i);var f,
        h,
        o = i.jsonpCallback,
        a = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
        s = n.createElement("script"),
        u = window[a],
        c = function (e) {
      t(s).triggerHandler("error", e || "abort");
    },
        l = { abort: c };return r && r.promise(l), t(s).on("load error", function (e, n) {
      clearTimeout(h), t(s).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[a] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0;
    }), g(l, i) === !1 ? (c("abort"), l) : (window[a] = function () {
      f = arguments;
    }, s.src = i.url.replace(/\?(.+)=\?/, "?$1=" + a), n.head.appendChild(s), i.timeout > 0 && (h = setTimeout(function () {
      c("timeout");
    }, i.timeout)), l);
  }, t.ajaxSettings = { type: "GET", beforeSend: w, success: w, error: w, complete: w, context: null, global: !0, xhr: function () {
      return new window.XMLHttpRequest();
    }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: u, xml: "application/xml, text/xml", html: f, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0 }, t.ajax = function (e) {
    var s,
        u,
        o = t.extend({}, e || {}),
        a = t.Deferred && t.Deferred();for (i in t.ajaxSettings) void 0 === o[i] && (o[i] = t.ajaxSettings[i]);d(o), o.crossDomain || (s = n.createElement("a"), s.href = o.url, s.href = s.href, o.crossDomain = l.protocol + "//" + l.host != s.protocol + "//" + s.host), o.url || (o.url = window.location.toString()), (u = o.url.indexOf("#")) > -1 && (o.url = o.url.slice(0, u)), T(o);var f = o.dataType,
        h = /\?.+=\?/.test(o.url);if (h && (f = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != f && "jsonp" != f) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == f) return h || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, a);var P,
        p = o.accepts[f],
        m = {},
        x = function (t, e) {
      m[t.toLowerCase()] = [t, e];
    },
        j = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
        S = o.xhr(),
        C = S.setRequestHeader;if (a && a.promise(S), o.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", p || "*/*"), (p = o.mimeType || p) && (p.indexOf(",") > -1 && (p = p.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(p)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && x("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (r in o.headers) x(r, o.headers[r]);if (S.setRequestHeader = x, S.onreadystatechange = function () {
      if (4 == S.readyState) {
        S.onreadystatechange = w, clearTimeout(P);var e,
            n = !1;if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == j) {
          f = f || b(o.mimeType || S.getResponseHeader("content-type")), e = S.responseText;try {
            "script" == f ? (1, eval)(e) : "xml" == f ? e = S.responseXML : "json" == f && (e = c.test(e) ? null : t.parseJSON(e));
          } catch (i) {
            n = i;
          }n ? y(n, "parsererror", S, o, a) : v(e, S, o, a);
        } else y(S.statusText || null, S.status ? "error" : "abort", S, o, a);
      }
    }, g(S, o) === !1) return S.abort(), y(null, "abort", S, o, a), S;if (o.xhrFields) for (r in o.xhrFields) S[r] = o.xhrFields[r];var N = "async" in o ? o.async : !0;S.open(o.type, o.url, N, o.username, o.password);for (r in m) C.apply(S, m[r]);return o.timeout > 0 && (P = setTimeout(function () {
      S.onreadystatechange = w, S.abort(), y(null, "timeout", S, o, a);
    }, o.timeout)), S.send(o.data ? o.data : null), S;
  }, t.get = function () {
    return t.ajax(j.apply(null, arguments));
  }, t.post = function () {
    var e = j.apply(null, arguments);return e.type = "POST", t.ajax(e);
  }, t.getJSON = function () {
    var e = j.apply(null, arguments);return e.dataType = "json", t.ajax(e);
  }, t.fn.load = function (e, n, i) {
    if (!this.length) return this;var s,
        r = this,
        a = e.split(/\s/),
        u = j(e, n, i),
        f = u.success;return a.length > 1 && (u.url = a[0], s = a[1]), u.success = function (e) {
      r.html(s ? t("<div>").html(e.replace(o, "")).find(s) : e), f && f.apply(r, arguments);
    }, t.ajax(u), this;
  };var S = encodeURIComponent;t.param = function (e, n) {
    var i = [];return i.add = function (e, n) {
      t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(S(e) + "=" + S(n));
    }, C(i, e, n), i.join("&").replace(/%20/g, "+");
  };
}(Zepto), function (t) {
  function l(t) {
    return t._zid || (t._zid = e++);
  }function h(t, e, n, i) {
    if (e = p(e), e.ns) var r = d(e.ns);return (a[l(t)] || []).filter(function (t) {
      return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!n || l(t.fn) === l(n)) && (!i || t.sel == i);
    });
  }function p(t) {
    var e = ("" + t).split(".");return { e: e[0], ns: e.slice(1).sort().join(" ") };
  }function d(t) {
    return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
  }function m(t, e) {
    return t.del && !u && t.e in f || !!e;
  }function g(t) {
    return c[t] || u && f[t] || t;
  }function v(e, i, r, o, s, u, f) {
    var h = l(e),
        d = a[h] || (a[h] = []);i.split(/\s/).forEach(function (i) {
      if ("ready" == i) return t(document).ready(r);var a = p(i);a.fn = r, a.sel = s, a.e in c && (r = function (e) {
        var n = e.relatedTarget;return !n || n !== this && !t.contains(this, n) ? a.fn.apply(this, arguments) : void 0;
      }), a.del = u;var l = u || r;a.proxy = function (t) {
        if (t = T(t), !t.isImmediatePropagationStopped()) {
          t.data = o;var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));return i === !1 && (t.preventDefault(), t.stopPropagation()), i;
        }
      }, a.i = d.length, d.push(a), "addEventListener" in e && e.addEventListener(g(a.e), a.proxy, m(a, f));
    });
  }function y(t, e, n, i, r) {
    var o = l(t);(e || "").split(/\s/).forEach(function (e) {
      h(t, e, n, i).forEach(function (e) {
        delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
      });
    });
  }function T(e, i) {
    return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function (t, n) {
      var r = i[t];e[t] = function () {
        return this[n] = x, r && r.apply(i, arguments);
      }, e[n] = w;
    }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e;
  }function j(t) {
    var e,
        i = { originalEvent: t };for (e in t) b.test(e) || t[e] === n || (i[e] = t[e]);return T(i, t);
  }var n,
      e = 1,
      i = Array.prototype.slice,
      r = t.isFunction,
      o = function (t) {
    return "string" == typeof t;
  },
      a = {},
      s = {},
      u = "onfocusin" in window,
      f = { focus: "focusin", blur: "focusout" },
      c = { mouseenter: "mouseover", mouseleave: "mouseout" };s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents", t.event = { add: v, remove: y }, t.proxy = function (e, n) {
    var a = 2 in arguments && i.call(arguments, 2);if (r(e)) {
      var s = function () {
        return e.apply(n, a ? a.concat(i.call(arguments)) : arguments);
      };return s._zid = l(e), s;
    }if (o(n)) return a ? (a.unshift(e[n], e), t.proxy.apply(null, a)) : t.proxy(e[n], e);throw new TypeError("expected function");
  }, t.fn.bind = function (t, e, n) {
    return this.on(t, e, n);
  }, t.fn.unbind = function (t, e) {
    return this.off(t, e);
  }, t.fn.one = function (t, e, n, i) {
    return this.on(t, e, n, i, 1);
  };var x = function () {
    return !0;
  },
      w = function () {
    return !1;
  },
      b = /^([A-Z]|returnValue$|layer[XY]$)/,
      E = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };t.fn.delegate = function (t, e, n) {
    return this.on(e, t, n);
  }, t.fn.undelegate = function (t, e, n) {
    return this.off(e, t, n);
  }, t.fn.live = function (e, n) {
    return t(document.body).delegate(this.selector, e, n), this;
  }, t.fn.die = function (e, n) {
    return t(document.body).undelegate(this.selector, e, n), this;
  }, t.fn.on = function (e, a, s, u, f) {
    var c,
        l,
        h = this;return e && !o(e) ? (t.each(e, function (t, e) {
      h.on(t, a, s, e, f);
    }), h) : (o(a) || r(u) || u === !1 || (u = s, s = a, a = n), (u === n || s === !1) && (u = s, s = n), u === !1 && (u = w), h.each(function (n, r) {
      f && (c = function (t) {
        return y(r, t.type, u), u.apply(this, arguments);
      }), a && (l = function (e) {
        var n,
            o = t(e.target).closest(a, r).get(0);return o && o !== r ? (n = t.extend(j(e), { currentTarget: o, liveFired: r }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0;
      }), v(r, e, u, s, a, l || c);
    }));
  }, t.fn.off = function (e, i, a) {
    var s = this;return e && !o(e) ? (t.each(e, function (t, e) {
      s.off(t, i, e);
    }), s) : (o(i) || r(a) || a === !1 || (a = i, i = n), a === !1 && (a = w), s.each(function () {
      y(this, e, a, i);
    }));
  }, t.fn.trigger = function (e, n) {
    return e = o(e) || t.isPlainObject(e) ? t.Event(e) : T(e), e._args = n, this.each(function () {
      e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n);
    });
  }, t.fn.triggerHandler = function (e, n) {
    var i, r;return this.each(function (a, s) {
      i = j(o(e) ? t.Event(e) : e), i._args = n, i.target = s, t.each(h(s, e.type || e), function (t, e) {
        return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0;
      });
    }), r;
  }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
    t.fn[e] = function (t) {
      return 0 in arguments ? this.bind(e, t) : this.trigger(e);
    };
  }), t.Event = function (t, e) {
    o(t) || (e = t, t = e.type);var n = document.createEvent(s[t] || "Events"),
        i = !0;if (e) for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];return n.initEvent(t, i, !0), T(n);
  };
}(Zepto), function (t) {
  function a(o, a) {
    var u = o[r],
        f = u && e[u];if (void 0 === a) return f || s(o);if (f) {
      if (a in f) return f[a];var c = i(a);if (c in f) return f[c];
    }return n.call(t(o), a);
  }function s(n, o, a) {
    var s = n[r] || (n[r] = ++t.uuid),
        f = e[s] || (e[s] = u(n));return void 0 !== o && (f[i(o)] = a), f;
  }function u(e) {
    var n = {};return t.each(e.attributes || o, function (e, r) {
      0 == r.name.indexOf("data-") && (n[i(r.name.replace("data-", ""))] = t.zepto.deserializeValue(r.value));
    }), n;
  }var e = {},
      n = t.fn.data,
      i = t.camelCase,
      r = t.expando = "Zepto" + +new Date(),
      o = [];t.fn.data = function (e, n) {
    return void 0 === n ? t.isPlainObject(e) ? this.each(function (n, i) {
      t.each(e, function (t, e) {
        s(i, t, e);
      });
    }) : 0 in this ? a(this[0], e) : void 0 : this.each(function () {
      s(this, e, n);
    });
  }, t.fn.removeData = function (n) {
    return "string" == typeof n && (n = n.split(/\s+/)), this.each(function () {
      var o = this[r],
          a = o && e[o];a && t.each(n || a, function (t) {
        delete a[n ? i(this) : t];
      });
    });
  }, ["remove", "empty"].forEach(function (e) {
    var n = t.fn[e];t.fn[e] = function () {
      var t = this.find("*");return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this);
    };
  });
}(Zepto), function (t) {
  t.fn.serializeArray = function () {
    var e,
        n,
        i = [],
        r = function (t) {
      return t.forEach ? t.forEach(r) : void i.push({ name: e, value: t });
    };return this[0] && t.each(this[0].elements, function (i, o) {
      n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val());
    }), i;
  }, t.fn.serialize = function () {
    var t = [];return this.serializeArray().forEach(function (e) {
      t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
    }), t.join("&");
  }, t.fn.submit = function (e) {
    if (0 in arguments) this.bind("submit", e);else if (this.length) {
      var n = t.Event("submit");this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
    }return this;
  };
}(Zepto), function (t) {
  function u(t, e, n, i) {
    return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down";
  }function f() {
    o = null, e.last && (e.el.trigger("longTap"), e = {});
  }function c() {
    o && clearTimeout(o), o = null;
  }function l() {
    n && clearTimeout(n), i && clearTimeout(i), r && clearTimeout(r), o && clearTimeout(o), n = i = r = o = null, e = {};
  }function h(t) {
    return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary;
  }function p(t, e) {
    return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e;
  }var n,
      i,
      r,
      o,
      s,
      e = {},
      a = 750;t(document).ready(function () {
    var d,
        m,
        y,
        x,
        g = 0,
        v = 0;"MSGesture" in window && (s = new MSGesture(), s.target = document.body), t(document).bind("MSGestureEnd", function (t) {
      var n = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;n && (e.el.trigger("swipe"), e.el.trigger("swipe" + n));
    }).on("touchstart MSPointerDown pointerdown", function (i) {
      (!(x = p(i, "down")) || h(i)) && (y = x ? i : i.touches[0], i.touches && 1 === i.touches.length && e.x2 && (e.x2 = void 0, e.y2 = void 0), d = Date.now(), m = d - (e.last || d), e.el = t("tagName" in y.target ? y.target : y.target.parentNode), n && clearTimeout(n), e.x1 = y.pageX, e.y1 = y.pageY, m > 0 && 250 >= m && (e.isDoubleTap = !0), e.last = d, o = setTimeout(f, a), s && x && s.addPointer(i.pointerId));
    }).on("touchmove MSPointerMove pointermove", function (t) {
      (!(x = p(t, "move")) || h(t)) && (y = x ? t : t.touches[0], c(), e.x2 = y.pageX, e.y2 = y.pageY, g += Math.abs(e.x1 - e.x2), v += Math.abs(e.y1 - e.y2));
    }).on("touchend MSPointerUp pointerup", function (o) {
      (!(x = p(o, "up")) || h(o)) && (c(), e.x2 && Math.abs(e.x1 - e.x2) > 30 || e.y2 && Math.abs(e.y1 - e.y2) > 30 ? r = setTimeout(function () {
        e.el.trigger("swipe"), e.el.trigger("swipe" + u(e.x1, e.x2, e.y1, e.y2)), e = {};
      }, 0) : "last" in e && (30 > g && 30 > v ? i = setTimeout(function () {
        var i = t.Event("tap");i.cancelTouch = l, e.el.trigger(i), e.isDoubleTap ? (e.el && e.el.trigger("doubleTap"), e = {}) : n = setTimeout(function () {
          n = null, e.el && e.el.trigger("singleTap"), e = {};
        }, 250);
      }, 0) : e = {}), g = v = 0);
    }).on("touchcancel MSPointerCancel pointercancel", l), t(window).on("scroll", l);
  }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
    t.fn[e] = function (t) {
      return this.on(e, t);
    };
  });
}(Zepto), function (t, e) {
  function v(t) {
    return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
  }function y(t) {
    return i ? i + t : t.toLowerCase();
  }var i,
      s,
      u,
      f,
      c,
      l,
      h,
      p,
      d,
      m,
      n = "",
      r = { Webkit: "webkit", Moz: "", O: "o" },
      o = document.createElement("div"),
      a = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
      g = {};t.each(r, function (t, r) {
    return o.style[t + "TransitionProperty"] !== e ? (n = "-" + t.toLowerCase() + "-", i = r, !1) : void 0;
  }), s = n + "transform", g[u = n + "transition-property"] = g[f = n + "transition-duration"] = g[l = n + "transition-delay"] = g[c = n + "transition-timing-function"] = g[h = n + "animation-name"] = g[p = n + "animation-duration"] = g[m = n + "animation-delay"] = g[d = n + "animation-timing-function"] = "", t.fx = { off: i === e && o.style.transitionProperty === e, speeds: { _default: 400, fast: 200, slow: 600 }, cssPrefix: n, transitionEnd: y("TransitionEnd"), animationEnd: y("AnimationEnd") }, t.fn.animate = function (n, i, r, o, a) {
    return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a);
  }, t.fn.anim = function (n, i, r, o, y) {
    var x,
        b,
        j,
        w = {},
        E = "",
        T = this,
        S = t.fx.transitionEnd,
        C = !1;if (i === e && (i = t.fx.speeds._default / 1e3), y === e && (y = 0), t.fx.off && (i = 0), "string" == typeof n) w[h] = n, w[p] = i + "s", w[m] = y + "s", w[d] = r || "linear", S = t.fx.animationEnd;else {
      b = [];for (x in n) a.test(x) ? E += x + "(" + n[x] + ") " : (w[x] = n[x], b.push(v(x)));E && (w[s] = E, b.push(s)), i > 0 && "object" == typeof n && (w[u] = b.join(", "), w[f] = i + "s", w[l] = y + "s", w[c] = r || "linear");
    }return j = function (e) {
      if ("undefined" != typeof e) {
        if (e.target !== e.currentTarget) return;t(e.target).unbind(S, j);
      } else t(this).unbind(S, j);C = !0, t(this).css(g), o && o.call(this);
    }, i > 0 && (this.bind(S, j), setTimeout(function () {
      C || j.call(T);
    }, 1e3 * (i + y) + 25)), this.size() && this.get(0).clientLeft, this.css(w), 0 >= i && setTimeout(function () {
      T.each(function () {
        j.call(this);
      });
    }, 0), this;
  }, o = null;
}(Zepto), function (t, e) {
  function s(n, i, r, o, a) {
    "function" != typeof i || a || (a = i, i = e);var s = { opacity: r };return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a);
  }function u(e, n, i, r) {
    return s(e, n, 0, i, function () {
      o.call(t(this)), r && r.call(this);
    });
  }var n = window.document,
      r = (n.documentElement, t.fn.show),
      o = t.fn.hide,
      a = t.fn.toggle;t.fn.show = function (t, n) {
    return r.call(this), t === e ? t = 0 : this.css("opacity", 0), s(this, t, 1, "1,1", n);
  }, t.fn.hide = function (t, n) {
    return t === e ? o.call(this) : u(this, t, "0,0", n);
  }, t.fn.toggle = function (n, i) {
    return n === e || "boolean" == typeof n ? a.call(this, n) : this.each(function () {
      var e = t(this);e["none" == e.css("display") ? "show" : "hide"](n, i);
    });
  }, t.fn.fadeTo = function (t, e, n) {
    return s(this, t, e, null, n);
  }, t.fn.fadeIn = function (t, e) {
    var n = this.css("opacity");return n > 0 ? this.css("opacity", 0) : n = 1, r.call(this).fadeTo(t, n, e);
  }, t.fn.fadeOut = function (t, e) {
    return u(this, t, null, e);
  }, t.fn.fadeToggle = function (e, n) {
    return this.each(function () {
      var i = t(this);i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n);
    });
  };
}(Zepto);

//# sourceMappingURL=zepto.min-compiled.js.map