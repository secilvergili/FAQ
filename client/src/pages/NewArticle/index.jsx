import {useState} from "react";
import API from "../../services/api.js";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");



  const handleSubmit = async ()=> {

    console.log("TITLE:", title);
    console.log("CONTENT:", content);
    try {
      const response = await API.post("/articles", {
        title,
        content,
      
        categoryId: "69e4eaff2a56ce10e81f6220",
      groupId: "69e4eb0bd501d826ec058e58",
      });
    } catch (error) {
      console.log(error);      
    }
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
     <h1 className="text-2xl font-bold mb-6">
      Create New Article
      </h1>

      <input 
      type="text"
      placeholder="Article Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border p-3 rounded-lg mb-4"
      />

      <textarea 
      placeholder="Article Content"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      rows="10"
      className="w-full border p-3 rounded-lg mb-4"
      />

      <button
      onClick={handleSubmit}  
      className="bg-green-500 text-white px-6 py-3 rounded-lg"
      >
       Save article
      </button>
     
     </div>
  )
}

export default NewArticle;