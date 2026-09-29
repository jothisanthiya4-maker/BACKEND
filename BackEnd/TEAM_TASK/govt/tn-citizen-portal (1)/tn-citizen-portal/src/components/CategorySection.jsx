import { useState } from "react";
import { makeId } from "../storage.js";

function CategorySection({
  categories,
  departments,
  services,
  issues,
  addCategory,
  updateCategory,
  deleteCategory,
  formOpen,
  openForm,
  closeForm,
}) {
  // Form values
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // "" means we are ADDING. If it has an id, we are EDITING that category.
  const [editingId, setEditingId] = useState("");

  // Search box text (only for this table)
  const [categorySearch, setCategorySearch] = useState("");

  // Messages
  const [nameError, setNameError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Empties the form fields and the error message
  function clearForm() {
    setName("");
    setDescription("");
    setNameError("");
    setEditingId("");
  }

  function clearMessages() {
    setSuccessMessage("");
    setErrorMessage("");
  }

  function handleOpen() {
    clearMessages();
    clearForm();
    openForm("category");
  }

  function handleCancel() {
    clearForm();
    closeForm();
  }

  // Edit button: open the form and fill it with the existing values
  function handleEdit(item) {
    clearMessages();
    setNameError("");
    setEditingId(item.id);
    setName(item.name);
    setDescription(item.description);
    openForm("category");
  }

  // Delete button
  function handleDelete(item) {
    clearMessages();

    // Are there departments, services or issues using this category?
    const hasDepartments = departments.some((dep) => dep.categoryId === item.id);
    const hasServices = services.some((srv) => srv.categoryId === item.id);
    const hasIssues = issues.some((iss) => iss.categoryId === item.id);

    if (hasDepartments || hasServices || hasIssues) {
      setErrorMessage(
        "Cannot delete this category because departments, services or issues are associated with it."
      );
      return;
    }

    const sure = window.confirm("Are you sure you want to delete this category?");
    if (!sure) {
      return;
    }

    deleteCategory(item.id);

    // If this category was open in the edit form, close the form
    if (editingId === item.id) {
      clearForm();
      closeForm();
    }
    setSuccessMessage("Category deleted successfully.");
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading
    clearMessages();

    // Validation
    if (name.trim() === "") {
      setNameError("Category name is required.");
      return;
    }

    // Do not allow the same category name twice
    // (when editing, the category being edited is ignored in this check)
    const alreadyExists = categories.some(
      (item) =>
        item.id !== editingId && item.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (alreadyExists) {
      setNameError("This category already exists.");
      return;
    }

    if (editingId === "") {
      // ADD a new category
      const newCategory = {
        id: makeId("cat"),
        name: name.trim(),
        description: description.trim(),
        createdAt: new Date().toISOString(),
      };
      addCategory(newCategory);
      setSuccessMessage("Category added successfully.");
    } else {
      // UPDATE the existing category (same id, so no duplicate)
      const oldCategory = categories.find((item) => item.id === editingId);
      const updatedCategory = {
        ...oldCategory,
        name: name.trim(),
        description: description.trim(),
      };
      updateCategory(updatedCategory);
      setSuccessMessage("Category updated successfully.");
    }

    clearForm();
    closeForm();
  }

  // Counts how many departments belong to a category
  function getDepartmentCount(categoryId) {
    return departments.filter((dep) => dep.categoryId === categoryId).length;
  }

  // SEARCH: keep only the categories that match the search text
  const searchText = categorySearch.trim().toLowerCase();
  const filteredCategories = categories.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText)
    );
  });

  return (
    <section className="bg-white border border-gray-300 mb-6">
      {/* HEADER */}
      <div className="bg-navy text-white px-4 py-2 flex items-center justify-between">
        <h2 className="font-bold">Categories</h2>
        {!formOpen && (
          <button
            onClick={handleOpen}
            className="bg-white text-navy text-sm font-semibold px-4 py-1 hover:bg-gray-100"
          >
            Add Category
          </button>
        )}
      </div>

      {/* SUCCESS MESSAGE */}
      {successMessage !== "" && (
        <p className="m-4 border border-green-600 bg-green-50 text-green-800 text-sm px-3 py-2">
          {successMessage}
        </p>
      )}

      {/* ERROR MESSAGE (for example when delete is not allowed) */}
      {errorMessage !== "" && (
        <p className="m-4 border border-red-600 bg-red-50 text-red-800 text-sm px-3 py-2">
          {errorMessage}
        </p>
      )}

      {/* FORM (only visible when formOpen is true) */}
      {formOpen && (
        <form onSubmit={handleSubmit} className="m-4 border border-gray-300">
          <h3 className="bg-paper border-b border-gray-300 font-bold text-navy px-4 py-2">
            {editingId === "" ? "Add Category" : "Update Category"}
          </h3>

          <div className="p-4 grid gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Category Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
                placeholder="Example: Public Health"
                className="w-full border border-gray-400 px-3 py-2 text-sm"
              />
              {nameError !== "" && <p className="text-red-700 text-sm mt-1">{nameError}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Category Description</label>
              <textarea
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Example: Health-related government services and citizen issues."
                className="w-full border border-gray-400 px-3 py-2 text-sm"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-navy hover:bg-navydark text-white text-sm font-semibold px-5 py-2"
              >
                {editingId === "" ? "Add Category" : "Update Category"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-white border border-gray-400 text-gray-800 text-sm font-semibold px-5 py-2 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      {/* SEARCH + TABLE */}
      <div className="px-4 pb-4">
        <h3 className="font-bold text-navy mb-2">List of Categories ({categories.length})</h3>

        {/* Search box */}
        <div className="mb-3">
          <input
            type="text"
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
            placeholder="Search by category name or description"
            className="w-full sm:w-80 border border-gray-400 px-3 py-2 text-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">S.No</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Category Name</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Department Count</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* No records at all */}
              {categories.length === 0 && (
                <tr>
                  <td colSpan="5" className="border border-gray-300 px-3 py-4 text-center text-gray-600">
                    No categories available.
                  </td>
                </tr>
              )}

              {/* Records exist, but the search found nothing */}
              {categories.length > 0 && filteredCategories.length === 0 && (
                <tr>
                  <td colSpan="5" className="border border-gray-300 px-3 py-4 text-center text-gray-600">
                    No matching categories found.
                  </td>
                </tr>
              )}

              {filteredCategories.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.description || "-"}</td>
                  <td className="border border-gray-300 px-3 py-2">{getDepartmentCount(item.id)}</td>
                  <td className="border border-gray-300 px-3 py-2 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(item)}
                      className="border border-navy text-navy text-xs font-semibold px-3 py-1 mr-2 hover:bg-navy hover:text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="border border-red-700 text-red-700 text-xs font-semibold px-3 py-1 hover:bg-red-700 hover:text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
