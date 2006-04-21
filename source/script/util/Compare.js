/* ************************************************************************

   qooxdoo - the new era of web interface development

   Copyright:
     (C) 2004-2006 by Schlund + Partner AG, Germany
     All rights reserved

   License:
     LGPL 2.1: http://creativecommons.org/licenses/LGPL/2.1/

   Internet:
     * http://qooxdoo.oss.schlund.de

   Authors:
     * Sebastian Werner (wpbasti)
       <sebastian dot werner at 1und1 dot de>
     * Andreas Ecker (aecker)
       <andreas dot ecker at 1und1 dot de>

************************************************************************ */

/* ************************************************************************

#package(core)

************************************************************************ */

qx.util.Compare = {};

qx.util.Compare.byString = function(a, b) {
  return a==b ? 0 : a > b ? 1 : -1;
};

qx.util.Compare.byStringCaseInsensitive = function(a, b) {
  return qx.util.Compare.byString(a.toLowerCase(), b.toLowerCase());
};

qx.util.Compare.byStringUmlautsShort = function(a, b) {
  return qx.util.Compare.byString(a.normalizeUmlauts(), b.normalizeUmlautsShort());
};

qx.util.Compare.byStringUmlautsShortCaseInsensitive = function(a, b) {
  return qx.util.Compare.byString(a.normalizeUmlauts().toLowerCase(), b.normalizeUmlautsShort().toLowerCase());
};

qx.util.Compare.byStringUmlautsLong = function(a, b) {
  return qx.util.Compare.byString(a.normalizeUmlautsLong(), b.normalizeUmlautsLong());
};

qx.util.Compare.byStringUmlautsLongCaseInsensitive = function(a, b) {
  return qx.util.Compare.byString(a.normalizeUmlautsLong().toLowerCase(), b.normalizeUmlautsLong().toLowerCase());
};

qx.util.Compare.byFloat = function(a, b) {
  return a - b;
};

qx.util.Compare.byInteger = qx.util.Compare.byNumber = qx.util.Compare.byFloat;

qx.util.Compare.byIntegerString = function(a, b) {
  return parseInt(a) - parseInt(b);
};

qx.util.Compare.byFloatString = function(a, b) {
  return parseFloat(a) - parseFloat(b);
};

qx.util.Compare.byNumberString = qx.util.Compare.byFloatString;

qx.util.Compare.byIPv4 = function(a, b)
{
  var ipa = a.split(QxConst.CORE_DOT, 4);
  var ipb = b.split(QxConst.CORE_DOT, 4);

  for (var i=0; i<3; i++)
  {
    a = parseInt(ipa[i]);
    b = parseInt(ipb[i]);

    if (a != b) {
      return a - b;
    };
  };

  return parseInt(ipa[3]) - parseInt(ipb[3]);
};

qx.util.Compare.byZIndex = function(a, b) {
  return a.getZIndex() - b.getZIndex();
};
