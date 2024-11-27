import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { NavLink } from "react-router-dom";

const AddBlog = () => {
  const [blocks, setBlocks] = useState([{ id: 1, selectedBlock: "" }]);

  const handleBlockChange = (id, value) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, selectedBlock: value } : block
      )
    );
  };

  const addBlock = () => {
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      { id: prevBlocks.length + 1, selectedBlock: "" },
    ]);
  };

  const renderDynamicInput = (selectedBlock) => {
    switch (selectedBlock) {
      case "h1":
        return (
          <div className="theme-form">
            <label>H1</label>
            <input type="text" name="h1" placeholder="Enter heading text" />
          </div>
        );
      case "h2":
        return (
          <div className="theme-form">
            <label>H2</label>
            <input type="text" name="h2" placeholder="Enter heading text" />
          </div>
        );
      case "p":
        return (
          <div className="theme-form">
            <label>Paragraph</label>
            <textarea name="p" placeholder="Enter paragraph text"></textarea>
          </div>
        );
      case "image":
        return (
          <div className="theme-form">
            <label>Image</label>
            <input type="file" name="image" accept=".webp" />
          </div>
        );
      case "image2":
        return (
          <div className="theme-form">
            <label>Image 2</label>
            <input type="file" name="image2" accept=".webp" />
            <input type="file" name="image2" accept=".webp" />
          </div>
        );
      case "image3":
        return (
          <div className="theme-form">
            <label>Image 3</label>
            <input type="file" name="image3" accept=".webp" />
            <input type="file" name="image3" accept=".webp" />
            <input type="file" name="image3" accept=".webp" />
          </div>
        );
      case "video":
        return (
          <div className="theme-form">
            <label>Video URL</label>
            <input type="text" name="video" placeholder="Enter Video URL" />
          </div>
        );
      case "custom-code":
        return (
          <div className="theme-form">
            <label>Custom Code</label>
            <textarea name="custom-code" rows={4}></textarea>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <AdminLayout>
        <div className="theme-form-header">
          <h2>Add Blog </h2>
        </div>
        <div className="form-white-bg">
          <form>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Title</label>
                  <input type="text" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label> Meta Title</label>
                  <input type="text" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Meta Description</label>
                  <input type="text" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Banner</label>
                  <input type="file" name="title" required accept=".webp" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Thumbnail</label>
                  <input type="file" name="title" required accept=".webp" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Blog Category</label>
                  <select>
                    <option selected>Select Blog Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                  </select>
                </div>
              </div>

              {blocks.map((block) => (
                <>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="theme-form ">
                      <label>Choose Block</label>
                      <div className="d-flex">
                        <select
                          onChange={(e) =>
                            handleBlockChange(block.id, e.target.value)
                          }
                          value={block.selectedBlock}
                        >
                          <option selected value="">
                            Select Block
                          </option>
                          <option value="h1">h1</option>
                          <option value="h2">h2</option>
                          <option value="p">p</option>
                          <option value="image">Image</option>
                          <option value="image2">Image 2</option>
                          <option value="image3">Image 3</option>
                          <option value="video">Video</option>
                          <option value="custom-code">Custom Code</option>
                        </select>
                        <NavLink
                          to="/blog-creation/add"
                          type="button"
                          onClick={addBlock}
                          className="theme-cta ms-2"
                        >
                          <i class="las la-plus-circle"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    {renderDynamicInput(block.selectedBlock)}
                  </div>
                </>
              ))}

              <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>

              <div className="col-12">
                <div className="theme-form">
                  {/* <input type="button" value="Save" onClick={handleSubmit}/> */}
                  <button type="submit">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AddBlog;
