import React, {Component} from "react";
import Layout from "./components/layout";
import utilStyles from '/src/styles/utils.module.css';
import PhotoAlbum from "react-photo-album";
import { techStackLogos } from '@/data';
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';


export default function Experience(){
    return (
        //TODO - Move into a Markdown file for better editing in the future
        // eslint-disable-next-line react/no-children-prop
        <Layout children>
            <div className="grid grid-flow-col grid-cols-3 gap-3 p-4 m-2">
                <div className="col-span-2">
                    {/* TODO - Make accordian style to allow for ease of reading */}
                    <h1 className={utilStyles.headingXl}>Professional Experience</h1>
                    <h2 className={utilStyles.headingLg}>Glohaven Community Hub</h2>
                    <p>
                        As my first job in the tech industry, I currently work for Glohaven Community Hub. Glohaven Community Hub is a company designed to help the tourism industry by providing a web application that can host small and mid-sized local vendors to give them an online presence.
                        Hired in June of 2020 as a Software/Web Application Developer for the company, my first duties were to help adapt a Wordpress site while the company waited for an MVP to be finished by an external contractor. 
                        Once finished, we took it in-house and decided to start fleshing out the features and functionality of the web application. Shortly after, around , the other two
                        developers and I had decided to rewrite the site, because the MVP was missing some key functionality that we needed to make the site more accessible for both the vendors and customers. 
                        We chose to adopt the Laravel framework, with Vue.js as our front-end. 
                    </p>
                </div>
                <div className="">
                    <h1 className={utilStyles.headingXl}>Tech and Software</h1>
                    <PhotoAlbum layout="columns" spacing={50} columns={3} photos={techStackLogos}/>
                </div>
            </div>
        </Layout>
    );
}