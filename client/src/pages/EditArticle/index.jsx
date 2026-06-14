import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import API from "../../services/api.js";

const EditArticle = () => {
 const { id }= useParams();

 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");

 useEffect (()=>{
  API.get(`/articles/${id}`)
  .then((res)=>{
   console.log("ARTICLE", res.data);

   setTitle(res.data.title);
   setContent(res.data.content);
  })
  .catch((error)=>console.log(error));
 }, [id]);

 const handleUpdate = async () => {
  try {
   await API.put(`/articles/${id}`, {
    title,
    content,
   });
   alert("Article updated successfully");
  } catch (error) {
   console.log(error);
  }
 }
 return (
   <div className="max-w-3xl mx-auto p-6">
     <h1 className="text-2xl font-bold mb-6">
      Edit Article
      </h1>
     
     <input 
     type="text"
     value={title}
     onChange={(e)=>setTitle(e.target.value)}
     className="w-full border p-3 rounded-lg mb-4"
     />

     <textarea
     value={content}
     onChange={(e)=>setContent(e.target.value)}
     rows="15"
     className="w-full border p-3 rounded-lg mb-4"
     />


     <button 
     onClick={handleUpdate}
     className="bg-blue-500 text-white px-6 py-3 rounded-lg">
      Update Article
     </button>
   </div>
 );
}

export default EditArticle;