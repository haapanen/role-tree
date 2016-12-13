import * as Backbone from "backbone";

export class RoleTree extends Backbone.View<Backbone.Model> {
    private roleTree: Fancytree.NodeData[] = [
        {title: "Titteli"}
    ];

    constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
        super(options);
    }

    initialize() {

    }

    render() {
        this.$el.fancytree({ source: this.roleTree });
        return this;
    }
}

RoleTree.prototype.className = "uk-width-1-2";
