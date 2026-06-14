import {useState, useEffect } from "react";
import API from "../../services/api.js";


const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(()=>{
    API.get("/categories")
    .then((res)=>{
      setCategories(res.data);
    })
    .catch((err)=>console.log(err));

    API.get(`/groups?categoryId=${selectedCategory}`)
    .then((res)=>{
      setGroups(res.data);
    })
    .catch((err)=>console.log(err));
    }, [selectedCategory]);

  const handleSubmit = async ()=> {

    console.log("TITLE:", title);
    console.log("CONTENT:", content);
    try {
      const response = await API.post("/articles", {
        title,
        content,
      
        categoryId: selectedCategory ,
      groupId: selectedGroup,
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

      <select 
        value={selectedCategory}
        onChange={(e)=>setSelectedCategory(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option 
          key={category._id}
          value={category._id}
          >
            {category.title}
          </option>
        ))}
      </select>

      <select
        value={selectedGroup}
        onChange={(e)=>setSelectedGroup(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      >
        <option value="">Select Group</option>

        {groups.map((group)=>(
          <option
          key={group._id} 
          value={group._id}
          >
            {group.title}
          </option>
        ))}
      </select>

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