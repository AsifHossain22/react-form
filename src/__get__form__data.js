/*
 *1. e.target.[name of the input field].value
 *2. use form action and formData in the action handler. formData.get("name of the input field")
 *3. controlled component. one per each field. use state on change of the field. useful to dynamicically handle error.
 *4. handle all controlled field on one state.
 * const [formData, setFormData] = useState({
 * name: "",
 * password: "",
 * phone: "",
 * })
 */
