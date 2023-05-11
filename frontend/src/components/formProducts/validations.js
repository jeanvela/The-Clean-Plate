export const validate = (values) => {
  let errors = {};
if (!values.name) {
  errors.name = "Product name is required";
} else if (values.name.length < 3) {
  errors.name = "The product name must have at least 3 characters";
}
if (!values.price) {
  errors.price = "Price is required";
} else if(!values.price || values.price < 0){
      errors.price = "Price must be greater than or equal to 0";
    }
if (!values.description) {
  errors.description = "Description is required";
}

if (!values.imageURL) {
  errors.imageURL = "Image URL is required";
}
return errors;
};
