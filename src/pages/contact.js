import React, {Component} from "react";
import Layout from "./components/layout";

export default function Contact(){
    return (
        // eslint-disable-next-line react/no-children-prop
        <Layout children>
            <div>
                Me!
            </div>
            <div>
                Phone
            </div>
            <div>
                Email
            </div>
            <div>
               LinkedIn
            </div>
        </Layout>
    );
}