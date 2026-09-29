import { useState } from "react";
import { makeId, formatDate } from "../storage.js";

function IssueSection({ categories, departments, issues, addIssue }) {
  // Form values
  const [citizenName, setCitizenName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [description, setDescription] = useState("");

  // One object holds all the error messages, e.g. { title: "Issue title is required." }
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Search box text
  const [issueSearch, setIssueSearch] = useState("");

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

  // When the category changes, the old department is no longer valid
  function handleCategoryChange(event) {
    setCategoryId(event.target.value);
    setDepartmentId("");
    setErrors({ ...errors, categoryId: "", departmentId: "" });
  }

  // Removes the error of one field when the citizen starts typing in it
  function clearError(fieldName) {
    setErrors({ ...errors, [fieldName]: "" });
  }

  function clearForm() {
    setCitizenName("");
    setEmail("");
    setTitle("");
    setCategoryId("");
    setDepartmentId("");
    setDescription("");
    setErrors({});
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccessMessage("");

    // Validation: collect every error first, then show them together
    const newErrors = {};

    if (citizenName.trim() === "") {
      newErrors.citizenName = "Citizen name is required.";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (title.trim() === "") {
      newErrors.title = "Issue title is required.";
    }

    if (categoryId === "") {
      newErrors.categoryId = "Please select a category.";
    }

    if (departmentId === "") {
      newErrors.departmentId = "Please select a department.";
    }

    if (description.trim() === "") {
      newErrors.description = "Issue description is required.";
    }

    setErrors(newErrors);

    // If there is at least one error, stop here
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const newIssue = {
      id: makeId("iss"),
      citizenName: citizenName.trim(),
      email: email.trim(),
      title: title.trim(),
      categoryId: categoryId, // link to the category (id, not name)
      departmentId: departmentId, // link to the department (id, not name)
      description: description.trim(),
      status: "Submitted",
      createdAt: new Date().toISOString(),
    };

    addIssue(newIssue);
    clearForm();
    setSuccessMessage("Your issue has been submitted successfully.");
  }

  // SEARCH: citizen name, issue title, category name, department name
  const searchText = issueSearch.trim().toLowerCase();
  const filteredIssues = issues.filter((item) => {
    return (
      item.citizenName.toLowerCase().includes(searchText) ||
      item.title.toLowerCase().includes(searchText) ||
      getCategoryName(item.categoryId).toLowerCase().includes(searchText) ||
      getDepartmentName(item.departmentId).toLowerCase().includes(searchText)
    );
  });

  return (
    <section className="bg-white border border-gray-300 mb-6">
      {/* HEADER */}
      <div className="bg-navy text-white px-4 py-2">
        <h2 className="font-bold">Issues</h2>
      </div>

      {/* SUCCESS MESSAGE */}
      {successMessage !== "" && (
        <p className="m-4 border border-green-600 bg-green-50 text-green-800 text-sm px-3 py-2">
          {successMessage}
        </p>
      )}

      {/* ISSUE FORM */}
      <form onSubmit={handleSubmit} className="m-4 border border-gray-300">
        <h3 className="bg-paper border-b border-gray-300 font-bold text-navy px-4 py-2">
          Raise an Issue
        </h3>

        {/* grid-cols-1 on mobile, two columns from tablet size upwards */}
        <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
          {/* Message when there are no categories */}
          {categories.length === 0 && (
            <p className="md:col-span-2 border border-red-600 bg-red-50 text-red-800 text-sm px-3 py-2">
              No categories are available yet. Please add a category and a department first.
            </p>
          )}

          {/* Message when the chosen category has no departments */}
          {categoryId !== "" && departmentsInCategory.length === 0 && (
            <p className="md:col-span-2 border border-red-600 bg-red-50 text-red-800 text-sm px-3 py-2">
              No departments found under this category. Please add a department first.
            </p>
          )}

          <div>
            <label className="block text-sm font-semibold mb-1">Citizen Name *</label>
            <input
              type="text"
              value={citizenName}
              onChange={(e) => {
                setCitizenName(e.target.value);
                clearError("citizenName");
              }}
              placeholder="Enter your full name"
              className="w-full border border-gray-400 px-3 py-2 text-sm"
            />
            {errors.citizenName && <p className="text-red-700 text-sm mt-1">{errors.citizenName}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email *</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
              placeholder="Example: name@example.com"
              className="w-full border border-gray-400 px-3 py-2 text-sm"
            />
            {errors.email && <p className="text-red-700 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">Issue Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                clearError("title");
              }}
              placeholder="Example: Unable to get hospital appointment"
              className="w-full border border-gray-400 px-3 py-2 text-sm"
            />
            {errors.title && <p className="text-red-700 text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Category *</label>
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
            {errors.categoryId && <p className="text-red-700 text-sm mt-1">{errors.categoryId}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Department *</label>
            <select
              value={departmentId}
              onChange={(e) => {
                setDepartmentId(e.target.value);
                clearError("departmentId");
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
            {errors.departmentId && <p className="text-red-700 text-sm mt-1">{errors.departmentId}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">Issue Description *</label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                clearError("description");
              }}
              placeholder="Describe your issue in detail"
              className="w-full border border-gray-400 px-3 py-2 text-sm"
            />
            {errors.description && <p className="text-red-700 text-sm mt-1">{errors.description}</p>}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-navy hover:bg-navydark text-white text-sm font-semibold px-5 py-2"
            >
              Submit Issue
            </button>
          </div>
        </div>
      </form>

      {/* SEARCH + TABLE */}
      <div className="px-4 pb-4">
        <h3 className="font-bold text-navy mb-2">List of Issues ({issues.length})</h3>

        <div className="mb-3">
          <input
            type="text"
            value={issueSearch}
            onChange={(e) => setIssueSearch(e.target.value)}
            placeholder="Search by citizen, issue, category or department"
            className="w-full sm:w-96 border border-gray-400 px-3 py-2 text-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">S.No</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Citizen Name</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Issue</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Department</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {/* No records at all */}
              {issues.length === 0 && (
                <tr>
                  <td colSpan="7" className="border border-gray-300 px-3 py-4 text-center text-gray-600">
                    No issues available.
                  </td>
                </tr>
              )}

              {/* Records exist, but the search found nothing */}
              {issues.length > 0 && filteredIssues.length === 0 && (
                <tr>
                  <td colSpan="7" className="border border-gray-300 px-3 py-4 text-center text-gray-600">
                    No matching issues found.
                  </td>
                </tr>
              )}

              {filteredIssues.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.citizenName}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.title}</td>
                  <td className="border border-gray-300 px-3 py-2">{getCategoryName(item.categoryId)}</td>
                  <td className="border border-gray-300 px-3 py-2">{getDepartmentName(item.departmentId)}</td>
                  <td className="border border-gray-300 px-3 py-2">
                    <span className="border border-navy text-navy text-xs font-semibold px-2 py-0.5 whitespace-nowrap">
                      {item.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 whitespace-nowrap">
                    {formatDate(item.createdAt)}
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

export default IssueSection;
