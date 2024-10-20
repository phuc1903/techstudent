import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS


const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      ["link", "image"],
      [{ 'indent': '-1'}, { 'indent': '+1' }],  
      [{ 'direction': 'rtl' }],    
    ],
  };

function Create() {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(description);
    };

    return (
        <>
            <Head title="Create Course" />
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
                <label
                    htmlFor="description"
                    className="block text-lg font-medium text-gray-700"
                >
                    Course Descriptions
                </label>
                <ReactQuill
                    value={description}
                    onChange={setDescription}
                    modules={modules}
                    placeholder="Enter your course descriptions"
                    className=""
                />
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default Create;
