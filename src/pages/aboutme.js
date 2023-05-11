import React, {Component} from "react";
import Layout from "./components/layout";

export default function AboutMe(){
    return (
        // eslint-disable-next-line react/no-children-prop
        <Layout children>
            <div>
                Who I am!
            </div>
            <div>
                Where life has taken me so far
            </div>
            <div>
                Where do I plan to go
            </div>
            <div>
                Some fun facts about me
            </div>
            <div>
                Some interests of mine
            </div>
            <div>
                My Work 
            </div>
        </Layout>
    );
}