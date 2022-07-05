import React from "react";
import { render } from "react-dom";


const HOC = (WrapperComponent, entity)=>{
    return class extends React.Component{
        state ={
            data: [],
            term: ""
        }

        componentDidMount(){
            const fetchData = async ()=>{
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                this.setState({...this.state, data:json})
            }
            fetchData();
        }

        render(){

            let {term, data} = this.state;
            let filteredData = data.filter((d)=>{
                if(entity==="users"){
                    const {name} = d;
                    return name.indexOf(term) >=0;
                }
                if(entity === "todos"){
                    const {title} = d;
                    return title.indexOf(term) >=0;
                }
            })
            return (
                <div> 
                    <input type="text" value={term} onChange={(e)=>this.setState({ term:e.target.value})}  />
                    <h2>{entity}</h2>

                <WrapperComponent data={filteredData}></WrapperComponent>
                </div>
               

            )
        }
    }
}

export default HOC;