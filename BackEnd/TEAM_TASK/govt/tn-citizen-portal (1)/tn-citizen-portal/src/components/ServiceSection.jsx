import { useState } from "react";
import { makeId } from "../storage.js";

function ServiceSection({
  categories,
  departments,
  services,
  addService,
  updateService,
  deleteService,
  formOpen,
  openForm,
  closeForm,
}) {
  // Form values
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  // "" means we are ADDING. If it has an id, we are EDITING that service.
  const [editingId, setEditingId] = useState("");

  // Search box text (only for this table)
  const [serviceSearch, setServiceSearch] = useState("");

  // Messages
  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [departmentError, setDepartmentError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Helper functions to find names using saved ids
  function getCategoryName(id) {
    const found = categories.find((item) => item.id === id);
    return found ? found.name : "-";
  }

  function getDepartmentName(id) {
    const found = departments.find((item) => item.id === id);
    return found ? found.name : "-";
  }

  // Only the departments that belong to the selected category
  const departmentsInCategory = departments.filter((item) => item.categoryId === categoryId);

  // Empties the form fields and the error messages
  function clearForm() {
    setName("");
    setDescription("");
    setCategoryId("");
    setDepartmentId("");
    setNameError("");
    setCategoryError("");
    setDepartmentError("");
    setEditingId("");
  }

  function clearMessages() {
    setSuccessMessage("");
    setErrorMessage("");
  }

  function handleOpen() {
    clearMessages();
    clearForm();
    openForm("service");
  }

  function handleCancel() {
    clearForm();
    closeForm();
  }

  // When the category changes, the old department is no longer valid
  function handleCategoryChange(event) {
    setCategoryId(event.target.value);
    setDepartmentId(""); // reset the department
    setCategoryError("");
    setDepartmentError("");
  }

  // Edit button: open the form and fill it with the existing values
  function handleEdit(item) {
    clearMessages();
    setNameError("");
    setCategoryError("");
    setDepartmentError("");
    setEditingId(item.id);
    setName(item.name);
    setDescription(item.description);
    setCategoryId(item.categoryId); // the existing category is selected
    setDepartmentId(item.departmentId); // the existing department is selected
    openForm("service");
  }

  // Delete button (a service has nothing depending on it, so only confirm)
  function handleDelete(item) {
    clearMessages();

    const sure = window.confirm("Are you sure you want to delete this service?");
    if (!sure) {
      return;
    }

    deleteService(item.id);

    // If this service was open in the edit form, close the form
    if (editingId === item.id) {
      clearForm();
      closeForm();
    }
    setSuccessMessage("Service deleted successfully.");
  }

  function handleSubmit(event) {
    event.preventDefault();
    clearMessages();

    // A service needs a category, so stop if there are none
    if (categories.length === 0) {
      return;
    }

    // Validation: work out the messages first, then show them
    const nameMessage = name.trim() === "" ? "Service name is required." : "";
    const categoryMessage = categoryId === "" ? "Please select a category." : "";
    const departmentMessage = departmentId === "" ? "Please select a department." : "";
    setNameError(nameMessage);
    setCategoryError(categoryMessage);
    setDepartmentError(departmentMessage);
    if (nameMessage !== "" || categoryMessage !== "" || departmentMessage !== "") {
      return;
    }

    // Do not allow the same service name twice in the same department
    // (when editing, the service being edited is ignored in this check)
    const alreadyExists = services.some(
      (item) =>
        item.id !== editingId &&
        item.departmentId === departmentId &&
        item.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (alreadyExists) {
      setNameError("This service already exists in the selected department.");
      return;
    }

    if (editingId === "") {
      // ADD a new service
      const newService = {
        id: makeId("srv"),
        name: name.trim(),
        description: description.trim(),
        categoryId: categoryId, // link to the category (id, not name)
        departmentId: departmentId, // link to the department (id, not name)
        createdAt: new Date().toISOString(),
      };
      addService(newService);
      setSuccessMessage("Service added successfully.");
    } else {
      // UPDATE the existing service (same id, so no duplicate)
      const oldService = services.find((item) => item.id === editingId);
      const updatedService = {
        ...oldService,
        name: name.trim(),
        description: description.trim(),
        categoryId: categoryId,
        departmentId: departmentId,
      };
      updateService(updatedService);
      setSuccessMessage("Service updated successfully.");
    }

    clearForm();
    closeForm();
  }

  // SEARCH: keep only the services that match the search text
  // (we search the service name, description, category name and department name)
  const searchText = serviceSearch.trim().toLowerCase();
  const filteredServices = services.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText) ||
      getCategoryName(item.categoryId).toLowerCase().includes(searchText) ||
      getDepartmentName(item.departmentId).toLowerCase().includes(searchText)
    );
  });

  return (
    <section className="bg-white border border-gray-300 mb-6">
      {/* HEADER */}
      <div className="bg-navy text-white px-4 py-2 flex items-center justify-between">
        <h2 className="font-bold">Services</h2>
        {!formOpen && (
          <button
            onClick={handleOpen}
            className="bg-white text-navy text-sm font-semibold px-4 py-1 hover:bg-gray-100"
          >
            Add Service
          </button>
        )}
      </div>

      {/* SUCCESS MESSAGE */}
      {successMessage !== "" && (
        <p className="m-4 border border-green-600 bg-green-50 text-green-800 text-sm px-3 py-2">
          {successMessage}
        </p>
      )}

      {/* ERROR MESSAGE */}
      {errorMessage !== "" && (
        <p className="m-4 border border-red-600 bg-red-50 text-red-800 text-sm px-3 py-2">
          {errorMessage}
        </p>
      )}

      {/* FORM (only visible when formOpen is true) */}
      {formOpen && (
        <form onSubmit={handleSubmit} className="m-4 border border-gray-300">
          <h3 className="bg-paper border-b border-gray-300 font-bold text-navy px-4 py-2">
            {editingId === "" ? "Add Service" : "Update Service"}
          </h3>

          <div className="p-4 grid gap-4 md:grid-cols-2">
            {/* Message when there are no categories */}
            {categories.length === 0 && (
              <p className="md:col-span-2 border border-red-600 bg-red-50 text-red-800 text-sm px-3 py-2">
                Please add a category before adding a service.
              </p>
            )}

            {/* Message when the chosen category has no departments */}
            {categoryId !== "" && departmentsInCategory.length === 0 && (
              <p className="md:col-span-2 border border-red-600 bg-red-50 text-red-800 text-sm px-3 py-2">
                No departments found under this category. Please add a department first.
              </p>
            )}

            <div>
              <label className="block text-sm font-semibold mb-1">Select Category *</label>
              <select
                value={categoryId}
                onChange={handleCategoryChange}
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
              <label className="block text-sm font-semibold mb-1">Select Department *</label>
              <select
                value={departmentId}
                onChange={(e) => {
                  setDepartmentId(e.target.value);
                  setDepartmentError("");
                }}
                disabled={categoryId === ""}
                className="w-full border border-gray-400 px-3 py-2 text-sm bg-white disabled:bg-gray-100"
              >
                <option value="">
                  {categoryId === "" ? "-- Select a category first --" : "-- Select Department --"}
                </option>
                {departmentsInCategory.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              {departmentError !== "" && <p className="text-red-700 text-sm mt-1">{departmentError}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Service Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
                placeholder="Example: Government Hospital Appointment"
                className="w-full border border-gray-400 px-3 py-2 text-sm"
              />
              {nameError !== "" && <p className="text-red-700 text-sm mt-1">{nameError}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Service Description</label>
              <textarea
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short description of the service"
                className="w-full border border-gray-400 px-3 py-2 text-sm"
              />
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                disabled={categories.length === 0}
                className="bg-navy hover:bg-navydark text-white text-sm font-semibold px-5 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {editingId === "" ? "Add Service" : "Update Service"}
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
        <h3 className="font-bold text-navy mb-2">List of Services ({services.length})</h3>

        {/* Search box */}
        <div className="mb-3">
          <input
            type="text"
            value={serviceSearch}
            onChange={(e) => setServiceSearch(e.target.value)}
            placeholder="Search by service, description, category or department"
            className="w-full sm:w-96 border border-gray-400 px-3 py-2 text-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">S.No</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Service Name</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Department</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* No records at all */}
              {services.length === 0 && (
                <tr>
                  <td colSpan="6" className="border border-gray-300 px-3 py-4 text-center text-gray-600">
                    No services available.
                  </td>
                </tr>
              )}

              {/* Records exist, but the search found nothing */}
              {services.length > 0 && filteredServices.length === 0 && (
                <tr>
                  <td colSpan="6" className="border border-gray-300 px-3 py-4 text-center text-gray-600">
                    No matching services found.
                  </td>
                </tr>
              )}

              {filteredServices.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.description || "-"}</td>
                  <td className="border border-gray-300 px-3 py-2">{getCategoryName(item.categoryId)}</td>
                  <td className="border border-gray-300 px-3 py-2">{getDepartmentName(item.departmentId)}</td>
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

export default ServiceSection;
