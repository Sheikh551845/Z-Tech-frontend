import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Components/AuthProvider';

export default function ProductDetails() {

    

    const {_id}=useParams();
   
    const [CartData, setCartData] = useState([])
    const [exist, setExist]=useState([])

    useEffect(()=>{
        fetch("https://zt-ech-backend-i7c5jj7n8-sheikh-mohammads-projects.vercel.app/MyCart")
        .then ((res)=> res.json())
        .then((data)=>{setCartData(data);
            console.log(data)
        })
        } ,[])

        

        

   

    
   
     
   
    const data=useLoaderData();

    

    

    const [card, setCard]=useState([])
    
    useEffect(()=>{
       const findCard = data?.find(card=> card._id == _id)

       setCard(findCard);
      
    }
    ,[_id,data])
   

    const {productName, imageUrl,description,brandName,productType,price,rating}=card;



     useEffect(()=>{
        const findCard = CartData?.find(card=> card._id == _id)
 
        if(findCard)
        {
           
            setExist(findCard);
        }
        
          
     }
     ,[CartData])

  
    //   console.log(exist.length)
    //  if(!exist || exist.length==0)
    //  {
    //    console.log("helloo");
    //  }
    //  else{
    //     console.log("helloo hoilo na");
    //  }

     const CartSubmit=()=>
     {
        
        if(!exist || exist.length==0){

            fetch('https://zt-ech-backend-i7c5jj7n8-sheikh-mohammads-projects.vercel.app/MyCart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({productName, imageUrl,description,brandName,productType,price,rating})
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                      toast.success("Product added to Cart")
                      
                    }
                })
        }
        else{
            toast.error("Already added this product in cart"); 
        }
     
     
         }
 



  return (
    <div className="mx-auto">
    <div className=" py-12 mx-auto">
 <div className="h-[500px] rounded-md flex flex-col bg-no-repeat bg-cover" style={{ backgroundImage: `url('${imageUrl}')` }}>
   <div className="w-full h-[480px]">

   </div>
   <div className="w-full h-[120px]  bg-black bg-opacity-60 bg-blend-overlay">
       <p className="text-white p-4 text-3xl font-bold text-left mt-5 ml-5">{productName} </p>
   </div>
 </div>
 
 <div className="mx-auto relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div className="p-6">
<h5 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
 Details
</h5>
<h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
 Provider: <span className='text-indigo-700'>{brandName}</span>
</h5>
<p className="block font-sans text-black font-normal leading-relaxed text-inherit antialiased">
 {description}
</p>
</div>

<div className="w-fit mx-auto py-10">
<button
    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
    onClick={CartSubmit}
  >
    Add to Cart
  </button>
</div>

</div>




</div>


 
</div>
  )
}
