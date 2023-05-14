import React, {Component} from "react";
import Layout from "./components/layout";
import utilStyles from '/src/styles/utils.module.css';
import PhotoAlbum from "react-photo-album";
import { techStackLogos } from '@/data';
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';


export default function Experience(){
    return (
        // eslint-disable-next-line react/no-children-prop
        <Layout children>
            <div className="grid grid-flow-col grid-cols-3 p-2 m-2">
                <div className="col-span-2">
                    <h1 className={utilStyles.headingLg}>Professional Experience</h1>
                    <h2 className={utilStyles.headingMd}>Glohaven Community Hub</h2>
                    <p>
                        As my first job in the tech industry, I currently work for Glohaven Community Hub
                    </p>
                </div>
                <div className="">
                    <h1 className={utilStyles.headingLg}>Tech Stack and Software</h1>
                    <PhotoAlbum layout="columns" spacing={50} columns={3} photos={techStackLogos}/>
                </div>
            </div>
        </Layout>
    );
}