const formData = { email: "", message: "" }

const form = document.querySelector('.feedback-form')
const LS_key = "feedback-form-state"
const emailInput = form.elements.email
const messageTextarea =form.elements.message


document.addEventListener('DOMContentLoaded', () => {
    const lsData = localStorage.getItem(LS_key)

    if (lsData) {
    Object.assign(formData, JSON.parse(lsData));
    emailInput.value = formData.email || "";
    messageTextarea.value = formData.message || "";
}
});

form.addEventListener("input", event => {
    const { name, value } = event.target;
    formData[name] = value.trim();
localStorage.setItem(LS_key, JSON.stringify(formData));
})

form.addEventListener('submit', event => {
    event.preventDefault()
    if (!formData.email || !formData.message) {
        alert("Fill all fields");
        return;
    }

    console.log(formData);
   
    localStorage.removeItem(LS_key)
    formData.email = "";
    formData.message = "";
    form.reset()
})



