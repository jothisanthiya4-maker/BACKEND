import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import CategorySection from "./components/CategorySection.jsx";
import DepartmentSection from "./components/DepartmentSection.jsx";
import ServiceSection from "./components/ServiceSection.jsx";
import IssueSection from "./components/IssueSection.jsx";
import { readFromStorage, saveToStorage } from "./storage.js";

function App() {
  // Which page is open: "home", "departments", "services" or "issues"
  const [page, setPage] = useState("home");

  // Which section is shown on the home page: "", "category", "department", "service"
  const [activeForm, setActiveForm] = useState("");

  // Is the "Add ..." form open or closed?
  const [formOpen, setFormOpen] = useState(false);

  // All application data (kept here so all components can share it)
  const [categories, setCategories] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [services, setServices] = useState([]);
  const [issues, setIssues] = useState([]);

  // Becomes true after data is read from localStorage
  const [loaded, setLoaded] = useState(false);

  // 1. Load data from localStorage once, when the app starts
  useEffect(() => {
    setCategories(readFromStorage("categories"));
    setDepartments(readFromStorage("departments"));
    setServices(readFromStorage("services"));
    setIssues(readFromStorage("issues"));
    setLoaded(true);
  }, []);

  // 2. Save data to localStorage whenever it changes
  // (we wait until "loaded" is true so we never overwrite saved data with empty arrays)
  useEffect(() => {
    if (loaded) {
      saveToStorage("categories", categories);
    }
  }, [categories, loaded]);

  useEffect(() => {
    if (loaded) {
      saveToStorage("departments", departments);
    }
  }, [departments, loaded]);

  useEffect(() => {
    if (loaded) {
      saveToStorage("services", services);
    }
  }, [services, loaded]);

  useEffect(() => {
    if (loaded) {
      saveToStorage("issues", issues);
    }
  }, [issues, loaded]);

  // When a card on the home page opens a form, scroll down to that section
  useEffect(() => {
    if (page === "home" && activeForm !== "") {
      const section = document.getElementById("home-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeForm, page]);

  // ---------- CATEGORY functions ----------
  function addCategory(newCategory) {
    setCategories([...categories, newCategory]);
  }

  // Replaces the category that has the same id (no duplicate is created)
  function updateCategory(updatedCategory) {
    const newList = categories.map((item) =>
      item.id === updatedCategory.id ? updatedCategory : item
    );
    setCategories(newList);
  }

  function deleteCategory(id) {
    setCategories(categories.filter((item) => item.id !== id));
  }

  // ---------- DEPARTMENT functions ----------
  function addDepartment(newDepartment) {
    setDepartments([...departments, newDepartment]);
  }

  function updateDepartment(updatedDepartment) {
    const newList = departments.map((item) =>
      item.id === updatedDepartment.id ? updatedDepartment : item
    );
    setDepartments(newList);

    // If the department moved to another category, its services must move too,
    // otherwise Category -> Department -> Service would no longer match.
    const newServices = services.map((item) =>
      item.departmentId === updatedDepartment.id
        ? { ...item, categoryId: updatedDepartment.categoryId }
        : item
    );
    setServices(newServices);

    // Issues linked to this department must move to the new category as well
    const newIssues = issues.map((item) =>
      item.departmentId === updatedDepartment.id
        ? { ...item, categoryId: updatedDepartment.categoryId }
        : item
    );
    setIssues(newIssues);
  }

  function deleteDepartment(id) {
    setDepartments(departments.filter((item) => item.id !== id));
  }

  // ---------- SERVICE functions ----------
  function addService(newService) {
    setServices([...services, newService]);
  }

  function updateService(updatedService) {
    const newList = services.map((item) =>
      item.id === updatedService.id ? updatedService : item
    );
    setServices(newList);
  }

  function deleteService(id) {
    setServices(services.filter((item) => item.id !== id));
  }

  // ---------- ISSUE functions ----------
  function addIssue(newIssue) {
    setIssues([...issues, newIssue]);
  }

  // Opens the form of one section (used by the home cards and the "Add" buttons)
  function openForm(sectionName) {
    setActiveForm(sectionName);
    setFormOpen(true);
  }

  // Closes the form (the list below it stays visible)
  function closeForm() {
    setFormOpen(false);
  }

  // Changing the page also closes any open form
  function goToPage(pageName) {
    setPage(pageName);
    setActiveForm("");
    setFormOpen(false);
    window.scrollTo(0, 0);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar page={page} goToPage={goToPage} />

      <main className="flex-1">
        {page === "home" && (
          <>
            <LandingPage activeForm={activeForm} openForm={openForm} goToPage={goToPage} />

            <div id="home-section" className="max-w-6xl mx-auto px-4 pb-10">
              {activeForm === "category" && (
                <CategorySection
                  categories={categories}
                  departments={departments}
                  services={services}
                  issues={issues}
                  addCategory={addCategory}
                  updateCategory={updateCategory}
                  deleteCategory={deleteCategory}
                  formOpen={formOpen}
                  openForm={openForm}
                  closeForm={closeForm}
                />
              )}

              {activeForm === "department" && (
                <DepartmentSection
                  categories={categories}
                  departments={departments}
                  services={services}
                  issues={issues}
                  addDepartment={addDepartment}
                  updateDepartment={updateDepartment}
                  deleteDepartment={deleteDepartment}
                  formOpen={formOpen}
                  openForm={openForm}
                  closeForm={closeForm}
                />
              )}

              {activeForm === "service" && (
                <ServiceSection
                  categories={categories}
                  departments={departments}
                  services={services}
                  addService={addService}
                  updateService={updateService}
                  deleteService={deleteService}
                  formOpen={formOpen}
                  openForm={openForm}
                  closeForm={closeForm}
                />
              )}
            </div>
          </>
        )}

        {page === "departments" && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <DepartmentSection
              categories={categories}
              departments={departments}
              services={services}
              issues={issues}
              addDepartment={addDepartment}
              updateDepartment={updateDepartment}
              deleteDepartment={deleteDepartment}
              formOpen={formOpen}
              openForm={openForm}
              closeForm={closeForm}
            />
          </div>
        )}

        {page === "services" && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <ServiceSection
              categories={categories}
              departments={departments}
              services={services}
              addService={addService}
              updateService={updateService}
              deleteService={deleteService}
              formOpen={formOpen}
              openForm={openForm}
              closeForm={closeForm}
            />
          </div>
        )}

        {page === "issues" && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <IssueSection
              categories={categories}
              departments={departments}
              issues={issues}
              addIssue={addIssue}
            />
          </div>
        )}
      </main>

      <footer className="bg-navydark text-gray-200 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          Tamil Nadu Government - Citizen Services & Issue Management. Content owned and
          maintained by the Government of Tamil Nadu.
        </div>
      </footer>
    </div>
  );
}

export default App;
