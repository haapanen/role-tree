///<reference path="../../node_modules/@types/jquery/index.d.ts"/>
///<reference path="../../node_modules/@types/backbone/index.d.ts"/>
///<reference path="../../node_modules/@types/underscore/index.d.ts"/>
///<reference path="../../node_modules/@types/jquery.fancytree/index.d.ts"/>

import * as $ from "jquery";
import "jquery-ui/widget";
import "jquery-ui/keycode";
import "jquery.fancytree/jquery.fancytree-all.js";
import "jquery.fancytree/skin-win7/ui.fancytree.css"
import "uikit/dist/css/uikit.css";
import "../../Styles/fancytree-overrides.scss";
import {Application} from "./Views/Application";

$(() => {
    const app = new Application();
    $("#app").append(app.render().$el);
});
