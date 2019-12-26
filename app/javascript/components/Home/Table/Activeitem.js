import React, {Component} from 'react';
import styled from 'styled-components'
import Video from './Video'

const Botton = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 1px;
    padding: 10px 20px;
    font-size: 18px;
    width: 50%;
    background: #fff;
    color: #333 !important;
    box-shadow: 0px 0px 0px 3px #473228, -6px 6px #ef5f17, -6px 6px 0px 3px #473228;
`

const ActiveItem = (props) => {
    return (
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="text-center">
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4 offset-md-1">
                                <Video/>
                                <div className="pt-4 pb-4">
                                    <h4>{props.title}</h4>
                                    <p>{props.description}</p>
                                    <div className="cta-wrapper">
                                        <Botton onClick={props.handleVideoChenge} className="btn cta-btn">Watch This Video!</Botton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveItem