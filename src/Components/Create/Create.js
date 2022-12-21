import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import { FirebaseContext,AuthContext } from "../../store/FirebaseContext";
const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  const [product,setProduct] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState(null)
  const [image,setImage] = useState()
  const date = new Date()
  const handleSubmit = ()=>{
    console.log(" function wrking")
    firebase.storage().ref(`/image'${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name:product,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString()
        })
        history.push('/')
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={product}
              onChange={(e)=>setProduct(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input" 
              type="number" 
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              id="fname" 
              name="Price"
               />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : null}></img>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
