import React, { Component } from 'react'
import { connect} from 'react-redux'
import { fetchJoke,selectCategory } from '../../actions/categoryActions'
import {FlexBox, FlexItem} from "react-styled-flex"
import '../pills/pills.css'

class Pills extends Component {

    constructor(props){
        super(props)

    }


    changeCategoryOnClick(category){
       
        this.props.selectCategory(category)
        this.props.fetchJoke(category)
      

    }

    

    render() {

        
       
        const activeCategory=this.props.categories
        const { data, loading } = this.props.categories
       
        const categories = data;
     
        if (loading == false) {
         
           

            return (


                <div>
                    
                   
                        <FlexItem>
                            {
                                this.props.categories.data.categories.map((category) => {
                                    
                                    return (
                                        <a   onClick={() => { this.changeCategoryOnClick(category) }}
                                        className={(category === this.props.activeCategory ? "category__item active__item" : "category__item  github")
                                          } >{category} 
       
        </a>
                                    )
                                })
                            }


                        </FlexItem>
                  
                </div>
            )
        }
        else {
            return (
                <div class="progress-bar">
                <div class="progress-bar-value"></div>
              </div>
            )
        }




    }


}

const mapStateToProps = state => ({
    activeCategory:state.getCategories.activeCategory,
    categories: state.getCategories.categories

})





export default connect(mapStateToProps, {
        fetchJoke,
        selectCategory
})(Pills)