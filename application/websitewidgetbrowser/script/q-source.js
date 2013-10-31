/** qooxdoo v3.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){
if (!window.qx) window.qx = {};
var qx = window.qx;

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"json":true,"qx.application":"websitewidgetbrowser.Application","qx.debug":false,"qx.globalErrorHandling":false,"qx.revision":"","qx.theme":"qx.theme.Modern","qx.version":"3.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"../../framework/source/resource","sourceUri":"../../framework/source/class","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"}};

var packages = {"0":{"uris":["__out__:q-source.1e138a916cfc.js","qx:qx/Bootstrap.js","qx:qx/util/OOUtil.js","qx:qx/core/Environment.js","qx:qx/bom/client/Engine.js","qx:qx/bom/client/EcmaScript.js","qx:qx/lang/normalize/Array.js","qx:qx/type/BaseArray.js","qx:qxWeb.js","qx:qx/lang/normalize/Date.js","qx:qx/lang/Array.js","qx:qx/lang/normalize/Function.js","qx:qx/Mixin.js","qx:qx/core/Aspect.js","qx:qx/lang/normalize/String.js","qx:qx/lang/normalize/Object.js","qx:qx/Interface.js","qx:qx/lang/normalize/Error.js","qx:qx/core/Property.js","qx:qx/Class.js","qx:qx/data/MBinding.js","qx:qx/data/SingleValueBinding.js","qx:qx/lang/Type.js","qx:qx/core/Assert.js","qx:qx/type/BaseError.js","qx:qx/core/AssertionError.js","qx:qx/dev/StackTrace.js","qx:qx/lang/Function.js","qx:qx/event/GlobalError.js","qx:qx/core/WindowError.js","qx:qx/core/GlobalError.js","qx:qx/core/ObjectRegistry.js","qx:qx/lang/Json.js","qx:qx/lang/String.js","qx:qx/data/IListData.js","qx:qx/core/ValidationError.js","qx:qx/util/RingBuffer.js","qx:qx/log/appender/RingBuffer.js","qx:qx/log/Logger.js","qx:qx/core/MLogging.js","qx:qx/dom/Node.js","qx:qx/bom/Event.js","qx:qx/bom/Style.js","qx:qx/bom/client/CssTransition.js","qx:qx/event/Manager.js","qx:qx/event/IEventHandler.js","qx:qx/event/Registration.js","qx:qx/core/MEvent.js","qx:qx/event/IEventDispatcher.js","qx:qx/core/MProperty.js","qx:qx/core/MAssert.js","qx:qx/core/Object.js","qx:qx/util/DisposeUtil.js","qx:qx/event/type/Event.js","qx:qx/util/ObjectPool.js","qx:qx/event/Pool.js","qx:qx/event/dispatch/Direct.js","qx:qx/event/handler/Object.js","qx:qx/event/type/Data.js","qx:qx/bom/Selector.js","qx:qx/module/util/String.js","qx:qx/module/Dataset.js","qx:qx/bom/element/Dataset.js","qx:qx/bom/client/Html.js","qx:qx/bom/element/Attribute.js","qx:qx/bom/client/OperatingSystem.js","qx:qx/bom/client/Browser.js","qx:qx/module/Polyfill.js","qx:qx/module/Event.js","qx:qx/event/Emitter.js","qx:qx/module/event/Native.js","qx:qx/ui/website/Widget.js","qx:qx/bom/client/Css.js","qx:qx/module/Template.js","qx:qx/bom/Template.js","qx:qx/dom/Element.js","qx:qx/ui/website/Tabs.js","qx:qx/module/Transform.js","qx:qx/bom/client/CssTransform.js","qx:qx/bom/element/Transform.js","qx:qx/bom/client/Device.js","qx:qx/bom/client/Event.js","qx:qx/module/Environment.js","qx:qx/module/event/Mouse.js","qx:qx/bom/Viewport.js","qx:qx/bom/Document.js","qx:qx/ui/website/Slider.js","qx:qx/ui/website/Button.js","qx:qx/ui/website/Label.js","qx:qx/ui/website/Calendar.js","qx:qx/module/TextSelection.js","qx:qx/bom/Selection.js","qx:qx/bom/Range.js","qx:qx/util/StringSplit.js","qx:qx/ui/website/Input.js","qx:qx/ui/website/Rating.js","qx:qx/module/event/Touch.js","qx:qx/module/util/Array.js","qx:qx/module/Css.js","qx:qx/bom/element/Opacity.js","qx:qx/bom/element/Clip.js","qx:qx/bom/element/Cursor.js","qx:qx/lang/Object.js","qx:qx/bom/element/BoxSizing.js","qx:qx/bom/element/Style.js","qx:qx/bom/element/Class.js","qx:qx/bom/element/Dimension.js","qx:qx/bom/element/Location.js","qx:qx/bom/Stylesheet.js","qx:qx/util/Uri.js","qx:qx/bom/client/Stylesheet.js","qx:qx/util/placement/AbstractAxis.js","qx:qx/util/placement/DirectAxis.js","qx:qx/util/placement/KeepAlignAxis.js","qx:qx/util/placement/BestFitAxis.js","qx:qx/module/Placement.js","qx:qx/module/dev/FakeServer.js","qx:qx/dev/FakeServer.js","qx:qx/dev/unit/Sinon.js","qx:qx/module/util/Type.js","qx:qx/event/Messaging.js","qx:qx/module/Messaging.js","qx:qx/module/Attribute.js","qx:qx/bom/Html.js","qx:qx/bom/Input.js","qx:qx/module/Storage.js","qx:qx/bom/Storage.js","qx:qx/bom/storage/Web.js","qx:qx/bom/storage/UserData.js","qx:qx/bom/storage/Memory.js","qx:qx/module/MatchMedia.js","qx:qx/bom/MediaQueryListener.js","qx:qx/bom/Cookie.js","qx:qx/module/Cookie.js","qx:qx/module/event/Orientation.js","qx:qx/dom/Hierarchy.js","qx:qx/module/Traversing.js","qx:qx/module/Manipulating.js","qx:qx/module/Placeholder.js","qx:qx/module/Animation.js","qx:qx/bom/element/Animation.js","qx:qx/bom/client/CssAnimation.js","qx:qx/bom/element/AnimationCss.js","qx:qx/bom/element/AnimationHandle.js","qx:qx/bom/element/AnimationJs.js","qx:qx/util/ColorUtil.js","qx:qx/bom/AnimationFrame.js","qx:qx/module/event/TouchHandler.js","qx:qx/event/handler/TouchCore.js","qx:qx/module/Blocker.js","qx:qx/bom/request/Xhr.js","qx:qx/util/Request.js","qx:qx/bom/client/Transport.js","qx:qx/module/Io.js","qx:qx/bom/request/Script.js","qx:qx/bom/request/Jsonp.js","qx:qx/module/Core.js","qx:qx/module/Rest.js","qx:qx/bom/rest/Resource.js","qx:qx/bom/request/SimpleXhr.js","qx:qx/bom/client/Plugin.js","qx:qx/xml/Document.js","qx:qx/bom/client/Xml.js","qx:qx/util/ResponseParser.js","qx:qx/module/event/Keyboard.js","qx:qx/event/util/Keyboard.js","qx:qx/module/event/OrientationHandler.js","qx:qx/event/handler/OrientationCore.js"]}};
for (var id in packages) {
  for (var i = 0; i < packages[id].uris.length; i++) {
    var uri = packages[id].uris[i];
    if (uri.indexOf("__out__") != -1) {
      continue;
    }
    uri = uri.split(":");
    packages[id].uris[i] = libinfo[uri[0]].sourceUri + "/" + uri[1];
  }
}

for (var id in packages) {
  var list = packages[id].uris;
  for (var i = 0; i < list.length; i++) {
    var uri = list[i];
    if (uri.indexOf("__out__") != -1) {
      continue;
    }
    if (window.ActiveXObject) {
      var request = new window.ActiveXObject("Microsoft.XMLHTTP");
    } else {
     var request = new XMLHttpRequest();
    }
    request.open("GET", uri, false); 
    request.send(null);
    
    var elem = document.createElement("script");
    elem.charset = "utf-8";
    elem.type = "text/javascript";
    elem.text = request.responseText;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(elem);
  }
}

var exp = envinfo["qx.export"];
if (exp) {
  for (var name in exp) {
    var c = exp[name].split(".");
    var root = window;
    for (var i=0; i < c.length; i++) {
      root = root[c[i]];
    };
    window[name] = root;
  }
}
})();