/*
 * @file: Fonts.js
 * @description: App Fonts
 * */

"use-strict";
import BaseStyle from "./BaseStyle";
import { Dimensions } from "react-native";
import {
    scale,
    verticalScale,
    moderateScale,
} from "../helpers/ResponsiveFonts";

var Fonts = {
    Montserrat_Medium_20: {
        fontSize: moderateScale(18),
        fontFamily: "Montserrat-Medium",
    },
    Montserrat_Regular_12: {
        fontSize: moderateScale(12),
        fontFamily: "Montserrat-Regular",
    },
    Montserrat_Regular_14: {
        fontSize: moderateScale(12),
        fontFamily: "Montserrat-Regular",
    },
    Montserrat_Regular_20: {
        fontSize: moderateScale(20),
        fontFamily: "Montserrat-Regular",
    },
    Montserrat_Bold_14: {
        fontSize: moderateScale(12),
        fontFamily: "Montserrat-Bold",
    },
    Montserrat_Regular_16: {
        fontSize: moderateScale(16),
        fontFamily: "Montserrat-Regular",
    },
    Montserrat_Bold_40: {
        fontSize: moderateScale(40),
        fontFamily: "Montserrat-Bold",
    },
    Montserrat_Bold_28: {
        fontSize: moderateScale(28),
        fontFamily: "Montserrat-Bold",
    },
    Montserrat_Bold_30: {
        fontSize: moderateScale(30),
        fontFamily: "Montserrat-Bold",
    },
    Montserrat_Bold_70: {
        fontSize: moderateScale(70),
        fontFamily: "Montserrat-Bold",
    },
};

module.exports = Fonts;
