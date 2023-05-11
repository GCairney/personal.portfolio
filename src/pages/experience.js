import React, {Component} from "react";
import Layout from "./components/layout";
import utilStyles from '/src/styles/utils.module.css';


export default function Experience(){
    return (
        // eslint-disable-next-line react/no-children-prop
        <Layout children>
            <div>
            <h1 className={utilStyles.headingLg}>Professional Experience</h1>
            </div>
            <div>
                <h1 className={utilStyles.headingLg}>Tech Stack</h1>
            </div>
            <div>
                <h1 className={utilStyles.headingLg}>Other Software I Have Worked With</h1>
            </div>
        </Layout>
    );
}