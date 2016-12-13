import * as Backbone from "backbone";
import {RoleTree} from "./RoleTree";

export class Application extends Backbone.View<Backbone.Model> {
    private sourceTree: RoleTree;
    private targetTree: RoleTree;

    constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
        super(options);
    }

    initialize() {
        this.sourceTree = new RoleTree();
        this.targetTree = new RoleTree();

        this.initialRender();
    }

    private initialRender() {
        this.$el.append(this.sourceTree.render().$el);
        this.$el.append(this.targetTree.render().$el);
    }

    render() {
        return this;
    }
}

Application.prototype.className = "uk-width-1-1 uk-height-1-1 uk-flex uk-flex-space-between";