/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14),
	__webpack_require__(1),
	__webpack_require__(112),
	__webpack_require__(32),
	__webpack_require__(63),
	__webpack_require__(65),
	__webpack_require__(29),
	__webpack_require__(26),
	__webpack_require__(113),
	__webpack_require__(28),
	__webpack_require__(64),
	__webpack_require__(111),
	__webpack_require__(7),
	__webpack_require__(40)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr, document, getProto, slice, concat, push, indexOf,
	class2type, toString, hasOwn, fnToString, ObjectFunctionString,
	support, DOMEval ) {

"use strict";

var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return window.document;
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(108) ], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(42),
	__webpack_require__(61)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rsingleTag ) {

"use strict";

// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );

return init;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(51)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( Data ) {
	"use strict";

	return new Data();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
	// https://html.spec.whatwg.org/multipage/infrastructure.html#space-character
	return ( /[^\x20\t\r\n\f]+/g );
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};

return access;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// All support tests are defined in their respective modules.
	return {};
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(12),
	__webpack_require__(18),
	__webpack_require__(10),
	__webpack_require__(93),
	__webpack_require__(41),
	__webpack_require__(92),
	__webpack_require__(25),
	__webpack_require__(107),
	__webpack_require__(83),
	__webpack_require__(11),
	__webpack_require__(99),
	__webpack_require__(100),
	__webpack_require__(15),
	__webpack_require__(104),
	__webpack_require__(114),
	__webpack_require__(13),
	__webpack_require__(90),
	__webpack_require__(60),
	__webpack_require__(9),
	__webpack_require__(82),
	__webpack_require__(80),
	__webpack_require__(77),
	__webpack_require__(78),
	__webpack_require__(98),
	__webpack_require__(23),
	__webpack_require__(97),
	__webpack_require__(106),
	__webpack_require__(95),
	__webpack_require__(94),
	__webpack_require__(102),
	__webpack_require__(103)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

return jQuery;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(5),
	__webpack_require__(81),
	__webpack_require__(37),
	__webpack_require__(38),

	__webpack_require__(3),
	__webpack_require__(79),
	__webpack_require__(24),
	__webpack_require__(10),
	__webpack_require__(60) // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rnothtmlwhite, location, nonce, rquery ) {

"use strict";

var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(32),
	__webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, slice ) {

"use strict";

function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(27),
	__webpack_require__(5),
	__webpack_require__(32),
	__webpack_require__(4),

	__webpack_require__(3),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, documentElement, rnothtmlwhite, slice, dataPriv ) {

"use strict";

var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(29),
	__webpack_require__(109),
	__webpack_require__(110),
	__webpack_require__(62),
	__webpack_require__(3),
	__webpack_require__(61),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, indexOf, dir, siblings, rneedsContext ) {

"use strict";

var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(30),
	__webpack_require__(6),
	__webpack_require__(49),
	__webpack_require__(1),
	__webpack_require__(31),
	__webpack_require__(21),
	__webpack_require__(46),
	__webpack_require__(47),
	__webpack_require__(50),
	__webpack_require__(45),
	__webpack_require__(44),
	__webpack_require__(43),
	__webpack_require__(20),

	__webpack_require__(3),
	__webpack_require__(41),
	__webpack_require__(2) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, pnum, access, rmargin, document, rcssNum, rnumnonpx, cssExpand,
	getStyles, swap, curCSS, adjustCSS, addGetHookIf, support ) {

"use strict";

var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return [];
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(63),
	__webpack_require__(65),
	__webpack_require__(6),
	__webpack_require__(56),
	__webpack_require__(58),
	__webpack_require__(57),
	__webpack_require__(59),
	__webpack_require__(54),
	__webpack_require__(55),
	__webpack_require__(53),
	__webpack_require__(105),

	__webpack_require__(4),
	__webpack_require__(52),
	__webpack_require__(22),
	__webpack_require__(40),

	__webpack_require__(3),
	__webpack_require__(12),
	__webpack_require__(2),
	__webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, concat, push, access,
	rcheckableType, rtagName, rscriptType,
	wrapMap, getAll, setGlobalEval, buildFragment, support,
	dataPriv, dataUser, acceptData, DOMEval ) {

"use strict";

var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 16 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1),
	__webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rnothtmlwhite ) {

"use strict";

// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( rnothtmlwhite ) {
	"use strict";

	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	return stripAndCollapse;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(27),
	__webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, documentElement, support ) {

"use strict";

( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(30)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( pnum ) {
	"use strict";

	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(31),
	__webpack_require__(5),
	__webpack_require__(46),
	__webpack_require__(48),
	__webpack_require__(50),
	__webpack_require__(44),
	__webpack_require__(4),
	__webpack_require__(91),

	__webpack_require__(3),
	__webpack_require__(25),
	__webpack_require__(10),
	__webpack_require__(12),
	__webpack_require__(15),
	__webpack_require__(13),
	__webpack_require__(96)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rcssNum, rnothtmlwhite, cssExpand, isHiddenWithinTree, swap,
	adjustCSS, dataPriv, showHide ) {

"use strict";

var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(4),
	__webpack_require__(22),
	__webpack_require__(28),

	__webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, dataPriv, acceptData, hasOwn ) {

"use strict";

var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(4),
	__webpack_require__(10),
	__webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv ) {

"use strict";

jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// [[Class]] -> type pairs
	return {};
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document ) {
	"use strict";

	return document.documentElement;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(26)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type ) {
	"use strict";

	return class2type.hasOwnProperty;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.indexOf;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(30)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.slice;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 33 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.3.3

//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self === self && self) ||
            (typeof global == 'object' && global.global === global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(116), __webpack_require__(8), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch (e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

})(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.3.3';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], cb(iteratee, this), context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
    return iteratee;
  };
  var modelMatcher = function(attrs) {
    var matcher = _.matches(attrs);
    return function(model) {
      return matcher(model.attributes);
    };
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function(iteratee, events, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space-separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // Guard the `listening` argument from the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
      context: context,
      ctx: obj,
      listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo = function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off = function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
      context: context,
      listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening = function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once = function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    if (typeof name === 'string' && context == null) callback = void 0;
    return this.on(events, callback, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce = function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger = function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, callback, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    var defaults = _.result(this, 'defaults');
    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else if (!this._validate(attrs, options)) {
        return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend({}, options, {validate: true}));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1};

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Splices `insert` into `array` at index `at`.
  var splice = function(array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    var i;
    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();
      var removed = this._removeModels(models, options);
      if (!options.silent && removed.length) {
        options.changes = {added: [], merged: [], removed: removed};
        this.trigger('update', this, options);
      }
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      if (models == null) return;

      options = _.extend({}, setOptions, options);
      if (options.parse && !this._isModel(models)) {
        models = this.parse(models, options) || [];
      }

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at > this.length) at = this.length;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toMerge = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && at == null && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model, i;
      for (i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            toMerge.push(existing);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
          return m !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort/update events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length || toMerge.length) {
          options.changes = {
            added: toAdd,
            removed: toRemove,
            merged: toMerge
          };
          this.trigger('update', this, options);
        }
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id, cid, model object with id or cid
    // properties, or an attributes object that is transformed through modelId.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] ||
        this._byId[this.modelId(obj.attributes || obj)] ||
        obj.cid && this._byId[obj.cid];
    },

    // Returns `true` if the model is in the collection.
    has: function(obj) {
      return this.get(obj) != null;
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return this.map(attr + '');
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(m, resp, callbackOpts) {
        if (wait) collection.add(m, callbackOpts);
        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function(attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        // Remove references before triggering 'remove' event to prevent an
        // infinite loop. #3693
        delete this._byId[model.cid];
        var id = this.modelId(model.attributes);
        if (id != null) delete this._byId[id];

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function(model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if (model) {
        if ((event === 'add' || event === 'remove') && collection !== this) return;
        if (event === 'destroy') this.remove(model, options);
        if (event === 'change') {
          var prevId = this.modelId(model.previousAttributes());
          var id = this.modelId(model.attributes);
          if (prevId !== id) {
            if (prevId != null) delete this._byId[prevId];
            if (id != null) this._byId[id] = model;
          }
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch': 'PATCH',
    'delete': 'DELETE',
    'read': 'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var rootPath = path.slice(0, this.root.length - 1) + '/';
      return rootPath === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var rootPath = this.root.slice(0, -1) || '/';
          this.location.replace(rootPath + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function(eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function(eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var rootPath = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        rootPath = rootPath.slice(0, -1) || '/';
      }
      var url = rootPath + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function and add the prototype properties.
    child.prototype = _.create(parent.prototype, protoProps);
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bfbe159978be13e2d0cb67dd406266b5.gif";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	"use strict";

	return jQuery.now();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /\?/ );
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6),
	__webpack_require__(17),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, support ) {

"use strict";

var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document ) {
	"use strict";

	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(88),
	__webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document ) {

"use strict";

// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// Match a standalone tag
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}

return addGetHookIf;

}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(31)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rcssNum ) {

"use strict";

function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}

return adjustCSS;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(21),
	__webpack_require__(49),
	__webpack_require__(47),
	__webpack_require__(20),
	__webpack_require__(2) // Get jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rnumnonpx, rmargin, getStyles, support ) {

"use strict";

function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return [ "Top", "Right", "Bottom", "Left" ];
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2)

	// css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	"use strict";

	// isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
	// through the CSS cascade), which is useful in deciding whether or not to make it visible.
	// It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
	// * A hidden ancestor does not force an element to be classified as hidden.
	// * Being disconnected from the document does not force an element to be classified as hidden.
	// These differences improve the behavior of .toggle() et al. when applied to elements that are
	// detached or contained within hidden ancestors (gh-2404, gh-2863).
	return function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /^margin/ );
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

// A method for quickly swapping in/out CSS properties to get correct calculations.
return function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(5),
	__webpack_require__(22)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rnothtmlwhite, acceptData ) {

"use strict";

function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};

return Data;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(51)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( Data ) {
	"use strict";

	return new Data();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(58),
	__webpack_require__(57),
	__webpack_require__(59),
	__webpack_require__(54),
	__webpack_require__(55)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {

"use strict";

var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

return buildFragment;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}

return getAll;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(4)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( dataPriv ) {

"use strict";

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}

return setGlobalEval;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /^(?:checkbox|radio)$/i );
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /^$|\/(?:java|ecma)script/i );
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

return wrapMap;
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(56),
	__webpack_require__(3),
	__webpack_require__(12), // filter
	__webpack_require__(39)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rcheckableType ) {

"use strict";

var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(29),
	__webpack_require__(62),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, indexOf, rneedsContext ) {

"use strict";

var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	"use strict";

	return jQuery.expr.match.needsContext;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.concat;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(28)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( hasOwn ) {
	"use strict";

	return hasOwn.toString;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.push;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(8), __webpack_require__(36) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.keyCode = {
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
};

} ) );


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(8), __webpack_require__(36) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * jquery.fancytree.js
 * Tree view control with support for lazy loading and much more.
 * https://github.com/mar10/fancytree/
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

/** Core Fancytree module.
 */


// Start of local namespace
;(function($, window, document, undefined) {
"use strict";

// prevent duplicate loading
if ( $.ui && $.ui.fancytree ) {
	$.ui.fancytree.warn("Fancytree: ignored duplicate include");
	return;
}


/* *****************************************************************************
 * Private functions and variables
 */

var i, attr,
	FT = null, // initialized below
	TEST_IMG = new RegExp(/\.|\//),  // strings are considered image urls if they conatin '.' or '/'
	REX_HTML = /[&<>"'\/]/g,
	REX_TOOLTIP = /[<>"'\/]/g,
	RECURSIVE_REQUEST_ERROR = "$recursive_request",
	ENTITY_MAP = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;", "/": "&#x2F;"},
	IGNORE_KEYCODES = { 16: true, 17: true, 18: true },
	SPECIAL_KEYCODES = {
		8: "backspace", 9: "tab", 10: "return", 13: "return",
		// 16: null, 17: null, 18: null, // ignore shift, ctrl, alt
		19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup",
		34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up",
		39: "right", 40: "down", 45: "insert", 46: "del", 59: ";", 61: "=",
		96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6",
		103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".",
		111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5",
		117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11",
		123: "f12", 144: "numlock", 145: "scroll", 173: "-", 186: ";", 187: "=",
		188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
		221: "]", 222: "'"},
	MOUSE_BUTTONS = { 0: "", 1: "left", 2: "middle", 3: "right" },
	//boolean attributes that can be set with equivalent class names in the LI tags
	CLASS_ATTRS = "active expanded focus folder hideCheckbox lazy selected unselectable".split(" "),
	CLASS_ATTR_MAP = {},
	//	Top-level Fancytree node attributes, that can be set by dict
	NODE_ATTRS = "expanded extraClasses folder hideCheckbox icon key lazy refKey selected statusNodeType title tooltip unselectable".split(" "),
	NODE_ATTR_MAP = {},
	// Mapping of lowercase -> real name (because HTML5 data-... attribute only supports lowercase)
	NODE_ATTR_LOWERCASE_MAP = {},
	// Attribute names that should NOT be added to node.data
	NONE_NODE_DATA_MAP = {"active": true, "children": true, "data": true, "focus": true};

for(i=0; i<CLASS_ATTRS.length; i++){ CLASS_ATTR_MAP[CLASS_ATTRS[i]] = true; }
for(i=0; i<NODE_ATTRS.length; i++) {
	attr = NODE_ATTRS[i];
	NODE_ATTR_MAP[attr] = true;
	if( attr !== attr.toLowerCase() ) {
		NODE_ATTR_LOWERCASE_MAP[attr.toLowerCase()] = attr;
	}
}


function _assert(cond, msg){
	// TODO: see qunit.js extractStacktrace()
	if(!cond){
		msg = msg ? ": " + msg : "";
		// consoleApply("assert", [!!cond, msg]);
		$.error("Fancytree assertion failed" + msg);
	}
}

_assert($.ui, "Fancytree requires jQuery UI (http://jqueryui.com)");

function consoleApply(method, args){
	var i, s,
		fn = window.console ? window.console[method] : null;

	if(fn){
		try{
			fn.apply(window.console, args);
		} catch(e) {
			// IE 8?
			s = "";
			for( i=0; i<args.length; i++ ) {
				s += args[i];
			}
			fn(s);
		}
	}
}

/*Return true if x is a FancytreeNode.*/
function _isNode(x){
	return !!(x.tree && x.statusNodeType !== undefined);
}

/** Return true if dotted version string is equal or higher than requested version.
 *
 * See http://jsfiddle.net/mar10/FjSAN/
 */
function isVersionAtLeast(dottedVersion, major, minor, patch){
	var i, v, t,
		verParts = $.map($.trim(dottedVersion).split("."), function(e){ return parseInt(e, 10); }),
		testParts = $.map(Array.prototype.slice.call(arguments, 1), function(e){ return parseInt(e, 10); });

	for( i = 0; i < testParts.length; i++ ){
		v = verParts[i] || 0;
		t = testParts[i] || 0;
		if( v !== t ){
			return ( v > t );
		}
	}
	return true;
}

/** Return a wrapper that calls sub.methodName() and exposes
 *  this        : tree
 *  this._local : tree.ext.EXTNAME
 *  this._super : base.methodName()
 */
function _makeVirtualFunction(methodName, tree, base, extension, extName){
	// $.ui.fancytree.debug("_makeVirtualFunction", methodName, tree, base, extension, extName);
	// if(rexTestSuper && !rexTestSuper.test(func)){
	//     // extension.methodName() doesn't call _super(), so no wrapper required
	//     return func;
	// }
	// Use an immediate function as closure
	var proxy = (function(){
		var prevFunc = tree[methodName],      // org. tree method or prev. proxy
			baseFunc = extension[methodName], //
			_local = tree.ext[extName],
			_super = function(){
				return prevFunc.apply(tree, arguments);
			},
			_superApply = function(args){
				return prevFunc.apply(tree, args);
			};

		// Return the wrapper function
		return function(){
			var prevLocal = tree._local,
				prevSuper = tree._super,
				prevSuperApply = tree._superApply;

			try{
				tree._local = _local;
				tree._super = _super;
				tree._superApply = _superApply;
				return  baseFunc.apply(tree, arguments);
			}finally{
				tree._local = prevLocal;
				tree._super = prevSuper;
				tree._superApply = prevSuperApply;
			}
		};
	})(); // end of Immediate Function
	return proxy;
}

/**
 * Subclass `base` by creating proxy functions
 */
function _subclassObject(tree, base, extension, extName){
	// $.ui.fancytree.debug("_subclassObject", tree, base, extension, extName);
	for(var attrName in extension){
		if(typeof extension[attrName] === "function"){
			if(typeof tree[attrName] === "function"){
				// override existing method
				tree[attrName] = _makeVirtualFunction(attrName, tree, base, extension, extName);
			}else if(attrName.charAt(0) === "_"){
				// Create private methods in tree.ext.EXTENSION namespace
				tree.ext[extName][attrName] = _makeVirtualFunction(attrName, tree, base, extension, extName);
			}else{
				$.error("Could not override tree." + attrName + ". Use prefix '_' to create tree." + extName + "._" + attrName);
			}
		}else{
			// Create member variables in tree.ext.EXTENSION namespace
			if(attrName !== "options"){
				tree.ext[extName][attrName] = extension[attrName];
			}
		}
	}
}


function _getResolvedPromise(context, argArray){
	if(context === undefined){
		return $.Deferred(function(){this.resolve();}).promise();
	}else{
		return $.Deferred(function(){this.resolveWith(context, argArray);}).promise();
	}
}


function _getRejectedPromise(context, argArray){
	if(context === undefined){
		return $.Deferred(function(){this.reject();}).promise();
	}else{
		return $.Deferred(function(){this.rejectWith(context, argArray);}).promise();
	}
}


function _makeResolveFunc(deferred, context){
	return function(){
		deferred.resolveWith(context);
	};
}


function _getElementDataAsDict($el){
	// Evaluate 'data-NAME' attributes with special treatment for 'data-json'.
	var d = $.extend({}, $el.data()),
		json = d.json;

	delete d.fancytree; // added to container by widget factory (old jQuery UI)
	delete d.uiFancytree; // added to container by widget factory

	if( json ) {
		delete d.json;
		// <li data-json='...'> is already returned as object (http://api.jquery.com/data/#data-html5)
		d = $.extend(d, json);
	}
	return d;
}


function _escapeHtml(s){
	return ("" + s).replace(REX_HTML, function(s) {
		return ENTITY_MAP[s];
	});
}


function _escapeTooltip(s){
	return ("" + s).replace(REX_TOOLTIP, function(s) {
		return ENTITY_MAP[s];
	});
}


// TODO: use currying
function _makeNodeTitleMatcher(s){
	s = s.toLowerCase();
	return function(node){
		return node.title.toLowerCase().indexOf(s) >= 0;
	};
}


function _makeNodeTitleStartMatcher(s){
	var reMatch = new RegExp("^" + s, "i");
	return function(node){
		return reMatch.test(node.title);
	};
}


/* *****************************************************************************
 * FancytreeNode
 */


/**
 * Creates a new FancytreeNode
 *
 * @class FancytreeNode
 * @classdesc A FancytreeNode represents the hierarchical data model and operations.
 *
 * @param {FancytreeNode} parent
 * @param {NodeData} obj
 *
 * @property {Fancytree} tree The tree instance
 * @property {FancytreeNode} parent The parent node
 * @property {string} key Node id (must be unique inside the tree)
 * @property {string} title Display name (may contain HTML)
 * @property {object} data Contains all extra data that was passed on node creation
 * @property {FancytreeNode[] | null | undefined} children Array of child nodes.<br>
 *     For lazy nodes, null or undefined means 'not yet loaded'. Use an empty array
 *     to define a node that has no children.
 * @property {boolean} expanded Use isExpanded(), setExpanded() to access this property.
 * @property {string} extraClasses Additional CSS classes, added to the node's `&lt;span>`.<br>
 *     Note: use `node.add/remove/toggleClass()` to modify.
 * @property {boolean} folder Folder nodes have different default icons and click behavior.<br>
 *     Note: Also non-folders may have children.
 * @property {string} statusNodeType null for standard nodes. Otherwise type of special system node: 'error', 'loading', 'nodata', or 'paging'.
 * @property {boolean} lazy True if this node is loaded on demand, i.e. on first expansion.
 * @property {boolean} selected Use isSelected(), setSelected() to access this property.
 * @property {string} tooltip Alternative description used as hover popup
 */
function FancytreeNode(parent, obj){
	var i, l, name, cl;

	this.parent = parent;
	this.tree = parent.tree;
	this.ul = null;
	this.li = null;  // <li id='key' ftnode=this> tag
	this.statusNodeType = null; // if this is a temp. node to display the status of its parent
	this._isLoading = false;    // if this node itself is loading
	this._error = null;         // {message: '...'} if a load error occurred
	this.data = {};

	// TODO: merge this code with node.toDict()
	// copy attributes from obj object
	for(i=0, l=NODE_ATTRS.length; i<l; i++){
		name = NODE_ATTRS[i];
		this[name] = obj[name];
	}
	// node.data += obj.data
	if(obj.data){
		$.extend(this.data, obj.data);
	}
	// copy all other attributes to this.data.NAME
	for(name in obj){
		if(!NODE_ATTR_MAP[name] && !$.isFunction(obj[name]) && !NONE_NODE_DATA_MAP[name]){
			// node.data.NAME = obj.NAME
			this.data[name] = obj[name];
		}
	}

	// Fix missing key
	if( this.key == null ){ // test for null OR undefined
		if( this.tree.options.defaultKey ) {
			this.key = this.tree.options.defaultKey(this);
			_assert(this.key, "defaultKey() must return a unique key");
		} else {
			this.key = "_" + (FT._nextNodeKey++);
		}
	} else {
		this.key = "" + this.key; // Convert to string (#217)
	}

	// Fix tree.activeNode
	// TODO: not elegant: we use obj.active as marker to set tree.activeNode
	// when loading from a dictionary.
	if(obj.active){
		_assert(this.tree.activeNode === null, "only one active node allowed");
		this.tree.activeNode = this;
	}
	if( obj.selected ){ // #186
		this.tree.lastSelectedNode = this;
	}
	// TODO: handle obj.focus = true
	// Create child nodes
	cl = obj.children;
	if( cl ){
		if( cl.length ){
			this._setChildren(cl);
		} else {
			// if an empty array was passed for a lazy node, keep it, in order to mark it 'loaded'
			this.children = this.lazy ? [] : null;
		}
	} else {
		this.children = null;
	}
	// Add to key/ref map (except for root node)
//	if( parent ) {
	this.tree._callHook("treeRegisterNode", this.tree, true, this);
//	}
}


FancytreeNode.prototype = /** @lends FancytreeNode# */{
	/* Return the direct child FancytreeNode with a given key, index. */
	_findDirectChild: function(ptr){
		var i, l,
			cl = this.children;

		if(cl){
			if(typeof ptr === "string"){
				for(i=0, l=cl.length; i<l; i++){
					if(cl[i].key === ptr){
						return cl[i];
					}
				}
			}else if(typeof ptr === "number"){
				return this.children[ptr];
			}else if(ptr.parent === this){
				return ptr;
			}
		}
		return null;
	},
	// TODO: activate()
	// TODO: activateSilently()
	/* Internal helper called in recursive addChildren sequence.*/
	_setChildren: function(children){
		_assert(children && (!this.children || this.children.length === 0), "only init supported");
		this.children = [];
		for(var i=0, l=children.length; i<l; i++){
			this.children.push(new FancytreeNode(this, children[i]));
		}
	},
	/**
	 * Append (or insert) a list of child nodes.
	 *
	 * @param {NodeData[]} children array of child node definitions (also single child accepted)
	 * @param {FancytreeNode | string | Integer} [insertBefore] child node (or key or index of such).
	 *     If omitted, the new children are appended.
	 * @returns {FancytreeNode} first child added
	 *
	 * @see FancytreeNode#applyPatch
	 */
	addChildren: function(children, insertBefore){
		var i, l, pos,
			firstNode = null,
			nodeList = [];

		if($.isPlainObject(children) ){
			children = [children];
		}
		if(!this.children){
			this.children = [];
		}
		for(i=0, l=children.length; i<l; i++){
			nodeList.push(new FancytreeNode(this, children[i]));
		}
		firstNode = nodeList[0];
		if(insertBefore == null){
			this.children = this.children.concat(nodeList);
		}else{
			insertBefore = this._findDirectChild(insertBefore);
			pos = $.inArray(insertBefore, this.children);
			_assert(pos >= 0, "insertBefore must be an existing child");
			// insert nodeList after children[pos]
			this.children.splice.apply(this.children, [pos, 0].concat(nodeList));
		}
		if( !this.parent || this.parent.ul || this.tr ){
			// render if the parent was rendered (or this is a root node)
			this.render();
		}
		if( this.tree.options.selectMode === 3 ){
			this.fixSelection3FromEndNodes();
		}
		this.triggerModifyChild("add", nodeList.length === 1 ? nodeList[0] : null);
		return firstNode;
	},
	/**
	 * Add class to node's span tag and to .extraClasses.
	 *
	 * @param {string} className class name
	 *
	 * @since 2.17
	 */
	addClass: function(className){
		return this.toggleClass(className, true);
	},
	/**
	 * Append or prepend a node, or append a child node.
	 *
	 * This a convenience function that calls addChildren()
	 *
	 * @param {NodeData} node node definition
	 * @param {string} [mode=child] 'before', 'after', 'firstChild', or 'child' ('over' is a synonym for 'child')
	 * @returns {FancytreeNode} new node
	 */
	addNode: function(node, mode){
		if(mode === undefined || mode === "over"){
			mode = "child";
		}
		switch(mode){
		case "after":
			return this.getParent().addChildren(node, this.getNextSibling());
		case "before":
			return this.getParent().addChildren(node, this);
		case "firstChild":
			// Insert before the first child if any
			var insertBefore = (this.children ? this.children[0] : null);
			return this.addChildren(node, insertBefore);
		case "child":
		case "over":
			return this.addChildren(node);
		}
		_assert(false, "Invalid mode: " + mode);
	},
	/**Add child status nodes that indicate 'More...', etc.
	 *
	 * This also maintains the node's `partload` property.
	 * @param {boolean|object} node optional node definition. Pass `false` to remove all paging nodes.
	 * @param {string} [mode='child'] 'child'|firstChild'
	 * @since 2.15
	 */
	addPagingNode: function(node, mode){
		var i, n;

		mode = mode || "child";
		if( node === false ) {
			for(i=this.children.length-1; i >= 0; i--) {
				n = this.children[i];
				if( n.statusNodeType === "paging" ) {
					this.removeChild(n);
				}
			}
			this.partload = false;
			return;
		}
		node = $.extend({
			title: this.tree.options.strings.moreData,
			statusNodeType: "paging",
			icon: false
		}, node);
		this.partload = true;
		return this.addNode(node, mode);
	},
	/**
	 * Append new node after this.
	 *
	 * This a convenience function that calls addNode(node, 'after')
	 *
	 * @param {NodeData} node node definition
	 * @returns {FancytreeNode} new node
	 */
	appendSibling: function(node){
		return this.addNode(node, "after");
	},
	/**
	 * Modify existing child nodes.
	 *
	 * @param {NodePatch} patch
	 * @returns {$.Promise}
	 * @see FancytreeNode#addChildren
	 */
	applyPatch: function(patch) {
		// patch [key, null] means 'remove'
		if(patch === null){
			this.remove();
			return _getResolvedPromise(this);
		}
		// TODO: make sure that root node is not collapsed or modified
		// copy (most) attributes to node.ATTR or node.data.ATTR
		var name, promise, v,
			IGNORE_MAP = { children: true, expanded: true, parent: true }; // TODO: should be global

		for(name in patch){
			v = patch[name];
			if( !IGNORE_MAP[name] && !$.isFunction(v)){
				if(NODE_ATTR_MAP[name]){
					this[name] = v;
				}else{
					this.data[name] = v;
				}
			}
		}
		// Remove and/or create children
		if(patch.hasOwnProperty("children")){
			this.removeChildren();
			if(patch.children){ // only if not null and not empty list
				// TODO: addChildren instead?
				this._setChildren(patch.children);
			}
			// TODO: how can we APPEND or INSERT child nodes?
		}
		if(this.isVisible()){
			this.renderTitle();
			this.renderStatus();
		}
		// Expand collapse (final step, since this may be async)
		if(patch.hasOwnProperty("expanded")){
			promise = this.setExpanded(patch.expanded);
		}else{
			promise = _getResolvedPromise(this);
		}
		return promise;
	},
	/** Collapse all sibling nodes.
	 * @returns {$.Promise}
	 */
	collapseSiblings: function() {
		return this.tree._callHook("nodeCollapseSiblings", this);
	},
	/** Copy this node as sibling or child of `node`.
	 *
	 * @param {FancytreeNode} node source node
	 * @param {string} [mode=child] 'before' | 'after' | 'child'
	 * @param {Function} [map] callback function(NodeData) that could modify the new node
	 * @returns {FancytreeNode} new
	 */
	copyTo: function(node, mode, map) {
		return node.addNode(this.toDict(true, map), mode);
	},
	/** Count direct and indirect children.
	 *
	 * @param {boolean} [deep=true] pass 'false' to only count direct children
	 * @returns {int} number of child nodes
	 */
	countChildren: function(deep) {
		var cl = this.children, i, l, n;
		if( !cl ){
			return 0;
		}
		n = cl.length;
		if(deep !== false){
			for(i=0, l=n; i<l; i++){
				n += cl[i].countChildren();
			}
		}
		return n;
	},
	// TODO: deactivate()
	/** Write to browser console if debugLevel >= 2 (prepending node info)
	 *
	 * @param {*} msg string or object or array of such
	 */
	debug: function(msg){
		if( this.tree.options.debugLevel >= 2 ) {
			Array.prototype.unshift.call(arguments, this.toString());
			consoleApply("log", arguments);
		}
	},
	/** Deprecated.
	 * @deprecated since 2014-02-16. Use resetLazy() instead.
	 */
	discard: function(){
		this.warn("FancytreeNode.discard() is deprecated since 2014-02-16. Use .resetLazy() instead.");
		return this.resetLazy();
	},
	/** Remove DOM elements for all descendents. May be called on .collapse event
	 * to keep the DOM small.
	 * @param {boolean} [includeSelf=false]
	 */
	discardMarkup: function(includeSelf){
		var fn = includeSelf ? "nodeRemoveMarkup" : "nodeRemoveChildMarkup";
		this.tree._callHook(fn, this);
	},
	/**Find all nodes that match condition (excluding self).
	 *
	 * @param {string | function(node)} match title string to search for, or a
	 *     callback function that returns `true` if a node is matched.
	 * @returns {FancytreeNode[]} array of nodes (may be empty)
	 */
	findAll: function(match) {
		match = $.isFunction(match) ? match : _makeNodeTitleMatcher(match);
		var res = [];
		this.visit(function(n){
			if(match(n)){
				res.push(n);
			}
		});
		return res;
	},
	/**Find first node that matches condition (excluding self).
	 *
	 * @param {string | function(node)} match title string to search for, or a
	 *     callback function that returns `true` if a node is matched.
	 * @returns {FancytreeNode} matching node or null
	 * @see FancytreeNode#findAll
	 */
	findFirst: function(match) {
		match = $.isFunction(match) ? match : _makeNodeTitleMatcher(match);
		var res = null;
		this.visit(function(n){
			if(match(n)){
				res = n;
				return false;
			}
		});
		return res;
	},
	/* Apply selection state (internal use only) */
	_changeSelectStatusAttrs: function (state) {
		var changed = false;

		switch(state){
		case false:
			changed = ( this.selected || this.partsel );
			this.selected = false;
			this.partsel = false;
			break;
		case true:
			changed = ( !this.selected || !this.partsel );
			this.selected = true;
			this.partsel = true;
			break;
		case undefined:
			changed = ( this.selected || !this.partsel );
			this.selected = false;
			this.partsel = true;
			break;
		default:
			_assert(false, "invalid state: " + state);
		}
		// this.debug("fixSelection3AfterLoad() _changeSelectStatusAttrs()", state, changed);
		if( changed ){
			this.renderStatus();
		}
		return changed;
	},
	/**
	 * Fix selection status, after this node was (de)selected in multi-hier mode.
	 * This includes (de)selecting all children.
	 */
	fixSelection3AfterClick: function() {
		var flag = this.isSelected();

//		this.debug("fixSelection3AfterClick()");

		this.visit(function(node){
			node._changeSelectStatusAttrs(flag);
		});
		this.fixSelection3FromEndNodes();
	},
	/**
	 * Fix selection status for multi-hier mode.
	 * Only end-nodes are considered to update the descendants branch and parents.
	 * Should be called after this node has loaded new children or after
	 * children have been modified using the API.
	 */
	fixSelection3FromEndNodes: function() {
//		this.debug("fixSelection3FromEndNodes()");
		_assert(this.tree.options.selectMode === 3, "expected selectMode 3");

		// Visit all end nodes and adjust their parent's `selected` and `partsel`
		// attributes. Return selection state true, false, or undefined.
		function _walk(node){
			var i, l, child, s, state, allSelected,someSelected,
				children = node.children;

			if( children && children.length ){
				// check all children recursively
				allSelected = true;
				someSelected = false;

				for( i=0, l=children.length; i<l; i++ ){
					child = children[i];
					// the selection state of a node is not relevant; we need the end-nodes
					s = _walk(child);
					if( s !== false ) {
						someSelected = true;
					}
					if( s !== true ) {
						allSelected = false;
					}
				}
				state = allSelected ? true : (someSelected ? undefined : false);
			}else{
				// This is an end-node: simply report the status
//				state = ( node.unselectable ) ? undefined : !!node.selected;
				state = !!node.selected;
			}
			node._changeSelectStatusAttrs(state);
			return state;
		}
		_walk(this);

		// Update parent's state
		this.visitParents(function(node){
			var i, l, child, state,
				children = node.children,
				allSelected = true,
				someSelected = false;

			for( i=0, l=children.length; i<l; i++ ){
				child = children[i];
				// When fixing the parents, we trust the sibling status (i.e.
				// we don't recurse)
				if( child.selected || child.partsel ) {
					someSelected = true;
				}
				if( !child.unselectable && !child.selected ) {
					allSelected = false;
				}
			}
			state = allSelected ? true : (someSelected ? undefined : false);
			node._changeSelectStatusAttrs(state);
		});
	},
	// TODO: focus()
	/**
	 * Update node data. If dict contains 'children', then also replace
	 * the hole sub tree.
	 * @param {NodeData} dict
	 *
	 * @see FancytreeNode#addChildren
	 * @see FancytreeNode#applyPatch
	 */
	fromDict: function(dict) {
		// copy all other attributes to this.data.xxx
		for(var name in dict){
			if(NODE_ATTR_MAP[name]){
				// node.NAME = dict.NAME
				this[name] = dict[name];
			}else if(name === "data"){
				// node.data += dict.data
				$.extend(this.data, dict.data);
			}else if(!$.isFunction(dict[name]) && !NONE_NODE_DATA_MAP[name]){
				// node.data.NAME = dict.NAME
				this.data[name] = dict[name];
			}
		}
		if(dict.children){
			// recursively set children and render
			this.removeChildren();
			this.addChildren(dict.children);
		}
		this.renderTitle();
/*
		var children = dict.children;
		if(children === undefined){
			this.data = $.extend(this.data, dict);
			this.render();
			return;
		}
		dict = $.extend({}, dict);
		dict.children = undefined;
		this.data = $.extend(this.data, dict);
		this.removeChildren();
		this.addChild(children);
*/
	},
	/** Return the list of child nodes (undefined for unexpanded lazy nodes).
	 * @returns {FancytreeNode[] | undefined}
	 */
	getChildren: function() {
		if(this.hasChildren() === undefined){ // TODO: only required for lazy nodes?
			return undefined; // Lazy node: unloaded, currently loading, or load error
		}
		return this.children;
	},
	/** Return the first child node or null.
	 * @returns {FancytreeNode | null}
	 */
	getFirstChild: function() {
		return this.children ? this.children[0] : null;
	},
	/** Return the 0-based child index.
	 * @returns {int}
	 */
	getIndex: function() {
//		return this.parent.children.indexOf(this);
		return $.inArray(this, this.parent.children); // indexOf doesn't work in IE7
	},
	/** Return the hierarchical child index (1-based, e.g. '3.2.4').
	 * @param {string} [separator="."]
	 * @param {int} [digits=1]
	 * @returns {string}
	 */
	getIndexHier: function(separator, digits) {
		separator = separator || ".";
		var s,
			res = [];
		$.each(this.getParentList(false, true), function(i, o){
			s = "" + (o.getIndex() + 1);
			if( digits ){
				// prepend leading zeroes
				s = ("0000000" + s).substr(-digits);
			}
			res.push(s);
		});
		return res.join(separator);
	},
	/** Return the parent keys separated by options.keyPathSeparator, e.g. "id_1/id_17/id_32".
	 * @param {boolean} [excludeSelf=false]
	 * @returns {string}
	 */
	getKeyPath: function(excludeSelf) {
		var path = [],
			sep = this.tree.options.keyPathSeparator;
		this.visitParents(function(n){
			if(n.parent){
				path.unshift(n.key);
			}
		}, !excludeSelf);
		return sep + path.join(sep);
	},
	/** Return the last child of this node or null.
	 * @returns {FancytreeNode | null}
	 */
	getLastChild: function() {
		return this.children ? this.children[this.children.length - 1] : null;
	},
	/** Return node depth. 0: System root node, 1: visible top-level node, 2: first sub-level, ... .
	 * @returns {int}
	 */
	getLevel: function() {
		var level = 0,
			dtn = this.parent;
		while( dtn ) {
			level++;
			dtn = dtn.parent;
		}
		return level;
	},
	/** Return the successor node (under the same parent) or null.
	 * @returns {FancytreeNode | null}
	 */
	getNextSibling: function() {
		// TODO: use indexOf, if available: (not in IE6)
		if( this.parent ){
			var i, l,
				ac = this.parent.children;

			for(i=0, l=ac.length-1; i<l; i++){ // up to length-2, so next(last) = null
				if( ac[i] === this ){
					return ac[i+1];
				}
			}
		}
		return null;
	},
	/** Return the parent node (null for the system root node).
	 * @returns {FancytreeNode | null}
	 */
	getParent: function() {
		// TODO: return null for top-level nodes?
		return this.parent;
	},
	/** Return an array of all parent nodes (top-down).
	 * @param {boolean} [includeRoot=false] Include the invisible system root node.
	 * @param {boolean} [includeSelf=false] Include the node itself.
	 * @returns {FancytreeNode[]}
	 */
	getParentList: function(includeRoot, includeSelf) {
		var l = [],
			dtn = includeSelf ? this : this.parent;
		while( dtn ) {
			if( includeRoot || dtn.parent ){
				l.unshift(dtn);
			}
			dtn = dtn.parent;
		}
		return l;
	},
	/** Return the predecessor node (under the same parent) or null.
	 * @returns {FancytreeNode | null}
	 */
	getPrevSibling: function() {
		if( this.parent ){
			var i, l,
				ac = this.parent.children;

			for(i=1, l=ac.length; i<l; i++){ // start with 1, so prev(first) = null
				if( ac[i] === this ){
					return ac[i-1];
				}
			}
		}
		return null;
	},
	/**
	 * Return an array of selected descendant nodes.
	 * @param {boolean} [stopOnParents=false] only return the topmost selected
	 *     node (useful with selectMode 3)
	 * @returns {FancytreeNode[]}
	 */
	getSelectedNodes: function(stopOnParents) {
		var nodeList = [];
		this.visit(function(node){
			if( node.selected ) {
				nodeList.push(node);
				if( stopOnParents === true ){
					return "skip"; // stop processing this branch
				}
			}
		});
		return nodeList;
	},
	/** Return true if node has children. Return undefined if not sure, i.e. the node is lazy and not yet loaded).
	 * @returns {boolean | undefined}
	 */
	hasChildren: function() {
		if(this.lazy){
			if(this.children == null ){
				// null or undefined: Not yet loaded
				return undefined;
			}else if(this.children.length === 0){
				// Loaded, but response was empty
				return false;
			}else if(this.children.length === 1 && this.children[0].isStatusNode() ){
				// Currently loading or load error
				return undefined;
			}
			return true;
		}
		return !!( this.children && this.children.length );
	},
	/** Return true if node has keyboard focus.
	 * @returns {boolean}
	 */
	hasFocus: function() {
		return (this.tree.hasFocus() && this.tree.focusNode === this);
	},
	/** Write to browser console if debugLevel >= 1 (prepending node info)
	 *
	 * @param {*} msg string or object or array of such
	 */
	info: function(msg){
		if( this.tree.options.debugLevel >= 1 ) {
			Array.prototype.unshift.call(arguments, this.toString());
			consoleApply("info", arguments);
		}
	},
	/** Return true if node is active (see also FancytreeNode#isSelected).
	 * @returns {boolean}
	 */
	isActive: function() {
		return (this.tree.activeNode === this);
	},
	/** Return true if node is a direct child of otherNode.
	 * @param {FancytreeNode} otherNode
	 * @returns {boolean}
	 */
	isChildOf: function(otherNode) {
		return (this.parent && this.parent === otherNode);
	},
	/** Return true, if node is a direct or indirect sub node of otherNode.
	 * @param {FancytreeNode} otherNode
	 * @returns {boolean}
	 */
	isDescendantOf: function(otherNode) {
		if(!otherNode || otherNode.tree !== this.tree){
			return false;
		}
		var p = this.parent;
		while( p ) {
			if( p === otherNode ){
				return true;
			}
			p = p.parent;
		}
		return false;
	},
	/** Return true if node is expanded.
	 * @returns {boolean}
	 */
	isExpanded: function() {
		return !!this.expanded;
	},
	/** Return true if node is the first node of its parent's children.
	 * @returns {boolean}
	 */
	isFirstSibling: function() {
		var p = this.parent;
		return !p || p.children[0] === this;
	},
	/** Return true if node is a folder, i.e. has the node.folder attribute set.
	 * @returns {boolean}
	 */
	isFolder: function() {
		return !!this.folder;
	},
	/** Return true if node is the last node of its parent's children.
	 * @returns {boolean}
	 */
	isLastSibling: function() {
		var p = this.parent;
		return !p || p.children[p.children.length-1] === this;
	},
	/** Return true if node is lazy (even if data was already loaded)
	 * @returns {boolean}
	 */
	isLazy: function() {
		return !!this.lazy;
	},
	/** Return true if node is lazy and loaded. For non-lazy nodes always return true.
	 * @returns {boolean}
	 */
	isLoaded: function() {
		return !this.lazy || this.hasChildren() !== undefined; // Also checks if the only child is a status node
	},
	/** Return true if children are currently beeing loaded, i.e. a Ajax request is pending.
	 * @returns {boolean}
	 */
	isLoading: function() {
		return !!this._isLoading;
	},
	/*
	 * @deprecated since v2.4.0:  Use isRootNode() instead
	 */
	isRoot: function() {
		return this.isRootNode();
	},
	/** (experimental) Return true if this is partially loaded.
	 * @returns {boolean}
	 * @since 2.15
	 */
	isPartload: function() {
		return !!this.partload;
	},
	/** Return true if this is the (invisible) system root node.
	 * @returns {boolean}
	 * @since 2.4
	 */
	isRootNode: function() {
		return (this.tree.rootNode === this);
	},
	/** Return true if node is selected, i.e. has a checkmark set (see also FancytreeNode#isActive).
	 * @returns {boolean}
	 */
	isSelected: function() {
		return !!this.selected;
	},
	/** Return true if this node is a temporarily generated system node like
	 * 'loading', 'paging', or 'error' (node.statusNodeType contains the type).
	 * @returns {boolean}
	 */
	isStatusNode: function() {
		return !!this.statusNodeType;
	},
	/** Return true if this node is a status node of type 'paging'.
	 * @returns {boolean}
	 * @since 2.15
	 */
	isPagingNode: function() {
		return this.statusNodeType === "paging";
	},
	/** Return true if this a top level node, i.e. a direct child of the (invisible) system root node.
	 * @returns {boolean}
	 * @since 2.4
	 */
	isTopLevel: function() {
		return (this.tree.rootNode === this.parent);
	},
	/** Return true if node is lazy and not yet loaded. For non-lazy nodes always return false.
	 * @returns {boolean}
	 */
	isUndefined: function() {
		return this.hasChildren() === undefined; // also checks if the only child is a status node
	},
	/** Return true if all parent nodes are expanded. Note: this does not check
	 * whether the node is scrolled into the visible part of the screen.
	 * @returns {boolean}
	 */
	isVisible: function() {
		var i, l,
			parents = this.getParentList(false, false);

		for(i=0, l=parents.length; i<l; i++){
			if( ! parents[i].expanded ){ return false; }
		}
		return true;
	},
	/** Deprecated.
	 * @deprecated since 2014-02-16: use load() instead.
	 */
	lazyLoad: function(discard) {
		this.warn("FancytreeNode.lazyLoad() is deprecated since 2014-02-16. Use .load() instead.");
		return this.load(discard);
	},
	/**
	 * Load all children of a lazy node if neccessary. The <i>expanded</i> state is maintained.
	 * @param {boolean} [forceReload=false] Pass true to discard any existing nodes before. Otherwise this method does nothing if the node was already loaded.
	 * @returns {$.Promise}
	 */
	load: function(forceReload) {
		var res, source,
			that = this,
			wasExpanded = this.isExpanded();

		_assert( this.isLazy(), "load() requires a lazy node" );
		// _assert( forceReload || this.isUndefined(), "Pass forceReload=true to re-load a lazy node" );
		if( !forceReload && !this.isUndefined() ) {
			return _getResolvedPromise(this);
		}
		if( this.isLoaded() ){
			this.resetLazy(); // also collapses
		}
		// This method is also called by setExpanded() and loadKeyPath(), so we
		// have to avoid recursion.
		source = this.tree._triggerNodeEvent("lazyLoad", this);
		if( source === false ) { // #69
			return _getResolvedPromise(this);
		}
		_assert(typeof source !== "boolean", "lazyLoad event must return source in data.result");
		res = this.tree._callHook("nodeLoadChildren", this, source);
		if( wasExpanded ) {
			this.expanded = true;
			res.always(function(){
				that.render();
			});
		} else {
			res.always(function(){
				that.renderStatus();  // fix expander icon to 'loaded'
			});
		}
		return res;
	},
	/** Expand all parents and optionally scroll into visible area as neccessary.
	 * Promise is resolved, when lazy loading and animations are done.
	 * @param {object} [opts] passed to `setExpanded()`.
	 *     Defaults to {noAnimation: false, noEvents: false, scrollIntoView: true}
	 * @returns {$.Promise}
	 */
	makeVisible: function(opts) {
		var i,
			that = this,
			deferreds = [],
			dfd = new $.Deferred(),
			parents = this.getParentList(false, false),
			len = parents.length,
			effects = !(opts && opts.noAnimation === true),
			scroll = !(opts && opts.scrollIntoView === false);

		// Expand bottom-up, so only the top node is animated
		for(i = len - 1; i >= 0; i--){
			// that.debug("pushexpand" + parents[i]);
			deferreds.push(parents[i].setExpanded(true, opts));
		}
		$.when.apply($, deferreds).done(function(){
			// All expands have finished
			// that.debug("expand DONE", scroll);
			if( scroll ){
				that.scrollIntoView(effects).done(function(){
					// that.debug("scroll DONE");
					dfd.resolve();
				});
			} else {
				dfd.resolve();
			}
		});
		return dfd.promise();
	},
	/** Move this node to targetNode.
	 *  @param {FancytreeNode} targetNode
	 *  @param {string} mode <pre>
	 *      'child': append this node as last child of targetNode.
	 *               This is the default. To be compatble with the D'n'd
	 *               hitMode, we also accept 'over'.
	 *      'firstChild': add this node as first child of targetNode.
	 *      'before': add this node as sibling before targetNode.
	 *      'after': add this node as sibling after targetNode.</pre>
	 *  @param {function} [map] optional callback(FancytreeNode) to allow modifcations
	 */
	moveTo: function(targetNode, mode, map) {
		if(mode === undefined || mode === "over"){
			mode = "child";
		} else if ( mode === "firstChild" ) {
			if( targetNode.children && targetNode.children.length ) {
				mode = "before";
				targetNode = targetNode.children[0];
			} else {
				mode = "child";
			}
		}
		var pos,
			prevParent = this.parent,
			targetParent = (mode === "child") ? targetNode : targetNode.parent;

		if(this === targetNode){
			return;
		}else if( !this.parent  ){
			$.error("Cannot move system root");
		}else if( targetParent.isDescendantOf(this) ){
			$.error("Cannot move a node to its own descendant");
		}
		if( targetParent !== prevParent ) {
			prevParent.triggerModifyChild("remove", this);
		}
		// Unlink this node from current parent
		if( this.parent.children.length === 1 ) {
			if( this.parent === targetParent ){
				return; // #258
			}
			this.parent.children = this.parent.lazy ? [] : null;
			this.parent.expanded = false;
		} else {
			pos = $.inArray(this, this.parent.children);
			_assert(pos >= 0, "invalid source parent");
			this.parent.children.splice(pos, 1);
		}
		// Remove from source DOM parent
//		if(this.parent.ul){
//			this.parent.ul.removeChild(this.li);
//		}

		// Insert this node to target parent's child list
		this.parent = targetParent;
		if( targetParent.hasChildren() ) {
			switch(mode) {
			case "child":
				// Append to existing target children
				targetParent.children.push(this);
				break;
			case "before":
				// Insert this node before target node
				pos = $.inArray(targetNode, targetParent.children);
				_assert(pos >= 0, "invalid target parent");
				targetParent.children.splice(pos, 0, this);
				break;
			case "after":
				// Insert this node after target node
				pos = $.inArray(targetNode, targetParent.children);
				_assert(pos >= 0, "invalid target parent");
				targetParent.children.splice(pos+1, 0, this);
				break;
			default:
				$.error("Invalid mode " + mode);
			}
		} else {
			targetParent.children = [ this ];
		}
		// Parent has no <ul> tag yet:
//		if( !targetParent.ul ) {
//			// This is the parent's first child: create UL tag
//			// (Hidden, because it will be
//			targetParent.ul = document.createElement("ul");
//			targetParent.ul.style.display = "none";
//			targetParent.li.appendChild(targetParent.ul);
//		}
//		// Issue 319: Add to target DOM parent (only if node was already rendered(expanded))
//		if(this.li){
//			targetParent.ul.appendChild(this.li);
//		}^

		// Let caller modify the nodes
		if( map ){
			targetNode.visit(map, true);
		}
		if( targetParent === prevParent ) {
			targetParent.triggerModifyChild("move", this);
		} else {
			// prevParent.triggerModifyChild("remove", this);
			targetParent.triggerModifyChild("add", this);
		}
		// Handle cross-tree moves
		if( this.tree !== targetNode.tree ) {
			// Fix node.tree for all source nodes
//			_assert(false, "Cross-tree move is not yet implemented.");
			this.warn("Cross-tree moveTo is experimantal!");
			this.visit(function(n){
				// TODO: fix selection state and activation, ...
				n.tree = targetNode.tree;
			}, true);
		}

		// A collaposed node won't re-render children, so we have to remove it manually
		// if( !targetParent.expanded ){
		//   prevParent.ul.removeChild(this.li);
		// }

		// Update HTML markup
		if( !prevParent.isDescendantOf(targetParent)) {
			prevParent.render();
		}
		if( !targetParent.isDescendantOf(prevParent) && targetParent !== prevParent) {
			targetParent.render();
		}
		// TODO: fix selection state
		// TODO: fix active state

/*
		var tree = this.tree;
		var opts = tree.options;
		var pers = tree.persistence;


		// Always expand, if it's below minExpandLevel
//		tree.logDebug ("%s._addChildNode(%o), l=%o", this, ftnode, ftnode.getLevel());
		if ( opts.minExpandLevel >= ftnode.getLevel() ) {
//			tree.logDebug ("Force expand for %o", ftnode);
			this.bExpanded = true;
		}

		// In multi-hier mode, update the parents selection state
		// DT issue #82: only if not initializing, because the children may not exist yet
//		if( !ftnode.data.isStatusNode() && opts.selectMode==3 && !isInitializing )
//			ftnode._fixSelectionState();

		// In multi-hier mode, update the parents selection state
		if( ftnode.bSelected && opts.selectMode==3 ) {
			var p = this;
			while( p ) {
				if( !p.hasSubSel )
					p._setSubSel(true);
				p = p.parent;
			}
		}
		// render this node and the new child
		if ( tree.bEnableUpdate )
			this.render();

		return ftnode;

*/
	},
	/** Set focus relative to this node and optionally activate.
	 *
	 * @param {number} where The keyCode that would normally trigger this move,
	 *		e.g. `$.ui.keyCode.LEFT` would collapse the node if it
	 *      is expanded or move to the parent oterwise.
	 * @param {boolean} [activate=true]
	 * @returns {$.Promise}
	 */
	navigate: function(where, activate) {
		var i, parents, res,
			handled = true,
			KC = $.ui.keyCode,
			sib = null;

		// Navigate to node
		function _goto(n){
			if( n ){
				// setFocus/setActive will scroll later (if autoScroll is specified)
				try { n.makeVisible({scrollIntoView: false}); } catch(e) {} // #272
				// Node may still be hidden by a filter
				if( ! $(n.span).is(":visible") ) {
					n.debug("Navigate: skipping hidden node");
					n.navigate(where, activate);
					return;
				}
				return activate === false ? n.setFocus() : n.setActive();
			}
		}

		switch( where ) {
			case KC.BACKSPACE:
				if( this.parent && this.parent.parent ) {
					res = _goto(this.parent);
				}
				break;
			case KC.HOME:
				this.tree.visit(function(n){  // goto first visible node
					if( $(n.span).is(":visible") ) {
						res = _goto(n);
						return false;
					}
				});
				break;
			case KC.END:
				this.tree.visit(function(n){  // goto last visible node
					if( $(n.span).is(":visible") ) {
						res = n;
					}
				});
				if( res ) {
					res = _goto(res);
				}
				break;
			case KC.LEFT:
				if( this.expanded ) {
					this.setExpanded(false);
					res = _goto(this);
				} else if( this.parent && this.parent.parent ) {
					res = _goto(this.parent);
				}
				break;
			case KC.RIGHT:
				if( !this.expanded && (this.children || this.lazy) ) {
					this.setExpanded();
					res = _goto(this);
				} else if( this.children && this.children.length ) {
					res = _goto(this.children[0]);
				}
				break;
			case KC.UP:
				sib = this.getPrevSibling();
				// #359: skip hidden sibling nodes, preventing a _goto() recursion
				while( sib && !$(sib.span).is(":visible") ) {
					sib = sib.getPrevSibling();
				}
				while( sib && sib.expanded && sib.children && sib.children.length ) {
					sib = sib.children[sib.children.length - 1];
				}
				if( !sib && this.parent && this.parent.parent ){
					sib = this.parent;
				}
				res = _goto(sib);
				break;
			case KC.DOWN:
				if( this.expanded && this.children && this.children.length ) {
					sib = this.children[0];
				} else {
					parents = this.getParentList(false, true);
					for(i=parents.length-1; i>=0; i--) {
						sib = parents[i].getNextSibling();
						// #359: skip hidden sibling nodes, preventing a _goto() recursion
						while( sib && !$(sib.span).is(":visible") ) {
							sib = sib.getNextSibling();
						}
						if( sib ){ break; }
					}
				}
				res = _goto(sib);
				break;
			default:
				handled = false;
		}
		return res || _getResolvedPromise();
	},
	/**
	 * Remove this node (not allowed for system root).
	 */
	remove: function() {
		return this.parent.removeChild(this);
	},
	/**
	 * Remove childNode from list of direct children.
	 * @param {FancytreeNode} childNode
	 */
	removeChild: function(childNode) {
		return this.tree._callHook("nodeRemoveChild", this, childNode);
	},
	/**
	 * Remove all child nodes and descendents. This converts the node into a leaf.<br>
	 * If this was a lazy node, it is still considered 'loaded'; call node.resetLazy()
	 * in order to trigger lazyLoad on next expand.
	 */
	removeChildren: function() {
		return this.tree._callHook("nodeRemoveChildren", this);
	},
	/**
	 * Remove class from node's span tag and .extraClasses.
	 *
	 * @param {string} className class name
	 *
	 * @since 2.17
	 */
	removeClass: function(className){
		return this.toggleClass(className, false);
	},
	/**
	 * This method renders and updates all HTML markup that is required
	 * to display this node in its current state.<br>
	 * Note:
	 * <ul>
	 * <li>It should only be neccessary to call this method after the node object
	 *     was modified by direct access to its properties, because the common
	 *     API methods (node.setTitle(), moveTo(), addChildren(), remove(), ...)
	 *     already handle this.
	 * <li> {@link FancytreeNode#renderTitle} and {@link FancytreeNode#renderStatus}
	 *     are implied. If changes are more local, calling only renderTitle() or
	 *     renderStatus() may be sufficient and faster.
	 * <li>If a node was created/removed, node.render() must be called <i>on the parent</i>.
	 * </ul>
	 *
	 * @param {boolean} [force=false] re-render, even if html markup was already created
	 * @param {boolean} [deep=false] also render all descendants, even if parent is collapsed
	 */
	render: function(force, deep) {
		return this.tree._callHook("nodeRender", this, force, deep);
	},
	/** Create HTML markup for the node's outer &lt;span> (expander, checkbox, icon, and title).
	 * Implies {@link FancytreeNode#renderStatus}.
	 * @see Fancytree_Hooks#nodeRenderTitle
	 */
	renderTitle: function() {
		return this.tree._callHook("nodeRenderTitle", this);
	},
	/** Update element's CSS classes according to node state.
	 * @see Fancytree_Hooks#nodeRenderStatus
	 */
	renderStatus: function() {
		return this.tree._callHook("nodeRenderStatus", this);
	},
	/**
	 * (experimental) Replace this node with `source`.
	 * (Currently only available for paging nodes.)
	 * @param {NodeData[]} source List of child node definitions
	 * @since 2.15
	 */
	replaceWith: function(source) {
		var res,
			parent = this.parent,
			pos = $.inArray(this, parent.children),
			that = this;

		_assert( this.isPagingNode(), "replaceWith() currently requires a paging status node" );

		res = this.tree._callHook("nodeLoadChildren", this, source);
		res.done(function(data){
			// New nodes are currently children of `this`.
			var children = that.children;
			// Prepend newly loaded child nodes to `this`
			// Move new children after self
			for( i=0; i<children.length; i++ ) {
				children[i].parent = parent;
			}
			parent.children.splice.apply(parent.children, [pos + 1, 0].concat(children));

			// Remove self
			that.children = null;
			that.remove();
			// Redraw new nodes
			parent.render();
			// TODO: set node.partload = false if this was tha last paging node?
			// parent.addPagingNode(false);
		}).fail(function(){
			that.setExpanded();
		});
		return res;
		// $.error("Not implemented: replaceWith()");
	},
	/**
	 * Remove all children, collapse, and set the lazy-flag, so that the lazyLoad
	 * event is triggered on next expand.
	 */
	resetLazy: function() {
		this.removeChildren();
		this.expanded = false;
		this.lazy = true;
		this.children = undefined;
		this.renderStatus();
	},
	/** Schedule activity for delayed execution (cancel any pending request).
	 *  scheduleAction('cancel') will only cancel a pending request (if any).
	 * @param {string} mode
	 * @param {number} ms
	 */
	scheduleAction: function(mode, ms) {
		if( this.tree.timer ) {
			clearTimeout(this.tree.timer);
//            this.tree.debug("clearTimeout(%o)", this.tree.timer);
		}
		this.tree.timer = null;
		var self = this; // required for closures
		switch (mode) {
		case "cancel":
			// Simply made sure that timer was cleared
			break;
		case "expand":
			this.tree.timer = setTimeout(function(){
				self.tree.debug("setTimeout: trigger expand");
				self.setExpanded(true);
			}, ms);
			break;
		case "activate":
			this.tree.timer = setTimeout(function(){
				self.tree.debug("setTimeout: trigger activate");
				self.setActive(true);
			}, ms);
			break;
		default:
			$.error("Invalid mode " + mode);
		}
//        this.tree.debug("setTimeout(%s, %s): %s", mode, ms, this.tree.timer);
	},
	/**
	 *
	 * @param {boolean | PlainObject} [effects=false] animation options.
	 * @param {object} [options=null] {topNode: null, effects: ..., parent: ...} this node will remain visible in
	 *     any case, even if `this` is outside the scroll pane.
	 * @returns {$.Promise}
	 */
	scrollIntoView: function(effects, options) {
		if( options !== undefined && _isNode(options) ) {
			this.warn("scrollIntoView() with 'topNode' option is deprecated since 2014-05-08. Use 'options.topNode' instead.");
			options = {topNode: options};
		}
		// this.$scrollParent = (this.options.scrollParent === "auto") ? $ul.scrollParent() : $(this.options.scrollParent);
		// this.$scrollParent = this.$scrollParent.length ? this.$scrollParent || this.$container;

		var topNodeY, nodeY, horzScrollbarHeight, containerOffsetTop,
			opts = $.extend({
				effects: (effects === true) ? {duration: 200, queue: false} : effects,
				scrollOfs: this.tree.options.scrollOfs,
				scrollParent: this.tree.options.scrollParent || this.tree.$container,
				topNode: null
			}, options),
			dfd = new $.Deferred(),
			that = this,
			nodeHeight = $(this.span).height(),
			$container = $(opts.scrollParent),
			topOfs = opts.scrollOfs.top || 0,
			bottomOfs = opts.scrollOfs.bottom || 0,
			containerHeight = $container.height(),// - topOfs - bottomOfs,
			scrollTop = $container.scrollTop(),
			$animateTarget = $container,
			isParentWindow = $container[0] === window,
			topNode = opts.topNode || null,
			newScrollTop = null;

		// this.debug("scrollIntoView(), scrollTop=" + scrollTop, opts.scrollOfs);
//		_assert($(this.span).is(":visible"), "scrollIntoView node is invisible"); // otherwise we cannot calc offsets
		if( !$(this.span).is(":visible") ) {
			// We cannot calc offsets for hidden elements
			this.warn("scrollIntoView(): node is invisible.");
			return _getResolvedPromise();
		}
		if( isParentWindow ) {
			nodeY = $(this.span).offset().top;
			topNodeY = (topNode && topNode.span) ? $(topNode.span).offset().top : 0;
			$animateTarget = $("html,body");

		} else {
			_assert($container[0] !== document && $container[0] !== document.body,
				"scrollParent should be a simple element or `window`, not document or body.");

			containerOffsetTop = $container.offset().top,
			nodeY = $(this.span).offset().top - containerOffsetTop + scrollTop; // relative to scroll parent
			topNodeY = topNode ? $(topNode.span).offset().top - containerOffsetTop + scrollTop : 0;
			horzScrollbarHeight = Math.max(0, ($container.innerHeight() - $container[0].clientHeight));
			containerHeight -= horzScrollbarHeight;
		}

		// this.debug("    scrollIntoView(), nodeY=" + nodeY + ", containerHeight=" + containerHeight);
		if( nodeY < (scrollTop + topOfs) ){
			// Node is above visible container area
			newScrollTop = nodeY - topOfs;
			// this.debug("    scrollIntoView(), UPPER newScrollTop=" + newScrollTop);

		}else if((nodeY + nodeHeight) > (scrollTop + containerHeight - bottomOfs)){
			newScrollTop = nodeY + nodeHeight - containerHeight + bottomOfs;
			// this.debug("    scrollIntoView(), LOWER newScrollTop=" + newScrollTop);
			// If a topNode was passed, make sure that it is never scrolled
			// outside the upper border
			if(topNode){
				_assert(topNode.isRootNode() || $(topNode.span).is(":visible"), "topNode must be visible");
				if( topNodeY < newScrollTop ){
					newScrollTop = topNodeY - topOfs;
					// this.debug("    scrollIntoView(), TOP newScrollTop=" + newScrollTop);
				}
			}
		}

		if(newScrollTop !== null){
			// this.debug("    scrollIntoView(), SET newScrollTop=" + newScrollTop);
			if(opts.effects){
				opts.effects.complete = function(){
					dfd.resolveWith(that);
				};
				$animateTarget.stop(true).animate({
					scrollTop: newScrollTop
				}, opts.effects);
			}else{
				$animateTarget[0].scrollTop = newScrollTop;
				dfd.resolveWith(this);
			}
		}else{
			dfd.resolveWith(this);
		}
		return dfd.promise();
	},

	/**Activate this node.
	 * @param {boolean} [flag=true] pass false to deactivate
	 * @param {object} [opts] additional options. Defaults to {noEvents: false, noFocus: false}
	 * @returns {$.Promise}
	 */
	setActive: function(flag, opts){
		return this.tree._callHook("nodeSetActive", this, flag, opts);
	},
	/**Expand or collapse this node. Promise is resolved, when lazy loading and animations are done.
	 * @param {boolean} [flag=true] pass false to collapse
	 * @param {object} [opts] additional options. Defaults to {noAnimation: false, noEvents: false}
	 * @returns {$.Promise}
	 */
	setExpanded: function(flag, opts){
		return this.tree._callHook("nodeSetExpanded", this, flag, opts);
	},
	/**Set keyboard focus to this node.
	 * @param {boolean} [flag=true] pass false to blur
	 * @see Fancytree#setFocus
	 */
	setFocus: function(flag){
		return this.tree._callHook("nodeSetFocus", this, flag);
	},
	/**Select this node, i.e. check the checkbox.
	 * @param {boolean} [flag=true] pass false to deselect
	 */
	setSelected: function(flag){
		return this.tree._callHook("nodeSetSelected", this, flag);
	},
	/**Mark a lazy node as 'error', 'loading', 'nodata', or 'ok'.
	 * @param {string} status 'error'|'empty'|'ok'
	 * @param {string} [message]
	 * @param {string} [details]
	 */
	setStatus: function(status, message, details){
		return this.tree._callHook("nodeSetStatus", this, status, message, details);
	},
	/**Rename this node.
	 * @param {string} title
	 */
	setTitle: function(title){
		this.title = title;
		this.renderTitle();
		this.triggerModify("rename");
	},
	/**Sort child list by title.
	 * @param {function} [cmp] custom compare function(a, b) that returns -1, 0, or 1 (defaults to sort by title).
	 * @param {boolean} [deep=false] pass true to sort all descendant nodes
	 */
	sortChildren: function(cmp, deep) {
		var i,l,
			cl = this.children;

		if( !cl ){
			return;
		}
		cmp = cmp || function(a, b) {
			var x = a.title.toLowerCase(),
				y = b.title.toLowerCase();
			return x === y ? 0 : x > y ? 1 : -1;
			};
		cl.sort(cmp);
		if( deep ){
			for(i=0, l=cl.length; i<l; i++){
				if( cl[i].children ){
					cl[i].sortChildren(cmp, "$norender$");
				}
			}
		}
		if( deep !== "$norender$" ){
			this.render();
		}
		this.triggerModifyChild("sort");
	},
	/** Convert node (or whole branch) into a plain object.
	 *
	 * The result is compatible with node.addChildren().
	 *
	 * @param {boolean} [recursive=false] include child nodes
	 * @param {function} [callback] callback(dict, node) is called for every node, in order to allow modifications
	 * @returns {NodeData}
	 */
	toDict: function(recursive, callback) {
		var i, l, node,
			dict = {},
			self = this;

		$.each(NODE_ATTRS, function(i, a){
			if(self[a] || self[a] === false){
				dict[a] = self[a];
			}
		});
		if(!$.isEmptyObject(this.data)){
			dict.data = $.extend({}, this.data);
			if($.isEmptyObject(dict.data)){
				delete dict.data;
			}
		}
		if( callback ){
			callback(dict, self);
		}
		if( recursive ) {
			if(this.hasChildren()){
				dict.children = [];
				for(i=0, l=this.children.length; i<l; i++ ){
					node = this.children[i];
					if( !node.isStatusNode() ){
						dict.children.push(node.toDict(true, callback));
					}
				}
			}else{
//                dict.children = null;
			}
		}
		return dict;
	},
	/**
	 * Set, clear, or toggle class of node's span tag and .extraClasses.
	 *
	 * @param {string} className class name (separate multiple classes by space)
	 * @param {boolean} [flag] true/false to add/remove class. If omitted, class is toggled.
	 * @returns {boolean} true if a class was added
	 *
	 * @since 2.17
	 */
	toggleClass: function(value, flag){
		var className, hasClass,
			rnotwhite = ( /\S+/g ),
			classNames = value.match( rnotwhite ) || [],
			i = 0,
			wasAdded = false,
			statusElem = this[this.tree.statusClassPropName],
			curClasses = (" " + (this.extraClasses || "") + " ");

		// this.info("toggleClass('" + value + "', " + flag + ")", curClasses);
		// Modify DOM element directly if it already exists
		if( statusElem ) {
			$(statusElem).toggleClass(value, flag);
		}
		// Modify node.extraClasses to make this change persistent
		// Toggle if flag was not passed
		while ( className = classNames[ i++ ] ) {
			hasClass = curClasses.indexOf(" " + className + " ") >= 0;
			flag = (flag === undefined) ? (!hasClass) : !!flag;
			if ( flag ) {
				if( !hasClass ) {
					curClasses += className + " ";
					wasAdded = true;
				}
			} else {
				while ( curClasses.indexOf( " " + className + " " ) > -1 ) {
					curClasses = curClasses.replace( " " + className + " ", " " );
				}
			}
		}
		this.extraClasses = $.trim(curClasses);
		// this.info("-> toggleClass('" + value + "', " + flag + "): '" + this.extraClasses + "'");
		return wasAdded;
	},
	/** Flip expanded status.  */
	toggleExpanded: function(){
		return this.tree._callHook("nodeToggleExpanded", this);
	},
	/** Flip selection status.  */
	toggleSelected: function(){
		return this.tree._callHook("nodeToggleSelected", this);
	},
	toString: function() {
		return "<FancytreeNode(#" + this.key + ", '" + this.title + "')>";
	},
	/**
	 * Trigger `modifyChild` event on a parent to signal that a child was modified.
	 * @param {string} operation Type of change: 'add', 'remove', 'rename', 'move', 'data', ...
	 * @param {FancytreeNode} [childNode]
	 * @param {object} [extra]
	 */
	triggerModifyChild: function(operation, childNode, extra){
		var data,
			modifyChild = this.tree.options.modifyChild;

		if ( modifyChild ){
			if( childNode && childNode.parent !== this ) {
				$.error("childNode " + childNode + " is not a child of " + this);
			}
			data = {
				node: this,
				tree: this.tree,
				operation: operation,
				childNode: childNode || null
			};
			if( extra ) {
				$.extend(data, extra);
			}
			modifyChild({type: "modifyChild"}, data);
		}
	},
	/**
	 * Trigger `modifyChild` event on node.parent(!).
	 * @param {string} operation Type of change: 'add', 'remove', 'rename', 'move', 'data', ...
	 * @param {object} [extra]
	 */
	triggerModify: function(operation, extra){
		this.parent.triggerModifyChild(operation, this, extra);
	},
	/** Call fn(node) for all child nodes.<br>
	 * Stop iteration, if fn() returns false. Skip current branch, if fn() returns "skip".<br>
	 * Return false if iteration was stopped.
	 *
	 * @param {function} fn the callback function.
	 *     Return false to stop iteration, return "skip" to skip this node and
	 *     its children only.
	 * @param {boolean} [includeSelf=false]
	 * @returns {boolean}
	 */
	visit: function(fn, includeSelf) {
		var i, l,
			res = true,
			children = this.children;

		if( includeSelf === true ) {
			res = fn(this);
			if( res === false || res === "skip" ){
				return res;
			}
		}
		if(children){
			for(i=0, l=children.length; i<l; i++){
				res = children[i].visit(fn, true);
				if( res === false ){
					break;
				}
			}
		}
		return res;
	},
	/** Call fn(node) for all child nodes and recursively load lazy children.<br>
	 * <b>Note:</b> If you need this method, you probably should consider to review
	 * your architecture! Recursivley loading nodes is a perfect way for lazy
	 * programmers to flood the server with requests ;-)
	 *
	 * @param {function} [fn] optional callback function.
	 *     Return false to stop iteration, return "skip" to skip this node and
	 *     its children only.
	 * @param {boolean} [includeSelf=false]
	 * @returns {$.Promise}
	 * @since 2.4
	 */
	visitAndLoad: function(fn, includeSelf, _recursion) {
		var dfd, res, loaders,
			node = this;

		// node.debug("visitAndLoad");
		if( fn && includeSelf === true ) {
			res = fn(node);
			if( res === false || res === "skip" ) {
				return _recursion ? res : _getResolvedPromise();
			}
		}
		if( !node.children && !node.lazy ) {
			return _getResolvedPromise();
		}
		dfd = new $.Deferred();
		loaders = [];
		// node.debug("load()...");
		node.load().done(function(){
			// node.debug("load()... done.");
			for(var i=0, l=node.children.length; i<l; i++){
				res = node.children[i].visitAndLoad(fn, true, true);
				if( res === false ) {
					dfd.reject();
					break;
				} else if ( res !== "skip" ) {
					loaders.push(res); // Add promise to the list
				}
			}
			$.when.apply(this, loaders).then(function(){
				dfd.resolve();
			});
		});
		return dfd.promise();
	},
	/** Call fn(node) for all parent nodes, bottom-up, including invisible system root.<br>
	 * Stop iteration, if fn() returns false.<br>
	 * Return false if iteration was stopped.
	 *
	 * @param {function} fn the callback function.
	 *     Return false to stop iteration, return "skip" to skip this node and children only.
	 * @param {boolean} [includeSelf=false]
	 * @returns {boolean}
	 */
	visitParents: function(fn, includeSelf) {
		// Visit parent nodes (bottom up)
		if(includeSelf && fn(this) === false){
			return false;
		}
		var p = this.parent;
		while( p ) {
			if(fn(p) === false){
				return false;
			}
			p = p.parent;
		}
		return true;
	},
	/** Write warning to browser console (prepending node info)
	 *
	 * @param {*} msg string or object or array of such
	 */
	warn: function(msg){
		Array.prototype.unshift.call(arguments, this.toString());
		consoleApply("warn", arguments);
	}
};


/* *****************************************************************************
 * Fancytree
 */
/**
 * Construct a new tree object.
 *
 * @class Fancytree
 * @classdesc The controller behind a fancytree.
 * This class also contains 'hook methods': see {@link Fancytree_Hooks}.
 *
 * @param {Widget} widget
 *
 * @property {string} _id Automatically generated unique tree instance ID, e.g. "1".
 * @property {string} _ns Automatically generated unique tree namespace, e.g. ".fancytree-1".
 * @property {FancytreeNode} activeNode Currently active node or null.
 * @property {string} ariaPropName Property name of FancytreeNode that contains the element which will receive the aria attributes.
 *     Typically "li", but "tr" for table extension.
 * @property {jQueryObject} $container Outer &lt;ul> element (or &lt;table> element for ext-table).
 * @property {jQueryObject} $div A jQuery object containing the element used to instantiate the tree widget (`widget.element`)
 * @property {object} data Metadata, i.e. properties that may be passed to `source` in addition to a children array.
 * @property {object} ext Hash of all active plugin instances.
 * @property {FancytreeNode} focusNode Currently focused node or null.
 * @property {FancytreeNode} lastSelectedNode Used to implement selectMode 1 (single select)
 * @property {string} nodeContainerAttrName Property name of FancytreeNode that contains the outer element of single nodes.
 *     Typically "li", but "tr" for table extension.
 * @property {FancytreeOptions} options Current options, i.e. default options + options passed to constructor.
 * @property {FancytreeNode} rootNode Invisible system root node.
 * @property {string} statusClassPropName Property name of FancytreeNode that contains the element which will receive the status classes.
 *     Typically "span", but "tr" for table extension.
 * @property {object} widget Base widget instance.
 */
function Fancytree(widget) {
	this.widget = widget;
	this.$div = widget.element;
	this.options = widget.options;
	if( this.options ) {
		if(  $.isFunction(this.options.lazyload ) && !$.isFunction(this.options.lazyLoad) ) {
			this.options.lazyLoad = function() {
				FT.warn("The 'lazyload' event is deprecated since 2014-02-25. Use 'lazyLoad' (with uppercase L) instead.");
				return widget.options.lazyload.apply(this, arguments);
			};
		}
		if( $.isFunction(this.options.loaderror) ) {
			$.error("The 'loaderror' event was renamed since 2014-07-03. Use 'loadError' (with uppercase E) instead.");
		}
		if( this.options.fx !== undefined ) {
			FT.warn("The 'fx' option was replaced by 'toggleEffect' since 2014-11-30.");
		}
		if( this.options.removeNode !== undefined ) {
			$.error("The 'removeNode' event was replaced by 'modifyChild' since 2.20 (2016-09-10).");
		}
	}
	this.ext = {}; // Active extension instances
	// allow to init tree.data.foo from <div data-foo=''>
	this.data = _getElementDataAsDict(this.$div);
	// TODO: use widget.uuid instead?
	this._id = $.ui.fancytree._nextId++;
	// TODO: use widget.eventNamespace instead?
	this._ns = ".fancytree-" + this._id; // append for namespaced events
	this.activeNode = null;
	this.focusNode = null;
	this._hasFocus = null;
	this._enableUpdate = true;
	// this._dirtyRoots = null;
	this.lastSelectedNode = null;
	this.systemFocusElement = null;
	this.lastQuicksearchTerm = "";
	this.lastQuicksearchTime = 0;

	this.statusClassPropName = "span";
	this.ariaPropName = "li";
	this.nodeContainerAttrName = "li";

	// Remove previous markup if any
	this.$div.find(">ul.fancytree-container").remove();

	// Create a node without parent.
	var fakeParent = { tree: this },
		$ul;
	this.rootNode = new FancytreeNode(fakeParent, {
		title: "root",
		key: "root_" + this._id,
		children: null,
		expanded: true
	});
	this.rootNode.parent = null;

	// Create root markup
	$ul = $("<ul>", {
		"class": "ui-fancytree fancytree-container fancytree-plain"
	}).appendTo(this.$div);
	this.$container = $ul;
	this.rootNode.ul = $ul[0];

	if(this.options.debugLevel == null){
		this.options.debugLevel = FT.debugLevel;
	}
	// Add container to the TAB chain
	// See http://www.w3.org/TR/wai-aria-practices/#focus_activedescendant
	// #577: Allow to set tabindex to "0", "-1" and ""
	this.$container.attr("tabindex", this.options.tabindex);
	// this.$container.attr("tabindex", this.options.tabbable ? "0" : "-1");
	if(this.options.aria){
		this.$container.attr("role", "tree");
		if( this.options.selectMode !== 1 ) {
			this.$container.attr("aria-multiselectable", true);
		}
	}
}


Fancytree.prototype = /** @lends Fancytree# */{
	/* Return a context object that can be re-used for _callHook().
	 * @param {Fancytree | FancytreeNode | EventData} obj
	 * @param {Event} originalEvent
	 * @param {Object} extra
	 * @returns {EventData}
	 */
	_makeHookContext: function(obj, originalEvent, extra) {
		var ctx, tree;
		if(obj.node !== undefined){
			// obj is already a context object
			if(originalEvent && obj.originalEvent !== originalEvent){
				$.error("invalid args");
			}
			ctx = obj;
		}else if(obj.tree){
			// obj is a FancytreeNode
			tree = obj.tree;
			ctx = { node: obj, tree: tree, widget: tree.widget, options: tree.widget.options, originalEvent: originalEvent };
		}else if(obj.widget){
			// obj is a Fancytree
			ctx = { node: null, tree: obj, widget: obj.widget, options: obj.widget.options, originalEvent: originalEvent };
		}else{
			$.error("invalid args");
		}
		if(extra){
			$.extend(ctx, extra);
		}
		return ctx;
	},
	/* Trigger a hook function: funcName(ctx, [...]).
	 *
	 * @param {string} funcName
	 * @param {Fancytree|FancytreeNode|EventData} contextObject
	 * @param {any}  [_extraArgs] optional additional arguments
	 * @returns {any}
	 */
	_callHook: function(funcName, contextObject, _extraArgs) {
		var ctx = this._makeHookContext(contextObject),
			fn = this[funcName],
			args = Array.prototype.slice.call(arguments, 2);
		if(!$.isFunction(fn)){
			$.error("_callHook('" + funcName + "') is not a function");
		}
		args.unshift(ctx);
//		this.debug("_hook", funcName, ctx.node && ctx.node.toString() || ctx.tree.toString(), args);
		return fn.apply(this, args);
	},
	/* Check if current extensions dependencies are met and throw an error if not.
	 *
	 * This method may be called inside the `treeInit` hook for custom extensions.
	 *
	 * @param {string} extension name of the required extension
	 * @param {boolean} [required=true] pass `false` if the extension is optional, but we want to check for order if it is present
	 * @param {boolean} [before] `true` if `name` must be included before this, `false` otherwise (use `null` if order doesn't matter)
	 * @param {string} [message] optional error message (defaults to a descriptve error message)
	 */
	_requireExtension: function(name, required, before, message) {
		before = !!before;
		var thisName = this._local.name,
			extList = this.options.extensions,
			isBefore = $.inArray(name, extList) < $.inArray(thisName, extList),
			isMissing = required && this.ext[name] == null,
			badOrder = !isMissing && before != null && (before !== isBefore);

		_assert(thisName && thisName !== name, "invalid or same name");

		if( isMissing || badOrder ){
			if( !message ){
				if( isMissing || required ){
					message = "'" + thisName + "' extension requires '" + name + "'";
					if( badOrder ){
						message += " to be registered " + (before ? "before" : "after") + " itself";
					}
				}else{
					message = "If used together, `" + name + "` must be registered " + (before ? "before" : "after") + " `" + thisName + "`";
				}
			}
			$.error(message);
			return false;
		}
		return true;
	},
	/** Activate node with a given key and fire focus and activate events.
	 *
	 * A prevously activated node will be deactivated.
	 * If activeVisible option is set, all parents will be expanded as necessary.
	 * Pass key = false, to deactivate the current node only.
	 * @param {string} key
	 * @returns {FancytreeNode} activated node (null, if not found)
	 */
	activateKey: function(key) {
		var node = this.getNodeByKey(key);
		if(node){
			node.setActive();
		}else if(this.activeNode){
			this.activeNode.setActive(false);
		}
		return node;
	},
	/** (experimental) Add child status nodes that indicate 'More...', ....
	 * @param {boolean|object} node optional node definition. Pass `false` to remove all paging nodes.
	 * @param {string} [mode='append'] 'child'|firstChild'
	 * @since 2.15
	 */
	addPagingNode: function(node, mode){
		return this.rootNode.addPagingNode(node, mode);
	},
	/** (experimental) Modify existing data model.
	 *
	 * @param {Array} patchList array of [key, NodePatch] arrays
	 * @returns {$.Promise} resolved, when all patches have been applied
	 * @see TreePatch
	 */
	applyPatch: function(patchList) {
		var dfd, i, p2, key, patch, node,
			patchCount = patchList.length,
			deferredList = [];

		for(i=0; i<patchCount; i++){
			p2 = patchList[i];
			_assert(p2.length === 2, "patchList must be an array of length-2-arrays");
			key = p2[0];
			patch = p2[1];
			node = (key === null) ? this.rootNode : this.getNodeByKey(key);
			if(node){
				dfd = new $.Deferred();
				deferredList.push(dfd);
				node.applyPatch(patch).always(_makeResolveFunc(dfd, node));
			}else{
				this.warn("could not find node with key '" + key + "'");
			}
		}
		// Return a promise that is resolved, when ALL patches were applied
		return $.when.apply($, deferredList).promise();
	},
	/* TODO: implement in dnd extension
	cancelDrag: function() {
		var dd = $.ui.ddmanager.current;
		if(dd){
			dd.cancel();
		}
	},
   */
	/** Remove all nodes.
	 * @since 2.14
	 */
	clear: function(source) {
		this._callHook("treeClear", this);
	},
   /** Return the number of nodes.
	* @returns {integer}
	*/
	count: function() {
		return this.rootNode.countChildren();
	},
	/** Write to browser console if debugLevel >= 2 (prepending tree name)
	 *
	 * @param {*} msg string or object or array of such
	 */
	debug: function(msg){
		if( this.options.debugLevel >= 2 ) {
			Array.prototype.unshift.call(arguments, this.toString());
			consoleApply("log", arguments);
		}
	},
	// TODO: disable()
	// TODO: enable()
	/** Temporarily suppress rendering to improve performance on bulk-updates.
	 *
	 * @param {boolean} flag
	 * @returns {boolean} previous status
	 * @since 2.19
	 */
	enableUpdate: function(flag) {
		flag = ( flag !== false );
		/*jshint -W018 */  // Confusing use of '!'
		if ( !!this._enableUpdate === !!flag ) {
			return flag;
		}
		/*jshint +W018 */
		this._enableUpdate = flag;
		if ( flag ) {
			this.debug("enableUpdate(true): redraw ", this._dirtyRoots);
			this.render();
		} else {
		// 	this._dirtyRoots = null;
			this.debug("enableUpdate(false)...");
		}
		return !flag; // return previous value
	},
	/**Find all nodes that matches condition.
	 *
	 * @param {string | function(node)} match title string to search for, or a
	 *     callback function that returns `true` if a node is matched.
	 * @returns {FancytreeNode[]} array of nodes (may be empty)
	 * @see FancytreeNode#findAll
	 * @since 2.12
	 */
	findAll: function(match) {
		return this.rootNode.findAll(match);
	},
	/**Find first node that matches condition.
	 *
	 * @param {string | function(node)} match title string to search for, or a
	 *     callback function that returns `true` if a node is matched.
	 * @returns {FancytreeNode} matching node or null
	 * @see FancytreeNode#findFirst
	 * @since 2.12
	 */
	findFirst: function(match) {
		return this.rootNode.findFirst(match);
	},
	/** Find the next visible node that starts with `match`, starting at `startNode`
	 * and wrap-around at the end.
	 *
	 * @param {string|function} match
	 * @param {FancytreeNode} [startNode] defaults to first node
	 * @returns {FancytreeNode} matching node or null
	 */
	findNextNode: function(match, startNode, visibleOnly) {
		var stopNode = null,
			parentChildren = startNode.parent.children,
			matchingNode = null,
			walkVisible = function(parent, idx, fn) {
				var i, grandParent,
					parentChildren = parent.children,
					siblingCount = parentChildren.length,
					node = parentChildren[idx];
				// visit node itself
				if( node && fn(node) === false ) {
					return false;
				}
				// visit descendants
				if( node && node.children && node.expanded ) {
					if( walkVisible(node, 0, fn) === false ) {
						return false;
					}
				}
				// visit subsequent siblings
				for( i = idx + 1; i < siblingCount; i++ ) {
					if( walkVisible(parent, i, fn) === false ) {
						return false;
					}
				}
				// visit parent's subsequent siblings
				grandParent = parent.parent;
				if( grandParent ) {
					return walkVisible(grandParent, grandParent.children.indexOf(parent) + 1, fn);
				} else {
					// wrap-around: restart with first node
					return walkVisible(parent, 0, fn);
				}
			};

		match = (typeof match === "string") ? _makeNodeTitleStartMatcher(match) : match;
		startNode = startNode || this.getFirstChild();

		walkVisible(startNode.parent, parentChildren.indexOf(startNode), function(node){
			// Stop iteration if we see the start node a second time
			if( node === stopNode ) {
				return false;
			}
			stopNode = stopNode || node;
			// Ignore nodes hidden by a filter
			if( ! $(node.span).is(":visible") ) {
				node.debug("quicksearch: skipping hidden node");
				return;
			}
			// Test if we found a match, but search for a second match if this
			// was the currently active node
			if( match(node) ) {
				// node.debug("quicksearch match " + node.title, startNode);
				matchingNode = node;
				if( matchingNode !== startNode ) {
					return false;
				}
			}
		});
		return matchingNode;
	},
	// TODO: fromDict
	/**
	 * Generate INPUT elements that can be submitted with html forms.
	 *
	 * In selectMode 3 only the topmost selected nodes are considered, unless
	 * `opts.stopOnParents: false` is passed.
	 *
	 * @example
	 * // Generate input elements for active and selected nodes
	 * tree.generateFormElements();
	 * // Generate input elements selected nodes, using a custom `name` attribute
	 * tree.generateFormElements("cust_sel", false);
	 * // Generate input elements using a custom filter
	 * tree.generateFormElements(true, true, { filter: function(node) {
	 *     return node.isSelected() && node.data.yes;
	 * }});
	 *
	 * @param {boolean | string} [selected=true] Pass false to disable, pass a string to override the field name (default: 'ft_ID[]')
	 * @param {boolean | string} [active=true] Pass false to disable, pass a string to override the field name (default: 'ft_ID_active')
	 * @param {object} [opts] default { filter: null, stopOnParents: true }
	 */
	generateFormElements: function(selected, active, opts) {
		opts = opts || {};

		var nodeList,
			selectedName = (typeof selected === "string") ? selected : "ft_" + this._id + "[]",
			activeName = (typeof active === "string") ? active : "ft_" + this._id + "_active",
			id = "fancytree_result_" + this._id,
			$result = $("#" + id),
			stopOnParents = this.options.selectMode === 3 && opts.stopOnParents !== false;

		if($result.length){
			$result.empty();
		}else{
			$result = $("<div>", {
				id: id
			}).hide().insertAfter(this.$container);
		}
		if(active !== false && this.activeNode){
			$result.append($("<input>", {
				type: "radio",
				name: activeName,
				value: this.activeNode.key,
				checked: true
			}));
		}
		function _appender( node ) {
			$result.append($("<input>", {
				type: "checkbox",
				name: selectedName,
				value: node.key,
				checked: true
			}));
		}
		if ( opts.filter ) {
			this.visit(function(node) {
				var res = opts.filter(node);
				if( res === "skip" ) { return res; }
				if ( res !== false ) {
					_appender(node);
				}
			});
		} else if ( selected !== false ) {
			nodeList = this.getSelectedNodes(stopOnParents);
			$.each(nodeList, function(idx, node) {
				_appender(node);
			});
		}
	},
	/**
	 * Return the currently active node or null.
	 * @returns {FancytreeNode}
	 */
	getActiveNode: function() {
		return this.activeNode;
	},
	/** Return the first top level node if any (not the invisible root node).
	 * @returns {FancytreeNode | null}
	 */
	getFirstChild: function() {
		return this.rootNode.getFirstChild();
	},
	/**
	 * Return node that has keyboard focus or null.
	 * @returns {FancytreeNode}
	 */
	getFocusNode: function() {
		return this.focusNode;
	},
	/**
	 * Return node with a given key or null if not found.
	 * @param {string} key
	 * @param {FancytreeNode} [searchRoot] only search below this node
	 * @returns {FancytreeNode | null}
	 */
	getNodeByKey: function(key, searchRoot) {
		// Search the DOM by element ID (assuming this is faster than traversing all nodes).
		// $("#...") has problems, if the key contains '.', so we use getElementById()
		var el, match;
		if(!searchRoot){
			el = document.getElementById(this.options.idPrefix + key);
			if( el ){
				return el.ftnode ? el.ftnode : null;
			}
		}
		// Not found in the DOM, but still may be in an unrendered part of tree
		// TODO: optimize with specialized loop
		// TODO: consider keyMap?
		searchRoot = searchRoot || this.rootNode;
		match = null;
		searchRoot.visit(function(node){
//            window.console.log("getNodeByKey(" + key + "): ", node.key);
			if(node.key === key) {
				match = node;
				return false;
			}
		}, true);
		return match;
	},
	/** Return the invisible system root node.
	 * @returns {FancytreeNode}
	 */
	getRootNode: function() {
		return this.rootNode;
	},
	/**
	 * Return an array of selected nodes.
	 * @param {boolean} [stopOnParents=false] only return the topmost selected
	 *     node (useful with selectMode 3)
	 * @returns {FancytreeNode[]}
	 */
	getSelectedNodes: function(stopOnParents) {
		return this.rootNode.getSelectedNodes(stopOnParents);
	},
	/** Return true if the tree control has keyboard focus
	 * @returns {boolean}
	 */
	hasFocus: function(){
		return !!this._hasFocus;
	},
	/** Write to browser console if debugLevel >= 1 (prepending tree name)
	 * @param {*} msg string or object or array of such
	 */
	info: function(msg){
		if( this.options.debugLevel >= 1 ) {
			Array.prototype.unshift.call(arguments, this.toString());
			consoleApply("info", arguments);
		}
	},
/*
	TODO: isInitializing: function() {
		return ( this.phase=="init" || this.phase=="postInit" );
	},
	TODO: isReloading: function() {
		return ( this.phase=="init" || this.phase=="postInit" ) && this.options.persist && this.persistence.cookiesFound;
	},
	TODO: isUserEvent: function() {
		return ( this.phase=="userEvent" );
	},
*/

	/**
	 * Make sure that a node with a given ID is loaded, by traversing - and
	 * loading - its parents. This method is ment for lazy hierarchies.
	 * A callback is executed for every node as we go.
	 * @example
	 * tree.loadKeyPath("/_3/_23/_26/_27", function(node, status){
	 *   if(status === "loaded") {
	 *     console.log("loaded intermiediate node " + node);
	 *   }else if(status === "ok") {
	 *     node.activate();
	 *   }
	 * });
	 *
	 * @param {string | string[]} keyPathList one or more key paths (e.g. '/3/2_1/7')
	 * @param {function} callback callback(node, status) is called for every visited node ('loading', 'loaded', 'ok', 'error')
	 * @returns {$.Promise}
	 */
	loadKeyPath: function(keyPathList, callback, _rootNode) {
		var deferredList, dfd, i, path, key, loadMap, node, root, segList,
			sep = this.options.keyPathSeparator,
			self = this;

		callback = callback || $.noop;
		if(!$.isArray(keyPathList)){
			keyPathList = [keyPathList];
		}
		// Pass 1: handle all path segments for nodes that are already loaded
		// Collect distinct top-most lazy nodes in a map
		loadMap = {};

		for(i=0; i<keyPathList.length; i++){
			root = _rootNode || this.rootNode;
			path = keyPathList[i];
			// strip leading slash
			if(path.charAt(0) === sep){
				path = path.substr(1);
			}
			// traverse and strip keys, until we hit a lazy, unloaded node
			segList = path.split(sep);
			while(segList.length){
				key = segList.shift();
//                node = _findDirectChild(root, key);
				node = root._findDirectChild(key);
				if(!node){
					this.warn("loadKeyPath: key not found: " + key + " (parent: " + root + ")");
					callback.call(this, key, "error");
					break;
				}else if(segList.length === 0){
					callback.call(this, node, "ok");
					break;
				}else if(!node.lazy || (node.hasChildren() !== undefined )){
					callback.call(this, node, "loaded");
					root = node;
				}else{
					callback.call(this, node, "loaded");
//                    segList.unshift(key);
					if(loadMap[key]){
						loadMap[key].push(segList.join(sep));
					}else{
						loadMap[key] = [segList.join(sep)];
					}
					break;
				}
			}
		}
//        alert("loadKeyPath: loadMap=" + JSON.stringify(loadMap));
		// Now load all lazy nodes and continue itearation for remaining paths
		deferredList = [];
		// Avoid jshint warning 'Don't make functions within a loop.':
		function __lazyload(key, node, dfd){
			callback.call(self, node, "loading");
			node.load().done(function(){
				self.loadKeyPath.call(self, loadMap[key], callback, node).always(_makeResolveFunc(dfd, self));
			}).fail(function(errMsg){
				self.warn("loadKeyPath: error loading: " + key + " (parent: " + root + ")");
				callback.call(self, node, "error");
				dfd.reject();
			});
		}
		for(key in loadMap){
			node = root._findDirectChild(key);
			if (node == null) {  // #576
				node = self.getNodeByKey(key);
			}
			dfd = new $.Deferred();
			deferredList.push(dfd);
			__lazyload(key, node, dfd);
		}
		// Return a promise that is resolved, when ALL paths were loaded
		return $.when.apply($, deferredList).promise();
	},
	/** Re-fire beforeActivate, activate, and (optional) focus events.
	 * Calling this method in the `init` event, will activate the node that
	 * was marked 'active' in the source data, and optionally set the keyboard
	 * focus.
	 * @param [setFocus=false]
	 */
	reactivate: function(setFocus) {
		var res,
			node = this.activeNode;

		if( !node ) {
			return _getResolvedPromise();
		}
		this.activeNode = null; // Force re-activating
		res = node.setActive(true, {noFocus: true});
		if( setFocus ){
			node.setFocus();
		}
		return res;
	},
	/** Reload tree from source and return a promise.
	 * @param [source] optional new source (defaults to initial source data)
	 * @returns {$.Promise}
	 */
	reload: function(source) {
		this._callHook("treeClear", this);
		return this._callHook("treeLoad", this, source);
	},
	/**Render tree (i.e. create DOM elements for all top-level nodes).
	 * @param {boolean} [force=false] create DOM elemnts, even if parent is collapsed
	 * @param {boolean} [deep=false]
	 */
	render: function(force, deep) {
		return this.rootNode.render(force, deep);
	},
	// TODO: selectKey: function(key, select)
	// TODO: serializeArray: function(stopOnParents)
	/**
	 * @param {boolean} [flag=true]
	 */
	setFocus: function(flag) {
		return this._callHook("treeSetFocus", this, flag);
	},
	/**
	 * Return all nodes as nested list of {@link NodeData}.
	 *
	 * @param {boolean} [includeRoot=false] Returns the hidden system root node (and its children)
	 * @param {function} [callback] callback(dict, node) is called for every node, in order to allow modifications
	 * @returns {Array | object}
	 * @see FancytreeNode#toDict
	 */
	toDict: function(includeRoot, callback){
		var res = this.rootNode.toDict(true, callback);
		return includeRoot ? res : res.children;
	},
	/* Implicitly called for string conversions.
	 * @returns {string}
	 */
	toString: function(){
		return "<Fancytree(#" + this._id + ")>";
	},
	/* _trigger a widget event with additional node ctx.
	 * @see EventData
	 */
	_triggerNodeEvent: function(type, node, originalEvent, extra) {
//		this.debug("_trigger(" + type + "): '" + ctx.node.title + "'", ctx);
		var ctx = this._makeHookContext(node, originalEvent, extra),
			res = this.widget._trigger(type, originalEvent, ctx);
		if(res !== false && ctx.result !== undefined){
			return ctx.result;
		}
		return res;
	},
	/* _trigger a widget event with additional tree data. */
	_triggerTreeEvent: function(type, originalEvent, extra) {
//		this.debug("_trigger(" + type + ")", ctx);
		var ctx = this._makeHookContext(this, originalEvent, extra),
			res = this.widget._trigger(type, originalEvent, ctx);

		if(res !== false && ctx.result !== undefined){
			return ctx.result;
		}
		return res;
	},
	/** Call fn(node) for all nodes.
	 *
	 * @param {function} fn the callback function.
	 *     Return false to stop iteration, return "skip" to skip this node and children only.
	 * @returns {boolean} false, if the iterator was stopped.
	 */
	visit: function(fn) {
		return this.rootNode.visit(fn, false);
	},
	/** Write warning to browser console (prepending tree info)
	 *
	 * @param {*} msg string or object or array of such
	 */
	warn: function(msg){
		Array.prototype.unshift.call(arguments, this.toString());
		consoleApply("warn", arguments);
	}
};

/**
 * These additional methods of the {@link Fancytree} class are 'hook functions'
 * that can be used and overloaded by extensions.
 * (See <a href="https://github.com/mar10/fancytree/wiki/TutorialExtensions">writing extensions</a>.)
 * @mixin Fancytree_Hooks
 */
$.extend(Fancytree.prototype,
	/** @lends Fancytree_Hooks# */
	{
	/** Default handling for mouse click events.
	 *
	 * @param {EventData} ctx
	 */
	nodeClick: function(ctx) {
		var activate, expand,
			// event = ctx.originalEvent,
			targetType = ctx.targetType,
			node = ctx.node;

//	    this.debug("ftnode.onClick(" + event.type + "): ftnode:" + this + ", button:" + event.button + ", which: " + event.which, ctx);
		// TODO: use switch
		// TODO: make sure clicks on embedded <input> doesn't steal focus (see table sample)
		if( targetType === "expander" ) {
			if( node.isLoading() ) {
				// #495: we probably got a click event while a lazy load is pending.
				// The 'expanded' state is not yet set, so 'toggle' would expand
				// and trigger lazyLoad again.
				// It would be better to allow to collapse/expand the status node
				// while loading (instead of ignoring), but that would require some
				// more work.
				node.debug("Got 2nd click while loading: ignored");
				return;
			}
			// Clicking the expander icon always expands/collapses
			this._callHook("nodeToggleExpanded", ctx);

		} else if( targetType === "checkbox" ) {
			// Clicking the checkbox always (de)selects
			this._callHook("nodeToggleSelected", ctx);
			if( ctx.options.focusOnSelect ) { // #358
				this._callHook("nodeSetFocus", ctx, true);
			}

		} else {
			// Honor `clickFolderMode` for
			expand = false;
			activate = true;
			if( node.folder ) {
				switch( ctx.options.clickFolderMode ) {
				case 2: // expand only
					expand = true;
					activate = false;
					break;
				case 3: // expand and activate
					activate = true;
					expand = true; //!node.isExpanded();
					break;
				// else 1 or 4: just activate
				}
			}
			if( activate ) {
				this.nodeSetFocus(ctx);
				this._callHook("nodeSetActive", ctx, true);
			}
			if( expand ) {
				if(!activate){
//                    this._callHook("nodeSetFocus", ctx);
				}
//				this._callHook("nodeSetExpanded", ctx, true);
				this._callHook("nodeToggleExpanded", ctx);
			}
		}
		// Make sure that clicks stop, otherwise <a href='#'> jumps to the top
		// if(event.target.localName === "a" && event.target.className === "fancytree-title"){
		// 	event.preventDefault();
		// }
		// TODO: return promise?
	},
	/** Collapse all other  children of same parent.
	 *
	 * @param {EventData} ctx
	 * @param {object} callOpts
	 */
	nodeCollapseSiblings: function(ctx, callOpts) {
		// TODO: return promise?
		var ac, i, l,
			node = ctx.node;

		if( node.parent ){
			ac = node.parent.children;
			for (i=0, l=ac.length; i<l; i++) {
				if ( ac[i] !== node && ac[i].expanded ){
					this._callHook("nodeSetExpanded", ac[i], false, callOpts);
				}
			}
		}
	},
	/** Default handling for mouse douleclick events.
	 * @param {EventData} ctx
	 */
	nodeDblclick: function(ctx) {
		// TODO: return promise?
		if( ctx.targetType === "title" && ctx.options.clickFolderMode === 4) {
//			this.nodeSetFocus(ctx);
//			this._callHook("nodeSetActive", ctx, true);
			this._callHook("nodeToggleExpanded", ctx);
		}
		// TODO: prevent text selection on dblclicks
		if( ctx.targetType === "title" ) {
			ctx.originalEvent.preventDefault();
		}
	},
	/** Default handling for mouse keydown events.
	 *
	 * NOTE: this may be called with node == null if tree (but no node) has focus.
	 * @param {EventData} ctx
	 */
	nodeKeydown: function(ctx) {
		// TODO: return promise?
		var matchNode, stamp, res, focusNode,
			event = ctx.originalEvent,
			node = ctx.node,
			tree = ctx.tree,
			opts = ctx.options,
			which = event.which,
			whichChar = String.fromCharCode(which),
			clean = !(event.altKey || event.ctrlKey || event.metaKey || event.shiftKey),
			$target = $(event.target),
			handled = true,
			activate = !(event.ctrlKey || !opts.autoActivate );

		// (node || FT).debug("ftnode.nodeKeydown(" + event.type + "): ftnode:" + this + ", charCode:" + event.charCode + ", keyCode: " + event.keyCode + ", which: " + event.which);
		// FT.debug("eventToString", which, '"' + String.fromCharCode(which) + '"', '"' + FT.eventToString(event) + '"');

		// Set focus to active (or first node) if no other node has the focus yet
		if( !node ){
			focusNode = (this.getActiveNode() || this.getFirstChild());
			if (focusNode){
				focusNode.setFocus();
				node = ctx.node = this.focusNode;
				node.debug("Keydown force focus on active node");
			}
		}

		if( opts.quicksearch && clean && /\w/.test(whichChar) &&
				!SPECIAL_KEYCODES[which] &&  // #659
				!$target.is(":input:enabled") ) {
			// Allow to search for longer streaks if typed in quickly
			stamp = new Date().getTime();
			if( stamp - tree.lastQuicksearchTime > 500 ) {
				tree.lastQuicksearchTerm = "";
			}
			tree.lastQuicksearchTime = stamp;
			tree.lastQuicksearchTerm += whichChar;
			// tree.debug("quicksearch find", tree.lastQuicksearchTerm);
			matchNode = tree.findNextNode(tree.lastQuicksearchTerm, tree.getActiveNode());
			if( matchNode ) {
				matchNode.setActive();
			}
			event.preventDefault();
			return;
		}
		switch( FT.eventToString(event) ) {
			case "+":
			case "=": // 187: '+' @ Chrome, Safari
				tree.nodeSetExpanded(ctx, true);
				break;
			case "-":
				tree.nodeSetExpanded(ctx, false);
				break;
			case "space":
				if( node.isPagingNode() ) {
					tree._triggerNodeEvent("clickPaging", ctx, event);
				} else if(opts.checkbox){
					tree.nodeToggleSelected(ctx);
				}else{
					tree.nodeSetActive(ctx, true);
				}
				break;
			case "return":
				tree.nodeSetActive(ctx, true);
				break;
			case "home":
			case "end":
			case "backspace":
			case "left":
			case "right":
			case "up":
			case "down":
				res = node.navigate(event.which, activate, true);
				break;
			default:
				handled = false;
		}
		if(handled){
			event.preventDefault();
		}
	},


	// /** Default handling for mouse keypress events. */
	// nodeKeypress: function(ctx) {
	//     var event = ctx.originalEvent;
	// },

	// /** Trigger lazyLoad event (async). */
	// nodeLazyLoad: function(ctx) {
	//     var node = ctx.node;
	//     if(this._triggerNodeEvent())
	// },
	/** Load child nodes (async).
	 *
	 * @param {EventData} ctx
	 * @param {object[]|object|string|$.Promise|function} source
	 * @returns {$.Promise} The deferred will be resolved as soon as the (ajax)
	 *     data was rendered.
	 */
	nodeLoadChildren: function(ctx, source) {
		var ajax, delay, dfd,
			tree = ctx.tree,
			node = ctx.node,
			requestId = new Date().getTime();

		if($.isFunction(source)){
			source = source.call(tree, {type: "source"}, ctx);
			_assert(!$.isFunction(source), "source callback must not return another function");
		}
		if(source.url){
			if( node._requestId ) {
				node.warn("Recursive load request #" + requestId + " while #" + node._requestId + " is pending.");
			// } else {
			// 	node.debug("Send load request #" + requestId);
			}
			// `source` is an Ajax options object
			ajax = $.extend({}, ctx.options.ajax, source);
			node._requestId = requestId;
			if(ajax.debugDelay){
				// simulate a slow server
				delay = ajax.debugDelay;
				if($.isArray(delay)){ // random delay range [min..max]
					delay = delay[0] + Math.random() * (delay[1] - delay[0]);
				}
				node.warn("nodeLoadChildren waiting debugDelay " + Math.round(delay) + " ms ...");
				ajax.debugDelay = false;
				dfd = $.Deferred(function (dfd) {
					setTimeout(function () {
						$.ajax(ajax)
							.done(function () {	dfd.resolveWith(this, arguments); })
							.fail(function () {	dfd.rejectWith(this, arguments); });
					}, delay);
				});
			}else{
				dfd = $.ajax(ajax);
			}

			// Defer the deferred: we want to be able to reject, even if ajax
			// resolved ok.
			source = new $.Deferred();
			dfd.done(function (data, textStatus, jqXHR) {
				var errorObj, res;

				if((this.dataType === "json" || this.dataType === "jsonp") && typeof data === "string"){
					$.error("Ajax request returned a string (did you get the JSON dataType wrong?).");
				}
				if( node._requestId && node._requestId > requestId ) {
					// The expected request time stamp is later than `requestId`
					// (which was kept as as closure variable to this handler function)
					// node.warn("Ignored load response for obsolete request #" + requestId + " (expected #" + node._requestId + ")");
					source.rejectWith(this, [RECURSIVE_REQUEST_ERROR]);
					return;
				// } else {
				// 	node.debug("Response returned for load request #" + requestId);
				}
				// postProcess is similar to the standard ajax dataFilter hook,
				// but it is also called for JSONP
				if( ctx.options.postProcess ){
					try {
						res = tree._triggerNodeEvent("postProcess", ctx, ctx.originalEvent, {
							response: data, error: null, dataType: this.dataType
						});
					} catch(e) {
						res = { error: e, message: "" + e, details: "postProcess failed"};
					}
					if( res.error ) {
						errorObj = $.isPlainObject(res.error) ? res.error : {message: res.error};
						errorObj = tree._makeHookContext(node, null, errorObj);
						source.rejectWith(this, [errorObj]);
						return;
					}
					data = $.isArray(res) ? res : data;

				} else if (data && data.hasOwnProperty("d") && ctx.options.enableAspx ) {
					// Process ASPX WebMethod JSON object inside "d" property
					data = (typeof data.d === "string") ? $.parseJSON(data.d) : data.d;
				}
				source.resolveWith(this, [data]);
			}).fail(function (jqXHR, textStatus, errorThrown) {
				var errorObj = tree._makeHookContext(node, null, {
					error: jqXHR,
					args: Array.prototype.slice.call(arguments),
					message: errorThrown,
					details: jqXHR.status + ": " + errorThrown
				});
				source.rejectWith(this, [errorObj]);
			});
		}
		// #383: accept and convert ECMAScript 6 Promise
		if( $.isFunction(source.then) && $.isFunction(source["catch"]) ) {
			dfd = source;
			source = new $.Deferred();
			dfd.then(function(value){
				source.resolve(value);
			}, function(reason){
				source.reject(reason);
			});
		}
		if($.isFunction(source.promise)){
			// `source` is a deferred, i.e. ajax request
			// _assert(!node.isLoading(), "recursive load");
			tree.nodeSetStatus(ctx, "loading");

			source.done(function (children) {
				tree.nodeSetStatus(ctx, "ok");
				node._requestId = null;
			}).fail(function(error){
				var ctxErr;

				if ( error === RECURSIVE_REQUEST_ERROR ) {
					node.warn("Ignored response for obsolete load request #" + requestId + " (expected #" + node._requestId + ")");
					return;
				} else if (error.node && error.error && error.message) {
					// error is already a context object
					ctxErr = error;
				} else {
					ctxErr = tree._makeHookContext(node, null, {
						error: error, // it can be jqXHR or any custom error
						args: Array.prototype.slice.call(arguments),
						message: error ? (error.message || error.toString()) : ""
					});
					if( ctxErr.message === "[object Object]" ) {
						ctxErr.message = "";
					}
				}
				node.warn("Load children failed (" + ctxErr.message + ")", ctxErr);
				if( tree._triggerNodeEvent("loadError", ctxErr, null) !== false ) {
					tree.nodeSetStatus(ctx, "error", ctxErr.message, ctxErr.details);
				}
			});
		}
		// $.when(source) resolves also for non-deferreds
		return $.when(source).done(function(children){
			var metaData;

			if( $.isPlainObject(children) ){
				// We got {foo: 'abc', children: [...]}
				// Copy extra properties to tree.data.foo
				_assert(node.isRootNode(), "source may only be an object for root nodes (expecting an array of child objects otherwise)");
				_assert($.isArray(children.children), "if an object is passed as source, it must contain a 'children' array (all other properties are added to 'tree.data')");
				metaData = children;
				children = children.children;
				delete metaData.children;
				$.extend(tree.data, metaData);
			}
			_assert($.isArray(children), "expected array of children");
			node._setChildren(children);
			// trigger fancytreeloadchildren
			tree._triggerNodeEvent("loadChildren", node);
		});
	},
	/** [Not Implemented]  */
	nodeLoadKeyPath: function(ctx, keyPathList) {
		// TODO: implement and improve
		// http://code.google.com/p/dynatree/issues/detail?id=222
	},
	/**
	 * Remove a single direct child of ctx.node.
	 * @param {EventData} ctx
	 * @param {FancytreeNode} childNode dircect child of ctx.node
	 */
	nodeRemoveChild: function(ctx, childNode) {
		var idx,
			node = ctx.node,
			// opts = ctx.options,
			subCtx = $.extend({}, ctx, {node: childNode}),
			children = node.children;

		// FT.debug("nodeRemoveChild()", node.toString(), childNode.toString());

		if( children.length === 1 ) {
			_assert(childNode === children[0], "invalid single child");
			return this.nodeRemoveChildren(ctx);
		}
		if( this.activeNode && (childNode === this.activeNode || this.activeNode.isDescendantOf(childNode))){
			this.activeNode.setActive(false); // TODO: don't fire events
		}
		if( this.focusNode && (childNode === this.focusNode || this.focusNode.isDescendantOf(childNode))){
			this.focusNode = null;
		}
		// TODO: persist must take care to clear select and expand cookies
		this.nodeRemoveMarkup(subCtx);
		this.nodeRemoveChildren(subCtx);
		idx = $.inArray(childNode, children);
		_assert(idx >= 0, "invalid child");
		// Notify listeners
		node.triggerModifyChild("remove", childNode);
		// Unlink to support GC
		childNode.visit(function(n){
			n.parent = null;
		}, true);
		this._callHook("treeRegisterNode", this, false, childNode);
		// remove from child list
		children.splice(idx, 1);
	},
	/**Remove HTML markup for all descendents of ctx.node.
	 * @param {EventData} ctx
	 */
	nodeRemoveChildMarkup: function(ctx) {
		var node = ctx.node;

		// FT.debug("nodeRemoveChildMarkup()", node.toString());
		// TODO: Unlink attr.ftnode to support GC
		if(node.ul){
			if( node.isRootNode() ) {
				$(node.ul).empty();
			} else {
				$(node.ul).remove();
				node.ul = null;
			}
			node.visit(function(n){
				n.li = n.ul = null;
			});
		}
	},
	/**Remove all descendants of ctx.node.
	* @param {EventData} ctx
	*/
	nodeRemoveChildren: function(ctx) {
		var subCtx,
			tree = ctx.tree,
			node = ctx.node,
			children = node.children;
			// opts = ctx.options;

		// FT.debug("nodeRemoveChildren()", node.toString());
		if(!children){
			return;
		}
		if( this.activeNode && this.activeNode.isDescendantOf(node)){
			this.activeNode.setActive(false); // TODO: don't fire events
		}
		if( this.focusNode && this.focusNode.isDescendantOf(node)){
			this.focusNode = null;
		}
		// TODO: persist must take care to clear select and expand cookies
		this.nodeRemoveChildMarkup(ctx);
		// Unlink children to support GC
		// TODO: also delete this.children (not possible using visit())
		subCtx = $.extend({}, ctx);
		node.triggerModifyChild("remove", null);
		node.visit(function(n){
			n.parent = null;
			tree._callHook("treeRegisterNode", tree, false, n);
		});
		if( node.lazy ){
			// 'undefined' would be interpreted as 'not yet loaded' for lazy nodes
			node.children = [];
		} else{
			node.children = null;
		}
		if( !node.isRootNode() ) {
			node.expanded = false;  // #449, #459
		}
		this.nodeRenderStatus(ctx);
	},
	/**Remove HTML markup for ctx.node and all its descendents.
	 * @param {EventData} ctx
	 */
	nodeRemoveMarkup: function(ctx) {
		var node = ctx.node;
		// FT.debug("nodeRemoveMarkup()", node.toString());
		// TODO: Unlink attr.ftnode to support GC
		if(node.li){
			$(node.li).remove();
			node.li = null;
		}
		this.nodeRemoveChildMarkup(ctx);
	},
	/**
	 * Create `&lt;li>&lt;span>..&lt;/span> .. &lt;/li>` tags for this node.
	 *
	 * This method takes care that all HTML markup is created that is required
	 * to display this node in its current state.
	 *
	 * Call this method to create new nodes, or after the strucuture
	 * was changed (e.g. after moving this node or adding/removing children)
	 * nodeRenderTitle() and nodeRenderStatus() are implied.
	 *
	 * Note: if a node was created/removed, nodeRender() must be called for the
	 *       parent.
	 * &lt;code>
	 * &lt;li id='KEY' ftnode=NODE>
	 *     &lt;span class='fancytree-node fancytree-expanded fancytree-has-children fancytree-lastsib fancytree-exp-el fancytree-ico-e'>
	 *         &lt;span class="fancytree-expander">&lt;/span>
	 *         &lt;span class="fancytree-checkbox">&lt;/span> // only present in checkbox mode
	 *         &lt;span class="fancytree-icon">&lt;/span>
	 *         &lt;a href="#" class="fancytree-title"> Node 1 &lt;/a>
	 *     &lt;/span>
	 *     &lt;ul> // only present if node has children
	 *         &lt;li id='KEY' ftnode=NODE> child1 ... &lt;/li>
	 *         &lt;li id='KEY' ftnode=NODE> child2 ... &lt;/li>
	 *     &lt;/ul>
	 * &lt;/li>
	 * &lt;/code>
	 *
	 * @param {EventData} ctx
	 * @param {boolean} [force=false] re-render, even if html markup was already created
	 * @param {boolean} [deep=false] also render all descendants, even if parent is collapsed
	 * @param {boolean} [collapsed=false] force root node to be collapsed, so we can apply animated expand later
	 */
	nodeRender: function(ctx, force, deep, collapsed, _recursive) {
		/* This method must take care of all cases where the current data mode
		 * (i.e. node hierarchy) does not match the current markup.
		 *
		 * - node was not yet rendered:
		 *   create markup
		 * - node was rendered: exit fast
		 * - children have been added
		 * - children have been removed
		 */
		var childLI, childNode1, childNode2, i, l, next, subCtx,
			node = ctx.node,
			tree = ctx.tree,
			opts = ctx.options,
			aria = opts.aria,
			firstTime = false,
			parent = node.parent,
			isRootNode = !parent,
			children = node.children,
			successorLi = null;
		// FT.debug("nodeRender(" + !!force + ", " + !!deep + ")", node.toString());

		if( tree._enableUpdate === false ) {
			// tree.debug("no render", tree._enableUpdate);
			return;
		}
		if( ! isRootNode && ! parent.ul ) {
			// Calling node.collapse on a deep, unrendered node
			return;
		}
		_assert(isRootNode || parent.ul, "parent UL must exist");

		// Render the node
		if( !isRootNode ){
			// Discard markup on force-mode, or if it is not linked to parent <ul>
			if(node.li && (force || (node.li.parentNode !== node.parent.ul) ) ){
				if( node.li.parentNode === node.parent.ul ){
					// #486: store following node, so we can insert the new markup there later
					successorLi = node.li.nextSibling;
				}else{
					// May happen, when a top-level node was dropped over another
					this.debug("Unlinking " + node + " (must be child of " + node.parent + ")");
				}
//	            this.debug("nodeRemoveMarkup...");
				this.nodeRemoveMarkup(ctx);
			}
			// Create <li><span /> </li>
//			node.debug("render...");
			if( !node.li ) {
//	            node.debug("render... really");
				firstTime = true;
				node.li = document.createElement("li");
				node.li.ftnode = node;

				// We set role 'treeitem' to the title span instead
				if(aria){
					// TODO: why does the next line don't work:
					// node.li.role = "treeitem";
					// $(node.li).attr("role", "treeitem");
					// .attr("aria-labelledby", "ftal_" + opts.idPrefix + node.key);
				}
				if( node.key && opts.generateIds ){
					node.li.id = opts.idPrefix + node.key;
				}
				node.span = document.createElement("span");
				node.span.className = "fancytree-node";
				if(aria){
					$(node.li).attr("aria-labelledby", "ftal_" + opts.idPrefix + node.key);
					// $(node.span).attr("aria-labelledby", "ftal_" + opts.idPrefix + node.key);
				}
				node.li.appendChild(node.span);

				// Create inner HTML for the <span> (expander, checkbox, icon, and title)
				this.nodeRenderTitle(ctx);

				// Allow tweaking and binding, after node was created for the first time
				if ( opts.createNode ){
					opts.createNode.call(tree, {type: "createNode"}, ctx);
				}
			}else{
//				this.nodeRenderTitle(ctx);
				this.nodeRenderStatus(ctx);
			}
			// Allow tweaking after node state was rendered
			if ( opts.renderNode ){
				opts.renderNode.call(tree, {type: "renderNode"}, ctx);
			}
		}

		// Visit child nodes
		if( children ){
			if( isRootNode || node.expanded || deep === true ) {
				// Create a UL to hold the children
				if( !node.ul ){
					node.ul = document.createElement("ul");
					if((collapsed === true && !_recursive) || !node.expanded){
						// hide top UL, so we can use an animation to show it later
						node.ul.style.display = "none";
					}
					if(aria){
						$(node.ul).attr("role", "group");
					}
					if ( node.li ) { // issue #67
						node.li.appendChild(node.ul);
					} else {
						node.tree.$div.append(node.ul);
					}
				}
				// Add child markup
				for(i=0, l=children.length; i<l; i++) {
					subCtx = $.extend({}, ctx, {node: children[i]});
					this.nodeRender(subCtx, force, deep, false, true);
				}
				// Remove <li> if nodes have moved to another parent
				childLI = node.ul.firstChild;
				while( childLI ){
					childNode2 = childLI.ftnode;
					if( childNode2 && childNode2.parent !== node ) {
						node.debug("_fixParent: remove missing " + childNode2, childLI);
						next = childLI.nextSibling;
						childLI.parentNode.removeChild(childLI);
						childLI = next;
					}else{
						childLI = childLI.nextSibling;
					}
				}
				// Make sure, that <li> order matches node.children order.
				childLI = node.ul.firstChild;
				for(i=0, l=children.length-1; i<l; i++) {
					childNode1 = children[i];
					childNode2 = childLI.ftnode;
					if( childNode1 !== childNode2 ) {
						// node.debug("_fixOrder: mismatch at index " + i + ": " + childNode1 + " != " + childNode2);
						node.ul.insertBefore(childNode1.li, childNode2.li);
					} else {
						childLI = childLI.nextSibling;
					}
				}
			}
		}else{
			// No children: remove markup if any
			if( node.ul ){
//				alert("remove child markup for " + node);
				this.warn("remove child markup for " + node);
				this.nodeRemoveChildMarkup(ctx);
			}
		}
		if( !isRootNode ){
			// Update element classes according to node state
			// this.nodeRenderStatus(ctx);
			// Finally add the whole structure to the DOM, so the browser can render
			if( firstTime ){
				// #486: successorLi is set, if we re-rendered (i.e. discarded)
				// existing markup, which  we want to insert at the same position.
				// (null is equivalent to append)
//				parent.ul.appendChild(node.li);
				parent.ul.insertBefore(node.li, successorLi);
			}
		}
	},
	/** Create HTML inside the node's outer &lt;span> (i.e. expander, checkbox,
	 * icon, and title).
	 *
	 * nodeRenderStatus() is implied.
	 * @param {EventData} ctx
	 * @param {string} [title] optinal new title
	 */
	nodeRenderTitle: function(ctx, title) {
		// set node connector images, links and text
		var id, icon, nodeTitle, role, tabindex, tooltip,
			node = ctx.node,
			tree = ctx.tree,
			opts = ctx.options,
			aria = opts.aria,
			level = node.getLevel(),
			ares = [];

		if(title !== undefined){
			node.title = title;
		}
		if ( !node.span || tree._enableUpdate === false ) {
			// Silently bail out if node was not rendered yet, assuming
			// node.render() will be called as the node becomes visible
			return;
		}
		// Connector (expanded, expandable or simple)
		if( level < opts.minExpandLevel ) {
			if( !node.lazy ) {
				node.expanded = true;
			}
			if(level > 1){
				if(aria){
					ares.push("<span role='button' class='fancytree-expander fancytree-expander-fixed'></span>");
				}else{
					ares.push("<span class='fancytree-expander fancytree-expander-fixed''></span>");
				}
			}
			// .. else (i.e. for root level) skip expander/connector alltogether
		} else {
			if(aria){
				ares.push("<span role='button' class='fancytree-expander'></span>");
			}else{
				ares.push("<span class='fancytree-expander'></span>");
			}
		}
		// Checkbox mode
		if( opts.checkbox && node.hideCheckbox !== true && !node.isStatusNode() ) {
			if(aria){
				ares.push("<span role='checkbox' class='fancytree-checkbox'></span>");
			}else{
				ares.push("<span class='fancytree-checkbox'></span>");
			}
		}
		// Folder or doctype icon
		if( node.data.iconClass !== undefined ) {  // 2015-11-16
			// Handle / warn about backward compatibility
			if( node.icon ) {
				$.error("'iconClass' node option is deprecated since v2.14.0: use 'icon' only instead");
			} else {
				node.warn("'iconClass' node option is deprecated since v2.14.0: use 'icon' instead");
				node.icon = node.data.iconClass;
			}
		}
		// If opts.icon is a callback and returns something other than undefined, use that
		// else if node.icon is a boolean or string, use that
		// else if opts.icon is a boolean or string, use that
		// else show standard icon (which may be different for folders or documents)
		if( $.isFunction(opts.icon) ) {
			icon = opts.icon.call(tree, {type: "icon"}, ctx);
			if( icon == null ) {
				icon = node.icon;
			}
		} else {
			icon = (node.icon != null) ? node.icon : opts.icon;
		}
		if( icon == null ) {
			icon = true;  // no icon option at all: show default icon
		} else {
			if( typeof icon !== "boolean" ) {
				// icon is defined, but not true/false: must be a string
				icon = "" + icon;
			}
		}
		if( icon !== false ) {
			role = aria ? " role='img'" : "";
			if ( typeof icon === "string" ) {
				if( TEST_IMG.test(icon) ) {
					// node.icon is an image url. Prepend imagePath
					icon = (icon.charAt(0) === "/") ? icon : ((opts.imagePath || "") + icon);
					ares.push("<img src='" + icon + "' class='fancytree-icon' alt='' />");
				} else {
					ares.push("<span " + role + " class='fancytree-custom-icon " + icon +  "'></span>");
				}
			} else {
				// standard icon: theme css will take care of this
				ares.push("<span " + role + " class='fancytree-icon'></span>");
			}
		}
		// Node title
		nodeTitle = "";
		if ( opts.renderTitle ){
			nodeTitle = opts.renderTitle.call(tree, {type: "renderTitle"}, ctx) || "";
		}
		if ( !nodeTitle ) {
			if( node.tooltip ) {
				tooltip = node.tooltip;
			} else if ( opts.tooltip ) {
				tooltip = opts.tooltip === true ? node.title : opts.tooltip.call(tree, node);
			}
			tooltip = tooltip ? " title='" + _escapeTooltip(tooltip) + "'" : "";
			id = aria ? " id='ftal_" + opts.idPrefix + node.key + "'" : "";
			// role = "";
			role = aria ? " role='treeitem'" : "";
			tabindex = opts.titlesTabbable ? " tabindex='0'" : "";

			nodeTitle = "<span " + role + " class='fancytree-title'" +
				id + tooltip + tabindex + ">" +
				(opts.escapeTitles ? _escapeHtml(node.title) : node.title) +
				"</span>";
		}
		ares.push(nodeTitle);
		// Note: this will trigger focusout, if node had the focus
		//$(node.span).html(ares.join("")); // it will cleanup the jQuery data currently associated with SPAN (if any), but it executes more slowly
		node.span.innerHTML = ares.join("");
		// Update CSS classes
		this.nodeRenderStatus(ctx);
		if ( opts.enhanceTitle ){
			ctx.$title = $(">span.fancytree-title", node.span);
			nodeTitle = opts.enhanceTitle.call(tree, {type: "enhanceTitle"}, ctx) || "";
		}
	},
	/** Update element classes according to node state.
	 * @param {EventData} ctx
	 */
	nodeRenderStatus: function(ctx) {
		// Set classes for current status
		var node = ctx.node,
			tree = ctx.tree,
			opts = ctx.options,
//			nodeContainer = node[tree.nodeContainerAttrName],
			hasChildren = node.hasChildren(),
			isLastSib = node.isLastSibling(),
			aria = opts.aria,
			// $ariaElem = aria ? $(node[tree.ariaPropName]) : null,
			$ariaElem = $(node.span).find(".fancytree-title"),
			cn = opts._classNames,
			cnList = [],
			statusElem = node[tree.statusClassPropName];

		if( !statusElem || tree._enableUpdate === false ){
			// if this function is called for an unrendered node, ignore it (will be updated on nect render anyway)
			return;
		}
		// Build a list of class names that we will add to the node <span>
		cnList.push(cn.node);
		if( tree.activeNode === node ){
			cnList.push(cn.active);
//			$(">span.fancytree-title", statusElem).attr("tabindex", "0");
//			tree.$container.removeAttr("tabindex");
		// }else{
//			$(">span.fancytree-title", statusElem).removeAttr("tabindex");
//			tree.$container.attr("tabindex", "0");
		}
		if( tree.focusNode === node ){
			cnList.push(cn.focused);
			// if(aria){
			// 	$ariaElem.attr("aria-activedescendant", true);
			// }
		}else if(aria){
			// $ariaElem.removeAttr("aria-activedescendant");
		}
		if( node.expanded ){
			cnList.push(cn.expanded);
			if(aria){
				$ariaElem.attr("aria-expanded", true);
			}
		}else if( aria ){
			if( hasChildren ) {
				$ariaElem.attr("aria-expanded", false);
			} else {
				$ariaElem.removeAttr("aria-expanded");
			}
		}
		if( node.folder ){
			cnList.push(cn.folder);
		}
		if( hasChildren !== false ){
			cnList.push(cn.hasChildren);
		}
		// TODO: required?
		if( isLastSib ){
			cnList.push(cn.lastsib);
		}
		if( node.lazy && node.children == null ){
			cnList.push(cn.lazy);
		}
		if( node.partload ){
			cnList.push(cn.partload);
		}
		if( node.partsel ){
			cnList.push(cn.partsel);
		}
		if( node.unselectable ){
			cnList.push(cn.unselectable);
		}
		if( node._isLoading ){
			cnList.push(cn.loading);
		}
		if( node._error ){
			cnList.push(cn.error);
		}
		if( node.statusNodeType ) {
			cnList.push(cn.statusNodePrefix + node.statusNodeType);
		}
		if( node.selected ){
			cnList.push(cn.selected);
			if(aria){
				$ariaElem.attr("aria-selected", true);
			}
		}else if(aria){
			$ariaElem.attr("aria-selected", false);
		}
		if( node.extraClasses ){
			cnList.push(node.extraClasses);
		}
		// IE6 doesn't correctly evaluate multiple class names,
		// so we create combined class names that can be used in the CSS
		if( hasChildren === false ){
			cnList.push(cn.combinedExpanderPrefix + "n" +
					(isLastSib ? "l" : "")
					);
		}else{
			cnList.push(cn.combinedExpanderPrefix +
					(node.expanded ? "e" : "c") +
					(node.lazy && node.children == null ? "d" : "") +
					(isLastSib ? "l" : "")
					);
		}
		cnList.push(cn.combinedIconPrefix +
				(node.expanded ? "e" : "c") +
				(node.folder ? "f" : "")
				);
//        node.span.className = cnList.join(" ");
		statusElem.className = cnList.join(" ");

		// TODO: we should not set this in the <span> tag also, if we set it here:
		// Maybe most (all) of the classes should be set in LI instead of SPAN?
		if(node.li){
			node.li.className = isLastSib ? cn.lastsib : "";
		}
	},
	/** Activate node.
	 * flag defaults to true.
	 * If flag is true, the node is activated (must be a synchronous operation)
	 * If flag is false, the node is deactivated (must be a synchronous operation)
	 * @param {EventData} ctx
	 * @param {boolean} [flag=true]
	 * @param {object} [opts] additional options. Defaults to {noEvents: false, noFocus: false}
	 * @returns {$.Promise}
	 */
	nodeSetActive: function(ctx, flag, callOpts) {
		// Handle user click / [space] / [enter], according to clickFolderMode.
		callOpts = callOpts || {};
		var subCtx,
			node = ctx.node,
			tree = ctx.tree,
			opts = ctx.options,
			noEvents = (callOpts.noEvents === true),
			noFocus = (callOpts.noFocus === true),
			isActive = (node === tree.activeNode);

		// flag defaults to true
		flag = (flag !== false);
		// node.debug("nodeSetActive", flag);

		if(isActive === flag){
			// Nothing to do
			return _getResolvedPromise(node);
		}else if(flag && !noEvents && this._triggerNodeEvent("beforeActivate", node, ctx.originalEvent) === false ){
			// Callback returned false
			return _getRejectedPromise(node, ["rejected"]);
		}
		if(flag){
			if(tree.activeNode){
				_assert(tree.activeNode !== node, "node was active (inconsistency)");
				subCtx = $.extend({}, ctx, {node: tree.activeNode});
				tree.nodeSetActive(subCtx, false);
				_assert(tree.activeNode === null, "deactivate was out of sync?");
			}
			if(opts.activeVisible){
				// If no focus is set (noFocus: true) and there is no focused node, this node is made visible.
				node.makeVisible({scrollIntoView: noFocus && tree.focusNode == null});
			}
			tree.activeNode = node;
			tree.nodeRenderStatus(ctx);
			if( !noFocus ) {
				tree.nodeSetFocus(ctx);
			}
			if( !noEvents ) {
				tree._triggerNodeEvent("activate", node, ctx.originalEvent);
			}
		}else{
			_assert(tree.activeNode === node, "node was not active (inconsistency)");
			tree.activeNode = null;
			this.nodeRenderStatus(ctx);
			if( !noEvents ) {
				ctx.tree._triggerNodeEvent("deactivate", node, ctx.originalEvent);
			}
		}
		return _getResolvedPromise(node);
	},
	/** Expand or collapse node, return Deferred.promise.
	 *
	 * @param {EventData} ctx
	 * @param {boolean} [flag=true]
	 * @param {object} [opts] additional options. Defaults to {noAnimation: false, noEvents: false}
	 * @returns {$.Promise} The deferred will be resolved as soon as the (lazy)
	 *     data was retrieved, rendered, and the expand animation finshed.
	 */
	nodeSetExpanded: function(ctx, flag, callOpts) {
		callOpts = callOpts || {};
		var _afterLoad, dfd, i, l, parents, prevAC,
			node = ctx.node,
			tree = ctx.tree,
			opts = ctx.options,
			noAnimation = (callOpts.noAnimation === true),
			noEvents = (callOpts.noEvents === true);

		// flag defaults to true
		flag = (flag !== false);

		// node.debug("nodeSetExpanded(" + flag + ")");

		if((node.expanded && flag) || (!node.expanded && !flag)){
			// Nothing to do
			// node.debug("nodeSetExpanded(" + flag + "): nothing to do");
			return _getResolvedPromise(node);
		}else if(flag && !node.lazy && !node.hasChildren() ){
			// Prevent expanding of empty nodes
			// return _getRejectedPromise(node, ["empty"]);
			return _getResolvedPromise(node);
		}else if( !flag && node.getLevel() < opts.minExpandLevel ) {
			// Prevent collapsing locked levels
			return _getRejectedPromise(node, ["locked"]);
		}else if ( !noEvents && this._triggerNodeEvent("beforeExpand", node, ctx.originalEvent) === false ){
			// Callback returned false
			return _getRejectedPromise(node, ["rejected"]);
		}
		// If this node inside a collpased node, no animation and scrolling is needed
		if( !noAnimation && !node.isVisible() ) {
			noAnimation = callOpts.noAnimation = true;
		}

		dfd = new $.Deferred();

		// Auto-collapse mode: collapse all siblings
		if( flag && !node.expanded && opts.autoCollapse ) {
			parents = node.getParentList(false, true);
			prevAC = opts.autoCollapse;
			try{
				opts.autoCollapse = false;
				for(i=0, l=parents.length; i<l; i++){
					// TODO: should return promise?
					this._callHook("nodeCollapseSiblings", parents[i], callOpts);
				}
			}finally{
				opts.autoCollapse = prevAC;
			}
		}
		// Trigger expand/collapse after expanding
		dfd.done(function(){
			var	lastChild = node.getLastChild();
			if( flag && opts.autoScroll && !noAnimation && lastChild ) {
				// Scroll down to last child, but keep current node visible
				lastChild.scrollIntoView(true, {topNode: node}).always(function(){
					if( !noEvents ) {
						ctx.tree._triggerNodeEvent(flag ? "expand" : "collapse", ctx);
					}
				});
			} else {
				if( !noEvents ) {
					ctx.tree._triggerNodeEvent(flag ? "expand" : "collapse", ctx);
				}
			}
		});
		// vvv Code below is executed after loading finished:
		_afterLoad = function(callback){
			var isVisible, isExpanded,
				effect = opts.toggleEffect;

			node.expanded = flag;
			// Create required markup, but make sure the top UL is hidden, so we
			// can animate later
			tree._callHook("nodeRender", ctx, false, false, true);

			// If the currently active node is now hidden, deactivate it
			// if( opts.activeVisible && this.activeNode && ! this.activeNode.isVisible() ) {
			//     this.activeNode.deactivate();
			// }

			// Expanding a lazy node: set 'loading...' and call callback
			// if( bExpand && this.data.isLazy && this.childList === null && !this._isLoading ) {
			//     this._loadContent();
			//     return;
			// }
			// Hide children, if node is collapsed
			if( node.ul ) {
				isVisible = (node.ul.style.display !== "none");
				isExpanded = !!node.expanded;
				if ( isVisible === isExpanded ) {
					node.warn("nodeSetExpanded: UL.style.display already set");

				} else if ( !effect || noAnimation ) {
					node.ul.style.display = ( node.expanded || !parent ) ? "" : "none";

				} else {
					// The UI toggle() effect works with the ext-wide extension,
					// while jQuery.animate() has problems when the title span
					// has positon: absolute

					// duration = opts.fx.duration || 200;
					// easing = opts.fx.easing;
					// $(node.ul).animate(opts.fx, duration, easing, function(){

					// node.debug("nodeSetExpanded: animate start...");
					$(node.ul).toggle(effect.effect, effect.options, effect.duration, function(){
						// node.debug("nodeSetExpanded: animate done");
						callback();
					});
					return;
				}
			}
			callback();
		};
		// ^^^ Code above is executed after loading finshed.

		// Load lazy nodes, if any. Then continue with _afterLoad()
		if(flag && node.lazy && node.hasChildren() === undefined){
			// node.debug("nodeSetExpanded: load start...");
			node.load().done(function(){
				// node.debug("nodeSetExpanded: load done");
				if(dfd.notifyWith){ // requires jQuery 1.6+
					dfd.notifyWith(node, ["loaded"]);
				}
				_afterLoad(function () { dfd.resolveWith(node); });
			}).fail(function(errMsg){
				_afterLoad(function () { dfd.rejectWith(node, ["load failed (" + errMsg + ")"]); });
			});
/*
			var source = tree._triggerNodeEvent("lazyLoad", node, ctx.originalEvent);
			_assert(typeof source !== "boolean", "lazyLoad event must return source in data.result");
			node.debug("nodeSetExpanded: load start...");
			this._callHook("nodeLoadChildren", ctx, source).done(function(){
				node.debug("nodeSetExpanded: load done");
				if(dfd.notifyWith){ // requires jQuery 1.6+
					dfd.notifyWith(node, ["loaded"]);
				}
				_afterLoad.call(tree);
			}).fail(function(errMsg){
				dfd.rejectWith(node, ["load failed (" + errMsg + ")"]);
			});
*/
		}else{
			_afterLoad(function () { dfd.resolveWith(node); });
		}
		// node.debug("nodeSetExpanded: returns");
		return dfd.promise();
	},
	/** Focus or blur this node.
	 * @param {EventData} ctx
	 * @param {boolean} [flag=true]
	 */
	nodeSetFocus: function(ctx, flag) {
		// ctx.node.debug("nodeSetFocus(" + flag + ")");
		var ctx2,
			tree = ctx.tree,
			node = ctx.node,
			opts = tree.options,
			// et = ctx.originalEvent && ctx.originalEvent.type,
			isInput = ctx.originalEvent ? $(ctx.originalEvent.target).is(":input") : false;

		flag = (flag !== false);

		// (node || tree).debug("nodeSetFocus(" + flag + "), event: " + et + ", isInput: "+ isInput);
		// Blur previous node if any
		if(tree.focusNode){
			if(tree.focusNode === node && flag){
				// node.debug("nodeSetFocus(" + flag + "): nothing to do");
				return;
			}
			ctx2 = $.extend({}, ctx, {node: tree.focusNode});
			tree.focusNode = null;
			this._triggerNodeEvent("blur", ctx2);
			this._callHook("nodeRenderStatus", ctx2);
		}
		// Set focus to container and node
		if(flag){
			if( !this.hasFocus() ){
				node.debug("nodeSetFocus: forcing container focus");
				this._callHook("treeSetFocus", ctx, true, {calledByNode: true});
			}
			node.makeVisible({scrollIntoView: false});
			tree.focusNode = node;
			if( opts.titlesTabbable ) {
				if( !isInput ) { // #621
					$(node.span).find(".fancytree-title").focus();
				}
			} else {
				// We cannot set KB focus to a node, so use the tree container
				// #563, #570: IE scrolls on every call to .focus(), if the container
				// is partially outside the viewport. So do it only, when absolutely
				// neccessary:
				if( $(document.activeElement).closest(".fancytree-container").length === 0 ) {
					$(tree.$container).focus();
				}
			}
			if( opts.aria ){
				$(tree.$container).attr("aria-activedescendant",
					"ftal_" + opts.idPrefix + node.key);
			}
//			$(node.span).find(".fancytree-title").focus();
			this._triggerNodeEvent("focus", ctx);
//          if( opts.autoActivate ){
//              tree.nodeSetActive(ctx, true);
//          }
			if( opts.autoScroll ){
				node.scrollIntoView();
			}
			this._callHook("nodeRenderStatus", ctx);
		}
	},
	/** (De)Select node, return new status (sync).
	 *
	 * @param {EventData} ctx
	 * @param {boolean} [flag=true]
	 */
	nodeSetSelected: function(ctx, flag) {
		var node = ctx.node,
			tree = ctx.tree,
			opts = ctx.options;
		// flag defaults to true
		flag = (flag !== false);

		// node.debug("nodeSetSelected(" + flag + ")", ctx);
		if( node.unselectable){
			return;
		}
		// TODO: !!node.expanded is nicer, but doesn't pass jshint
		// https://github.com/jshint/jshint/issues/455
//        if( !!node.expanded === !!flag){
		if((node.selected && flag) || (!node.selected && !flag)){
			return !!node.selected;
		}else if ( this._triggerNodeEvent("beforeSelect", node, ctx.originalEvent) === false ){
			return !!node.selected;
		}
		if(flag && opts.selectMode === 1){
			// single selection mode
			if(tree.lastSelectedNode){
				tree.lastSelectedNode.setSelected(false);
			}
		}else if(opts.selectMode === 3){
			// multi.hier selection mode
			node.selected = flag;
//			this._fixSelectionState(node);
			node.fixSelection3AfterClick();
		}
		node.selected = flag;
		this.nodeRenderStatus(ctx);
		tree.lastSelectedNode = flag ? node : null;
		tree._triggerNodeEvent("select", ctx);
	},
	/** Show node status (ok, loading, error, nodata) using styles and a dummy child node.
	 *
	 * @param {EventData} ctx
	 * @param status
	 * @param message
	 * @param details
	 * @since 2.3
	 */
	nodeSetStatus: function(ctx, status, message, details) {
		var node = ctx.node,
			tree = ctx.tree;

		function _clearStatusNode() {
			// Remove dedicated dummy node, if any
			var firstChild = ( node.children ? node.children[0] : null );
			if ( firstChild && firstChild.isStatusNode() ) {
				try{
					// I've seen exceptions here with loadKeyPath...
					if(node.ul){
						node.ul.removeChild(firstChild.li);
						firstChild.li = null; // avoid leaks (DT issue 215)
					}
				}catch(e){}
				if( node.children.length === 1 ){
					node.children = [];
				}else{
					node.children.shift();
				}
			}
		}
		function _setStatusNode(data, type) {
			// Create/modify the dedicated dummy node for 'loading...' or
			// 'error!' status. (only called for direct child of the invisible
			// system root)
			var firstChild = ( node.children ? node.children[0] : null );
			if ( firstChild && firstChild.isStatusNode() ) {
				$.extend(firstChild, data);
				firstChild.statusNodeType = type;
				tree._callHook("nodeRenderTitle", firstChild);
			} else {
				node._setChildren([data]);
				node.children[0].statusNodeType = type;
				tree.render();
			}
			return node.children[0];
		}

		switch( status ){
		case "ok":
			_clearStatusNode();
			node._isLoading = false;
			node._error = null;
			node.renderStatus();
			break;
		case "loading":
			if( !node.parent ) {
				_setStatusNode({
					title: tree.options.strings.loading + (message ? " (" + message + ")" : ""),
					// icon: true,  // needed for 'loding' icon
					checkbox: false,
					tooltip: details
				}, status);
			}
			node._isLoading = true;
			node._error = null;
			node.renderStatus();
			break;
		case "error":
			_setStatusNode({
				title: tree.options.strings.loadError + (message ? " (" + message + ")" : ""),
				// icon: false,
				checkbox: false,
				tooltip: details
			}, status);
			node._isLoading = false;
			node._error = { message: message, details: details };
			node.renderStatus();
			break;
		case "nodata":
			_setStatusNode({
				title: tree.options.strings.noData,
				// icon: false,
				checkbox: false,
				tooltip: details
			}, status);
			node._isLoading = false;
			node._error = null;
			node.renderStatus();
			break;
		default:
			$.error("invalid node status " + status);
		}
	},
	/**
	 *
	 * @param {EventData} ctx
	 */
	nodeToggleExpanded: function(ctx) {
		return this.nodeSetExpanded(ctx, !ctx.node.expanded);
	},
	/**
	 * @param {EventData} ctx
	 */
	nodeToggleSelected: function(ctx) {
		return this.nodeSetSelected(ctx, !ctx.node.selected);
	},
	/** Remove all nodes.
	 * @param {EventData} ctx
	 */
	treeClear: function(ctx) {
		var tree = ctx.tree;
		tree.activeNode = null;
		tree.focusNode = null;
		tree.$div.find(">ul.fancytree-container").empty();
		// TODO: call destructors and remove reference loops
		tree.rootNode.children = null;
	},
	/** Widget was created (called only once, even it re-initialized).
	 * @param {EventData} ctx
	 */
	treeCreate: function(ctx) {
	},
	/** Widget was destroyed.
	 * @param {EventData} ctx
	 */
	treeDestroy: function(ctx) {
		this.$div.find(">ul.fancytree-container").remove();
		this.$source && this.$source.removeClass("ui-helper-hidden");
	},
	/** Widget was (re-)initialized.
	 * @param {EventData} ctx
	 */
	treeInit: function(ctx) {
		//this.debug("Fancytree.treeInit()");
		this.treeLoad(ctx);
	},
	/** Parse Fancytree from source, as configured in the options.
	 * @param {EventData} ctx
	 * @param {object} [source] optional new source (use last data otherwise)
	 */
	treeLoad: function(ctx, source) {
		var type, $ul,
			tree = ctx.tree,
			$container = ctx.widget.element,
			dfd,
			// calling context for root node
			rootCtx = $.extend({}, ctx, {node: this.rootNode});

		if(tree.rootNode.children){
			this.treeClear(ctx);
		}
		source = source || this.options.source;

		if(!source){
			type = $container.data("type") || "html";
			switch(type){
			case "html":
				$ul = $container.find(">ul:first");
				$ul.addClass("ui-fancytree-source ui-helper-hidden");
				source = $.ui.fancytree.parseHtml($ul);
				// allow to init tree.data.foo from <ul data-foo=''>
				this.data = $.extend(this.data, _getElementDataAsDict($ul));
				break;
			case "json":
	//            $().addClass("ui-helper-hidden");
				source = $.parseJSON($container.text());
				if(source.children){
					if(source.title){tree.title = source.title;}
					source = source.children;
				}
				break;
			default:
				$.error("Invalid data-type: " + type);
			}
		}else if(typeof source === "string"){
			// TODO: source is an element ID
			$.error("Not implemented");
		}

		// Trigger fancytreeinit after nodes have been loaded
		dfd = this.nodeLoadChildren(rootCtx, source).done(function(){
			tree.render();
			if( ctx.options.selectMode === 3 ){
				tree.rootNode.fixSelection3FromEndNodes();
			}
			if( tree.activeNode && tree.options.activeVisible ) {
				tree.activeNode.makeVisible();
			}
			tree._triggerTreeEvent("init", null, { status: true });
		}).fail(function(){
			tree.render();
			tree._triggerTreeEvent("init", null, { status: false });
		});
		return dfd;
	},
	/** Node was inserted into or removed from the tree.
	 * @param {EventData} ctx
	 * @param {boolean} add
	 * @param {FancytreeNode} node
	 */
	treeRegisterNode: function(ctx, add, node) {
	},
	/** Widget got focus.
	 * @param {EventData} ctx
	 * @param {boolean} [flag=true]
	 */
	treeSetFocus: function(ctx, flag, callOpts) {
		flag = (flag !== false);

		// this.debug("treeSetFocus(" + flag + "), callOpts: ", callOpts, this.hasFocus());
		// this.debug("    focusNode: " + this.focusNode);
		// this.debug("    activeNode: " + this.activeNode);
		if( flag !== this.hasFocus() ){
			this._hasFocus = flag;
			if( !flag && this.focusNode ) {
				// Node also looses focus if widget blurs
				this.focusNode.setFocus(false);
			} else if ( flag && (!callOpts || !callOpts.calledByNode) ) {
				$(this.$container).focus();
			}
			this.$container.toggleClass("fancytree-treefocus", flag);
			this._triggerTreeEvent(flag ? "focusTree" : "blurTree");
			if( flag && !this.activeNode ) {
				this.getFirstChild() && this.getFirstChild().setFocus();
			}
		}
	}
});


/* ******************************************************************************
 * jQuery UI widget boilerplate
 */

/**
 * The plugin (derrived from <a href=" http://api.jqueryui.com/jQuery.widget/">jQuery.Widget</a>).<br>
 * This constructor is not called directly. Use `$(selector).fancytree({})`
 * to initialize the plugin instead.<br>
 * <pre class="sh_javascript sunlight-highlight-javascript">// Access widget methods and members:
 * var tree = $("#tree").fancytree("getTree");
 * var node = $("#tree").fancytree("getActiveNode", "1234");
 * </pre>
 *
 * @mixin Fancytree_Widget
 */

$.widget("ui.fancytree",
	/** @lends Fancytree_Widget# */
	{
	/**These options will be used as defaults
	 * @type {FancytreeOptions}
	 */
	options:
	{
		activeVisible: true,
		ajax: {
			type: "GET",
			cache: false, // false: Append random '_' argument to the request url to prevent caching.
//          timeout: 0, // >0: Make sure we get an ajax error if server is unreachable
			dataType: "json" // Expect json format and pass json object to callbacks.
		},  //
		aria: false, // TODO: default to true
		autoActivate: true,
		autoCollapse: false,
//      autoFocus: false,
		autoScroll: false,
		checkbox: false,
		/**defines click behavior*/
		clickFolderMode: 4,
		debugLevel: null, // 0..2 (null: use global setting $.ui.fancytree.debugInfo)
		disabled: false, // TODO: required anymore?
		enableAspx: true, // TODO: document
		escapeTitles: false,
		extensions: [],
		// fx: { height: "toggle", duration: 200 },
		// toggleEffect: { effect: "drop", options: {direction: "left"}, duration: 200 },
		// toggleEffect: { effect: "slide", options: {direction: "up"}, duration: 200 },
		toggleEffect: { effect: "blind", options: {direction: "vertical", scale: "box"}, duration: 200 },
		generateIds: false,
		icon: true,
		idPrefix: "ft_",
		focusOnSelect: false,
		keyboard: true,
		keyPathSeparator: "/",
		minExpandLevel: 1,
		quicksearch: false,
		scrollOfs: {top: 0, bottom: 0},
		scrollParent: null,
		selectMode: 2,
		strings: {
			loading: "Loading&#8230;",
			loadError: "Load error!",
			moreData: "More&#8230;",
			noData: "No data."
		},
		// tabbable: true,  // @deprecated
		tabindex: "0",
		titlesTabbable: false,
		_classNames: {
			node: "fancytree-node",
			folder: "fancytree-folder",
			combinedExpanderPrefix: "fancytree-exp-",
			combinedIconPrefix: "fancytree-ico-",
			hasChildren: "fancytree-has-children",
			active: "fancytree-active",
			selected: "fancytree-selected",
			expanded: "fancytree-expanded",
			lazy: "fancytree-lazy",
			focused: "fancytree-focused",
			partload: "fancytree-partload",
			partsel: "fancytree-partsel",
			unselectable: "fancytree-unselectable",
			lastsib: "fancytree-lastsib",
			loading: "fancytree-loading",
			error: "fancytree-error",
			statusNodePrefix: "fancytree-statusnode-"
		},
		// events
		lazyLoad: null,
		postProcess: null
	},
	/* Set up the widget, Called on first $().fancytree() */
	_create: function() {
		this.tree = new Fancytree(this);

		this.$source = this.source || this.element.data("type") === "json" ? this.element
			: this.element.find(">ul:first");
		// Subclass Fancytree instance with all enabled extensions
		var extension, extName, i,
			opts = this.options,
			extensions = opts.extensions,
			base = this.tree;

		for(i=0; i<extensions.length; i++){
			extName = extensions[i];
			extension = $.ui.fancytree._extensions[extName];
			if(!extension){
				$.error("Could not apply extension '" + extName + "' (it is not registered, did you forget to include it?)");
			}
			// Add extension options as tree.options.EXTENSION
//			_assert(!this.tree.options[extName], "Extension name must not exist as option name: " + extName);
			this.tree.options[extName] = $.extend(true, {}, extension.options, this.tree.options[extName]);
			// Add a namespace tree.ext.EXTENSION, to hold instance data
			_assert(this.tree.ext[extName] === undefined, "Extension name must not exist as Fancytree.ext attribute: '" + extName + "'");
//			this.tree[extName] = extension;
			this.tree.ext[extName] = {};
			// Subclass Fancytree methods using proxies.
			_subclassObject(this.tree, base, extension, extName);
			// current extension becomes base for the next extension
			base = extension;
		}
		//
		if( opts.icons !== undefined ) {  // 2015-11-16
			if( opts.icon !== true ) {
				$.error("'icons' tree option is deprecated since v2.14.0: use 'icon' only instead");
			} else {
				this.tree.warn("'icons' tree option is deprecated since v2.14.0: use 'icon' instead");
				opts.icon = opts.icons;
			}
		}
		if( opts.iconClass !== undefined ) {  // 2015-11-16
			if( opts.icon ) {
				$.error("'iconClass' tree option is deprecated since v2.14.0: use 'icon' only instead");
			} else {
				this.tree.warn("'iconClass' tree option is deprecated since v2.14.0: use 'icon' instead");
				opts.icon = opts.iconClass;
			}
		}
		if( opts.tabbable !== undefined ) {  // 2016-04-04
			opts.tabindex = opts.tabbable ? "0" : "-1";
			this.tree.warn("'tabbable' tree option is deprecated since v2.17.0: use 'tabindex='" + opts.tabindex + "' instead");
		}
		//
		this.tree._callHook("treeCreate", this.tree);
		// Note: 'fancytreecreate' event is fired by widget base class
//        this.tree._triggerTreeEvent("create");
	},

	/* Called on every $().fancytree() */
	_init: function() {
		this.tree._callHook("treeInit", this.tree);
		// TODO: currently we call bind after treeInit, because treeInit
		// might change tree.$container.
		// It would be better, to move ebent binding into hooks altogether
		this._bind();
	},

	/* Use the _setOption method to respond to changes to options */
	_setOption: function(key, value) {
		var callDefault = true,
			rerender = false;
		switch( key ) {
		case "aria":
		case "checkbox":
		case "icon":
		case "minExpandLevel":
		// case "tabbable":
		case "tabindex":
//		case "nolink":
			this.tree._callHook("treeCreate", this.tree);
			rerender = true;
			break;
		case "escapeTitles":
		case "tooltip":
			rerender = true;
			break;
		case "source":
			callDefault = false;
			this.tree._callHook("treeLoad", this.tree, value);
			rerender = true;
			break;
		}
		this.tree.debug("set option " + key + "=" + value + " <" + typeof(value) + ">");
		if(callDefault){
			// In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
			$.Widget.prototype._setOption.apply(this, arguments);
			// TODO: In jQuery UI 1.9 and above, you use the _super method instead
//          this._super( "_setOption", key, value );
		}
		if(rerender){
			this.tree.render(true, false);  // force, not-deep
		}
	},

	/** Use the destroy method to clean up any modifications your widget has made to the DOM */
	destroy: function() {
		this._unbind();
		this.tree._callHook("treeDestroy", this.tree);
		// In jQuery UI 1.8, you must invoke the destroy method from the base widget
		$.Widget.prototype.destroy.call(this);
		// TODO: delete tree and nodes to make garbage collect easier?
		// TODO: In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
	},

	// -------------------------------------------------------------------------

	/* Remove all event handlers for our namespace */
	_unbind: function() {
		var ns = this.tree._ns;
		this.element.unbind(ns);
		this.tree.$container.unbind(ns);
		$(document).unbind(ns);
	},
	/* Add mouse and kyboard handlers to the container */
	_bind: function() {
		var that = this,
			opts = this.options,
			tree = this.tree,
			ns = tree._ns
			// selstartEvent = ( $.support.selectstart ? "selectstart" : "mousedown" )
			;

		// Remove all previuous handlers for this tree
		this._unbind();

		//alert("keydown" + ns + "foc=" + tree.hasFocus() + tree.$container);
		// tree.debug("bind events; container: ", tree.$container);
		tree.$container.on("focusin" + ns + " focusout" + ns, function(event){
			var node = FT.getNode(event),
				flag = (event.type === "focusin");
			// tree.debug("Tree container got event " + event.type, node, event);
			// tree.treeOnFocusInOut.call(tree, event);
			if(node){
				// For example clicking into an <input> that is part of a node
				tree._callHook("nodeSetFocus", tree._makeHookContext(node, event), flag);
				// tree._callHook("nodeSetFocus", node, flag);
			}else{
				tree._callHook("treeSetFocus", tree, flag);
			}
		}).on("selectstart" + ns, "span.fancytree-title", function(event){
			// prevent mouse-drags to select text ranges
			// tree.debug("<span title> got event " + event.type);
			event.preventDefault();
		}).on("keydown" + ns, function(event){
			// TODO: also bind keyup and keypress
			// tree.debug("got event " + event.type + ", hasFocus:" + tree.hasFocus());
			// if(opts.disabled || opts.keyboard === false || !tree.hasFocus() ){
			if(opts.disabled || opts.keyboard === false ){
				return true;
			}
			var res,
				node = tree.focusNode, // node may be null
				ctx = tree._makeHookContext(node || tree, event),
				prevPhase = tree.phase;

			try {
				tree.phase = "userEvent";
				// If a 'fancytreekeydown' handler returns false, skip the default
				// handling (implemented by tree.nodeKeydown()).
				if(node){
					res = tree._triggerNodeEvent("keydown", node, event);
				}else{
					res = tree._triggerTreeEvent("keydown", event);
				}
				if ( res === "preventNav" ){
					res = true; // prevent keyboard navigation, but don't prevent default handling of embedded input controls
				} else if ( res !== false ){
					res = tree._callHook("nodeKeydown", ctx);
				}
				return res;
			} finally {
				tree.phase = prevPhase;
			}
		}).on("click" + ns + " dblclick" + ns, function(event){
			// that.tree.debug("event(" + event + "): !");
			if(opts.disabled){
				return true;
			}
			var ctx,
				et = FT.getEventTarget(event),
				node = et.node,
				tree = that.tree,
				prevPhase = tree.phase;

			// that.tree.debug("event(" + event.type + "): node: ", node);
			if( !node ){
				return true;  // Allow bubbling of other events
			}
			ctx = tree._makeHookContext(node, event);
			// that.tree.debug("event(" + event.type + "): node: ", node);
			try {
				tree.phase = "userEvent";
				switch(event.type) {
				case "click":
					ctx.targetType = et.type;
					if( node.isPagingNode() ) {
						return tree._triggerNodeEvent("clickPaging", ctx, event) === true;
					}
					return ( tree._triggerNodeEvent("click", ctx, event) === false ) ? false : tree._callHook("nodeClick", ctx);
				case "dblclick":
					ctx.targetType = et.type;
					return ( tree._triggerNodeEvent("dblclick", ctx, event) === false ) ? false : tree._callHook("nodeDblclick", ctx);
				}
//             } catch(e) {
// //                var _ = null; // DT issue 117 // TODO
//                 $.error(e);
			} finally {
				tree.phase = prevPhase;
			}
		});
	},
	/** Return the active node or null.
	 * @returns {FancytreeNode}
	 */
	getActiveNode: function() {
		return this.tree.activeNode;
	},
	/** Return the matching node or null.
	 * @param {string} key
	 * @returns {FancytreeNode}
	 */
	getNodeByKey: function(key) {
		return this.tree.getNodeByKey(key);
	},
	/** Return the invisible system root node.
	 * @returns {FancytreeNode}
	 */
	getRootNode: function() {
		return this.tree.rootNode;
	},
	/** Return the current tree instance.
	 * @returns {Fancytree}
	 */
	getTree: function() {
		return this.tree;
	}
});

// $.ui.fancytree was created by the widget factory. Create a local shortcut:
FT = $.ui.fancytree;

/**
 * Static members in the `$.ui.fancytree` namespace.<br>
 * <br>
 * <pre class="sh_javascript sunlight-highlight-javascript">// Access static members:
 * var node = $.ui.fancytree.getNode(element);
 * alert($.ui.fancytree.version);
 * </pre>
 *
 * @mixin Fancytree_Static
 */
$.extend($.ui.fancytree,
	/** @lends Fancytree_Static# */
	{
	/** @type {string} */
	version: "2.20.0",      // Set to semver by 'grunt release'
	/** @type {string} */
	buildType: "production", // Set to 'production' by 'grunt build'
	/** @type {int} */
	debugLevel: 1,            // Set to 1 by 'grunt build'
							  // Used by $.ui.fancytree.debug() and as default for tree.options.debugLevel

	_nextId: 1,
	_nextNodeKey: 1,
	_extensions: {},
	// focusTree: null,

	/** Expose class object as $.ui.fancytree._FancytreeClass */
	_FancytreeClass: Fancytree,
	/** Expose class object as $.ui.fancytree._FancytreeNodeClass */
	_FancytreeNodeClass: FancytreeNode,
	/* Feature checks to provide backwards compatibility */
	jquerySupports: {
		// http://jqueryui.com/upgrade-guide/1.9/#deprecated-offset-option-merged-into-my-and-at
		positionMyOfs: isVersionAtLeast($.ui.version, 1, 9)
		},
	/** Throw an error if condition fails (debug method).
	 * @param {boolean} cond
	 * @param {string} msg
	 */
	assert: function(cond, msg){
		return _assert(cond, msg);
	},
	/** Return a function that executes *fn* at most every *timeout* ms.
	 * @param {integer} timeout
	 * @param {function} fn
	 * @param {boolean} [invokeAsap=false]
	 * @param {any} [ctx]
	 */
	debounce: function(timeout, fn, invokeAsap, ctx) {
		var timer;
		if(arguments.length === 3 && typeof invokeAsap !== "boolean") {
			ctx = invokeAsap;
			invokeAsap = false;
		}
		return function() {
			var args = arguments;
			ctx = ctx || this;
			invokeAsap && !timer && fn.apply(ctx, args);
			clearTimeout(timer);
			timer = setTimeout(function() {
				invokeAsap || fn.apply(ctx, args);
				timer = null;
			}, timeout);
		};
	},
	/** Write message to console if debugLevel >= 2
	 * @param {string} msg
	 */
	debug: function(msg){
		/*jshint expr:true */
		($.ui.fancytree.debugLevel >= 2) && consoleApply("log", arguments);
	},
	/** Write error message to console.
	 * @param {string} msg
	 */
	error: function(msg){
		consoleApply("error", arguments);
	},
	/** Convert &lt;, &gt;, &amp;, &quot;, &#39;, &#x2F; to the equivalent entities.
	 *
	 * @param {string} s
	 * @returns {string}
	 */
	escapeHtml: _escapeHtml,
	/** Make jQuery.position() arguments backwards compatible, i.e. if
	 * jQuery UI version <= 1.8, convert
	 *   { my: "left+3 center", at: "left bottom", of: $target }
	 * to
	 *   { my: "left center", at: "left bottom", of: $target, offset: "3  0" }
	 *
	 * See http://jqueryui.com/upgrade-guide/1.9/#deprecated-offset-option-merged-into-my-and-at
	 * and http://jsfiddle.net/mar10/6xtu9a4e/
	 */
	fixPositionOptions: function(opts) {
		if( opts.offset || ("" + opts.my + opts.at ).indexOf("%") >= 0 ) {
		   $.error("expected new position syntax (but '%' is not supported)");
		}
		if( ! $.ui.fancytree.jquerySupports.positionMyOfs ) {
			var // parse 'left+3 center' into ['left+3 center', 'left', '+3', 'center', undefined]
				myParts = /(\w+)([+-]?\d+)?\s+(\w+)([+-]?\d+)?/.exec(opts.my),
				atParts = /(\w+)([+-]?\d+)?\s+(\w+)([+-]?\d+)?/.exec(opts.at),
				// convert to numbers
				dx = (myParts[2] ? (+myParts[2]) : 0) + (atParts[2] ? (+atParts[2]) : 0),
				dy = (myParts[4] ? (+myParts[4]) : 0) + (atParts[4] ? (+atParts[4]) : 0);

			opts = $.extend({}, opts, { // make a copy and overwrite
				my: myParts[1] + " " + myParts[3],
				at: atParts[1] + " " + atParts[3]
			});
			if( dx || dy ) {
				opts.offset = "" + dx + " " + dy;
			}
		}
		return opts;
	},
	/** Return a {node: FancytreeNode, type: TYPE} object for a mouse event.
	 *
	 * @param {Event} event Mouse event, e.g. click, ...
	 * @returns {string} 'title' | 'prefix' | 'expander' | 'checkbox' | 'icon' | undefined
	 */
	getEventTargetType: function(event){
		return this.getEventTarget(event).type;
	},
	/** Return a {node: FancytreeNode, type: TYPE} object for a mouse event.
	 *
	 * @param {Event} event Mouse event, e.g. click, ...
	 * @returns {object} Return a {node: FancytreeNode, type: TYPE} object
	 *     TYPE: 'title' | 'prefix' | 'expander' | 'checkbox' | 'icon' | undefined
	 */
	getEventTarget: function(event){
		var tcn = event && event.target ? event.target.className : "",
			res = {node: this.getNode(event.target), type: undefined};
		// We use a fast version of $(res.node).hasClass()
		// See http://jsperf.com/test-for-classname/2
		if( /\bfancytree-title\b/.test(tcn) ){
			res.type = "title";
		}else if( /\bfancytree-expander\b/.test(tcn) ){
			res.type = (res.node.hasChildren() === false ? "prefix" : "expander");
		}else if( /\bfancytree-checkbox\b/.test(tcn) || /\bfancytree-radio\b/.test(tcn) ){
			res.type = "checkbox";
		}else if( /\bfancytree-icon\b/.test(tcn) ){
			res.type = "icon";
		}else if( /\bfancytree-node\b/.test(tcn) ){
			// Somewhere near the title
			res.type = "title";
		}else if( event && event.target && $(event.target).closest(".fancytree-title").length ) {
			// #228: clicking an embedded element inside a title
			res.type = "title";
		}
		return res;
	},
	/** Return a FancytreeNode instance from element, event, or jQuery object.
	 *
	 * @param {Element | jQueryObject | Event} el
	 * @returns {FancytreeNode} matching node or null
	 */
	getNode: function(el){
		if(el instanceof FancytreeNode){
			return el; // el already was a FancytreeNode
		}else if(el.selector !== undefined){
			el = el[0]; // el was a jQuery object: use the DOM element
		}else if(el.originalEvent !== undefined){
			el = el.target; // el was an Event
		}
		while( el ) {
			if(el.ftnode) {
				return el.ftnode;
			}
			el = el.parentNode;
		}
		return null;
	},
	/** Return a Fancytree instance, from element, index, event, or jQueryObject.
	 *
	 * @param {Element | jQueryObject | Event | integer | string} [el]
	 * @returns {Fancytree} matching tree or null
	 * @example
	 * $.ui.fancytree.getTree();   // Get first Fancytree instance on page
	 * $.ui.fancytree.getTree(1);  // Get second Fancytree instance on page
	 * $.ui.fancytree.getTree("#tree"); // Get tree for this matching element
	 *
	 * @since 2.13
	 */
	getTree: function(el){
		var widget;

		if( el instanceof Fancytree ) {
			return el; // el already was a Fancytree
		}
		if( el === undefined ) {
			el = 0;  // get first tree
		}
		if( typeof el === "number" ) {
			el = $(".fancytree-container").eq(el); // el was an integer: return nth instance
		} else if( typeof el === "string" ) {
			el = $(el).eq(0); // el was a selector: use first match
		} else if( el.selector !== undefined ) {
			el = el.eq(0); // el was a jQuery object: use the first DOM element
		} else if( el.originalEvent !== undefined ) {
			el = $(el.target); // el was an Event
		}
		el = el.closest(":ui-fancytree");
		widget = el.data("ui-fancytree") || el.data("fancytree"); // the latter is required by jQuery <= 1.8
		return widget ? widget.tree : null;
	},
	/** Write message to console if debugLevel >= 1
	 * @param {string} msg
	 */
	info: function(msg){
		/*jshint expr:true */
		($.ui.fancytree.debugLevel >= 1) && consoleApply("info", arguments);
	},
	/** Convert a keydown or mouse event to a canonical string like 'ctrl+a', 'ctrl+shift+f2', 'shift+leftdblclick'.
	 * This is especially handy for switch-statements in event handlers.
	 * @param {event}
	 * @returns {string}
	 */
	eventToString: function(event) {
		// Poor-man's hotkeys. See here for a complete implementation:
		//   https://github.com/jeresig/jquery.hotkeys
		var which = event.which,
			et = event.type,
			s = [];

		if( event.altKey ) { s.push("alt"); }
		if( event.ctrlKey ) { s.push("ctrl"); }
		if( event.metaKey ) { s.push("meta"); }
		if( event.shiftKey ) { s.push("shift"); }

		if( et === "click" || et === "dblclick" ) {
			s.push(MOUSE_BUTTONS[event.button] + et);
		} else {
			if( !IGNORE_KEYCODES[which] ) {
				s.push( SPECIAL_KEYCODES[which] || String.fromCharCode(which).toLowerCase() );
			}
		}
		return s.join("+");
	},
	/* @deprecated: use eventToString(event) instead.
	 */
	keyEventToString: function(event) {
		this.warn("keyEventToString() is deprecated: use eventToString()");
		return this.eventToString(event);
	},
	/**
	 * Parse tree data from HTML <ul> markup
	 *
	 * @param {jQueryObject} $ul
	 * @returns {NodeData[]}
	 */
	parseHtml: function($ul) {
		// TODO: understand this:
		/*jshint validthis:true */
		var classes, className, extraClasses, i, iPos, l, tmp, tmp2,
			$children = $ul.find(">li"),
			children = [];

		$children.each(function() {
			var allData, lowerCaseAttr,
				$li = $(this),
				$liSpan = $li.find(">span:first", this),
				$liA = $liSpan.length ? null : $li.find(">a:first"),
				d = { tooltip: null, data: {} };

			if( $liSpan.length ) {
				d.title = $liSpan.html();

			} else if( $liA && $liA.length ) {
				// If a <li><a> tag is specified, use it literally and extract href/target.
				d.title = $liA.html();
				d.data.href = $liA.attr("href");
				d.data.target = $liA.attr("target");
				d.tooltip = $liA.attr("title");

			} else {
				// If only a <li> tag is specified, use the trimmed string up to
				// the next child <ul> tag.
				d.title = $li.html();
				iPos = d.title.search(/<ul/i);
				if( iPos >= 0 ){
					d.title = d.title.substring(0, iPos);
				}
			}
			d.title = $.trim(d.title);

			// Make sure all fields exist
			for(i=0, l=CLASS_ATTRS.length; i<l; i++){
				d[CLASS_ATTRS[i]] = undefined;
			}
			// Initialize to `true`, if class is set and collect extraClasses
			classes = this.className.split(" ");
			extraClasses = [];
			for(i=0, l=classes.length; i<l; i++){
				className = classes[i];
				if(CLASS_ATTR_MAP[className]){
					d[className] = true;
				}else{
					extraClasses.push(className);
				}
			}
			d.extraClasses = extraClasses.join(" ");

			// Parse node options from ID, title and class attributes
			tmp = $li.attr("title");
			if( tmp ){
				d.tooltip = tmp; // overrides <a title='...'>
			}
			tmp = $li.attr("id");
			if( tmp ){
				d.key = tmp;
			}
			// Add <li data-NAME='...'> as node.data.NAME
			allData = _getElementDataAsDict($li);
			if( allData && !$.isEmptyObject(allData) ) {
				// #507: convert data-hidecheckbox (lower case) to hideCheckbox
				for( lowerCaseAttr in NODE_ATTR_LOWERCASE_MAP ) {
					if( allData.hasOwnProperty(lowerCaseAttr) ) {
						allData[NODE_ATTR_LOWERCASE_MAP[lowerCaseAttr]] = allData[lowerCaseAttr];
						delete allData[lowerCaseAttr];
					}
				}
				// #56: Allow to set special node.attributes from data-...
				for(i=0, l=NODE_ATTRS.length; i<l; i++){
					tmp = NODE_ATTRS[i];
					tmp2 = allData[tmp];
					if( tmp2 != null ) {
						delete allData[tmp];
						d[tmp] = tmp2;
					}
				}
				// All other data-... goes to node.data...
				$.extend(d.data, allData);
			}
			// Recursive reading of child nodes, if LI tag contains an UL tag
			$ul = $li.find(">ul:first");
			if( $ul.length ) {
				d.children = $.ui.fancytree.parseHtml($ul);
			}else{
				d.children = d.lazy ? undefined : null;
			}
			children.push(d);
//            FT.debug("parse ", d, children);
		});
		return children;
	},
	/** Add Fancytree extension definition to the list of globally available extensions.
	 *
	 * @param {object} definition
	 */
	registerExtension: function(definition){
		_assert(definition.name != null, "extensions must have a `name` property.");
		_assert(definition.version != null, "extensions must have a `version` property.");
		$.ui.fancytree._extensions[definition.name] = definition;
	},
	/** Inverse of escapeHtml().
	 *
	 * @param {string} s
	 * @returns {string}
	 */
	unescapeHtml: function(s){
		var e = document.createElement("div");
		e.innerHTML = s;
		return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
	},
	/** Write warning message to console.
	 * @param {string} msg
	 */
	warn: function(msg){
		consoleApply("warn", arguments);
	}
});

}(jQuery, window, document));

// Extending Fancytree
// ===================
//
// See also the [live demo](http://wwwendt.de/tech/fancytree/demo/sample-ext-childcounter.html) of this code.
//
// Every extension should have a comment header containing some information
// about the author, copyright and licensing. Also a pointer to the latest
// source code.
// Prefix with `/*!` so the comment is not removed by the minifier.

/*!
 * jquery.fancytree.childcounter.js
 *
 * Add a child counter bubble to tree nodes.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

// To keep the global namespace clean, we wrap everything in a closure

;(function($, undefined) {

// Consider to use [strict mode](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
"use strict";

// The [coding guidelines](http://contribute.jquery.org/style-guide/js/)
// require jshint compliance.
// But for this sample, we want to allow unused variables for demonstration purpose.

/*jshint unused:false */


// Adding methods
// --------------

// New member functions can be added to the `Fancytree` class.
// This function will be available for every tree instance:
//
//     var tree = $("#tree").fancytree("getTree");
//     tree.countSelected(false);

$.ui.fancytree._FancytreeClass.prototype.countSelected = function(topOnly){
	var tree = this,
		treeOptions = tree.options;

	return tree.getSelectedNodes(topOnly).length;
};


// The `FancytreeNode` class can also be easily extended. This would be called
// like
//     node.updateCounters();
//
// It is also good practice to add a docstring comment.
/**
 * [ext-childcounter] Update counter badges for `node` and its parents.
 * May be called in the `loadChildren` event, to update parents of lazy loaded
 * nodes.
 * @alias FancytreeNode#updateCounters
 * @requires jquery.fancytree.childcounters.js
 */
$.ui.fancytree._FancytreeNodeClass.prototype.updateCounters = function(){
	var node = this,
		$badge = $("span.fancytree-childcounter", node.span),
		extOpts = node.tree.options.childcounter,
		count = node.countChildren(extOpts.deep);

	node.data.childCounter = count;
	if( (count || !extOpts.hideZeros) && (!node.isExpanded() || !extOpts.hideExpanded) ) {
		if( !$badge.length ) {
			$badge = $("<span class='fancytree-childcounter'/>").appendTo($("span.fancytree-icon", node.span));
		}
		$badge.text(count);
	} else {
		$badge.remove();
	}
	if( extOpts.deep && !node.isTopLevel() && !node.isRoot() ) {
		node.parent.updateCounters();
	}
};


// Finally, we can extend the widget API and create functions that are called
// like so:
//
//     $("#tree").fancytree("widgetMethod1", "abc");

$.ui.fancytree.prototype.widgetMethod1 = function(arg1){
	var tree = this.tree;
	return arg1;
};


// Register a Fancytree extension
// ------------------------------
// A full blown extension, extension is available for all trees and can be
// enabled like so (see also the [live demo](http://wwwendt.de/tech/fancytree/demo/sample-ext-childcounter.html)):
//
//    <script src="../src/jquery.fancytree.js"></script>
//    <script src="../src/jquery.fancytree.childcounter.js"></script>
//    ...
//
//     $("#tree").fancytree({
//         extensions: ["childcounter"],
//         childcounter: {
//             hideExpanded: true
//         },
//         ...
//     });
//


/* 'childcounter' extension */
$.ui.fancytree.registerExtension({
// Every extension must be registered by a unique name.
	name: "childcounter",
// Version information should be compliant with [semver](http://semver.org)
	version: "2.20.0",

// Extension specific options and their defaults.
// This options will be available as `tree.options.childcounter.hideExpanded`

	options: {
		deep: true,
		hideZeros: true,
		hideExpanded: false
	},

// Attributes other than `options` (or functions) can be defined here, and
// will be added to the tree.ext.EXTNAME namespace, in this case `tree.ext.childcounter.foo`.
// They can also be accessed as `this._local.foo` from within the extension
// methods.
	foo: 42,

// Local functions are prefixed with an underscore '_'.
// Callable as `this._local._appendCounter()`.

	_appendCounter: function(bar){
		var tree = this;
	},

// **Override virtual methods for this extension.**
//
// Fancytree implements a number of 'hook methods', prefixed by 'node...' or 'tree...'.
// with a `ctx` argument (see [EventData](http://www.wwwendt.de/tech/fancytree/doc/jsdoc/global.html#EventData)
// for details) and an extended calling context:<br>
// `this`       : the Fancytree instance<br>
// `this._local`: the namespace that contains extension attributes and private methods (same as this.ext.EXTNAME)<br>
// `this._super`: the virtual function that was overridden (member of previous extension or Fancytree)
//
// See also the [complete list of available hook functions](http://www.wwwendt.de/tech/fancytree/doc/jsdoc/Fancytree_Hooks.html).

	/* Init */
// `treeInit` is triggered when a tree is initalized. We can set up classes or
// bind event handlers here...
	treeInit: function(ctx){
		var tree = this, // same as ctx.tree,
			opts = ctx.options,
			extOpts = ctx.options.childcounter;
// Optionally check for dependencies with other extensions
		/* this._requireExtension("glyph", false, false); */
// Call the base implementation
		this._superApply(arguments);
// Add a class to the tree container
		this.$container.addClass("fancytree-ext-childcounter");
	},

// Destroy this tree instance (we only call the default implementation, so
// this method could as well be omitted).

	treeDestroy: function(ctx){
		this._superApply(arguments);
	},

// Overload the `renderTitle` hook, to append a counter badge
	nodeRenderTitle: function(ctx, title) {
		var node = ctx.node,
			extOpts = ctx.options.childcounter,
			count = (node.data.childCounter == null) ? node.countChildren(extOpts.deep) : +node.data.childCounter;
// Let the base implementation render the title
		this._superApply(arguments);
// Append a counter badge
		if( (count || ! extOpts.hideZeros) && (!node.isExpanded() || !extOpts.hideExpanded) ){
			$("span.fancytree-icon", node.span).append($("<span class='fancytree-childcounter'/>").text(count));
		}
	},
// Overload the `setExpanded` hook, so the counters are updated
	nodeSetExpanded: function(ctx, flag, opts) {
		var tree = ctx.tree,
			node = ctx.node;
// Let the base implementation expand/collapse the node, then redraw the title
// after the animation has finished
		return this._superApply(arguments).always(function(){
			tree.nodeRenderTitle(ctx);
		});
	}

// End of extension definition
});
// End of namespace closure
}(jQuery));

/*!
 *
 * jquery.fancytree.clones.js
 * Support faster lookup of nodes by key and shared ref-ids.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";

/*******************************************************************************
 * Private functions and variables
 */
function _assert(cond, msg){
	// TODO: see qunit.js extractStacktrace()
	if(!cond){
		msg = msg ? ": " + msg : "";
		$.error("Assertion failed" + msg);
	}
}


/* Return first occurrence of member from array. */
function _removeArrayMember(arr, elem) {
	// TODO: use Array.indexOf for IE >= 9
	var i;
	for (i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === elem) {
			arr.splice(i, 1);
			return true;
		}
	}
	return false;
}


// /**
//  * Calculate a 32 bit FNV-1a hash
//  * Found here: https://gist.github.com/vaiorabbit/5657561
//  * Ref.: http://isthe.com/chongo/tech/comp/fnv/
//  *
//  * @param {string} str the input value
//  * @param {boolean} [asString=false] set to true to return the hash value as
//  *     8-digit hex string instead of an integer
//  * @param {integer} [seed] optionally pass the hash of the previous chunk
//  * @returns {integer | string}
//  */
// function hashFnv32a(str, asString, seed) {
// 	/*jshint bitwise:false */
// 	var i, l,
// 		hval = (seed === undefined) ? 0x811c9dc5 : seed;

// 	for (i = 0, l = str.length; i < l; i++) {
// 		hval ^= str.charCodeAt(i);
// 		hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
// 	}
// 	if( asString ){
// 		// Convert to 8 digit hex string
// 		return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
// 	}
// 	return hval >>> 0;
// }


/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} key ASCII only
 * @param {boolean} [asString=false]
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash
 */
function hashMurmur3(key, asString, seed) {
	/*jshint bitwise:false */
	var h1b, k1,
		remainder = key.length & 3,
		bytes = key.length - remainder,
		h1 = seed,
		c1 = 0xcc9e2d51,
		c2 = 0x1b873593,
		i = 0;

	while (i < bytes) {
		k1 =
			((key.charCodeAt(i) & 0xff)) |
			((key.charCodeAt(++i) & 0xff) << 8) |
			((key.charCodeAt(++i) & 0xff) << 16) |
			((key.charCodeAt(++i) & 0xff) << 24);
		++i;

		k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

		h1 ^= k1;
		h1 = (h1 << 13) | (h1 >>> 19);
		h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
		h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
	}

	k1 = 0;

	switch (remainder) {
		/*jshint -W086:true */
		case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
		case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
		case 1: k1 ^= (key.charCodeAt(i) & 0xff);

		k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= k1;
	}

	h1 ^= key.length;

	h1 ^= h1 >>> 16;
	h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 13;
	h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
	h1 ^= h1 >>> 16;

	if( asString ){
		// Convert to 8 digit hex string
		return ("0000000" + (h1 >>> 0).toString(16)).substr(-8);
	}
	return h1 >>> 0;
}

// console.info(hashMurmur3("costarring"));
// console.info(hashMurmur3("costarring", true));
// console.info(hashMurmur3("liquid"));
// console.info(hashMurmur3("liquid", true));


/*
 * Return a unique key for node by calculationg the hash of the parents refKey-list
 */
function calcUniqueKey(node) {
	var key,
		path = $.map(node.getParentList(false, true), function(e){ return e.refKey || e.key; });
	path = path.join("/");
	key = "id_" + hashMurmur3(path, true);
	// node.debug(path + " -> " + key);
	return key;
}


/**
 * [ext-clones] Return a list of clone-nodes or null.
 * @param {boolean} [includeSelf=false]
 * @returns {FancytreeNode[] | null}
 *
 * @alias FancytreeNode#getCloneList
 * @requires jquery.fancytree.clones.js
 */
$.ui.fancytree._FancytreeNodeClass.prototype.getCloneList = function(includeSelf){
	var key,
		tree = this.tree,
		refList = tree.refMap[this.refKey] || null,
		keyMap = tree.keyMap;

	if( refList ) {
		key = this.key;
		// Convert key list to node list
		if( includeSelf ) {
			refList = $.map(refList, function(val){ return keyMap[val]; });
		} else {
			refList = $.map(refList, function(val){ return val === key ? null : keyMap[val]; });
			if( refList.length < 1 ) {
				refList = null;
			}
		}
	}
	return refList;
};


/**
 * [ext-clones] Return true if this node has at least another clone with same refKey.
 * @returns {boolean}
 *
 * @alias FancytreeNode#isClone
 * @requires jquery.fancytree.clones.js
 */
$.ui.fancytree._FancytreeNodeClass.prototype.isClone = function(){
	var refKey = this.refKey || null,
		refList = refKey && this.tree.refMap[refKey] || null;
	return !!(refList && refList.length > 1);
};


/**
 * [ext-clones] Update key and/or refKey for an existing node.
 * @param {string} key
 * @param {string} refKey
 * @returns {boolean}
 *
 * @alias FancytreeNode#reRegister
 * @requires jquery.fancytree.clones.js
 */
$.ui.fancytree._FancytreeNodeClass.prototype.reRegister = function(key, refKey){
	key = (key == null) ? null :  "" + key;
	refKey = (refKey == null) ? null :  "" + refKey;
	// this.debug("reRegister", key, refKey);

	var tree = this.tree,
		prevKey = this.key,
		prevRefKey = this.refKey,
		keyMap = tree.keyMap,
		refMap = tree.refMap,
		refList = refMap[prevRefKey] || null,
//		curCloneKeys = refList ? node.getCloneList(true),
		modified = false;

	// Key has changed: update all references
	if( key != null && key !== this.key ) {
		if( keyMap[key] ) {
			$.error("[ext-clones] reRegister(" + key + "): already exists: " + this);
		}
		// Update keyMap
		delete keyMap[prevKey];
		keyMap[key] = this;
		// Update refMap
		if( refList ) {
			refMap[prevRefKey] = $.map(refList, function(e){
				return e === prevKey ? key : e;
			});
		}
		this.key = key;
		modified = true;
	}

	// refKey has changed
	if( refKey != null && refKey !== this.refKey ) {
		// Remove previous refKeys
		if( refList ){
			if( refList.length === 1 ){
				delete refMap[prevRefKey];
			}else{
				refMap[prevRefKey] = $.map(refList, function(e){
					return e === prevKey ? null : e;
				});
			}
		}
		// Add refKey
		if( refMap[refKey] ) {
			refMap[refKey].append(key);
		}else{
			refMap[refKey] = [ this.key ];
		}
		this.refKey = refKey;
		modified = true;
	}
	return modified;
};


/**
 * [ext-clones] Define a refKey for an existing node.
 * @param {string} refKey
 * @returns {boolean}
 *
 * @alias FancytreeNode#setRefKey
 * @requires jquery.fancytree.clones.js
 * @since 2.16
 */
$.ui.fancytree._FancytreeNodeClass.prototype.setRefKey = function(refKey){
	return this.reRegister(null, refKey);
};


/**
 * [ext-clones] Return all nodes with a given refKey (null if not found).
 * @param {string} refKey
 * @param {FancytreeNode} [rootNode] optionally restrict results to descendants of this node
 * @returns {FancytreeNode[] | null}
 * @alias Fancytree#getNodesByRef
 * @requires jquery.fancytree.clones.js
 */
$.ui.fancytree._FancytreeClass.prototype.getNodesByRef = function(refKey, rootNode){
	var keyMap = this.keyMap,
		refList = this.refMap[refKey] || null;

	if( refList ) {
		// Convert key list to node list
		if( rootNode ) {
			refList = $.map(refList, function(val){
				var node = keyMap[val];
				return node.isDescendantOf(rootNode) ? node : null;
			});
		}else{
			refList = $.map(refList, function(val){ return keyMap[val]; });
		}
		if( refList.length < 1 ) {
			refList = null;
		}
	}
	return refList;
};


/**
 * [ext-clones] Replace a refKey with a new one.
 * @param {string} oldRefKey
 * @param {string} newRefKey
 * @alias Fancytree#changeRefKey
 * @requires jquery.fancytree.clones.js
 */
$.ui.fancytree._FancytreeClass.prototype.changeRefKey = function(oldRefKey, newRefKey) {
	var i, node,
		keyMap = this.keyMap,
		refList = this.refMap[oldRefKey] || null;

	if (refList) {
		for (i = 0; i < refList.length; i++) {
			node = keyMap[refList[i]];
			node.refKey = newRefKey;
		}
		delete this.refMap[oldRefKey];
		this.refMap[newRefKey] = refList;
	}
};


/*******************************************************************************
 * Extension code
 */
$.ui.fancytree.registerExtension({
	name: "clones",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		highlightActiveClones: true, // set 'fancytree-active-clone' on active clones and all peers
		highlightClones: false       // set 'fancytree-clone' class on any node that has at least one clone
	},

	treeCreate: function(ctx){
		this._superApply(arguments);
		ctx.tree.refMap = {};
		ctx.tree.keyMap = {};
	},
	treeInit: function(ctx){
		this.$container.addClass("fancytree-ext-clones");
		_assert(ctx.options.defaultKey == null);
		// Generate unique / reproducible default keys
		ctx.options.defaultKey = function(node){
			return calcUniqueKey(node);
		};
		// The default implementation loads initial data
		this._superApply(arguments);
	},
	treeClear: function(ctx){
		ctx.tree.refMap = {};
		ctx.tree.keyMap = {};
		return this._superApply(arguments);
	},
	treeRegisterNode: function(ctx, add, node) {
		var refList, len,
			tree = ctx.tree,
			keyMap = tree.keyMap,
			refMap = tree.refMap,
			key = node.key,
			refKey = (node && node.refKey != null) ? "" + node.refKey : null;

//		ctx.tree.debug("clones.treeRegisterNode", add, node);

		if( node.isStatusNode() ){
			return this._superApply(arguments);
		}

		if( add ) {
			if( keyMap[node.key] != null ) {
				$.error("clones.treeRegisterNode: node.key already exists: " + node);
			}
			keyMap[key] = node;
			if( refKey ) {
				refList = refMap[refKey];
				if( refList ) {
					refList.push(key);
					if( refList.length === 2 && ctx.options.clones.highlightClones ) {
						// Mark peer node, if it just became a clone (no need to
						// mark current node, since it will be rendered later anyway)
						keyMap[refList[0]].renderStatus();
					}
				} else {
					refMap[refKey] = [key];
				}
				// node.debug("clones.treeRegisterNode: add clone =>", refMap[refKey]);
			}
		}else {
			if( keyMap[key] == null ) {
				$.error("clones.treeRegisterNode: node.key not registered: " + node.key);
			}
			delete keyMap[key];
			if( refKey ) {
				refList = refMap[refKey];
				// node.debug("clones.treeRegisterNode: remove clone BEFORE =>", refMap[refKey]);
				if( refList ) {
					len = refList.length;
					if( len <= 1 ){
						_assert(len === 1);
						_assert(refList[0] === key);
						delete refMap[refKey];
					}else{
						_removeArrayMember(refList, key);
						// Unmark peer node, if this was the only clone
						if( len === 2 && ctx.options.clones.highlightClones ) {
//							node.debug("clones.treeRegisterNode: last =>", node.getCloneList());
							keyMap[refList[0]].renderStatus();
						}
					}
					// node.debug("clones.treeRegisterNode: remove clone =>", refMap[refKey]);
				}
			}
		}
		return this._superApply(arguments);
	},
	nodeRenderStatus: function(ctx) {
		var $span, res,
			node = ctx.node;

		res = this._superApply(arguments);

		if( ctx.options.clones.highlightClones ) {
			$span = $(node[ctx.tree.statusClassPropName]);
			// Only if span already exists
			if( $span.length && node.isClone() ){
//				node.debug("clones.nodeRenderStatus: ", ctx.options.clones.highlightClones);
				$span.addClass("fancytree-clone");
			}
		}
		return res;
	},
	nodeSetActive: function(ctx, flag) {
		var res,
			scpn = ctx.tree.statusClassPropName,
			node = ctx.node;

		res = this._superApply(arguments);

		if( ctx.options.clones.highlightActiveClones && node.isClone() ) {
			$.each(node.getCloneList(true), function(idx, n){
				// n.debug("clones.nodeSetActive: ", flag !== false);
				$(n[scpn]).toggleClass("fancytree-active-clone", flag !== false);
			});
		}
		return res;
	}
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.dnd.js
 *
 * Drag-and-drop support.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";

/* *****************************************************************************
 * Private functions and variables
 */
var didRegisterDnd = false,
	classDropAccept = "fancytree-drop-accept",
	classDropAfter = "fancytree-drop-after",
	classDropBefore = "fancytree-drop-before",
	classDropOver = "fancytree-drop-over",
	classDropReject = "fancytree-drop-reject",
	classDropTarget = "fancytree-drop-target";

/* Convert number to string and prepend +/-; return empty string for 0.*/
function offsetString(n){
	return n === 0 ? "" : (( n > 0 ) ? ("+" + n) : ("" + n));
}

//--- Extend ui.draggable event handling --------------------------------------

function _registerDnd() {
	if(didRegisterDnd){
		return;
	}

	// Register proxy-functions for draggable.start/drag/stop

	$.ui.plugin.add("draggable", "connectToFancytree", {
		start: function(event, ui) {
			// 'draggable' was renamed to 'ui-draggable' since jQueryUI 1.10
			var draggable = $(this).data("ui-draggable") || $(this).data("draggable"),
				sourceNode = ui.helper.data("ftSourceNode") || null;

			if(sourceNode) {
				// Adjust helper offset, so cursor is slightly outside top/left corner
				draggable.offset.click.top = -2;
				draggable.offset.click.left = + 16;
				// Trigger dragStart event
				// TODO: when called as connectTo..., the return value is ignored(?)
				return sourceNode.tree.ext.dnd._onDragEvent("start", sourceNode, null, event, ui, draggable);
			}
		},
		drag: function(event, ui) {
			var ctx, isHelper, logObject,
				// 'draggable' was renamed to 'ui-draggable' since jQueryUI 1.10
				draggable = $(this).data("ui-draggable") || $(this).data("draggable"),
				sourceNode = ui.helper.data("ftSourceNode") || null,
				prevTargetNode = ui.helper.data("ftTargetNode") || null,
				targetNode = $.ui.fancytree.getNode(event.target),
				dndOpts = sourceNode && sourceNode.tree.options.dnd;

			// logObject = sourceNode || prevTargetNode || $.ui.fancytree;
			// logObject.debug("Drag event:", event, event.shiftKey);
			if(event.target && !targetNode){
				// We got a drag event, but the targetNode could not be found
				// at the event location. This may happen,
				// 1. if the mouse jumped over the drag helper,
				// 2. or if a non-fancytree element is dragged
				// We ignore it:
				isHelper = $(event.target).closest("div.fancytree-drag-helper,#fancytree-drop-marker").length > 0;
				if(isHelper){
					logObject = sourceNode || prevTargetNode || $.ui.fancytree;
					logObject.debug("Drag event over helper: ignored.");
					return;
				}
			}
			ui.helper.data("ftTargetNode", targetNode);

			if( dndOpts && dndOpts.updateHelper ) {
				ctx = sourceNode.tree._makeHookContext(sourceNode, event, {
					otherNode: targetNode,
					ui: ui,
					draggable: draggable,
					dropMarker: $("#fancytree-drop-marker")
				});
				dndOpts.updateHelper.call(sourceNode.tree, sourceNode, ctx);
			}

			// Leaving a tree node
			if(prevTargetNode && prevTargetNode !== targetNode ) {
				prevTargetNode.tree.ext.dnd._onDragEvent("leave", prevTargetNode, sourceNode, event, ui, draggable);
			}
			if(targetNode){
				if(!targetNode.tree.options.dnd.dragDrop) {
					// not enabled as drop target
				} else if(targetNode === prevTargetNode) {
					// Moving over same node
					targetNode.tree.ext.dnd._onDragEvent("over", targetNode, sourceNode, event, ui, draggable);
				}else{
					// Entering this node first time
					targetNode.tree.ext.dnd._onDragEvent("enter", targetNode, sourceNode, event, ui, draggable);
					targetNode.tree.ext.dnd._onDragEvent("over", targetNode, sourceNode, event, ui, draggable);
				}
			}
			// else go ahead with standard event handling
		},
		stop: function(event, ui) {
			var logObject,
				// 'draggable' was renamed to 'ui-draggable' since jQueryUI 1.10:
				draggable = $(this).data("ui-draggable") || $(this).data("draggable"),
				sourceNode = ui.helper.data("ftSourceNode") || null,
				targetNode = ui.helper.data("ftTargetNode") || null,
				dropped = (event.type === "mouseup" && event.which === 1);

			if(!dropped){
				logObject = sourceNode || targetNode || $.ui.fancytree;
				logObject.debug("Drag was cancelled");
			}
			if(targetNode) {
				if(dropped){
					targetNode.tree.ext.dnd._onDragEvent("drop", targetNode, sourceNode, event, ui, draggable);
				}
				targetNode.tree.ext.dnd._onDragEvent("leave", targetNode, sourceNode, event, ui, draggable);
			}
			if(sourceNode){
				sourceNode.tree.ext.dnd._onDragEvent("stop", sourceNode, null, event, ui, draggable);
			}
		}
	});

	didRegisterDnd = true;
}


/* *****************************************************************************
 * Drag and drop support
 */
function _initDragAndDrop(tree) {
	var dnd = tree.options.dnd || null,
		glyph = tree.options.glyph || null;

	// Register 'connectToFancytree' option with ui.draggable
	if( dnd ) {
		_registerDnd();
	}
	// Attach ui.draggable to this Fancytree instance
	if(dnd && dnd.dragStart ) {
		tree.widget.element.draggable($.extend({
			addClasses: false,
			// DT issue 244: helper should be child of scrollParent:
			appendTo: tree.$container,
//			appendTo: "body",
			containment: false,
//			containment: "parent",
			delay: 0,
			distance: 4,
			revert: false,
			scroll: true, // to disable, also set css 'position: inherit' on ul.fancytree-container
			scrollSpeed: 7,
			scrollSensitivity: 10,
			// Delegate draggable.start, drag, and stop events to our handler
			connectToFancytree: true,
			// Let source tree create the helper element
			helper: function(event) {
				var $helper, $nodeTag, opts,
					sourceNode = $.ui.fancytree.getNode(event.target);

				if(!sourceNode){
					// #405, DT issue 211: might happen, if dragging a table *header*
					return "<div>ERROR?: helper requested but sourceNode not found</div>";
				}
				opts = sourceNode.tree.options.dnd;
				$nodeTag = $(sourceNode.span);
				// Only event and node argument is available
				$helper = $("<div class='fancytree-drag-helper'><span class='fancytree-drag-helper-img' /></div>")
					.css({zIndex: 3, position: "relative"}) // so it appears above ext-wide selection bar
					.append($nodeTag.find("span.fancytree-title").clone());

				// Attach node reference to helper object
				$helper.data("ftSourceNode", sourceNode);

				// Support glyph symbols instead of icons
				if( glyph ) {
					$helper.find(".fancytree-drag-helper-img")
						.addClass(glyph.map.dragHelper);
				}
				// Allow to modify the helper, e.g. to add multi-node-drag feedback
				if( opts.initHelper ) {
					opts.initHelper.call(sourceNode.tree, sourceNode, {
						node: sourceNode,
						tree: sourceNode.tree,
						originalEvent: event,
						ui: { helper: $helper }
					});
				}
				// We return an unconnected element, so `draggable` will add this
				// to the parent specified as `appendTo` option
				return $helper;
			},
			start: function(event, ui) {
				var sourceNode = ui.helper.data("ftSourceNode");
				return !!sourceNode; // Abort dragging if no node could be found
			}
		}, tree.options.dnd.draggable));
	}
	// Attach ui.droppable to this Fancytree instance
	if(dnd && dnd.dragDrop) {
		tree.widget.element.droppable($.extend({
			addClasses: false,
			tolerance: "intersect",
			greedy: false
/*
			activate: function(event, ui) {
				tree.debug("droppable - activate", event, ui, this);
			},
			create: function(event, ui) {
				tree.debug("droppable - create", event, ui);
			},
			deactivate: function(event, ui) {
				tree.debug("droppable - deactivate", event, ui);
			},
			drop: function(event, ui) {
				tree.debug("droppable - drop", event, ui);
			},
			out: function(event, ui) {
				tree.debug("droppable - out", event, ui);
			},
			over: function(event, ui) {
				tree.debug("droppable - over", event, ui);
			}
*/
		}, tree.options.dnd.droppable));
	}
}


/* *****************************************************************************
 *
 */

$.ui.fancytree.registerExtension({
	name: "dnd",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		// Make tree nodes accept draggables
		autoExpandMS: 1000,  // Expand nodes after n milliseconds of hovering.
		draggable: null,     // Additional options passed to jQuery draggable
		droppable: null,     // Additional options passed to jQuery droppable
		focusOnClick: false, // Focus, although draggable cancels mousedown event (#270)
		preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
		preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
		smartRevert: true,   // set draggable.revert = true if drop was rejected
		// Events (drag support)
		dragStart: null,     // Callback(sourceNode, data), return true, to enable dnd
		dragStop: null,      // Callback(sourceNode, data)
		initHelper: null,    // Callback(sourceNode, data)
		updateHelper: null,  // Callback(sourceNode, data)
		// Events (drop support)
		dragEnter: null,     // Callback(targetNode, data)
		dragOver: null,      // Callback(targetNode, data)
		dragExpand: null,    // Callback(targetNode, data), return false to prevent autoExpand
		dragDrop: null,      // Callback(targetNode, data)
		dragLeave: null      // Callback(targetNode, data)
	},

	treeInit: function(ctx){
		var tree = ctx.tree;
		this._superApply(arguments);
		// issue #270: draggable eats mousedown events
		if( tree.options.dnd.dragStart ){
			tree.$container.on("mousedown", function(event){
//				if( !tree.hasFocus() && ctx.options.dnd.focusOnClick ) {
				if( ctx.options.dnd.focusOnClick ) {  // #270
					var node = $.ui.fancytree.getNode(event);
					if (node){
						node.debug("Re-enable focus that was prevented by jQuery UI draggable.");
						// node.setFocus();
						// $(node.span).closest(":tabbable").focus();
						// $(event.target).trigger("focus");
						// $(event.target).closest(":tabbable").trigger("focus");
					}
					setTimeout(function() { // #300
						$(event.target).closest(":tabbable").focus();
					}, 10);
				}
			});
		}
		_initDragAndDrop(tree);
	},
	/* Display drop marker according to hitMode ('after', 'before', 'over'). */
	_setDndStatus: function(sourceNode, targetNode, helper, hitMode, accept) {
		var markerOffsetX,
			markerAt = "center",
			instData = this._local,
			glyph = this.options.glyph || null,
			$source = sourceNode ? $(sourceNode.span) : null,
			$target = $(targetNode.span),
			$targetTitle = $target.find(">span.fancytree-title");

		if( !instData.$dropMarker ) {
			instData.$dropMarker = $("<div id='fancytree-drop-marker'></div>")
				.hide()
				.css({"z-index": 1000})
				.prependTo($(this.$div).parent());
//                .prependTo("body");

			if( glyph ) {
				// instData.$dropMarker.addClass(glyph.map.dragHelper);
				instData.$dropMarker
					.addClass(glyph.map.dropMarker);
			}
		}
		if( hitMode === "after" || hitMode === "before" || hitMode === "over" ){
			markerOffsetX = -24;
			switch(hitMode){
			case "before":
				markerAt = "top";
				markerOffsetX -= 16;
				break;
			case "after":
				markerAt = "bottom";
				markerOffsetX -= 16;
				break;
			}

			instData.$dropMarker
				.toggleClass(classDropAfter, hitMode === "after")
				.toggleClass(classDropOver, hitMode === "over")
				.toggleClass(classDropBefore, hitMode === "before")
				.show()
				.position($.ui.fancytree.fixPositionOptions({
					my: "left" + offsetString(markerOffsetX) + " center",
					at: "left " + markerAt,
					of: $targetTitle
					}));
		} else {
			instData.$dropMarker.hide();
		}
		if( $source ){
			$source
				.toggleClass(classDropAccept, accept === true)
				.toggleClass(classDropReject, accept === false);
		}
		$target
			.toggleClass(classDropTarget, hitMode === "after" || hitMode === "before" || hitMode === "over")
			.toggleClass(classDropAfter, hitMode === "after")
			.toggleClass(classDropBefore, hitMode === "before")
			.toggleClass(classDropAccept, accept === true)
			.toggleClass(classDropReject, accept === false);

		helper
			.toggleClass(classDropAccept, accept === true)
			.toggleClass(classDropReject, accept === false);
	},

	/*
	 * Handles drag'n'drop functionality.
	 *
	 * A standard jQuery drag-and-drop process may generate these calls:
	 *
	 * start:
	 *     _onDragEvent("start", sourceNode, null, event, ui, draggable);
	 * drag:
	 *     _onDragEvent("leave", prevTargetNode, sourceNode, event, ui, draggable);
	 *     _onDragEvent("over", targetNode, sourceNode, event, ui, draggable);
	 *     _onDragEvent("enter", targetNode, sourceNode, event, ui, draggable);
	 * stop:
	 *     _onDragEvent("drop", targetNode, sourceNode, event, ui, draggable);
	 *     _onDragEvent("leave", targetNode, sourceNode, event, ui, draggable);
	 *     _onDragEvent("stop", sourceNode, null, event, ui, draggable);
	 */
	_onDragEvent: function(eventName, node, otherNode, event, ui, draggable) {
		// if(eventName !== "over"){
		// 	this.debug("tree.ext.dnd._onDragEvent(%s, %o, %o) - %o", eventName, node, otherNode, this);
		// }
		var accept, nodeOfs, parentRect, rect, relPos, relPos2,
			enterResponse, hitMode, r,
			opts = this.options,
			dnd = opts.dnd,
			ctx = this._makeHookContext(node, event, {otherNode: otherNode, ui: ui, draggable: draggable}),
			res = null,
			that = this,
			$nodeTag = $(node.span);

		if( dnd.smartRevert ) {
			draggable.options.revert = "invalid";
		}

		switch (eventName) {

		case "start":
			if( node.isStatusNode() ) {
				res = false;
			} else if(dnd.dragStart) {
				res = dnd.dragStart(node, ctx);
			}
			if(res === false) {
				this.debug("tree.dragStart() cancelled");
				//draggable._clear();
				// NOTE: the return value seems to be ignored (drag is not canceled, when false is returned)
				// TODO: call this._cancelDrag()?
				ui.helper.trigger("mouseup")
					.hide();
			} else {
				if( dnd.smartRevert ) {
					// #567, #593: fix revert position
					// rect = node.li.getBoundingClientRect();
					rect = node[ctx.tree.nodeContainerAttrName].getBoundingClientRect();
					parentRect = $(draggable.options.appendTo)[0].getBoundingClientRect();
					draggable.originalPosition.left = Math.max(0, rect.left - parentRect.left);
					draggable.originalPosition.top = Math.max(0, rect.top - parentRect.top);
				}
				$nodeTag.addClass("fancytree-drag-source");
				// Register global handlers to allow cancel
				$(document)
					.on("keydown.fancytree-dnd,mousedown.fancytree-dnd", function(event){
						// node.tree.debug("dnd global event", event.type, event.which);
						if( event.type === "keydown" && event.which === $.ui.keyCode.ESCAPE ) {
							that.ext.dnd._cancelDrag();
						} else if( event.type === "mousedown" ) {
							that.ext.dnd._cancelDrag();
						}
					});
			}
			break;

		case "enter":
			if(dnd.preventRecursiveMoves && node.isDescendantOf(otherNode)){
				r = false;
			}else{
				r = dnd.dragEnter ? dnd.dragEnter(node, ctx) : null;
			}
			if(!r){
				// convert null, undefined, false to false
				res = false;
			}else if ( $.isArray(r) ) {
				// TODO: also accept passing an object of this format directly
				res = {
					over: ($.inArray("over", r) >= 0),
					before: ($.inArray("before", r) >= 0),
					after: ($.inArray("after", r) >= 0)
				};
			}else{
				res = {
					over: ((r === true) || (r === "over")),
					before: ((r === true) || (r === "before")),
					after: ((r === true) || (r === "after"))
				};
			}
			ui.helper.data("enterResponse", res);
			// this.debug("helper.enterResponse: %o", res);
			break;

		case "over":
			enterResponse = ui.helper.data("enterResponse");
			hitMode = null;
			if(enterResponse === false){
				// Don't call dragOver if onEnter returned false.
//                break;
			} else if(typeof enterResponse === "string") {
				// Use hitMode from onEnter if provided.
				hitMode = enterResponse;
			} else {
				// Calculate hitMode from relative cursor position.
				nodeOfs = $nodeTag.offset();
				relPos = { x: event.pageX - nodeOfs.left,
						   y: event.pageY - nodeOfs.top };
				relPos2 = { x: relPos.x / $nodeTag.width(),
							y: relPos.y / $nodeTag.height() };

				if( enterResponse.after && relPos2.y > 0.75 ){
					hitMode = "after";
				} else if(!enterResponse.over && enterResponse.after && relPos2.y > 0.5 ){
					hitMode = "after";
				} else if(enterResponse.before && relPos2.y <= 0.25) {
					hitMode = "before";
				} else if(!enterResponse.over && enterResponse.before && relPos2.y <= 0.5) {
					hitMode = "before";
				} else if(enterResponse.over) {
					hitMode = "over";
				}
				// Prevent no-ops like 'before source node'
				// TODO: these are no-ops when moving nodes, but not in copy mode
				if( dnd.preventVoidMoves ){
					if(node === otherNode){
						this.debug("    drop over source node prevented");
						hitMode = null;
					}else if(hitMode === "before" && otherNode && node === otherNode.getNextSibling()){
						this.debug("    drop after source node prevented");
						hitMode = null;
					}else if(hitMode === "after" && otherNode && node === otherNode.getPrevSibling()){
						this.debug("    drop before source node prevented");
						hitMode = null;
					}else if(hitMode === "over" && otherNode && otherNode.parent === node && otherNode.isLastSibling() ){
						this.debug("    drop last child over own parent prevented");
						hitMode = null;
					}
				}
//                this.debug("hitMode: %s - %s - %s", hitMode, (node.parent === otherNode), node.isLastSibling());
				ui.helper.data("hitMode", hitMode);
			}
			// Auto-expand node (only when 'over' the node, not 'before', or 'after')
			if(hitMode !== "before" && hitMode !== "after" && dnd.autoExpandMS &&
				node.hasChildren() !== false && !node.expanded &&
				(!dnd.dragExpand || dnd.dragExpand(node, ctx) !== false)
				) {
				// TODO: maybe add a callback `dragExpand()` here to allow more control
				node.scheduleAction("expand", dnd.autoExpandMS);
			}
			if(hitMode && dnd.dragOver){
				// TODO: http://code.google.com/p/dynatree/source/detail?r=625
				ctx.hitMode = hitMode;
				res = dnd.dragOver(node, ctx);
			}
			accept = (res !== false && hitMode !== null);
			if( dnd.smartRevert ) {
				draggable.options.revert = !accept;
			}
			this._local._setDndStatus(otherNode, node, ui.helper, hitMode, accept);
			break;

		case "drop":
			hitMode = ui.helper.data("hitMode");
			if(hitMode && dnd.dragDrop){
				ctx.hitMode = hitMode;
				dnd.dragDrop(node, ctx);
			}
			break;

		case "leave":
			// Cancel pending expand request
			node.scheduleAction("cancel");
			ui.helper.data("enterResponse", null);
			ui.helper.data("hitMode", null);
			this._local._setDndStatus(otherNode, node, ui.helper, "out", undefined);
			if(dnd.dragLeave){
				dnd.dragLeave(node, ctx);
			}
			break;

		case "stop":
			$nodeTag.removeClass("fancytree-drag-source");
			$(document).off(".fancytree-dnd");
			if(dnd.dragStop){
				dnd.dragStop(node, ctx);
			}
			break;

		default:
			$.error("Unsupported drag event: " + eventName);
		}
		return res;
	},

	_cancelDrag: function() {
		 var dd = $.ui.ddmanager.current;
		 if(dd){
			 dd.cancel();
		 }
	}
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.edit.js
 *
 * Make node titles editable.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";


/*******************************************************************************
 * Private functions and variables
 */

var isMac = /Mac/.test(navigator.platform),
	escapeHtml = $.ui.fancytree.escapeHtml,
	unescapeHtml = $.ui.fancytree.unescapeHtml;

/**
 * [ext-edit] Start inline editing of current node title.
 *
 * @alias FancytreeNode#editStart
 * @requires Fancytree
 */
$.ui.fancytree._FancytreeNodeClass.prototype.editStart = function(){
	var $input,
		node = this,
		tree = this.tree,
		local = tree.ext.edit,
		instOpts = tree.options.edit,
		$title = $(".fancytree-title", node.span),
		eventData = {
			node: node,
			tree: tree,
			options: tree.options,
			isNew: $(node[tree.statusClassPropName]).hasClass("fancytree-edit-new"),
			orgTitle: node.title,
			input: null,
			dirty: false
			};

	// beforeEdit may want to modify the title before editing
	if( instOpts.beforeEdit.call(node, {type: "beforeEdit"}, eventData) === false ) {
		return false;
	}
	$.ui.fancytree.assert(!local.currentNode, "recursive edit");
	local.currentNode = this;
	local.eventData = eventData;

	// Disable standard Fancytree mouse- and key handling
	tree.widget._unbind();
	// #116: ext-dnd prevents the blur event, so we have to catch outer clicks
	$(document).on("mousedown.fancytree-edit", function(event){
		if( ! $(event.target).hasClass("fancytree-edit-input") ){
			node.editEnd(true, event);
		}
	});

	// Replace node with <input>
	$input = $("<input />", {
		"class": "fancytree-edit-input",
		type: "text",
		value: tree.options.escapeTitles ? eventData.orgTitle : unescapeHtml(eventData.orgTitle)
	});
	local.eventData.input = $input;
	if ( instOpts.adjustWidthOfs != null ) {
		$input.width($title.width() + instOpts.adjustWidthOfs);
	}
	if ( instOpts.inputCss != null ) {
		$input.css(instOpts.inputCss);
	}

	$title.html($input);

	// Focus <input> and bind keyboard handler
	$input
		.focus()
		.change(function(event){
			$input.addClass("fancytree-edit-dirty");
		}).keydown(function(event){
			switch( event.which ) {
			case $.ui.keyCode.ESCAPE:
				node.editEnd(false, event);
				break;
			case $.ui.keyCode.ENTER:
				node.editEnd(true, event);
				return false; // so we don't start editmode on Mac
			}
			event.stopPropagation();
		}).blur(function(event){
			return node.editEnd(true, event);
		});

	instOpts.edit.call(node, {type: "edit"}, eventData);
};


/**
 * [ext-edit] Stop inline editing.
 * @param {Boolean} [applyChanges=false] false: cancel edit, true: save (if modified)
 * @alias FancytreeNode#editEnd
 * @requires jquery.fancytree.edit.js
 */
$.ui.fancytree._FancytreeNodeClass.prototype.editEnd = function(applyChanges, _event){
	var newVal,
		node = this,
		tree = this.tree,
		local = tree.ext.edit,
		eventData = local.eventData,
		instOpts = tree.options.edit,
		$title = $(".fancytree-title", node.span),
		$input = $title.find("input.fancytree-edit-input");

	if( instOpts.trim ) {
		$input.val($.trim($input.val()));
	}
	newVal = $input.val();

	eventData.dirty = ( newVal !== node.title );
	eventData.originalEvent = _event;

	// Find out, if saving is required
	if( applyChanges === false ) {
		// If true/false was passed, honor this (except in rename mode, if unchanged)
		eventData.save = false;
	} else if( eventData.isNew ) {
		// In create mode, we save everyting, except for empty text
		eventData.save = (newVal !== "");
	} else {
		// In rename mode, we save everyting, except for empty or unchanged text
		eventData.save = eventData.dirty && (newVal !== "");
	}
	// Allow to break (keep editor open), modify input, or re-define data.save
	if( instOpts.beforeClose.call(node, {type: "beforeClose"}, eventData) === false){
		return false;
	}
	if( eventData.save && instOpts.save.call(node, {type: "save"}, eventData) === false){
		return false;
	}
	$input
		.removeClass("fancytree-edit-dirty")
		.unbind();
	// Unbind outer-click handler
	$(document).off(".fancytree-edit");

	if( eventData.save ) {
		// # 171: escape user input (not required if global escaping is on)
		node.setTitle( tree.options.escapeTitles ? newVal : escapeHtml(newVal) );
		node.setFocus();
	}else{
		if( eventData.isNew ) {
			node.remove();
			node = eventData.node = null;
			local.relatedNode.setFocus();
		} else {
			node.renderTitle();
			node.setFocus();
		}
	}
	local.eventData = null;
	local.currentNode = null;
	local.relatedNode = null;
	// Re-enable mouse and keyboard handling
	tree.widget._bind();
	// Set keyboard focus, even if setFocus() claims 'nothing to do'
	$(tree.$container).focus();
	eventData.input = null;
	instOpts.close.call(node, {type: "close"}, eventData);
	return true;
};


/**
* [ext-edit] Create a new child or sibling node and start edit mode.
*
* @param {String} [mode='child'] 'before', 'after', or 'child'
* @param {Object} [init] NodeData (or simple title string)
* @alias FancytreeNode#editCreateNode
* @requires jquery.fancytree.edit.js
* @since 2.4
*/
$.ui.fancytree._FancytreeNodeClass.prototype.editCreateNode = function(mode, init){
	var newNode,
		tree = this.tree,
		self = this;

	mode = mode || "child";
	if( init == null ) {
		init = { title: "" };
	} else if( typeof init === "string" ) {
		init = { title: init };
	} else {
		$.ui.fancytree.assert($.isPlainObject(init));
	}
	// Make sure node is expanded (and loaded) in 'child' mode
	if( mode === "child" && !this.isExpanded() && this.hasChildren() !== false ) {
		this.setExpanded().done(function(){
			self.editCreateNode(mode, init);
		});
		return;
	}
	newNode = this.addNode(init, mode);

	// #644: Don't filter new nodes.
	newNode.match = true;
	$(newNode[tree.statusClassPropName])
		.removeClass("fancytree-hide")
		.addClass("fancytree-match");

	newNode.makeVisible(/*{noAnimation: true}*/).done(function(){
		$(newNode[tree.statusClassPropName]).addClass("fancytree-edit-new");
		self.tree.ext.edit.relatedNode = self;
		newNode.editStart();
	});
};


/**
 * [ext-edit] Check if any node in this tree  in edit mode.
 *
 * @returns {FancytreeNode | null}
 * @alias Fancytree#isEditing
 * @requires jquery.fancytree.edit.js
 */
$.ui.fancytree._FancytreeClass.prototype.isEditing = function(){
	return this.ext.edit ? this.ext.edit.currentNode : null;
};


/**
 * [ext-edit] Check if this node is in edit mode.
 * @returns {Boolean} true if node is currently beeing edited
 * @alias FancytreeNode#isEditing
 * @requires jquery.fancytree.edit.js
 */
$.ui.fancytree._FancytreeNodeClass.prototype.isEditing = function(){
	return this.tree.ext.edit ? this.tree.ext.edit.currentNode === this : false;
};


/*******************************************************************************
 * Extension code
 */
$.ui.fancytree.registerExtension({
	name: "edit",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		adjustWidthOfs: 4,   // null: don't adjust input size to content
		allowEmpty: false,   // Prevent empty input
		inputCss: {minWidth: "3em"},
		// triggerCancel: ["esc", "tab", "click"],
		// triggerStart: ["f2", "dblclick", "shift+click", "mac+enter"],
		triggerStart: ["f2", "shift+click", "mac+enter"],
		trim: true,          // Trim whitespace before save
		// Events:
		beforeClose: $.noop, // Return false to prevent cancel/save (data.input is available)
		beforeEdit: $.noop,  // Return false to prevent edit mode
		close: $.noop,       // Editor was removed
		edit: $.noop,        // Editor was opened (available as data.input)
//		keypress: $.noop,    // Not yet implemented
		save: $.noop         // Save data.input.val() or return false to keep editor open
	},
	// Local attributes
	currentNode: null,

	treeInit: function(ctx){
		this._superApply(arguments);
		this.$container.addClass("fancytree-ext-edit");
	},
	nodeClick: function(ctx) {
		if( $.inArray("shift+click", ctx.options.edit.triggerStart) >= 0 ){
			if( ctx.originalEvent.shiftKey ){
				ctx.node.editStart();
				return false;
			}
		}
		return this._superApply(arguments);
	},
	nodeDblclick: function(ctx) {
		if( $.inArray("dblclick", ctx.options.edit.triggerStart) >= 0 ){
			ctx.node.editStart();
			return false;
		}
		return this._superApply(arguments);
	},
	nodeKeydown: function(ctx) {
		switch( ctx.originalEvent.which ) {
		case 113: // [F2]
			if( $.inArray("f2", ctx.options.edit.triggerStart) >= 0 ){
				ctx.node.editStart();
				return false;
			}
			break;
		case $.ui.keyCode.ENTER:
			if( $.inArray("mac+enter", ctx.options.edit.triggerStart) >= 0 && isMac ){
				ctx.node.editStart();
				return false;
			}
			break;
		}
		return this._superApply(arguments);
	}
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.filter.js
 *
 * Remove or highlight tree nodes, based on a filter.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";


/*******************************************************************************
 * Private functions and variables
 */

var KeyNoData = "__not_found__",
	escapeHtml = $.ui.fancytree.escapeHtml;

function _escapeRegex(str){
	/*jshint regexdash:true */
	return (str + "").replace(/([.?*+\^\$\[\]\\(){}|-])/g, "\\$1");
}

function extractHtmlText(s){
	if( s.indexOf(">") >= 0 ) {
		return $("<div/>").html(s).text();
	}
	return s;
}

$.ui.fancytree._FancytreeClass.prototype._applyFilterImpl = function(filter, branchMode, _opts){
	var match, statusNode, re, reHighlight,
		count = 0,
		treeOpts = this.options,
		escapeTitles = treeOpts.escapeTitles,
		prevAutoCollapse = treeOpts.autoCollapse,
		opts = $.extend({}, treeOpts.filter, _opts),
		hideMode = opts.mode === "hide",
		leavesOnly = !!opts.leavesOnly && !branchMode;

	// Default to 'match title substring (not case sensitive)'
	if(typeof filter === "string"){
		// console.log("rex", filter.split('').join('\\w*').replace(/\W/, ""))
		if( opts.fuzzy ) {
			// See https://codereview.stackexchange.com/questions/23899/faster-javascript-fuzzy-string-matching-function/23905#23905
			// and http://www.quora.com/How-is-the-fuzzy-search-algorithm-in-Sublime-Text-designed
			// and http://www.dustindiaz.com/autocomplete-fuzzy-matching
			match = filter.split("").reduce(function(a, b) {
				return a + "[^" + b + "]*" + b;
			});
		} else {
			match = _escapeRegex(filter); // make sure a '.' is treated literally
		}
		re = new RegExp(".*" + match + ".*", "i");
		reHighlight = new RegExp(_escapeRegex(filter), "gi");
		filter = function(node){
			var display,
				text = escapeTitles ? node.title : extractHtmlText(node.title),
				res = !!re.test(text);

			if( res && opts.highlight ) {
				display = escapeTitles ? escapeHtml(node.title) : text;
				node.titleWithHighlight = display.replace(reHighlight, function(s){
					return "<mark>" + s + "</mark>";
				});
				// node.debug("filter", escapeTitles, text, node.titleWithHighlight);
			}
			return res;
		};
	}

	this.enableFilter = true;
	this.lastFilterArgs = arguments;

	this.$div.addClass("fancytree-ext-filter");
	if( hideMode ){
		this.$div.addClass("fancytree-ext-filter-hide");
	} else {
		this.$div.addClass("fancytree-ext-filter-dimm");
	}
	this.$div.toggleClass("fancytree-ext-filter-hide-expanders", !!opts.hideExpanders);
	// Reset current filter
	this.visit(function(node){
		delete node.match;
		delete node.titleWithHighlight;
		node.subMatchCount = 0;
	});
	statusNode = this.getRootNode()._findDirectChild(KeyNoData);
	if( statusNode ) {
		statusNode.remove();
	}

	// Adjust node.hide, .match, and .subMatchCount properties
	treeOpts.autoCollapse = false;  // #528

	this.visit(function(node){
		if ( leavesOnly && node.children != null ) {
			return;
		}
		var res = filter(node),
			matchedByBranch = false;

		if( res === "skip" ) {
			node.visit(function(c){
				c.match = false;
			}, true);
			return "skip";
		}
		if( !res && (branchMode || res === "branch") && node.parent.match ) {
			res = true;
			matchedByBranch = true;
		}
		if( res ) {
			count++;
			node.match = true;
			node.visitParents(function(p){
				p.subMatchCount += 1;
				// Expand match (unless this is no real match, but only a node in a matched branch)
				if( opts.autoExpand && !matchedByBranch && !p.expanded ) {
					p.setExpanded(true, {noAnimation: true, noEvents: true, scrollIntoView: false});
					p._filterAutoExpanded = true;
				}
			});
		}
	});
	treeOpts.autoCollapse = prevAutoCollapse;

	if( count === 0 && opts.nodata && hideMode ) {
		statusNode = opts.nodata;
		if( $.isFunction(statusNode) ) {
			statusNode = statusNode();
		}
		if( statusNode === true ) {
			statusNode = {};
		} else if( typeof statusNode === "string" ) {
			statusNode = { title: statusNode };
		}
		statusNode = $.extend({
			statusNodeType: "nodata",
			key: KeyNoData,
			title: this.options.strings.noData
		}, statusNode);

		this.getRootNode().addNode(statusNode).match = true;
	}
	// Redraw whole tree
	this.render();
	return count;
};

/**
 * [ext-filter] Dimm or hide nodes.
 *
 * @param {function | string} filter
 * @param {boolean} [opts={autoExpand: false, leavesOnly: false}]
 * @returns {integer} count
 * @alias Fancytree#filterNodes
 * @requires jquery.fancytree.filter.js
 */
$.ui.fancytree._FancytreeClass.prototype.filterNodes = function(filter, opts) {
	if( typeof opts === "boolean" ) {
		opts = { leavesOnly: opts };
		this.warn("Fancytree.filterNodes() leavesOnly option is deprecated since 2.9.0 / 2015-04-19. Use opts.leavesOnly instead.");
	}
	return this._applyFilterImpl(filter, false, opts);
};

/**
 * @deprecated
 */
$.ui.fancytree._FancytreeClass.prototype.applyFilter = function(filter){
	this.warn("Fancytree.applyFilter() is deprecated since 2.1.0 / 2014-05-29. Use .filterNodes() instead.");
	return this.filterNodes.apply(this, arguments);
};

/**
 * [ext-filter] Dimm or hide whole branches.
 *
 * @param {function | string} filter
 * @param {boolean} [opts={autoExpand: false}]
 * @returns {integer} count
 * @alias Fancytree#filterBranches
 * @requires jquery.fancytree.filter.js
 */
$.ui.fancytree._FancytreeClass.prototype.filterBranches = function(filter, opts){
	return this._applyFilterImpl(filter, true, opts);
};


/**
 * [ext-filter] Reset the filter.
 *
 * @alias Fancytree#clearFilter
 * @requires jquery.fancytree.filter.js
 */
$.ui.fancytree._FancytreeClass.prototype.clearFilter = function(){
	var $title,
		statusNode = this.getRootNode()._findDirectChild(KeyNoData),
		escapeTitles = this.options.escapeTitles,
		enhanceTitle = this.options.enhanceTitle;

	if( statusNode ) {
		statusNode.remove();
	}
	this.visit(function(node){
		if( node.match ) {  // #491
			$title = $(">span.fancytree-title", node.span);
			if( escapeTitles ) {
				$title.text(node.title);
			} else {
				$title.html(node.title);
			}
			if( enhanceTitle ) {
				enhanceTitle({type: "enhanceTitle"}, {node: node, $title: $title});
			}
		}
		delete node.match;
		delete node.subMatchCount;
		delete node.titleWithHighlight;
		if ( node.$subMatchBadge ) {
			node.$subMatchBadge.remove();
			delete node.$subMatchBadge;
		}
		if( node._filterAutoExpanded && node.expanded ) {
			node.setExpanded(false, {noAnimation: true, noEvents: true, scrollIntoView: false});
		}
		delete node._filterAutoExpanded;
	});
	this.enableFilter = false;
	this.lastFilterArgs = null;
	this.$div.removeClass("fancytree-ext-filter fancytree-ext-filter-dimm fancytree-ext-filter-hide");
	this.render();
};


/**
 * [ext-filter] Return true if a filter is currently applied.
 *
 * @returns {Boolean}
 * @alias Fancytree#isFilterActive
 * @requires jquery.fancytree.filter.js
 * @since 2.13
 */
$.ui.fancytree._FancytreeClass.prototype.isFilterActive = function(){
	return !!this.enableFilter;
};


/**
 * [ext-filter] Return true if this node is matched by current filter (or no filter is active).
 *
 * @returns {Boolean}
 * @alias FancytreeNode#isMatched
 * @requires jquery.fancytree.filter.js
 * @since 2.13
 */
$.ui.fancytree._FancytreeNodeClass.prototype.isMatched = function(){
	return !(this.tree.enableFilter && !this.match);
};


/*******************************************************************************
 * Extension code
 */
$.ui.fancytree.registerExtension({
	name: "filter",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		autoApply: true,   // Re-apply last filter if lazy data is loaded
		autoExpand: false, // Expand all branches that contain matches while filtered
		counter: true,     // Show a badge with number of matching child nodes near parent icons
		fuzzy: false,      // Match single characters in order, e.g. 'fb' will match 'FooBar'
		hideExpandedCounter: true,  // Hide counter badge if parent is expanded
		hideExpanders: false,       // Hide expanders if all child nodes are hidden by filter
		highlight: true,   // Highlight matches by wrapping inside <mark> tags
		leavesOnly: false, // Match end nodes only
		nodata: true,      // Display a 'no data' status node if result is empty
		mode: "dimm"       // Grayout unmatched nodes (pass "hide" to remove unmatched node instead)
	},
	nodeLoadChildren: function(ctx, source) {
		return this._superApply(arguments).done(function() {
			if( ctx.tree.enableFilter && ctx.tree.lastFilterArgs && ctx.options.filter.autoApply ) {
				ctx.tree._applyFilterImpl.apply(ctx.tree, ctx.tree.lastFilterArgs);
			}
		});
	},
	nodeSetExpanded: function(ctx, flag, callOpts) {
		delete ctx.node._filterAutoExpanded;
		// Make sure counter badge is displayed again, when node is beeing collapsed
		if( !flag && ctx.options.filter.hideExpandedCounter && ctx.node.$subMatchBadge ) {
			ctx.node.$subMatchBadge.show();
		}
		return this._superApply(arguments);
	},
	nodeRenderStatus: function(ctx) {
		// Set classes for current status
		var res,
			node = ctx.node,
			tree = ctx.tree,
			opts = ctx.options.filter,
			$title = $("span.fancytree-title", node.span),
			$span = $(node[tree.statusClassPropName]),
			enhanceTitle = ctx.options.enhanceTitle,
			escapeTitles = ctx.options.escapeTitles;

		res = this._superApply(arguments);
		// nothing to do, if node was not yet rendered
		if( !$span.length || !tree.enableFilter ) {
			return res;
		}
		$span
			.toggleClass("fancytree-match", !!node.match)
			.toggleClass("fancytree-submatch", !!node.subMatchCount)
			.toggleClass("fancytree-hide", !(node.match || node.subMatchCount));
		// Add/update counter badge
		if( opts.counter && node.subMatchCount && (!node.isExpanded() || !opts.hideExpandedCounter) ) {
			if( !node.$subMatchBadge ) {
				node.$subMatchBadge = $("<span class='fancytree-childcounter'/>");
				$("span.fancytree-icon, span.fancytree-custom-icon", node.span).append(node.$subMatchBadge);
			}
			node.$subMatchBadge.show().text(node.subMatchCount);
		} else if ( node.$subMatchBadge ) {
			node.$subMatchBadge.hide();
		}
		// node.debug("nodeRenderStatus", node.titleWithHighlight, node.title)
		if( !node.isEditing || !node.isEditing()){
			if( node.titleWithHighlight ) {
				$title.html(node.titleWithHighlight);
			} else if ( escapeTitles ) {
				$title.text(node.title);
			} else {
				$title.html(node.title);
			}
			if( enhanceTitle ) {
				enhanceTitle({type: "enhanceTitle"}, {node: node, $title: $title});
			}
		}
		return res;
	}
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.glyph.js
 *
 * Use glyph fonts as instead of icon sprites.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";

/* *****************************************************************************
 * Private functions and variables
 */

function _getIcon(opts, type){
	return opts.map[type];
}

$.ui.fancytree.registerExtension({
	name: "glyph",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		map: {
			// Samples from Font Awesome 3.2
			//   http://fortawesome.github.io/Font-Awesome/3.2.1/icons/
			// See here for alternatives:
			//   http://fortawesome.github.io/Font-Awesome/icons/
			//   http://getbootstrap.com/components/
			checkbox: "icon-check-empty",
			checkboxSelected: "icon-check",
			checkboxUnknown: "icon-check icon-muted",
			error: "icon-exclamation-sign",
			expanderClosed: "icon-caret-right",
			expanderLazy: "icon-angle-right",
			expanderOpen: "icon-caret-down",
			nodata: "icon-meh",
			noExpander: "",
			dragHelper: "icon-caret-right",
			dropMarker: "icon-caret-right",
			// Default node icons.
			// (Use tree.options.icon callback to define custom icons
			// based on node data)
			doc: "icon-file-alt",
			docOpen: "icon-file-alt",
			loading: "icon-refresh icon-spin",
			folder: "icon-folder-close-alt",
			folderOpen: "icon-folder-open-alt"
		}
	},

	treeInit: function(ctx){
		var tree = ctx.tree;
		this._superApply(arguments);
		tree.$container.addClass("fancytree-ext-glyph");
	},
	nodeRenderStatus: function(ctx) {
		var icon, res, span,
			node = ctx.node,
			$span = $(node.span),
			opts = ctx.options.glyph,
			map = opts.map;

		res = this._superApply(arguments);

		if( node.isRoot() ){
			return res;
		}
		span = $span.children("span.fancytree-expander").get(0);
		if( span ){
			// if( node.isLoading() ){
				// icon = "loading";
			if( node.expanded && node.hasChildren() ){
				icon = "expanderOpen";
			}else if( node.isUndefined() ){
				icon = "expanderLazy";
			}else if( node.hasChildren() ){
				icon = "expanderClosed";
			}else{
				icon = "noExpander";
			}
			span.className = "fancytree-expander " + map[icon];
		}

		if( node.tr ){
			span = $("td", node.tr).find("span.fancytree-checkbox").get(0);
		}else{
			span = $span.children("span.fancytree-checkbox").get(0);
		}
		if( span ){
			icon = node.selected ? "checkboxSelected" : (node.partsel ? "checkboxUnknown" : "checkbox");
			span.className = "fancytree-checkbox " + map[icon];
		}

		// Standard icon (note that this does not match .fancytree-custom-icon,
		// that might be set by opts.icon callbacks)
		span = $span.children("span.fancytree-icon").get(0);
		if( span ){
			if( node.statusNodeType ){
				icon = _getIcon(opts, node.statusNodeType); // loading, error
			}else if( node.folder ){
				icon = node.expanded && node.hasChildren() ? _getIcon(opts, "folderOpen") : _getIcon(opts, "folder");
			}else{
				icon = node.expanded ? _getIcon(opts, "docOpen") : _getIcon(opts, "doc");
			}
			span.className = "fancytree-icon " + icon;
		}
		return res;
	},
	nodeSetStatus: function(ctx, status, message, details) {
		var res, span,
			opts = ctx.options.glyph,
			node = ctx.node;

		res = this._superApply(arguments);

		if( status === "error" || status === "loading" || status === "nodata" ){
			if(node.parent){
				span = $("span.fancytree-expander", node.span).get(0);
				if( span ) {
					span.className = "fancytree-expander " + _getIcon(opts, status);
				}
			}else{ //
				span = $(".fancytree-statusnode-" + status, node[this.nodeContainerAttrName])
					.find("span.fancytree-icon").get(0);
				if( span ) {
					span.className = "fancytree-icon " + _getIcon(opts, status);
				}
			}
		}
		return res;
	}
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.gridnav.js
 *
 * Support keyboard navigation for trees with embedded input controls.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";


/*******************************************************************************
 * Private functions and variables
 */

// Allow these navigation keys even when input controls are focused

var	KC = $.ui.keyCode,
	// which keys are *not* handled by embedded control, but passed to tree
	// navigation handler:
	NAV_KEYS = {
		"text": [KC.UP, KC.DOWN],
		"checkbox": [KC.UP, KC.DOWN, KC.LEFT, KC.RIGHT],
		"link": [KC.UP, KC.DOWN, KC.LEFT, KC.RIGHT],
		"radiobutton": [KC.UP, KC.DOWN, KC.LEFT, KC.RIGHT],
		"select-one": [KC.LEFT, KC.RIGHT],
		"select-multiple": [KC.LEFT, KC.RIGHT]
	};


/* Calculate TD column index (considering colspans).*/
function getColIdx($tr, $td) {
	var colspan,
		td = $td.get(0),
		idx = 0;

	$tr.children().each(function () {
		if( this === td ) {
			return false;
		}
		colspan = $(this).prop("colspan");
		idx += colspan ? colspan : 1;
	});
	return idx;
}


/* Find TD at given column index (considering colspans).*/
function findTdAtColIdx($tr, colIdx) {
	var colspan,
		res = null,
		idx = 0;

	$tr.children().each(function () {
		if( idx >= colIdx ) {
			res = $(this);
			return false;
		}
		colspan = $(this).prop("colspan");
		idx += colspan ? colspan : 1;
	});
	return res;
}


/* Find adjacent cell for a given direction. Skip empty cells and consider merged cells */
function findNeighbourTd($target, keyCode){
	var $tr, colIdx,
		$td = $target.closest("td"),
		$tdNext = null;

	switch( keyCode ){
		case KC.LEFT:
			$tdNext = $td.prev();
			break;
		case KC.RIGHT:
			$tdNext = $td.next();
			break;
		case KC.UP:
		case KC.DOWN:
			$tr = $td.parent();
			colIdx = getColIdx($tr, $td);
			while( true ) {
				$tr = (keyCode === KC.UP) ? $tr.prev() : $tr.next();
				if( !$tr.length ) {
					break;
				}
				// Skip hidden rows
				if( $tr.is(":hidden") ) {
					continue;
				}
				// Find adjacent cell in the same column
				$tdNext = findTdAtColIdx($tr, colIdx);
				// Skip cells that don't conatain a focusable element
				if( $tdNext && $tdNext.find(":input,a").length ) {
					break;
				}
			}
			break;
	}
	return $tdNext;
}


/*******************************************************************************
 * Extension code
 */
$.ui.fancytree.registerExtension({
	name: "gridnav",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		autofocusInput:   false,  // Focus first embedded input if node gets activated
		handleCursorKeys: true   // Allow UP/DOWN in inputs to move to prev/next node
	},

	treeInit: function(ctx){
		// gridnav requires the table extension to be loaded before itself
		this._requireExtension("table", true, true);
		this._superApply(arguments);

		this.$container.addClass("fancytree-ext-gridnav");

		// Activate node if embedded input gets focus (due to a click)
		this.$container.on("focusin", function(event){
			var ctx2,
				node = $.ui.fancytree.getNode(event.target);

			if( node && !node.isActive() ){
				// Call node.setActive(), but also pass the event
				ctx2 = ctx.tree._makeHookContext(node, event);
				ctx.tree._callHook("nodeSetActive", ctx2, true);
			}
		});
	},
	nodeSetActive: function(ctx, flag) {
		var $outer,
			opts = ctx.options.gridnav,
			node = ctx.node,
			event = ctx.originalEvent || {},
			triggeredByInput = $(event.target).is(":input");

		flag = (flag !== false);

		this._superApply(arguments);

		if( flag ){
			if( ctx.options.titlesTabbable ){
				if( !triggeredByInput ) {
					$(node.span).find("span.fancytree-title").focus();
					node.setFocus();
				}
				// If one node is tabbable, the container no longer needs to be
				ctx.tree.$container.attr("tabindex", "-1");
				// ctx.tree.$container.removeAttr("tabindex");
			} else if( opts.autofocusInput && !triggeredByInput ){
				// Set focus to input sub input (if node was clicked, but not
				// when TAB was pressed )
				$outer = $(node.tr || node.span);
				$outer.find(":input:enabled:first").focus();
			}
		}
	},
	nodeKeydown: function(ctx) {
		var inputType, handleKeys, $td,
			opts = ctx.options.gridnav,
			event = ctx.originalEvent,
			$target = $(event.target);

		if( $target.is(":input:enabled") ) {
			inputType = $target.prop("type");
		} else if( $target.is("a") ) {
			inputType = "link";
		}
		// ctx.tree.debug("ext-gridnav nodeKeydown", event, inputType);

		if( inputType && opts.handleCursorKeys ){
			handleKeys = NAV_KEYS[inputType];
			if( handleKeys && $.inArray(event.which, handleKeys) >= 0 ){
				$td = findNeighbourTd($target, event.which);
				if( $td && $td.length ) {
					// ctx.node.debug("ignore keydown in input", event.which, handleKeys);
					$td.find(":input:enabled,a").focus();
					// Prevent Fancytree default navigation
					return false;
				}
			}
			return true;
		}
		// ctx.tree.debug("ext-gridnav NOT HANDLED", event, inputType);
		return this._superApply(arguments);
	}
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.persist.js
 *
 * Persist tree status in cookiesRemove or highlight tree nodes, based on a filter.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * @depends: js-cookie or jquery-cookie
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";
/* global Cookies:false */

/*******************************************************************************
 * Private functions and variables
 */
var cookieGetter, cookieRemover, cookieSetter,
	_assert = $.ui.fancytree.assert,
	ACTIVE = "active",
	EXPANDED = "expanded",
	FOCUS = "focus",
	SELECTED = "selected";

if( typeof Cookies === "function" ) {
	// Assume https://github.com/js-cookie/js-cookie
	cookieSetter = Cookies.set;
	cookieGetter = Cookies.get;
	cookieRemover = Cookies.remove;
} else {
	// Fall back to https://github.com/carhartl/jquery-cookie
	cookieSetter = cookieGetter = $.cookie;
	cookieRemover = $.removeCookie;
}

/* Recursively load lazy nodes
 * @param {string} mode 'load', 'expand', false
 */
function _loadLazyNodes(tree, local, keyList, mode, dfd) {
	var i, key, l, node,
		foundOne = false,
		deferredList = [],
		missingKeyList = [];

	keyList = keyList || [];
	dfd = dfd || $.Deferred();

	for( i=0, l=keyList.length; i<l; i++ ) {
		key = keyList[i];
		node = tree.getNodeByKey(key);
		if( node ) {
			if( mode && node.isUndefined() ) {
				foundOne = true;
				tree.debug("_loadLazyNodes: " + node + " is lazy: loading...");
				if( mode === "expand" ) {
					deferredList.push(node.setExpanded());
				} else {
					deferredList.push(node.load());
				}
			} else {
				tree.debug("_loadLazyNodes: " + node + " already loaded.");
				node.setExpanded();
			}
		} else {
			missingKeyList.push(key);
			tree.debug("_loadLazyNodes: " + node + " was not yet found.");
		}
	}

	$.when.apply($, deferredList).always(function(){
		// All lazy-expands have finished
		if( foundOne && missingKeyList.length > 0 ) {
			// If we read new nodes from server, try to resolve yet-missing keys
			_loadLazyNodes(tree, local, missingKeyList, mode, dfd);
		} else {
			if( missingKeyList.length ) {
				tree.warn("_loadLazyNodes: could not load those keys: ", missingKeyList);
				for( i=0, l=missingKeyList.length; i<l; i++ ) {
					key = keyList[i];
					local._appendKey(EXPANDED, keyList[i], false);
				}
			}
			dfd.resolve();
		}
	});
	return dfd;
}


/**
 * [ext-persist] Remove persistence cookies of the given type(s).
 * Called like
 *     $("#tree").fancytree("getTree").clearCookies("active expanded focus selected");
 *
 * @alias Fancytree#clearCookies
 * @requires jquery.fancytree.persist.js
 */
$.ui.fancytree._FancytreeClass.prototype.clearCookies = function(types){
	var local = this.ext.persist,
		prefix = local.cookiePrefix;

	types = types || "active expanded focus selected";
	if(types.indexOf(ACTIVE) >= 0){
		local._data(prefix + ACTIVE, null);
	}
	if(types.indexOf(EXPANDED) >= 0){
		local._data(prefix + EXPANDED, null);
	}
	if(types.indexOf(FOCUS) >= 0){
		local._data(prefix + FOCUS, null);
	}
	if(types.indexOf(SELECTED) >= 0){
		local._data(prefix + SELECTED, null);
	}
};


/**
 * [ext-persist] Return persistence information from cookies
 *
 * Called like
 *     $("#tree").fancytree("getTree").getPersistData();
 *
 * @alias Fancytree#getPersistData
 * @requires jquery.fancytree.persist.js
 */
$.ui.fancytree._FancytreeClass.prototype.getPersistData = function(){
	var local = this.ext.persist,
		prefix = local.cookiePrefix,
		delim = local.cookieDelimiter,
		res = {};

	res[ACTIVE] = local._data(prefix + ACTIVE);
	res[EXPANDED] = (local._data(prefix + EXPANDED) || "").split(delim);
	res[SELECTED] = (local._data(prefix + SELECTED) || "").split(delim);
	res[FOCUS] = local._data(prefix + FOCUS);
	return res;
};


/* *****************************************************************************
 * Extension code
 */
$.ui.fancytree.registerExtension({
	name: "persist",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		cookieDelimiter: "~",
		cookiePrefix: undefined, // 'fancytree-<treeId>-' by default
		cookie: {
			raw: false,
			expires: "",
			path: "",
			domain: "",
			secure: false
		},
		expandLazy: false,     // true: recursively expand and load lazy nodes
		fireActivate: true,    // false: suppress `activate` event after active node was restored
		overrideSource: true,  // true: cookie takes precedence over `source` data attributes.
		store: "auto",         // 'cookie': force cookie, 'local': force localStore, 'session': force sessionStore
		types: "active expanded focus selected"
	},

	/* Generic read/write string data to cookie, sessionStorage or localStorage. */
	_data: function(key, value){
		var ls = this._local.localStorage; // null, sessionStorage, or localStorage

		if( value === undefined ) {
			return ls ? ls.getItem(key) : cookieGetter(key);
		} else if ( value === null ) {
			if( ls ) {
				ls.removeItem(key);
			} else {
				cookieRemover(key);
			}
		} else {
			if( ls ) {
				ls.setItem(key, value);
			} else {
				cookieSetter(key, value, this.options.persist.cookie);
			}
		}
	},

	/* Append `key` to a cookie. */
	_appendKey: function(type, key, flag){
		key = "" + key; // #90
		var local = this._local,
			instOpts = this.options.persist,
			delim = instOpts.cookieDelimiter,
			cookieName = local.cookiePrefix + type,
			data = local._data(cookieName),
			keyList = data ? data.split(delim) : [],
			idx = $.inArray(key, keyList);
		// Remove, even if we add a key,  so the key is always the last entry
		if(idx >= 0){
			keyList.splice(idx, 1);
		}
		// Append key to cookie
		if(flag){
			keyList.push(key);
		}
		local._data(cookieName, keyList.join(delim));
	},

	treeInit: function(ctx){
		var tree = ctx.tree,
			opts = ctx.options,
			local = this._local,
			instOpts = this.options.persist;

		// For 'auto' or 'cookie' mode, the cookie plugin must be available
		_assert((instOpts.store !== "auto" && instOpts.store !== "cookie") || cookieGetter,
			"Missing required plugin for 'persist' extension: js.cookie.js or jquery.cookie.js");

		local.cookiePrefix = instOpts.cookiePrefix || ("fancytree-" + tree._id + "-");
		local.storeActive = instOpts.types.indexOf(ACTIVE) >= 0;
		local.storeExpanded = instOpts.types.indexOf(EXPANDED) >= 0;
		local.storeSelected = instOpts.types.indexOf(SELECTED) >= 0;
		local.storeFocus = instOpts.types.indexOf(FOCUS) >= 0;
		if( instOpts.store === "cookie" || !window.localStorage ) {
			local.localStorage = null;
		} else {
			local.localStorage = (instOpts.store === "local") ? window.localStorage : window.sessionStorage;
		}

		// Bind init-handler to apply cookie state
		tree.$div.bind("fancytreeinit", function(event){
			if ( tree._triggerTreeEvent("beforeRestore", null, {}) === false ) {
				return;
			}

			var cookie, dfd, i, keyList, node,
				prevFocus = local._data(local.cookiePrefix + FOCUS), // record this before node.setActive() overrides it;
				noEvents = instOpts.fireActivate === false;

			// tree.debug("document.cookie:", document.cookie);

			cookie = local._data(local.cookiePrefix + EXPANDED);
			keyList = cookie && cookie.split(instOpts.cookieDelimiter);

			if( local.storeExpanded ) {
				// Recursively load nested lazy nodes if expandLazy is 'expand' or 'load'
				// Also remove expand-cookies for unmatched nodes
				dfd = _loadLazyNodes(tree, local, keyList, instOpts.expandLazy ? "expand" : false , null);
			} else {
				// nothing to do
				dfd = new $.Deferred().resolve();
			}

			dfd.done(function(){
				if(local.storeSelected){
					cookie = local._data(local.cookiePrefix + SELECTED);
					if(cookie){
						keyList = cookie.split(instOpts.cookieDelimiter);
						for(i=0; i<keyList.length; i++){
							node = tree.getNodeByKey(keyList[i]);
							if(node){
								if(node.selected === undefined || instOpts.overrideSource && (node.selected === false)){
//									node.setSelected();
									node.selected = true;
									node.renderStatus();
								}
							}else{
								// node is no longer member of the tree: remove from cookie also
								local._appendKey(SELECTED, keyList[i], false);
							}
						}
					}
					// In selectMode 3 we have to fix the child nodes, since we
					// only stored the selected *top* nodes
					if( tree.options.selectMode === 3 ){
						tree.visit(function(n){
							if( n.selected ) {
								n.fixSelection3AfterClick();
								return "skip";
							}
						});
					}
				}
				if(local.storeActive){
					cookie = local._data(local.cookiePrefix + ACTIVE);
					if(cookie && (opts.persist.overrideSource || !tree.activeNode)){
						node = tree.getNodeByKey(cookie);
						if(node){
							node.debug("persist: set active", cookie);
							// We only want to set the focus if the container
							// had the keyboard focus before
							node.setActive(true, {
								noFocus: true,
								noEvents: noEvents
							});
						}
					}
				}
				if(local.storeFocus && prevFocus){
					node = tree.getNodeByKey(prevFocus);
					if(node){
						// node.debug("persist: set focus", cookie);
						if( tree.options.titlesTabbable ) {
							$(node.span).find(".fancytree-title").focus();
						} else {
							$(tree.$container).focus();
						}
						// node.setFocus();
					}
				}
				tree._triggerTreeEvent("restore", null, {});
			});
		});
		// Init the tree
		return this._superApply(arguments);
	},
	nodeSetActive: function(ctx, flag, opts) {
		var res,
			local = this._local;

		flag = (flag !== false);
		res = this._superApply(arguments);

		if(local.storeActive){
			local._data(local.cookiePrefix + ACTIVE, this.activeNode ? this.activeNode.key : null);
		}
		return res;
	},
	nodeSetExpanded: function(ctx, flag, opts) {
		var res,
			node = ctx.node,
			local = this._local;

		flag = (flag !== false);
		res = this._superApply(arguments);

		if(local.storeExpanded){
			local._appendKey(EXPANDED, node.key, flag);
		}
		return res;
	},
	nodeSetFocus: function(ctx, flag) {
		var res,
			local = this._local;

		flag = (flag !== false);
		res = this._superApply(arguments);

		if( local.storeFocus ) {
			local._data(local.cookiePrefix + FOCUS, this.focusNode ? this.focusNode.key : null);
		}
		return res;
	},
	nodeSetSelected: function(ctx, flag) {
		var res, selNodes,
			tree = ctx.tree,
			node = ctx.node,
			local = this._local;

		flag = (flag !== false);
		res = this._superApply(arguments);

		if(local.storeSelected){
			if( tree.options.selectMode === 3 ){
				// In selectMode 3 we only store the the selected *top* nodes.
				// De-selecting a node may also de-select some parents, so we
				// calculate the current status again
				selNodes = $.map(tree.getSelectedNodes(true), function(n){
					return n.key;
				});
				selNodes = selNodes.join(ctx.options.persist.cookieDelimiter);
				local._data(local.cookiePrefix + SELECTED, selNodes);
			} else {
				// beforeSelect can prevent the change - flag doesn't reflect the node.selected state
				local._appendKey(SELECTED, node.key, node.selected);
			}
		}
		return res;
	}
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.table.js
 *
 * Render tree as table (aka 'treegrid', 'tabletree').
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";

/* *****************************************************************************
 * Private functions and variables
 */
function _assert(cond, msg){
	msg = msg || "";
	if(!cond){
		$.error("Assertion failed " + msg);
	}
}

function insertSiblingAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/* Show/hide all rows that are structural descendants of `parent`. */
function setChildRowVisibility(parent, flag) {
	parent.visit(function(node){
		var tr = node.tr;
		// currentFlag = node.hide ? false : flag; // fix for ext-filter
		if(tr){
			tr.style.display = (node.hide || !flag) ? "none" : "";
		}
		if(!node.expanded){
			return "skip";
		}
	});
}

/* Find node that is rendered in previous row. */
function findPrevRowNode(node){
	var i, last, prev,
		parent = node.parent,
		siblings = parent ? parent.children : null;

	if(siblings && siblings.length > 1 && siblings[0] !== node){
		// use the lowest descendant of the preceeding sibling
		i = $.inArray(node, siblings);
		prev = siblings[i - 1];
		_assert(prev.tr);
		// descend to lowest child (with a <tr> tag)
		while(prev.children){
			last = prev.children[prev.children.length - 1];
			if(!last.tr){
				break;
			}
			prev = last;
		}
	}else{
		// if there is no preceding sibling, use the direct parent
		prev = parent;
	}
	return prev;
}

/* Render callback for 'wide' mode. */
// function _renderStatusNodeWide(event, data) {
// 	var node = data.node,
// 		nodeColumnIdx = data.options.table.nodeColumnIdx,
// 		$tdList = $(node.tr).find(">td");

// 	$tdList.eq(nodeColumnIdx).attr("colspan", data.tree.columnCount);
// 	$tdList.not(":eq(" + nodeColumnIdx + ")").remove();
// }


$.ui.fancytree.registerExtension({
	name: "table",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		checkboxColumnIdx: null, // render the checkboxes into the this column index (default: nodeColumnIdx)
		// customStatus: false,	 // true: generate renderColumns events for status nodes
		indentation: 16,         // indent every node level by 16px
		nodeColumnIdx: 0         // render node expander, icon, and title to this column (default: #0)
	},
	// Overide virtual methods for this extension.
	// `this`       : is this extension object
	// `this._super`: the virtual function that was overriden (member of prev. extension or Fancytree)
	treeInit: function(ctx){
		var i, columnCount, n, $row, $tbody,
			tree = ctx.tree,
			opts = ctx.options,
			tableOpts = opts.table,
			$table = tree.widget.element;

		if( tableOpts.customStatus != null ) {
			if( opts.renderStatusColumns != null) {
				$.error("The 'customStatus' option is deprecated since v2.15.0. Use 'renderStatusColumns' only instead.");
			} else {
				tree.warn("The 'customStatus' option is deprecated since v2.15.0. Use 'renderStatusColumns' instead.");
				opts.renderStatusColumns = tableOpts.customStatus;
			}
		}
		if( opts.renderStatusColumns ) {
			if( opts.renderStatusColumns === true ) {
				opts.renderStatusColumns = opts.renderColumns;
			// } else if( opts.renderStatusColumns === "wide" ) {
			// 	opts.renderStatusColumns = _renderStatusNodeWide;
			}
		}

		$table.addClass("fancytree-container fancytree-ext-table");
		tree.tbody = $table.find(">tbody")[0];
		$tbody = $(tree.tbody);

		// Prepare row templates:
		// Determine column count from table header if any
		columnCount = $("thead >tr:last >th", $table).length;
		// Read TR templates from tbody if any
		$row = $tbody.children("tr:first");
		if( $row.length ) {
			n = $row.children("td").length;
			if( columnCount && n !== columnCount ) {
				tree.warn("Column count mismatch between thead (" + columnCount + ") and tbody (" + n + "): using tbody.");
				columnCount = n;
			}
			$row = $row.clone();
		} else {
			// Only thead is defined: create default row markup
			_assert(columnCount >= 1, "Need either <thead> or <tbody> with <td> elements to determine column count.");
			$row = $("<tr />");
			for(i=0; i<columnCount; i++) {
				$row.append("<td />");
			}
		}
		$row.find(">td").eq(tableOpts.nodeColumnIdx)
			.html("<span class='fancytree-node' />");
		if( opts.aria ) {
			$row.attr("role", "row");
			$row.find("td").attr("role", "gridcell");
		}
		tree.rowFragment = document.createDocumentFragment();
		tree.rowFragment.appendChild($row.get(0));

		// // If tbody contains a second row, use this as status node template
		// $row = $tbody.children("tr:eq(1)");
		// if( $row.length === 0 ) {
		// 	tree.statusRowFragment = tree.rowFragment;
		// } else {
		// 	$row = $row.clone();
		// 	tree.statusRowFragment = document.createDocumentFragment();
		// 	tree.statusRowFragment.appendChild($row.get(0));
		// }
		//
		$tbody.empty();

		// Make sure that status classes are set on the node's <tr> elements
		tree.statusClassPropName = "tr";
		tree.ariaPropName = "tr";
		this.nodeContainerAttrName = "tr";

		// #489: make sure $container is set to <table>, even if ext-dnd is listed before ext-table
		tree.$container = $table;

		this._superApply(arguments);

		// standard Fancytree created a root UL
		$(tree.rootNode.ul).remove();
		tree.rootNode.ul = null;

		// Add container to the TAB chain
		// #577: Allow to set tabindex to "0", "-1" and ""
		this.$container.attr("tabindex", opts.tabindex);
		// this.$container.attr("tabindex", opts.tabbable ? "0" : "-1");
		if(opts.aria) {
			tree.$container
				.attr("role", "treegrid")
				.attr("aria-readonly", true);
		}
	},
	nodeRemoveChildMarkup: function(ctx) {
		var node = ctx.node;
//		node.debug("nodeRemoveChildMarkup()");
		node.visit(function(n){
			if(n.tr){
				$(n.tr).remove();
				n.tr = null;
			}
		});
	},
	nodeRemoveMarkup: function(ctx) {
		var node = ctx.node;
//		node.debug("nodeRemoveMarkup()");
		if(node.tr){
			$(node.tr).remove();
			node.tr = null;
		}
		this.nodeRemoveChildMarkup(ctx);
	},
	/* Override standard render. */
	nodeRender: function(ctx, force, deep, collapsed, _recursive) {
		var children, firstTr, i, l, newRow, prevNode, prevTr, subCtx,
			tree = ctx.tree,
			node = ctx.node,
			opts = ctx.options,
			isRootNode = !node.parent;

		if( tree._enableUpdate === false ) {
			// $.ui.fancytree.debug("*** nodeRender _enableUpdate: false");
			return;
		}
		if( !_recursive ){
			ctx.hasCollapsedParents = node.parent && !node.parent.expanded;
		}
		// $.ui.fancytree.debug("*** nodeRender " + node + ", isRoot=" + isRootNode, "tr=" + node.tr, "hcp=" + ctx.hasCollapsedParents, "parent.tr=" + (node.parent && node.parent.tr));
		if( !isRootNode ){
			if( node.tr && force ) {
				this.nodeRemoveMarkup(ctx);
			}
			if( !node.tr ) {
				if( ctx.hasCollapsedParents && !deep ) {
					// #166: we assume that the parent will be (recursively) rendered
					// later anyway.
					node.debug("nodeRender ignored due to unrendered parent");
					return;
				}
				// Create new <tr> after previous row
				// if( node.isStatusNode() ) {
				// 	newRow = tree.statusRowFragment.firstChild.cloneNode(true);
				// } else {
				newRow = tree.rowFragment.firstChild.cloneNode(true);
				// }
				prevNode = findPrevRowNode(node);
				// $.ui.fancytree.debug("*** nodeRender " + node + ": prev: " + prevNode.key);
				_assert(prevNode);
				if(collapsed === true && _recursive){
					// hide all child rows, so we can use an animation to show it later
					newRow.style.display = "none";
				}else if(deep && ctx.hasCollapsedParents){
					// also hide this row if deep === true but any parent is collapsed
					newRow.style.display = "none";
//					newRow.style.color = "red";
				}
				if(!prevNode.tr){
					_assert(!prevNode.parent, "prev. row must have a tr, or is system root");
					tree.tbody.appendChild(newRow);
				}else{
					insertSiblingAfter(prevNode.tr, newRow);
				}
				node.tr = newRow;
				if( node.key && opts.generateIds ){
					node.tr.id = opts.idPrefix + node.key;
				}
				node.tr.ftnode = node;
				if(opts.aria){
					// TODO: why doesn't this work:
//                  node.li.role = "treeitem";
					$(node.tr).attr("aria-labelledby", "ftal_" + node.key);
				}
				node.span = $("span.fancytree-node", node.tr).get(0);
				// Set icon, link, and title (normally this is only required on initial render)
				this.nodeRenderTitle(ctx);
				// Allow tweaking, binding, after node was created for the first time
//				tree._triggerNodeEvent("createNode", ctx);
				if ( opts.createNode ){
					opts.createNode.call(tree, {type: "createNode"}, ctx);
				}
			} else {
				if( force ) {
					// Set icon, link, and title (normally this is only required on initial render)
					this.nodeRenderTitle(ctx); // triggers renderColumns()
				} else {
					// Update element classes according to node state
					this.nodeRenderStatus(ctx);
				}
			}
		}
		// Allow tweaking after node state was rendered
//		tree._triggerNodeEvent("renderNode", ctx);
		if ( opts.renderNode ){
			opts.renderNode.call(tree, {type: "renderNode"}, ctx);
		}
		// Visit child nodes
		// Add child markup
		children = node.children;
		if(children && (isRootNode || deep || node.expanded)){
			for(i=0, l=children.length; i<l; i++) {
				subCtx = $.extend({}, ctx, {node: children[i]});
				subCtx.hasCollapsedParents = subCtx.hasCollapsedParents || !node.expanded;
				this.nodeRender(subCtx, force, deep, collapsed, true);
			}
		}
		// Make sure, that <tr> order matches node.children order.
		if(children && !_recursive){ // we only have to do it once, for the root branch
			prevTr = node.tr || null;
			firstTr = tree.tbody.firstChild;
			// Iterate over all descendants
			node.visit(function(n){
				if(n.tr){
					if(!n.parent.expanded && n.tr.style.display !== "none"){
						// fix after a node was dropped over a collapsed
						n.tr.style.display = "none";
						setChildRowVisibility(n, false);
					}
					if(n.tr.previousSibling !== prevTr){
						node.debug("_fixOrder: mismatch at node: " + n);
						var nextTr = prevTr ? prevTr.nextSibling : firstTr;
						tree.tbody.insertBefore(n.tr, nextTr);
					}
					prevTr = n.tr;
				}
			});
		}
		// Update element classes according to node state
		// if(!isRootNode){
		// 	this.nodeRenderStatus(ctx);
		// }
	},
	nodeRenderTitle: function(ctx, title) {
		var $cb, res,
			node = ctx.node,
			opts = ctx.options,
			isStatusNode = node.isStatusNode();

		res = this._superApply(arguments);

		if( node.isRootNode() ) {
			return res;
		}
		// Move checkbox to custom column
		if(opts.checkbox && !isStatusNode && opts.table.checkboxColumnIdx != null ){
			$cb = $("span.fancytree-checkbox", node.span); //.detach();
			$(node.tr).find("td").eq(+opts.table.checkboxColumnIdx).html($cb);
		}
		// Update element classes according to node state
		this.nodeRenderStatus(ctx);

		if( isStatusNode ) {
			if( opts.renderStatusColumns ) {
				// Let user code write column content
				opts.renderStatusColumns.call(ctx.tree, {type: "renderStatusColumns"}, ctx);
			} // else: default rendering for status node: leave other cells empty
		} else if ( opts.renderColumns ) {
			opts.renderColumns.call(ctx.tree, {type: "renderColumns"}, ctx);
		}
		return res;
	},
	nodeRenderStatus: function(ctx) {
		var indent,
			node = ctx.node,
			opts = ctx.options;

		this._superApply(arguments);

		$(node.tr).removeClass("fancytree-node");
		// indent
		indent = (node.getLevel() - 1) * opts.table.indentation;
		$(node.span).css({paddingLeft: indent + "px"});  // #460
		// $(node.span).css({marginLeft: indent + "px"});
	 },
	/* Expand node, return Deferred.promise. */
	nodeSetExpanded: function(ctx, flag, opts) {
		// flag defaults to true
		flag = (flag !== false);

		if((ctx.node.expanded && flag) || (!ctx.node.expanded && !flag)) {
			// Expanded state isn't changed - just call base implementation
			return this._superApply(arguments);
		}

		var dfd = new $.Deferred(),
			subOpts = $.extend({}, opts, {noEvents: true, noAnimation: true});

		opts = opts || {};

		function _afterExpand(ok) {
			setChildRowVisibility(ctx.node, flag);
			if( ok ) {
				if( flag && ctx.options.autoScroll && !opts.noAnimation && ctx.node.hasChildren() ) {
					// Scroll down to last child, but keep current node visible
					ctx.node.getLastChild().scrollIntoView(true, {topNode: ctx.node}).always(function(){
						if( !opts.noEvents ) {
							ctx.tree._triggerNodeEvent(flag ? "expand" : "collapse", ctx);
						}
						dfd.resolveWith(ctx.node);
					});
				} else {
					if( !opts.noEvents ) {
						ctx.tree._triggerNodeEvent(flag ? "expand" : "collapse", ctx);
					}
					dfd.resolveWith(ctx.node);
				}
			} else {
				if( !opts.noEvents ) {
					ctx.tree._triggerNodeEvent(flag ? "expand" : "collapse", ctx);
				}
				dfd.rejectWith(ctx.node);
			}
		}
		// Call base-expand with disabled  events and animation
		this._super(ctx, flag, subOpts).done(function () {
			_afterExpand(true);
		}).fail(function () {
			_afterExpand(false);
		});
		return dfd.promise();
	},
	nodeSetStatus: function(ctx, status, message, details) {
		if(status === "ok"){
			var node = ctx.node,
				firstChild = ( node.children ? node.children[0] : null );
			if ( firstChild && firstChild.isStatusNode() ) {
				$(firstChild.tr).remove();
			}
		}
		return this._superApply(arguments);
	},
	treeClear: function(ctx) {
		this.nodeRemoveChildMarkup(this._makeHookContext(this.rootNode));
		return this._superApply(arguments);
	},
	treeDestroy: function(ctx) {
		this.$container.find("tbody").empty();
		this.$source && this.$source.removeClass("ui-helper-hidden");
	}
	/*,
	treeSetFocus: function(ctx, flag) {
//	        alert("treeSetFocus" + ctx.tree.$container);
		ctx.tree.$container.focus();
		$.ui.fancytree.focusTree = ctx.tree;
	}*/
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.themeroller.js
 *
 * Enable jQuery UI ThemeRoller styles.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * @see http://jqueryui.com/themeroller/
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";

/*******************************************************************************
 * Extension code
 */
$.ui.fancytree.registerExtension({
	name: "themeroller",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		activeClass: "ui-state-active",      // Class added to active node
		// activeClass: "ui-state-highlight",
		addClass: "ui-corner-all",           // Class added to all nodes
		focusClass: "ui-state-focus",        // Class added to focused node
		hoverClass: "ui-state-hover",        // Class added to hovered node
		selectedClass: "ui-state-highlight"  // Class added to selected nodes
		// selectedClass: "ui-state-active"
	},

	treeInit: function(ctx){
		var $el = ctx.widget.element,
			opts = ctx.options.themeroller;

		this._superApply(arguments);

		if($el[0].nodeName === "TABLE"){
			$el.addClass("ui-widget ui-corner-all");
			$el.find(">thead tr").addClass("ui-widget-header");
			$el.find(">tbody").addClass("ui-widget-conent");
		}else{
			$el.addClass("ui-widget ui-widget-content ui-corner-all");
		}

		$el.delegate(".fancytree-node", "mouseenter mouseleave", function(event){
			var node = $.ui.fancytree.getNode(event.target),
				flag = (event.type === "mouseenter");

			$(node.tr ? node.tr : node.span)
				.toggleClass(opts.hoverClass + " " + opts.addClass, flag);
		});
	},
	treeDestroy: function(ctx){
		this._superApply(arguments);
		ctx.widget.element.removeClass("ui-widget ui-widget-content ui-corner-all");
	},
	nodeRenderStatus: function(ctx){
		var classes = {},
			node = ctx.node,
			$el = $(node.tr ? node.tr : node.span),
			opts = ctx.options.themeroller;

		this._superApply(arguments);
/*
		.ui-state-highlight: Class to be applied to highlighted or selected elements. Applies "highlight" container styles to an element and its child text, links, and icons.
		.ui-state-error: Class to be applied to error messaging container elements. Applies "error" container styles to an element and its child text, links, and icons.
		.ui-state-error-text: An additional class that applies just the error text color without background. Can be used on form labels for instance. Also applies error icon color to child icons.

		.ui-state-default: Class to be applied to clickable button-like elements. Applies "clickable default" container styles to an element and its child text, links, and icons.
		.ui-state-hover: Class to be applied on mouseover to clickable button-like elements. Applies "clickable hover" container styles to an element and its child text, links, and icons.
		.ui-state-focus: Class to be applied on keyboard focus to clickable button-like elements. Applies "clickable hover" container styles to an element and its child text, links, and icons.
		.ui-state-active: Class to be applied on mousedown to clickable button-like elements. Applies "clickable active" container styles to an element and its child text, links, and icons.
*/
		// Set ui-state-* class (handle the case that the same class is assigned
		// to different states)
		classes[opts.activeClass] = false;
		classes[opts.focusClass] = false;
		classes[opts.selectedClass] = false;
		if( node.isActive() ) { classes[opts.activeClass] = true; }
		if( node.hasFocus() ) { classes[opts.focusClass]  = true; }
		// activeClass takes precedence before selectedClass:
		if( node.isSelected() && !node.isActive() ) { classes[opts.selectedClass]  = true; }
		$el.toggleClass(opts.activeClass, classes[opts.activeClass]);
		$el.toggleClass(opts.focusClass, classes[opts.focusClass]);
		$el.toggleClass(opts.selectedClass, classes[opts.selectedClass]);
		// Additional classes (e.g. 'ui-corner-all')
		$el.addClass(opts.addClass);
	}
});
}(jQuery, window, document));

/*!
 * jquery.fancytree.wide.js
 * Support for 100% wide selection bars.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.20.0
 * @date 2016-11-13"P"17:49
 */

;(function($, window, document, undefined) {

"use strict";

var reNumUnit = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/; // split "1.5em" to ["1.5", "em"]

/*******************************************************************************
 * Private functions and variables
 */
// var _assert = $.ui.fancytree.assert;

/* Calculate inner width without scrollbar */
// function realInnerWidth($el) {
// 	// http://blog.jquery.com/2012/08/16/jquery-1-8-box-sizing-width-csswidth-and-outerwidth/
// //	inst.contWidth = parseFloat(this.$container.css("width"), 10);
// 	// 'Client width without scrollbar' - 'padding'
// 	return $el[0].clientWidth - ($el.innerWidth() -  parseFloat($el.css("width"), 10));
// }

/* Create a global embedded CSS style for the tree. */
function defineHeadStyleElement(id, cssText) {
	id = "fancytree-style-" + id;
	var $headStyle = $("#" + id);

	if( !cssText ) {
		$headStyle.remove();
		return null;
	}
	if( !$headStyle.length ) {
		$headStyle = $("<style />")
			.attr("id", id)
			.addClass("fancytree-style")
			.prop("type", "text/css")
			.appendTo("head");
	}
	try {
		$headStyle.html(cssText);
	} catch ( e ) {
		// fix for IE 6-8
		$headStyle[0].styleSheet.cssText = cssText;
	}
	return $headStyle;
}

/* Calculate the CSS rules that indent title spans. */
function renderLevelCss(containerId, depth, levelOfs, lineOfs, measureUnit) {
	var i,
		prefix = "#" + containerId + " span.fancytree-level-",
		rules = [];

	for(i = 0; i < depth; i++) {
		rules.push(prefix + (i + 1) + " span.fancytree-title { padding-left: " +
			(i * levelOfs + lineOfs) + measureUnit + "; }");
	}
	// Some UI animations wrap the UL inside a DIV and set position:relative on both.
	// This breaks the left:0 and padding-left:nn settings of the title
	rules.push("#" + containerId +
		" div.ui-effects-wrapper ul li span.fancytree-title " +
		"{ padding-left: 3px; position: static; width: auto; }");
	return rules.join("\n");
}


// /**
//  * [ext-wide] Recalculate the width of the selection bar after the tree container
//  * was resized.<br>
//  * May be called explicitly on container resize, since there is no resize event
//  * for DIV tags.
//  *
//  * @alias Fancytree#wideUpdate
//  * @requires jquery.fancytree.wide.js
//  */
// $.ui.fancytree._FancytreeClass.prototype.wideUpdate = function(){
// 	var inst = this.ext.wide,
// 		prevCw = inst.contWidth,
// 		prevLo = inst.lineOfs;

// 	inst.contWidth = realInnerWidth(this.$container);
// 	// Each title is precceeded by 2 or 3 icons (16px + 3 margin)
// 	//     + 1px title border and 3px title padding
// 	// TODO: use code from treeInit() below
// 	inst.lineOfs = (this.options.checkbox ? 3 : 2) * 19;
// 	if( prevCw !== inst.contWidth || prevLo !== inst.lineOfs ) {
// 		this.debug("wideUpdate: " + inst.contWidth);
// 		this.visit(function(node){
// 			node.tree._callHook("nodeRenderTitle", node);
// 		});
// 	}
// };

/*******************************************************************************
 * Extension code
 */
$.ui.fancytree.registerExtension({
	name: "wide",
	version: "2.20.0",
	// Default options for this extension.
	options: {
		iconWidth: null,  // Adjust this if @fancy-icon-width != "16px"
		iconSpacing: null, // Adjust this if @fancy-icon-spacing != "3px"
		levelOfs: null    // Adjust this if ul padding != "16px"
	},

	treeCreate: function(ctx){
		this._superApply(arguments);
		this.$container.addClass("fancytree-ext-wide");

		var containerId, cssText, iconSpacingUnit, iconWidthUnit, levelOfsUnit,
			instOpts = ctx.options.wide,
			// css sniffing
			$dummyLI = $("<li id='fancytreeTemp'><span class='fancytree-node'><span class='fancytree-icon' /><span class='fancytree-title' /></span><ul />")
				.appendTo(ctx.tree.$container),
			$dummyIcon = $dummyLI.find(".fancytree-icon"),
			$dummyUL = $dummyLI.find("ul"),
			// $dummyTitle = $dummyLI.find(".fancytree-title"),
			iconSpacing = instOpts.iconSpacing || $dummyIcon.css("margin-left"),
			iconWidth = instOpts.iconWidth || $dummyIcon.css("width"),
			levelOfs = instOpts.levelOfs || $dummyUL.css("padding-left");

		$dummyLI.remove();

		iconSpacingUnit = iconSpacing.match(reNumUnit)[2];
		iconSpacing = parseFloat(iconSpacing, 10);
		iconWidthUnit = iconWidth.match(reNumUnit)[2];
		iconWidth = parseFloat(iconWidth, 10);
		levelOfsUnit = levelOfs.match(reNumUnit)[2];
		if( iconSpacingUnit !== iconWidthUnit || levelOfsUnit !== iconWidthUnit ) {
			$.error("iconWidth, iconSpacing, and levelOfs must have the same css measure unit");
		}
		this._local.measureUnit = iconWidthUnit;
		this._local.levelOfs = parseFloat(levelOfs);
		this._local.lineOfs = (1 + (ctx.options.checkbox ? 1 : 0) + (ctx.options.icon === false ? 0 : 1)) * (iconWidth + iconSpacing) + iconSpacing;
		this._local.maxDepth = 10;

		// Get/Set a unique Id on the container (if not already exists)
		containerId = this.$container.uniqueId().attr("id");
		// Generated css rules for some levels (extended on demand)
		cssText = renderLevelCss(containerId, this._local.maxDepth,
			this._local.levelOfs, this._local.lineOfs, this._local.measureUnit);
		defineHeadStyleElement(containerId, cssText);
	},
	treeDestroy: function(ctx){
		// Remove generated css rules
		defineHeadStyleElement(this.$container.attr("id"), null);
		return this._superApply(arguments);
	},
	nodeRenderStatus: function(ctx) {
		var containerId, cssText, res,
			node = ctx.node,
			level = node.getLevel();

		res = this._superApply(arguments);
		// Generate some more level-n rules if required
		if( level > this._local.maxDepth ) {
			containerId = this.$container.attr("id");
			this._local.maxDepth *= 2;
			node.debug("Define global ext-wide css up to level " + this._local.maxDepth);
			cssText = renderLevelCss(containerId, this._local.maxDepth,
				this._local.levelOfs, this._local.lineOfs, this._local.measureUnit);
			defineHeadStyleElement(containerId, cssText);
		}
		// Add level-n class to apply indentation padding.
		// (Setting element style would not work, since it cannot easily be
		// overriden while animations run)
		$(node.span).addClass("fancytree-level-" + level);
		return res;
	}
});
}(jQuery, window, document));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(33)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../css-loader/index.js!./ui.fancytree.css", function() {
			var newContent = require("!!./../../../css-loader/index.js!./ui.fancytree.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(33)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./fancytree-overrides.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./fancytree-overrides.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(33)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../css-loader/index.js!./uikit.css", function() {
			var newContent = require("!!./../../../css-loader/index.js!./uikit.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Backbone = __webpack_require__(34);
var RoleTree_1 = __webpack_require__(115);
var Application = (function (_super) {
    __extends(Application, _super);
    function Application(options) {
        return _super.call(this, options) || this;
    }
    Application.prototype.initialize = function () {
        this.sourceTree = new RoleTree_1.RoleTree();
        this.targetTree = new RoleTree_1.RoleTree();
        this.initialRender();
    };
    Application.prototype.initialRender = function () {
        this.$el.append(this.sourceTree.render().$el);
        this.$el.append(this.targetTree.render().$el);
    };
    Application.prototype.render = function () {
        return this;
    };
    return Application;
}(Backbone.View));
exports.Application = Application;
Application.prototype.className = "uk-width-1-1 uk-height-1-1 uk-flex uk-flex-space-between";


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "/*!\n * Fancytree \"Win7\" skin.\n *\n * DON'T EDIT THE CSS FILE DIRECTLY, since it is automatically generated from\n * the LESS templates.\n */\n/*******************************************************************************\n * Common Styles for Fancytree Skins.\n *\n * This section is automatically generated from the `skin-common.less` template.\n ******************************************************************************/\n/*------------------------------------------------------------------------------\n * Helpers\n *----------------------------------------------------------------------------*/\n.ui-helper-hidden {\n  display: none;\n}\n/*------------------------------------------------------------------------------\n * Container and UL / LI\n *----------------------------------------------------------------------------*/\nul.fancytree-container {\n  font-family: tahoma, arial, helvetica;\n  font-size: 10pt;\n  white-space: nowrap;\n  padding: 3px;\n  margin: 0;\n  background-color: white;\n  border: 1px dotted gray;\n  overflow: auto;\n  min-height: 0%;\n  position: relative;\n}\nul.fancytree-container ul {\n  padding: 0 0 0 16px;\n  margin: 0;\n}\nul.fancytree-container ul > li:before {\n  content: none;\n}\nul.fancytree-container li {\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  -moz-background-clip: border;\n  -moz-background-inline-policy: continuous;\n  -moz-background-origin: padding;\n  background-attachment: scroll;\n  background-color: transparent;\n  background-position: 0px 0px;\n  background-repeat: repeat-y;\n  background-image: none;\n  margin: 0;\n}\nul.fancytree-container li.fancytree-lastsib {\n  background-image: none;\n}\n.ui-fancytree-disabled ul.fancytree-container {\n  opacity: 0.5;\n  background-color: silver;\n}\nul.fancytree-connectors.fancytree-container li {\n  background-image: url(\"data:image/gif;base64,R0lGODlhEAAQAPcAAAAAAIAAAACAAICAAAAAgIAAgACAgMDAwMDcwKbK8P///6Wlpf/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////78KCgpICAgP8AAAD/AP//AAAA//8A/wD//////yH5BAEAAP4ALAAAAAAQABAAAAgpAP0JFHhvoMGDCBMiLKiwocOBDB9KXDixosGIFidizPhwI8eGHj8KDAgAOw==\");\n  background-position: 0 0;\n}\nul.fancytree-container li.fancytree-lastsib,\nul.fancytree-no-connector > li {\n  background-image: none;\n}\n/*------------------------------------------------------------------------------\n * Common icon definitions\n *----------------------------------------------------------------------------*/\nspan.fancytree-empty,\nspan.fancytree-vline,\nspan.fancytree-expander,\nspan.fancytree-icon,\nspan.fancytree-checkbox,\nspan.fancytree-radio,\nspan.fancytree-drag-helper-img,\n#fancytree-drop-marker {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  vertical-align: top;\n  background-repeat: no-repeat;\n  background-position: left;\n  background-image: url(" + __webpack_require__(35) + ");\n  background-position: 0px 0px;\n}\nspan.fancytree-icon,\nspan.fancytree-checkbox,\nspan.fancytree-expander,\nspan.fancytree-radio,\nspan.fancytree-custom-icon {\n  margin-top: 2px;\n}\n/* Used by icon option: */\nspan.fancytree-custom-icon {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  margin-left: 3px;\n  background-position: 0px 0px;\n}\n/* Used by 'icon' node option: */\nimg.fancytree-icon {\n  width: 16px;\n  height: 16px;\n  margin-left: 3px;\n  margin-top: 2px;\n  vertical-align: top;\n  border-style: none;\n}\n/*------------------------------------------------------------------------------\n * Expander icon\n *\n * Note: IE6 doesn't correctly evaluate multiples class names,\n *\t\t so we create combined class names that can be used in the CSS.\n *\n * Prefix: fancytree-exp-\n * 1st character: 'e': expanded, 'c': collapsed, 'n': no children\n * 2nd character (optional): 'd': lazy (Delayed)\n * 3rd character (optional): 'l': Last sibling\n *----------------------------------------------------------------------------*/\nspan.fancytree-expander {\n  cursor: pointer;\n}\n.fancytree-exp-n span.fancytree-expander,\n.fancytree-exp-nl span.fancytree-expander {\n  background-image: none;\n  cursor: default;\n}\n.fancytree-connectors .fancytree-exp-n span.fancytree-expander,\n.fancytree-connectors .fancytree-exp-nl span.fancytree-expander {\n  background-image: url(" + __webpack_require__(35) + ");\n  margin-top: 0;\n}\n.fancytree-connectors .fancytree-exp-n span.fancytree-expander,\n.fancytree-connectors .fancytree-exp-n span.fancytree-expander:hover {\n  background-position: 0px -64px;\n}\n.fancytree-connectors .fancytree-exp-nl span.fancytree-expander,\n.fancytree-connectors .fancytree-exp-nl span.fancytree-expander:hover {\n  background-position: -16px -64px;\n}\n.fancytree-exp-c span.fancytree-expander {\n  background-position: 0px -80px;\n}\n.fancytree-exp-c span.fancytree-expander:hover {\n  background-position: -16px -80px;\n}\n.fancytree-exp-cl span.fancytree-expander {\n  background-position: 0px -96px;\n}\n.fancytree-exp-cl span.fancytree-expander:hover {\n  background-position: -16px -96px;\n}\n.fancytree-exp-cd span.fancytree-expander {\n  background-position: -64px -80px;\n}\n.fancytree-exp-cd span.fancytree-expander:hover {\n  background-position: -80px -80px;\n}\n.fancytree-exp-cdl span.fancytree-expander {\n  background-position: -64px -96px;\n}\n.fancytree-exp-cdl span.fancytree-expander:hover {\n  background-position: -80px -96px;\n}\n.fancytree-exp-e span.fancytree-expander,\n.fancytree-exp-ed span.fancytree-expander {\n  background-position: -32px -80px;\n}\n.fancytree-exp-e span.fancytree-expander:hover,\n.fancytree-exp-ed span.fancytree-expander:hover {\n  background-position: -48px -80px;\n}\n.fancytree-exp-el span.fancytree-expander,\n.fancytree-exp-edl span.fancytree-expander {\n  background-position: -32px -96px;\n}\n.fancytree-exp-el span.fancytree-expander:hover,\n.fancytree-exp-edl span.fancytree-expander:hover {\n  background-position: -48px -96px;\n}\n/* Fade out expanders, when container is not hovered or active */\n.fancytree-fade-expander span.fancytree-expander {\n  transition: opacity 1.5s;\n  opacity: 0;\n}\n.fancytree-fade-expander:hover span.fancytree-expander,\n.fancytree-fade-expander.fancytree-treefocus span.fancytree-expander,\n.fancytree-fade-expander .fancytree-treefocus span.fancytree-expander,\n.fancytree-fade-expander [class*='fancytree-statusnode-'] span.fancytree-expander {\n  transition: opacity 0.6s;\n  opacity: 1;\n}\n/*------------------------------------------------------------------------------\n * Checkbox icon\n *----------------------------------------------------------------------------*/\nspan.fancytree-checkbox {\n  margin-left: 3px;\n  background-position: 0px -32px;\n}\nspan.fancytree-checkbox:hover {\n  background-position: -16px -32px;\n}\n.fancytree-partsel span.fancytree-checkbox {\n  background-position: -64px -32px;\n}\n.fancytree-partsel span.fancytree-checkbox:hover {\n  background-position: -80px -32px;\n}\n.fancytree-selected span.fancytree-checkbox {\n  background-position: -32px -32px;\n}\n.fancytree-selected span.fancytree-checkbox:hover {\n  background-position: -48px -32px;\n}\n.fancytree-unselectable span.fancytree-checkbox {\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n}\n.fancytree-unselectable span.fancytree-checkbox:hover {\n  background-position: 0px -32px;\n}\n.fancytree-unselectable.fancytree-partsel span.fancytree-checkbox:hover {\n  background-position: -64px -32px;\n}\n.fancytree-unselectable.fancytree-selected span.fancytree-checkbox:hover {\n  background-position: -32px -32px;\n}\n/*------------------------------------------------------------------------------\n * Radiobutton icon\n * This is a customization, that may be activated by overriding the 'checkbox'\n * class name as 'fancytree-radio' in the tree options.\n *----------------------------------------------------------------------------*/\n.fancytree-radio span.fancytree-checkbox {\n  background-position: 0px -48px;\n}\n.fancytree-radio span.fancytree-checkbox:hover {\n  background-position: -16px -48px;\n}\n.fancytree-radio .fancytree-partsel span.fancytree-checkbox {\n  background-position: -64px -48px;\n}\n.fancytree-radio .fancytree-partsel span.fancytree-checkbox:hover {\n  background-position: -80px -48px;\n}\n.fancytree-radio .fancytree-selected span.fancytree-checkbox {\n  background-position: -32px -48px;\n}\n.fancytree-radio .fancytree-selected span.fancytree-checkbox:hover {\n  background-position: -48px -48px;\n}\n.fancytree-radio .fancytree-unselectable span.fancytree-checkbox,\n.fancytree-radio .fancytree-unselectable span.fancytree-checkbox:hover {\n  background-position: 0px -48px;\n}\n/*------------------------------------------------------------------------------\n * Node type icon\n * Note: IE6 doesn't correctly evaluate multiples class names,\n *\t\t so we create combined class names that can be used in the CSS.\n *\n * Prefix: fancytree-ico-\n * 1st character: 'e': expanded, 'c': collapsed\n * 2nd character (optional): 'f': folder\n *----------------------------------------------------------------------------*/\nspan.fancytree-icon {\n  margin-left: 3px;\n  background-position: 0px 0px;\n}\n/* Documents */\n.fancytree-ico-c span.fancytree-icon:hover {\n  background-position: -16px 0px;\n}\n.fancytree-has-children.fancytree-ico-c span.fancytree-icon {\n  background-position: -32px 0px;\n}\n.fancytree-has-children.fancytree-ico-c span.fancytree-icon:hover {\n  background-position: -48px 0px;\n}\n.fancytree-ico-e span.fancytree-icon {\n  background-position: -64px 0px;\n}\n.fancytree-ico-e span.fancytree-icon:hover {\n  background-position: -80px 0px;\n}\n/* Folders */\n.fancytree-ico-cf span.fancytree-icon {\n  background-position: 0px -16px;\n}\n.fancytree-ico-cf span.fancytree-icon:hover {\n  background-position: -16px -16px;\n}\n.fancytree-has-children.fancytree-ico-cf span.fancytree-icon {\n  background-position: -32px -16px;\n}\n.fancytree-has-children.fancytree-ico-cf span.fancytree-icon:hover {\n  background-position: -48px -16px;\n}\n.fancytree-ico-ef span.fancytree-icon {\n  background-position: -64px -16px;\n}\n.fancytree-ico-ef span.fancytree-icon:hover {\n  background-position: -80px -16px;\n}\n.fancytree-loading span.fancytree-expander,\n.fancytree-loading span.fancytree-expander:hover,\n.fancytree-statusnode-loading span.fancytree-icon,\n.fancytree-statusnode-loading span.fancytree-icon:hover {\n  background-image: url(\"data:image/gif;base64,R0lGODlhEAAQAPcAAEai/0+m/1is/12u/2Oy/2u1/3C3/3G4/3W6/3q8/3+//4HA/4XC/4nE/4/H/5LI/5XK/5vN/57O/6DP/6HQ/6TS/6/X/7DX/7HY/7bb/7rd/7ze/8Hg/8fj/8rl/83m/9Dn/9Lp/9bq/9jr/9rt/9/v/+Dv/+Hw/+Xy/+v1/+32//D3//L5//f7//j7//v9/0qk/06m/1Ko/1er/2Cw/2m0/2y2/3u9/32+/4jD/5bK/5jL/5/P/6HP/6PS/6fS/6nU/67X/7Ta/7nc/7zd/8Ph/8bj/8jk/8vl/9Pp/9fr/9rs/9zu/+j0/+72//T6/0ij/1Op/1uu/1yu/2Wy/2q0/2+3/3C4/3m8/3y9/4PB/4vE/4/G/6XS/6jU/67W/7HZ/7Xa/7vd/73e/8Lh/8nk/87m/9Hn/9Ho/9vt/97u/+Lx/+bz/+n0//H4//X6/1Gn/1Go/2Gx/36+/5PJ/5TJ/5nL/57P/7PZ/7TZ/8Xi/9Tq/9zt/+by/+r0/+73//P5//n8/0uk/1Wq/3K4/3e7/4bC/4vF/47G/5fK/77f/9Do/9ns/+Tx/+/3//L4//b6//r9/2Wx/2q1/4bD/6DQ/6fT/9Tp/+Lw/+jz//D4//j8/1qt/2mz/5rM/6bS/8Lg/8jj/97v/+r1/1Cn/1ar/2Cv/3O5/3++/53O/8Th/9Lo/9Xq/+z2/2Kw/2Sx/8Ti/4rF/7DY/1+v/4TB/7fb/+Ty/1+u/2Ox/4zG/6vU/7/f//r8/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/i1NYWRlIGJ5IEtyYXNpbWlyYSBOZWpjaGV2YSAod3d3LmxvYWRpbmZvLm5ldCkAIfkEAQoAMAAsAAAAABAAEAAABptAmFCI6mAsnNNwCUthGomDoYCQoJinyELRgDwUhAFCNFRJGg8P6/VSaQyCgxK2cURMTJioEIA0Jw8geUIZAQMkIhEVLIMwKgMAFx4SGS+NLwwCFR8UGo1CKSgsJBUYLZ9sMCsZF3iDLy2nMCEXGyp5bSqyLBwaHSguQi8sKigqlkIqHb4hJc4lJsdMLSQeHyEhIyXSgy2hxsFLQQAh+QQBCgAAACwAAAAAEAAQAAAHp4AAgoIoH0NCSCiDiwBORDo5Czg3C0BNjCg/Dw46PjwOBwcLS4MrQTs9ICwvL05FODU4igBGPECzi0s4NDyNQT5KjINDAzZMTEBCLMKCTQczQ0lBRcyDODI8SojVAC84MTxMQkVP1SgDMEJPRkS4jB8xM6RKRR/Lwi9HQYJPIB9KTV4MeuHiicBSSkAoYYKiiRMnKw4ucnFiyRKGKJyUq/aChUaDjAIBACH5BAEKAAAALAAAAAAQABAAAAeogACCgm1KZGRmbYOLAG5GXjoPXFsPYIqLbWE7XV1fXjtaWQ9qg25iXmBKby8AKmVcWFyXaBdil4tqWldejWNhpIyCZFZZa2tjZG/BgipYVWRpY2bLg1s0XWpGaNQAL1pTXW1maMrLbVZSYm9oZyrUYVFUpGxoaeWLZzQBOoJvamkm3OCSAsWKiUH+1rBp48bFCxVWaGxb9LBNGxVvVqUBFuzFizculgUCACH5BAEKAAEALAAAAAAQABAAAAi4AAMIFPiHxJEjJPwMXBgAEIg8XijcsUNhzB+GfzjkwYNnSB4KdRzcWTPwzZEhY/i8EfgmhJ0GdhQGIDFGz0WGJuoswBPgzQc9fRgOPDKnQR8/H0K4EErQQQKgIPgwFRioTgE8ffZInRqIztWCfAJN/TOnAAcXJvgAmjpEDgKSf9b4Ectwz5UBd6j68fNnaYBAfvIUEIAgKNU/gN4E+sNgAJw4BvYIfeMiUB8BAAbUMTz1TYU8YRcGBAAh+QQBCgAAACwAAAAAEAAQAAAItAABCBT4qJGIRY0cDVwIAJIIMnnyWABiwYjChY8WGVFExgjELjwsNBroQgSSD40gCXQIJFGXi41AiHjEEECjLg8UNWS06GLND4gSNXrEqESkmgQTGfrgqMRIpAAidVkwpKDPmpF44MgDqVGTo0gdHbqBJJIjR2BrkiG0YCSkRyprMsJBCMhASJEioczbZEihGoaeCtQrgwYOujRoLGBU08IgQYJkzKjBQ/DCSIzy8OgypATDgAAh+QQBCgAAACwAAAAAEAAQAAAIswABCBQIKRMfPmw0DVwIYBObEEiKjBEzJoTChZD4XArB0UyRMBfGtBm4CdOSJW02EeQjxkuYi38wYYLEEEAmDJWMNGyTsKbAS5Us/YHU5o9PgZos7QixSdPFo18eFNkESeXRTV+4FGlo1aemHVvM7ORzFMmCByOXHJgSoiafLTgwCOQjCYqkMCk3/SlCCQvagSEmBRh0gBLcAwe4kF2IaYekKVNoTMLiZWTNTSwtWRqDiWFAACH5BAEKAAIALAAAAAAQABAAAAi5AAUIFOhCBRs2o94MXCjghQpRI/YkQYJkj8KFL0atEcVRVJIOY0KtWKhi1Cg3LwS+YdNhCCg3Kt2oSMlQxZg8IGLSZChA1IU8Khru5PkmjxdRbtgE5TlwCAUknzgxGIoxDw8kQgAMGMVUgJtPnvaQGBAgT1cQDyhwhRCnUxKeazw5GCNwTQFOBsbMfLECyYMGPJYK2INgAAEFDyA0ULDA0xqGbHggKFDgQIIGF7jyfLGmw4ULHdgwDAgAIfkEAQoAAAAsAAAAABAAEAAACLcAAQgcqElTK00uBioUuKlVEzYnlixhk3BhC4MO2SxhtIrVCoWbNrnYNLAhKzMgWggMgqTiwhVIiiwBsKQUKTMLB7IhoqpVHhimmuQU2KJInhOpYtxwmdNMHlapZKAiORRAkSCshpQ61arqijxAJNoYMKTqEh95uvagUWjmQjZAUqkSyAZVDVRFWoXUBKLHjiAfBS5hcOqUg1Q+djh44IPNwiZAFtxAtSCHDiJdh55AkmeIGaEKAwIAIfkEAQoAAAAsAAAAABAAEAAACLcAAQgcGMgFJEiBBioEUEIJAINuRo36k1AhGldXVhSMyAaTCUgDMVWBMiWNQjeY0pRwIVBHAFdoFgKAxOgMG4avooSRKfCPmTOQNEi5MornwzNIRnWZQqkiTyVFSnRxtYWlUTMa0hSpkuWPUUgcNGDClMVKEaMmwohxA6CLFUolZI7ScCEmgFFcsnBB4nVmCTBeNLAVWCKvlh1dvnjRUSlMUYWjwDzYwuWBji6wBss1U6QImscDAwIAIfkEAQoAAQAsAAAAABAAEAAACLMAAwgUyEfWJxYDEw5sBGEAAAGNXkCCpDAAKwNw4AxgoEIii44LCwnolMfPC4EvVPgxKfDOgCusKr7ws0ZFABOF5IipKJAFHz4vOBSYY5NnAD4jVMgqAOGkUT5J/CxtajRAmiRr9CSIVbQiJFZI/DRyMAeJ0awfKMqaQ2dNRRV6xqQR6MdOLDusEAaAtGbMGCR6A6y54wDCpzxiZCnm0FWgijF3INyhcDhJYIV+wH5I0zhAQAAh+QQBCgAAACwAAAAAEAAQAAAItAABCBRYYkiqVLUYuRjIkE2qGjNkxBA0IwhDgYwU0JhVg1YCGjLMLBzYxFCNBEM0uXDBxkyLlQOBEFLA6CKAlZpaAGBjiBAZmwP//HFhJMGhP0AF/mHjopaCVCOBsmGjqZahLlFtsinxx4yhHZqSurDFaGkiREmS/rnESOeQB6nY2NR0CYRcAH+67AByaWSLlkj6DmQTJFWXWmSMkCFCBkRYhn+MBAESpBbitmpLJLlU4vHAgAAh+QQBCgAAACwAAAAAEAAQAAAIvQABCBS4ZpclS0PWDFwIoI0uHFVu3ZIiiY7ChWpyHTiAowGDK4MCVEEzsA0dLAw4OOHFq00YXFBwqREIBkeumQzN3DqQBkCmOgvKMByYpg0vAGZy7XAydCCvFgA45NLVdGCLFrw40PlytCoLJy0u7bAEtSkvJ21aOLF055JXNkYBwKoEJtPQFmvWMAWwIoyuIWrKunCSJo2Jrg2HXAjDwcwlNCDQpCk7kAWIXUN2wTKDZo2Lqk7YpFGTibLAgAA7\");\n  background-position: 0px 0px;\n}\n/* Status node icons */\n.fancytree-statusnode-error span.fancytree-icon,\n.fancytree-statusnode-error span.fancytree-icon:hover {\n  background-position: 0px -112px;\n}\n/*------------------------------------------------------------------------------\n * Node titles and highlighting\n *----------------------------------------------------------------------------*/\nspan.fancytree-node {\n  /* See #117 */\n  display: inherit;\n  width: 100%;\n  margin-top: 1px;\n  min-height: 20px;\n}\nspan.fancytree-title {\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  vertical-align: top;\n  min-height: 20px;\n  padding: 0 3px 0 3px;\n  margin: 0px 0 0 3px;\n  border: 1px solid transparent;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -ms-border-radius: 3px;\n  -o-border-radius: 3px;\n  border-radius: 3px;\n}\nspan.fancytree-node.fancytree-error span.fancytree-title {\n  color: red;\n}\n/*------------------------------------------------------------------------------\n * Drag'n'drop support\n *----------------------------------------------------------------------------*/\ndiv.fancytree-drag-helper span.fancytree-childcounter,\ndiv.fancytree-drag-helper span.fancytree-dnd-modifier {\n  display: inline-block;\n  color: #fff;\n  background: #337ab7;\n  border: 1px solid gray;\n  min-width: 10px;\n  height: 10px;\n  line-height: 1;\n  vertical-align: baseline;\n  border-radius: 10px;\n  padding: 2px;\n  text-align: center;\n  font-size: 9px;\n}\ndiv.fancytree-drag-helper span.fancytree-childcounter {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n}\ndiv.fancytree-drag-helper span.fancytree-dnd-modifier {\n  background: #5cb85c;\n  border: none;\n  font-weight: bolder;\n}\ndiv.fancytree-drag-helper.fancytree-drop-accept span.fancytree-drag-helper-img {\n  background-position: -32px -112px;\n}\ndiv.fancytree-drag-helper.fancytree-drop-reject span.fancytree-drag-helper-img {\n  background-position: -16px -112px;\n}\n/*** Drop marker icon *********************************************************/\n#fancytree-drop-marker {\n  width: 32px;\n  position: absolute;\n  background-position: 0px -128px;\n  margin: 0;\n}\n#fancytree-drop-marker.fancytree-drop-after,\n#fancytree-drop-marker.fancytree-drop-before {\n  width: 64px;\n  background-position: 0px -144px;\n}\n#fancytree-drop-marker.fancytree-drop-copy {\n  background-position: -64px -128px;\n}\n#fancytree-drop-marker.fancytree-drop-move {\n  background-position: -32px -128px;\n}\n/*** Source node while dragging ***********************************************/\nspan.fancytree-drag-source.fancytree-drag-remove {\n  opacity: 0.15;\n}\n/*** Target node while dragging cursor is over it *****************************/\n/*------------------------------------------------------------------------------\n * 'table' extension\n *----------------------------------------------------------------------------*/\ntable.fancytree-ext-table {\n  border-collapse: collapse;\n}\ntable.fancytree-ext-table span.fancytree-node {\n  display: inline-block;\n  box-sizing: border-box;\n}\n/*------------------------------------------------------------------------------\n * 'columnview' extension\n *----------------------------------------------------------------------------*/\ntable.fancytree-ext-columnview tbody tr td {\n  position: relative;\n  border: 1px solid gray;\n  vertical-align: top;\n  overflow: auto;\n}\ntable.fancytree-ext-columnview tbody tr td > ul {\n  padding: 0;\n}\ntable.fancytree-ext-columnview tbody tr td > ul li {\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  -moz-background-clip: border;\n  -moz-background-inline-policy: continuous;\n  -moz-background-origin: padding;\n  background-attachment: scroll;\n  background-color: transparent;\n  background-position: 0px 0px;\n  background-repeat: repeat-y;\n  background-image: none;\n  /* no v-lines */\n  margin: 0;\n}\ntable.fancytree-ext-columnview span.fancytree-node {\n  position: relative;\n  /* allow positioning of embedded spans */\n  display: inline-block;\n}\ntable.fancytree-ext-columnview span.fancytree-node.fancytree-expanded {\n  background-color: #CBE8F6;\n}\ntable.fancytree-ext-columnview .fancytree-has-children span.fancytree-cv-right {\n  position: absolute;\n  right: 3px;\n  background-position: 0px -80px;\n}\ntable.fancytree-ext-columnview .fancytree-has-children span.fancytree-cv-right:hover {\n  background-position: -16px -80px;\n}\n/*------------------------------------------------------------------------------\n * 'filter' extension\n *----------------------------------------------------------------------------*/\n.fancytree-ext-filter-dimm span.fancytree-node span.fancytree-title {\n  color: silver;\n  font-weight: lighter;\n}\n.fancytree-ext-filter-dimm tr.fancytree-submatch span.fancytree-title,\n.fancytree-ext-filter-dimm span.fancytree-node.fancytree-submatch span.fancytree-title {\n  color: black;\n  font-weight: normal;\n}\n.fancytree-ext-filter-dimm tr.fancytree-match span.fancytree-title,\n.fancytree-ext-filter-dimm span.fancytree-node.fancytree-match span.fancytree-title {\n  color: black;\n  font-weight: bold;\n}\n.fancytree-ext-filter-hide tr.fancytree-hide,\n.fancytree-ext-filter-hide span.fancytree-node.fancytree-hide {\n  display: none;\n}\n.fancytree-ext-filter-hide tr.fancytree-submatch span.fancytree-title,\n.fancytree-ext-filter-hide span.fancytree-node.fancytree-submatch span.fancytree-title {\n  color: silver;\n  font-weight: lighter;\n}\n.fancytree-ext-filter-hide tr.fancytree-match span.fancytree-title,\n.fancytree-ext-filter-hide span.fancytree-node.fancytree-match span.fancytree-title {\n  color: black;\n  font-weight: normal;\n}\n/* Hide expanders if all child nodes are hidden by filter */\n.fancytree-ext-filter-hide-expanders tr.fancytree-match span.fancytree-expander,\n.fancytree-ext-filter-hide-expanders span.fancytree-node.fancytree-match span.fancytree-expander {\n  visibility: hidden;\n}\n.fancytree-ext-filter-hide-expanders tr.fancytree-submatch span.fancytree-expander,\n.fancytree-ext-filter-hide-expanders span.fancytree-node.fancytree-submatch span.fancytree-expander {\n  visibility: visible;\n}\n.fancytree-ext-childcounter span.fancytree-icon,\n.fancytree-ext-filter span.fancytree-icon {\n  position: relative;\n}\n.fancytree-ext-childcounter span.fancytree-childcounter,\n.fancytree-ext-filter span.fancytree-childcounter {\n  color: #fff;\n  background: #777;\n  border: 1px solid gray;\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  min-width: 10px;\n  height: 10px;\n  line-height: 1;\n  vertical-align: baseline;\n  border-radius: 10px;\n  padding: 2px;\n  text-align: center;\n  font-size: 9px;\n}\n/*------------------------------------------------------------------------------\n * 'wide' extension\n *----------------------------------------------------------------------------*/\nul.fancytree-ext-wide {\n  position: relative;\n  min-width: 100%;\n  z-index: 2;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nul.fancytree-ext-wide span.fancytree-node > span {\n  position: relative;\n  z-index: 2;\n}\nul.fancytree-ext-wide span.fancytree-node span.fancytree-title {\n  position: absolute;\n  z-index: 1;\n  left: 0px;\n  min-width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n/*******************************************************************************\n * Styles specific to this skin.\n *\n * This section is automatically generated from the `ui-fancytree.less` template.\n ******************************************************************************/\n/*******************************************************************************\n * Node titles\n */\nspan.fancytree-active .fancytree-title,\nspan.fancytree-selected .fancytree-title {\n  border-color: #d9d9d9;\n  background: #e5e5e5;\n  color: inherit;\n  background: -moz-linear-gradient(top, #fafafb 0%, #e5e5e5 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #fafafb), color-stop(100%, #e5e5e5));\n  background: -webkit-linear-gradient(top, #fafafb 0%, #e5e5e5 100%);\n  background: -o-linear-gradient(top, #fafafb 0%, #e5e5e5 100%);\n  background: -ms-linear-gradient(top, #fafafb 0%, #e5e5e5 100%);\n  background: linear-gradient(to bottom, #fafafb 0%, #e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fafafb', endColorstr='#e5e5e5', GradientType=0);\n}\nspan.fancytree-selected .fancytree-title {\n  font-style: italic;\n}\n.fancytree-treefocus span.fancytree-active .fancytree-title,\n.fancytree-treefocus span.fancytree-selected .fancytree-title {\n  border-color: #99defd;\n  background: #f6fbfd;\n  color: inherit;\n  background: -moz-linear-gradient(top, #f6fbfd 0%, #d5effc 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f6fbfd), color-stop(100%, #d5effc));\n  background: -webkit-linear-gradient(top, #f6fbfd 0%, #d5effc 100%);\n  background: -o-linear-gradient(top, #f6fbfd 0%, #d5effc 100%);\n  background: -ms-linear-gradient(top, #f6fbfd 0%, #d5effc 100%);\n  background: linear-gradient(to bottom, #f6fbfd 0%, #d5effc 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6fbfd', endColorstr='#d5effc', GradientType=0);\n}\n.fancytree-treefocus span.fancytree-focused span.fancytree-title {\n  border: 1px solid #719acb;\n}\nspan.fancytree-title:hover {\n  border-color: #d8f0fa;\n  background: #f8fcfe;\n  color: inherit;\n  background: -moz-linear-gradient(top, #f8fcfe 0%, #eff9fe 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f8fcfe), color-stop(100%, #eff9fe));\n  background: -webkit-linear-gradient(top, #f8fcfe 0%, #eff9fe 100%);\n  background: -o-linear-gradient(top, #f8fcfe 0%, #eff9fe 100%);\n  background: -ms-linear-gradient(top, #f8fcfe 0%, #eff9fe 100%);\n  background: linear-gradient(to bottom, #f8fcfe 0%, #eff9fe 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f8fcfe', endColorstr='#eff9fe', GradientType=0);\n}\nspan.fancytree-active .fancytree-title:hover,\nspan.fancytree-selected .fancytree-title:hover {\n  border-color: #719acb;\n  background: #f2f9fd;\n  color: inherit;\n  background: -moz-linear-gradient(top, #f2f9fd 0%, #c4e8fa 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f2f9fd), color-stop(100%, #c4e8fa));\n  background: -webkit-linear-gradient(top, #f2f9fd 0%, #c4e8fa 100%);\n  background: -o-linear-gradient(top, #f2f9fd 0%, #c4e8fa 100%);\n  background: -ms-linear-gradient(top, #f2f9fd 0%, #c4e8fa 100%);\n  background: linear-gradient(to bottom, #f2f9fd 0%, #c4e8fa 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f2f9fd', endColorstr='#c4e8fa', GradientType=0);\n}\n/*******************************************************************************\n * 'table' extension\n */\ntable.fancytree-ext-table tbody tr td {\n  border: 1px solid #ededed;\n}\ntable.fancytree-ext-table tbody tr:hover {\n  border-color: inherit;\n  background: #f8fcfe;\n  color: inherit;\n  background: -moz-linear-gradient(top, #f8fcfe 0%, #eff9fe 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f8fcfe), color-stop(100%, #eff9fe));\n  background: -webkit-linear-gradient(top, #f8fcfe 0%, #eff9fe 100%);\n  background: -o-linear-gradient(top, #f8fcfe 0%, #eff9fe 100%);\n  background: -ms-linear-gradient(top, #f8fcfe 0%, #eff9fe 100%);\n  background: linear-gradient(to bottom, #f8fcfe 0%, #eff9fe 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f8fcfe', endColorstr='#eff9fe', GradientType=0);\n  outline: 1px solid #d8f0fa;\n}\ntable.fancytree-ext-table tbody tr.fancytree-focused {\n  outline: 1px dotted #090402;\n}\ntable.fancytree-ext-table tbody span.fancytree-focused span.fancytree-title {\n  outline: solid dotted black;\n}\ntable.fancytree-ext-table tbody span.fancytree-title:hover {\n  border: 1px solid transparent;\n  background: inherit;\n  background: transparent;\n  background: none;\n  filter: none;\n}\ntable.fancytree-ext-table tbody tr.fancytree-active:hover,\ntable.fancytree-ext-table tbody tr.fancytree-selected:hover {\n  border-color: inherit;\n  background: #f2f9fd;\n  color: inherit;\n  background: -moz-linear-gradient(top, #f2f9fd 0%, #c4e8fa 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f2f9fd), color-stop(100%, #c4e8fa));\n  background: -webkit-linear-gradient(top, #f2f9fd 0%, #c4e8fa 100%);\n  background: -o-linear-gradient(top, #f2f9fd 0%, #c4e8fa 100%);\n  background: -ms-linear-gradient(top, #f2f9fd 0%, #c4e8fa 100%);\n  background: linear-gradient(to bottom, #f2f9fd 0%, #c4e8fa 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f2f9fd', endColorstr='#c4e8fa', GradientType=0);\n  outline: 1px solid #B6E6FB;\n}\ntable.fancytree-ext-table tbody tr.fancytree-active,\ntable.fancytree-ext-table tbody tr.fancytree-selected {\n  border-color: inherit;\n  background: #f6fbfd;\n  color: inherit;\n  background: -moz-linear-gradient(top, #f6fbfd 0%, #d5effc 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f6fbfd), color-stop(100%, #d5effc));\n  background: -webkit-linear-gradient(top, #f6fbfd 0%, #d5effc 100%);\n  background: -o-linear-gradient(top, #f6fbfd 0%, #d5effc 100%);\n  background: -ms-linear-gradient(top, #f6fbfd 0%, #d5effc 100%);\n  background: linear-gradient(to bottom, #f6fbfd 0%, #d5effc 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6fbfd', endColorstr='#d5effc', GradientType=0);\n  outline: 1px solid #99DEFD;\n}\n", ""]);

// exports


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "ul.fancytree-container {\n  border: 1px solid gray; }\n", ""]);

// exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */\n/* ========================================================================\n   Component: Base\n ========================================================================== */\n/*\n * 1. Normalize default `font-family` and set `font-size` to support `rem` units\n * 2. Prevents iOS text size adjust after orientation change, without disabling user zoom\n * 3. Style\n */\nhtml {\n  /* 1 */\n  font: normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  background: #fff;\n  color: #444;\n}\n/*\n * Removes default margin.\n */\nbody {\n  margin: 0;\n}\n/* Links\n ========================================================================== */\n/*\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background: transparent;\n}\n/*\n * Improve readability of focused elements when they are also in an active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/*\n * Style\n */\na,\n.uk-link {\n  color: #07D;\n  text-decoration: none;\n  cursor: pointer;\n}\na:hover,\n.uk-link:hover {\n  color: #059;\n  text-decoration: underline;\n}\n/* Text-level semantics\n ========================================================================== */\n/*\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/*\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/*\n * 1. Address odd `em`-unit font size rendering in all browsers.\n * 2. Consolas has a better baseline in running text compared to `Courier`\n */\n:not(pre) > code,\n:not(pre) > kbd,\n:not(pre) > samp {\n  /* 1 */\n  font-size: 12px;\n  /* 2 */\n  font-family: Consolas, monospace, serif;\n  /* 3 */\n  color: #D05;\n  white-space: nowrap;\n}\n/*\n * Emphasize\n */\nem {\n  color: #D05;\n}\n/*\n * Insert\n */\nins {\n  background: #ffa;\n  color: #444;\n  text-decoration: none;\n}\n/*\n * Mark\n * Note: Addresses styling not present in IE 8/9.\n */\nmark {\n  background: #ffa;\n  color: #444;\n}\n/*\n * Quote\n */\nq {\n  font-style: italic;\n}\n/*\n * Addresses inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/*\n * Prevents `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n ========================================================================== */\n/*\n * Remove the gap between embedded content and the bottom of their containers.\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Responsiveness\n * 1. Sets a maximum width relative to the parent and auto scales the height\n * 2. Corrects `max-width` behavior if padding and border are used\n */\naudio,\ncanvas,\nimg,\nsvg,\nvideo {\n  /* 1 */\n  max-width: 100%;\n  height: auto;\n  /* 2 */\n  box-sizing: border-box;\n}\n/*\n * Preserve original dimensions\n */\n.uk-img-preserve,\n.uk-img-preserve audio,\n.uk-img-preserve canvas,\n.uk-img-preserve img,\n.uk-img-preserve svg,\n.uk-img-preserve video {\n  max-width: none;\n}\n/*\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/*\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Block elements\n ========================================================================== */\n/*\n * Reset margin\n */\nblockquote,\nfigure {\n  margin: 0;\n}\n/*\n * Margins\n */\np,\nul,\nol,\ndl,\nblockquote,\npre,\naddress,\nfieldset,\nfigure {\n  margin: 0 0 15px 0;\n}\n* + p,\n* + ul,\n* + ol,\n* + dl,\n* + blockquote,\n* + pre,\n* + address,\n* + fieldset,\n* + figure {\n  margin-top: 15px;\n}\n/* Headings\n ========================================================================== */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0 0 15px 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  color: #444;\n  text-transform: none;\n}\n/*\n * Margins\n */\n* + h1,\n* + h2,\n* + h3,\n* + h4,\n* + h5,\n* + h6 {\n  margin-top: 25px;\n}\n/*\n * Sizes\n */\nh1,\n.uk-h1 {\n  font-size: 36px;\n  line-height: 42px;\n}\nh2,\n.uk-h2 {\n  font-size: 24px;\n  line-height: 30px;\n}\nh3,\n.uk-h3 {\n  font-size: 18px;\n  line-height: 24px;\n}\nh4,\n.uk-h4 {\n  font-size: 16px;\n  line-height: 22px;\n}\nh5,\n.uk-h5 {\n  font-size: 14px;\n  line-height: 20px;\n}\nh6,\n.uk-h6 {\n  font-size: 12px;\n  line-height: 18px;\n}\n/* Lists\n ========================================================================== */\nul,\nol {\n  padding-left: 30px;\n}\n/*\n * Reset margin for nested lists\n */\nul > li > ul,\nul > li > ol,\nol > li > ol,\nol > li > ul {\n  margin: 0;\n}\n/* Description lists\n ========================================================================== */\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n/* Horizontal rules\n ========================================================================== */\n/*\n * 1. Address differences between Firefox and other browsers.\n * 2. Style\n */\nhr {\n  /* 1 */\n  box-sizing: content-box;\n  height: 0;\n  /* 2 */\n  margin: 15px 0;\n  border: 0;\n  border-top: 1px solid #ddd;\n}\n/* Address\n ========================================================================== */\naddress {\n  font-style: normal;\n}\n/* Blockquotes\n ========================================================================== */\nblockquote {\n  padding-left: 15px;\n  border-left: 5px solid #ddd;\n  font-size: 16px;\n  line-height: 22px;\n  font-style: italic;\n}\n/* Preformatted text\n ========================================================================== */\n/*\n * 1. Contain overflow in all browsers.\n */\npre {\n  padding: 10px;\n  background: #f5f5f5;\n  font: 12px / 18px Consolas, monospace, serif;\n  color: #444;\n  -moz-tab-size: 4;\n  tab-size: 4;\n  /* 1 */\n  overflow: auto;\n}\n/* Selection pseudo-element\n ========================================================================== */\n::-moz-selection {\n  background: #39f;\n  color: #fff;\n  text-shadow: none;\n}\n::selection {\n  background: #39f;\n  color: #fff;\n  text-shadow: none;\n}\n/* HTML5 elements\n ========================================================================== */\n/*\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/*\n * Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/*\n * Prevent displaying `audio` without controls in Chrome, Safari and Opera\n */\naudio:not([controls]) {\n  display: none;\n}\n/*\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Iframe\n ========================================================================== */\niframe {\n  border: 0;\n}\n/* Fix viewport for IE10 snap mode\n ========================================================================== */\n@media screen and (max-width: 400px) {\n  @-ms-viewport {\n    width: device-width;\n  }\n}\n/* ========================================================================\n   Component: Grid\n ========================================================================== */\n/*\n * 1. Makes grid more robust so that it can be used with other block elements like lists\n */\n.uk-grid {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  /* 1 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/*\n * DEPRECATED\n * Micro clearfix\n * Can't use `table` because it creates a 1px gap when it becomes a flex item, only in Webkit\n */\n.uk-grid:before,\n.uk-grid:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n}\n.uk-grid:after {\n  clear: both;\n}\n/*\n * Grid cell\n * 1. Space is allocated solely based on content dimensions\n * 2. Makes grid more robust so that it can be used with other block elements\n * 3. DEPRECATED Using `float` to support IE9\n */\n.uk-grid > * {\n  /* 1 */\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  float: left;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-grid > * > :last-child {\n  margin-bottom: 0;\n}\n/* Grid gutter\n ========================================================================== */\n/*\n * Default gutter\n */\n/* Horizontal */\n.uk-grid {\n  margin-left: -25px;\n}\n.uk-grid > * {\n  padding-left: 25px;\n}\n/* Vertical */\n.uk-grid + .uk-grid,\n.uk-grid-margin,\n.uk-grid > * > .uk-panel + .uk-panel {\n  margin-top: 25px;\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  /* Horizontal */\n  .uk-grid {\n    margin-left: -35px;\n  }\n  .uk-grid > * {\n    padding-left: 35px;\n  }\n  /* Vertical */\n  .uk-grid + .uk-grid,\n  .uk-grid-margin,\n  .uk-grid > * > .uk-panel + .uk-panel {\n    margin-top: 35px;\n  }\n}\n/*\n * Collapse gutter\n */\n/* Horizontal */\n.uk-grid-collapse {\n  margin-left: 0;\n}\n.uk-grid-collapse > * {\n  padding-left: 0;\n}\n/* Vertical */\n.uk-grid-collapse + .uk-grid-collapse,\n.uk-grid-collapse > .uk-grid-margin,\n.uk-grid-collapse > * > .uk-panel + .uk-panel {\n  margin-top: 0;\n}\n/*\n * Small gutter\n */\n/* Horizontal */\n.uk-grid-small {\n  margin-left: -10px;\n}\n.uk-grid-small > * {\n  padding-left: 10px;\n}\n/* Vertical */\n.uk-grid-small + .uk-grid-small,\n.uk-grid-small > .uk-grid-margin,\n.uk-grid-small > * > .uk-panel + .uk-panel {\n  margin-top: 10px;\n}\n/*\n * Medium gutter\n */\n/* Horizontal */\n.uk-grid-medium {\n  margin-left: -25px;\n}\n.uk-grid-medium > * {\n  padding-left: 25px;\n}\n/* Vertical */\n.uk-grid-medium + .uk-grid-medium,\n.uk-grid-medium > .uk-grid-margin,\n.uk-grid-medium > * > .uk-panel + .uk-panel {\n  margin-top: 25px;\n}\n/*\n * Large gutter\n */\n/* Large screen and bigger */\n@media (min-width: 960px) {\n  /* Horizontal */\n  .uk-grid-large {\n    margin-left: -35px;\n  }\n  .uk-grid-large > * {\n    padding-left: 35px;\n  }\n  /* Vertical */\n  .uk-grid-large + .uk-grid-large,\n  .uk-grid-large-margin,\n  .uk-grid-large > * > .uk-panel + .uk-panel {\n    margin-top: 35px;\n  }\n}\n/* Extra Large screens */\n@media (min-width: 1220px) {\n  /* Horizontal */\n  .uk-grid-large {\n    margin-left: -50px;\n  }\n  .uk-grid-large > * {\n    padding-left: 50px;\n  }\n  /* Vertical */\n  .uk-grid-large + .uk-grid-large,\n  .uk-grid-large-margin,\n  .uk-grid-large > * > .uk-panel + .uk-panel {\n    margin-top: 50px;\n  }\n}\n/* Modifier: `uk-grid-divider`\n ========================================================================== */\n/*\n * Horizontal divider\n * Only works with the default gutter. Does not work with gutter collapse, small or large.\n * Does not work with `uk-push-*`, `uk-pull-*` and not if the columns float into the next row.\n */\n.uk-grid-divider:not(:empty) {\n  margin-left: -25px;\n  margin-right: -25px;\n}\n.uk-grid-divider > * {\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.uk-grid-divider > [class*='uk-width-1-']:not(.uk-width-1-1):nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-2-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-3-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-4-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-5-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-6-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-7-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-8-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-9-']:nth-child(n+2) {\n  border-left: 1px solid #ddd;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-grid-divider > [class*='uk-width-medium-']:not(.uk-width-medium-1-1):nth-child(n+2) {\n    border-left: 1px solid #ddd;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-grid-divider > [class*='uk-width-large-']:not(.uk-width-large-1-1):nth-child(n+2) {\n    border-left: 1px solid #ddd;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  /*\n     * Large gutter\n     */\n  .uk-grid-divider:not(:empty) {\n    margin-left: -35px;\n    margin-right: -35px;\n  }\n  .uk-grid-divider > * {\n    padding-left: 35px;\n    padding-right: 35px;\n  }\n  .uk-grid-divider:empty {\n    margin-top: 35px;\n    margin-bottom: 35px;\n  }\n}\n/*\n * Vertical divider\n */\n.uk-grid-divider:empty {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  border-top: 1px solid #ddd;\n}\n/* Match panels in grids\n ========================================================================== */\n/*\n * 1. Behave like a block element\n */\n.uk-grid-match > * {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  /* 1 */\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.uk-grid-match > * > * {\n  /* 1 */\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n  box-sizing: border-box;\n  width: 100%;\n}\n/* Even grid cell widths\n ========================================================================== */\n[class*='uk-grid-width'] > * {\n  box-sizing: border-box;\n  width: 100%;\n}\n.uk-grid-width-1-2 > * {\n  width: 50%;\n}\n.uk-grid-width-1-3 > * {\n  width: 33.333%;\n}\n.uk-grid-width-1-4 > * {\n  width: 25%;\n}\n.uk-grid-width-1-5 > * {\n  width: 20%;\n}\n.uk-grid-width-1-6 > * {\n  width: 16.666%;\n}\n.uk-grid-width-1-10 > * {\n  width: 10%;\n}\n.uk-grid-width-auto > * {\n  width: auto;\n}\n/* Phone landscape and bigger */\n@media (min-width: 480px) {\n  .uk-grid-width-small-1-1 > * {\n    width: 100%;\n  }\n  .uk-grid-width-small-1-2 > * {\n    width: 50%;\n  }\n  .uk-grid-width-small-1-3 > * {\n    width: 33.333%;\n  }\n  .uk-grid-width-small-1-4 > * {\n    width: 25%;\n  }\n  .uk-grid-width-small-1-5 > * {\n    width: 20%;\n  }\n  .uk-grid-width-small-1-6 > * {\n    width: 16.666%;\n  }\n  .uk-grid-width-small-1-10 > * {\n    width: 10%;\n  }\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-grid-width-medium-1-1 > * {\n    width: 100%;\n  }\n  .uk-grid-width-medium-1-2 > * {\n    width: 50%;\n  }\n  .uk-grid-width-medium-1-3 > * {\n    width: 33.333%;\n  }\n  .uk-grid-width-medium-1-4 > * {\n    width: 25%;\n  }\n  .uk-grid-width-medium-1-5 > * {\n    width: 20%;\n  }\n  .uk-grid-width-medium-1-6 > * {\n    width: 16.666%;\n  }\n  .uk-grid-width-medium-1-10 > * {\n    width: 10%;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-grid-width-large-1-1 > * {\n    width: 100%;\n  }\n  .uk-grid-width-large-1-2 > * {\n    width: 50%;\n  }\n  .uk-grid-width-large-1-3 > * {\n    width: 33.333%;\n  }\n  .uk-grid-width-large-1-4 > * {\n    width: 25%;\n  }\n  .uk-grid-width-large-1-5 > * {\n    width: 20%;\n  }\n  .uk-grid-width-large-1-6 > * {\n    width: 16.666%;\n  }\n  .uk-grid-width-large-1-10 > * {\n    width: 10%;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-grid-width-xlarge-1-1 > * {\n    width: 100%;\n  }\n  .uk-grid-width-xlarge-1-2 > * {\n    width: 50%;\n  }\n  .uk-grid-width-xlarge-1-3 > * {\n    width: 33.333%;\n  }\n  .uk-grid-width-xlarge-1-4 > * {\n    width: 25%;\n  }\n  .uk-grid-width-xlarge-1-5 > * {\n    width: 20%;\n  }\n  .uk-grid-width-xlarge-1-6 > * {\n    width: 16.666%;\n  }\n  .uk-grid-width-xlarge-1-10 > * {\n    width: 10%;\n  }\n}\n/* Sub-objects: `uk-width-*`\n ========================================================================== */\n[class*='uk-width'] {\n  box-sizing: border-box;\n  width: 100%;\n}\n/*\n * Widths\n */\n/* Whole */\n.uk-width-1-1 {\n  width: 100%;\n}\n/* Halves */\n.uk-width-1-2,\n.uk-width-2-4,\n.uk-width-3-6,\n.uk-width-5-10 {\n  width: 50%;\n}\n/* Thirds */\n.uk-width-1-3,\n.uk-width-2-6 {\n  width: 33.333%;\n}\n.uk-width-2-3,\n.uk-width-4-6 {\n  width: 66.666%;\n}\n/* Quarters */\n.uk-width-1-4 {\n  width: 25%;\n}\n.uk-width-3-4 {\n  width: 75%;\n}\n/* Fifths */\n.uk-width-1-5,\n.uk-width-2-10 {\n  width: 20%;\n}\n.uk-width-2-5,\n.uk-width-4-10 {\n  width: 40%;\n}\n.uk-width-3-5,\n.uk-width-6-10 {\n  width: 60%;\n}\n.uk-width-4-5,\n.uk-width-8-10 {\n  width: 80%;\n}\n/* Sixths */\n.uk-width-1-6 {\n  width: 16.666%;\n}\n.uk-width-5-6 {\n  width: 83.333%;\n}\n/* Tenths */\n.uk-width-1-10 {\n  width: 10%;\n}\n.uk-width-3-10 {\n  width: 30%;\n}\n.uk-width-7-10 {\n  width: 70%;\n}\n.uk-width-9-10 {\n  width: 90%;\n}\n/* Phone landscape and bigger */\n@media (min-width: 480px) {\n  /* Whole */\n  .uk-width-small-1-1 {\n    width: 100%;\n  }\n  /* Halves */\n  .uk-width-small-1-2,\n  .uk-width-small-2-4,\n  .uk-width-small-3-6,\n  .uk-width-small-5-10 {\n    width: 50%;\n  }\n  /* Thirds */\n  .uk-width-small-1-3,\n  .uk-width-small-2-6 {\n    width: 33.333%;\n  }\n  .uk-width-small-2-3,\n  .uk-width-small-4-6 {\n    width: 66.666%;\n  }\n  /* Quarters */\n  .uk-width-small-1-4 {\n    width: 25%;\n  }\n  .uk-width-small-3-4 {\n    width: 75%;\n  }\n  /* Fifths */\n  .uk-width-small-1-5,\n  .uk-width-small-2-10 {\n    width: 20%;\n  }\n  .uk-width-small-2-5,\n  .uk-width-small-4-10 {\n    width: 40%;\n  }\n  .uk-width-small-3-5,\n  .uk-width-small-6-10 {\n    width: 60%;\n  }\n  .uk-width-small-4-5,\n  .uk-width-small-8-10 {\n    width: 80%;\n  }\n  /* Sixths */\n  .uk-width-small-1-6 {\n    width: 16.666%;\n  }\n  .uk-width-small-5-6 {\n    width: 83.333%;\n  }\n  /* Tenths */\n  .uk-width-small-1-10 {\n    width: 10%;\n  }\n  .uk-width-small-3-10 {\n    width: 30%;\n  }\n  .uk-width-small-7-10 {\n    width: 70%;\n  }\n  .uk-width-small-9-10 {\n    width: 90%;\n  }\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  /* Whole */\n  .uk-width-medium-1-1 {\n    width: 100%;\n  }\n  /* Halves */\n  .uk-width-medium-1-2,\n  .uk-width-medium-2-4,\n  .uk-width-medium-3-6,\n  .uk-width-medium-5-10 {\n    width: 50%;\n  }\n  /* Thirds */\n  .uk-width-medium-1-3,\n  .uk-width-medium-2-6 {\n    width: 33.333%;\n  }\n  .uk-width-medium-2-3,\n  .uk-width-medium-4-6 {\n    width: 66.666%;\n  }\n  /* Quarters */\n  .uk-width-medium-1-4 {\n    width: 25%;\n  }\n  .uk-width-medium-3-4 {\n    width: 75%;\n  }\n  /* Fifths */\n  .uk-width-medium-1-5,\n  .uk-width-medium-2-10 {\n    width: 20%;\n  }\n  .uk-width-medium-2-5,\n  .uk-width-medium-4-10 {\n    width: 40%;\n  }\n  .uk-width-medium-3-5,\n  .uk-width-medium-6-10 {\n    width: 60%;\n  }\n  .uk-width-medium-4-5,\n  .uk-width-medium-8-10 {\n    width: 80%;\n  }\n  /* Sixths */\n  .uk-width-medium-1-6 {\n    width: 16.666%;\n  }\n  .uk-width-medium-5-6 {\n    width: 83.333%;\n  }\n  /* Tenths */\n  .uk-width-medium-1-10 {\n    width: 10%;\n  }\n  .uk-width-medium-3-10 {\n    width: 30%;\n  }\n  .uk-width-medium-7-10 {\n    width: 70%;\n  }\n  .uk-width-medium-9-10 {\n    width: 90%;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  /* Whole */\n  .uk-width-large-1-1 {\n    width: 100%;\n  }\n  /* Halves */\n  .uk-width-large-1-2,\n  .uk-width-large-2-4,\n  .uk-width-large-3-6,\n  .uk-width-large-5-10 {\n    width: 50%;\n  }\n  /* Thirds */\n  .uk-width-large-1-3,\n  .uk-width-large-2-6 {\n    width: 33.333%;\n  }\n  .uk-width-large-2-3,\n  .uk-width-large-4-6 {\n    width: 66.666%;\n  }\n  /* Quarters */\n  .uk-width-large-1-4 {\n    width: 25%;\n  }\n  .uk-width-large-3-4 {\n    width: 75%;\n  }\n  /* Fifths */\n  .uk-width-large-1-5,\n  .uk-width-large-2-10 {\n    width: 20%;\n  }\n  .uk-width-large-2-5,\n  .uk-width-large-4-10 {\n    width: 40%;\n  }\n  .uk-width-large-3-5,\n  .uk-width-large-6-10 {\n    width: 60%;\n  }\n  .uk-width-large-4-5,\n  .uk-width-large-8-10 {\n    width: 80%;\n  }\n  /* Sixths */\n  .uk-width-large-1-6 {\n    width: 16.666%;\n  }\n  .uk-width-large-5-6 {\n    width: 83.333%;\n  }\n  /* Tenths */\n  .uk-width-large-1-10 {\n    width: 10%;\n  }\n  .uk-width-large-3-10 {\n    width: 30%;\n  }\n  .uk-width-large-7-10 {\n    width: 70%;\n  }\n  .uk-width-large-9-10 {\n    width: 90%;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  /* Whole */\n  .uk-width-xlarge-1-1 {\n    width: 100%;\n  }\n  /* Halves */\n  .uk-width-xlarge-1-2,\n  .uk-width-xlarge-2-4,\n  .uk-width-xlarge-3-6,\n  .uk-width-xlarge-5-10 {\n    width: 50%;\n  }\n  /* Thirds */\n  .uk-width-xlarge-1-3,\n  .uk-width-xlarge-2-6 {\n    width: 33.333%;\n  }\n  .uk-width-xlarge-2-3,\n  .uk-width-xlarge-4-6 {\n    width: 66.666%;\n  }\n  /* Quarters */\n  .uk-width-xlarge-1-4 {\n    width: 25%;\n  }\n  .uk-width-xlarge-3-4 {\n    width: 75%;\n  }\n  /* Fifths */\n  .uk-width-xlarge-1-5,\n  .uk-width-xlarge-2-10 {\n    width: 20%;\n  }\n  .uk-width-xlarge-2-5,\n  .uk-width-xlarge-4-10 {\n    width: 40%;\n  }\n  .uk-width-xlarge-3-5,\n  .uk-width-xlarge-6-10 {\n    width: 60%;\n  }\n  .uk-width-xlarge-4-5,\n  .uk-width-xlarge-8-10 {\n    width: 80%;\n  }\n  /* Sixths */\n  .uk-width-xlarge-1-6 {\n    width: 16.666%;\n  }\n  .uk-width-xlarge-5-6 {\n    width: 83.333%;\n  }\n  /* Tenths */\n  .uk-width-xlarge-1-10 {\n    width: 10%;\n  }\n  .uk-width-xlarge-3-10 {\n    width: 30%;\n  }\n  .uk-width-xlarge-7-10 {\n    width: 70%;\n  }\n  .uk-width-xlarge-9-10 {\n    width: 90%;\n  }\n}\n/* Sub-object: `uk-push-*` and `uk-pull-*`\n ========================================================================== */\n/*\n * Source ordering\n * Works only with `uk-width-medium-*`\n */\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  [class*='uk-push-'],\n  [class*='uk-pull-'] {\n    position: relative;\n  }\n  /*\n     * Push\n     */\n  /* Halves */\n  .uk-push-1-2,\n  .uk-push-2-4,\n  .uk-push-3-6,\n  .uk-push-5-10 {\n    left: 50%;\n  }\n  /* Thirds */\n  .uk-push-1-3,\n  .uk-push-2-6 {\n    left: 33.333%;\n  }\n  .uk-push-2-3,\n  .uk-push-4-6 {\n    left: 66.666%;\n  }\n  /* Quarters */\n  .uk-push-1-4 {\n    left: 25%;\n  }\n  .uk-push-3-4 {\n    left: 75%;\n  }\n  /* Fifths */\n  .uk-push-1-5,\n  .uk-push-2-10 {\n    left: 20%;\n  }\n  .uk-push-2-5,\n  .uk-push-4-10 {\n    left: 40%;\n  }\n  .uk-push-3-5,\n  .uk-push-6-10 {\n    left: 60%;\n  }\n  .uk-push-4-5,\n  .uk-push-8-10 {\n    left: 80%;\n  }\n  /* Sixths */\n  .uk-push-1-6 {\n    left: 16.666%;\n  }\n  .uk-push-5-6 {\n    left: 83.333%;\n  }\n  /* Tenths */\n  .uk-push-1-10 {\n    left: 10%;\n  }\n  .uk-push-3-10 {\n    left: 30%;\n  }\n  .uk-push-7-10 {\n    left: 70%;\n  }\n  .uk-push-9-10 {\n    left: 90%;\n  }\n  /*\n     * Pull\n     */\n  /* Halves */\n  .uk-pull-1-2,\n  .uk-pull-2-4,\n  .uk-pull-3-6,\n  .uk-pull-5-10 {\n    left: -50%;\n  }\n  /* Thirds */\n  .uk-pull-1-3,\n  .uk-pull-2-6 {\n    left: -33.333%;\n  }\n  .uk-pull-2-3,\n  .uk-pull-4-6 {\n    left: -66.666%;\n  }\n  /* Quarters */\n  .uk-pull-1-4 {\n    left: -25%;\n  }\n  .uk-pull-3-4 {\n    left: -75%;\n  }\n  /* Fifths */\n  .uk-pull-1-5,\n  .uk-pull-2-10 {\n    left: -20%;\n  }\n  .uk-pull-2-5,\n  .uk-pull-4-10 {\n    left: -40%;\n  }\n  .uk-pull-3-5,\n  .uk-pull-6-10 {\n    left: -60%;\n  }\n  .uk-pull-4-5,\n  .uk-pull-8-10 {\n    left: -80%;\n  }\n  /* Sixths */\n  .uk-pull-1-6 {\n    left: -16.666%;\n  }\n  .uk-pull-5-6 {\n    left: -83.333%;\n  }\n  /* Tenths */\n  .uk-pull-1-10 {\n    left: -10%;\n  }\n  .uk-pull-3-10 {\n    left: -30%;\n  }\n  .uk-pull-7-10 {\n    left: -70%;\n  }\n  .uk-pull-9-10 {\n    left: -90%;\n  }\n}\n/* ========================================================================\n   Component: Panel\n ========================================================================== */\n/*\n * 1. Needed for `a` elements\n * 2. Create position context for badges\n */\n.uk-panel {\n  /* 1 */\n  display: block;\n  /* 2 */\n  position: relative;\n}\n/*\n * Allow panels to be anchors\n */\n.uk-panel,\n.uk-panel:hover {\n  text-decoration: none;\n}\n/*\n * Micro clearfix to make panels more robust\n */\n.uk-panel:before,\n.uk-panel:after {\n  content: \"\";\n  display: table;\n}\n.uk-panel:after {\n  clear: both;\n}\n/*\n * Remove margin from the last-child if not `uk-widget-title`\n */\n.uk-panel > :not(.uk-panel-title):last-child {\n  margin-bottom: 0;\n}\n/* Sub-object: `uk-panel-title`\n ========================================================================== */\n.uk-panel-title {\n  margin-top: 0;\n  margin-bottom: 15px;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: normal;\n  text-transform: none;\n  color: #444;\n}\n/* Sub-object: `uk-panel-badge`\n ========================================================================== */\n.uk-panel-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n}\n/* Sub-object: `uk-panel-teaser`\n ========================================================================== */\n.uk-panel-teaser {\n  margin-bottom: 15px;\n}\n/* Sub-object: `uk-panel-body`\n ========================================================================== */\n.uk-panel-body {\n  padding: 15px;\n}\n/* Modifier: `uk-panel-box`\n ========================================================================== */\n.uk-panel-box {\n  padding: 15px;\n  background: #f5f5f5;\n  color: #444;\n}\n.uk-panel-box-hover:hover {\n  color: #444;\n}\n.uk-panel-box .uk-panel-title {\n  color: #444;\n}\n.uk-panel-box .uk-panel-badge {\n  top: 10px;\n  right: 10px;\n}\n.uk-panel-box > .uk-panel-teaser {\n  margin-top: -15px;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n/*\n * Nav in panel\n */\n.uk-panel-box > .uk-nav-side {\n  margin: 0 -15px;\n}\n/*\n * Sub-modifier: `uk-panel-box-primary`\n */\n.uk-panel-box-primary {\n  background-color: #ebf7fd;\n  color: #2d7091;\n}\n.uk-panel-box-primary-hover:hover {\n  color: #2d7091;\n}\n.uk-panel-box-primary .uk-panel-title {\n  color: #2d7091;\n}\n/*\n * Sub-modifier: `uk-panel-box-secondary`\n */\n.uk-panel-box-secondary {\n  background-color: #eee;\n  color: #444;\n}\n.uk-panel-box-secondary-hover:hover {\n  color: #444;\n}\n.uk-panel-box-secondary .uk-panel-title {\n  color: #444;\n}\n/* Modifier: `uk-panel-hover`\n ========================================================================== */\n.uk-panel-hover {\n  padding: 15px;\n  color: #444;\n}\n.uk-panel-hover:hover {\n  background: #f5f5f5;\n  color: #444;\n}\n.uk-panel-hover .uk-panel-badge {\n  top: 10px;\n  right: 10px;\n}\n.uk-panel-hover > .uk-panel-teaser {\n  margin-top: -15px;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n/* Modifier: `uk-panel-header`\n ========================================================================== */\n.uk-panel-header .uk-panel-title {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ddd;\n  color: #444;\n}\n/* Modifier: `uk-panel-space`\n ========================================================================== */\n.uk-panel-space {\n  padding: 30px;\n}\n.uk-panel-space .uk-panel-badge {\n  top: 30px;\n  right: 30px;\n}\n/* Modifier: `uk-panel-divider`\n ========================================================================== */\n.uk-panel + .uk-panel-divider {\n  margin-top: 50px !important;\n}\n.uk-panel + .uk-panel-divider:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -25px;\n  left: 0;\n  right: 0;\n  border-top: 1px solid #ddd;\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-panel + .uk-panel-divider {\n    margin-top: 70px !important;\n  }\n  .uk-panel + .uk-panel-divider:before {\n    top: -35px;\n  }\n}\n/* ========================================================================\n   Component: Block\n ========================================================================== */\n.uk-block {\n  position: relative;\n  box-sizing: border-box;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/* Phone landscape and bigger */\n@media (min-width: 768px) {\n  .uk-block {\n    padding-top: 50px;\n    padding-bottom: 50px;\n  }\n}\n/*\n * Micro clearfix to make blocks more robust\n */\n.uk-block:before,\n.uk-block:after {\n  content: \"\";\n  display: table;\n}\n.uk-block:after {\n  clear: both;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-block > :last-child {\n  margin-bottom: 0;\n}\n/* Padding Modifier\n ========================================================================== */\n/*\n * Large padding\n */\n.uk-block-large {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/* Tablets and bigger */\n@media (min-width: 768px) {\n  .uk-block-large {\n    padding-top: 50px;\n    padding-bottom: 50px;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-block-large {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n}\n/* Color Modifier\n ========================================================================== */\n/*\n * Default\n */\n.uk-block-default {\n  background: #fff;\n}\n/*\n * Muted\n */\n.uk-block-muted {\n  background: #f9f9f9;\n}\n/*\n * Primary\n */\n.uk-block-primary {\n  background: #00a8e6;\n}\n/*\n * Secondary\n */\n.uk-block-secondary {\n  background: #222;\n}\n/*\n     * Adjust padding between equal colored blocks\n     */\n.uk-block-default + .uk-block-default,\n.uk-block-muted + .uk-block-muted,\n.uk-block-primary + .uk-block-primary,\n.uk-block-secondary + .uk-block-secondary {\n  padding-top: 0;\n}\n/* ========================================================================\n   Component: Article\n ========================================================================== */\n/*\n * Micro clearfix to make articles more robust\n */\n.uk-article:before,\n.uk-article:after {\n  content: \"\";\n  display: table;\n}\n.uk-article:after {\n  clear: both;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-article > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Vertical gutter for articles\n */\n.uk-article + .uk-article {\n  margin-top: 25px;\n}\n/* Sub-object `uk-article-title`\n ========================================================================== */\n.uk-article-title {\n  font-size: 36px;\n  line-height: 42px;\n  font-weight: normal;\n  text-transform: none;\n}\n.uk-article-title a {\n  color: inherit;\n  text-decoration: none;\n}\n/* Sub-object `uk-article-meta`\n ========================================================================== */\n.uk-article-meta {\n  font-size: 12px;\n  line-height: 18px;\n  color: #999;\n}\n/* Sub-object `uk-article-lead`\n ========================================================================== */\n.uk-article-lead {\n  color: #444;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: normal;\n}\n/* Sub-object `uk-article-divider`\n ========================================================================== */\n.uk-article-divider {\n  margin-bottom: 25px;\n  border-color: #ddd;\n}\n* + .uk-article-divider {\n  margin-top: 25px;\n}\n/* ========================================================================\n   Component: Comment\n ========================================================================== */\n/* Sub-object `uk-comment-header`\n ========================================================================== */\n.uk-comment-header {\n  margin-bottom: 15px;\n}\n/*\n * Micro clearfix\n */\n.uk-comment-header:before,\n.uk-comment-header:after {\n  content: \"\";\n  display: table;\n}\n.uk-comment-header:after {\n  clear: both;\n}\n/* Sub-object `uk-comment-avatar`\n ========================================================================== */\n.uk-comment-avatar {\n  margin-right: 15px;\n  float: left;\n}\n/* Sub-object `uk-comment-title`\n ========================================================================== */\n.uk-comment-title {\n  margin: 5px 0 0 0;\n  font-size: 16px;\n  line-height: 22px;\n}\n/* Sub-object `uk-comment-meta`\n ========================================================================== */\n.uk-comment-meta {\n  margin: 2px 0 0 0;\n  font-size: 11px;\n  line-height: 16px;\n  color: #999;\n}\n/* Sub-object `uk-comment-body`\n ========================================================================== */\n/*\n * Remove margin from the last-child\n */\n.uk-comment-body > :last-child {\n  margin-bottom: 0;\n}\n/* Sub-object `uk-comment-list`\n ========================================================================== */\n.uk-comment-list {\n  padding: 0;\n  list-style: none;\n}\n.uk-comment-list .uk-comment + ul {\n  margin: 15px 0 0 0;\n  list-style: none;\n}\n.uk-comment-list > li:nth-child(n+2),\n.uk-comment-list .uk-comment + ul > li:nth-child(n+2) {\n  margin-top: 15px;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-comment-list .uk-comment + ul {\n    padding-left: 100px;\n  }\n}\n/* Modifier `uk-comment-primary`\n ========================================================================== */\n/* ========================================================================\n   Component: Cover\n ========================================================================== */\n/*\n * Background image always covers and centers its element\n */\n.uk-cover-background {\n  background-position: 50% 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*\n * Emulates image cover, works with video and image elements\n * 1. Parent container which clips resized object\n * 2. Resizes the object to always covers its container\n * 3. Reset the responsive image CSS\n * 4. Center object\n */\n/* 1 */\n.uk-cover {\n  overflow: hidden;\n}\n.uk-cover-object {\n  /* 2 */\n  width: auto;\n  height: auto;\n  min-width: 100%;\n  min-height: 100%;\n  /* 3 */\n  max-width: none;\n  /* 4 */\n  position: relative;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n/*\n * To center iframes use `data-uk-cover` JavaScript\n */\n[data-uk-cover] {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n/* ========================================================================\n   Component: Nav\n ========================================================================== */\n.uk-nav,\n.uk-nav ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/*\n * Items\n */\n.uk-nav li > a {\n  display: block;\n  text-decoration: none;\n}\n.uk-nav > li > a {\n  padding: 5px 15px;\n}\n/*\n * Nested items\n */\n.uk-nav ul {\n  padding-left: 15px;\n}\n.uk-nav ul a {\n  padding: 2px 0;\n}\n/*\n * Item subtitle\n */\n.uk-nav li > a > div {\n  font-size: 12px;\n  line-height: 18px;\n}\n/* Sub-object: `uk-nav-header`\n ========================================================================== */\n.uk-nav-header {\n  padding: 5px 15px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n}\n.uk-nav-header:not(:first-child) {\n  margin-top: 15px;\n}\n/* Sub-object: `uk-nav-divider`\n ========================================================================== */\n.uk-nav-divider {\n  margin: 9px 15px;\n}\n/* Sub-object: `uk-nav-sub`\n ========================================================================== */\n/*\n * `ul` needed for higher specificity to override padding\n */\nul.uk-nav-sub {\n  padding: 5px 0 5px 15px;\n}\n/* Modifier: `uk-nav-parent-icon`\n ========================================================================== */\n.uk-nav-parent-icon > .uk-parent > a:after {\n  content: \"\\F104\";\n  width: 20px;\n  margin-right: -10px;\n  float: right;\n  font-family: FontAwesome;\n  text-align: center;\n}\n.uk-nav-parent-icon > .uk-parent.uk-open > a:after {\n  content: \"\\F107\";\n}\n/* Modifier `uk-nav-side`\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-side > li > a {\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-nav-side > li > a:hover,\n.uk-nav-side > li > a:focus {\n  background: rgba(0, 0, 0, 0.05);\n  color: #444;\n  /* 2 */\n  outline: none;\n}\n/* Active */\n.uk-nav-side > li.uk-active > a {\n  background: #00a8e6;\n  color: #fff;\n}\n/*\n * Sub-object: `uk-nav-header`\n */\n.uk-nav-side .uk-nav-header {\n  color: #444;\n}\n/*\n * Sub-object: `uk-nav-divider`\n */\n.uk-nav-side .uk-nav-divider {\n  border-top: 1px solid #ddd;\n}\n/*\n * Nested items\n */\n.uk-nav-side ul a {\n  color: #07D;\n}\n.uk-nav-side ul a:hover {\n  color: #059;\n}\n/* Modifier `uk-nav-dropdown`\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-dropdown > li > a {\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-nav-dropdown > li > a:hover,\n.uk-nav-dropdown > li > a:focus {\n  background: #00a8e6;\n  color: #fff;\n  /* 2 */\n  outline: none;\n}\n/*\n * Sub-object: `uk-nav-header`\n */\n.uk-nav-dropdown .uk-nav-header {\n  color: #999;\n}\n/*\n * Sub-object: `uk-nav-divider`\n */\n.uk-nav-dropdown .uk-nav-divider {\n  border-top: 1px solid #ddd;\n}\n/*\n * Nested items\n */\n.uk-nav-dropdown ul a {\n  color: #07D;\n}\n.uk-nav-dropdown ul a:hover {\n  color: #059;\n}\n/* Modifier `uk-nav-navbar`\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-navbar > li > a {\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-nav-navbar > li > a:hover,\n.uk-nav-navbar > li > a:focus {\n  background: #00a8e6;\n  color: #fff;\n  /* 2 */\n  outline: none;\n}\n/*\n * Sub-object: `uk-nav-header`\n */\n.uk-nav-navbar .uk-nav-header {\n  color: #999;\n}\n/*\n * Sub-object: `uk-nav-divider`\n */\n.uk-nav-navbar .uk-nav-divider {\n  border-top: 1px solid #ddd;\n}\n/*\n * Nested items\n */\n.uk-nav-navbar ul a {\n  color: #07D;\n}\n.uk-nav-navbar ul a:hover {\n  color: #059;\n}\n/* Modifier `uk-nav-offcanvas`\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-offcanvas > li > a {\n  color: #ccc;\n  padding: 10px 15px;\n}\n/*\n * Hover\n * No hover on touch devices because it behaves buggy in fixed offcanvas\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-nav-offcanvas > .uk-open > a,\nhtml:not(.uk-touch) .uk-nav-offcanvas > li > a:hover,\nhtml:not(.uk-touch) .uk-nav-offcanvas > li > a:focus {\n  background: #404040;\n  color: #fff;\n  /* 2 */\n  outline: none;\n}\n/*\n * Active\n * `html .uk-nav` needed for higher specificity to override hover\n */\nhtml .uk-nav.uk-nav-offcanvas > li.uk-active > a {\n  background: #1a1a1a;\n  color: #fff;\n}\n/*\n * Sub-object: `uk-nav-header`\n */\n.uk-nav-offcanvas .uk-nav-header {\n  color: #777;\n}\n/*\n * Sub-object: `uk-nav-divider`\n */\n.uk-nav-offcanvas .uk-nav-divider {\n  border-top: 1px solid #1a1a1a;\n}\n/*\n * Nested items\n * No hover on touch devices because it behaves buggy in fixed offcanvas\n */\n.uk-nav-offcanvas ul a {\n  color: #ccc;\n}\nhtml:not(.uk-touch) .uk-nav-offcanvas ul a:hover {\n  color: #fff;\n}\n/* ========================================================================\n   Component: Navbar\n ========================================================================== */\n.uk-navbar {\n  background: #eee;\n  color: #444;\n}\n/*\n * Micro clearfix\n */\n.uk-navbar:before,\n.uk-navbar:after {\n  content: \"\";\n  display: table;\n}\n.uk-navbar:after {\n  clear: both;\n}\n/* Sub-object: `uk-navbar-nav`\n ========================================================================== */\n.uk-navbar-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  float: left;\n}\n/*\n * 1. Create position context for dropdowns\n */\n.uk-navbar-nav > li {\n  float: left;\n  /* 1 */\n  position: relative;\n}\n/*\n * 1. Dimensions\n * 2. Style\n */\n.uk-navbar-nav > li > a {\n  display: block;\n  box-sizing: border-box;\n  text-decoration: none;\n  /* 1 */\n  height: 40px;\n  padding: 0 15px;\n  line-height: 40px;\n  /* 2 */\n  color: #444;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n}\n/* Appear not as link */\n.uk-navbar-nav > li > a[href='#'] {\n  cursor: text;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Also apply if dropdown is opened\n * 3. Remove default focus style\n */\n.uk-navbar-nav > li:hover > a,\n.uk-navbar-nav > li > a:focus,\n.uk-navbar-nav > li.uk-open > a {\n  background-color: #f5f5f5;\n  color: #444;\n  /* 3 */\n  outline: none;\n}\n/* OnClick */\n.uk-navbar-nav > li > a:active {\n  background-color: #ddd;\n  color: #444;\n}\n/* Active */\n.uk-navbar-nav > li.uk-active > a {\n  background-color: #f5f5f5;\n  color: #444;\n}\n/* Sub-objects: `uk-navbar-nav-subtitle`\n ========================================================================== */\n.uk-navbar-nav .uk-navbar-nav-subtitle {\n  line-height: 28px;\n}\n.uk-navbar-nav-subtitle > div {\n  margin-top: -6px;\n  font-size: 10px;\n  line-height: 12px;\n}\n/* Sub-objects: `uk-navbar-content`, `uk-navbar-brand`, `uk-navbar-toggle`\n ========================================================================== */\n/*\n * Imitate navbar items\n */\n.uk-navbar-content,\n.uk-navbar-brand,\n.uk-navbar-toggle {\n  box-sizing: border-box;\n  display: block;\n  height: 40px;\n  padding: 0 15px;\n  float: left;\n}\n/*\n * Helper to center all child elements vertically\n */\n.uk-navbar-content:before,\n.uk-navbar-brand:before,\n.uk-navbar-toggle:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n/* Sub-objects: `uk-navbar-content`\n ========================================================================== */\n/*\n * Better sibling spacing\n */\n.uk-navbar-content + .uk-navbar-content:not(.uk-navbar-center) {\n  padding-left: 0;\n}\n/*\n * Link colors\n */\n.uk-navbar-content > a:not([class]) {\n  color: #07D;\n}\n.uk-navbar-content > a:not([class]):hover {\n  color: #059;\n}\n/* Sub-objects: `uk-navbar-brand`\n ========================================================================== */\n.uk-navbar-brand {\n  font-size: 18px;\n  color: #444;\n  text-decoration: none;\n}\n/*\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-navbar-brand:hover,\n.uk-navbar-brand:focus {\n  color: #444;\n  text-decoration: none;\n  /* 2 */\n  outline: none;\n}\n/* Sub-object: `uk-navbar-toggle`\n ========================================================================== */\n.uk-navbar-toggle {\n  font-size: 18px;\n  color: #444;\n  text-decoration: none;\n}\n/*\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-navbar-toggle:hover,\n.uk-navbar-toggle:focus {\n  color: #444;\n  text-decoration: none;\n  /* 2 */\n  outline: none;\n}\n/*\n * 1. Center icon vertically\n */\n.uk-navbar-toggle:after {\n  content: \"\\F0C9\";\n  font-family: FontAwesome;\n  /* 1 */\n  vertical-align: middle;\n}\n.uk-navbar-toggle-alt:after {\n  content: \"\\F002\";\n}\n/* Sub-object: `uk-navbar-center`\n ========================================================================== */\n/*\n * The element with this class needs to be last child in the navbar\n * 1. This hack is needed because other float elements shift centered text\n */\n.uk-navbar-center {\n  float: none;\n  text-align: center;\n  /* 1 */\n  max-width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/* Sub-object: `uk-navbar-flip`\n ========================================================================== */\n.uk-navbar-flip {\n  float: right;\n}\n/* ========================================================================\n   Component: Subnav\n ========================================================================== */\n/*\n * 1. Gutter\n * 2. Remove default list style\n */\n.uk-subnav {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  /* 1 */\n  margin-left: -10px;\n  margin-top: -10px;\n  /* 2 */\n  padding: 0;\n  list-style: none;\n}\n/*\n * 1. Space is allocated solely based on content dimensions\n * 2. Horizontal gutter is using `padding` so `uk-width-*` classes can be applied\n * 3. Create position context for dropdowns\n */\n.uk-subnav > * {\n  /* 1 */\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n  /* 2 */\n  padding-left: 10px;\n  margin-top: 10px;\n  /* 3 */\n  position: relative;\n}\n/*\n * DEPRECATED IE9 Support\n */\n.uk-subnav:before,\n.uk-subnav:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n}\n.uk-subnav:after {\n  clear: both;\n}\n.uk-subnav > * {\n  float: left;\n}\n/* Items\n ========================================================================== */\n.uk-subnav > * > * {\n  display: inline-block;\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n */\n.uk-subnav > * > :hover,\n.uk-subnav > * > :focus {\n  color: #07D;\n  text-decoration: none;\n}\n/*\n * Active\n */\n.uk-subnav > .uk-active > * {\n  color: #07D;\n}\n/* Modifier: 'subnav-line'\n ========================================================================== */\n.uk-subnav-line > :before {\n  content: \"\";\n  display: inline-block;\n  height: 10px;\n  vertical-align: middle;\n}\n.uk-subnav-line > :nth-child(n+2):before {\n  margin-right: 10px;\n  border-left: 1px solid #ddd;\n}\n/* Modifier: 'subnav-pill'\n ========================================================================== */\n.uk-subnav-pill > * > * {\n  padding: 3px 9px;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-subnav-pill > * > :hover,\n.uk-subnav-pill > * > :focus {\n  background: #eee;\n  color: #444;\n  text-decoration: none;\n  /* 2 */\n  outline: none;\n}\n/*\n * Active\n * `li` needed for higher specificity to override hover\n */\n.uk-subnav-pill > .uk-active > * {\n  background: #00a8e6;\n  color: #fff;\n}\n/* Disabled state\n ========================================================================== */\n.uk-subnav > .uk-disabled > * {\n  background: none;\n  color: #999;\n  text-decoration: none;\n  cursor: text;\n}\n/* ========================================================================\n   Component: Breadcrumb\n ========================================================================== */\n/*\n * 1. Remove default list style\n * 2. Remove whitespace between child elements when using `inline-block`\n */\n.uk-breadcrumb {\n  /* 1 */\n  padding: 0;\n  list-style: none;\n  /* 2 */\n  font-size: 0.001px;\n}\n/* Items\n ========================================================================== */\n/*\n * Reset whitespace hack\n */\n.uk-breadcrumb > li {\n  font-size: 1rem;\n  vertical-align: top;\n}\n.uk-breadcrumb > li,\n.uk-breadcrumb > li > a,\n.uk-breadcrumb > li > span {\n  display: inline-block;\n}\n.uk-breadcrumb > li:nth-child(n+2):before {\n  content: \"/\";\n  display: inline-block;\n  margin: 0 8px;\n}\n/*\n * Disabled\n */\n.uk-breadcrumb > li:not(.uk-active) > span {\n  color: #999;\n}\n/* ========================================================================\n   Component: Pagination\n ========================================================================== */\n/*\n * 1. Remove default list style\n * 2. Center pagination by default\n * 3. Remove whitespace between child elements when using `inline-block`\n */\n.uk-pagination {\n  /* 1 */\n  padding: 0;\n  list-style: none;\n  /* 2 */\n  text-align: center;\n  /* 3 */\n  font-size: 0.001px;\n}\n/*\n * Micro clearfix\n * Needed if `uk-pagination-previous` or `uk-pagination-next` sub-objects are used\n */\n.uk-pagination:before,\n.uk-pagination:after {\n  content: \"\";\n  display: table;\n}\n.uk-pagination:after {\n  clear: both;\n}\n/* Items\n ========================================================================== */\n/*\n * 1. Reset whitespace hack\n * 2. Remove the gap at the bottom of it container\n */\n.uk-pagination > li {\n  display: inline-block;\n  /* 1 */\n  font-size: 1rem;\n  /* 2 */\n  vertical-align: top;\n}\n.uk-pagination > li:nth-child(n+2) {\n  margin-left: 5px;\n}\n/*\n * 1. Makes pagination more robust against different box-sizing use\n * 2. Reset text-align to center if alignment modifier is used\n */\n.uk-pagination > li > a,\n.uk-pagination > li > span {\n  display: inline-block;\n  min-width: 16px;\n  padding: 3px 5px;\n  line-height: 20px;\n  text-decoration: none;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n  text-align: center;\n}\n/*\n * Links\n */\n.uk-pagination > li > a {\n  background: #eee;\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-pagination > li > a:hover,\n.uk-pagination > li > a:focus {\n  background-color: #f5f5f5;\n  color: #444;\n  /* 2 */\n  outline: none;\n}\n/* OnClick */\n.uk-pagination > li > a:active {\n  background-color: #ddd;\n  color: #444;\n}\n/*\n * Active\n */\n.uk-pagination > .uk-active > span {\n  background: #00a8e6;\n  color: #fff;\n}\n/*\n * Disabled\n */\n.uk-pagination > .uk-disabled > span {\n  background-color: #f5f5f5;\n  color: #999;\n}\n/* Previous and next navigation\n ========================================================================== */\n.uk-pagination-previous {\n  float: left;\n}\n.uk-pagination-next {\n  float: right;\n}\n/* Alignment modifiers\n ========================================================================== */\n.uk-pagination-left {\n  text-align: left;\n}\n.uk-pagination-right {\n  text-align: right;\n}\n/* ========================================================================\n   Component: Tab\n ========================================================================== */\n.uk-tab {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  border-bottom: 1px solid #ddd;\n}\n/*\n * Micro clearfix on the deepest container\n */\n.uk-tab:before,\n.uk-tab:after {\n  content: \"\";\n  display: table;\n}\n.uk-tab:after {\n  clear: both;\n}\n/*\n * Items\n * 1. Create position context for dropdowns\n */\n.uk-tab > li {\n  margin-bottom: -1px;\n  float: left;\n  /* 1 */\n  position: relative;\n}\n.uk-tab > li > a {\n  display: block;\n  padding: 8px 12px 8px 12px;\n  border: 1px solid transparent;\n  border-bottom-width: 0;\n  color: #07D;\n  text-decoration: none;\n}\n.uk-tab > li:nth-child(n+2) > a {\n  margin-left: 5px;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Also apply if dropdown is opened\n * 3. Remove default focus style\n */\n.uk-tab > li > a:hover,\n.uk-tab > li > a:focus,\n.uk-tab > li.uk-open > a {\n  border-color: #f5f5f5;\n  background: #f5f5f5;\n  color: #059;\n  /* 2 */\n  outline: none;\n}\n.uk-tab > li:not(.uk-active) > a:hover,\n.uk-tab > li:not(.uk-active) > a:focus,\n.uk-tab > li.uk-open:not(.uk-active) > a {\n  margin-bottom: 1px;\n  padding-bottom: 7px;\n}\n/* Active */\n.uk-tab > li.uk-active > a {\n  border-color: #ddd;\n  border-bottom-color: transparent;\n  background: #fff;\n  color: #444;\n}\n/* Disabled */\n.uk-tab > li.uk-disabled > a {\n  color: #999;\n  cursor: text;\n}\n.uk-tab > li.uk-disabled > a:hover,\n.uk-tab > li.uk-disabled > a:focus,\n.uk-tab > li.uk-disabled.uk-active > a {\n  background: none;\n  border-color: transparent;\n}\n/* Modifier: 'tab-flip'\n ========================================================================== */\n.uk-tab-flip > li {\n  float: right;\n}\n.uk-tab-flip > li:nth-child(n+2) > a {\n  margin-left: 0;\n  margin-right: 5px;\n}\n/* Modifier: 'tab-responsive'\n ========================================================================== */\n.uk-tab > li.uk-tab-responsive > a {\n  margin-left: 0;\n  margin-right: 0;\n}\n/*\n * Icon\n */\n.uk-tab-responsive > a:before {\n  content: \"\\F0C9\\A0\";\n  font-family: FontAwesome;\n}\n/* Modifier: 'tab-center'\n ========================================================================== */\n.uk-tab-center {\n  border-bottom: 1px solid #ddd;\n}\n.uk-tab-center-bottom {\n  border-bottom: none;\n  border-top: 1px solid #ddd;\n}\n.uk-tab-center:before,\n.uk-tab-center:after {\n  content: \"\";\n  display: table;\n}\n.uk-tab-center:after {\n  clear: both;\n}\n/*\n * 1. Using `right` to prevent vertical scrollbar caused by centering if to many tabs\n */\n.uk-tab-center .uk-tab {\n  position: relative;\n  right: 50%;\n  border: none;\n  float: right;\n}\n.uk-tab-center .uk-tab > li {\n  position: relative;\n  right: -50%;\n}\n.uk-tab-center .uk-tab > li > a {\n  text-align: center;\n}\n/* Modifier: 'tab-bottom'\n ========================================================================== */\n.uk-tab-bottom {\n  border-top: 1px solid #ddd;\n  border-bottom: none;\n}\n.uk-tab-bottom > li {\n  margin-top: -1px;\n  margin-bottom: 0;\n}\n.uk-tab-bottom > li > a {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom-width: 1px;\n  border-top-width: 0;\n}\n.uk-tab-bottom > li:not(.uk-active) > a:hover,\n.uk-tab-bottom > li:not(.uk-active) > a:focus,\n.uk-tab-bottom > li.uk-open:not(.uk-active) > a {\n  margin-bottom: 0;\n  margin-top: 1px;\n  padding-bottom: 8px;\n  padding-top: 7px;\n}\n.uk-tab-bottom > li.uk-active > a {\n  border-top-color: transparent;\n  border-bottom-color: #ddd;\n}\n/* Modifier: 'tab-grid'\n ========================================================================== */\n/*\n * 1. Create position context to prevent hidden border because of negative `z-index`\n */\n.uk-tab-grid {\n  margin-left: -5px;\n  border-bottom: none;\n  /* 1 */\n  position: relative;\n  z-index: 0;\n}\n.uk-tab-grid:before {\n  display: block;\n  position: absolute;\n  left: 5px;\n  right: 0;\n  bottom: -1px;\n  border-top: 1px solid #ddd;\n  /* 1 */\n  z-index: -1;\n}\n.uk-tab-grid > li:first-child > a {\n  margin-left: 5px;\n}\n.uk-tab-grid > li > a {\n  text-align: center;\n}\n/*\n * If `uk-tab-bottom`\n */\n.uk-tab-grid.uk-tab-bottom {\n  border-top: none;\n}\n.uk-tab-grid.uk-tab-bottom:before {\n  top: -1px;\n  bottom: auto;\n}\n/* Modifier: 'tab-left', 'tab-right'\n ========================================================================== */\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-tab-left,\n  .uk-tab-right {\n    border-bottom: none;\n  }\n  .uk-tab-left > li,\n  .uk-tab-right > li {\n    margin-bottom: 0;\n    float: none;\n  }\n  .uk-tab-left > li > a,\n  .uk-tab-right > li > a {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n  .uk-tab-left > li:nth-child(n+2) > a,\n  .uk-tab-right > li:nth-child(n+2) > a {\n    margin-left: 0;\n    margin-top: 5px;\n  }\n  .uk-tab-left > li.uk-active > a,\n  .uk-tab-right > li.uk-active > a {\n    border-color: #ddd;\n  }\n  /*\n     * Modifier: 'tab-left'\n     */\n  .uk-tab-left {\n    border-right: 1px solid #ddd;\n  }\n  .uk-tab-left > li {\n    margin-right: -1px;\n  }\n  .uk-tab-left > li > a {\n    border-bottom-width: 1px;\n    border-right-width: 0;\n  }\n  .uk-tab-left > li:not(.uk-active) > a:hover,\n  .uk-tab-left > li:not(.uk-active) > a:focus {\n    margin-bottom: 0;\n    margin-right: 1px;\n    padding-bottom: 8px;\n    padding-right: 11px;\n  }\n  .uk-tab-left > li.uk-active > a {\n    border-right-color: transparent;\n  }\n  /*\n     * Modifier: 'tab-right'\n     */\n  .uk-tab-right {\n    border-left: 1px solid #ddd;\n  }\n  .uk-tab-right > li {\n    margin-left: -1px;\n  }\n  .uk-tab-right > li > a {\n    border-bottom-width: 1px;\n    border-left-width: 0;\n  }\n  .uk-tab-right > li:not(.uk-active) > a:hover,\n  .uk-tab-right > li:not(.uk-active) > a:focus {\n    margin-bottom: 0;\n    margin-left: 1px;\n    padding-bottom: 8px;\n    padding-left: 11px;\n  }\n  .uk-tab-right > li.uk-active > a {\n    border-left-color: transparent;\n  }\n}\n/* ========================================================================\n   Component: Thumbnav\n ========================================================================== */\n/*\n * 1. Gutter\n * 2. Remove default list style\n */\n.uk-thumbnav {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  /* 1 */\n  margin-left: -10px;\n  margin-top: -10px;\n  /* 2 */\n  padding: 0;\n  list-style: none;\n}\n/*\n * 1. Space is allocated solely based on content dimensions\n * 2. Horizontal gutter is using `padding` so `uk-width-*` classes can be applied\n */\n.uk-thumbnav > * {\n  /* 1 */\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n  /* 2 */\n  padding-left: 10px;\n  margin-top: 10px;\n}\n/*\n * DEPRECATED IE9 Support\n */\n.uk-thumbnav:before,\n.uk-thumbnav:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n}\n.uk-thumbnav:after {\n  clear: both;\n}\n.uk-thumbnav > * {\n  float: left;\n}\n/* Items\n ========================================================================== */\n.uk-thumbnav > * > * {\n  display: block;\n  background: #fff;\n}\n.uk-thumbnav > * > * > img {\n  opacity: 0.7;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n/*\n * Hover\n */\n.uk-thumbnav > * > :hover > img,\n.uk-thumbnav > * > :focus > img {\n  opacity: 1;\n}\n/*\n * Active\n */\n.uk-thumbnav > .uk-active > * > img {\n  opacity: 1;\n}\n/* ========================================================================\n   Component: List\n ========================================================================== */\n.uk-list {\n  padding: 0;\n  list-style: none;\n}\n/*\n * Micro clearfix to make list more robust\n */\n.uk-list > li:before,\n.uk-list > li:after {\n  content: \"\";\n  display: table;\n}\n.uk-list > li:after {\n  clear: both;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-list > li > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Nested lists\n */\n.uk-list ul {\n  margin: 0;\n  padding-left: 20px;\n  list-style: none;\n}\n/* Modifier: `uk-list-line`\n ========================================================================== */\n.uk-list-line > li:nth-child(n+2) {\n  margin-top: 5px;\n  padding-top: 5px;\n  border-top: 1px solid #ddd;\n}\n/* Modifier: `uk-list-striped`\n ========================================================================== */\n.uk-list-striped > li {\n  padding: 5px 5px;\n}\n.uk-list-striped > li:nth-of-type(odd) {\n  background: #f5f5f5;\n}\n/* Modifier: `uk-list-space`\n ========================================================================== */\n.uk-list-space > li:nth-child(n+2) {\n  margin-top: 10px;\n}\n/* ========================================================================\n   Component: Description list\n ========================================================================== */\n/* Modifier: `uk-description-list-horizontal`\n ========================================================================== */\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-description-list-horizontal {\n    overflow: hidden;\n  }\n  .uk-description-list-horizontal > dt {\n    width: 160px;\n    float: left;\n    clear: both;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .uk-description-list-horizontal > dd {\n    margin-left: 180px;\n  }\n}\n/* Modifier: `uk-description-list-line`\n ========================================================================== */\n.uk-description-list-line > dt {\n  font-weight: normal;\n}\n.uk-description-list-line > dt:nth-child(n+2) {\n  margin-top: 5px;\n  padding-top: 5px;\n  border-top: 1px solid #ddd;\n}\n.uk-description-list-line > dd {\n  color: #999;\n}\n/* ========================================================================\n   Component: Table\n ========================================================================== */\n/*\n * 1. Remove most spacing between table cells.\n * 2. Block element behavior\n * 3. Style\n */\n.uk-table {\n  /* 1 */\n  border-collapse: collapse;\n  border-spacing: 0;\n  /* 2 */\n  width: 100%;\n  /* 3 */\n  margin-bottom: 15px;\n}\n/*\n * Add margin if adjacent element\n */\n* + .uk-table {\n  margin-top: 15px;\n}\n.uk-table th,\n.uk-table td {\n  padding: 8px 8px;\n}\n/*\n * Set alignment\n */\n.uk-table th {\n  text-align: left;\n}\n.uk-table td {\n  vertical-align: top;\n}\n.uk-table thead th {\n  vertical-align: bottom;\n}\n/*\n * Caption and footer\n */\n.uk-table caption,\n.uk-table tfoot {\n  font-size: 12px;\n  font-style: italic;\n}\n.uk-table caption {\n  text-align: left;\n  color: #999;\n}\n/*\n * Active State\n */\n.uk-table tbody tr.uk-active {\n  background: #EEE;\n}\n/* Sub-modifier: `uk-table-middle`\n ========================================================================== */\n.uk-table-middle,\n.uk-table-middle td {\n  vertical-align: middle !important;\n}\n/* Modifier: `uk-table-striped`\n ========================================================================== */\n.uk-table-striped tbody tr:nth-of-type(odd) {\n  background: #f5f5f5;\n}\n/* Modifier: `uk-table-condensed`\n ========================================================================== */\n.uk-table-condensed td {\n  padding: 4px 8px;\n}\n/* Modifier: `uk-table-hover`\n ========================================================================== */\n.uk-table-hover tbody tr:hover {\n  background: #EEE;\n}\n/* ========================================================================\n   Component: Form\n ========================================================================== */\n/*\n * 1. Define consistent box sizing.\n *    Default is `content-box` with following exceptions set to `border-box`\n *    `button`, `select`, `input[type=\"checkbox\"]` and `input[type=\"radio\"]`\n *    `input[type=\"search\"]` in Chrome, Safari and Opera\n *    `input[type=\"color\"]` in Firefox\n * 2. Address margins set differently in Firefox/IE and Chrome/Safari/Opera.\n * 3. Remove `border-radius` in iOS.\n * 4. Correct `font` properties and `color` not being inherited.\n */\n.uk-form input,\n.uk-form select,\n.uk-form textarea {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  border-radius: 0;\n  /* 4 */\n  font: inherit;\n  color: inherit;\n}\n/*\n * Address inconsistent `text-transform` inheritance which is only inherit in Firefox\n */\n.uk-form select {\n  text-transform: none;\n}\n/*\n * 1. Correct `font` properties not being inherited.\n * 2. Don't inherit the `font-weight` and use `bold` instead.\n * NOTE: Both declarations don't work in Chrome, Safari and Opera.\n */\n.uk-form optgroup {\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  font-weight: bold;\n}\n/*\n * Removes inner padding and border in Firefox 4+.\n */\n.uk-form input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/*\n * Removes excess padding in IE 8/9/10.\n */\n.uk-form input[type=\"checkbox\"],\n.uk-form input[type=\"radio\"] {\n  padding: 0;\n}\n/*\n * Improves consistency of cursor style for clickable elements\n */\n.uk-form input[type=\"checkbox\"]:not(:disabled),\n.uk-form input[type=\"radio\"]:not(:disabled) {\n  cursor: pointer;\n}\n/*\n * Remove default style in iOS.\n */\n.uk-form textarea,\n.uk-form input:not([type]),\n.uk-form input[type=\"text\"],\n.uk-form input[type=\"password\"],\n.uk-form input[type=\"email\"],\n.uk-form input[type=\"url\"],\n.uk-form input[type=\"search\"],\n.uk-form input[type=\"tel\"],\n.uk-form input[type=\"number\"],\n.uk-form input[type=\"datetime\"] {\n  -webkit-appearance: none;\n}\n/*\n * Remove inner padding and search cancel button in Chrome, Safari and Opera on OS X.\n */\n.uk-form input[type=\"search\"]::-webkit-search-cancel-button,\n.uk-form input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n.uk-form input[type=\"number\"]::-webkit-inner-spin-button,\n.uk-form input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n * Define consistent border, margin, and padding.\n */\n.uk-form fieldset {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n/*\n * 1. Remove default vertical scrollbar in IE 8/9/10/11.\n * 2. Improve readability and alignment in all browsers.\n */\n.uk-form textarea {\n  /* 1 */\n  overflow: auto;\n  /* 2 */\n  vertical-align: top;\n}\n/*\n * Removes placeholder transparency in Firefox.\n */\n.uk-form ::-moz-placeholder {\n  opacity: 1;\n}\n/*\n * Removes `box-shadow` for invalid controls in Firefox.\n */\n.uk-form :invalid {\n  box-shadow: none;\n}\n/*\n * Vertical alignment\n */\n.uk-form input:not([type=\"radio\"]):not([type=\"checkbox\"]),\n.uk-form select {\n  vertical-align: middle;\n}\n/* Style\n ========================================================================== */\n/*\n * Remove margin from the last-child\n */\n.uk-form > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Controls\n * Except for `range`, `radio`, `checkbox`, `file`, `submit`, `reset`, `button` and `image`\n * 1. Must be `height` because `min-height` is not working in OSX\n * 2. Responsiveness: Sets a maximum width relative to the parent to scale on narrower viewports\n * 3. Vertical `padding` needed for `select` elements in Firefox\n * 4. Style\n */\n.uk-form select,\n.uk-form textarea,\n.uk-form input:not([type]),\n.uk-form input[type=\"text\"],\n.uk-form input[type=\"password\"],\n.uk-form input[type=\"datetime\"],\n.uk-form input[type=\"datetime-local\"],\n.uk-form input[type=\"date\"],\n.uk-form input[type=\"month\"],\n.uk-form input[type=\"time\"],\n.uk-form input[type=\"week\"],\n.uk-form input[type=\"number\"],\n.uk-form input[type=\"email\"],\n.uk-form input[type=\"url\"],\n.uk-form input[type=\"search\"],\n.uk-form input[type=\"tel\"],\n.uk-form input[type=\"color\"] {\n  /* 1 */\n  height: 30px;\n  /* 2 */\n  max-width: 100%;\n  /* 3 */\n  padding: 4px 6px;\n  /* 4 */\n  border: 1px solid #ddd;\n  background: #fff;\n  color: #444;\n  -webkit-transition: all 0.2s linear;\n  -webkit-transition-property: border, background, color, box-shadow, padding;\n  transition: all 0.2s linear;\n  transition-property: border, background, color, box-shadow, padding;\n}\n.uk-form select:focus,\n.uk-form textarea:focus,\n.uk-form input:not([type]):focus,\n.uk-form input[type=\"text\"]:focus,\n.uk-form input[type=\"password\"]:focus,\n.uk-form input[type=\"datetime\"]:focus,\n.uk-form input[type=\"datetime-local\"]:focus,\n.uk-form input[type=\"date\"]:focus,\n.uk-form input[type=\"month\"]:focus,\n.uk-form input[type=\"time\"]:focus,\n.uk-form input[type=\"week\"]:focus,\n.uk-form input[type=\"number\"]:focus,\n.uk-form input[type=\"email\"]:focus,\n.uk-form input[type=\"url\"]:focus,\n.uk-form input[type=\"search\"]:focus,\n.uk-form input[type=\"tel\"]:focus,\n.uk-form input[type=\"color\"]:focus {\n  border-color: #99baca;\n  outline: 0;\n  background: #f5fbfe;\n  color: #444;\n}\n.uk-form select:disabled,\n.uk-form textarea:disabled,\n.uk-form input:not([type]):disabled,\n.uk-form input[type=\"text\"]:disabled,\n.uk-form input[type=\"password\"]:disabled,\n.uk-form input[type=\"datetime\"]:disabled,\n.uk-form input[type=\"datetime-local\"]:disabled,\n.uk-form input[type=\"date\"]:disabled,\n.uk-form input[type=\"month\"]:disabled,\n.uk-form input[type=\"time\"]:disabled,\n.uk-form input[type=\"week\"]:disabled,\n.uk-form input[type=\"number\"]:disabled,\n.uk-form input[type=\"email\"]:disabled,\n.uk-form input[type=\"url\"]:disabled,\n.uk-form input[type=\"search\"]:disabled,\n.uk-form input[type=\"tel\"]:disabled,\n.uk-form input[type=\"color\"]:disabled {\n  border-color: #ddd;\n  background-color: #f5f5f5;\n  color: #999;\n}\n/*\n * Placeholder\n */\n.uk-form :-ms-input-placeholder {\n  color: #999 !important;\n}\n.uk-form ::-moz-placeholder {\n  color: #999;\n}\n.uk-form ::-webkit-input-placeholder {\n  color: #999;\n}\n.uk-form :disabled:-ms-input-placeholder {\n  color: #999 !important;\n}\n.uk-form :disabled::-moz-placeholder {\n  color: #999;\n}\n.uk-form :disabled::-webkit-input-placeholder {\n  color: #999;\n}\n/*\n * Legend\n * 1. Behave like block element\n * 2. Correct `color` not being inherited in IE 8/9/10/11.\n * 3. Remove padding\n * 4. `margin-bottom` is not working in Safari and Opera.\n *    Using `padding` and :after instead to create the border\n * 5. Style\n */\n.uk-form legend {\n  /* 1 */\n  width: 100%;\n  /* 2 */\n  border: 0;\n  /* 3 */\n  padding: 0;\n  /* 4 */\n  padding-bottom: 15px;\n  /* 5 */\n  font-size: 18px;\n  line-height: 30px;\n}\n/*\n * 1. Fixes IE9\n */\n.uk-form legend:after {\n  content: \"\";\n  display: block;\n  border-bottom: 1px solid #ddd;\n  /* 1 */\n  width: 100%;\n}\n/* Size modifiers\n * Higher specificity needed to override defaults\n ========================================================================== */\nselect.uk-form-small,\ntextarea.uk-form-small,\ninput[type].uk-form-small,\ninput:not([type]).uk-form-small {\n  height: 25px;\n  padding: 3px 3px;\n  font-size: 12px;\n}\nselect.uk-form-large,\ntextarea.uk-form-large,\ninput[type].uk-form-large,\ninput:not([type]).uk-form-large {\n  height: 40px;\n  padding: 8px 6px;\n  font-size: 16px;\n}\n/* Reset height\n * Must be after size modifiers\n ========================================================================== */\n.uk-form textarea,\n.uk-form select[multiple],\n.uk-form select[size] {\n  height: auto;\n}\n/* Validation states\n * Using !important to keep the selector simple\n ========================================================================== */\n/*\n * Error state\n */\n.uk-form-danger {\n  border-color: #dc8d99 !important;\n  background: #fff7f8 !important;\n  color: #d85030 !important;\n}\n/*\n * Success state\n */\n.uk-form-success {\n  border-color: #8ec73b !important;\n  background: #fafff2 !important;\n  color: #659f13 !important;\n}\n/* Style modifiers\n * Using !important to keep the selector simple\n ========================================================================== */\n/*\n * Blank form\n */\n.uk-form-blank {\n  border-color: transparent !important;\n  border-style: dashed !important;\n  background: none !important;\n}\n.uk-form-blank:focus {\n  border-color: #ddd !important;\n}\n/* Size sub-modifiers\n ========================================================================== */\n/*\n * Fixed widths\n * Different widths for mini sized `input` and `select` elements\n */\ninput.uk-form-width-mini {\n  width: 40px;\n}\nselect.uk-form-width-mini {\n  width: 65px;\n}\n.uk-form-width-small {\n  width: 130px;\n}\n.uk-form-width-medium {\n  width: 200px;\n}\n.uk-form-width-large {\n  width: 500px;\n}\n/* Sub-objects: `uk-form-row`\n * Groups labels and controls in rows\n ========================================================================== */\n/*\n * Micro clearfix\n * Needed for `uk-form-horizontal` modifier\n */\n.uk-form-row:before,\n.uk-form-row:after {\n  content: \"\";\n  display: table;\n}\n.uk-form-row:after {\n  clear: both;\n}\n/*\n * Vertical gutter\n */\n.uk-form-row + .uk-form-row {\n  margin-top: 15px;\n}\n/* Help text\n * Sub-object: `uk-form-help-inline`, `uk-form-help-block`\n ========================================================================== */\n.uk-form-help-inline {\n  display: inline-block;\n  margin: 0 0 0 10px;\n}\n.uk-form-help-block {\n  margin: 5px 0 0 0;\n}\n/* Controls content\n * Sub-object: `uk-form-controls`, `uk-form-controls-condensed`\n ========================================================================== */\n/*\n * Remove margins\n */\n.uk-form-controls > :first-child {\n  margin-top: 0;\n}\n.uk-form-controls > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Group controls and text into blocks with a small spacing between blocks\n */\n.uk-form-controls-condensed {\n  margin: 5px 0;\n}\n/* Modifier: `uk-form-stacked`\n * Requires sub-object: `uk-form-label`\n ========================================================================== */\n.uk-form-stacked .uk-form-label {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n/* Modifier: `uk-form-horizontal`\n * Requires sub-objects: `uk-form-label`, `uk-form-controls`\n ========================================================================== */\n/* Tablet portrait and smaller */\n@media (max-width: 959px) {\n  /* Behave like `uk-form-stacked` */\n  .uk-form-horizontal .uk-form-label {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-form-horizontal .uk-form-label {\n    width: 200px;\n    margin-top: 5px;\n    float: left;\n  }\n  .uk-form-horizontal .uk-form-controls {\n    margin-left: 215px;\n  }\n  /* Better vertical alignment if controls are checkboxes and radio buttons with text */\n  .uk-form-horizontal .uk-form-controls-text {\n    padding-top: 5px;\n  }\n}\n/* Sub-object: `uk-form-icon`\n ========================================================================== */\n/*\n * 1. Container width fits its content\n * 2. Create position context\n * 3. Prevent `inline-block` consequences\n */\n.uk-form-icon {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  max-width: 100%;\n}\n/*\n * 1. Make form element clickable through icon\n */\n.uk-form-icon > [class*='uk-icon-'] {\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  margin-top: -7px;\n  font-size: 14px;\n  color: #999;\n  text-align: center;\n  /* 1 */\n  pointer-events: none;\n}\n.uk-form-icon:not(.uk-form-icon-flip) > input {\n  padding-left: 30px !important;\n}\n/*\n * Sub-modifier: `uk-form-icon-flip`\n */\n.uk-form-icon-flip > [class*='uk-icon-'] {\n  right: 0;\n}\n.uk-form-icon-flip > input {\n  padding-right: 30px !important;\n}\n/* ========================================================================\n   Component: Button\n ========================================================================== */\n/*\n * Removes inner padding and border in Firefox 4+.\n */\n.uk-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/*\n * 1. Correct inability to style clickable `input` types in iOS.\n * 2. Remove margins in Chrome, Safari and Opera.\n * 3. Remove borders for `button`.\n * 4. Address `overflow` set to `hidden` in IE 8/9/10/11.\n * 5. Correct `font` properties and `color` not being inherited for `button`.\n * 6. Address inconsistent `text-transform` inheritance which is only inherit in Firefox and IE\n * 7. Style\n * 8. `line-height` is used to create a height\n * 9. `min-height` is necessary for `input` elements in Firefox and Opera because `line-height` is not working.\n * 10. Reset button group whitespace hack\n * 11. Required for `a`.\n */\n.uk-button {\n  /* 1 */\n  -webkit-appearance: none;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  border: none;\n  /* 4 */\n  overflow: visible;\n  /* 5 */\n  font: inherit;\n  color: #444;\n  /* 6 */\n  text-transform: none;\n  /* 7 */\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 12px;\n  background: #eee;\n  vertical-align: middle;\n  /* 8 */\n  line-height: 30px;\n  /* 9 */\n  min-height: 30px;\n  /* 10 */\n  font-size: 1rem;\n  /* 11 */\n  text-decoration: none;\n  text-align: center;\n}\n.uk-button:not(:disabled) {\n  cursor: pointer;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n * 3. Required for `a` elements\n */\n.uk-button:hover,\n.uk-button:focus {\n  background-color: #f5f5f5;\n  color: #444;\n  /* 2 */\n  outline: none;\n  /* 3 */\n  text-decoration: none;\n}\n/* Active */\n.uk-button:active,\n.uk-button.uk-active {\n  background-color: #ddd;\n  color: #444;\n}\n/* Color modifiers\n ========================================================================== */\n/*\n * Modifier: `uk-button-primary`\n */\n.uk-button-primary {\n  background-color: #00a8e6;\n  color: #fff;\n}\n/* Hover */\n.uk-button-primary:hover,\n.uk-button-primary:focus {\n  background-color: #35b3ee;\n  color: #fff;\n}\n/* Active */\n.uk-button-primary:active,\n.uk-button-primary.uk-active {\n  background-color: #0091ca;\n  color: #fff;\n}\n/*\n * Modifier: `uk-button-success`\n */\n.uk-button-success {\n  background-color: #8cc14c;\n  color: #fff;\n}\n/* Hover */\n.uk-button-success:hover,\n.uk-button-success:focus {\n  background-color: #8ec73b;\n  color: #fff;\n}\n/* Active */\n.uk-button-success:active,\n.uk-button-success.uk-active {\n  background-color: #72ae41;\n  color: #fff;\n}\n/*\n * Modifier: `uk-button-danger`\n */\n.uk-button-danger {\n  background-color: #da314b;\n  color: #fff;\n}\n/* Hover */\n.uk-button-danger:hover,\n.uk-button-danger:focus {\n  background-color: #e4354f;\n  color: #fff;\n}\n/* Active */\n.uk-button-danger:active,\n.uk-button-danger.uk-active {\n  background-color: #c91032;\n  color: #fff;\n}\n/* Disabled state\n * Overrides also the color modifiers\n ========================================================================== */\n/* Equal for all button types */\n.uk-button:disabled {\n  background-color: #f5f5f5;\n  color: #999;\n}\n/* Modifier: `uk-button-link`\n ========================================================================== */\n/* Reset */\n.uk-button-link,\n.uk-button-link:hover,\n.uk-button-link:focus,\n.uk-button-link:active,\n.uk-button-link.uk-active,\n.uk-button-link:disabled {\n  border-color: transparent;\n  background: none;\n}\n/* Color */\n.uk-button-link {\n  color: #07D;\n}\n.uk-button-link:hover,\n.uk-button-link:focus,\n.uk-button-link:active,\n.uk-button-link.uk-active {\n  color: #059;\n  text-decoration: underline;\n}\n.uk-button-link:disabled {\n  color: #999;\n}\n/* Focus */\n.uk-button-link:focus {\n  outline: 1px dotted;\n}\n/* Size modifiers\n ========================================================================== */\n.uk-button-mini {\n  min-height: 20px;\n  padding: 0 6px;\n  line-height: 20px;\n  font-size: 11px;\n}\n.uk-button-small {\n  min-height: 25px;\n  padding: 0 10px;\n  line-height: 25px;\n  font-size: 12px;\n}\n.uk-button-large {\n  min-height: 40px;\n  padding: 0 15px;\n  line-height: 40px;\n  font-size: 16px;\n}\n/* Sub-object `uk-button-group`\n ========================================================================== */\n/*\n * 1. Behave like buttons\n * 2. Create position context for dropdowns\n * 3. Remove whitespace between child elements when using `inline-block`\n * 4. Prevent buttons from wrapping\n * 5. Remove whitespace between child elements when using `inline-block`\n */\n.uk-button-group {\n  /* 1 */\n  display: inline-block;\n  vertical-align: middle;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  font-size: 0.001px;\n  /* 4 */\n  white-space: nowrap;\n}\n.uk-button-group > * {\n  display: inline-block;\n}\n/* 5 */\n.uk-button-group .uk-button {\n  vertical-align: top;\n}\n/* Sub-object: `uk-button-dropdown`\n ========================================================================== */\n/*\n * 1. Behave like buttons\n * 2. Create position context for dropdowns\n */\n.uk-button-dropdown {\n  /* 1 */\n  display: inline-block;\n  vertical-align: middle;\n  /* 2 */\n  position: relative;\n}\n/* ========================================================================\n   Component: Icon\n ========================================================================== */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(118) + ") format('woff2'), url(" + __webpack_require__(117) + ") format(\"woff\"), url(" + __webpack_require__(119) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n/*\n * 1. Allow margin\n * 2. Prevent inherit font style\n * 4. Correct line-height\n * 5. Better font rendering\n * 6. Remove `text-decoration` for anchors\n */\n[class*='uk-icon-'] {\n  font-family: FontAwesome;\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  font-weight: normal;\n  font-style: normal;\n  /* 4 */\n  line-height: 1;\n  /* 5 */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* 6 */\n[class*='uk-icon-'],\n[class*='uk-icon-']:hover,\n[class*='uk-icon-']:focus {\n  text-decoration: none;\n}\n/* Size modifiers\n ========================================================================== */\n.uk-icon-small {\n  font-size: 150%;\n  vertical-align: -10%;\n}\n.uk-icon-medium {\n  font-size: 200%;\n  vertical-align: -16%;\n}\n.uk-icon-large {\n  font-size: 250%;\n  vertical-align: -22%;\n}\n/* Modifier: `uk-icon-justify`\n ========================================================================== */\n.uk-icon-justify {\n  width: 1em;\n  text-align: center;\n}\n/* Modifier: `uk-icon-spin`\n ========================================================================== */\n.uk-icon-spin {\n  display: inline-block;\n  -webkit-animation: uk-rotate 2s infinite linear;\n  animation: uk-rotate 2s infinite linear;\n}\n/* Modifier: `uk-icon-hover`\n ========================================================================== */\n.uk-icon-hover {\n  color: #999;\n}\n/*\n * Hover\n */\n.uk-icon-hover:hover {\n  color: #444;\n}\n/* Modifier: `uk-icon-button`\n ========================================================================== */\n.uk-icon-button {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  border-radius: 100%;\n  background: #eee;\n  line-height: 35px;\n  color: #444;\n  font-size: 18px;\n  text-align: center;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-icon-button:hover,\n.uk-icon-button:focus {\n  background-color: #f5f5f5;\n  color: #444;\n  /* 2 */\n  outline: none;\n}\n/* Active */\n.uk-icon-button:active {\n  background-color: #ddd;\n  color: #444;\n}\n/* Icon mapping\n ========================================================================== */\n.uk-icon-glass:before {\n  content: \"\\F000\";\n}\n.uk-icon-music:before {\n  content: \"\\F001\";\n}\n.uk-icon-search:before {\n  content: \"\\F002\";\n}\n.uk-icon-envelope-o:before {\n  content: \"\\F003\";\n}\n.uk-icon-heart:before {\n  content: \"\\F004\";\n}\n.uk-icon-star:before {\n  content: \"\\F005\";\n}\n.uk-icon-star-o:before {\n  content: \"\\F006\";\n}\n.uk-icon-user:before {\n  content: \"\\F007\";\n}\n.uk-icon-film:before {\n  content: \"\\F008\";\n}\n.uk-icon-th-large:before {\n  content: \"\\F009\";\n}\n.uk-icon-th:before {\n  content: \"\\F00A\";\n}\n.uk-icon-th-list:before {\n  content: \"\\F00B\";\n}\n.uk-icon-check:before {\n  content: \"\\F00C\";\n}\n.uk-icon-remove:before,\n.uk-icon-close:before,\n.uk-icon-times:before {\n  content: \"\\F00D\";\n}\n.uk-icon-search-plus:before {\n  content: \"\\F00E\";\n}\n.uk-icon-search-minus:before {\n  content: \"\\F010\";\n}\n.uk-icon-power-off:before {\n  content: \"\\F011\";\n}\n.uk-icon-signal:before {\n  content: \"\\F012\";\n}\n.uk-icon-gear:before,\n.uk-icon-cog:before {\n  content: \"\\F013\";\n}\n.uk-icon-trash-o:before {\n  content: \"\\F014\";\n}\n.uk-icon-home:before {\n  content: \"\\F015\";\n}\n.uk-icon-file-o:before {\n  content: \"\\F016\";\n}\n.uk-icon-clock-o:before {\n  content: \"\\F017\";\n}\n.uk-icon-road:before {\n  content: \"\\F018\";\n}\n.uk-icon-download:before {\n  content: \"\\F019\";\n}\n.uk-icon-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.uk-icon-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.uk-icon-inbox:before {\n  content: \"\\F01C\";\n}\n.uk-icon-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.uk-icon-rotate-right:before,\n.uk-icon-repeat:before {\n  content: \"\\F01E\";\n}\n.uk-icon-refresh:before {\n  content: \"\\F021\";\n}\n.uk-icon-list-alt:before {\n  content: \"\\F022\";\n}\n.uk-icon-lock:before {\n  content: \"\\F023\";\n}\n.uk-icon-flag:before {\n  content: \"\\F024\";\n}\n.uk-icon-headphones:before {\n  content: \"\\F025\";\n}\n.uk-icon-volume-off:before {\n  content: \"\\F026\";\n}\n.uk-icon-volume-down:before {\n  content: \"\\F027\";\n}\n.uk-icon-volume-up:before {\n  content: \"\\F028\";\n}\n.uk-icon-qrcode:before {\n  content: \"\\F029\";\n}\n.uk-icon-barcode:before {\n  content: \"\\F02A\";\n}\n.uk-icon-tag:before {\n  content: \"\\F02B\";\n}\n.uk-icon-tags:before {\n  content: \"\\F02C\";\n}\n.uk-icon-book:before {\n  content: \"\\F02D\";\n}\n.uk-icon-bookmark:before {\n  content: \"\\F02E\";\n}\n.uk-icon-print:before {\n  content: \"\\F02F\";\n}\n.uk-icon-camera:before {\n  content: \"\\F030\";\n}\n.uk-icon-font:before {\n  content: \"\\F031\";\n}\n.uk-icon-bold:before {\n  content: \"\\F032\";\n}\n.uk-icon-italic:before {\n  content: \"\\F033\";\n}\n.uk-icon-text-height:before {\n  content: \"\\F034\";\n}\n.uk-icon-text-width:before {\n  content: \"\\F035\";\n}\n.uk-icon-align-left:before {\n  content: \"\\F036\";\n}\n.uk-icon-align-center:before {\n  content: \"\\F037\";\n}\n.uk-icon-align-right:before {\n  content: \"\\F038\";\n}\n.uk-icon-align-justify:before {\n  content: \"\\F039\";\n}\n.uk-icon-list:before {\n  content: \"\\F03A\";\n}\n.uk-icon-dedent:before,\n.uk-icon-outdent:before {\n  content: \"\\F03B\";\n}\n.uk-icon-indent:before {\n  content: \"\\F03C\";\n}\n.uk-icon-video-camera:before {\n  content: \"\\F03D\";\n}\n.uk-icon-photo:before,\n.uk-icon-image:before,\n.uk-icon-picture-o:before {\n  content: \"\\F03E\";\n}\n.uk-icon-pencil:before {\n  content: \"\\F040\";\n}\n.uk-icon-map-marker:before {\n  content: \"\\F041\";\n}\n.uk-icon-adjust:before {\n  content: \"\\F042\";\n}\n.uk-icon-tint:before {\n  content: \"\\F043\";\n}\n.uk-icon-edit:before,\n.uk-icon-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.uk-icon-share-square-o:before {\n  content: \"\\F045\";\n}\n.uk-icon-check-square-o:before {\n  content: \"\\F046\";\n}\n.uk-icon-arrows:before {\n  content: \"\\F047\";\n}\n.uk-icon-step-backward:before {\n  content: \"\\F048\";\n}\n.uk-icon-fast-backward:before {\n  content: \"\\F049\";\n}\n.uk-icon-backward:before {\n  content: \"\\F04A\";\n}\n.uk-icon-play:before {\n  content: \"\\F04B\";\n}\n.uk-icon-pause:before {\n  content: \"\\F04C\";\n}\n.uk-icon-stop:before {\n  content: \"\\F04D\";\n}\n.uk-icon-forward:before {\n  content: \"\\F04E\";\n}\n.uk-icon-fast-forward:before {\n  content: \"\\F050\";\n}\n.uk-icon-step-forward:before {\n  content: \"\\F051\";\n}\n.uk-icon-eject:before {\n  content: \"\\F052\";\n}\n.uk-icon-chevron-left:before {\n  content: \"\\F053\";\n}\n.uk-icon-chevron-right:before {\n  content: \"\\F054\";\n}\n.uk-icon-plus-circle:before {\n  content: \"\\F055\";\n}\n.uk-icon-minus-circle:before {\n  content: \"\\F056\";\n}\n.uk-icon-times-circle:before {\n  content: \"\\F057\";\n}\n.uk-icon-check-circle:before {\n  content: \"\\F058\";\n}\n.uk-icon-question-circle:before {\n  content: \"\\F059\";\n}\n.uk-icon-info-circle:before {\n  content: \"\\F05A\";\n}\n.uk-icon-crosshairs:before {\n  content: \"\\F05B\";\n}\n.uk-icon-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.uk-icon-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.uk-icon-ban:before {\n  content: \"\\F05E\";\n}\n.uk-icon-arrow-left:before {\n  content: \"\\F060\";\n}\n.uk-icon-arrow-right:before {\n  content: \"\\F061\";\n}\n.uk-icon-arrow-up:before {\n  content: \"\\F062\";\n}\n.uk-icon-arrow-down:before {\n  content: \"\\F063\";\n}\n.uk-icon-mail-forward:before,\n.uk-icon-share:before {\n  content: \"\\F064\";\n}\n.uk-icon-expand:before {\n  content: \"\\F065\";\n}\n.uk-icon-compress:before {\n  content: \"\\F066\";\n}\n.uk-icon-plus:before {\n  content: \"\\F067\";\n}\n.uk-icon-minus:before {\n  content: \"\\F068\";\n}\n.uk-icon-asterisk:before {\n  content: \"\\F069\";\n}\n.uk-icon-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.uk-icon-gift:before {\n  content: \"\\F06B\";\n}\n.uk-icon-leaf:before {\n  content: \"\\F06C\";\n}\n.uk-icon-fire:before {\n  content: \"\\F06D\";\n}\n.uk-icon-eye:before {\n  content: \"\\F06E\";\n}\n.uk-icon-eye-slash:before {\n  content: \"\\F070\";\n}\n.uk-icon-warning:before,\n.uk-icon-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.uk-icon-plane:before {\n  content: \"\\F072\";\n}\n.uk-icon-calendar:before {\n  content: \"\\F073\";\n}\n.uk-icon-random:before {\n  content: \"\\F074\";\n}\n.uk-icon-comment:before {\n  content: \"\\F075\";\n}\n.uk-icon-magnet:before {\n  content: \"\\F076\";\n}\n.uk-icon-chevron-up:before {\n  content: \"\\F077\";\n}\n.uk-icon-chevron-down:before {\n  content: \"\\F078\";\n}\n.uk-icon-retweet:before {\n  content: \"\\F079\";\n}\n.uk-icon-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.uk-icon-folder:before {\n  content: \"\\F07B\";\n}\n.uk-icon-folder-open:before {\n  content: \"\\F07C\";\n}\n.uk-icon-arrows-v:before {\n  content: \"\\F07D\";\n}\n.uk-icon-arrows-h:before {\n  content: \"\\F07E\";\n}\n.uk-icon-bar-chart-o:before,\n.uk-icon-bar-chart:before {\n  content: \"\\F080\";\n}\n.uk-icon-twitter-square:before {\n  content: \"\\F081\";\n}\n.uk-icon-facebook-square:before {\n  content: \"\\F082\";\n}\n.uk-icon-camera-retro:before {\n  content: \"\\F083\";\n}\n.uk-icon-key:before {\n  content: \"\\F084\";\n}\n.uk-icon-gears:before,\n.uk-icon-cogs:before {\n  content: \"\\F085\";\n}\n.uk-icon-comments:before {\n  content: \"\\F086\";\n}\n.uk-icon-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.uk-icon-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.uk-icon-star-half:before {\n  content: \"\\F089\";\n}\n.uk-icon-heart-o:before {\n  content: \"\\F08A\";\n}\n.uk-icon-sign-out:before {\n  content: \"\\F08B\";\n}\n.uk-icon-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.uk-icon-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.uk-icon-external-link:before {\n  content: \"\\F08E\";\n}\n.uk-icon-sign-in:before {\n  content: \"\\F090\";\n}\n.uk-icon-trophy:before {\n  content: \"\\F091\";\n}\n.uk-icon-github-square:before {\n  content: \"\\F092\";\n}\n.uk-icon-upload:before {\n  content: \"\\F093\";\n}\n.uk-icon-lemon-o:before {\n  content: \"\\F094\";\n}\n.uk-icon-phone:before {\n  content: \"\\F095\";\n}\n.uk-icon-square-o:before {\n  content: \"\\F096\";\n}\n.uk-icon-bookmark-o:before {\n  content: \"\\F097\";\n}\n.uk-icon-phone-square:before {\n  content: \"\\F098\";\n}\n.uk-icon-twitter:before {\n  content: \"\\F099\";\n}\n.uk-icon-facebook-f:before,\n.uk-icon-facebook:before {\n  content: \"\\F09A\";\n}\n.uk-icon-github:before {\n  content: \"\\F09B\";\n}\n.uk-icon-unlock:before {\n  content: \"\\F09C\";\n}\n.uk-icon-credit-card:before {\n  content: \"\\F09D\";\n}\n.uk-icon-rss:before {\n  content: \"\\F09E\";\n}\n.uk-icon-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.uk-icon-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.uk-icon-bell:before {\n  content: \"\\F0F3\";\n}\n.uk-icon-certificate:before {\n  content: \"\\F0A3\";\n}\n.uk-icon-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.uk-icon-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.uk-icon-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.uk-icon-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.uk-icon-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.uk-icon-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.uk-icon-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.uk-icon-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.uk-icon-globe:before {\n  content: \"\\F0AC\";\n}\n.uk-icon-wrench:before {\n  content: \"\\F0AD\";\n}\n.uk-icon-tasks:before {\n  content: \"\\F0AE\";\n}\n.uk-icon-filter:before {\n  content: \"\\F0B0\";\n}\n.uk-icon-briefcase:before {\n  content: \"\\F0B1\";\n}\n.uk-icon-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.uk-icon-group:before,\n.uk-icon-users:before {\n  content: \"\\F0C0\";\n}\n.uk-icon-chain:before,\n.uk-icon-link:before {\n  content: \"\\F0C1\";\n}\n.uk-icon-cloud:before {\n  content: \"\\F0C2\";\n}\n.uk-icon-flask:before {\n  content: \"\\F0C3\";\n}\n.uk-icon-cut:before,\n.uk-icon-scissors:before {\n  content: \"\\F0C4\";\n}\n.uk-icon-copy:before,\n.uk-icon-files-o:before {\n  content: \"\\F0C5\";\n}\n.uk-icon-paperclip:before {\n  content: \"\\F0C6\";\n}\n.uk-icon-save:before,\n.uk-icon-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.uk-icon-square:before {\n  content: \"\\F0C8\";\n}\n.uk-icon-navicon:before,\n.uk-icon-reorder:before,\n.uk-icon-bars:before {\n  content: \"\\F0C9\";\n}\n.uk-icon-list-ul:before {\n  content: \"\\F0CA\";\n}\n.uk-icon-list-ol:before {\n  content: \"\\F0CB\";\n}\n.uk-icon-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.uk-icon-underline:before {\n  content: \"\\F0CD\";\n}\n.uk-icon-table:before {\n  content: \"\\F0CE\";\n}\n.uk-icon-magic:before {\n  content: \"\\F0D0\";\n}\n.uk-icon-truck:before {\n  content: \"\\F0D1\";\n}\n.uk-icon-pinterest:before {\n  content: \"\\F0D2\";\n}\n.uk-icon-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.uk-icon-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.uk-icon-google-plus:before {\n  content: \"\\F0D5\";\n}\n.uk-icon-money:before {\n  content: \"\\F0D6\";\n}\n.uk-icon-caret-down:before {\n  content: \"\\F0D7\";\n}\n.uk-icon-caret-up:before {\n  content: \"\\F0D8\";\n}\n.uk-icon-caret-left:before {\n  content: \"\\F0D9\";\n}\n.uk-icon-caret-right:before {\n  content: \"\\F0DA\";\n}\n.uk-icon-columns:before {\n  content: \"\\F0DB\";\n}\n.uk-icon-unsorted:before,\n.uk-icon-sort:before {\n  content: \"\\F0DC\";\n}\n.uk-icon-sort-down:before,\n.uk-icon-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.uk-icon-sort-up:before,\n.uk-icon-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.uk-icon-envelope:before {\n  content: \"\\F0E0\";\n}\n.uk-icon-linkedin:before {\n  content: \"\\F0E1\";\n}\n.uk-icon-rotate-left:before,\n.uk-icon-undo:before {\n  content: \"\\F0E2\";\n}\n.uk-icon-legal:before,\n.uk-icon-gavel:before {\n  content: \"\\F0E3\";\n}\n.uk-icon-dashboard:before,\n.uk-icon-tachometer:before {\n  content: \"\\F0E4\";\n}\n.uk-icon-comment-o:before {\n  content: \"\\F0E5\";\n}\n.uk-icon-comments-o:before {\n  content: \"\\F0E6\";\n}\n.uk-icon-flash:before,\n.uk-icon-bolt:before {\n  content: \"\\F0E7\";\n}\n.uk-icon-sitemap:before {\n  content: \"\\F0E8\";\n}\n.uk-icon-umbrella:before {\n  content: \"\\F0E9\";\n}\n.uk-icon-paste:before,\n.uk-icon-clipboard:before {\n  content: \"\\F0EA\";\n}\n.uk-icon-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.uk-icon-exchange:before {\n  content: \"\\F0EC\";\n}\n.uk-icon-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.uk-icon-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.uk-icon-user-md:before {\n  content: \"\\F0F0\";\n}\n.uk-icon-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.uk-icon-suitcase:before {\n  content: \"\\F0F2\";\n}\n.uk-icon-bell-o:before {\n  content: \"\\F0A2\";\n}\n.uk-icon-coffee:before {\n  content: \"\\F0F4\";\n}\n.uk-icon-cutlery:before {\n  content: \"\\F0F5\";\n}\n.uk-icon-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.uk-icon-building-o:before {\n  content: \"\\F0F7\";\n}\n.uk-icon-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.uk-icon-ambulance:before {\n  content: \"\\F0F9\";\n}\n.uk-icon-medkit:before {\n  content: \"\\F0FA\";\n}\n.uk-icon-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.uk-icon-beer:before {\n  content: \"\\F0FC\";\n}\n.uk-icon-h-square:before {\n  content: \"\\F0FD\";\n}\n.uk-icon-plus-square:before {\n  content: \"\\F0FE\";\n}\n.uk-icon-angle-double-left:before {\n  content: \"\\F100\";\n}\n.uk-icon-angle-double-right:before {\n  content: \"\\F101\";\n}\n.uk-icon-angle-double-up:before {\n  content: \"\\F102\";\n}\n.uk-icon-angle-double-down:before {\n  content: \"\\F103\";\n}\n.uk-icon-angle-left:before {\n  content: \"\\F104\";\n}\n.uk-icon-angle-right:before {\n  content: \"\\F105\";\n}\n.uk-icon-angle-up:before {\n  content: \"\\F106\";\n}\n.uk-icon-angle-down:before {\n  content: \"\\F107\";\n}\n.uk-icon-desktop:before {\n  content: \"\\F108\";\n}\n.uk-icon-laptop:before {\n  content: \"\\F109\";\n}\n.uk-icon-tablet:before {\n  content: \"\\F10A\";\n}\n.uk-icon-mobile-phone:before,\n.uk-icon-mobile:before {\n  content: \"\\F10B\";\n}\n.uk-icon-circle-o:before {\n  content: \"\\F10C\";\n}\n.uk-icon-quote-left:before {\n  content: \"\\F10D\";\n}\n.uk-icon-quote-right:before {\n  content: \"\\F10E\";\n}\n.uk-icon-spinner:before {\n  content: \"\\F110\";\n}\n.uk-icon-circle:before {\n  content: \"\\F111\";\n}\n.uk-icon-mail-reply:before,\n.uk-icon-reply:before {\n  content: \"\\F112\";\n}\n.uk-icon-github-alt:before {\n  content: \"\\F113\";\n}\n.uk-icon-folder-o:before {\n  content: \"\\F114\";\n}\n.uk-icon-folder-open-o:before {\n  content: \"\\F115\";\n}\n.uk-icon-smile-o:before {\n  content: \"\\F118\";\n}\n.uk-icon-frown-o:before {\n  content: \"\\F119\";\n}\n.uk-icon-meh-o:before {\n  content: \"\\F11A\";\n}\n.uk-icon-gamepad:before {\n  content: \"\\F11B\";\n}\n.uk-icon-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.uk-icon-flag-o:before {\n  content: \"\\F11D\";\n}\n.uk-icon-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.uk-icon-terminal:before {\n  content: \"\\F120\";\n}\n.uk-icon-code:before {\n  content: \"\\F121\";\n}\n.uk-icon-mail-reply-all:before,\n.uk-icon-reply-all:before {\n  content: \"\\F122\";\n}\n.uk-icon-star-half-empty:before,\n.uk-icon-star-half-full:before,\n.uk-icon-star-half-o:before {\n  content: \"\\F123\";\n}\n.uk-icon-location-arrow:before {\n  content: \"\\F124\";\n}\n.uk-icon-crop:before {\n  content: \"\\F125\";\n}\n.uk-icon-code-fork:before {\n  content: \"\\F126\";\n}\n.uk-icon-unlink:before,\n.uk-icon-chain-broken:before {\n  content: \"\\F127\";\n}\n.uk-icon-question:before {\n  content: \"\\F128\";\n}\n.uk-icon-info:before {\n  content: \"\\F129\";\n}\n.uk-icon-exclamation:before {\n  content: \"\\F12A\";\n}\n.uk-icon-superscript:before {\n  content: \"\\F12B\";\n}\n.uk-icon-subscript:before {\n  content: \"\\F12C\";\n}\n.uk-icon-eraser:before {\n  content: \"\\F12D\";\n}\n.uk-icon-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.uk-icon-microphone:before {\n  content: \"\\F130\";\n}\n.uk-icon-microphone-slash:before {\n  content: \"\\F131\";\n}\n.uk-icon-shield:before {\n  content: \"\\F132\";\n}\n.uk-icon-calendar-o:before {\n  content: \"\\F133\";\n}\n.uk-icon-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.uk-icon-rocket:before {\n  content: \"\\F135\";\n}\n.uk-icon-maxcdn:before {\n  content: \"\\F136\";\n}\n.uk-icon-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.uk-icon-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.uk-icon-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.uk-icon-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.uk-icon-html5:before {\n  content: \"\\F13B\";\n}\n.uk-icon-css3:before {\n  content: \"\\F13C\";\n}\n.uk-icon-anchor:before {\n  content: \"\\F13D\";\n}\n.uk-icon-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.uk-icon-bullseye:before {\n  content: \"\\F140\";\n}\n.uk-icon-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.uk-icon-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.uk-icon-rss-square:before {\n  content: \"\\F143\";\n}\n.uk-icon-play-circle:before {\n  content: \"\\F144\";\n}\n.uk-icon-ticket:before {\n  content: \"\\F145\";\n}\n.uk-icon-minus-square:before {\n  content: \"\\F146\";\n}\n.uk-icon-minus-square-o:before {\n  content: \"\\F147\";\n}\n.uk-icon-level-up:before {\n  content: \"\\F148\";\n}\n.uk-icon-level-down:before {\n  content: \"\\F149\";\n}\n.uk-icon-check-square:before {\n  content: \"\\F14A\";\n}\n.uk-icon-pencil-square:before {\n  content: \"\\F14B\";\n}\n.uk-icon-external-link-square:before {\n  content: \"\\F14C\";\n}\n.uk-icon-share-square:before {\n  content: \"\\F14D\";\n}\n.uk-icon-compass:before {\n  content: \"\\F14E\";\n}\n.uk-icon-toggle-down:before,\n.uk-icon-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.uk-icon-toggle-up:before,\n.uk-icon-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.uk-icon-toggle-right:before,\n.uk-icon-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.uk-icon-euro:before,\n.uk-icon-eur:before {\n  content: \"\\F153\";\n}\n.uk-icon-gbp:before {\n  content: \"\\F154\";\n}\n.uk-icon-dollar:before,\n.uk-icon-usd:before {\n  content: \"\\F155\";\n}\n.uk-icon-rupee:before,\n.uk-icon-inr:before {\n  content: \"\\F156\";\n}\n.uk-icon-cny:before,\n.uk-icon-rmb:before,\n.uk-icon-yen:before,\n.uk-icon-jpy:before {\n  content: \"\\F157\";\n}\n.uk-icon-ruble:before,\n.uk-icon-rouble:before,\n.uk-icon-rub:before {\n  content: \"\\F158\";\n}\n.uk-icon-won:before,\n.uk-icon-krw:before {\n  content: \"\\F159\";\n}\n.uk-icon-bitcoin:before,\n.uk-icon-btc:before {\n  content: \"\\F15A\";\n}\n.uk-icon-file:before {\n  content: \"\\F15B\";\n}\n.uk-icon-file-text:before {\n  content: \"\\F15C\";\n}\n.uk-icon-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.uk-icon-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.uk-icon-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.uk-icon-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.uk-icon-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.uk-icon-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.uk-icon-thumbs-up:before {\n  content: \"\\F164\";\n}\n.uk-icon-thumbs-down:before {\n  content: \"\\F165\";\n}\n.uk-icon-youtube-square:before {\n  content: \"\\F166\";\n}\n.uk-icon-youtube:before {\n  content: \"\\F167\";\n}\n.uk-icon-xing:before {\n  content: \"\\F168\";\n}\n.uk-icon-xing-square:before {\n  content: \"\\F169\";\n}\n.uk-icon-youtube-play:before {\n  content: \"\\F16A\";\n}\n.uk-icon-dropbox:before {\n  content: \"\\F16B\";\n}\n.uk-icon-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.uk-icon-instagram:before {\n  content: \"\\F16D\";\n}\n.uk-icon-flickr:before {\n  content: \"\\F16E\";\n}\n.uk-icon-adn:before {\n  content: \"\\F170\";\n}\n.uk-icon-bitbucket:before {\n  content: \"\\F171\";\n}\n.uk-icon-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.uk-icon-tumblr:before {\n  content: \"\\F173\";\n}\n.uk-icon-tumblr-square:before {\n  content: \"\\F174\";\n}\n.uk-icon-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.uk-icon-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.uk-icon-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.uk-icon-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.uk-icon-apple:before {\n  content: \"\\F179\";\n}\n.uk-icon-windows:before {\n  content: \"\\F17A\";\n}\n.uk-icon-android:before {\n  content: \"\\F17B\";\n}\n.uk-icon-linux:before {\n  content: \"\\F17C\";\n}\n.uk-icon-dribbble:before {\n  content: \"\\F17D\";\n}\n.uk-icon-skype:before {\n  content: \"\\F17E\";\n}\n.uk-icon-foursquare:before {\n  content: \"\\F180\";\n}\n.uk-icon-trello:before {\n  content: \"\\F181\";\n}\n.uk-icon-female:before {\n  content: \"\\F182\";\n}\n.uk-icon-male:before {\n  content: \"\\F183\";\n}\n.uk-icon-gittip:before,\n.uk-icon-gratipay:before {\n  content: \"\\F184\";\n}\n.uk-icon-sun-o:before {\n  content: \"\\F185\";\n}\n.uk-icon-moon-o:before {\n  content: \"\\F186\";\n}\n.uk-icon-archive:before {\n  content: \"\\F187\";\n}\n.uk-icon-bug:before {\n  content: \"\\F188\";\n}\n.uk-icon-vk:before {\n  content: \"\\F189\";\n}\n.uk-icon-weibo:before {\n  content: \"\\F18A\";\n}\n.uk-icon-renren:before {\n  content: \"\\F18B\";\n}\n.uk-icon-pagelines:before {\n  content: \"\\F18C\";\n}\n.uk-icon-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.uk-icon-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.uk-icon-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.uk-icon-toggle-left:before,\n.uk-icon-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.uk-icon-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.uk-icon-wheelchair:before {\n  content: \"\\F193\";\n}\n.uk-icon-vimeo-square:before {\n  content: \"\\F194\";\n}\n.uk-icon-turkish-lira:before,\n.uk-icon-try:before {\n  content: \"\\F195\";\n}\n.uk-icon-plus-square-o:before {\n  content: \"\\F196\";\n}\n.uk-icon-space-shuttle:before {\n  content: \"\\F197\";\n}\n.uk-icon-slack:before {\n  content: \"\\F198\";\n}\n.uk-icon-envelope-square:before {\n  content: \"\\F199\";\n}\n.uk-icon-wordpress:before {\n  content: \"\\F19A\";\n}\n.uk-icon-openid:before {\n  content: \"\\F19B\";\n}\n.uk-icon-institution:before,\n.uk-icon-bank:before,\n.uk-icon-university:before {\n  content: \"\\F19C\";\n}\n.uk-icon-mortar-board:before,\n.uk-icon-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.uk-icon-yahoo:before {\n  content: \"\\F19E\";\n}\n.uk-icon-google:before {\n  content: \"\\F1A0\";\n}\n.uk-icon-reddit:before {\n  content: \"\\F1A1\";\n}\n.uk-icon-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.uk-icon-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.uk-icon-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.uk-icon-delicious:before {\n  content: \"\\F1A5\";\n}\n.uk-icon-digg:before {\n  content: \"\\F1A6\";\n}\n.uk-icon-pied-piper:before {\n  content: \"\\F1A7\";\n}\n.uk-icon-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.uk-icon-drupal:before {\n  content: \"\\F1A9\";\n}\n.uk-icon-joomla:before {\n  content: \"\\F1AA\";\n}\n.uk-icon-language:before {\n  content: \"\\F1AB\";\n}\n.uk-icon-fax:before {\n  content: \"\\F1AC\";\n}\n.uk-icon-building:before {\n  content: \"\\F1AD\";\n}\n.uk-icon-child:before {\n  content: \"\\F1AE\";\n}\n.uk-icon-paw:before {\n  content: \"\\F1B0\";\n}\n.uk-icon-spoon:before {\n  content: \"\\F1B1\";\n}\n.uk-icon-cube:before {\n  content: \"\\F1B2\";\n}\n.uk-icon-cubes:before {\n  content: \"\\F1B3\";\n}\n.uk-icon-behance:before {\n  content: \"\\F1B4\";\n}\n.uk-icon-behance-square:before {\n  content: \"\\F1B5\";\n}\n.uk-icon-steam:before {\n  content: \"\\F1B6\";\n}\n.uk-icon-steam-square:before {\n  content: \"\\F1B7\";\n}\n.uk-icon-recycle:before {\n  content: \"\\F1B8\";\n}\n.uk-icon-automobile:before,\n.uk-icon-car:before {\n  content: \"\\F1B9\";\n}\n.uk-icon-cab:before,\n.uk-icon-taxi:before {\n  content: \"\\F1BA\";\n}\n.uk-icon-tree:before {\n  content: \"\\F1BB\";\n}\n.uk-icon-spotify:before {\n  content: \"\\F1BC\";\n}\n.uk-icon-deviantart:before {\n  content: \"\\F1BD\";\n}\n.uk-icon-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.uk-icon-database:before {\n  content: \"\\F1C0\";\n}\n.uk-icon-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.uk-icon-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.uk-icon-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.uk-icon-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.uk-icon-file-photo-o:before,\n.uk-icon-file-picture-o:before,\n.uk-icon-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.uk-icon-file-zip-o:before,\n.uk-icon-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.uk-icon-file-sound-o:before,\n.uk-icon-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.uk-icon-file-movie-o:before,\n.uk-icon-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.uk-icon-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.uk-icon-vine:before {\n  content: \"\\F1CA\";\n}\n.uk-icon-codepen:before {\n  content: \"\\F1CB\";\n}\n.uk-icon-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.uk-icon-life-bouy:before,\n.uk-icon-life-buoy:before,\n.uk-icon-life-saver:before,\n.uk-icon-support:before,\n.uk-icon-life-ring:before {\n  content: \"\\F1CD\";\n}\n.uk-icon-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.uk-icon-ra:before,\n.uk-icon-rebel:before {\n  content: \"\\F1D0\";\n}\n.uk-icon-ge:before,\n.uk-icon-empire:before {\n  content: \"\\F1D1\";\n}\n.uk-icon-git-square:before {\n  content: \"\\F1D2\";\n}\n.uk-icon-git:before {\n  content: \"\\F1D3\";\n}\n.uk-icon-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.uk-icon-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.uk-icon-qq:before {\n  content: \"\\F1D6\";\n}\n.uk-icon-wechat:before,\n.uk-icon-weixin:before {\n  content: \"\\F1D7\";\n}\n.uk-icon-send:before,\n.uk-icon-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.uk-icon-send-o:before,\n.uk-icon-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.uk-icon-history:before {\n  content: \"\\F1DA\";\n}\n.uk-icon-genderless:before,\n.uk-icon-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.uk-icon-header:before {\n  content: \"\\F1DC\";\n}\n.uk-icon-paragraph:before {\n  content: \"\\F1DD\";\n}\n.uk-icon-sliders:before {\n  content: \"\\F1DE\";\n}\n.uk-icon-share-alt:before {\n  content: \"\\F1E0\";\n}\n.uk-icon-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.uk-icon-bomb:before {\n  content: \"\\F1E2\";\n}\n.uk-icon-soccer-ball-o:before,\n.uk-icon-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.uk-icon-tty:before {\n  content: \"\\F1E4\";\n}\n.uk-icon-binoculars:before {\n  content: \"\\F1E5\";\n}\n.uk-icon-plug:before {\n  content: \"\\F1E6\";\n}\n.uk-icon-slideshare:before {\n  content: \"\\F1E7\";\n}\n.uk-icon-twitch:before {\n  content: \"\\F1E8\";\n}\n.uk-icon-yelp:before {\n  content: \"\\F1E9\";\n}\n.uk-icon-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.uk-icon-wifi:before {\n  content: \"\\F1EB\";\n}\n.uk-icon-calculator:before {\n  content: \"\\F1EC\";\n}\n.uk-icon-paypal:before {\n  content: \"\\F1ED\";\n}\n.uk-icon-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.uk-icon-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.uk-icon-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.uk-icon-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.uk-icon-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.uk-icon-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.uk-icon-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.uk-icon-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.uk-icon-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.uk-icon-trash:before {\n  content: \"\\F1F8\";\n}\n.uk-icon-copyright:before {\n  content: \"\\F1F9\";\n}\n.uk-icon-at:before {\n  content: \"\\F1FA\";\n}\n.uk-icon-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.uk-icon-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.uk-icon-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.uk-icon-area-chart:before {\n  content: \"\\F1FE\";\n}\n.uk-icon-pie-chart:before {\n  content: \"\\F200\";\n}\n.uk-icon-line-chart:before {\n  content: \"\\F201\";\n}\n.uk-icon-lastfm:before {\n  content: \"\\F202\";\n}\n.uk-icon-lastfm-square:before {\n  content: \"\\F203\";\n}\n.uk-icon-toggle-off:before {\n  content: \"\\F204\";\n}\n.uk-icon-toggle-on:before {\n  content: \"\\F205\";\n}\n.uk-icon-bicycle:before {\n  content: \"\\F206\";\n}\n.uk-icon-bus:before {\n  content: \"\\F207\";\n}\n.uk-icon-ioxhost:before {\n  content: \"\\F208\";\n}\n.uk-icon-angellist:before {\n  content: \"\\F209\";\n}\n.uk-icon-cc:before {\n  content: \"\\F20A\";\n}\n.uk-icon-shekel:before,\n.uk-icon-sheqel:before,\n.uk-icon-ils:before {\n  content: \"\\F20B\";\n}\n.uk-icon-meanpath:before {\n  content: \"\\F20C\";\n}\n.uk-icon-buysellads:before {\n  content: \"\\F20D\";\n}\n.uk-icon-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.uk-icon-dashcube:before {\n  content: \"\\F210\";\n}\n.uk-icon-forumbee:before {\n  content: \"\\F211\";\n}\n.uk-icon-leanpub:before {\n  content: \"\\F212\";\n}\n.uk-icon-sellsy:before {\n  content: \"\\F213\";\n}\n.uk-icon-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.uk-icon-simplybuilt:before {\n  content: \"\\F215\";\n}\n.uk-icon-skyatlas:before {\n  content: \"\\F216\";\n}\n.uk-icon-cart-plus:before {\n  content: \"\\F217\";\n}\n.uk-icon-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.uk-icon-diamond:before {\n  content: \"\\F219\";\n}\n.uk-icon-ship:before {\n  content: \"\\F21A\";\n}\n.uk-icon-user-secret:before {\n  content: \"\\F21B\";\n}\n.uk-icon-motorcycle:before {\n  content: \"\\F21C\";\n}\n.uk-icon-street-view:before {\n  content: \"\\F21D\";\n}\n.uk-icon-heartbeat:before {\n  content: \"\\F21E\";\n}\n.uk-icon-venus:before {\n  content: \"\\F221\";\n}\n.uk-icon-mars:before {\n  content: \"\\F222\";\n}\n.uk-icon-mercury:before {\n  content: \"\\F223\";\n}\n.uk-icon-transgender:before {\n  content: \"\\F224\";\n}\n.uk-icon-transgender-alt:before {\n  content: \"\\F225\";\n}\n.uk-icon-venus-double:before {\n  content: \"\\F226\";\n}\n.uk-icon-mars-double:before {\n  content: \"\\F227\";\n}\n.uk-icon-venus-mars:before {\n  content: \"\\F228\";\n}\n.uk-icon-mars-stroke:before {\n  content: \"\\F229\";\n}\n.uk-icon-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.uk-icon-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.uk-icon-neuter:before {\n  content: \"\\F22C\";\n}\n.uk-icon-facebook-official:before {\n  content: \"\\F230\";\n}\n.uk-icon-pinterest-p:before {\n  content: \"\\F231\";\n}\n.uk-icon-whatsapp:before {\n  content: \"\\F232\";\n}\n.uk-icon-server:before {\n  content: \"\\F233\";\n}\n.uk-icon-user-plus:before {\n  content: \"\\F234\";\n}\n.uk-icon-user-times:before {\n  content: \"\\F235\";\n}\n.uk-icon-hotel:before,\n.uk-icon-bed:before {\n  content: \"\\F236\";\n}\n.uk-icon-viacoin:before {\n  content: \"\\F237\";\n}\n.uk-icon-train:before {\n  content: \"\\F238\";\n}\n.uk-icon-subway:before {\n  content: \"\\F239\";\n}\n.uk-icon-medium-logo:before {\n  content: \"\\F23A\";\n}\n.uk-icon-500px:before {\n  content: \"\\F26E\";\n}\n.uk-icon-amazon:before {\n  content: \"\\F270\";\n}\n.uk-icon-balance-scale:before {\n  content: \"\\F24E\";\n}\n.uk-icon-battery-empty:before,\n.uk-icon-battery-0:before {\n  content: \"\\F244\";\n}\n.uk-icon-battery-quarter:before,\n.uk-icon-battery-1:before {\n  content: \"\\F243\";\n}\n.uk-icon-battery-half:before,\n.uk-icon-battery-2:before {\n  content: \"\\F242\";\n}\n.uk-icon-battery-three-quarters:before,\n.uk-icon-battery-3:before {\n  content: \"\\F241\";\n}\n.uk-icon-battery-full:before,\n.uk-icon-battery-4:before {\n  content: \"\\F240\";\n}\n.uk-icon-black-tie:before {\n  content: \"\\F27E\";\n}\n.uk-icon-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.uk-icon-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.uk-icon-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.uk-icon-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.uk-icon-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.uk-icon-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.uk-icon-chrome:before {\n  content: \"\\F268\";\n}\n.uk-icon-clone:before {\n  content: \"\\F24D\";\n}\n.uk-icon-commenting:before {\n  content: \"\\F27A\";\n}\n.uk-icon-commenting-o:before {\n  content: \"\\F27B\";\n}\n.uk-icon-contao:before {\n  content: \"\\F26D\";\n}\n.uk-icon-creative-commons:before {\n  content: \"\\F25E\";\n}\n.uk-icon-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.uk-icon-firefox:before {\n  content: \"\\F269\";\n}\n.uk-icon-fonticons:before {\n  content: \"\\F280\";\n}\n.uk-icon-get-pocket:before {\n  content: \"\\F265\";\n}\n.uk-icon-gg:before {\n  content: \"\\F260\";\n}\n.uk-icon-gg-circle:before {\n  content: \"\\F261\";\n}\n.uk-icon-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.uk-icon-hand-stop-o:before,\n.uk-icon-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.uk-icon-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.uk-icon-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.uk-icon-hand-grab-o:before,\n.uk-icon-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.uk-icon-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.uk-icon-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.uk-icon-hourglass:before {\n  content: \"\\F254\";\n}\n.uk-icon-hourglass-o:before {\n  content: \"\\F250\";\n}\n.uk-icon-hourglass-1:before,\n.uk-icon-hourglass-start:before {\n  content: \"\\F251\";\n}\n.uk-icon-hourglass-2:before,\n.uk-icon-hourglass-half:before {\n  content: \"\\F252\";\n}\n.uk-icon-hourglass-3:before,\n.uk-icon-hourglass-end:before {\n  content: \"\\F253\";\n}\n.uk-icon-houzz:before {\n  content: \"\\F27C\";\n}\n.uk-icon-i-cursor:before {\n  content: \"\\F246\";\n}\n.uk-icon-industry:before {\n  content: \"\\F275\";\n}\n.uk-icon-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.uk-icon-map:before {\n  content: \"\\F279\";\n}\n.uk-icon-map-o:before {\n  content: \"\\F278\";\n}\n.uk-icon-map-pin:before {\n  content: \"\\F276\";\n}\n.uk-icon-map-signs:before {\n  content: \"\\F277\";\n}\n.uk-icon-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.uk-icon-object-group:before {\n  content: \"\\F247\";\n}\n.uk-icon-object-ungroup:before {\n  content: \"\\F248\";\n}\n.uk-icon-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.uk-icon-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.uk-icon-opencart:before {\n  content: \"\\F23D\";\n}\n.uk-icon-opera:before {\n  content: \"\\F26A\";\n}\n.uk-icon-optin-monster:before {\n  content: \"\\F23C\";\n}\n.uk-icon-registered:before {\n  content: \"\\F25D\";\n}\n.uk-icon-safari:before {\n  content: \"\\F267\";\n}\n.uk-icon-sticky-note:before {\n  content: \"\\F249\";\n}\n.uk-icon-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.uk-icon-tv:before,\n.uk-icon-television:before {\n  content: \"\\F26C\";\n}\n.uk-icon-trademark:before {\n  content: \"\\F25C\";\n}\n.uk-icon-tripadvisor:before {\n  content: \"\\F262\";\n}\n.uk-icon-vimeo:before {\n  content: \"\\F27D\";\n}\n.uk-icon-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.uk-icon-yc:before,\n.uk-icon-y-combinator:before {\n  content: \"\\F23B\";\n}\n.uk-icon-yc-square:before,\n.uk-icon-y-combinator-square:before {\n  content: \"\\F1D4\";\n}\n.uk-icon-bluetooth:before {\n  content: \"\\F293\";\n}\n.uk-icon-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.uk-icon-codiepie:before {\n  content: \"\\F284\";\n}\n.uk-icon-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.uk-icon-edge:before {\n  content: \"\\F282\";\n}\n.uk-icon-fort-awesome:before {\n  content: \"\\F286\";\n}\n.uk-icon-hashtag:before {\n  content: \"\\F292\";\n}\n.uk-icon-mixcloud:before {\n  content: \"\\F289\";\n}\n.uk-icon-modx:before {\n  content: \"\\F285\";\n}\n.uk-icon-pause-circle:before {\n  content: \"\\F28B\";\n}\n.uk-icon-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.uk-icon-percent:before {\n  content: \"\\F295\";\n}\n.uk-icon-product-hunt:before {\n  content: \"\\F288\";\n}\n.uk-icon-reddit-alien:before {\n  content: \"\\F281\";\n}\n.uk-icon-scribd:before {\n  content: \"\\F28A\";\n}\n.uk-icon-shopping-bag:before {\n  content: \"\\F290\";\n}\n.uk-icon-shopping-basket:before {\n  content: \"\\F291\";\n}\n.uk-icon-stop-circle:before {\n  content: \"\\F28D\";\n}\n.uk-icon-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.uk-icon-usb:before {\n  content: \"\\F287\";\n}\n.uk-icon-american-sign-language-interpreting:before,\n.uk-icon-asl-interpreting:before {\n  content: \"\\F2A3\";\n}\n.uk-icon-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.uk-icon-audio-description:before {\n  content: \"\\F29E\";\n}\n.uk-icon-blind:before {\n  content: \"\\F29D\";\n}\n.uk-icon-braille:before {\n  content: \"\\F2A1\";\n}\n.uk-icon-deaf:before,\n.uk-icon-deafness:before {\n  content: \"\\F2A4\";\n}\n.uk-icon-envira:before {\n  content: \"\\F299\";\n}\n.uk-icon-font-awesome:before,\n.uk-icon-fa:before {\n  content: \"\\F2B4\";\n}\n.uk-icon-first-order:before {\n  content: \"\\F2B0\";\n}\n.uk-icon-gitlab:before {\n  content: \"\\F296\";\n}\n.uk-icon-glide:before {\n  content: \"\\F2A5\";\n}\n.uk-icon-glide-g:before {\n  content: \"\\F2A6\";\n}\n.uk-icon-hard-of-hearing:before {\n  content: \"\\F2A4\";\n}\n.uk-icon-low-vision:before {\n  content: \"\\F2A8\";\n}\n.uk-icon-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.uk-icon-sign-language:before,\n.uk-icon-signing:before {\n  content: \"\\F2A7\";\n}\n.uk-icon-snapchat:before {\n  content: \"\\F2AB\";\n}\n.uk-icon-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.uk-icon-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.uk-icon-themeisle:before {\n  content: \"\\F2B2\";\n}\n.uk-icon-universal-access:before {\n  content: \"\\F29A\";\n}\n.uk-icon-viadeo:before {\n  content: \"\\F2A9\";\n}\n.uk-icon-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.uk-icon-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.uk-icon-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.uk-icon-wpbeginner:before {\n  content: \"\\F297\";\n}\n.uk-icon-wpforms:before {\n  content: \"\\F298\";\n}\n.uk-icon-yoast:before {\n  content: \"\\F2B1\";\n}\n/* ========================================================================\n   Component: Close\n ========================================================================== */\n/*\n * Removes inner padding and border in Firefox 4+.\n */\n.uk-close::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/*\n * 1. Correct inability to style clickable `input` types in iOS.\n * 2. Remove margins in Chrome, Safari and Opera.\n * 3. Remove borders for `button`.\n * 4. Address `overflow` set to `hidden` in IE 8/9/10/11.\n * 5. Correct `font` properties and `color` not being inherited for `button`.\n * 6. Address inconsistent `text-transform` inheritance which is only inherit in Firefox and IE\n * 7. Remove default `button` padding and background color\n * 8. Style\n */\n.uk-close {\n  /* 1 */\n  -webkit-appearance: none;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  border: none;\n  /* 4 */\n  overflow: visible;\n  /* 5 */\n  font: inherit;\n  color: inherit;\n  /* 6 */\n  text-transform: none;\n  /* 7. */\n  padding: 0;\n  background: transparent;\n  /* 8 */\n  display: inline-block;\n  box-sizing: content-box;\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  opacity: 0.3;\n}\n/* Icon */\n.uk-close:after {\n  display: block;\n  content: \"\\F00D\";\n  font-family: FontAwesome;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n * 3. Required for `a` elements\n */\n.uk-close:hover,\n.uk-close:focus {\n  opacity: 0.5;\n  /* 2 */\n  outline: none;\n  /* 3 */\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n/* Modifier\n ========================================================================== */\n.uk-close-alt {\n  padding: 2px;\n  border-radius: 50%;\n  background: #eee;\n  opacity: 1;\n}\n/* Hover */\n.uk-close-alt:hover,\n.uk-close-alt:focus {\n  opacity: 1;\n}\n/* Icon */\n.uk-close-alt:after {\n  opacity: 0.5;\n}\n.uk-close-alt:hover:after,\n.uk-close-alt:focus:after {\n  opacity: 0.8;\n}\n/* ========================================================================\n   Component: Badge\n ========================================================================== */\n.uk-badge {\n  display: inline-block;\n  padding: 0 5px;\n  background: #00a8e6;\n  font-size: 10px;\n  font-weight: bold;\n  line-height: 14px;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  text-transform: none;\n}\n/*\n * Keep color when badge is a link\n */\na.uk-badge:hover {\n  color: #fff;\n}\n/* Modifier: `uk-badge-notification`;\n ========================================================================== */\n.uk-badge-notification {\n  box-sizing: border-box;\n  min-width: 18px;\n  border-radius: 500px;\n  font-size: 12px;\n  line-height: 18px;\n}\n/* Color modifier\n ========================================================================== */\n/*\n * Modifier: `uk-badge-success`\n */\n.uk-badge-success {\n  background-color: #8cc14c;\n}\n/*\n * Modifier: `uk-badge-warning`\n */\n.uk-badge-warning {\n  background-color: #faa732;\n}\n/*\n * Modifier: `uk-badge-danger`\n */\n.uk-badge-danger {\n  background-color: #da314b;\n}\n/* ========================================================================\n   Component: Alert\n ========================================================================== */\n.uk-alert {\n  margin-bottom: 15px;\n  padding: 10px;\n  background: #ebf7fd;\n  color: #2d7091;\n}\n/*\n * Add margin if adjacent element\n */\n* + .uk-alert {\n  margin-top: 15px;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-alert > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Keep color for headings if the default heading color is changed\n */\n.uk-alert h1,\n.uk-alert h2,\n.uk-alert h3,\n.uk-alert h4,\n.uk-alert h5,\n.uk-alert h6 {\n  color: inherit;\n}\n/* Close in alert\n ========================================================================== */\n.uk-alert > .uk-close:first-child {\n  float: right;\n}\n/*\n * Remove margin from adjacent element\n */\n.uk-alert > .uk-close:first-child + * {\n  margin-top: 0;\n}\n/* Modifier: `uk-alert-success`\n ========================================================================== */\n.uk-alert-success {\n  background: #f2fae3;\n  color: #659f13;\n}\n/* Modifier: `uk-alert-warning`\n ========================================================================== */\n.uk-alert-warning {\n  background: #fffceb;\n  color: #e28327;\n}\n/* Modifier: `uk-alert-danger`\n ========================================================================== */\n.uk-alert-danger {\n  background: #fff1f0;\n  color: #d85030;\n}\n/* Modifier: `uk-alert-large`\n ========================================================================== */\n.uk-alert-large {\n  padding: 20px;\n}\n.uk-alert-large > .uk-close:first-child {\n  margin: -10px -10px 0 0;\n}\n/* ========================================================================\n   Component: Thumbnail\n ========================================================================== */\n/*\n * 1. Container width fits its content\n * 2. Responsive behavior\n * 3. Corrects `max-width` behavior sed\n * 4. Required for `figure` element\n * 5. Style\n */\n.uk-thumbnail {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  max-width: 100%;\n  /* 3 */\n  box-sizing: border-box;\n  /* 3 */\n  margin: 0;\n  /* 4 */\n  padding: 4px;\n  border: 1px solid #ddd;\n  background: #fff;\n}\n/*\n * Hover state for `a` elements\n * 1. Apply hover style also to focus state\n * 2. Needed for caption\n * 3. Remove default focus style\n */\na.uk-thumbnail:hover,\na.uk-thumbnail:focus {\n  border-color: #aaaaaa;\n  background-color: #fff;\n  /* 2 */\n  text-decoration: none;\n  /* 3 */\n  outline: none;\n}\n/* Caption\n ========================================================================== */\n.uk-thumbnail-caption {\n  padding-top: 4px;\n  text-align: center;\n  color: #444;\n}\n/* Sizes\n ========================================================================== */\n.uk-thumbnail-mini {\n  width: 150px;\n}\n.uk-thumbnail-small {\n  width: 200px;\n}\n.uk-thumbnail-medium {\n  width: 300px;\n}\n.uk-thumbnail-large {\n  width: 400px;\n}\n.uk-thumbnail-expand,\n.uk-thumbnail-expand > img {\n  width: 100%;\n}\n/* ========================================================================\n   Component: Overlay\n ========================================================================== */\n/*\n * 1. Container width fits its content\n * 2. Create position context\n * 3. Set max-width for responsive images to prevent `inline-block` consequences\n * 4. Remove the gap between the container and its child element\n * 5. Needed for transitions and to fixed wrong scaling calculation for images in Chrome\n * 6. Fixed `overflow: hidden` to be ignored with border-radius and CSS transforms in Webkit\n * 7. Reset margin\n */\n.uk-overlay {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  max-width: 100%;\n  /* 4 */\n  vertical-align: middle;\n  /* 5 */\n  overflow: hidden;\n  /* 6 */\n  -webkit-transform: translateZ(0);\n  /* 7 */\n  margin: 0;\n}\n/* 6 for Safari */\n.uk-overlay.uk-border-circle {\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n/*\n * Remove margin from content\n */\n.uk-overlay > :first-child {\n  margin-bottom: 0;\n}\n/* Sub-object `uk-overlay-panel`\n ========================================================================== */\n/*\n * 1. Position cover\n * 2. Style\n */\n.uk-overlay-panel {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* 2 */\n  padding: 20px;\n  color: #fff;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-overlay-panel > :last-child,\n.uk-overlay-panel.uk-flex > * > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Keep color for headings if the default heading color is changed\n */\n.uk-overlay-panel h1,\n.uk-overlay-panel h2,\n.uk-overlay-panel h3,\n.uk-overlay-panel h4,\n.uk-overlay-panel h5,\n.uk-overlay-panel h6 {\n  color: inherit;\n}\n.uk-overlay-panel a:not([class]) {\n  color: inherit;\n  text-decoration: underline;\n}\n.uk-overlay-panel a[class*='uk-icon-']:not(.uk-icon-button) {\n  color: inherit;\n}\n/* Sub-object `uk-overlay-hover` and `uk-overlay-active`\n ========================================================================== */\n.uk-overlay-hover:not(:hover):not(.uk-hover) .uk-overlay-panel:not(.uk-ignore) {\n  opacity: 0;\n}\n.uk-overlay-active :not(.uk-active) > .uk-overlay-panel:not(.uk-ignore) {\n  opacity: 0;\n}\n/* Modifier `uk-overlay-background`\n ========================================================================== */\n.uk-overlay-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n/* Modifier `uk-overlay-image`\n ========================================================================== */\n/*\n * Reset panel\n */\n.uk-overlay-image {\n  padding: 0;\n}\n/* Position modifiers\n ========================================================================== */\n.uk-overlay-top {\n  bottom: auto;\n}\n.uk-overlay-bottom {\n  top: auto;\n}\n.uk-overlay-left {\n  right: auto;\n}\n.uk-overlay-right {\n  left: auto;\n}\n/* Sub-object `uk-overlay-icon`\n ========================================================================== */\n.uk-overlay-icon:before {\n  content: \"\\F002\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-top: -25px;\n  margin-left: -25px;\n  font-size: 50px;\n  line-height: 1;\n  font-family: FontAwesome;\n  text-align: center;\n  color: #fff;\n}\n/* Transitions\n ========================================================================== */\n.uk-overlay-fade,\n.uk-overlay-scale,\n.uk-overlay-spin,\n.uk-overlay-grayscale,\n.uk-overlay-blur,\n[class*='uk-overlay-slide'] {\n  transition-duration: 0.3s;\n  transition-timing-function: ease-out;\n  transition-property: opacity, transform, filter;\n}\n.uk-overlay-active .uk-overlay-fade,\n.uk-overlay-active .uk-overlay-scale,\n.uk-overlay-active .uk-overlay-spin,\n.uk-overlay-active [class*='uk-overlay-slide'] {\n  transition-duration: 0.8s;\n}\n/*\n * Fade\n */\n.uk-overlay-fade {\n  opacity: 0.7;\n}\n.uk-overlay-hover:hover .uk-overlay-fade,\n.uk-overlay-hover.uk-hover .uk-overlay-fade,\n.uk-overlay-active .uk-active > .uk-overlay-fade {\n  opacity: 1;\n}\n/*\n * Scale\n */\n.uk-overlay-scale {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.uk-overlay-hover:hover .uk-overlay-scale,\n.uk-overlay-hover.uk-hover .uk-overlay-scale,\n.uk-overlay-active .uk-active > .uk-overlay-scale {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n/*\n * Spin\n */\n.uk-overlay-spin {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n}\n.uk-overlay-hover:hover .uk-overlay-spin,\n.uk-overlay-hover.uk-hover .uk-overlay-spin,\n.uk-overlay-active .uk-active > .uk-overlay-spin {\n  -webkit-transform: scale(1.1) rotate(3deg);\n  transform: scale(1.1) rotate(3deg);\n}\n/*\n * Grayscale\n */\n.uk-overlay-grayscale {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n}\n.uk-overlay-hover:hover .uk-overlay-grayscale,\n.uk-overlay-hover.uk-hover .uk-overlay-grayscale,\n.uk-overlay-active .uk-active > .uk-overlay-grayscale {\n  -webkit-filter: grayscale(0%);\n  filter: grayscale(0%);\n}\n/*\n * Slide\n */\n[class*='uk-overlay-slide'] {\n  opacity: 0;\n}\n/* Top */\n.uk-overlay-slide-top {\n  -webkit-transform: translateY(-100%);\n  transform: translateY(-100%);\n}\n/* Bottom */\n.uk-overlay-slide-bottom {\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n}\n/* Left */\n.uk-overlay-slide-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n/* Right */\n.uk-overlay-slide-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n/* Hover */\n.uk-overlay-hover:hover [class*='uk-overlay-slide'],\n.uk-overlay-hover.uk-hover [class*='uk-overlay-slide'],\n.uk-overlay-active .uk-active > [class*='uk-overlay-slide'] {\n  opacity: 1;\n  -webkit-transform: translateX(0) translateY(0);\n  transform: translateX(0) translateY(0);\n}\n/* DEPRECATED\n * Sub-object `uk-overlay-area`\n ========================================================================== */\n/*\n * 1. Set position\n * 2. Set style\n * 3. Fade-in transition\n */\n.uk-overlay-area {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* 2 */\n  background: rgba(0, 0, 0, 0.3);\n  /* 3 */\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  -webkit-transform: translate3d(0, 0, 0);\n}\n/*\n * Hover\n * 1. `uk-hover` to support touch devices\n * 2. Use optional `uk-overlay-toggle` to trigger the overlay earlier\n */\n.uk-overlay:hover .uk-overlay-area,\n.uk-overlay.uk-hover .uk-overlay-area,\n.uk-overlay-toggle:hover .uk-overlay-area,\n.uk-overlay-toggle.uk-hover .uk-overlay-area {\n  opacity: 1;\n}\n/*\n * Icon\n */\n.uk-overlay-area:empty:before {\n  content: \"\\F002\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-top: -25px;\n  margin-left: -25px;\n  font-size: 50px;\n  line-height: 1;\n  font-family: FontAwesome;\n  text-align: center;\n  color: #fff;\n}\n/* DEPRECATED\n * Sub-object `uk-overlay-area-content`\n ========================================================================== */\n/*\n * Remove whitespace between child elements when using `inline-block`\n * Needed for Firefox\n */\n.uk-overlay-area:not(:empty) {\n  font-size: 0.001px;\n}\n/*\n * 1. Needed for vertical alignment\n */\n.uk-overlay-area:not(:empty):before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n/*\n * 1. Set vertical alignment\n * 2. Reset whitespace hack\n * 3. Set horizontal alignment\n * 4. Set style\n */\n.uk-overlay-area-content {\n  /* 1 */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  vertical-align: middle;\n  /* 2 */\n  font-size: 1rem;\n  /* 3 */\n  text-align: center;\n  /* 4 */\n  padding: 0 15px;\n  color: #fff;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-overlay-area-content > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Links in overlay area\n */\n.uk-overlay-area-content a:not([class]),\n.uk-overlay-area-content a:not([class]):hover {\n  color: inherit;\n}\n/* DEPRECATED\n * Sub-object `uk-overlay-caption`\n ========================================================================== */\n/*\n * 1. Set position\n * 2. Set style\n * 3. Fade-in transition\n */\n.uk-overlay-caption {\n  /* 1 */\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* 2 */\n  padding: 15px;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  /* 3 */\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  -webkit-transform: translate3d(0, 0, 0);\n}\n/*\n * Hover\n * 1. `uk-hover` to support touch devices\n * 2. Use optional `uk-overlay-toggle` to trigger the overlay earlier\n */\n.uk-overlay:hover .uk-overlay-caption,\n.uk-overlay.uk-hover .uk-overlay-caption,\n.uk-overlay-toggle:hover .uk-overlay-caption,\n.uk-overlay-toggle.uk-hover .uk-overlay-caption {\n  opacity: 1;\n}\n/* ========================================================================\n   Component: Column\n ========================================================================== */\n[class*='uk-column-'] {\n  -webkit-column-gap: 25px;\n  -moz-column-gap: 25px;\n  column-gap: 25px;\n}\n/* Width modifiers\n ========================================================================== */\n.uk-column-1-2 {\n  -webkit-column-count: 2;\n  -moz-column-count: 2;\n  column-count: 2;\n}\n.uk-column-1-3 {\n  -webkit-column-count: 3;\n  -moz-column-count: 3;\n  column-count: 3;\n}\n.uk-column-1-4 {\n  -webkit-column-count: 4;\n  -moz-column-count: 4;\n  column-count: 4;\n}\n.uk-column-1-5 {\n  -webkit-column-count: 5;\n  -moz-column-count: 5;\n  column-count: 5;\n}\n.uk-column-1-6 {\n  -webkit-column-count: 6;\n  -moz-column-count: 6;\n  column-count: 6;\n}\n/* Phone landscape and bigger */\n@media (min-width: 480px) {\n  .uk-column-small-1-2 {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n  .uk-column-small-1-3 {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n  .uk-column-small-1-4 {\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n  .uk-column-small-1-5 {\n    -webkit-column-count: 5;\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n  .uk-column-small-1-6 {\n    -webkit-column-count: 6;\n    -moz-column-count: 6;\n    column-count: 6;\n  }\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-column-medium-1-2 {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n  .uk-column-medium-1-3 {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n  .uk-column-medium-1-4 {\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n  .uk-column-medium-1-5 {\n    -webkit-column-count: 5;\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n  .uk-column-medium-1-6 {\n    -webkit-column-count: 6;\n    -moz-column-count: 6;\n    column-count: 6;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-column-large-1-2 {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n  .uk-column-large-1-3 {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n  .uk-column-large-1-4 {\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n  .uk-column-large-1-5 {\n    -webkit-column-count: 5;\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n  .uk-column-large-1-6 {\n    -webkit-column-count: 6;\n    -moz-column-count: 6;\n    column-count: 6;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-column-xlarge-1-2 {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n  .uk-column-xlarge-1-3 {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n  .uk-column-xlarge-1-4 {\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n  .uk-column-xlarge-1-5 {\n    -webkit-column-count: 5;\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n  .uk-column-xlarge-1-6 {\n    -webkit-column-count: 6;\n    -moz-column-count: 6;\n    column-count: 6;\n  }\n}\n/* ========================================================================\n   Component: Animation\n ========================================================================== */\n[class*='uk-animation-'] {\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n/* Hide animated element if scrollspy is used */\n@media screen {\n  [data-uk-scrollspy*='uk-animation-']:not([data-uk-scrollspy*='target']) {\n    opacity: 0;\n  }\n}\n/*\n * Fade\n * Higher specificity (!important) needed because of reverse modifier\n */\n.uk-animation-fade {\n  -webkit-animation-name: uk-fade;\n  animation-name: uk-fade;\n  -webkit-animation-duration: 0.8s;\n  animation-duration: 0.8s;\n  -webkit-animation-timing-function: linear !important;\n  animation-timing-function: linear !important;\n}\n/*\n * Fade with scale\n */\n.uk-animation-scale-up {\n  -webkit-animation-name: uk-fade-scale-02;\n  animation-name: uk-fade-scale-02;\n}\n.uk-animation-scale-down {\n  -webkit-animation-name: uk-fade-scale-18;\n  animation-name: uk-fade-scale-18;\n}\n/*\n * Fade with slide\n */\n.uk-animation-slide-top {\n  -webkit-animation-name: uk-fade-top;\n  animation-name: uk-fade-top;\n}\n.uk-animation-slide-bottom {\n  -webkit-animation-name: uk-fade-bottom;\n  animation-name: uk-fade-bottom;\n}\n.uk-animation-slide-left {\n  -webkit-animation-name: uk-fade-left;\n  animation-name: uk-fade-left;\n}\n.uk-animation-slide-right {\n  -webkit-animation-name: uk-fade-right;\n  animation-name: uk-fade-right;\n}\n/*\n * Scale\n */\n.uk-animation-scale {\n  -webkit-animation-name: uk-scale-12;\n  animation-name: uk-scale-12;\n}\n/*\n * Shake\n */\n.uk-animation-shake {\n  -webkit-animation-name: uk-shake;\n  animation-name: uk-shake;\n}\n/* Direction modifiers\n ========================================================================== */\n.uk-animation-reverse {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n/* Duration modifiers\n========================================================================== */\n.uk-animation-15 {\n  -webkit-animation-duration: 15s;\n  animation-duration: 15s;\n}\n/* Origin modifiers\n========================================================================== */\n.uk-animation-top-left {\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n.uk-animation-top-center {\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n}\n.uk-animation-top-right {\n  -webkit-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.uk-animation-middle-left {\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n}\n.uk-animation-middle-right {\n  -webkit-transform-origin: 100% 50%;\n  transform-origin: 100% 50%;\n}\n.uk-animation-bottom-left {\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.uk-animation-bottom-center {\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n}\n.uk-animation-bottom-right {\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n/* Sub-object: `uk-animation-hover`\n========================================================================== */\n/*\n * Enable animation only on hover\n * Note: Firefox also needs this because animations are not triggered when switching between display `hidden` and `block`\n */\n.uk-animation-hover:not(:hover),\n.uk-animation-hover:not(:hover) [class*='uk-animation-'],\n.uk-touch .uk-animation-hover:not(.uk-hover),\n.uk-touch .uk-animation-hover:not(.uk-hover) [class*='uk-animation-'] {\n  -webkit-animation-name: none;\n  animation-name: none;\n}\n/* Keyframes: Fade\n * Used by dropdown, datepicker and slideshow component\n ========================================================================== */\n@-webkit-keyframes uk-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes uk-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/* Keyframes: Fade with slide\n ========================================================================== */\n/*\n * Top\n */\n@-webkit-keyframes uk-fade-top {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes uk-fade-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Bottom\n */\n@-webkit-keyframes uk-fade-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes uk-fade-bottom {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Left\n */\n@-webkit-keyframes uk-fade-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-fade-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*\n * Right\n */\n@-webkit-keyframes uk-fade-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-fade-right {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/* Keyframes: Fade with scale\n ========================================================================== */\n/*\n * Scale by 0.2\n */\n@-webkit-keyframes uk-fade-scale-02 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.2);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes uk-fade-scale-02 {\n  0% {\n    opacity: 0;\n    transform: scale(0.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*\n * Scale by 1.5\n * Used by slideshow component\n */\n@-webkit-keyframes uk-fade-scale-15 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes uk-fade-scale-15 {\n  0% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*\n * Scale by 1.8\n */\n@-webkit-keyframes uk-fade-scale-18 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.8);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes uk-fade-scale-18 {\n  0% {\n    opacity: 0;\n    transform: scale(1.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/* Keyframes: Slide\n * Used by slideshow component\n ========================================================================== */\n/*\n * Left\n */\n@-webkit-keyframes uk-slide-left {\n  0% {\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-slide-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*\n * Right\n */\n@-webkit-keyframes uk-slide-right {\n  0% {\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-slide-right {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*\n * Left third\n */\n@-webkit-keyframes uk-slide-left-33 {\n  0% {\n    -webkit-transform: translateX(33%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-slide-left-33 {\n  0% {\n    transform: translateX(33%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*\n * Right third\n */\n@-webkit-keyframes uk-slide-right-33 {\n  0% {\n    -webkit-transform: translateX(-33%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-slide-right-33 {\n  0% {\n    transform: translateX(-33%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/* Keyframes: Scale\n ========================================================================== */\n@-webkit-keyframes uk-scale-12 {\n  0% {\n    -webkit-transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes uk-scale-12 {\n  0% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/* Keyframes: Rotate\n * Used by icon component\n ========================================================================== */\n@-webkit-keyframes uk-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@keyframes uk-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n/* Keyframes: Shake\n ========================================================================== */\n@-webkit-keyframes uk-shake {\n  0%,\n  100% {\n    -webkit-transform: translateX(0);\n  }\n  10% {\n    -webkit-transform: translateX(-9px);\n  }\n  20% {\n    -webkit-transform: translateX(8px);\n  }\n  30% {\n    -webkit-transform: translateX(-7px);\n  }\n  40% {\n    -webkit-transform: translateX(6px);\n  }\n  50% {\n    -webkit-transform: translateX(-5px);\n  }\n  60% {\n    -webkit-transform: translateX(4px);\n  }\n  70% {\n    -webkit-transform: translateX(-3px);\n  }\n  80% {\n    -webkit-transform: translateX(2px);\n  }\n  90% {\n    -webkit-transform: translateX(-1px);\n  }\n}\n@keyframes uk-shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  10% {\n    transform: translateX(-9px);\n  }\n  20% {\n    transform: translateX(8px);\n  }\n  30% {\n    transform: translateX(-7px);\n  }\n  40% {\n    transform: translateX(6px);\n  }\n  50% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  70% {\n    transform: translateX(-3px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n  90% {\n    transform: translateX(-1px);\n  }\n}\n/* Keyframes: Fade with slide fixed\n * Used by dropdown and search component\n ========================================================================== */\n/*\n * Top fixed\n */\n@-webkit-keyframes uk-slide-top-fixed {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes uk-slide-top-fixed {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Bottom fixed\n */\n@-webkit-keyframes uk-slide-bottom-fixed {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes uk-slide-bottom-fixed {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* ========================================================================\n   Component: Dropdown\n ========================================================================== */\n/*\n * 1. Hide by default\n * 2. Set position\n * 3. Box-sizing is needed for `uk-dropdown-justify`\n * 4. Set width\n */\n.uk-dropdown,\n.uk-dropdown-blank {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: absolute;\n  z-index: 1020;\n  /* 3 */\n  box-sizing: border-box;\n  /* 4 */\n  width: 200px;\n}\n/*\n * Dropdown style\n * 1. Reset button group whitespace hack\n */\n.uk-dropdown {\n  padding: 15px;\n  background: #f5f5f5;\n  color: #444;\n  /* 1 */\n  font-size: 1rem;\n  vertical-align: top;\n}\n/* Focus */\n.uk-dropdown:focus {\n  outline: none;\n}\n/*\n * 1. Show dropdown\n * 2. Set animation\n * 3. Needed for scale animation\n */\n.uk-open > .uk-dropdown,\n.uk-open > .uk-dropdown-blank {\n  /* 1 */\n  display: block;\n  /* 2 */\n  -webkit-animation: uk-fade 0.2s ease-in-out;\n  animation: uk-fade 0.2s ease-in-out;\n  /* 3 */\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n/* Alignment modifiers\n ========================================================================== */\n/*\n * Modifier\n */\n.uk-dropdown-top {\n  margin-top: -5px;\n}\n.uk-dropdown-bottom {\n  margin-top: 5px;\n}\n.uk-dropdown-left {\n  margin-left: -5px;\n}\n.uk-dropdown-right {\n  margin-left: 5px;\n}\n/* Nav in dropdown\n ========================================================================== */\n.uk-dropdown .uk-nav {\n  margin: 0 -15px;\n}\n/* Grid and panel in dropdown\n ========================================================================== */\n/*\n* Vertical gutter\n*/\n/*\n * Grid\n * Higher specificity to override large gutter\n */\n.uk-grid .uk-dropdown-grid + .uk-dropdown-grid {\n  margin-top: 15px;\n}\n/* Panels */\n.uk-dropdown-grid > [class*='uk-width-'] > .uk-panel + .uk-panel {\n  margin-top: 15px;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  /*\n     * Horizontal gutter\n     */\n  .uk-dropdown:not(.uk-dropdown-stack) > .uk-dropdown-grid {\n    margin-left: -15px;\n    margin-right: -15px;\n  }\n  .uk-dropdown:not(.uk-dropdown-stack) > .uk-dropdown-grid > [class*='uk-width-'] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  /*\n     * Column divider\n     */\n  .uk-dropdown:not(.uk-dropdown-stack) > .uk-dropdown-grid > [class*='uk-width-']:nth-child(n+2) {\n    border-left: 1px solid #ddd;\n  }\n  /*\n     * Width multiplier for dropdown columns\n     */\n  .uk-dropdown-width-2:not(.uk-dropdown-stack) {\n    width: 400px;\n  }\n  .uk-dropdown-width-3:not(.uk-dropdown-stack) {\n    width: 600px;\n  }\n  .uk-dropdown-width-4:not(.uk-dropdown-stack) {\n    width: 800px;\n  }\n  .uk-dropdown-width-5:not(.uk-dropdown-stack) {\n    width: 1000px;\n  }\n}\n/* Phone landscape and smaller */\n@media (max-width: 767px) {\n  /*\n     * Stack columns and take full width\n     */\n  .uk-dropdown-grid > [class*='uk-width-'] {\n    width: 100%;\n  }\n  /*\n     * Vertical gutter\n     */\n  .uk-dropdown-grid > [class*='uk-width-']:nth-child(n+2) {\n    margin-top: 15px;\n  }\n}\n/*\n* Stack grid columns\n*/\n.uk-dropdown-stack > .uk-dropdown-grid > [class*='uk-width-'] {\n  width: 100%;\n}\n.uk-dropdown-stack > .uk-dropdown-grid > [class*='uk-width-']:nth-child(n+2) {\n  margin-top: 15px;\n}\n/* Modifier `uk-dropdown-small`\n ========================================================================== */\n/*\n * Set min-width and text expands dropdown if needed\n */\n.uk-dropdown-small {\n  min-width: 150px;\n  width: auto;\n  padding: 5px;\n  white-space: nowrap;\n}\n/*\n * Nav in dropdown\n */\n.uk-dropdown-small .uk-nav {\n  margin: 0 -5px;\n}\n/* Modifier: `uk-dropdown-navbar`\n ========================================================================== */\n.uk-dropdown-navbar {\n  margin-top: 0;\n  background: #f5f5f5;\n  color: #444;\n}\n.uk-open > .uk-dropdown-navbar {\n  -webkit-animation: uk-slide-top-fixed 0.2s ease-in-out;\n  animation: uk-slide-top-fixed 0.2s ease-in-out;\n}\n/* Modifier `uk-dropdown-scrollable`\n ========================================================================== */\n/*\n * Usefull for long lists\n */\n.uk-dropdown-scrollable {\n  overflow-y: auto;\n  max-height: 200px;\n}\n/* Sub-object: `uk-dropdown-overlay`\n ========================================================================== */\n/* ========================================================================\n   Component: Modal\n ========================================================================== */\n/*\n * This is the modal overlay and modal dialog container\n * 1. Hide by default\n * 2. Set fixed position\n * 3. Allow scrolling for the modal dialog\n * 4. Mask the background page\n * 5. Fade-in transition\n * 6. Deactivate browser history navigation in IE11\n * 7. force hardware acceleration to prevent browser rendering hiccups\n */\n.uk-modal {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1010;\n  /* 3 */\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  /* 4 */\n  background: rgba(0, 0, 0, 0.6);\n  /* 5 */\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  /* 6 */\n  touch-action: cross-slide-y pinch-zoom double-tap-zoom;\n  /* 7 */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n/*\n * Open state\n */\n.uk-modal.uk-open {\n  opacity: 1;\n}\n/*\n * Prevents duplicated scrollbar caused by 4.\n */\n.uk-modal-page,\n.uk-modal-page body {\n  overflow: hidden;\n}\n/* Sub-object: `uk-modal-dialog`\n ========================================================================== */\n/*\n * 1. Create position context for caption, spinner and close button\n * 2. Set box sizing\n * 3. Set style\n * 4. Slide-in transition\n */\n.uk-modal-dialog {\n  /* 1 */\n  position: relative;\n  /* 2 */\n  box-sizing: border-box;\n  margin: 50px auto;\n  padding: 20px;\n  width: 600px;\n  max-width: 100%;\n  max-width: calc(100% - 20px);\n  /* 3 */\n  background: #fff;\n  /* 4 */\n  opacity: 0;\n  -webkit-transform: translateY(-100px);\n  transform: translateY(-100px);\n  -webkit-transition: opacity 0.3s linear, -webkit-transform 0.3s ease-out;\n  transition: opacity 0.3s linear, transform 0.3s ease-out;\n}\n/* Phone landscape and smaller */\n@media (max-width: 767px) {\n  /*\n     * Fit in small screen\n     */\n  .uk-modal-dialog {\n    width: auto;\n    margin: 10px auto;\n  }\n}\n/*\n * Open state\n */\n.uk-open .uk-modal-dialog {\n  /* 4 */\n  opacity: 1;\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n/*\n * Remove margin from the last-child\n */\n.uk-modal-dialog > :not([class*='uk-modal-']):last-child {\n  margin-bottom: 0;\n}\n/* Close in modal\n ========================================================================== */\n.uk-modal-dialog > .uk-close:first-child {\n  margin: -10px -10px 0 0;\n  float: right;\n}\n/*\n * Remove margin from adjacent element\n */\n.uk-modal-dialog > .uk-close:first-child + :not([class*='uk-modal-']) {\n  margin-top: 0;\n}\n/* Modifier: `uk-modal-dialog-lightbox`\n ========================================================================== */\n.uk-modal-dialog-lightbox {\n  margin: 15px auto;\n  padding: 0;\n  max-width: 95%;\n  max-width: calc(100% - 30px);\n  min-height: 50px;\n}\n/*\n * Close button\n */\n.uk-modal-dialog-lightbox > .uk-close:first-child {\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  margin: 0;\n  float: none;\n}\n/* Phone landscape and smaller */\n@media (max-width: 767px) {\n  .uk-modal-dialog-lightbox > .uk-close:first-child {\n    top: -7px;\n    right: -7px;\n  }\n}\n/* Modifier: `uk-modal-dialog-blank`\n ========================================================================== */\n.uk-modal-dialog-blank {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  max-width: 100%;\n  -webkit-transition: opacity 0.3s linear;\n  transition: opacity 0.3s linear;\n}\n/*\n* Close button\n*/\n.uk-modal-dialog-blank > .uk-close:first-child {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 1;\n  margin: 0;\n  float: none;\n}\n/* Modifier: `uk-modal-dialog-large`\n ========================================================================== */\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-modal-dialog-large {\n    width: 930px;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-modal-dialog-large {\n    width: 1130px;\n  }\n}\n/* Sub-Object: `uk-modal-header` and `uk-modal-footer`\n ========================================================================== */\n.uk-modal-header {\n  margin-bottom: 15px;\n}\n.uk-modal-footer {\n  margin-top: 15px;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-modal-header > :last-child,\n.uk-modal-footer > :last-child {\n  margin-bottom: 0;\n}\n/* Sub-Object: `uk-modal-caption`\n ========================================================================== */\n.uk-modal-caption {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -20px;\n  margin-bottom: -10px;\n  color: #fff;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/* Sub-Object: `uk-modal-spinner`\n ========================================================================== */\n.uk-modal-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  font-size: 25px;\n  color: #ddd;\n}\n.uk-modal-spinner:after {\n  content: \"\\F110\";\n  display: block;\n  font-family: FontAwesome;\n  -webkit-animation: uk-rotate 2s infinite linear;\n  animation: uk-rotate 2s infinite linear;\n}\n/* ========================================================================\n   Component: Off-canvas\n ========================================================================== */\n/*\n * This is the offcanvas overlay and bar container\n * 1. Hide by default\n * 2. Set fixed position\n * 3. Deactivate browser touch actions in IE11\n * 4. Mask the background page\n */\n.uk-offcanvas {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  /* 3 */\n  touch-action: none;\n  /* 4 */\n  background: rgba(0, 0, 0, 0.1);\n}\n.uk-offcanvas.uk-active {\n  display: block;\n}\n/* Sub-object `uk-offcanvas-page`\n ========================================================================== */\n/*\n * Prepares the whole HTML page to slide-out\n * 1. Fix the main page and disallow scrolling\n * 2. Side-out transition\n * 3. Needed for the transition to work instead of just letting it pop to the side\n */\n.uk-offcanvas-page {\n  /* 1 */\n  position: fixed;\n  /* 2 */\n  -webkit-transition: margin-left 0.3s ease-in-out;\n  transition: margin-left 0.3s ease-in-out;\n  /* 3 */\n  margin-left: 0;\n}\n/* Sub-object `uk-offcanvas-bar`\n ========================================================================== */\n/*\n * This is the offcanvas bar\n * 1. Set fixed position\n * 2. Size and style\n * 3. Allow scrolling\n * 4. Side-out transition\n * 5. Deactivate scroll chaining in IE11\n */\n.uk-offcanvas-bar {\n  /* 1 */\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  z-index: 1001;\n  /* 2 */\n  width: 270px;\n  max-width: 100%;\n  background: #333;\n  /* 3 */\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  /* 4 */\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  /* 5 */\n  -ms-scroll-chaining: none;\n}\n.uk-offcanvas.uk-active .uk-offcanvas-bar.uk-offcanvas-bar-show {\n  -webkit-transform: translateX(0%);\n  transform: translateX(0%);\n}\n/* Modifier `uk-offcanvas-bar-flip`\n ========================================================================== */\n.uk-offcanvas-bar-flip {\n  left: auto;\n  right: 0;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n/* Offcanvase modes\n ========================================================================== */\n.uk-offcanvas-bar[mode='none'] {\n  -webkit-transition: none;\n  transition: none;\n}\n.uk-offcanvas-bar[mode='reveal'] {\n  -webkit-transform: translateX(0%);\n  transform: translateX(0%);\n  clip: rect(0, 0, 100vh, 0);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out, clip 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, clip 0.3s ease-in-out;\n}\n.uk-offcanvas-bar-flip[mode='reveal'] {\n  clip: none;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n.uk-offcanvas-bar-flip[mode='reveal'] > * {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n}\n.uk-offcanvas.uk-active .uk-offcanvas-bar-flip[mode='reveal'].uk-offcanvas-bar-show > * {\n  -webkit-transform: translateX(0%);\n  transform: translateX(0%);\n}\n/* Panel in offcanvas\n ========================================================================== */\n.uk-offcanvas .uk-panel {\n  margin: 20px 15px;\n  color: #777;\n}\n.uk-offcanvas .uk-panel-title {\n  color: #ccc;\n}\n.uk-offcanvas .uk-panel a:not([class]) {\n  color: #ccc;\n}\n.uk-offcanvas .uk-panel a:not([class]):hover {\n  color: #fff;\n}\n/* ========================================================================\n   Component: Switcher\n ========================================================================== */\n/*\n * 1. Deactivate browser history navigation in IE11\n */\n.uk-switcher {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  /* 1 */\n  touch-action: cross-slide-y pinch-zoom double-tap-zoom;\n}\n/*\n * Items\n */\n.uk-switcher > :not(.uk-active) {\n  display: none;\n}\n/* ========================================================================\n   Component: Text\n ========================================================================== */\n/* Size modifiers\n ========================================================================== */\n.uk-text-small {\n  font-size: 11px;\n  line-height: 16px;\n}\n.uk-text-large {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: normal;\n}\n/* Weight modifiers\n ========================================================================== */\n.uk-text-bold {\n  font-weight: bold;\n}\n/* Color modifiers\n ========================================================================== */\n.uk-text-muted {\n  color: #999 !important;\n}\n.uk-text-primary {\n  color: #2d7091 !important;\n}\n.uk-text-success {\n  color: #659f13 !important;\n}\n.uk-text-warning {\n  color: #e28327 !important;\n}\n.uk-text-danger {\n  color: #d85030 !important;\n}\n.uk-text-contrast {\n  color: #fff !important;\n}\n/* Alignment modifiers\n ========================================================================== */\n.uk-text-left {\n  text-align: left !important;\n}\n.uk-text-right {\n  text-align: right !important;\n}\n.uk-text-center {\n  text-align: center !important;\n}\n.uk-text-justify {\n  text-align: justify !important;\n}\n.uk-text-top {\n  vertical-align: top !important;\n}\n.uk-text-middle {\n  vertical-align: middle !important;\n}\n.uk-text-bottom {\n  vertical-align: bottom !important;\n}\n/* Only tablets portrait and smaller */\n@media (max-width: 959px) {\n  .uk-text-center-medium {\n    text-align: center !important;\n  }\n  .uk-text-left-medium {\n    text-align: left !important;\n  }\n}\n/* Phone landscape and smaller */\n@media (max-width: 767px) {\n  .uk-text-center-small {\n    text-align: center !important;\n  }\n  .uk-text-left-small {\n    text-align: left !important;\n  }\n}\n/* Wrap modifiers\n ========================================================================== */\n/*\n * Prevent text from wrapping onto multiple lines\n */\n.uk-text-nowrap {\n  white-space: nowrap;\n}\n/*\n * Prevent text from wrapping onto multiple lines, and truncate with an ellipsis\n */\n.uk-text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*\n * Break strings if their length exceeds the width of their container\n */\n.uk-text-break {\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  hyphens: auto;\n}\n/* Transform modifiers\n ========================================================================== */\n.uk-text-capitalize {\n  text-transform: capitalize !important;\n}\n.uk-text-lowercase {\n  text-transform: lowercase !important;\n}\n.uk-text-uppercase {\n  text-transform: uppercase !important;\n}\n/* ========================================================================\n   Component: Utility\n ========================================================================== */\n/* Container\n ========================================================================== */\n.uk-container {\n  box-sizing: border-box;\n  max-width: 980px;\n  padding: 0 25px;\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-container {\n    max-width: 1200px;\n    padding: 0 35px;\n  }\n}\n/*\n * Micro clearfix\n */\n.uk-container:before,\n.uk-container:after {\n  content: \"\";\n  display: table;\n}\n.uk-container:after {\n  clear: both;\n}\n/*\n * Center container\n */\n.uk-container-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n/* Clearing\n ========================================================================== */\n/*\n * Micro clearfix\n* `table-cell` is used with `:before` because `table` creates a 1px gap when it becomes a flex item, only in Webkit\n * `table` is used again with `:after` because `clear` only works with block elements.\n * Note: `display: block` with `overflow: hidden` is currently not working in the latest Safari\n */\n.uk-clearfix:before {\n  content: \"\";\n  display: table-cell;\n}\n.uk-clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/*\n *  Create a new block formatting context\n */\n.uk-nbfc {\n  overflow: hidden;\n}\n.uk-nbfc-alt {\n  display: table-cell;\n  width: 10000px;\n}\n/* Alignment of block elements\n ========================================================================== */\n/*\n * Float blocks\n * 1. Prevent content overflow on small devices\n */\n.uk-float-left {\n  float: left;\n}\n.uk-float-right {\n  float: right;\n}\n/* 1 */\n[class*='uk-float-'] {\n  max-width: 100%;\n}\n/* Alignment of images and objects\n ========================================================================== */\n/*\n * Alignment\n */\n[class*='uk-align-'] {\n  display: block;\n  margin-bottom: 15px;\n}\n.uk-align-left {\n  margin-right: 15px;\n  float: left;\n}\n.uk-align-right {\n  margin-left: 15px;\n  float: right;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-align-medium-left {\n    margin-right: 15px;\n    float: left;\n  }\n  .uk-align-medium-right {\n    margin-left: 15px;\n    float: right;\n  }\n}\n.uk-align-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n/* Vertical alignment\n ========================================================================== */\n/*\n * Remove whitespace between child elements when using `inline-block`\n */\n.uk-vertical-align {\n  font-size: 0.001px;\n}\n/*\n *  The `uk-vertical-align` container needs a specific height\n */\n.uk-vertical-align:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n/*\n * Sub-object which can have any height\n * 1. Reset whitespace hack\n */\n.uk-vertical-align-middle,\n.uk-vertical-align-bottom {\n  display: inline-block;\n  max-width: 100%;\n  /* 1 */\n  font-size: 1rem;\n}\n.uk-vertical-align-middle {\n  vertical-align: middle;\n}\n.uk-vertical-align-bottom {\n  vertical-align: bottom;\n}\n/* Height\n ========================================================================== */\n/*\n * More robust if padding and border are used\n */\n[class*='uk-height'] {\n  box-sizing: border-box;\n}\n/*\n * Useful to extend the `html` and `body` element to the full height of the page.\n */\n.uk-height-1-1 {\n  height: 100%;\n}\n/*\n * Useful to create image teasers\n */\n.uk-height-viewport {\n  height: 100vh;\n  min-height: 600px;\n}\n/* Responsive objects\n * Note: Images are already responsive by default, see Base component\n ========================================================================== */\n/*\n * 1. Corrects `max-width` and `max-height` behavior if padding and border are used\n */\n.uk-responsive-width,\n.uk-responsive-height {\n  box-sizing: border-box;\n}\n/*\n * Responsiveness: Sets a maximum width relative to the parent and auto scales the height\n * `important` needed to override `uk-img-preserve img`\n */\n.uk-responsive-width {\n  max-width: 100% !important;\n  height: auto;\n}\n/*\n * Responsiveness: Sets a maximum height relative to the parent and auto scales the width\n * Only works if the parent element has a fixed height.\n */\n.uk-responsive-height {\n  max-height: 100%;\n  width: auto;\n}\n/* Margin\n ========================================================================== */\n/*\n * Create a block with the same margin of a paragraph\n * Add margin if adjacent element\n */\n.uk-margin {\n  margin-bottom: 15px;\n}\n* + .uk-margin {\n  margin-top: 15px;\n}\n.uk-margin-top {\n  margin-top: 15px !important;\n}\n.uk-margin-bottom {\n  margin-bottom: 15px !important;\n}\n.uk-margin-left {\n  margin-left: 15px !important;\n}\n.uk-margin-right {\n  margin-right: 15px !important;\n}\n/*\n * Larger margins\n */\n.uk-margin-large {\n  margin-bottom: 50px;\n}\n* + .uk-margin-large {\n  margin-top: 50px;\n}\n.uk-margin-large-top {\n  margin-top: 50px !important;\n}\n.uk-margin-large-bottom {\n  margin-bottom: 50px !important;\n}\n.uk-margin-large-left {\n  margin-left: 50px !important;\n}\n.uk-margin-large-right {\n  margin-right: 50px !important;\n}\n/*\n * Smaller margins\n */\n.uk-margin-small {\n  margin-bottom: 5px;\n}\n* + .uk-margin-small {\n  margin-top: 5px;\n}\n.uk-margin-small-top {\n  margin-top: 5px !important;\n}\n.uk-margin-small-bottom {\n  margin-bottom: 5px !important;\n}\n.uk-margin-small-left {\n  margin-left: 5px !important;\n}\n.uk-margin-small-right {\n  margin-right: 5px !important;\n}\n/*\n * Remove margins\n */\n.uk-margin-remove {\n  margin: 0 !important;\n}\n.uk-margin-top-remove {\n  margin-top: 0 !important;\n}\n.uk-margin-bottom-remove {\n  margin-bottom: 0 !important;\n}\n/* Padding\n ========================================================================== */\n.uk-padding-remove {\n  padding: 0 !important;\n}\n.uk-padding-top-remove {\n  padding-top: 0 !important;\n}\n.uk-padding-bottom-remove {\n  padding-bottom: 0 !important;\n}\n.uk-padding-vertical-remove {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n/* Border\n ========================================================================== */\n.uk-border-circle {\n  border-radius: 50%;\n}\n.uk-border-rounded {\n  border-radius: 5px;\n}\n/* Headings\n ========================================================================== */\n.uk-heading-large {\n  font-size: 36px;\n  line-height: 42px;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-heading-large {\n    font-size: 52px;\n    line-height: 64px;\n  }\n}\n/* Link\n ========================================================================== */\n/*\n * Let links appear in default text color\n */\n.uk-link-muted,\n.uk-link-muted a {\n  color: #444;\n}\n.uk-link-muted:hover,\n.uk-link-muted a:hover {\n  color: #444;\n}\n/*\n * Reset link style\n */\n.uk-link-reset,\n.uk-link-reset a,\n.uk-link-reset:hover,\n.uk-link-reset a:hover,\n.uk-link-reset:focus,\n.uk-link-reset a:focus {\n  color: inherit;\n  text-decoration: none;\n}\n/* Scrollable\n ========================================================================== */\n/*\n * Enable scrolling for preformatted text\n */\n.uk-scrollable-text {\n  height: 300px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  resize: both;\n}\n/*\n * Box with scrolling enabled\n */\n.uk-scrollable-box {\n  box-sizing: border-box;\n  height: 170px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  resize: both;\n}\n.uk-scrollable-box > :last-child {\n  margin-bottom: 0;\n}\n/* Overflow\n ========================================================================== */\n.uk-overflow-hidden {\n  overflow: hidden;\n}\n/*\n * Enable scrollbars if content is clipped\n */\n.uk-overflow-container {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.uk-overflow-container > :last-child {\n  margin-bottom: 0;\n}\n/* Position\n ========================================================================== */\n.uk-position-absolute,\n[class*='uk-position-top'],\n[class*='uk-position-bottom'] {\n  position: absolute !important;\n}\n/* Don't use `width: 100%` because it is wrong if the parent has padding. */\n.uk-position-top {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.uk-position-bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.uk-position-top-left {\n  top: 0;\n  left: 0;\n}\n.uk-position-top-right {\n  top: 0;\n  right: 0;\n}\n.uk-position-bottom-left {\n  bottom: 0;\n  left: 0;\n}\n.uk-position-bottom-right {\n  bottom: 0;\n  right: 0;\n}\n/*\n * Cover\n */\n.uk-position-cover {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*\n * Relative\n */\n.uk-position-relative {\n  position: relative !important;\n}\n/*\n * Z-index\n */\n.uk-position-z-index {\n  z-index: 1;\n}\n/* Display\n ========================================================================== */\n/*\n * Display\n * 1. Required if child is a responsive image\n */\n.uk-display-block {\n  display: block !important;\n}\n.uk-display-inline {\n  display: inline !important;\n}\n.uk-display-inline-block {\n  display: inline-block !important;\n  /* 1 */\n  max-width: 100%;\n}\n/*\n * Visibility\n * Avoids setting display to `block` so it works also with `inline-block` and `table`\n */\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-visible-small {\n    display: none !important;\n  }\n  .uk-visible-medium {\n    display: none !important;\n  }\n  .uk-hidden-large {\n    display: none !important;\n  }\n}\n/* Tablets portrait */\n@media (min-width: 768px) and (max-width: 959px) {\n  .uk-visible-small {\n    display: none !important;\n  }\n  .uk-visible-large {\n    display: none !important ;\n  }\n  .uk-hidden-medium {\n    display: none !important;\n  }\n}\n/* Phone landscape and smaller*/\n@media (max-width: 767px) {\n  .uk-visible-medium {\n    display: none !important;\n  }\n  .uk-visible-large {\n    display: none !important;\n  }\n  .uk-hidden-small {\n    display: none !important;\n  }\n}\n/* Remove from the flow and screen readers on any device */\n.uk-hidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n/* It's hidden, but still affects layout */\n.uk-invisible {\n  visibility: hidden !important;\n}\n/* Show on hover */\n.uk-visible-hover:hover .uk-hidden,\n.uk-visible-hover:hover .uk-invisible {\n  display: block !important;\n  visibility: visible !important;\n}\n.uk-visible-hover-inline:hover .uk-hidden,\n.uk-visible-hover-inline:hover .uk-invisible {\n  display: inline-block !important;\n  visibility: visible !important;\n}\n/* Hide on touch */\n.uk-touch .uk-hidden-touch,\n.uk-notouch .uk-hidden-notouch {\n  display: none !important;\n}\n/* ========================================================================\n   Component: Flex\n ========================================================================== */\n.uk-flex {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n.uk-flex-inline {\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n}\n/*\n * Fixes initial flex-shrink value in IE10\n */\n.uk-flex > *,\n.uk-flex-inline > * {\n  -ms-flex-negative: 1;\n}\n/* Alignment\n ========================================================================== */\n/*\n * Vertical alignment\n * Default value is `stretch`\n */\n.uk-flex-top {\n  -ms-flex-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.uk-flex-middle {\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.uk-flex-bottom {\n  -ms-flex-align: end;\n  -webkit-align-items: flex-end;\n  align-items: flex-end;\n}\n/*\n * Horizontal alignment\n * Default value is `flex-start`\n */\n.uk-flex-center {\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n.uk-flex-right {\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n}\n.uk-flex-space-between {\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}\n.uk-flex-space-around {\n  -ms-flex-pack: distribute;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n}\n/* Direction\n ========================================================================== */\n.uk-flex-row-reverse {\n  -ms-flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n.uk-flex-column {\n  -ms-flex-direction: column;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n.uk-flex-column-reverse {\n  -ms-flex-direction: column-reverse;\n  -webkit-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n/* Wrap\n ========================================================================== */\n.uk-flex-nowrap {\n  -ms-flex-wrap: nowrap;\n  -webkit-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n.uk-flex-wrap {\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.uk-flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse;\n  -webkit-flex-wrap: wrap-reverse;\n  flex-wrap: wrap-reverse;\n}\n/*\n * Horizontal alignment\n * Default value is `stretch`\n */\n.uk-flex-wrap-top {\n  -ms-flex-line-pack: start;\n  -webkit-align-content: flex-start;\n  align-content: flex-start;\n}\n.uk-flex-wrap-middle {\n  -ms-flex-line-pack: center;\n  -webkit-align-content: center;\n  align-content: center;\n}\n.uk-flex-wrap-bottom {\n  -ms-flex-line-pack: end;\n  -webkit-align-content: flex-end;\n  align-content: flex-end;\n}\n.uk-flex-wrap-space-between {\n  -ms-flex-line-pack: justify;\n  -webkit-align-content: space-between;\n  align-content: space-between;\n}\n.uk-flex-wrap-space-around {\n  -ms-flex-line-pack: distribute;\n  -webkit-align-content: space-around;\n  align-content: space-around;\n}\n/* Item ordering\n ========================================================================== */\n/*\n * Default is 0\n */\n.uk-flex-order-first {\n  -ms-flex-order: -1;\n  -webkit-order: -1;\n  order: -1;\n}\n.uk-flex-order-last {\n  -ms-flex-order: 99;\n  -webkit-order: 99;\n  order: 99;\n}\n/* Phone landscape and bigger */\n@media (min-width: 480px) {\n  .uk-flex-order-first-small {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n  .uk-flex-order-last-small {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-flex-order-first-medium {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n  .uk-flex-order-last-medium {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-flex-order-first-large {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n  .uk-flex-order-last-large {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-flex-order-first-xlarge {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n  .uk-flex-order-last-xlarge {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n/* Item dimensions\n ========================================================================== */\n/*\n * Initial: 0 1 auto\n * Content dimensions, but shrinks\n */\n/*\n * No Flex: 0 0 auto\n * Content dimensions\n */\n.uk-flex-item-none {\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n}\n/*\n * Relative Flex: 1 1 auto\n * Space is allocated considering content\n * 1. Fixes flex-shrink value in IE10\n */\n.uk-flex-item-auto {\n  -ms-flex: auto;\n  -webkit-flex: auto;\n  flex: auto;\n  /* 1 */\n  -ms-flex-negative: 1;\n}\n/*\n * Absolute Flex: 1 1 0%\n * Space is allocated solely based on flex\n */\n.uk-flex-item-1 {\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n/* ========================================================================\n   Component: Contrast\n ========================================================================== */\n.uk-contrast {\n  color: #fff;\n  /* Active */\n}\n.uk-contrast a:not([class]),\n.uk-contrast .uk-link {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n}\n.uk-contrast a:not([class]):hover,\n.uk-contrast .uk-link:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.uk-contrast :not(pre) > code,\n.uk-contrast :not(pre) > kbd,\n.uk-contrast :not(pre) > samp {\n  color: #fff;\n}\n.uk-contrast em {\n  color: #fff;\n}\n.uk-contrast h1,\n.uk-contrast h2,\n.uk-contrast h3,\n.uk-contrast h4,\n.uk-contrast h5,\n.uk-contrast h6 {\n  color: #fff;\n}\n.uk-contrast hr {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-nav li > a,\n.uk-contrast .uk-nav li > a:hover {\n  text-decoration: none;\n}\n.uk-contrast .uk-nav-side > li > a {\n  color: #fff;\n}\n.uk-contrast .uk-nav-side > li > a:hover,\n.uk-contrast .uk-nav-side > li > a:focus {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.uk-contrast .uk-nav-side > li.uk-active > a {\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-nav-side .uk-nav-header {\n  color: #fff;\n}\n.uk-contrast .uk-nav-side .uk-nav-divider {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-nav-side ul a {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-contrast .uk-nav-side ul a:hover {\n  color: #fff;\n}\n.uk-contrast .uk-subnav > * > a {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n}\n.uk-contrast .uk-subnav > * > a:hover,\n.uk-contrast .uk-subnav > * > a:focus {\n  color: #fff;\n  text-decoration: none;\n}\n.uk-contrast .uk-subnav > .uk-active > a {\n  color: #fff;\n}\n.uk-contrast .uk-subnav-line > :nth-child(n+2):before {\n  border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-subnav-pill > * > a:hover,\n.uk-contrast .uk-subnav-pill > * > a:focus {\n  background: rgba(255, 255, 255, 0.7);\n  color: #444;\n  text-decoration: none;\n}\n.uk-contrast .uk-subnav-pill > .uk-active > a {\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-tab {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-tab > li > a {\n  border-color: transparent;\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-contrast .uk-tab > li > a:hover,\n.uk-contrast .uk-tab > li > a:focus,\n.uk-contrast .uk-tab > li.uk-open > a {\n  border-color: rgba(255, 255, 255, 0.7);\n  background: rgba(255, 255, 255, 0.7);\n  color: #444;\n  text-decoration: none;\n}\n.uk-contrast .uk-tab > li.uk-active > a {\n  border-color: rgba(255, 255, 255, 0.2);\n  border-bottom-color: transparent;\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-tab-center {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-tab-grid:before {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-list-line > li:nth-child(n+2) {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-form select,\n.uk-contrast .uk-form textarea,\n.uk-contrast .uk-form input:not([type]),\n.uk-contrast .uk-form input[type=\"text\"],\n.uk-contrast .uk-form input[type=\"password\"],\n.uk-contrast .uk-form input[type=\"datetime\"],\n.uk-contrast .uk-form input[type=\"datetime-local\"],\n.uk-contrast .uk-form input[type=\"date\"],\n.uk-contrast .uk-form input[type=\"month\"],\n.uk-contrast .uk-form input[type=\"time\"],\n.uk-contrast .uk-form input[type=\"week\"],\n.uk-contrast .uk-form input[type=\"number\"],\n.uk-contrast .uk-form input[type=\"email\"],\n.uk-contrast .uk-form input[type=\"url\"],\n.uk-contrast .uk-form input[type=\"search\"],\n.uk-contrast .uk-form input[type=\"tel\"],\n.uk-contrast .uk-form input[type=\"color\"] {\n  border-color: rgba(255, 255, 255, 0.8);\n  background: rgba(255, 255, 255, 0.8);\n  color: #444;\n  background-clip: padding-box;\n}\n.uk-contrast .uk-form select:focus,\n.uk-contrast .uk-form textarea:focus,\n.uk-contrast .uk-form input:not([type]):focus,\n.uk-contrast .uk-form input[type=\"text\"]:focus,\n.uk-contrast .uk-form input[type=\"password\"]:focus,\n.uk-contrast .uk-form input[type=\"datetime\"]:focus,\n.uk-contrast .uk-form input[type=\"datetime-local\"]:focus,\n.uk-contrast .uk-form input[type=\"date\"]:focus,\n.uk-contrast .uk-form input[type=\"month\"]:focus,\n.uk-contrast .uk-form input[type=\"time\"]:focus,\n.uk-contrast .uk-form input[type=\"week\"]:focus,\n.uk-contrast .uk-form input[type=\"number\"]:focus,\n.uk-contrast .uk-form input[type=\"email\"]:focus,\n.uk-contrast .uk-form input[type=\"url\"]:focus,\n.uk-contrast .uk-form input[type=\"search\"]:focus,\n.uk-contrast .uk-form input[type=\"tel\"]:focus,\n.uk-contrast .uk-form input[type=\"color\"]:focus {\n  border-color: #fff;\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-form :-ms-input-placeholder {\n  color: rgba(68, 68, 68, 0.7) !important;\n}\n.uk-contrast .uk-form ::-moz-placeholder {\n  color: rgba(68, 68, 68, 0.7);\n}\n.uk-contrast .uk-form ::-webkit-input-placeholder {\n  color: rgba(68, 68, 68, 0.7);\n}\n.uk-contrast .uk-button {\n  color: #444;\n  background: #fff;\n}\n.uk-contrast .uk-button:hover,\n.uk-contrast .uk-button:focus {\n  background-color: rgba(255, 255, 255, 0.8);\n  color: #444;\n}\n.uk-contrast .uk-button:active,\n.uk-contrast .uk-button.uk-active {\n  background-color: rgba(255, 255, 255, 0.7);\n  color: #444;\n}\n.uk-contrast .uk-button-primary {\n  background-color: #00a8e6;\n  color: #fff;\n}\n.uk-contrast .uk-button-primary:hover,\n.uk-contrast .uk-button-primary:focus {\n  background-color: #35b3ee;\n  color: #fff;\n}\n.uk-contrast .uk-button-primary:active,\n.uk-contrast .uk-button-primary.uk-active {\n  background-color: #0091ca;\n  color: #fff;\n}\n.uk-contrast .uk-icon-hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-contrast .uk-icon-hover:hover {\n  color: #fff;\n}\n.uk-contrast .uk-icon-button {\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-icon-button:hover,\n.uk-contrast .uk-icon-button:focus {\n  background-color: rgba(255, 255, 255, 0.8);\n  color: #444;\n}\n.uk-contrast .uk-icon-button:active {\n  background-color: rgba(255, 255, 255, 0.7);\n  color: #444;\n}\n.uk-contrast .uk-text-muted {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n.uk-contrast .uk-text-primary {\n  color: #2d7091 !important;\n}\n/* ========================================================================\n   Component: Print\n ========================================================================== */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: black !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  @page {\n    margin: 0.5cm;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", ""]);

// exports


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

// EXPOSE
var _sizzle = window.Sizzle;

Sizzle.noConflict = function() {
	if ( window.Sizzle === Sizzle ) {
		window.Sizzle = _sizzle;
	}

	return Sizzle;
};

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return Sizzle; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// Sizzle requires that there be a global window in Common-JS like environments
} else if ( typeof module !== "undefined" && module.exports ) {
	module.exports = Sizzle;
} else {
	window.Sizzle = Sizzle;
}
// EXPOSE

})( window );


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(37),
	__webpack_require__(38),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, nonce, rquery ) {

"use strict";

var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(19),
	__webpack_require__(87),
	__webpack_require__(9),
	__webpack_require__(12),
	__webpack_require__(15),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse ) {

"use strict";

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document ) {

"use strict";

// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return window.location;
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, support ) {

"use strict";

jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(84),
	__webpack_require__(39),
	__webpack_require__(85),
	__webpack_require__(86)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Return jQuery for attributes-only inclusion
return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6),
	__webpack_require__(17),
	__webpack_require__(5),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, support, rnothtmlwhite ) {

"use strict";

var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(19),
	__webpack_require__(5),
	__webpack_require__(4),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse, rnothtmlwhite, dataPriv ) {

"use strict";

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(19),
	__webpack_require__(17),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse, support ) {

"use strict";

var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(42),
	__webpack_require__(53),

	// This is the only module that needs core/support
	__webpack_require__(89)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rsingleTag, buildFragment, support ) {

"use strict";

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1),
	__webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();

return support;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(4),
	__webpack_require__(48)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv, isHiddenWithinTree ) {

"use strict";

var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return showHide;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6),
	__webpack_require__(4),
	__webpack_require__(52)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, dataPriv, dataUser ) {

"use strict";

//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6),
	__webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access ) {

"use strict";

// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(23)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),

	__webpack_require__(11),
	__webpack_require__(24)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(4),
	__webpack_require__(101),

	__webpack_require__(11),
	__webpack_require__(24)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv, support ) {

"use strict";

// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( support ) {

"use strict";

support.focusin = "onfocusin" in window;

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, noGlobal ) {

"use strict";

var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};

return jQuery._evalUrl;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1),
	__webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6),
	__webpack_require__(1),
	__webpack_require__(27),
	__webpack_require__(21),
	__webpack_require__(45),
	__webpack_require__(43),
	__webpack_require__(20),

	__webpack_require__(3),
	__webpack_require__(13),
	__webpack_require__(2) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, document, documentElement, rnumnonpx, curCSS, addGetHookIf, support ) {

"use strict";

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(25),
	__webpack_require__(23) // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};

return jQuery.fn.delay;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(76)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, Sizzle ) {

"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

return function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

return function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};

}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(64)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( fnToString ) {
	"use strict";

	return fnToString.call( Object );
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return Object.getPrototypeOf;
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(26)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type ) {
	"use strict";

	return class2type.toString;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3),
	__webpack_require__(15), // clone
	__webpack_require__(12) // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Backbone = __webpack_require__(34);
var RoleTree = (function (_super) {
    __extends(RoleTree, _super);
    function RoleTree(options) {
        var _this = _super.call(this, options) || this;
        _this.roleTree = [
            { title: "Titteli" }
        ];
        return _this;
    }
    RoleTree.prototype.initialize = function () {
    };
    RoleTree.prototype.render = function () {
        this.$el.fancytree({ source: this.roleTree });
        return this;
    };
    return RoleTree;
}(Backbone.View));
exports.RoleTree = RoleTree;
RoleTree.prototype.className = "uk-width-1-2";


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c8ddf1e5e5bf3682bc7bebf30f394148.woff";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e6cf7c6ec7c2d6f670ae9d762604cb0b.woff2";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1dc35d25e61d819a9c357074014867ab.ttf";

/***/ },
/* 120 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
///<reference path="../../node_modules/@types/jquery/index.d.ts"/>
///<reference path="../../node_modules/@types/backbone/index.d.ts"/>
///<reference path="../../node_modules/@types/underscore/index.d.ts"/>
///<reference path="../../node_modules/@types/jquery.fancytree/index.d.ts"/>
"use strict";
var $ = __webpack_require__(8);
__webpack_require__(67);
__webpack_require__(66);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(71);
__webpack_require__(70);
var Application_1 = __webpack_require__(72);
$(function () {
    var app = new Application_1.Application();
    $("#app").append(app.render().$el);
});


/***/ }
/******/ ]);