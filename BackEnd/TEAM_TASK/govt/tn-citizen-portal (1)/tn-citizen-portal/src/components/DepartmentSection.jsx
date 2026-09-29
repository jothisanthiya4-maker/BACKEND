import { useState } from "react";
import { makeId } from "../storage.js";

function DepartmentSection({
  categories,
  departments,
  services,
  issues,
  addDepartment,
  updateDepartment,
  deleteDepartment,
  formOpen,
  openForm,
  closeForm,
}) {
  // Form values
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");

  // "" means we are ADDING. If it has an id, we are EDITING that department.
  const [editingId, setEditingId] = useState("");

  // Search box text (only for this table)
  const [departmentSearch, setDepartmentSearch] = useState("");

  // Messages
  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Finds the category name using the saved categoryId
  function getCategoryName(id) {
    const found = categories.find((item) => item.id === id);
    return found ? found.name : "-";
  }

  // Counts how many services belong to a department
  function getServiceCount(departmentId) {
    return services.filter((srv) => srv.departmentId === departmentId).length;
  }

  // Empties the form fields and the error messages
  function clearForm() {
    setName("");
    setDescription("");
    setCategoryId("");
    setNameError("");
    setCategoryError("");
    setEditingId("");
  }

  function clearMessages() {
    setSuccessMessage("");
    setErrorMessage("");
  }

  function handleOpen() {
    clearMessages();
    clearForm();
    openForm("department");
  }

  function handleCancel() {
    clearForm();
    closeForm();
  }

  // Edit button: open the form and fill it with the existing values
  function handleEdit(item) {
    clearMessages();
    setNameError("");
    setCategoryError("");
    setEditingId(item.id);
    setName(item.name);
    setDescription(item.description);
    setCategoryId(item.categoryId); // the existing category is selected
    openForm("department");
  }

  // Delete button
  function handleDelete(item) {
    clearMessages();

    // Are there services or issues using this department?
    const hasServices = services.some((srv) => srv.departmentId === item.id);
    const hasIssues = issues.some((iss) => iss.departmentId === item.id);
    if (hasServices || hasIssues) {
      setErrorMessage("Cannot delete this department because services or issues are associated with it.");
      return;
    }

    const sure = window.confirm("Are you sure you want to delete this department?");
    if (!sure) {
      return;
    }

    deleteDepartment(item.id);

    // If this department was open in the edit form, close the form
    if (editingId === item.id) {
      clearForm();
      closeForm();
    }
    setSuccessMessage("Department deleted successfully.");
  }

  function handleSubmit(event) {
    event.preventDefault();
    clearMessages();

    // A department needs a category, so stop if there are none
    if (categories.length === 0) {
      return;
    }

    // Validation: work out the messages first, then show them
    const nameMessage = name.trim() === "" ? "Department name is required." : "";
    const categoryMessage = categoryId === "" ? "Please select a category." : "";
    setNameError(nameMessage);
    setCategoryError(categoryMessage);
    if (nameMessage !== "" || categoryMessage !== "") {
      return;
    }

    // Do not allow the same department name twice
    // (when editing, the department being edited is ignored in this check)
    const alreadyExists = departments.some(
      (item) =>
        item.id !== editingId && item.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (alreadyExists) {
      setNameError("This department already exists.");
      return;
    }

    if (editingId === "") {
      // ADD a new department
      const newDepartment = {
        id: makeId("dep"),
        name: name.trim(),
        description: description.trim(),
        categoryId: categoryId, // link to the category (id, not name)
        createdAt: new Date().toISOString(),
      };
      addDepartment(newDepartment);
      setSuccessMessage("Department added successfully.");
    } else {
      // UPDATE the existing department (same id, so no duplicate)
      const oldDepartment = departments.find((item) => item.id === editingId);
      const updatedDepartment = {
        ...oldDepartment,
        name: name.trim(),
        description: description.trim(),
        categoryId: categoryId,
      };
      updateDepartment(updatedDepartment);
      setSuccessMessage("Department updated successfully.");
    }

    clearForm();
    closeForm();
  }

  // SEARCH: keep only the departments that match the search text
  // (we search the department name, description and the category name)
  const searchText = departmentSearch.trim().toLowerCase();
  const filteredDepartments = departments.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText) ||
      getCategoryName(item.categoryId).toLowerCase().includes(searchText)
    );
  });

  return (
    <section className="bg-white border border-gray-300 mb-6">
      {/* HEADER */}
      <div className="bg-navy text-white px-4 py-2 flex items-center justify-between">
        <h2 className="font-bold">Departments</h2>
        {!formOpen && (
          <button
            onClick={handleOpen}
            className="bg-white text-navy text-sm font-semibold px-4 py-1 hover:bg-gray-100"
          >
            Add Department
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
            {editingId === "" ? "Add Department" : "Update Department"}
          </h3>

          <div className="p-4 grid gap-4 md:grid-cols-2">
            {/* Message when there are no categories */}
            {categories.length === 0 && (
              <p className="md:col-span-2 border border-red-600 bg-red-50 text-red-800 text-sm px-3 py-2">
                Please add a category before adding a department.
              </p>
            )}

            <div>
              <label className="block text-sm font-semibold mb-1">Select Category *</label>
              <select
                value={categoryId}
                onChange={(e) => {
                  setCategoryId(e.target.value);
                  setCategoryError("");
                }}
                className="w-full border border-gray-400 px-3 py-2 text-sm bg-white"
              >
                <option value="">-- Select Category --</option>
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              {categoryError !== "" && <p className="text-red-700 text-sm mt-1">{categoryError}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Department Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
                placeholder="Example: Health and Family Welfare Department"
                className="w-full border border-gray-400 px-3 py-2 text-sm"
              />
              {nameError !== "" && <p className="text-red-700 text-sm mt-1">{nameError}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-1">Department Description</label>
              <textarea
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short description of the department"
                className="w-full border border-gray-400 px-3 py-2 text-sm"
              />
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                disabled={categories.length === 0}
                className="bg-navy hover:bg-navydark text-white text-sm font-semibold px-5 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {editingId === "" ? "Add Department" : "Update Department"}
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
        <h3 className="font-bold text-navy mb-2">List of Departments ({departments.length})</h3>

        {/* Search box */}
        <div className="mb-3">
          <input
            type="text"
            value={departmentSearch}
            onChange={(e) => setDepartmentSearch(e.target.value)}
            placeholder="Search by department, description or category"
            className="w-full sm:w-80 border border-gray-400 px-3 py-2 text-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">S.No</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Department Name</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Service Count</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* No records at all */}
              {departments.length === 0 && (
                <tr>
                  <td colSpan="6" className="border border-gray-300 px-3 py-4 text-center text-gray-600">
                    No departments available.
                  </td>
                </tr>
              )}

              {/* Records exist, but the search found nothing */}
              {departments.length > 0 && filteredDepartments.length === 0 && (
                <tr>
                  <td colSpan="6" className="border border-gray-300 px-3 py-4 text-center text-gray-600">
                    No matching departments found.
                  </td>
                </tr>
              )}

              {filteredDepartments.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.description || "-"}</td>
                  <td className="border border-gray-300 px-3 py-2">{getCategoryName(item.categoryId)}</td>
                  <td className="border border-gray-300 px-3 py-2">{getServiceCount(item.id)}</td>
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

export default DepartmentSection;
