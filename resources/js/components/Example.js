import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { styled } from 'styled-components'

export default class Example extends Component {
    constructor(){
        super();
        this.state = {
            blog: []
        }
    }

    async componentDidMount(){
        await axios.get('/apt').then(response => {
            this.setState({
                blog: response.data.data
            });
            
        }).catch(errors => {
            console.log(errors);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Width</th>
                            <th>height</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.blog.map(blog => 
                                <tr  scope="row" key={blog.id}>
                                    <td>{blog.id}</td>
                                    <td> {blog.title}</td>
                                    <td> {blog.name}</td>
                                    <td> {blog.width}</td>
                                    <td> {blog.height} </td>
                                    <td><Button color="info">primary</Button></td>
                                </tr>   
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

