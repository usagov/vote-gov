let id = (id) => document.getElementById(id);
let user = id("loginUser"),
  pass = id("loginPass"),
  confirm = id("loginConfirm"),
  error = id("loginError"),
  dialog = id("loginDialog"),
  container = id("protoContainer");

const loginCred = {
  user: 'dm90ZS1nb3YtcHJvdG90eXBl',
  pass: 'cGFzc3dvcmQ='
};

dialog.showModal();

confirm.addEventListener("click", (event) => {
  event.preventDefault();
  validate();
});

const validate = () => {
  let testPass = btoa(pass.value) === loginCred.pass;
  let testUser = btoa(user.value) === loginCred.user;

  if (testPass && testUser) {
    success();
  } else {
    error.removeAttribute("hidden");
  }
}

const success = () => {
  dialog.close();
  container.removeAttribute("hidden");
}

// Allow developers to disable login by setting data attribute on dialog element.
let status = dialog.getAttribute('data-enabled');
if (status == "false") {
  success();
}