import React from "react";
import AdminLayout from "../../components/AdminLayout";

const EditBlog = () => {
  return (
    <div>
      <AdminLayout>
        <div className="theme-form-header">
          <h2>Edit Blog </h2>
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
                  <input type="file" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Thumbnail</label>
                  <input type="file" name="title" required />
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

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Choose Block</label>
                  <select>
                    <option selected>Select Block</option>
                    <option>h1</option>
                    <option>h2</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Image 2</label>
                  <input type="file" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Image 3</label>
                  <input type="file" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Video</label>
                  <input type="file" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Custom Code</label>
                  <input type="text" name="title" required />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Table of Content</label>
                  <input type="text" name="title" required />
                </div>
              </div>

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

export default EditBlog;
