import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa.'
            },{
                icon:<FaHiking/>,
                title:"Endles Hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa.'
            },{
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa.'
            },{
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa.'
            }
        ]
    }
  render() {
    return (
        <section className='services'>
            <Title title='services'/>
            <div className='services-center'>
                {this.state.services.map((item,index)=>{
                    return <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
  }
}
