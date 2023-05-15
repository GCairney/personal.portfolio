import React, {Component} from "react";
import Layout from "./components/layout";

export default function Projects(){
    return (
        //TODO - Move into a Markdown file for better editing in the future
        // eslint-disable-next-line react/no-children-prop
        <Layout children>
            <div>
                This one
            </div>
            <div>
                Destiny 2 Bot
            </div>
            <div>
                Future Projects?
            </div>
        </Layout>
    );
}