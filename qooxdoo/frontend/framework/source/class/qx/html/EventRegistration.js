/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2007 by 1&1 Internet AG, Germany, http://www.1and1.org

   License:
     LGPL 2.1: http://www.gnu.org/licenses/lgpl.html

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)

************************************************************************ */

/* ************************************************************************

#module(core)
#require(qx.core.Client)

************************************************************************ */

qx.OO.defineClass("qx.html.EventRegistration");

/**
 * Assign a function to an event.
 *
 * @param vElement {Element} DOM Element
 * @param vType {String} Name of the event
 * @param vFunction {Function} The pointer to the function to assign
 */
qx.html.EventRegistration.addEventListener = function(vElement, vType, vFunction) {};

/**
 * Unassign a function from an event.
 *
 * @param vElement {Element} DOM Element
 * @param vType {String} Name of the event
 * @param vFunction {Function} The pointer to the function to assign
 */
qx.html.EventRegistration.removeEventListener = function(vElement, vType, vFunction) {};

if (qx.core.Client.getInstance().isMshtml())
{
  qx.html.EventRegistration.addEventListener = function(vElement, vType, vFunction) {
    vElement.attachEvent("on" + vType, vFunction);
  }

  qx.html.EventRegistration.removeEventListener = function(vElement, vType, vFunction) {
    vElement.detachEvent("on" + vType, vFunction);
  }
}
else
{
  qx.html.EventRegistration.addEventListener = function(vElement, vType, vFunction) {
    vElement.addEventListener(vType, vFunction, false);
  }

  qx.html.EventRegistration.removeEventListener = function(vElement, vType, vFunction) {
    vElement.removeEventListener(vType, vFunction, false);
  }
}
