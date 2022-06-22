const ExampleComponent = () => {
  // As first argument we passing initial values
  // As second argument validation config
  const form = useForm(
    { username: "", password: "" },
    { username: [(value) => (value === "" ? "This field is required" : "")] }
  );

  form.keys; // Returns ['username', 'password']
  form.values; // Object which contains values

  form.invalid; // Determines is form invalid
  form.valid; // Negation of invalid
  form.progress; // Progress in percentage
  form.validCount; // Count of valid fields
  form.invalidCount; // Count of invalid fields
  form.errors; // Object which contains errors or empty strings

  form.touched; // Indicates is any value in form changed
  form.untouched; // Negation of touched
  form.confirmed; // Indicates that form was confirmed
  form.unconfirmed; // Negation of confirmed

  form.set("username", "pablo"); // Sets value and runs validation
  form.change({ target: { value: "pablo", name: "username" } }); // Same as above but handled via native change event

  form.reset(); // Resets state to initial

  form.confirm(); // Runs validation for whole form
  form.submit({ preventDefault: () => {} }); // Same as above but in addition calls preventDefault()

  const sub = form.on("username").subscribe(({ key, value }) => {
    // Allows to perform side effects on dedicated field change
  });
};
